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
    - [@trivago/prettier-plugin-sort-imports](https://www.npmjs.com/package/@trivago/prettier-plugin-sort-imports)
- [TypeScript](https://www.typescriptlang.org/)
- [TanStack Router](https://tanstack.com/router)

Please open up an issue to nudge me to keep the npm packages up-to-date.

## Installing and Running

### Procedures:

1. Check if your [Node.js](https://nodejs.org/) version is **^20.19.0 || >=22.12.0**.
2. Clone this repository.
3. Change the package's `name`, `description`, and `repository` fields in `package.json`.
4. Change the name of your extension in `manifest.json`.
5. Run `yarn install` to install the dependencies.
6. Run `yarn build`
7. Load your extension on Chrome following:
    1. Access `chrome://extensions/`
    2. Turn the `Developer mode` switch on (top right corner)
    3. Click on `Load unpacked`
    4. Select the `dist` folder.
8. Happy hacking.

## Structure

All your extension's code must be placed in the `src` folder.

The boilerplate is already prepared to have a popup, a background script, and a content script.
This example Chrome extension implements logic which lets the user scrape the page title.
It was done so to demonstrate some of the [chrome API](https://developer.chrome.com/docs/extensions/reference/api)
functionality.

## TypeScript

This boilerplate supports TypeScript! Everything that can be written in TypeScript is written in TypeScript.

## Change Watchers

This boilerplate has a watch script (`yarn watch`) which will update the extension's code every time you save a file.

## Packing

After the development of your extension run the command

```
$ yarn build
```

Now, the content of `dist` folder will be the extension ready to be submitted to the Chrome Web Store. Just take a look
at the [official guide](https://developer.chrome.com/webstore/publish) to more infos about publishing.

## Resources:

- [Chrome Extension documentation](https://developer.chrome.com/docs/extensions/get-started)

---

Tomasz Kiljańczyk | [Website](https://github.com/ThomasKiljanczykDev)
