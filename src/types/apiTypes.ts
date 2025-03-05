interface Error {
  message: string;
  status: number;
}

export interface ApiResponse<T> {
  data?: T | null;
  error?: Error | null;
}
