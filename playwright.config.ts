import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  reporter: [["html", { open: "never" }]],
};

export default config;
