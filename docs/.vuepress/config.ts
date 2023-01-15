import { defaultTheme, defineUserConfig } from "vuepress";
import { externalLinkIconPlugin } from "@vuepress/plugin-external-link-icon";
import sidebar from "./sidebar";

export default defineUserConfig({
    lang: "en-US",
    title: "F1MV_Integration_Docs",
    description: "Get started with the F1MV API !",
    base: "/F1MV_Integration_Docs/",
    plugins: [
      externalLinkIconPlugin({
        // options
      }),
    ],
    theme: defaultTheme({
      sidebar,
      locales: {
          "/F1MV_Integration_Docs/": {
              editLinkText: "Edit this page on GitHub",
              sidebar
          },
      },
    }),
});
