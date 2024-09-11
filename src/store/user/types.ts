export interface Me {
	id?: string;
	name?: string | null;
	email?: string | null;
	image?: string | null;
	emailVerified?: string | null;
}

export type User = Me | null | undefined;
export type UserStatus = "loading" | "authenticated" | "unauthenticated";

export interface UserPayload {
	user: User;
	status: UserStatus;
}

export interface UserState {
	me: User;
	status: UserStatus;
}
