module.exports = {
  // Global options:
  verbose: false,
  // Command options:
  build: {
    overwriteDest: true,
  },
  run: {
    startUrl: ["about:debugging"],
    pref: [
      "extensions.webextensions.tabhide.enabled=true",
    ],
    reload: false,
    firefox: "firefoxdeveloperedition",
  },
};
