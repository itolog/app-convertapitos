"use client";

import {
	cloneElement,
	FC,
	PropsWithChildren,
	ReactElement,
	ReactNode,
	useCallback,
	useState,
} from "react";

import cl from "classnames";
import { bindPopper, bindTrigger } from "material-ui-popup-state";
import { PopupState, usePopupState } from "material-ui-popup-state/hooks";

import { Fade } from "@mui/material";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import { PopperProps } from "@mui/material/Popper/Popper";

import styles from "./coPopper.module.scss";

interface Classes {
	coPopper?: string;
	popper?: string;
	popoverRoot?: string;
	arrow?: string;
	content?: string;
}

interface CoPopperProps extends Omit<PopperProps, "open"> {
	trigger: ReactElement;
	arrow?: boolean;
	classes?: Classes;
	renderChildren?: (props: PopupState) => ReactNode;
}

const CoPopper: FC<PropsWithChildren<CoPopperProps>> = ({
	arrow = false,
	classes,
	children,
	trigger,
	renderChildren,
	...props
}) => {
	const popupState = usePopupState({
		variant: "popper",
		popupId: "coPopper",
	});

	const [arrowRef, setArrowRef] = useState<HTMLElement | null>(null);
	const [childNode, setChildNode] = useState<HTMLElement | null>(null);

	const coPopperClass = cl(styles.coPopper, classes?.coPopper);
	const popperClass = cl(styles.popper, classes?.popper);
	const popoverRootClass = cl(styles.popoverRoot, classes?.popoverRoot, {
		[styles.popoverRootWithoutArrow]: !arrow,
	});
	const arrowClass = cl(styles.arrow, classes?.arrow);
	const contentClass = cl(styles.content, classes?.content);

	const handleClickAway = useCallback(() => {
		popupState.close();
	}, [popupState]);

	return (
		<div className={coPopperClass}>
			{cloneElement(trigger, {
				...trigger.props,
				ref: setChildNode,
				...bindTrigger(popupState),
				className: styles.trigger,
			})}
			<Popper
				sx={{ zIndex: 100 }}
				disablePortal={false}
				{...bindPopper(popupState)}
				anchorEl={childNode}
				modifiers={[
					{
						name: "flip",
						enabled: true,
						options: {
							altBoundary: true,
							rootBoundary: "viewport",
							padding: 8,
						},
					},
					{
						name: "preventOverflow",
						enabled: true,
						options: {
							altAxis: false,
							altBoundary: false,
							tether: false,
							rootBoundary: "document",
							padding: 8,
						},
					},
					{
						name: "arrow",
						enabled: true,
						options: {
							element: arrowRef,
						},
					},
				]}
				transition
				className={popperClass}
				{...props}>
				{({ TransitionProps }) => (
					<Fade {...TransitionProps} timeout={350}>
						<Paper className={popoverRootClass}>
							<ClickAwayListener onClickAway={handleClickAway}>
								<Paper className={popoverRootClass}>
									{arrow ? <span id="arrow" className={arrowClass} ref={setArrowRef} /> : null}
									<Box className={contentClass}>
										{renderChildren && renderChildren(popupState)}
										{children && children}
									</Box>
								</Paper>
							</ClickAwayListener>
						</Paper>
					</Fade>
				)}
			</Popper>
		</div>
	);
};

export default CoPopper;
