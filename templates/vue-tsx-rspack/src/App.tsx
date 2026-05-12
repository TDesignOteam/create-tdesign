import { defineComponent } from 'vue'
import { AppIcon } from 'tdesign-icons-vue-next'
import {
  Button as TButton,
  Card as TCard,
  Space as TSpace,
  Tag as TTag,
} from 'tdesign-vue-next'

const highlights = [
  'Vue 3 + TSX + TypeScript',
  'Rspack dev/build pipeline',
  'TDesign desktop components',
]

export default defineComponent(() => {
  return () => (
    <main class="page-shell">
      <section class="hero-grid">
        <TCard class="hero-card" bordered={false}>
          <TSpace direction="vertical" size="16px">
            <TTag theme="primary" variant="light">
              <AppIcon style={{ marginRight: '6px', verticalAlign: 'middle' }} />
              __TEMPLATENAME__
            </TTag>
            <div>
              <h1>Create TDesign</h1>
              <p>
                Your __PROJECTNAME__ project is ready. Start building with Vue,
                TSX, TypeScript, and TDesign.
              </p>
            </div>
            <TSpace>
              <TButton theme="primary">Open Docs</TButton>
              <TButton variant="outline">Start Editing</TButton>
            </TSpace>
          </TSpace>
        </TCard>

        <TCard title="What is included" class="panel-card">
          <TSpace direction="vertical" size="12px">
            {highlights.map((item) => (
              <div key={item} class="feature-row">
                <TTag theme="success" variant="light">
                  Ready
                </TTag>
                <span>{item}</span>
              </div>
            ))}
          </TSpace>
        </TCard>
      </section>
    </main>
  )
})
