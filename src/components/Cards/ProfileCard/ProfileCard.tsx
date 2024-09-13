"use client";

import React from "react";

import CoCard from "@/components/Cards/CoCard/CoCard";
import CoText from "@/components/ui/CoText/CoText";

import { useAppSelector } from "@/store/hooks";
import { getUser } from "@/store/user/selectors";

import styles from "./profileCard.module.css";

const ProfileCard = () => {
	const user = useAppSelector(getUser);

	return <CoCard>as</CoCard>;
};

export default ProfileCard;
