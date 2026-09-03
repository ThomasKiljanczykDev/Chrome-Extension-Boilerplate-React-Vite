<!--suppress HtmlRequiredAltAttribute, CheckImageSize -->
<img src="assets/icons/icon-128.png" width="64"/>

# Chrome Extension (MV3) Boilerplate with React 19 and Vite 8

This repository contains a boilerplate for building Chrome Extensions with React 19, TypeScript, and Vite 8.
This boilerplate is inspired by and adapted
from [chrome-extension-boilerplate-react](https://github.com/lxieyang/chrome-extension-boilerplate-react).

## Features

This is a basic Chrome Extensions boilerplate to help you write modular and modern Javascript code and load CSS easily.
This boilerplate is using:

- [Chrome Extension Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/)
- [React 19](https://reactjs.org)
- [MUI](https://mui.com/)
- [CRXJS Vite Plugin](https://www.npmjs.com/package/@crxjs/vite-plugin)
- ESLint:
    - [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
    - [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
    - [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
    - [typescript-eslint](https://www.npmjs.com/package/typescript-eslint)
- [Prettier](https://prettier.io/)
    - [@prettier/plugin-oxc](https://www.npmjs.com/package/@prettier/plugin-oxc) (Oxc-based parser)
    - [@ianvs/prettier-plugin-sort-imports](https://www.npmjs.com/package/@ianvs/prettier-plugin-sort-imports)
- [TypeScript](https://www.typescriptlang.org/)
- [TanStack Router](https://tanstack.com/router)

Please open up an issue to nudge me to keep the npm packages up-to-date.

## Installing and Running

### Procedures:

1. Check if your [Node.js](https://nodejs.org/) version is **^20.19.0 || >=22.12.0**.
2. Enable [pnpm](https://pnpm.io/) via Corepack: `corepack enable pnpm`. The pinned version comes from the
   `packageManager` field in `package.json`.
3. Clone this repository.
4. Change the package's `name`, `description`, and `repository` fields in `package.json`.
5. Change the name of your extension in `manifest.json`.
6. Run `pnpm install` to install the dependencies.
7. Run `pnpm build`
8. Load your extension on Chrome following:
    1. Access `chrome://extensions/`
    2. Turn the `Developer mode` switch on (top right corner)
    3. Click on `Load unpacked`
    4. Select the `dist` folder.
9. Happy hacking.

## Structure

All your extension's code must be placed in the `src` folder.

The boilerplate is already prepared to have a popup, a background script, and a content script.
This example Chrome extension implements logic which lets the user scrape the page title.
It was done so to demonstrate some of the [chrome API](https://developer.chrome.com/docs/extensions/reference/api)
functionality.

## TypeScript

This boilerplate supports TypeScript! Everything that can be written in TypeScript is written in TypeScript.

## Change Watchers

This boilerplate has a watch script (`pnpm watch`) which will update the extension's code every time you save a file.

## Scripts

| Script             | Description                                                    |
| ------------------ | -------------------------------------------------------------- |
| `pnpm build`       | Builds the extension into the `dist` folder.                   |
| `pnpm watch`       | Rebuilds the extension every time you save a file.             |
| `pnpm lint`        | Runs ESLint over the project (results are cached in `.cache`). |
| `pnpm check-types` | Runs the TypeScript compiler without emitting any files.       |
| `pnpm format`      | Formats the whole project with Prettier.                       |

## Packing

After the development of your extension run the command

```
$ pnpm build
```

Now, the content of `dist` folder will be the extension ready to be submitted to the Chrome Web Store. Just take a look
at the [official guide](https://developer.chrome.com/webstore/publish) to more infos about publishing.

## CI/CD

The workflows in `.github/workflows` cover linting, building and releasing:

- **`ci.yml`** — runs on every push. Lints the code, checks the types, and builds the extension.
- **`build.yml`** — builds the extension and uploads the packaged `.zip` as a workflow artifact. It is a reusable
  workflow, so other pipelines can call it directly:

    ```yaml
    jobs:
        build:
            uses: ./.github/workflows/build.yml
            with:
                # Optional. Defaults to the version in package.json.
                version: 26.9.1
    ```

    It exposes the built `version` and the `package-name` as outputs, and can also be triggered manually from the
    Actions tab.

- **`release.yml`** — triggered manually. Computes the next version, builds the extension, pushes a git tag and creates
  a GitHub release with the packaged `.zip` attached.

Releases are versioned as `v<YY>.<M>.<revision>`, where `YY` is the two-digit year, `M` the month, and `revision` a
counter that restarts every month (for example `v26.9.1`, then `v26.9.2`). The version is stamped into the built
`manifest.json`; `package.json` is left untouched.

## Resources:

- [Chrome Extension documentation](https://developer.chrome.com/docs/extensions/get-started)

---

Tomasz Kiljańczyk | [Website](https://github.com/ThomasKiljanczykDev)
