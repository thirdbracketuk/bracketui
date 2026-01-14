const SPINNER_SIZES = {
  xs: "ui:w-2.5 ui:h-2.5",
  sm: "ui:w-3 ui:h-3",
  md: "ui:w-3.5 ui:h-3.5",
  lg: "ui:w-4 ui:h-4",
  xl: "ui:w-4.5 ui:h-4.5",
  icon: "ui:w-3.5 ui:h-3.5",
} as const;

type SpinnerSize = keyof typeof SPINNER_SIZES;

export function Spinner({ size = "md" }: { size?: SpinnerSize }) {
  return (
    <svg
      className={`ui:animate-spin ui:text-current ${SPINNER_SIZES[size]}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        className="ui:opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        className="ui:opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}
