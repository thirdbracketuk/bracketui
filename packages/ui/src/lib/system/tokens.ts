export const colors = {
  primary: "ui:bg-gray-950 ui:text-white ui:dark:bg-white ui:dark:text-black",
  secondary: "ui:bg-gray-200 ui:text-gray-900 ui:dark:bg-gray-800 ui:dark:text-gray-100",
  outline: "ui:border ui:border-gray-200 ui:dark:border-gray-800 ui:text-gray-950 ui:dark:text-white",
  destructive: "ui:bg-red-600 ui:text-white",
  ghost: "ui:hover:bg-gray-100 ui:dark:hover:bg-gray-800",
  glass: "ui:border ui:bg-slate-50/20 ui:text-gray-900 ui:border-slate-200/80 ui:hover:bg-slate-50/50 ui:hover:border-slate-200 ui:dark:bg-neutral-950/20 ui:dark:text-gray-50 ui:dark:border-gray-800/80 ui:dark:hover:bg-neutral-950/50 ui:dark:hover:border-gray-800",
  flat: "ui:bg-gray-100 ui:dark:bg-gray-800 ui:text-gray-900 ui:dark:text-gray-50 ui:hover:bg-gray-200 ui:dark:hover:bg-gray-700",
  link: "ui:text-gray-900 ui:dark:text-gray-50 ui:underline-offset-4 ui:hover:underline",
};

export const cardVariants = {
  default: "ui:bg-white ui:dark:bg-gray-950 ui:border ui:border-gray-200 ui:dark:border-gray-800",
  elevated: "ui:bg-white ui:dark:bg-gray-950 ui:shadow-lg ui:hover:shadow-xl ui:border ui:border-gray-100 ui:dark:border-gray-800",
  flat: "ui:bg-gray-50 ui:dark:bg-gray-900 ui:border ui:border-gray-200 ui:dark:border-gray-700",
  glass: "ui:bg-white/80 ui:dark:bg-gray-950/80 ui:backdrop-blur-md ui:border ui:border-gray-200/50 ui:dark:border-gray-700/50",
  outline: "ui:bg-transparent ui:border ui:border-gray-300 ui:dark:border-gray-600",
  ghost: "ui:bg-transparent ui:hover:bg-gray-50 ui:dark:hover:bg-gray-900 ui:border ui:border-transparent",
};

export const cardInteractions = {
  clickable: "ui:cursor-pointer ui:hover:border-gray-300 ui:dark:hover:border-gray-600 ui:transition-all ui:duration-200 ui:hover:shadow-md",
  static: "",
};

export const text = {
  title: "ui:font-semibold ui:text-gray-900 ui:dark:text-gray-50",
  description: "ui:text-gray-600 ui:dark:text-gray-400",
  category: "ui:text-xs ui:font-medium ui:text-gray-500 ui:dark:text-gray-400 ui:uppercase ui:tracking-wide",
  link: "ui:text-gray-800 ui:dark:text-gray-200",
  linkStates: "ui:focus-within:opacity-100 ui:active:opacity-100 [@media(hover:hover)]:ui:hover:opacity-100 [@media(hover:hover)]:ui:dark:hover:opacity-100",
};

export const backgrounds = {
  default: "ui:bg-white ui:dark:bg-gray-950",
  muted: "ui:bg-gray-50 ui:dark:bg-gray-900",
};

export const borders = {
  default: "ui:border-gray-200 ui:dark:border-gray-800",
  muted: "ui:border-gray-500 ui:border-opacity-20",
};

export const focus = {
  ring: "ui:focus-visible:outline-none ui:focus-visible:ring-2 ui:focus-visible:ring-offset-2",
  primary: "ui:focus-visible:ring-gray-500 ui:dark:focus-visible:ring-gray-300",
};
