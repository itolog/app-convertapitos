import { FC } from "react";

import { Skeleton } from "@/components/ui/skeleton";

interface CoDrawerSkeletonProps {
  visible: boolean;
  itemsCount?: number;
}

const CoDrawerSkeleton: FC<CoDrawerSkeletonProps> = ({ visible, itemsCount = 2 }) => {
  if (!visible) return null;

  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: itemsCount }, (value, key) => key).map((i) => {
        return <Skeleton key={i} className="w-full h-[20px] rounded-sm" />;
      })}
    </div>
  );
};

export default CoDrawerSkeleton;
