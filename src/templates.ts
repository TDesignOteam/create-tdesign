export type UiFramework =
  | 'vue'
  | 'react'
  | 'mobile-vue'
  | 'mobile-react'
  | 'vue-chat'
  | 'react-chat'
export type Bundler = 'vite' | 'rspack'
export type VueTemplateStyle = 'sfc' | 'tsx'
export type TemplateId =
  | 'vue-vite'
  | 'vue-tsx-vite'
  | 'react-vite'
  | 'vue-rspack'
  | 'vue-tsx-rspack'
  | 'react-rspack'
  | 'mobile-vue-vite'
  | 'mobile-vue-tsx-vite'
  | 'mobile-react-vite'
  | 'mobile-vue-rspack'
  | 'mobile-vue-tsx-rspack'
  | 'mobile-react-rspack'
  | 'vue-chat-vite'
  | 'vue-chat-tsx-vite'
  | 'react-chat-vite'
  | 'vue-chat-rspack'
  | 'vue-chat-tsx-rspack'
  | 'react-chat-rspack'

export interface TemplateMeta {
  id: TemplateId
  ui: UiFramework
  bundler: Bundler
  vueTemplateStyle?: VueTemplateStyle
  display: string
  description: string
}

export const TEMPLATES: TemplateMeta[] = [
  {
    id: 'vue-vite',
    ui: 'vue',
    bundler: 'vite',
    vueTemplateStyle: 'sfc',
    display: 'Vue + Vite',
    description: 'Vue 3 + TypeScript + tdesign-vue-next',
  },
  {
    id: 'vue-tsx-vite',
    ui: 'vue',
    bundler: 'vite',
    vueTemplateStyle: 'tsx',
    display: 'Vue + TSX + Vite',
    description: 'Vue 3 + TSX + TypeScript + tdesign-vue-next',
  },
  {
    id: 'react-vite',
    ui: 'react',
    bundler: 'vite',
    display: 'React + Vite',
    description: 'React + TypeScript + tdesign-react',
  },
  {
    id: 'vue-rspack',
    ui: 'vue',
    bundler: 'rspack',
    vueTemplateStyle: 'sfc',
    display: 'Vue + Rspack',
    description: 'Vue 3 + TypeScript + tdesign-vue-next',
  },
  {
    id: 'vue-tsx-rspack',
    ui: 'vue',
    bundler: 'rspack',
    vueTemplateStyle: 'tsx',
    display: 'Vue + TSX + Rspack',
    description: 'Vue 3 + TSX + TypeScript + tdesign-vue-next',
  },
  {
    id: 'react-rspack',
    ui: 'react',
    bundler: 'rspack',
    display: 'React + Rspack',
    description: 'React + TypeScript + tdesign-react',
  },
  {
    id: 'mobile-vue-vite',
    ui: 'mobile-vue',
    bundler: 'vite',
    vueTemplateStyle: 'sfc',
    display: 'Mobile Vue + Vite',
    description: 'Vue 3 + TypeScript + tdesign-mobile-vue',
  },
  {
    id: 'mobile-vue-tsx-vite',
    ui: 'mobile-vue',
    bundler: 'vite',
    vueTemplateStyle: 'tsx',
    display: 'Mobile Vue + TSX + Vite',
    description: 'Vue 3 + TSX + TypeScript + tdesign-mobile-vue',
  },
  {
    id: 'mobile-react-vite',
    ui: 'mobile-react',
    bundler: 'vite',
    display: 'Mobile React + Vite',
    description: 'React + TypeScript + tdesign-mobile-react',
  },
  {
    id: 'mobile-vue-rspack',
    ui: 'mobile-vue',
    bundler: 'rspack',
    vueTemplateStyle: 'sfc',
    display: 'Mobile Vue + Rspack',
    description: 'Vue 3 + TypeScript + tdesign-mobile-vue',
  },
  {
    id: 'mobile-vue-tsx-rspack',
    ui: 'mobile-vue',
    bundler: 'rspack',
    vueTemplateStyle: 'tsx',
    display: 'Mobile Vue + TSX + Rspack',
    description: 'Vue 3 + TSX + TypeScript + tdesign-mobile-vue',
  },
  {
    id: 'mobile-react-rspack',
    ui: 'mobile-react',
    bundler: 'rspack',
    display: 'Mobile React + Rspack',
    description: 'React + TypeScript + tdesign-mobile-react',
  },
  {
    id: 'vue-chat-vite',
    ui: 'vue-chat',
    bundler: 'vite',
    vueTemplateStyle: 'sfc',
    display: 'Vue Chat + Vite',
    description: 'Vue 3 + TypeScript + @tdesign-vue-next/chat',
  },
  {
    id: 'vue-chat-tsx-vite',
    ui: 'vue-chat',
    bundler: 'vite',
    vueTemplateStyle: 'tsx',
    display: 'Vue Chat + TSX + Vite',
    description: 'Vue 3 + TSX + TypeScript + @tdesign-vue-next/chat',
  },
  {
    id: 'react-chat-vite',
    ui: 'react-chat',
    bundler: 'vite',
    display: 'React Chat + Vite',
    description: 'React + TypeScript + @tdesign-react/chat',
  },
  {
    id: 'vue-chat-rspack',
    ui: 'vue-chat',
    bundler: 'rspack',
    vueTemplateStyle: 'sfc',
    display: 'Vue Chat + Rspack',
    description: 'Vue 3 + TypeScript + @tdesign-vue-next/chat',
  },
  {
    id: 'vue-chat-tsx-rspack',
    ui: 'vue-chat',
    bundler: 'rspack',
    vueTemplateStyle: 'tsx',
    display: 'Vue Chat + TSX + Rspack',
    description: 'Vue 3 + TSX + TypeScript + @tdesign-vue-next/chat',
  },
  {
    id: 'react-chat-rspack',
    ui: 'react-chat',
    bundler: 'rspack',
    display: 'React Chat + Rspack',
    description: 'React + TypeScript + @tdesign-react/chat',
  },
]

export const UI_OPTIONS: Array<{ value: UiFramework; label: string }> = [
  { value: 'vue', label: 'Vue' },
  { value: 'react', label: 'React' },
  { value: 'mobile-vue', label: 'Mobile Vue' },
  { value: 'mobile-react', label: 'Mobile React' },
  { value: 'vue-chat', label: 'Vue Chat' },
  { value: 'react-chat', label: 'React Chat' },
]

export const BUNDLER_OPTIONS: Array<{ value: Bundler; label: string }> = [
  { value: 'vite', label: 'Vite' },
  { value: 'rspack', label: 'Rspack' },
]

export function findTemplateById(templateId: string): TemplateMeta | undefined {
  return TEMPLATES.find((template) => template.id === templateId)
}

export function findTemplateByParts(
  ui: UiFramework,
  bundler: Bundler,
  vueTemplateStyle?: VueTemplateStyle,
): TemplateMeta | undefined {
  return TEMPLATES.find(
    (template) =>
      template.ui === ui &&
      template.bundler === bundler &&
      template.vueTemplateStyle === vueTemplateStyle,
  )
}
