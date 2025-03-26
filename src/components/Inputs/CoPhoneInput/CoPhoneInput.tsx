import React, { FC } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import { CoPhoneInputProps } from "@/components/Inputs/CoPhoneInput/types";

const CoPhoneInput: FC<CoPhoneInputProps> = (props) => {
  return <PhoneInput className={"mb-0"} {...props} />;
};

export default CoPhoneInput;
