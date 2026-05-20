export type UiFramework =
  | 'vue'
  | 'react'
  | 'mobile-vue'
  | 'mobile-react'
  | 'vue-chat'
  | 'react-chat'
export type Bundler = 'vite' | 'rsbuild' | 'vike' | 'nuxt' | 'next'
export type VueTemplateStyle = 'sfc' | 'tsx'
export type TemplateImportMode = 'full' | 'on-demand'
export type TemplateId =
  | 'vue-vite'
  | 'vue-vite-on-demand'
  | 'vue-tsx-vite'
  | 'vue-vike'
  | 'vue-vike-on-demand'
  | 'vue-tsx-vike'
  | 'vue-nuxt'
  | 'react-vite'
  | 'react-next'
  | 'mobile-react-vite'
  | 'mobile-vue-vike'
  | 'mobile-vue-vike-on-demand'
  | 'mobile-vue-tsx-vike'
  | 'react-chat-vite'
  | 'vue-chat-vike'
  | 'vue-chat-vike-on-demand'
  | 'vue-chat-tsx-vike'
  | 'vue-rsbuild'
  | 'vue-rsbuild-on-demand'
  | 'vue-tsx-rsbuild'
  | 'react-rsbuild'
  | 'mobile-react-rsbuild'
  | 'react-chat-rsbuild'
  | 'react-vike'
  | 'mobile-react-vike'
  | 'react-chat-vike'
  | 'mobile-vue-vite'
  | 'mobile-vue-vite-on-demand'
  | 'mobile-vue-tsx-vite'
  | 'mobile-vue-rsbuild'
  | 'mobile-vue-rsbuild-on-demand'
  | 'mobile-vue-tsx-rsbuild'
  | 'vue-chat-vite'
  | 'vue-chat-vite-on-demand'
  | 'vue-chat-tsx-vite'
  | 'vue-chat-rsbuild'
  | 'vue-chat-rsbuild-on-demand'
  | 'vue-chat-tsx-rsbuild'

export interface TemplateMeta {
  id: TemplateId
  ui: UiFramework
  bundler: Bundler
  vueTemplateStyle?: VueTemplateStyle
  importMode?: TemplateImportMode
  display: string
  description: string
}

export const TEMPLATES: TemplateMeta[] = [
  {
    id: 'vue-vite',
    importMode: 'full',
    ui: 'vue',
    bundler: 'vite',
    vueTemplateStyle: 'sfc',
    display: 'Vue + Vite',
    description: 'Vue 3 + TypeScript + tdesign-vue-next',
  },
  {
    id: 'vue-vite-on-demand',
    importMode: 'on-demand',
    ui: 'vue',
    bundler: 'vite',
    vueTemplateStyle: 'sfc',
    display: 'Vue + Vite (On-demand)',
    description: 'Vue 3 + TypeScript + tdesign-vue-next on-demand',
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
    id: 'vue-rsbuild',
    importMode: 'full',
    ui: 'vue',
    bundler: 'rsbuild',
    vueTemplateStyle: 'sfc',
    display: 'Vue + Rsbuild',
    description: 'Vue 3 + TypeScript + tdesign-vue-next',
  },
  {
    id: 'vue-rsbuild-on-demand',
    importMode: 'on-demand',
    ui: 'vue',
    bundler: 'rsbuild',
    vueTemplateStyle: 'sfc',
    display: 'Vue + Rsbuild (On-demand)',
    description: 'Vue 3 + TypeScript + tdesign-vue-next on-demand',
  },
  {
    id: 'vue-tsx-rsbuild',
    ui: 'vue',
    bundler: 'rsbuild',
    vueTemplateStyle: 'tsx',
    display: 'Vue + TSX + Rsbuild',
    description: 'Vue 3 + TSX + TypeScript + tdesign-vue-next',
  },
  {
    id: 'react-rsbuild',
    ui: 'react',
    bundler: 'rsbuild',
    display: 'React + Rsbuild',
    description: 'React + TypeScript + tdesign-react',
  },
  {
    id: 'react-vike',
    ui: 'react',
    bundler: 'vike',
    display: 'React + Vike',
    description: 'React + TypeScript + Vike + tdesign-react',
  },
  {
    id: 'react-next',
    ui: 'react',
    bundler: 'next',
    display: 'React + Next.js',
    description: 'React + TypeScript + Next.js + tdesign-react',
  },
  {
    id: 'vue-vike',
    importMode: 'full',
    ui: 'vue',
    bundler: 'vike',
    vueTemplateStyle: 'sfc',
    display: 'Vue + Vike',
    description: 'Vue 3 + TypeScript + Vike + tdesign-vue-next',
  },
  {
    id: 'vue-vike-on-demand',
    importMode: 'on-demand',
    ui: 'vue',
    bundler: 'vike',
    vueTemplateStyle: 'sfc',
    display: 'Vue + Vike (On-demand)',
    description: 'Vue 3 + TypeScript + Vike + tdesign-vue-next on-demand',
  },
  {
    id: 'vue-tsx-vike',
    ui: 'vue',
    bundler: 'vike',
    vueTemplateStyle: 'tsx',
    display: 'Vue + TSX + Vike',
    description: 'Vue 3 + TSX + TypeScript + Vike + tdesign-vue-next',
  },
  {
    id: 'vue-nuxt',
    importMode: 'on-demand',
    ui: 'vue',
    bundler: 'nuxt',
    vueTemplateStyle: 'sfc',
    display: 'Vue + Nuxt',
    description: 'Vue 3 + TypeScript + Nuxt 4 + tdesign-vue-next on-demand',
  },
  {
    id: 'mobile-vue-vite',
    importMode: 'full',
    ui: 'mobile-vue',
    bundler: 'vite',
    vueTemplateStyle: 'sfc',
    display: 'Mobile Vue + Vite',
    description: 'Vue 3 + TypeScript + tdesign-mobile-vue',
  },
  {
    id: 'mobile-vue-vite-on-demand',
    importMode: 'on-demand',
    ui: 'mobile-vue',
    bundler: 'vite',
    vueTemplateStyle: 'sfc',
    display: 'Mobile Vue + Vite (On-demand)',
    description: 'Vue 3 + TypeScript + tdesign-mobile-vue on-demand',
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
    id: 'mobile-vue-rsbuild',
    importMode: 'full',
    ui: 'mobile-vue',
    bundler: 'rsbuild',
    vueTemplateStyle: 'sfc',
    display: 'Mobile Vue + Rsbuild',
    description: 'Vue 3 + TypeScript + tdesign-mobile-vue',
  },
  {
    id: 'mobile-vue-rsbuild-on-demand',
    importMode: 'on-demand',
    ui: 'mobile-vue',
    bundler: 'rsbuild',
    vueTemplateStyle: 'sfc',
    display: 'Mobile Vue + Rsbuild (On-demand)',
    description: 'Vue 3 + TypeScript + tdesign-mobile-vue on-demand',
  },
  {
    id: 'mobile-vue-tsx-rsbuild',
    ui: 'mobile-vue',
    bundler: 'rsbuild',
    vueTemplateStyle: 'tsx',
    display: 'Mobile Vue + TSX + Rsbuild',
    description: 'Vue 3 + TSX + TypeScript + tdesign-mobile-vue',
  },
  {
    id: 'mobile-react-rsbuild',
    ui: 'mobile-react',
    bundler: 'rsbuild',
    display: 'Mobile React + Rsbuild',
    description: 'React + TypeScript + tdesign-mobile-react',
  },
  {
    id: 'mobile-react-vike',
    ui: 'mobile-react',
    bundler: 'vike',
    display: 'Mobile React + Vike',
    description: 'React + TypeScript + Vike + tdesign-mobile-react',
  },
  {
    id: 'mobile-vue-vike',
    importMode: 'full',
    ui: 'mobile-vue',
    bundler: 'vike',
    vueTemplateStyle: 'sfc',
    display: 'Mobile Vue + Vike',
    description: 'Vue 3 + TypeScript + Vike + tdesign-mobile-vue',
  },
  {
    id: 'mobile-vue-vike-on-demand',
    importMode: 'on-demand',
    ui: 'mobile-vue',
    bundler: 'vike',
    vueTemplateStyle: 'sfc',
    display: 'Mobile Vue + Vike (On-demand)',
    description: 'Vue 3 + TypeScript + Vike + tdesign-mobile-vue on-demand',
  },
  {
    id: 'mobile-vue-tsx-vike',
    ui: 'mobile-vue',
    bundler: 'vike',
    vueTemplateStyle: 'tsx',
    display: 'Mobile Vue + TSX + Vike',
    description: 'Vue 3 + TSX + TypeScript + Vike + tdesign-mobile-vue',
  },
  {
    id: 'vue-chat-vite',
    importMode: 'full',
    ui: 'vue-chat',
    bundler: 'vite',
    vueTemplateStyle: 'sfc',
    display: 'Vue Chat + Vite',
    description: 'Vue 3 + TypeScript + @tdesign-vue-next/chat',
  },
  {
    id: 'vue-chat-vite-on-demand',
    importMode: 'on-demand',
    ui: 'vue-chat',
    bundler: 'vite',
    vueTemplateStyle: 'sfc',
    display: 'Vue Chat + Vite (On-demand)',
    description: 'Vue 3 + TypeScript + @tdesign-vue-next/chat on-demand',
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
    id: 'vue-chat-vike',
    importMode: 'full',
    ui: 'vue-chat',
    bundler: 'vike',
    vueTemplateStyle: 'sfc',
    display: 'Vue Chat + Vike',
    description: 'Vue 3 + TypeScript + Vike + @tdesign-vue-next/chat',
  },
  {
    id: 'vue-chat-vike-on-demand',
    importMode: 'on-demand',
    ui: 'vue-chat',
    bundler: 'vike',
    vueTemplateStyle: 'sfc',
    display: 'Vue Chat + Vike (On-demand)',
    description: 'Vue 3 + TypeScript + Vike + @tdesign-vue-next/chat on-demand',
  },
  {
    id: 'vue-chat-tsx-vike',
    ui: 'vue-chat',
    bundler: 'vike',
    vueTemplateStyle: 'tsx',
    display: 'Vue Chat + TSX + Vike',
    description: 'Vue 3 + TSX + TypeScript + Vike + @tdesign-vue-next/chat',
  },
  {
    id: 'vue-chat-rsbuild',
    importMode: 'full',
    ui: 'vue-chat',
    bundler: 'rsbuild',
    vueTemplateStyle: 'sfc',
    display: 'Vue Chat + Rsbuild',
    description: 'Vue 3 + TypeScript + @tdesign-vue-next/chat',
  },
  {
    id: 'vue-chat-rsbuild-on-demand',
    importMode: 'on-demand',
    ui: 'vue-chat',
    bundler: 'rsbuild',
    vueTemplateStyle: 'sfc',
    display: 'Vue Chat + Rsbuild (On-demand)',
    description: 'Vue 3 + TypeScript + @tdesign-vue-next/chat on-demand',
  },
  {
    id: 'vue-chat-tsx-rsbuild',
    ui: 'vue-chat',
    bundler: 'rsbuild',
    vueTemplateStyle: 'tsx',
    display: 'Vue Chat + TSX + Rsbuild',
    description: 'Vue 3 + TSX + TypeScript + @tdesign-vue-next/chat',
  },
  {
    id: 'react-chat-rsbuild',
    ui: 'react-chat',
    bundler: 'rsbuild',
    display: 'React Chat + Rsbuild',
    description: 'React + TypeScript + @tdesign-react/chat',
  },
  {
    id: 'react-chat-vike',
    ui: 'react-chat',
    bundler: 'vike',
    display: 'React Chat + Vike',
    description: 'React + TypeScript + Vike + @tdesign-react/chat',
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
  { value: 'rsbuild', label: 'Rsbuild' },
  { value: 'vike', label: 'Vike' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'next', label: 'Next.js' },
]

export function findTemplateById(templateId: string): TemplateMeta | undefined {
  return TEMPLATES.find((template) => template.id === templateId)
}

export function findTemplateByParts(
  ui: UiFramework,
  bundler: Bundler,
  vueTemplateStyle?: VueTemplateStyle,
  importMode?: TemplateImportMode,
): TemplateMeta | undefined {
  return TEMPLATES.find(
    (template) =>
      template.ui === ui &&
      template.bundler === bundler &&
      template.vueTemplateStyle === vueTemplateStyle &&
      (importMode ? template.importMode === importMode : true),
  )
}
