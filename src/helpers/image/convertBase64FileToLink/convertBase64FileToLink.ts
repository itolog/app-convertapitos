interface Payload {
  base64: File | Blob | string;
  mimeType: string;
}

const convertBase64FileToLink = (payload: Payload) => {
  return `data:${payload.mimeType};base64,${payload.base64}`;
};

export default convertBase64FileToLink;
