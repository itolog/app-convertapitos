import React, { FC, useEffect, useRef, useState } from "react";

import QRCodeStyling, { Options } from "qr-code-styling";

interface CoQrCodeProps {
	options: Options;
}

const CoQrCode: FC<CoQrCodeProps> = ({ options }) => {
	const ref = useRef<HTMLDivElement>(null);
	const [qrCode] = useState<QRCodeStyling>(new QRCodeStyling(options));

	useEffect(() => {
		if (ref.current) {
			qrCode.append(ref.current);
		}
	}, [qrCode, ref]);

	useEffect(() => {
		if (!qrCode) return;
		qrCode.update(options);
	}, [qrCode, options]);

	return (
		<div>
			<div ref={ref} />
		</div>
	);
};

export default CoQrCode;
