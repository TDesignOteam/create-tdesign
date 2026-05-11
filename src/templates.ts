export type UiFramework =
  | 'vue'
  | 'react'
  | 'mobile-vue'
  | 'mobile-react'
  | 'vue-chat'
  | 'react-chat'
export type Bundler = 'vite' | 'rspack'
export type TemplateId =
  | 'vue-vite'
  | 'react-vite'
  | 'vue-rspack'
  | 'react-rspack'
  | 'mobile-vue-vite'
  | 'mobile-react-vite'
  | 'mobile-vue-rspack'
  | 'mobile-react-rspack'
  | 'vue-chat-vite'
  | 'react-chat-vite'
  | 'vue-chat-rspack'
  | 'react-chat-rspack'

export interface TemplateMeta {
  id: TemplateId
  ui: UiFramework
  bundler: Bundler
  display: string
  description: string
}

export const TEMPLATES: TemplateMeta[] = [
  {
    id: 'vue-vite',
    ui: 'vue',
    bundler: 'vite',
    display: 'Vue + Vite',
    description: 'Vue 3 + TypeScript + tdesign-vue-next',
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
    display: 'Vue + Rspack',
    description: 'Vue 3 + TypeScript + tdesign-vue-next',
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
    display: 'Mobile Vue + Vite',
    description: 'Vue 3 + TypeScript + tdesign-mobile-vue',
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
    display: 'Mobile Vue + Rspack',
    description: 'Vue 3 + TypeScript + tdesign-mobile-vue',
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
    display: 'Vue Chat + Vite',
    description: 'Vue 3 + TypeScript + @tdesign-vue-next/chat',
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
    display: 'Vue Chat + Rspack',
    description: 'Vue 3 + TypeScript + @tdesign-vue-next/chat',
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
): TemplateMeta | undefined {
  return TEMPLATES.find((template) => template.ui === ui && template.bundler === bundler)
}
