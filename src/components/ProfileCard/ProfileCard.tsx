"use client";

import React from "react";

import Image from "next/image";

import CoCard from "@/components/common/Cards/CoCard/CoCard";
import { Skeleton } from "@/components/ui/skeleton";

import { useAppSelector } from "@/store/hooks";
import { getUser, getUserStatus } from "@/store/user/selectors";

const ProfileCard = () => {
  const user = useAppSelector(getUser);
  const userStatus = useAppSelector(getUserStatus);

  return (
    <CoCard>
      <div className="group relative p-6">
        <div className="sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 relative h-[256px] w-[256px] overflow-hidden rounded-lg group-hover:opacity-75 sm:h-64">
          {user?.image && userStatus !== "loading" && (
            <Image
              alt={user?.name ?? "avatar"}
              src={user?.image ?? ""}
              width={256}
              height={256}
              priority
              className="h-full w-full object-cover object-center"
            />
          )}

          {!user?.image && userStatus === "loading" && (
            <Skeleton className="h-[256px] w-[256px] rounded-lg" />
          )}
        </div>
        <h3 className="dark:text-primary mt-4 text-base font-semibold text-gray-900">
          {user?.name && userStatus !== "loading" && user?.name}
          {userStatus === "loading" && <Skeleton className="mb-1 h-[20px] w-full rounded-lg" />}
        </h3>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {user?.email && userStatus !== "loading" && user?.email}
          {userStatus === "loading" && <Skeleton className="h-[20px] w-full rounded-lg" />}
        </div>
      </div>
    </CoCard>
  );
};

export default ProfileCard;
