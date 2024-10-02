import {
	CornerDotType,
	CornerSquareType,
	DotType,
	DrawType,
	ErrorCorrectionLevel,
	Mode,
	Options,
	TypeNumber,
} from "qr-code-styling";

export const qrcodeDefaultOptions: Options = {
	width: 300,
	height: 300,
	type: "svg" as DrawType,
	data: "http://qr-code-styling.com",
	image: "/favicon.ico",
	margin: 10,
	qrOptions: {
		typeNumber: 0 as TypeNumber,
		mode: "Byte" as Mode,
		errorCorrectionLevel: "Q" as ErrorCorrectionLevel,
	},
	imageOptions: {
		hideBackgroundDots: true,
		imageSize: 0.4,
		margin: 20,
		crossOrigin: "anonymous",
	},
	dotsOptions: {
		color: "#222222",
		// gradient: {
		//   type: 'linear', // 'radial'
		//   rotation: 0,
		//   colorStops: [{ offset: 0, color: '#8688B2' }, { offset: 1, color: '#77779C' }]
		// },
		type: "rounded" as DotType,
	},
	backgroundOptions: {
		color: "#5FD4F3",
		// gradient: {
		//   type: 'linear', // 'radial'
		//   rotation: 0,
		//   colorStops: [{ offset: 0, color: '#ededff' }, { offset: 1, color: '#e6e7ff' }]
		// },
	},
	cornersSquareOptions: {
		color: "#222222",
		type: "extra-rounded" as CornerSquareType,
		// gradient: {
		//   type: 'linear', // 'radial'
		//   rotation: 180,
		//   colorStops: [{ offset: 0, color: '#25456e' }, { offset: 1, color: '#4267b2' }]
		// },
	},
	cornersDotOptions: {
		color: "#222222",
		type: "dot" as CornerDotType,
		// gradient: {
		//   type: 'linear', // 'radial'
		//   rotation: 180,
		//   colorStops: [{ offset: 0, color: '#00266e' }, { offset: 1, color: '#4060b3' }]
		// },
	},
};
