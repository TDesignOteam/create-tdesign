import { defineComponent } from 'vue'
import {
  Button as TButton,
  Cell as TCell,
  CellGroup as TCellGroup,
} from 'tdesign-mobile-vue'

const sections = [
  {
    title: 'Starter stack',
    description: 'Built with Vue 3, TSX, TypeScript, and TDesign Mobile Vue.',
  },
  {
    title: 'Build workflow',
    description: 'Use Rspack for quick rebuilds and production output.',
  },
  {
    title: 'Next step',
    description: 'Open src/App.tsx and start shaping __PROJECTNAME__.',
  },
]

export default defineComponent(() => {
  return () => (
    <main class="page-shell">
      <section class="hero">
        <p class="eyebrow">__TEMPLATENAME__</p>
        <div class="hero-copy">
          <h1 class="hero-title">Mobile TDesign Starter</h1>
          <p class="hero-intro">
            __PROJECTNAME__ is ready for a fast mobile web prototype with Vue, TSX,
            and TDesign Mobile.
          </p>
        </div>
      </section>

      <section class="section-block">
        <p class="section-heading">Getting started</p>
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
      </section>

      <section class="actions">
        <TButton theme="primary" size="large" block>
          Run pnpm dev
        </TButton>
        <TButton variant="outline" size="large" block>
          Open src/App.tsx
        </TButton>
      </section>
    </main>
  )
})
