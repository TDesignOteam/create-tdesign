# create-tdesign

快速创建 TDesign 项目模板的 CLI，交互形态对齐 `create-vite`，支持选择 `npm`、`pnpm`、`bun`、`yarn`。

## Templates

当前已支持 18 个 TypeScript 模板：

### Vue SFC

- `vue-vite`
- `vue-rspack`
- `mobile-vue-vite`
- `mobile-vue-rspack`
- `vue-chat-vite`
- `vue-chat-rspack`

### Vue TSX

- `vue-tsx-vite`
- `vue-tsx-rspack`
- `mobile-vue-tsx-vite`
- `mobile-vue-tsx-rspack`
- `vue-chat-tsx-vite`
- `vue-chat-tsx-rspack`

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
pnpm create tdesign my-app --template react-chat-rspack
```

按 UI 和打包工具组合指定：

```bash
pnpm create tdesign my-app --ui vue --bundler vite
pnpm create tdesign my-app --ui react --bundler rspack
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
    --package-manager NAME
    --pm NAME
-f, --force
-y, --yes
-h, --help
```

## Notes

- `chat` 模板默认提供一个可运行的聊天前端壳子，真实模型接口需要你在 `App.vue` 或 `App.tsx` 里补充 `chatServiceConfig`。
- Vue 相关模板支持 SFC 和 TSX 两种风格，交互时会提示选择。
- `mobile-vue` 模板在 pnpm v11+ 环境下首次安装会自动放行 `vue-demi` 的构建脚本。

## Development

```bash
pnpm install
pnpm build
pnpm typecheck
```
