# create-tdesign

快速创建 TDesign 项目模板的 CLI，交互形态对齐 `create-vite`，支持选择 `npm`、`pnpm`、`bun`、`yarn`。

## Templates

当前已支持 36 个 TypeScript 模板：

### Vue SFC

- `vue-vite`
- `vue-rspack`
- `vue-vite-plus`
- `vue-vite-on-demand`
- `vue-rspack-on-demand`
- `vue-vite-plus-on-demand`

### Vue TSX

- `vue-tsx-vite`
- `vue-tsx-rspack`
- `vue-tsx-vite-plus`

### Mobile Vue SFC

- `mobile-vue-vite`
- `mobile-vue-rspack`
- `mobile-vue-vite-plus`
- `mobile-vue-vite-on-demand`
- `mobile-vue-rspack-on-demand`
- `mobile-vue-vite-plus-on-demand`

### Mobile Vue TSX

- `mobile-vue-tsx-vite`
- `mobile-vue-tsx-rspack`
- `mobile-vue-tsx-vite-plus`

### Vue Chat SFC

- `vue-chat-vite`
- `vue-chat-rspack`
- `vue-chat-vite-plus`
- `vue-chat-vite-on-demand`
- `vue-chat-rspack-on-demand`
- `vue-chat-vite-plus-on-demand`

### Vue Chat TSX

- `vue-chat-tsx-vite`
- `vue-chat-tsx-rspack`
- `vue-chat-tsx-vite-plus`

### React

- `react-vite`
- `react-rspack`
- `react-vite-plus`
- `mobile-react-vite`
- `mobile-react-rspack`
- `mobile-react-vite-plus`
- `react-chat-vite`
- `react-chat-rspack`
- `react-chat-vite-plus`

模板源码统一放在 `templates/` 目录下。

### Vite Plus 模板

Vite Plus 模板使用 [vite-plus](https://github.com/voidzero-dev/vite-plus) 替代 Vite，提供统一的工具链，内置 linting、formatting、testing 等功能。脚本使用 `vp` 命令：

```json
{
  "scripts": {
    "dev": "vp dev",
    "build": "vp build",
    "check": "vp check",
    "lint": "vp lint",
    "fmt": "vp fmt",
    "test": "vp test"
  }
}
```

## Usage

```bash
pnpm create tdesign my-app
```

直接指定模板：

```bash
pnpm create tdesign my-app --template vue-vite
pnpm create tdesign my-app --template vue-tsx-rspack
pnpm create tdesign my-app --template vue-vite-on-demand
pnpm create tdesign my-app --template react-chat-rspack
pnpm create tdesign my-app --template vue-vite-plus
```

按 UI 和打包工具组合指定：

```bash
pnpm create tdesign my-app --ui vue --bundler vite
pnpm create tdesign my-app --ui react --bundler rspack
pnpm create tdesign my-app --ui vue --bundler vite --import-mode on-demand
pnpm create tdesign my-app --ui vue --bundler vite-plus
```

指定包管理器：

```bash
pnpm create tdesign my-app --template vue-vite --package-manager npm
pnpm create tdesign my-app --template react-chat-rspack --pm bun
```

## Options

```text
-t, --template NAME
    --ui NAME
    --bundler NAME          vite, rspack, or vite-plus
    --import-mode NAME
    --package-manager NAME
    --pm NAME
-f, --force
-y, --yes
-h, --help
```

## Notes

- `chat` 模板默认提供一个可运行的聊天前端壳子，真实模型接口需要你在 `App.vue` 或 `App.tsx` 里补充 `chatServiceConfig`。
- Vue / Mobile Vue / Vue Chat 的 SFC 模板支持 `Full` 和 `On-demand` 两种引入模式。
- TSX 模板不支持 `--import-mode on-demand`，`unplugin-vue-components` 仅对 SFC `<template>` 生效。
- `mobile-vue` 模板在 pnpm v11+ 环境下首次安装会自动放行 `vue-demi` 的构建脚本。

## Development

```bash
pnpm install
pnpm build
pnpm typecheck
```
