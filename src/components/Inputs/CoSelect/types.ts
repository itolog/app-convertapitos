import React from "react";

export interface Option {
  label: string;
  value: string;
}

interface Classes {
  trigger?: string;
}

export interface CoSelectProps {
  options: Option[];
  onChange?: (value: string) => void;
  label?: string;
  placeholder?: string;
  classes?: Classes;
}
