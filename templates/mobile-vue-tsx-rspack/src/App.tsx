import { defineComponent } from 'vue'
import { AppIcon } from 'tdesign-icons-vue-next'
import {
  Button as TButton,
  Cell as TCell,
  CellGroup as TCellGroup,
} from 'tdesign-mobile-vue'

const sections = [
  {
    title: 'Mobile-ready starter',
    description: 'Built with Vue 3, TSX, TypeScript, and TDesign Mobile Vue.',
  },
  {
    title: 'Fast local loop',
    description: 'Use Rspack for quick rebuilds and production output.',
  },
  {
    title: 'Clean foundation',
    description: 'Start from a minimal app shell and shape the product quickly.',
  },
]

export default defineComponent(() => {
  return () => (
    <main class="page-shell">
      <section class="hero">
        <p class="eyebrow">
          <AppIcon style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          __TEMPLATENAME__
        </p>
        <h1>Mobile TDesign Starter</h1>
        <p class="intro">
          __PROJECTNAME__ is ready for a fast mobile web prototype with Vue, TSX,
          and TDesign Mobile.
        </p>
      </section>

      <TCellGroup theme="card">
        {sections.map((item) => (
          <TCell
            key={item.title}
            title={item.title}
            description={item.description}
            arrow
          />
        ))}
      </TCellGroup>

      <section class="actions">
        <TButton theme="primary" size="large" block>
          Run pnpm dev
        </TButton>
        <TButton variant="outline" size="large" block>
          Start Editing
        </TButton>
      </section>
    </main>
  )
})
