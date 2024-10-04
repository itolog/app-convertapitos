import React, { FC, SetStateAction, useCallback } from "react";

import cl from "clsx";
import { useTranslations } from "next-intl";
import { Options } from "qr-code-styling";

import CoColorPicker from "@/components/Inputs/CoColorPicker/CoColorPicker";
import CoSelect from "@/components/Inputs/CoSelect/CoSelect";
import { OPTION_KEYS } from "@/components/QrCode/data/qrcode";
import { coSelectOptions } from "@/components/QrCode/QrcodeSettings/data/settings";
import { SettingsOption } from "@/components/QrCode/QrcodeSettings/types";

interface SettingItemProps {
  item: SettingsOption;
  setOptions: (value: SetStateAction<Options>) => void;
  options: Options;
}

const SettingItem: FC<SettingItemProps> = ({ item, options, setOptions }) => {
  const t = useTranslations();

  const handleChangeColor = useCallback(
    (color: string) => {
      setOptions((prevState) => {
        return {
          ...prevState,
          [item.label]: {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            ...prevState[item.label],
            color,
          },
        };
      });
    },
    [item, setOptions],
  );

  const handleChangeType = useCallback(
    (type: string) => {
      setOptions((prevState) => {
        return {
          ...prevState,
          [item.label]: {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            ...prevState[item.label],
            type,
          },
        };
      });
    },
    [item, setOptions],
  );

  return (
    <section key={item.label}>
      <h2 className={"font-semibold capitalize"}>{t(item.label)}</h2>
      <ul className={"flex gap-5 items-center p-2"}>
        {Object.keys(item?.settings ?? {}).map((option) => {
          return (
            <li
              key={option}
              className={cl("flex overflow-hidden", {
                "flex-1": option === OPTION_KEYS.TYPE,
              })}>
              {option === OPTION_KEYS.COLOR && (
                <CoColorPicker
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error
                  color={options[item.label].color}
                  handleChangeColor={handleChangeColor}
                />
              )}
              {option === OPTION_KEYS.TYPE && (
                <CoSelect
                  classes={{
                    trigger: "w-full overflow-hidden",
                  }}
                  placeholder={"Type"}
                  options={coSelectOptions}
                  onChange={handleChangeType}
                />
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SettingItem;
