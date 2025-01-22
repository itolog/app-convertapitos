import React, { FC, useCallback } from "react";

import cl from "clsx";
import { useTranslations } from "next-intl";
import { type DotType } from "qr-code-styling";

import CoSelect from "@/components/Inputs/CoSelect/CoSelect";
import { OPTION_KEYS } from "@/components/QrCode/data/qrcode";
import ColorSetting from "@/components/QrCode/QrcodeSettings/components/SettingItem/components/ColorSetting/ColorSetting";
import { coSelectOptions } from "@/components/QrCode/QrcodeSettings/data/settings";
import { SettingsOption } from "@/components/QrCode/types";

import { useAppDispatch } from "@/store/hooks";
import { updateType } from "@/store/qrcode/qrcodeSlice";

interface SettingItemProps {
  item: SettingsOption;
}

const SettingItem: FC<SettingItemProps> = ({ item: { id, ...items } }) => {
  const t = useTranslations();
  const dispatch = useAppDispatch();

  const handleChangeType = useCallback(
    (type: string) => {
      dispatch(
        updateType({
          id,
          type: type as DotType,
        }),
      );
    },
    [dispatch, id],
  );

  return (
    <section
      className={"border-solid border-2  dark:border-cyan-900 border-black rounded-md py-4 px-1"}
      key={id}>
      <h2 className={"font-semibold capitalize"}>{t(id)}</h2>
      <ul className={"flex flex-col gap-5 p-2"}>
        {Object.keys(items ?? {}).map((option) => {
          return (
            <li
              key={option}
              className={cl("flex overflow-hidden", {
                "flex-1": option === OPTION_KEYS.TYPE,
              })}>
              {option === OPTION_KEYS.COLOR && <ColorSetting id={id} />}
              {option === OPTION_KEYS.TYPE && (
                <CoSelect
                  classes={{
                    root: "w-full overflow-hidden",
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
