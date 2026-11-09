# Sync Tab Groups

**Sync Tab Groups is actively maintained and continues to be developed.** This project is open source, and contributions, bug reports, and feature suggestions are welcome.

Sync Tab Groups helps you organize browser tabs into groups by topic. You can close a group and reopen it later without losing its tabs, making it easier to switch between tasks and keep browsing sessions organized.

For screenshots, videos, guides, and more information, visit the [project website](https://morikko.github.io/synctabgroups/).

[![Get Sync Tab Groups for Firefox](https://user-images.githubusercontent.com/7831572/36659929-7ecb2042-1ad6-11e8-82a4-0628702e354e.png)](https://addons.mozilla.org/en-US/firefox/addon/sync-tab-groups/)

[![Get Sync Tab Groups for Chrome](https://user-images.githubusercontent.com/7831572/36659935-8402879e-1ad6-11e8-83f7-d645a108696a.png)](https://chrome.google.com/webstore/detail/sync-tab-groups/gbkddinkjahdfha...)

---

## Project status

Development is ongoing. Recent work has focused on reliability, compatibility with modern Node.js releases, and fixing bugs while preserving existing workflows.

Recent maintenance and stability improvements include:

- Fixed option loading that could cause unrecoverable `TypeError` crashes.
- Corrected pinned-tab state synchronization when tabs are moved between groups.
- Fixed hidden-tab cleanup so that only hidden tabs are removed, including correct index handling when multiple tabs are closed.
- Fixed window and group association for group ID `0` to prevent duplicate groups during startup and window restoration.
- Fixed backup timer preference handling so configured timers start and stop correctly.
- Standardized bookmark backup folder naming to prevent duplicate “Default” folders from accumulating.
- Replaced the outdated `node-sass` dependency with Dart Sass for compatibility with modern Node.js versions.

## Releases and installation

Production-ready packages for supported browsers are generated in the [`release/`](./release) directory.

### Mozilla Firefox

Package files:

- [`release/sync-tab-groups-firefox.xpi`](./release/sync-tab-groups-firefox.xpi)
- [`release/sync-tab-groups-firefox.zip`](./release/sync-tab-groups-firefox.zip)
- Versioned packages may also be available in [`release/firefox/`](./release/firefox/).

For everyday use, install the extension from [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/sync-tab-groups/). To load a local build temporarily:

1. Open `about:debugging#/runtime/this-firefox`.
2. Select **Load Temporary Add-on...**.
3. Choose the XPI file or the `manifest.json` from the build directory.

### Chromium-based browsers

Sync Tab Groups supports Google Chrome and Chromium-based browsers such as Microsoft Edge, Brave, Opera, and Vivaldi.

Package files:

- [`release/sync-tab-groups-chrome.zip`](./release/sync-tab-groups-chrome.zip)
- The unpacked build in [`release/chrome/build/`](./release/chrome/build/)
- Versioned packages may also be available in [`release/chrome/`](./release/chrome/).

To load an unpacked local build:

1. Open your browser's extensions page (`chrome://extensions`, `edge://extensions`, `brave://extensions`, or `opera://extensions`).
2. Enable **Developer mode**.
3. Select **Load unpacked** and choose `release/chrome/build/`.

For normal use, install from the [Chrome Web Store](https://chrome.google.com/webstore/detail/sync-tab-groups/gbkddinkjahdfha...).

## Development setup

### Requirements

- Node.js 14 or later. The build toolchain has been updated for modern Node.js releases, including 18, 20, 22, and 25.
- Firefox Developer Edition is required only if you want to use the Firefox development scripts that rely on `web-ext`.

### Install dependencies

```bash
npm install
```

### Available scripts

Run scripts with `npm run <script>`:

| Script | Description |
| --- | --- |
| `build` | Build the development version in `build/`. |
| `watch` | Build the development version and rebuild when source files change. |
| `build:prod` | Build the production version in `release/build/`. |
| `zip` | Create the XPI and ZIP packages from the production build. |
| `release` | Run the production build and create the packages. |
| `lint` | Run linting and show errors. |
| `clean` | Remove the `build/` and `release/` directories. |
| `firefox:dev` | Launch Firefox with the development extension loaded. |
| `firefox:prod` | Launch Firefox with the production extension loaded. |

### Development and production builds

- `process.env.IS_PROD` is enabled only in production builds; `Utils.DEBUG_MODE` is enabled in development builds.
- Tests are included in development builds only.
- The generated XPI and ZIP packages contain the production build.

## Contributing

Contributions are welcome! You can help by reporting bugs, suggesting improvements, improving documentation, updating translations, or submitting a pull request.

Before opening a pull request, please:

- Run the tests and make sure they pass.
- Run the linter and resolve reported errors.
- Preserve compatibility with existing features.
- Check that changes work in both Chrome and Firefox, or ensure browser-specific changes do not affect the other browser.

Please open or review an issue before starting substantial work so that the proposed change can be discussed. Include a clear description of the problem or improvement and the steps you used to test your change.

## Translations

Translations are maintained in [`extension/_locales/`](./extension/_locales/). Contributions to existing translations and new languages are welcome. Use the English locale as the source, retain the existing message keys, and submit your changes in a pull request.

## Reporting bugs

Found a bug or have a feature request? [Open an issue in this repository](https://github.com/officialmmt/sync-tab-groups/issues) and include your browser, browser version, steps to reproduce the issue, and any relevant error messages.

## Credits

Thank you to everyone who has contributed translations, bug reports, fixes, and ideas. Special thanks to the translation contributors:

- German: @bitkleberAST
- Russian: @Александр
- Spanish: [@lucas-mancini](https://github.com/lucas-mancini/)
- Taiwanese Mandarin: @rzfang
- French: @ko-dever

The project website is maintained in the [website repository](https://github.com/Morikko/synctabgroups).

Thank you for helping improve Sync Tab Groups!
