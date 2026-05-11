# create-tdesign

快速创建 TDesign 项目模板的 CLI，交互形态对齐 `create-vite`，支持选择 `npm`、`pnpm`、`bun`、`yarn`。

## Templates

当前已支持 30 个 TypeScript 模板：

### Vue SFC

- `vue-vite`
- `vue-rspack`
- `vue-vite-on-demand`
- `vue-rspack-on-demand`

### Vue TSX

- `vue-tsx-vite`
- `vue-tsx-rspack`
- `vue-tsx-vite-on-demand`
- `vue-tsx-rspack-on-demand`

### Mobile Vue SFC

- `mobile-vue-vite`
- `mobile-vue-rspack`
- `mobile-vue-vite-on-demand`
- `mobile-vue-rspack-on-demand`

### Mobile Vue TSX

- `mobile-vue-tsx-vite`
- `mobile-vue-tsx-rspack`
- `mobile-vue-tsx-vite-on-demand`
- `mobile-vue-tsx-rspack-on-demand`

### Vue Chat

- `vue-chat-vite`
- `vue-chat-rspack`
- `vue-chat-vite-on-demand`
- `vue-chat-rspack-on-demand`

### Vue Chat TSX

- `vue-chat-tsx-vite`
- `vue-chat-tsx-rspack`
- `vue-chat-tsx-vite-on-demand`
- `vue-chat-tsx-rspack-on-demand`

### React

- `react-vite`
- `react-rspack`
- `mobile-react-vite`
- `mobile-react-rspack`
- `react-chat-vite`
- `react-chat-rspack`

模板源码统一放在 `templates/` 目录下。

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
```

按 UI 和打包工具组合指定：

```bash
pnpm create tdesign my-app --ui vue --bundler vite
pnpm create tdesign my-app --ui react --bundler rspack
pnpm create tdesign my-app --ui vue --bundler vite --import-mode on-demand
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
    --bundler NAME
    --import-mode NAME
    --package-manager NAME
    --pm NAME
-f, --force
-y, --yes
-h, --help
```

## Notes

- `chat` 模板默认提供一个可运行的聊天前端壳子，真实模型接口需要你在 `App.vue` 或 `App.tsx` 里补充 `chatServiceConfig`。
- Vue / Mobile Vue / Vue Chat 模板支持 SFC 和 TSX 两种风格，交互时也会提示选择 `Full` 或 `On-demand`。
- `--import-mode` 对所有 Vue 相关模板生效。
- `mobile-vue` 模板在 pnpm v11+ 环境下首次安装会自动放行 `vue-demi` 的构建脚本。

## Development

```bash
pnpm install
pnpm build
pnpm typecheck
```
