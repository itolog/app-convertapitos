"use client";

import React from "react";

import Image from "next/image";

import CoCard from "@/components/Cards/CoCard/CoCard";
import { Skeleton } from "@/components/ui/skeleton";

import { useAppSelector } from "@/store/hooks";
import { getUser, getUserStatus } from "@/store/user/selectors";

const ProfileCard = () => {
	const user = useAppSelector(getUser);
	const userStatus = useAppSelector(getUserStatus);

	return (
		<CoCard>
			<div className="group relative p-6">
				<div className="relative h-[256px] w-[256px] overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
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
				<h3 className="mt-4 text-base font-semibold text-gray-900 dark:text-primary">
					{user?.name && userStatus !== "loading" && user?.name}
					{userStatus === "loading" && <Skeleton className="w-full h-[20px] mb-1 rounded-lg" />}
				</h3>
				<div className="text-sm text-gray-500 dark:text-gray-400">
					{user?.email && userStatus !== "loading" && user?.email}
					{userStatus === "loading" && <Skeleton className="w-full h-[20px] rounded-lg" />}
				</div>
			</div>
		</CoCard>
	);
};

export default ProfileCard;
