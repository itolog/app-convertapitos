import React, { FC } from "react";
import ColorPicker from "react-best-gradient-color-picker";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface CoColorPickerProps {
  color?: string;
  handleChangeColor: (color: string) => void;
}

const options = {
  hideInputs: true,
  hideEyeDrop: true,
  hideAdvancedSliders: true,
  hideColorGuide: true,
  hideInputType: true,
  hideGradientType: true,
  hideGradientAngle: true,
  hideGradientStop: true,
  hideGradientControls: true,
  hideControls: true,
  hideOpacity: true,
};

const CoColorPicker: FC<CoColorPickerProps> = ({ color = "black", handleChangeColor }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <div
          className={"h-[24px] w-[24px] rounded border border-black dark:border-zinc-50"}
          style={{ background: color }}
        />
      </PopoverTrigger>
      <PopoverContent className={"zoom-in-100 w-fit p-2"}>
        <ColorPicker
          {...options}
          className={"co-color-picker"}
          value={color}
          onChange={handleChangeColor}
        />
      </PopoverContent>
    </Popover>
  );
};

export default CoColorPicker;
