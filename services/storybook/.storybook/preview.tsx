import "@foundation/themes/themes.css";
import "./style.css";

import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: "todo",
    },

    backgrounds: {
      disable: true,
    },
  },

  globalTypes: {
    theme: {
      description: "Theme",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: [
          {
            value: "light",
            title: "Light",
          },
          {
            value: "dark",
            title: "Dark",
          },
        ],
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    theme: "light",
  },

  decorators: [
    withThemeByClassName({
      themes: {
        light: "theme-light",
        dark: "theme-dark",
      },
      defaultTheme: "light",
      parentSelector: "body",
    }),
  ],
};

// const initTheme = () => {
//   const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

//   if (isDarkTheme) {
//     document.body.classList.add("theme-dark");
//   }

//   const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

//   mediaQueryList.addEventListener("change", (e) => {
//     if (e.matches) {
//       document.body.classList.add("theme-dark");
//     } else {
//       document.body.classList.remove("theme-dark");
//     }
//   });
// };

// initTheme();

export default preview;
