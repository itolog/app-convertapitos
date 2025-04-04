"use client";

import { useSession } from "next-auth/react";
import { useCallback } from "react";

import { useAppDispatch } from "@/store/hooks";
import { Me } from "@/store/user/types";
import { setUser as _setUser } from "@/store/user/userSlice";

const useUser = () => {
  const session = useSession();
  const dispatch = useAppDispatch();

  const setUser = useCallback(async () => {
    const user: Me | undefined = session?.data?.user;

    dispatch(
      _setUser({
        user,
        status: session.status,
      }),
    );
  }, [dispatch, session]);

  return { setUser };
};

export default useUser;
