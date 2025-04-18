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
import { Label } from "@/components/ui/label";

import { useAppDispatch } from "@/store/hooks";
import { setOptions, updateImageOptions, updateType } from "@/store/qrcode/qrcodeSlice";

interface SettingItemProps {
  item: SettingsOption;
}

const imageWrapperClass = "flex flex-col gap-2";

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
        "rounded-md border-2 border-solid border-black px-1 py-4 dark:border-cyan-900",
        {
          "grid-cols-1 md:col-span-2": id === "imageOptions",
        },
      )}
      key={id}>
      <h2 className={"font-semibold capitalize"}>{t(id)}</h2>
      <ul className={"grid grid-cols-2 gap-5 p-2"}>
        {Object.keys(items).map((option) => {
          return (
            <li
              key={option}
              className={cl("flex items-center overflow-hidden", {
                "col-span-2":
                  option === OPTION_KEYS.TYPE ||
                  option === OPTION_KEYS.COLOR ||
                  option === OPTION_KEYS.IMAGE,
              })}>
              {option === OPTION_KEYS.COLOR && <ColorSetting id={id} />}
              {option === OPTION_KEYS.IMAGE && <SimpleImageUpload onChange={handleUploadImage} />}
              {option === OPTION_KEYS.HIDE_BG_DOTS && (
                <div className={imageWrapperClass}>
                  <Label htmlFor={OPTION_KEYS.HIDE_BG_DOTS}>{t("Hide Background Dots")}</Label>
                  <Checkbox
                    id={OPTION_KEYS.HIDE_BG_DOTS}
                    name={OPTION_KEYS.HIDE_BG_DOTS}
                    defaultChecked={qrcodeDefaultOptions.imageOptions?.hideBackgroundDots}
                    onCheckedChange={handleChangeBgDots}
                  />
                </div>
              )}
              {option === OPTION_KEYS.IMAGE_SIZE && (
                <div className={imageWrapperClass}>
                  <Label htmlFor={OPTION_KEYS.IMAGE_SIZE}>{t("Image Size")}</Label>
                  <Input
                    id={OPTION_KEYS.IMAGE_SIZE}
                    type="number"
                    name={OPTION_KEYS.IMAGE_SIZE}
                    step={0.1}
                    max={1}
                    min={0}
                    defaultValue={qrcodeDefaultOptions.imageOptions?.imageSize}
                    onChange={handleChangeImage}
                  />
                </div>
              )}
              {option === OPTION_KEYS.MARGIN && (
                <div className={imageWrapperClass}>
                  <Label htmlFor={OPTION_KEYS.MARGIN}>{t("margin")}</Label>
                  <Input
                    id={OPTION_KEYS.MARGIN}
                    type="number"
                    name={OPTION_KEYS.MARGIN}
                    max={15}
                    min={0}
                    defaultValue={qrcodeDefaultOptions.imageOptions?.margin}
                    onChange={handleChangeImage}
                  />
                </div>
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
