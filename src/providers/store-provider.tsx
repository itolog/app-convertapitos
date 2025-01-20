"use client";

import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";

import { AppStore, store } from "@/store";

export default function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore>(null);
  if (!storeRef.current) {
    storeRef.current = store;
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
