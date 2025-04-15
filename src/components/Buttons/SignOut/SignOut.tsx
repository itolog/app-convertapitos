"use client";

import { signOut } from "next-auth/react";

import useErrors from "@/hooks/errors/useErrors";

import CoButton from "@/components/Buttons/CoButton/CoButton";

const SignOut = () => {
  const { handleError } = useErrors();

  const handleLogOut = async () => {
    try {
      await signOut({ redirectTo: "/" });
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
