const payloadToFormData = (payload: object) => {
  const formData = new FormData();

  Object.entries(payload ?? {}).map(([key, value]) => {
    formData.append(key, value);
  });

  return formData;
};

export default payloadToFormData;
