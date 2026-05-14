export type UiFramework =
  | 'vue'
  | 'react'
  | 'mobile-vue'
  | 'mobile-react'
  | 'vue-chat'
  | 'react-chat'
export type Bundler = 'vite' | 'vite-plus' | 'rspack' | 'vike'
export type VueTemplateStyle = 'sfc' | 'tsx'
export type TemplateImportMode = 'full' | 'on-demand'
export type TemplateId =
  | 'vue-vite'
  | 'vue-vite-plus'
  | 'vue-vite-on-demand'
  | 'vue-vite-plus-on-demand'
  | 'vue-tsx-vite'
  | 'vue-tsx-vite-plus'
  | 'vue-vike'
  | 'vue-vike-on-demand'
  | 'vue-tsx-vike'
  | 'react-vite'
  | 'react-vite-plus'
  | 'mobile-react-vite'
  | 'mobile-react-vite-plus'
  | 'mobile-vue-vike'
  | 'mobile-vue-vike-on-demand'
  | 'mobile-vue-tsx-vike'
  | 'react-chat-vite'
  | 'react-chat-vite-plus'
  | 'vue-chat-vike'
  | 'vue-chat-vike-on-demand'
  | 'vue-chat-tsx-vike'
  | 'vue-rspack'
  | 'vue-rspack-on-demand'
  | 'vue-tsx-rspack'
  | 'react-rspack'
  | 'mobile-react-rspack'
  | 'react-chat-rspack'
  | 'react-vike'
  | 'mobile-react-vike'
  | 'react-chat-vike'
  | 'mobile-vue-vite'
  | 'mobile-vue-vite-plus'
  | 'mobile-vue-vite-on-demand'
  | 'mobile-vue-vite-plus-on-demand'
  | 'mobile-vue-tsx-vite'
  | 'mobile-vue-tsx-vite-plus'
  | 'mobile-vue-rspack'
  | 'mobile-vue-rspack-on-demand'
  | 'mobile-vue-tsx-rspack'
  | 'vue-chat-vite'
  | 'vue-chat-vite-plus'
  | 'vue-chat-vite-on-demand'
  | 'vue-chat-vite-plus-on-demand'
  | 'vue-chat-tsx-vite'
  | 'vue-chat-tsx-vite-plus'
  | 'vue-chat-rspack'
  | 'vue-chat-rspack-on-demand'
  | 'vue-chat-tsx-rspack'

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
    id: 'vue-vite-plus',
    importMode: 'full',
    ui: 'vue',
    bundler: 'vite-plus',
    vueTemplateStyle: 'sfc',
    display: 'Vue + Vite+',
    description: 'Vue 3 + TypeScript + Vite+ + tdesign-vue-next',
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
    id: 'vue-vite-plus-on-demand',
    importMode: 'on-demand',
    ui: 'vue',
    bundler: 'vite-plus',
    vueTemplateStyle: 'sfc',
    display: 'Vue + Vite+ (On-demand)',
    description: 'Vue 3 + TypeScript + Vite+ + tdesign-vue-next on-demand',
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
    id: 'vue-tsx-vite-plus',
    ui: 'vue',
    bundler: 'vite-plus',
    vueTemplateStyle: 'tsx',
    display: 'Vue + TSX + Vite+',
    description: 'Vue 3 + TSX + TypeScript + Vite+ + tdesign-vue-next',
  },
  {
    id: 'react-vite',
    ui: 'react',
    bundler: 'vite',
    display: 'React + Vite',
    description: 'React + TypeScript + tdesign-react',
  },
  {
    id: 'react-vite-plus',
    ui: 'react',
    bundler: 'vite-plus',
    display: 'React + Vite+',
    description: 'React + TypeScript + Vite+ + tdesign-react',
  },
  {
    id: 'vue-rspack',
    importMode: 'full',
    ui: 'vue',
    bundler: 'rspack',
    vueTemplateStyle: 'sfc',
    display: 'Vue + Rspack',
    description: 'Vue 3 + TypeScript + tdesign-vue-next',
  },
  {
    id: 'vue-rspack-on-demand',
    importMode: 'on-demand',
    ui: 'vue',
    bundler: 'rspack',
    vueTemplateStyle: 'sfc',
    display: 'Vue + Rspack (On-demand)',
    description: 'Vue 3 + TypeScript + tdesign-vue-next on-demand',
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
    id: 'react-vike',
    ui: 'react',
    bundler: 'vike',
    display: 'React + Vike',
    description: 'React + TypeScript + Vike + tdesign-react',
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
    id: 'mobile-vue-vite',
    importMode: 'full',
    ui: 'mobile-vue',
    bundler: 'vite',
    vueTemplateStyle: 'sfc',
    display: 'Mobile Vue + Vite',
    description: 'Vue 3 + TypeScript + tdesign-mobile-vue',
  },
  {
    id: 'mobile-vue-vite-plus',
    importMode: 'full',
    ui: 'mobile-vue',
    bundler: 'vite-plus',
    vueTemplateStyle: 'sfc',
    display: 'Mobile Vue + Vite+',
    description: 'Vue 3 + TypeScript + Vite+ + tdesign-mobile-vue',
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
    id: 'mobile-vue-vite-plus-on-demand',
    importMode: 'on-demand',
    ui: 'mobile-vue',
    bundler: 'vite-plus',
    vueTemplateStyle: 'sfc',
    display: 'Mobile Vue + Vite+ (On-demand)',
    description: 'Vue 3 + TypeScript + Vite+ + tdesign-mobile-vue on-demand',
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
    id: 'mobile-vue-tsx-vite-plus',
    ui: 'mobile-vue',
    bundler: 'vite-plus',
    vueTemplateStyle: 'tsx',
    display: 'Mobile Vue + TSX + Vite+',
    description: 'Vue 3 + TSX + TypeScript + Vite+ + tdesign-mobile-vue',
  },
  {
    id: 'mobile-react-vite',
    ui: 'mobile-react',
    bundler: 'vite',
    display: 'Mobile React + Vite',
    description: 'React + TypeScript + tdesign-mobile-react',
  },
  {
    id: 'mobile-react-vite-plus',
    ui: 'mobile-react',
    bundler: 'vite-plus',
    display: 'Mobile React + Vite+',
    description: 'React + TypeScript + Vite+ + tdesign-mobile-react',
  },
  {
    id: 'mobile-vue-rspack',
    importMode: 'full',
    ui: 'mobile-vue',
    bundler: 'rspack',
    vueTemplateStyle: 'sfc',
    display: 'Mobile Vue + Rspack',
    description: 'Vue 3 + TypeScript + tdesign-mobile-vue',
  },
  {
    id: 'mobile-vue-rspack-on-demand',
    importMode: 'on-demand',
    ui: 'mobile-vue',
    bundler: 'rspack',
    vueTemplateStyle: 'sfc',
    display: 'Mobile Vue + Rspack (On-demand)',
    description: 'Vue 3 + TypeScript + tdesign-mobile-vue on-demand',
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
    id: 'vue-chat-vite-plus',
    importMode: 'full',
    ui: 'vue-chat',
    bundler: 'vite-plus',
    vueTemplateStyle: 'sfc',
    display: 'Vue Chat + Vite+',
    description: 'Vue 3 + TypeScript + Vite+ + @tdesign-vue-next/chat',
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
    id: 'vue-chat-vite-plus-on-demand',
    importMode: 'on-demand',
    ui: 'vue-chat',
    bundler: 'vite-plus',
    vueTemplateStyle: 'sfc',
    display: 'Vue Chat + Vite+ (On-demand)',
    description: 'Vue 3 + TypeScript + Vite+ + @tdesign-vue-next/chat on-demand',
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
    id: 'vue-chat-tsx-vite-plus',
    ui: 'vue-chat',
    bundler: 'vite-plus',
    vueTemplateStyle: 'tsx',
    display: 'Vue Chat + TSX + Vite+',
    description: 'Vue 3 + TSX + TypeScript + Vite+ + @tdesign-vue-next/chat',
  },
  {
    id: 'react-chat-vite',
    ui: 'react-chat',
    bundler: 'vite',
    display: 'React Chat + Vite',
    description: 'React + TypeScript + @tdesign-react/chat',
  },
  {
    id: 'react-chat-vite-plus',
    ui: 'react-chat',
    bundler: 'vite-plus',
    display: 'React Chat + Vite+',
    description: 'React + TypeScript + Vite+ + @tdesign-react/chat',
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
    id: 'vue-chat-rspack',
    importMode: 'full',
    ui: 'vue-chat',
    bundler: 'rspack',
    vueTemplateStyle: 'sfc',
    display: 'Vue Chat + Rspack',
    description: 'Vue 3 + TypeScript + @tdesign-vue-next/chat',
  },
  {
    id: 'vue-chat-rspack-on-demand',
    importMode: 'on-demand',
    ui: 'vue-chat',
    bundler: 'rspack',
    vueTemplateStyle: 'sfc',
    display: 'Vue Chat + Rspack (On-demand)',
    description: 'Vue 3 + TypeScript + @tdesign-vue-next/chat on-demand',
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
  { value: 'vite-plus', label: 'Vite+' },
  { value: 'rspack', label: 'Rspack' },
  { value: 'vike', label: 'Vike' },
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
