import React, { FC, useCallback } from "react";

import cl from "clsx";
import { useTranslations } from "next-intl";
import { DotType } from "qr-code-styling/lib/types";

import CoColorPicker from "@/components/Inputs/CoColorPicker/CoColorPicker";
import CoSelect from "@/components/Inputs/CoSelect/CoSelect";
import { OPTION_KEYS } from "@/components/QrCode/data/qrcode";
import { coSelectOptions } from "@/components/QrCode/QrcodeSettings/data/settings";
import { SettingsOption } from "@/components/QrCode/types";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateColor, updateType } from "@/store/qrcode/qrcodeSlice";
import { getOptions } from "@/store/qrcode/selectors";

interface SettingItemProps {
  item: SettingsOption;
}

const SettingItem: FC<SettingItemProps> = ({ item }) => {
  const t = useTranslations();
  const dispatch = useAppDispatch();
  const options = useAppSelector(getOptions);

  const handleChangeColor = useCallback(
    (color: string) => {
      dispatch(
        updateColor({
          id: item.id,
          color: color,
        }),
      );
    },
    [dispatch, item.id],
  );

  const handleChangeType = useCallback(
    (type: string) => {
      dispatch(
        updateType({
          id: item.id,
          type: type as DotType,
        }),
      );
    },
    [dispatch, item.id],
  );

  return (
    <section key={item.id}>
      <h2 className={"font-semibold capitalize"}>{t(item.id)}</h2>
      <ul className={"flex gap-5 items-center p-2"}>
        {Object.keys(item ?? {}).map((option) => {
          return (
            <li
              key={option}
              className={cl("flex overflow-hidden", {
                "flex-1": option === OPTION_KEYS.TYPE,
              })}>
              {option === OPTION_KEYS.COLOR && (
                <CoColorPicker
                  color={options[item.id].color}
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
