import React from "react";

import type { Metadata } from "next";

import DevPlaceholder from "@/components/ui/DevPlaceholder/DevPlaceholder";

export const metadata: Metadata = {
  title: "Text to speech",
  description:
    "Преобразование текста в речь, Text to speech. Converter text to voice with natural sounding voices. Free mp3 download.",
  keywords: ["text to speech", "tts", "converter text to voice"],
};

const Page = () => {
  return (
    <div className={"flex items-center justify-center"}>
      <DevPlaceholder />
    </div>
  );
};

export default Page;
