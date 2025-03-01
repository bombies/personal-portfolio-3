/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "personal-portfolio-3",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: {
        aws: {
          profile: "portfolio-3",
        }
      }
    };
  },
  async run() {
    const infra = await import("./infra");

    return {
      website: infra.frontend.url
    };
  },
});
