# create-tdesign

快速创建 TDesign 项目模板的 CLI，交互形态对齐 `create-vite`，支持选择 `npm`、`pnpm`、`bun`、`yarn`。

## Templates

当前已支持 36 个 TypeScript 模板：

### Vue SFC

- `vue-vite`
- `vue-rsbuild`
- `vue-vike`
- `vue-vite-on-demand`
- `vue-vike-on-demand`
- `vue-rsbuild-on-demand`

### Vue TSX

- `vue-tsx-vite`
- `vue-tsx-vike`
- `vue-tsx-rsbuild`

### Mobile Vue SFC

- `mobile-vue-vite`
- `mobile-vue-rsbuild`
- `mobile-vue-vike`
- `mobile-vue-vite-on-demand`
- `mobile-vue-vike-on-demand`
- `mobile-vue-rsbuild-on-demand`

### Mobile Vue TSX

- `mobile-vue-tsx-vite`
- `mobile-vue-tsx-vike`
- `mobile-vue-tsx-rsbuild`

### Vue Chat SFC

- `vue-chat-vite`
- `vue-chat-vike`
- `vue-chat-rsbuild`
- `vue-chat-vite-on-demand`
- `vue-chat-vike-on-demand`
- `vue-chat-rsbuild-on-demand`

### Vue Chat TSX

- `vue-chat-tsx-vite`
- `vue-chat-tsx-vike`
- `vue-chat-tsx-rsbuild`

### React

- `react-vite`
- `react-rsbuild`
- `react-vike`
- `mobile-react-vite`
- `mobile-react-rsbuild`
- `mobile-react-vike`
- `react-chat-vite`
- `react-chat-rsbuild`
- `react-chat-vike`

模板源码统一放在 `templates/` 目录下。

## Usage

```bash
pnpm create tdesign my-app
```

直接指定模板：

```bash
pnpm create tdesign my-app --template vue-vite
pnpm create tdesign my-app --template vue-vike
pnpm create tdesign my-app --template vue-tsx-rsbuild
pnpm create tdesign my-app --template vue-vite-on-demand
pnpm create tdesign my-app --template react-chat-rsbuild
pnpm create tdesign my-app --template react-vike
```

按 UI 和打包工具组合指定：

```bash
pnpm create tdesign my-app --ui vue --bundler vite
pnpm create tdesign my-app --ui react --bundler rsbuild
pnpm create tdesign my-app --ui react --bundler vike
pnpm create tdesign my-app --ui vue --bundler vite --import-mode on-demand
```

指定包管理器：

```bash
pnpm create tdesign my-app --template vue-vite --package-manager npm
pnpm create tdesign my-app --template react-chat-rsbuild --pm bun
```

## Options

```text
-t, --template NAME
    --ui NAME
    --bundler NAME
    --import-mode NAME
    --package-manager NAME
    --pm NAME
-f, --force
-y, --yes
-h, --help
```

## Notes

- `chat` 模板默认提供一个可运行的聊天前端壳子，真实模型接口需要你在模板页面文件里补充 `chatServiceConfig`。
- Vue / Mobile Vue / Vue Chat 的 SFC 模板支持 `Full` 和 `On-demand` 两种引入模式。
- TSX 模板不支持 `--import-mode on-demand`，`unplugin-vue-components` 仅对 SFC `<template>` 生效。
- `mobile-vue` 模板在 pnpm v11+ 环境下首次安装会自动放行 `vue-demi` 的构建脚本。

## Development

```bash
pnpm install
pnpm build
pnpm typecheck
```
