export interface Me {
	id?: string;
	name?: string | null;
	email?: string | null;
	image?: string | null;
	emailVerified?: string | null;
}

export type User = Me | null | undefined;

export interface UserState {
	me: User;
}
