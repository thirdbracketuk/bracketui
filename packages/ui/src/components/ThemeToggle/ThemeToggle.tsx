"use client";

import { FC } from "react";
import { useTheme } from "../../hooks/useTheme";
import type { Theme } from "../../hooks/useTheme";

export interface ThemeToggleProps {
  onThemeChange?: (theme: Theme) => void;
}

const ThemeToggle: FC<ThemeToggleProps> = ({ onThemeChange }) => {
  const [theme, setTheme] = useTheme();
  const themes: Theme[] = ["light", "dark", "system"];

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    onThemeChange?.(newTheme);
  };

  return (
    <div className="ui:relative ui:inline-flex ui:items-center ui:justify-between ui:rounded-full ui:bg-muted ui:border ui:border-border">
      <div
        className="ui:absolute ui:inset-y-0 ui:left-0 ui:w-1/3 ui:rounded-full ui:bg-secondary ui:transition-all ui:duration-200 ui:ease-in-out"
        style={{
          transform: `translateX(${themes.indexOf(theme) * 100}%)`,
        }}
      />

      {themes.map((t) => (
        <button
          key={t}
          onClick={() => handleThemeChange(t)}
          className="ui:relative ui:z-10 ui:flex ui:items-center ui:justify-center ui:w-7 ui:h-7 ui:md:w-8 ui:md:h-8 ui:text-muted-fg ui:transition-colors ui:duration-200"
          aria-label={`Use ${t} theme`}
        >
          {t === "light" && (
            <svg
              className="ui:h-4 ui:w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="M4.93 4.93l1.41 1.41" />
              <path d="M17.66 17.66l1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="M6.34 17.66l-1.41 1.41" />
              <path d="M19.07 4.93l-1.41 1.41" />
            </svg>
          )}
          {t === "dark" && (
            <svg
              className="ui:h-4 ui:w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
            </svg>
          )}
          {t === "system" && (
            <svg
              className="ui:h-4 ui:w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          )}
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;
