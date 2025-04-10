"use client";

import { useSession } from "next-auth/react";
import { useCallback, useEffect } from "react";

import useErrors from "@/hooks/errors/useErrors";

import { useAppDispatch } from "@/store/hooks";
import { Me } from "@/store/user/types";
import { setUser as _setUser } from "@/store/user/userSlice";

const useUser = () => {
  const session = useSession();
  const dispatch = useAppDispatch();
  const { handleError } = useErrors();

  const setUser = useCallback(async () => {
    const user: Me | undefined = session?.data?.user;

    dispatch(
      _setUser({
        user,
        status: session.status,
      }),
    );
  }, [dispatch, session]);

  useEffect(() => {
    (async () => {
      try {
        await setUser();
      } catch (e) {
        handleError(e);
      }
    })();
  }, [handleError, setUser]);

  return { loading: session.status === "loading" };
};

export default useUser;
