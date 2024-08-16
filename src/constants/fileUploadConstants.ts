export const FILE_EXTENSION = {
	AVIF: "avif",
	BMP: "bmp",
	// DDS: "dds",
	GIF: "gif",
	// HDR: "hdr",
	ICO: "ico",
	JPEG: "jpeg",
	EXR: "exr",
	PNG: "png",
	PNM: "pnm",
	QOI: "qoi",
	TGA: "tga",
	TIFF: "tiff",
	WebP: "webp",
};

export const SUPPORTED_IMAGE_FORMATS = Object.values(FILE_EXTENSION);

export const ACCEPTED_IMAGE_TYPES = Object.values(FILE_EXTENSION).map((item) => {
	return `image/${item}`;
});
