import { tv } from "tailwind-variants";
import { colors, focus } from "../../lib/system/tokens";
import { iconSizes, sizes } from "../../lib/system/sizes";

export const buttonStyles = tv({
  base: [
    "ui:inline-flex ui:items-center ui:justify-center ui:whitespace-nowrap ui:font-medium",
    "ui:relative ui:select-none",
    "ui:transition-all ui:motion-reduce:transition-none",
    "disabled:ui:pointer-events-none disabled:ui:opacity-50",
    focus.ring,
  ],

  variants: {
    variant: {
      default: `${colors.primary} ${focus.primary}`,
      secondary: `${colors.secondary} ${focus.primary}`,
      destructive: `${colors.destructive} ui:focus-visible:ring-red-500`,
      outline: `ui:bg-transparent ${colors.outline} ui:hover:bg-gray-100 ui:dark:hover:bg-gray-800 ${focus.primary}`,
      ghost: `${colors.ghost} ${focus.primary}`,
      link: `${colors.link} ${focus.primary}`,
      flat: `${colors.flat} ${focus.primary}`,
      glass: `
        ui:backdrop-blur-2xl ui:saturate-200
        ui:hover:backdrop-blur-xl
        ${colors.glass}
        ${focus.primary}
      `,
      avatar: `ui:rounded-full ${colors.primary} ${focus.primary}`,
    },

    size: {
      ...sizes,
    },

    iconSize: {
      ...iconSizes,
    },
  },

  defaultVariants: {
    variant: "default",
    size: "md",
  },
});
