"use client";

import { SquareUser } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useAppSelector } from "@/store/hooks";
import { getUser } from "@/store/user/selectors";

const UserInfo = () => {
  const user = useAppSelector(getUser);

  return (
    <>
      <Avatar className="h-8 w-8 rounded-md">
        <AvatarImage src={user?.image ?? ""} alt={user?.name ?? "avatar"} />
        <AvatarFallback className={"rounded-md"}>
          <SquareUser />
        </AvatarFallback>
        <span className="sr-only">Toggle user menu</span>
      </Avatar>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">{user?.name}</span>
        <span className="truncate text-xs">{user?.email}</span>
      </div>
    </>
  );
};

export default UserInfo;
