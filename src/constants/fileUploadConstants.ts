export const FILE_EXTENSION = {
	AVIF: "AVIF",
	BMP: "BMP",
	DDS: "DDS",
	GIF: "GIF",
	HDR: "HDR",
	ICO: "ICO",
	JPEG: "JPEG",
	EXR: "EXR",
	PNG: "PNG",
	PNM: "PNM",
	QOI: "QOI",
	TGA: "TGA",
	TIFF: "TIFF",
	WebP: "WebP",
};

export const SUPPORTED_IMAGE_FORMATS = Object.values(FILE_EXTENSION);

export const ACCEPTED_IMAGE_TYPES = Object.values(FILE_EXTENSION).map((item) => {
	return `image/${item.toLowerCase()}`;
});
