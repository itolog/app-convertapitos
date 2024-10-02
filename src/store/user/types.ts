import { User } from "next-auth";

export interface Me extends User {
  emailVerified?: string;
}

// export type User = Me | null | undefined;
export type UserStatus = "loading" | "authenticated" | "unauthenticated";

export interface UserPayload {
  user: Me | undefined | null;
  status: UserStatus;
}

export interface UserState {
  me: Me | undefined | null;
  status: UserStatus;
}
