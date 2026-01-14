import { FC } from "react";

const ThemeScript: FC = () => {
  return (
    <script
      id="theme-script"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            function getSystemTheme() {
              return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }

            function applyTheme(theme) {
              var root = document.documentElement;
              var effectiveTheme = theme === 'system' ? getSystemTheme() : theme;
              root.setAttribute('data-theme', effectiveTheme);
            }

            try {
              var storedTheme = localStorage.getItem('theme') || 'system';
              applyTheme(storedTheme);

              var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
              mediaQuery.addEventListener('change', function() {
                var currentTheme = localStorage.getItem('theme');
                if (currentTheme === 'system') {
                  applyTheme('system');
                }
              });
            } catch (e) {}
          })();
        `,
      }}
    />
  );
};

export default ThemeScript;
