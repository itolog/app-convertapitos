import { ChangeEvent, FC, useEffect, useState } from "react";

import { useTranslations } from "next-intl";

import { Input } from "@/components/common/ui/input";
import { Label } from "@/components/common/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/common/ui/radio-group";
import CoColorPicker from "@/components/Inputs/CoColorPicker/CoColorPicker";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateColor } from "@/store/qrcode/qrcodeSlice";
import { getOptions } from "@/store/qrcode/selectors";

interface ColorSettingProps {
  id: string;
}

const ColorSetting: FC<ColorSettingProps> = ({ id }) => {
  const t = useTranslations();
  const options = useAppSelector(getOptions);
  const dispatch = useAppDispatch();
  const [isGradient, setIsGradient] = useState(false);
  const [color, setColor] = useState(options[id].color);
  const [color2, setColor2] = useState(options[id].color);
  const [rotation, setRotation] = useState(90);

  const handleChangeType = (type: string) => {
    setIsGradient(type === "gradient");
  };

  const handleChangeColor = (color: string) => {
    setColor(color);
  };

  const handleChangeColor2 = (color: string) => {
    setColor2(color);
  };

  const handleChangeRotation = (e: ChangeEvent<HTMLInputElement>) => {
    setRotation(Number(e.target.value));
  };

  useEffect(() => {
    if (isGradient) {
      dispatch(
        updateColor({
          id,
          color: undefined,
          gradient: {
            type: "linear",
            rotation,
            colorStops: [
              { offset: 0, color: color },
              { offset: 1, color: color2 },
            ],
          },
        }),
      );
    } else {
      dispatch(
        updateColor({
          id,
          color: color,
          gradient: undefined,
        }),
      );
    }
  }, [color, color2, dispatch, id, isGradient, rotation]);

  return (
    <div className={"flex flex-col gap-5"}>
      <RadioGroup defaultValue="color" className={"flex"} onValueChange={handleChangeType}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="color" id="ocolor" />
          <Label htmlFor="color">{t("Color")}</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="gradient" id="gradient" />
          <Label htmlFor="gradient">{t("Gradient")}</Label>
        </div>
      </RadioGroup>

      <div className={"flex gap-2 h-10 pr-2"}>
        {!isGradient ? (
          <CoColorPicker color={options[id].color} handleChangeColor={handleChangeColor} />
        ) : (
          <>
            <CoColorPicker color={color} handleChangeColor={handleChangeColor} />
            <CoColorPicker color={color2} handleChangeColor={handleChangeColor2} />
            <Input
              type="number"
              className={"w-20"}
              value={rotation}
              onChange={handleChangeRotation}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ColorSetting;
