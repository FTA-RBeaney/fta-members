import { defineNuxtPlugin } from "#app";

type ColorName =
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose";

interface ColorValues {
  hue: number;
  saturation: string;
  lightness: string;
}

const colorMap: Record<ColorName, ColorValues> = {
  red: { hue: 0, saturation: "84%", lightness: "60%" },
  orange: { hue: 24, saturation: "95%", lightness: "64%" },
  amber: { hue: 45, saturation: "93%", lightness: "64%" },
  yellow: { hue: 48, saturation: "96%", lightness: "64%" },
  lime: { hue: 84, saturation: "71%", lightness: "53%" },
  green: { hue: 142, saturation: "71%", lightness: "45%" },
  emerald: { hue: 152, saturation: "57%", lightness: "43%" },
  teal: { hue: 173, saturation: "80%", lightness: "40%" },
  cyan: { hue: 187, saturation: "100%", lightness: "42%" },
  sky: { hue: 199, saturation: "98%", lightness: "48%" },
  blue: { hue: 221, saturation: "83%", lightness: "53%" },
  indigo: { hue: 243, saturation: "75%", lightness: "58%" },
  violet: { hue: 258, saturation: "90%", lightness: "66%" },
  purple: { hue: 271, saturation: "91%", lightness: "65%" },
  fuchsia: { hue: 292, saturation: "84%", lightness: "61%" },
  pink: { hue: 330, saturation: "81%", lightness: "60%" },
  rose: { hue: 346, saturation: "77%", lightness: "61%" },
};

export default defineNuxtPlugin((nuxtApp) => {
  // Only run on client-side
  if (process.client) {
    const config = useAppConfig();

    const updateTheme = (color: ColorName) => {
      if (colorMap[color]) {
        const { hue, saturation, lightness } = colorMap[color];
        document.documentElement.style.setProperty("--primary-hue", hue.toString());
        document.documentElement.style.setProperty("--primary-saturation", saturation);
        document.documentElement.style.setProperty("--primary-lightness", lightness);
      }
    };

    // Initial theme setup
    updateTheme(config.ui.colors.primary as ColorName);

    // Watch for changes
    watch(
      () => config.ui.colors.primary,
      (newColor: ColorName) => {
        updateTheme(newColor);
      }
    );
  }
});
