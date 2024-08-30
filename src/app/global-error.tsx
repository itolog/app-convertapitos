"use client";

import { useEffect } from "react";

import useErrors from "@/hooks/errors/useErrors";

import PageError from "@/components/Errors/PageError/PageError";

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const { handleError } = useErrors();

	useEffect(() => {
		handleError(error);
	}, [error, handleError]);

	return (
		<html>
			<body>
				<PageError reset={reset} />
			</body>
		</html>
	);
}
