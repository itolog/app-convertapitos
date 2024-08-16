interface Error {
	message: string;
	status: number;
}

export interface ResponseError {
	data: Error;
}

export interface ApiResponse<T> {
	data?: T | null;
	error?: Error | null;
}
