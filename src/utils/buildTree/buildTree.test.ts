import { buildTree } from "./buildTree";

interface TestItem {
  id: string;
  parentId: string | null;
  name: string;
  children?: TestItem[];
}

interface ExtendedTestItem {
  id: string;
  parentId: string | null;
  name: string;
  value: number;
  active: boolean;
  metadata?: Record<string, unknown>;
  children?: ExtendedTestItem[];
}

interface CustomItem {
  id: string;
  parentId: string | null;
  customField: string;
  numericalValue: number;
  children?: CustomItem[];
}

interface NavigationItem {
  id: string;
  parentId: string | null;
  href: string;
  label: string;
  enabled: boolean;
  children?: NavigationItem[];
}

describe("buildTree", () => {
  describe("core functionality", () => {
    it("should build a tree from flat array of items", () => {
      const items: TestItem[] = [
        { id: "1", parentId: null, name: "Root 1" },
        { id: "2", parentId: "1", name: "Child 1" },
        { id: "3", parentId: "1", name: "Child 2" },
        { id: "4", parentId: null, name: "Root 2" },
      ];

      const result = buildTree(items);

      expect(result).toHaveLength(2);
      expect(result[0]).toEqual({
        id: "1",
        parentId: null,
        name: "Root 1",
        children: [
          { id: "2", parentId: "1", name: "Child 1", children: [] },
          { id: "3", parentId: "1", name: "Child 2", children: [] },
        ],
      });
      expect(result[1]).toEqual({
        id: "4",
        parentId: null,
        name: "Root 2",
        children: [],
      });
    });

    it("should create multi-level hierarchy", () => {
      const items: TestItem[] = [
        { id: "1", parentId: null, name: "Root" },
        { id: "2", parentId: "1", name: "Level 1" },
        { id: "3", parentId: "2", name: "Level 2" },
        { id: "4", parentId: "3", name: "Level 3" },
      ];

      const result = buildTree(items);

      expect(result).toHaveLength(1);
      expect(result[0].children).toHaveLength(1);
      expect(result[0]?.children?.[0].children).toHaveLength(1);
      expect(result[0]?.children?.[0].children?.[0].children).toHaveLength(1);
      expect(result[0]?.children?.[0]?.children?.[0].children?.[0].name).toBe("Level 3");
    });

    it("should return children of specific parent when parentId is provided", () => {
      const items: TestItem[] = [
        { id: "1", parentId: null, name: "Root" },
        { id: "2", parentId: "1", name: "Child 1" },
        { id: "3", parentId: "1", name: "Child 2" },
        { id: "4", parentId: "2", name: "Grandchild" },
      ];

      const result = buildTree(items, "1");

      expect(result).toHaveLength(2);
      expect(result[0].name).toBe("Child 1");
      expect(result[1].name).toBe("Child 2");
      expect(result[0].children).toHaveLength(1);
      expect(result[0]?.children?.[0].name).toBe("Grandchild");
    });
  });

  describe("edge cases", () => {
    it("should return empty array for empty input array", () => {
      const result = buildTree([]);
      expect(result).toEqual([]);
    });

    it("should handle items with only root nodes", () => {
      const items: TestItem[] = [
        { id: "1", parentId: null, name: "Root 1" },
        { id: "2", parentId: null, name: "Root 2" },
      ];

      const result = buildTree(items);

      expect(result).toHaveLength(2);
      expect(result[0].children).toEqual([]);
      expect(result[1].children).toEqual([]);
    });

    it("should handle items with only child nodes (no roots)", () => {
      const items: TestItem[] = [
        { id: "2", parentId: "1", name: "Child 1" },
        { id: "3", parentId: "1", name: "Child 2" },
      ];

      const result = buildTree(items);

      expect(result).toEqual([]);
    });

    it("should return empty array when searching for non-existent parentId", () => {
      const items: TestItem[] = [
        { id: "1", parentId: null, name: "Root" },
        { id: "2", parentId: "1", name: "Child" },
      ];

      const result = buildTree(items, "nonexistent");

      expect(result).toEqual([]);
    });

    it("should handle circular references without infinite recursion", () => {
      const items: TestItem[] = [
        { id: "1", parentId: "2", name: "Item 1" },
        { id: "2", parentId: "1", name: "Item 2" },
      ];

      const result = buildTree(items);

      expect(result).toEqual([]);
    });

    it("should handle orphaned items gracefully", () => {
      const items: TestItem[] = [
        { id: "1", parentId: null, name: "Root" },
        { id: "2", parentId: "nonexistent", name: "Orphan" },
      ];

      const result = buildTree(items);

      expect(result).toHaveLength(1);
      expect(result[0].name).toBe("Root");
      expect(result[0].children).toEqual([]);
    });
  });

  describe("data preservation", () => {
    it("should preserve all original properties of items", () => {
      const items: ExtendedTestItem[] = [
        {
          id: "1",
          parentId: null,
          name: "Root",
          value: 100,
          active: true,
          metadata: { type: "root" },
        },
        {
          id: "2",
          parentId: "1",
          name: "Child",
          value: 50,
          active: false,
          metadata: { type: "child" },
        },
      ];

      const result = buildTree(items);

      expect(result[0]).toEqual(
        expect.objectContaining({
          id: "1",
          parentId: null,
          name: "Root",
          value: 100,
          active: true,
          metadata: { type: "root" },
        }),
      );
      expect(result[0]?.children?.[0]).toEqual(
        expect.objectContaining({
          id: "2",
          parentId: "1",
          name: "Child",
          value: 50,
          active: false,
          metadata: { type: "child" },
        }),
      );
    });

    it("should add children property to all items", () => {
      const items: TestItem[] = [
        { id: "1", parentId: null, name: "Root" },
        { id: "2", parentId: "1", name: "Child" },
      ];

      const result = buildTree(items);

      expect(result[0]).toHaveProperty("children");
      expect(result[0]?.children?.[0]).toHaveProperty("children");
      expect(result[0]?.children?.[0].children).toEqual([]);
    });
  });

  describe("performance and ordering", () => {
    it("should preserve original order of items", () => {
      const items: TestItem[] = [
        { id: "1", parentId: null, name: "Root" },
        { id: "3", parentId: "1", name: "Child C" },
        { id: "2", parentId: "1", name: "Child B" },
        { id: "4", parentId: "1", name: "Child A" },
      ];

      const result = buildTree(items);

      expect(result[0]?.children?.[0].name).toBe("Child C");
      expect(result[0]?.children?.[1].name).toBe("Child B");
      expect(result[0]?.children?.[2].name).toBe("Child A");
    });

    it("should handle large datasets without errors", () => {
      const items: TestItem[] = [];

      // Create 1000 items in a binary tree structure
      for (let i = 1; i <= 1000; i++) {
        items.push({
          id: i.toString(),
          parentId: i === 1 ? null : Math.floor(i / 2).toString(),
          name: `Item ${i}`,
        });
      }

      expect(() => buildTree(items)).not.toThrow();

      const result = buildTree(items);
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe("1");
    });
  });

  describe("type compatibility", () => {
    it("should work with different types extending base interface", () => {
      const items: CustomItem[] = [
        { id: "1", parentId: null, customField: "custom1", numericalValue: 42 },
        { id: "2", parentId: "1", customField: "custom2", numericalValue: 24 },
      ];

      const result = buildTree(items);

      expect(result[0].customField).toBe("custom1");
      expect(result[0].numericalValue).toBe(42);
      expect(result[0]?.children?.[0].customField).toBe("custom2");
      expect(result[0]?.children?.[0].numericalValue).toBe(24);
    });

    it("should work with navigation items structure", () => {
      const items: NavigationItem[] = [
        { id: "convert", parentId: null, href: "/convert", label: "Convert", enabled: true },
        {
          id: "convert-image",
          parentId: "convert",
          href: "/convert/image",
          label: "Image",
          enabled: true,
        },
        {
          id: "convert-text",
          parentId: "convert",
          href: "/convert/text",
          label: "Text",
          enabled: false,
        },
      ];

      const result = buildTree(items);

      expect(result).toHaveLength(1);
      expect(result[0].label).toBe("Convert");
      expect(result[0]?.children).toHaveLength(2);
      expect(result[0]?.children?.[0].label).toBe("Image");
      expect(result[0]?.children?.[1].label).toBe("Text");
      expect(result[0]?.children?.[1].enabled).toBe(false);
    });
  });

  describe("real-world scenarios", () => {
    it("should handle navigation menu structure correctly", () => {
      const items: TestItem[] = [
        { id: "dashboard", parentId: null, name: "Dashboard" },
        { id: "users", parentId: null, name: "Users" },
        { id: "users-list", parentId: "users", name: "User List" },
        { id: "users-create", parentId: "users", name: "Create User" },
        { id: "settings", parentId: null, name: "Settings" },
        { id: "settings-general", parentId: "settings", name: "General" },
        { id: "settings-security", parentId: "settings", name: "Security" },
      ];

      const result = buildTree(items);

      expect(result).toHaveLength(3);
      expect(result.find((item) => item.id === "users")?.children).toHaveLength(2);
      expect(result.find((item) => item.id === "settings")?.children).toHaveLength(2);
    });

    it("should handle category-subcategory structure", () => {
      const items: TestItem[] = [
        { id: "electronics", parentId: null, name: "Electronics" },
        { id: "phones", parentId: "electronics", name: "Phones" },
        { id: "smartphones", parentId: "phones", name: "Smartphones" },
        { id: "tablets", parentId: "electronics", name: "Tablets" },
        { id: "clothing", parentId: null, name: "Clothing" },
        { id: "mens", parentId: "clothing", name: "Men's Clothing" },
        { id: "womens", parentId: "clothing", name: "Women's Clothing" },
      ];

      const result = buildTree(items);

      expect(result).toHaveLength(2);
      const electronics = result.find((item) => item.id === "electronics");
      expect(electronics?.children).toHaveLength(2);
      expect(electronics?.children?.find((child) => child.id === "phones")?.children).toHaveLength(
        1,
      );
    });
  });
});
