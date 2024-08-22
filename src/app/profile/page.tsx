"use client";

import React from "react";

import { useAppSelector } from "@/store/hooks";
import { getUser } from "@/store/user/selectors";

const Page = () => {
	const user = useAppSelector(getUser);

	return <div>{user.image}</div>;
};

export default Page;
