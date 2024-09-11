import { AnimationControls, Target, TargetAndTransition, VariantLabels } from "framer-motion";

export type MotionInitial = boolean | Target | VariantLabels;
export type MotionAnimate = AnimationControls | TargetAndTransition | VariantLabels | boolean;
