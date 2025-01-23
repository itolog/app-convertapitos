import { CheckedState } from "@radix-ui/react-checkbox";
import React, { ChangeEvent, FC, useCallback } from "react";

import cl from "clsx";
import { FilePondFile } from "filepond";
import { useTranslations } from "next-intl";
import { type DotType } from "qr-code-styling";

import CoSelect from "@/components/Inputs/CoSelect/CoSelect";
import { OPTION_KEYS, qrcodeDefaultOptions } from "@/components/QrCode/data/qrcode";
import ColorSetting from "@/components/QrCode/QrcodeSettings/components/SettingItem/components/ColorSetting/ColorSetting";
import { coSelectOptions } from "@/components/QrCode/QrcodeSettings/data/settings";
import { SettingsOption } from "@/components/QrCode/types";
import SimpleImageUpload from "@/components/SimpleImageUpload/SimpleImageUpload";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

import { useAppDispatch } from "@/store/hooks";
import { setOptions, updateImageOptions, updateType } from "@/store/qrcode/qrcodeSlice";

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

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    dispatch(
      updateImageOptions({
        id,
        [name]: value,
      }),
    );
  };

  const handleChangeBgDots = (value: CheckedState) => {
    dispatch(
      updateImageOptions({
        id,
        [OPTION_KEYS.HIDE_BG_DOTS]: value,
      }),
    );
  };

  const handleUploadImage = useCallback(
    (file: FilePondFile) => {
      const value = file ? URL.createObjectURL(file.file) : "";
      dispatch(
        setOptions({
          [OPTION_KEYS.IMAGE]: value,
        }),
      );
    },
    [dispatch],
  );

  return (
    <section
      className={cl(
        "border-solid border-2  dark:border-cyan-900 border-black rounded-md py-4 px-1",
        {
          "col-span-2": id === "imageOptions",
        },
      )}
      key={id}>
      <h2 className={"font-semibold capitalize"}>{t(id)}</h2>
      <ul className={"grid grid-cols-2 gap-5 p-2"}>
        {Object.keys(items).map((option) => {
          return (
            <li
              key={option}
              className={cl("flex overflow-hidden items-center", {
                "col-span-2":
                  option === OPTION_KEYS.TYPE ||
                  option === OPTION_KEYS.COLOR ||
                  option === OPTION_KEYS.IMAGE,
              })}>
              {option === OPTION_KEYS.COLOR && <ColorSetting id={id} />}
              {option === OPTION_KEYS.IMAGE && <SimpleImageUpload onChange={handleUploadImage} />}
              {option === OPTION_KEYS.HIDE_BG_DOTS && (
                <Checkbox
                  name={OPTION_KEYS.HIDE_BG_DOTS}
                  defaultChecked={qrcodeDefaultOptions.imageOptions?.hideBackgroundDots}
                  onCheckedChange={handleChangeBgDots}
                />
              )}
              {option === OPTION_KEYS.IMAGE_SIZE && (
                <Input
                  type="number"
                  name={OPTION_KEYS.IMAGE_SIZE}
                  step={0.1}
                  max={1}
                  min={0}
                  defaultValue={qrcodeDefaultOptions.imageOptions?.imageSize}
                  onChange={handleChangeImage}
                />
              )}
              {option === OPTION_KEYS.MARGIN && (
                <Input
                  type="number"
                  name={OPTION_KEYS.MARGIN}
                  max={15}
                  min={0}
                  defaultValue={qrcodeDefaultOptions.imageOptions?.margin}
                  onChange={handleChangeImage}
                />
              )}

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
