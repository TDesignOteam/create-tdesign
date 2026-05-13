import { defineComponent } from 'vue'
import { AppIcon } from 'tdesign-icons-vue-next'
import {
  Button as TButton,
  Card as TCard,
  Space as TSpace,
} from 'tdesign-vue-next'

const sections = [
  {
    title: 'Starter stack',
    description: 'Built with Vue 3, TSX, TypeScript, Vike, and TDesign desktop components.',
  },
  {
    title: 'Routing and rendering',
    description: 'Use file-system routing with an SSR-ready Vue app powered by Vike.',
  },
  {
    title: 'Next step',
    description: 'Open pages/index/+Page.tsx and start shaping __PROJECTNAME__.',
  },
]

export default defineComponent(() => {
  return () => (
    <main class="page-shell">
      <section class="hero-grid">
        <TCard class="hero-card" bordered={false}>
          <TSpace direction="vertical" size="20px">
            <p class="eyebrow">
              <AppIcon style={{ marginRight: '6px', verticalAlign: 'middle' }} />
              __TEMPLATENAME__
            </p>
            <div class="hero-copy">
              <h1 class="hero-title">Create TDesign</h1>
              <p class="hero-intro">
                Your __PROJECTNAME__ project is ready. Start building with Vue, TSX,
                TypeScript, Vike, and TDesign.
              </p>
            </div>
            <div class="action-row">
              <TButton theme="primary">Run pnpm dev</TButton>
              <TButton variant="outline">Edit pages/index/+Page.tsx</TButton>
            </div>
          </TSpace>
        </TCard>

        <TCard class="panel-card">
          <div class="section-block">
            <p class="section-heading">What you get</p>
            <div class="section-list">
              {sections.map((item) => (
                <div key={item.title} class="section-row">
                  <span class="section-row-title">{item.title}</span>
                  <p class="section-row-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </TCard>
      </section>
    </main>
  )
})
