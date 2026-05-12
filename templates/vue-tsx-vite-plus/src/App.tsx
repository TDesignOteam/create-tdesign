import { defineComponent } from 'vue'
import { AppIcon } from 'tdesign-icons-vue-next'

export default defineComponent({
  setup() {
    const sections = [
      {
        title: 'Starter stack',
        description: 'Built with Vue 3, TypeScript, and TDesign desktop components.',
      },
      {
        title: 'Build workflow',
        description: 'Use Vite Plus for instant local startup, linting, formatting, and production builds.',
      },
      {
        title: 'Next step',
        description: 'Open src/App.tsx and start shaping __PROJECTNAME__.',
      },
    ]

    return () => (
      <main class="page-shell">
        <section class="hero-grid">
          <t-card class="hero-card" bordered={false}>
            <t-space direction="vertical" size="20px">
              <p class="eyebrow">
                <AppIcon style="margin-right: 6px; vertical-align: middle" />
                __TEMPLATENAME__
              </p>
              <div class="hero-copy">
                <h1 class="hero-title">Create TDesign</h1>
                <p class="hero-intro">
                  Your __PROJECTNAME__ project is ready. Start building with Vue 3,
                  TypeScript, TDesign, and Vite Plus.
                </p>
              </div>
              <div class="action-row">
                <t-button theme="primary">Run vp dev</t-button>
                <t-button variant="outline">Open src/App.tsx</t-button>
              </div>
            </t-space>
          </t-card>

          <t-card class="panel-card">
            <div class="section-block">
              <p class="section-heading">Getting started</p>
              <div class="section-list">
                {sections.map((item) => (
                  <div key={item.title} class="section-row">
                    <span class="section-row-title">{item.title}</span>
                    <p class="section-row-description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </t-card>
        </section>
      </main>
    )
  },
})
