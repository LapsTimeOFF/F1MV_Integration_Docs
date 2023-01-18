import { defaultTheme, defineUserConfig } from "vuepress";
import { externalLinkIconPlugin } from "@vuepress/plugin-external-link-icon";
import sidebar from "./sidebar";
const {codeSwitcherPlugin} = await import('vuepress-plugin-code-switcher')

export default defineUserConfig({
    lang: "en-US",
    title: "F1MV_Integration_Docs",
    description: "Get started with the F1MV API !",
    base: "/F1MV_Integration_Docs/",
    plugins: [
      externalLinkIconPlugin({
        // options
      }),
      // codeSwitcherPlugin()
    ],
    theme: defaultTheme({
      sidebar,
      contributors: false,
      repo: 'https://github.com/LapsTimeOFF/F1MV_Integration_Docs',
      editLinkText: "Edit this page on Github",
      editLinkPattern: ':repo/edit/:branch/docs/:path',
      docsBranch: 'stable',
    }),
});