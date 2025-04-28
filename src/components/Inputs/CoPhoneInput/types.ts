import { PhoneInputProps } from "react-international-phone";

interface Classes {
  root?: string;
}

export interface CoPhoneInputProps extends PhoneInputProps {
  classes?: Classes;
  label?: string;
}
