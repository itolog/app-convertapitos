"use client";

import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

import SignInButton from "@/components/Buttons/SignInButton/SignInButton";
import SignOut from "@/components/Buttons/SignOut/SignOut";
import LangSwitcher from "@/components/Inputs/LangSwitcher/LangSwitcher";
import { ThemeSwitch } from "@/components/ThemeSwitch/ThemeSwitch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SvgIcons from "@/components/ui/SvgIcon/SvgIcons";

import { useAppSelector } from "@/store/hooks";
import { getUser } from "@/store/user/selectors";

const AppSettings = () => {
	const t = useTranslations();
	const user = useAppSelector(getUser);

	return (
		<div className="flex flex-row gap-2">
			<ThemeSwitch />
			<LangSwitcher />
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Avatar className="h-9 w-9">
						<AvatarImage src={user?.image ?? undefined} alt={user?.name ?? "avatar"} />
						<AvatarFallback>
							<SvgIcons
								classes={{
									root: "p-1",
								}}
								name={"anonymous"}
							/>
						</AvatarFallback>
						<span className="sr-only">Toggle user menu</span>
					</Avatar>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					{user && (
						<DropdownMenuItem>
							<Link className={"text-center w-full"} href={"/profile"}>
								{t("Profile")}
							</Link>
						</DropdownMenuItem>
					)}
					{user && <DropdownMenuSeparator />}
					<DropdownMenuItem>{user ? <SignOut /> : <SignInButton />}</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default AppSettings;
