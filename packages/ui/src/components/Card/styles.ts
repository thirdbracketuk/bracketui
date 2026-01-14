import { tv } from "tailwind-variants";
import { cardVariants, cardInteractions, text, focus } from "../../lib/system/tokens";
import { cardSizes, cardImageSizes } from "../../lib/system/sizes";

export const cardStyles = tv({
  base: [
    "ui:rounded-lg ui:overflow-hidden ui:flex ui:flex-col",
    "ui:transition-all ui:duration-200 ui:ease-in-out",
    focus.ring,
  ],

  variants: {
    variant: {
      default: cardVariants.default,
      elevated: cardVariants.elevated,
      flat: cardVariants.flat,
      glass: cardVariants.glass,
      outline: cardVariants.outline,
      ghost: cardVariants.ghost,
    },

    clickable: {
      true: cardInteractions.clickable,
      false: cardInteractions.static,
    },
  },

  defaultVariants: {
    variant: "default",
    clickable: false,
  },
});

export const cardContentStyles = tv({
  variants: {
    size: {
      sm: `${cardSizes.sm.padding} ${cardSizes.sm.spacing}`,
      md: `${cardSizes.md.padding} ${cardSizes.md.spacing}`,
      lg: `${cardSizes.lg.padding} ${cardSizes.lg.spacing}`,
      xl: `${cardSizes.xl.padding} ${cardSizes.xl.spacing}`,
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const cardTitleStyles = tv({
  base: text.title,
  variants: {
    size: {
      sm: cardSizes.sm.titleSize,
      md: cardSizes.md.titleSize,
      lg: cardSizes.lg.titleSize,
      xl: cardSizes.xl.titleSize,
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const cardDescriptionStyles = tv({
  base: text.description,
  variants: {
    size: {
      sm: cardSizes.sm.descriptionSize,
      md: cardSizes.md.descriptionSize,
      lg: cardSizes.lg.descriptionSize,
      xl: cardSizes.xl.descriptionSize,
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const cardImageStyles = tv({
  base: "ui:w-full ui:object-cover",
  variants: {
    size: {
      sm: cardImageSizes.sm,
      md: cardImageSizes.md,
      lg: cardImageSizes.lg,
      xl: cardImageSizes.xl,
    },
  },
  defaultVariants: {
    size: "md",
  },
});
