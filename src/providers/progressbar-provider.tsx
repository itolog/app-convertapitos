"use client";

import { ReactNode } from "react";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const options = { showSpinner: true };

const ProgressBarProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar height="4px" color="#29d" options={options} shallowRouting />
    </>
  );
};

export default ProgressBarProvider;
