const payloadToFormData = (payload: Record<string, any>) => {
	const formData = new FormData();

	Object.entries(payload ?? {}).map(([key, value]) => {
		formData.append(key, value);
	});

	return formData;
};

export default payloadToFormData;
