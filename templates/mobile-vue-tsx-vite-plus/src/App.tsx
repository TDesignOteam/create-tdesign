import { defineComponent } from 'vue'
import { AppIcon } from 'tdesign-icons-vue-next'

export default defineComponent({
  setup() {
    const sections = [
      {
        title: 'Starter stack',
        description: 'Built with Vue 3, TypeScript, and TDesign Mobile Vue.',
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
        <section class="hero">
          <p class="eyebrow">
            <AppIcon style="margin-right: 8px; vertical-align: middle" />
            __TEMPLATENAME__
          </p>
          <div class="hero-copy">
            <h1 class="hero-title">Mobile TDesign Starter</h1>
            <p class="hero-intro">
              __PROJECTNAME__ is ready for a fast mobile web prototype with Vue 3 and
              TDesign Mobile.
            </p>
          </div>
        </section>

        <section class="section-block">
          <p class="section-heading">Getting started</p>
          <t-cell-group theme="card">
            {sections.map((item) => (
              <t-cell
                key={item.title}
                title={item.title}
                description={item.description}
                arrow
              />
            ))}
          </t-cell-group>
        </section>

        <section class="actions">
          <t-button theme="primary" size="large" block>Run vp dev</t-button>
          <t-button variant="outline" size="large" block>Open src/App.tsx</t-button>
        </section>
      </main>
    )
  },
})
