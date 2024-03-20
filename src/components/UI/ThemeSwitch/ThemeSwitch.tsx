import { useCallback, useMemo, useRef, useState } from "react";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";

import { useAppDispatch, useAppSelector } from "@/store/hooks.ts";
import { getTheme } from "@/store/settings/selectors.ts";
import { setTheme } from "@/store/settings/settingsSlice.ts";
import { ThemeOptions } from "@/store/settings/types.ts";

import classes from "./themeSwitch.module.scss";

const options: ThemeOptions[] = ["dark", "light", "system"];

const ThemeSwitch = () => {
	const dispatch = useAppDispatch();
	const theme = useAppSelector(getTheme);

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

	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

	const handleMenuItemClick = useCallback(
		(option: ThemeOptions) => {
			if (option === "system") {
				dispatch(setTheme(prefersDarkMode ? "system-dark" : "system-light"));
			} else {
				dispatch(setTheme(option));
			}

			setOpen(false);
		},
		[dispatch, prefersDarkMode],
	);

	const themeName = useMemo(() => {
		if (theme === "system-light" || theme === "system-dark") {
			return "system";
		}

		return theme;
	}, [theme]);

	return (
		<>
			<ButtonGroup variant="outlined" ref={anchorRef} aria-label="Button group with a nested menu">
				<Button
					classes={{
						root: classes.themeBtnRoot,
					}}
					onClick={handleToggle}>
					{themeName}
				</Button>
				<Button
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
										root: "co-menu--list",
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
