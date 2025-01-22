import { type GradientType, type Options } from "qr-code-styling";

export const isGradient = (data: string): boolean => {
  return data.startsWith("linear-gradient");
};

export const colorToGradient = (
  input: string,
): { type: GradientType; rotation?: number; colorStops: { offset: number; color: string }[] } => {
  const gradientRegex = /linear-gradient\((\d+deg),\s*(.+)\)/i;
  const colorStopRegex = /(rgba?\([^)]+\)|#[0-9a-fA-F]{3,6})\s*(\d+%)?/g;
  console.log(input);
  const match = gradientRegex.exec(input);
  if (!match) {
    throw new Error("Invalid linear-gradient string");
  }

  const rotation = parseInt(match[1], 10);
  const colorStopsPart = match[2];
  const colorStops: { offset: number; color: string }[] = [];

  let stopMatch: RegExpExecArray | null;
  while ((stopMatch = colorStopRegex.exec(colorStopsPart)) !== null) {
    const color = stopMatch[1];
    const offset = stopMatch[2] ? parseInt(stopMatch[2], 10) / 100 : 0;
    colorStops.push({ offset, color });
  }

  return {
    type: "linear",
    rotation,
    colorStops,
  };
};

const parsedColorOptions = [
  "dotsOptions",
  "cornersSquareOptions",
  "cornersDotOptions",
  "backgroundOptions",
];

export const parseQrCodeOptions = (options: Partial<Options>) => {
  return Object.keys(options).reduce((acc, key) => {
    let currentOption = options[key];

    if (parsedColorOptions.includes(key)) {
      if (isGradient(currentOption.color)) {
        currentOption = { ...options[key] };
        currentOption.gradient = colorToGradient(currentOption.color);
        currentOption.color = undefined;
      }
    }

    return {
      ...acc,
      [key]: currentOption,
    };
  }, options);
};
