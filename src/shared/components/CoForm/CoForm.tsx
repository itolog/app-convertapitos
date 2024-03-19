import { ReactNode } from "@tanstack/react-router";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface Props<T extends FieldValues> {
	children: ReactNode;
	onSubmit: SubmitHandler<T>;
}

const CoForm = <T extends object>({ children, onSubmit }: Props<T>) => {
	const { handleSubmit, formState } = useForm<T>();

	const handleFormSubmit: SubmitHandler<T> = (data) => {
		onSubmit(data);
	};

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)}>
			{children}
			<button type="submit" disabled={formState.isSubmitting}>
				Submit
			</button>
		</form>
	);
};

export default CoForm;
