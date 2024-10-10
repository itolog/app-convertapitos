import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return <div className={"flex items-center justify-center"}>{children}</div>;
}
