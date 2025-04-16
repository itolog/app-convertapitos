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
