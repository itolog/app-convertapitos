"use client";

import SignInButton from "@/components/Buttons/SignInButton/SignInButton";
import SignOut from "@/components/Buttons/SignOut/SignOut";
import { ThemeSwitch } from "@/components/ThemeSwitch/ThemeSwitch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useAppSelector } from "@/store/hooks";
import { getUser } from "@/store/user/selectors";

const AppSettings = () => {
	const user = useAppSelector(getUser);

	return (
		<div className="flex flex-row gap-2">
			<ThemeSwitch />
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Avatar className="h-9 w-9">
						<AvatarImage src={user?.image ?? undefined} alt={user?.name ?? "avatar"} />
						<AvatarFallback>JP</AvatarFallback>
						<span className="sr-only">Toggle user menu</span>
					</Avatar>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>My Account</DropdownMenuItem>
					<DropdownMenuItem>Settings</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>{user ? <SignOut /> : <SignInButton />}</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default AppSettings;
