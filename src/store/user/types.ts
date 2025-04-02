import { User } from "next-auth";

export interface Me extends User {
  emailVerified?: string;
}

export type UserStatus = "loading" | "authenticated" | "unauthenticated";

export interface UserPayload {
  user?: Me | null;
  status: UserStatus;
}

export interface UserState {
  me?: Me | null;
  status: UserStatus;
}
