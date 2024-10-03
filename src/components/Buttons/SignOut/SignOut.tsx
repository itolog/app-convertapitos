"use client";

import { signOut } from "next-auth/react";
import React, { FC } from "react";

import useErrors from "@/hooks/errors/useErrors";

import CoButton from "@/components/Buttons/CoButton/CoButton";

interface SignOutProps {
  onClick?: () => void;
}

const SignOut: FC<SignOutProps> = ({ onClick }) => {
  const { handleError } = useErrors();

  const handleLogOut = async () => {
    try {
      await signOut();

      if (onClick) {
        onClick();
      }
    } catch (e) {
      handleError(e, {
        withSnackbar: true,
      });
    }
  };

  return (
    <CoButton
      onClick={handleLogOut}
      type={"button"}
      text={"Sign Out"}
      textProps={{ target: "Auth" }}
    />
  );
};

export default SignOut;
