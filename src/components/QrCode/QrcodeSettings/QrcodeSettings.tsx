import React from "react";

import { useTranslations } from "next-intl";

import SettingItem from "@/components/QrCode/QrcodeSettings/components/SettingItem/SettingItem";
import { settings } from "@/components/QrCode/QrcodeSettings/data/settings";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QrcodeSettings = () => {
  const t = useTranslations();

  return (
    <Accordion type="single" className={"w-full md:min-w-[335px]"} collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{t("Styling")}</AccordionTrigger>
        <AccordionContent>
          <div className={"grid grid-cols-1 gap-5 md:grid-cols-2"}>
            {settings.map((item) => {
              return <SettingItem key={item?.id} item={item} />;
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default QrcodeSettings;
