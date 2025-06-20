/**
 * Builds a hierarchical tree structure from a flat array of items with parent-child relationships.
 *
 * This function recursively processes items to create a nested tree structure where each item
 * can have a `children` property containing its child items. The function filters items based
 * on their `parentId` and organizes them into a tree hierarchy.
 *
 * @template T - The type of items in the array. Must extend an object with `id` and `parentId` properties.
 * @param {T[]} items - An array of items to build the tree from. Each item must have an `id` and `parentId`.
 * @param {string | null} [parentId=null] - The parent ID to start building the tree from.
 *                                          Use `null` to get root-level items (items without a parent).
 * @returns {T[]} An array of items representing the tree structure, where each item may have
 *                a `children` property containing nested child items.
 *
 * @example
 * ```typescript
 * interface TreeItem {
 *   id: string;
 *   parentId: string | null;
 *   name: string;
 * }
 *
 * const items: TreeItem[] = [
 *   { id: '1', parentId: null, name: 'Root 1' },
 *   { id: '2', parentId: '1', name: 'Child 1' },
 *   { id: '3', parentId: '1', name: 'Child 2' },
 *   { id: '4', parentId: null, name: 'Root 2' }
 * ];
 *
 * const tree = buildTree(items);
 * ```
 * Returns:
 * @example
 * ```typescript
 *  [
 *    {
 *      id: '1',
 *      parentId: null,
 *      name: 'Root 1',
 *      children: [
 *        { id: '2', parentId: '1', name: 'Child 1', children: [] },
 *        { id: '3', parentId: '1', name: 'Child 2', children: [] }
 *      ]
 *    },
 *    { id: '4', parentId: null, name: 'Root 2', children: [] }
 *  ]
 * ```
 * @example
 * ```typescript
 * // Get children of a specific parent
 * const childrenOfParent1 = buildTree(items, '1');
 * // Returns only direct children of item with id '1'
 * ```
 */
export const buildTree = <T extends { id: string; parentId: string | null }>(
  items: T[],
  parentId: string | null = null,
): T[] => {
  return items
    .filter((item) => item.parentId === parentId)
    .map((item) => ({
      ...item,
      children: buildTree(items, item.id),
    }));
};
