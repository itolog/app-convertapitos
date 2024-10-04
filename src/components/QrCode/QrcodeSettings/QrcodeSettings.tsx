import React, { FC, SetStateAction } from "react";

import { useTranslations } from "next-intl";
import { Options } from "qr-code-styling";

import SettingItem from "@/components/QrCode/QrcodeSettings/components/SettingItem/SettingItem";
import { settings } from "@/components/QrCode/QrcodeSettings/data/settings";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface QrcodeSettingsProps {
  setOptions: (value: SetStateAction<Options>) => void;
  options: Options;
}

const QrcodeSettings: FC<QrcodeSettingsProps> = ({ setOptions, options }) => {
  const t = useTranslations();

  return (
    <Accordion type="single" className={"w-full"} collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{t("Styling")}</AccordionTrigger>
        <AccordionContent>
          <div className={"grid grid-cols-1 md:grid-cols-2 gap-5"}>
            {settings.map((item) => {
              return (
                <SettingItem
                  key={item.label}
                  options={options}
                  item={item}
                  setOptions={setOptions}
                />
              );
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default QrcodeSettings;
