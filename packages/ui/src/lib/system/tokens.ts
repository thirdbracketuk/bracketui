export const colors = {
  primary: "ui:bg-primary ui:text-primary-fg",
  secondary: "ui:bg-secondary ui:text-secondary-fg",
  outline: "ui:border ui:border-border ui:text-foreground",
  destructive: "ui:bg-destructive ui:text-destructive-fg",
  ghost: "ui:hover:bg-muted ui:hover:text-muted-fg",
  glass:
    "ui:border ui:bg-glass/20 ui:text-foreground ui:border-glass-border/80 ui:hover:bg-glass/50 ui:hover:border-glass-border",
  flat: "ui:bg-muted ui:text-muted-fg ui:hover:bg-muted/80",
  link: "ui:text-foreground ui:underline-offset-4 ui:hover:underline",
};

export const cardVariants = {
  default: "ui:bg-background ui:border ui:border-border",
  elevated:
    "ui:bg-background ui:shadow-lg ui:hover:shadow-xl ui:border ui:border-muted",
  flat: "ui:bg-muted ui:border ui:border-border",
  glass:
    "ui:bg-glass/80 ui:backdrop-blur-md ui:border ui:border-glass-border/50",
  outline: "ui:bg-transparent ui:border ui:border-border",
  ghost: "ui:bg-transparent ui:hover:bg-muted ui:border ui:border-transparent",
};

export const cardInteractions = {
  clickable:
    "ui:cursor-pointer ui:hover:border-ring ui:transition-all ui:duration-200 ui:hover:shadow-md",
  static: "",
};

export const text = {
  title: "ui:font-semibold ui:text-foreground",
  description: "ui:text-muted-fg",
  category:
    "ui:text-xs ui:font-medium ui:text-muted-fg ui:uppercase ui:tracking-wide",
  link: "ui:text-foreground",
  linkStates:
    "ui:focus-within:opacity-100 ui:active:opacity-100 [@media(hover:hover)]:ui:hover:opacity-100",
};

export const backgrounds = {
  default: "ui:bg-background",
  muted: "ui:bg-muted",
};

export const borders = {
  default: "ui:border-border",
  muted: "ui:border-muted",
};

export const focus = {
  ring: "ui:focus-visible:outline-none ui:focus-visible:ring-2 ui:focus-visible:ring-offset-2",
  primary: "ui:focus-visible:ring-ring",
};
