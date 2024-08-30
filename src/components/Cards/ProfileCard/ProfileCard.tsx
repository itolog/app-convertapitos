"use client";

import React from "react";

import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { deepPurple } from "@mui/material/colors";
import Skeleton from "@mui/material/Skeleton";

import CoCard from "@/components/Cards/CoCard/CoCard";
import CoText from "@/components/UI/CoText/CoText";

import { useAppSelector } from "@/store/hooks";
import { getUser } from "@/store/user/selectors";

import styles from "./profileCard.module.scss";

const bgcolor = "lightgray";
const avatarSize = 56;

const ProfileCard = () => {
	const user = useAppSelector(getUser);

	return (
		<CoCard>
			<Card
				classes={{
					root: styles.Card,
				}}>
				<CardHeader
					sx={{
						alignItems: "flex-start",
					}}
					avatar={
						user ? (
							<Avatar
								src={user?.image ?? undefined}
								alt={user?.name ?? undefined}
								sx={{
									bgcolor: deepPurple[500],
									width: avatarSize,
									height: avatarSize,
									alignItems: "center",
								}}
							/>
						) : (
							<Skeleton
								sx={{ bgcolor }}
								animation="wave"
								variant="circular"
								width={avatarSize}
								height={avatarSize}
							/>
						)
					}
					title={
						user ? (
							<CoText text={user?.name} />
						) : (
							<Skeleton
								sx={{ bgcolor }}
								animation="wave"
								height={40}
								width="100%"
								style={{ marginBottom: 6 }}
							/>
						)
					}
					subheader={
						user ? (
							<CoText variant={"h5"} text={user?.email} />
						) : (
							<Skeleton sx={{ bgcolor }} animation="wave" height={28} width="100%" />
						)
					}
				/>
			</Card>
		</CoCard>
	);
};

export default ProfileCard;
