"use client";

import { useCallback } from "react";

import usePageAnimations from "@/hooks/animations/usePageAnimations";

import CoButton from "@/components/Buttons/CoButton/CoButton";

const SignInButton = () => {
  const { animatePageOut } = usePageAnimations();

  const handleSignIn = useCallback(async () => {
    animatePageOut("/auth");
  }, [animatePageOut]);

  return (
    <CoButton
      onClick={handleSignIn}
      type={"button"}
      text={"Sign In"}
      textProps={{ target: "Auth" }}
    />
  );
};

export default SignInButton;
