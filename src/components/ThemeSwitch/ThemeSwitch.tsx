"use client";

import { FC, useCallback, useRef, useState } from "react";

import cl from "classnames";
import { useTheme } from "next-themes";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";

import classes from "./themeSwitch.module.scss";

const options = ["dark", "light", "system"] as const;
type Options = (typeof options)[number];

interface ThemeSwitchProps {
	fullWidth?: boolean;
	close?: () => void;
}

const ThemeSwitch: FC<ThemeSwitchProps> = ({ fullWidth = true, close }) => {
	const { theme, setTheme } = useTheme();

	const [open, setOpen] = useState(false);
	const anchorRef = useRef<HTMLDivElement>(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event: Event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
			return;
		}

		setOpen(false);
	};

	const handleMenuItemClick = useCallback(
		(option: Options) => {
			setTheme(option);

			setOpen(false);

			if (close) {
				close();
			}
		},
		[close, setTheme],
	);

	return (
		<>
			<ButtonGroup
				fullWidth={fullWidth}
				variant="outlined"
				ref={anchorRef}
				aria-label="Button group with a nested menu">
				<Button
					classes={{
						root: cl(classes.themeBtnRoot, {
							[classes.themeBtnRootFullWidth]: fullWidth,
						}),
					}}
					onClick={handleToggle}>
					{theme}
				</Button>
				<Button
					classes={{
						root: cl(classes.themeArrow),
					}}
					size="small"
					aria-controls={open ? "split-button-menu" : undefined}
					aria-expanded={open ? "true" : undefined}
					aria-label="select merge strategy"
					aria-haspopup="menu"
					onClick={handleToggle}>
					<ArrowDropDownIcon />
				</Button>
			</ButtonGroup>
			<Popper
				sx={{
					zIndex: 1,
					width: "100%",
					maxWidth: "248px",
				}}
				open={open}
				anchorEl={anchorRef.current}
				role={undefined}
				transition
				disablePortal>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{
							transformOrigin: placement === "bottom" ? "center top" : "center bottom",
						}}>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList
									classes={{
										root: "co-menu--list co-menu--list__column",
									}}
									id="split-button-menu"
									autoFocusItem>
									{options.map((option) => (
										<MenuItem
											classes={{
												root: "co-menu--item",
											}}
											key={option}
											selected={option === theme}
											onClick={() => handleMenuItemClick(option)}>
											{option}
										</MenuItem>
									))}
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</>
	);
};

export default ThemeSwitch;
