import { AppIcon } from 'tdesign-icons-react'
import { Button, Cell, CellGroup } from 'tdesign-mobile-react'

const sections = [
  {
    title: 'Starter stack',
    description: 'Built with React, TypeScript, Vike, and TDesign Mobile React.',
  },
  {
    title: 'Routing and rendering',
    description: 'Use file-system routing with an SSR-ready mobile web app powered by Vike.',
  },
  {
    title: 'Next step',
    description: 'Open pages/index/+Page.tsx and start shaping __PROJECTNAME__.',
  },
]

export default function Page() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">
          <AppIcon style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          __TEMPLATENAME__
        </p>
        <div className="hero-copy">
          <h1 className="hero-title">Mobile TDesign Starter</h1>
          <p className="hero-intro">
            __PROJECTNAME__ is ready for a mobile web app with React, Vike, and
            TDesign Mobile.
          </p>
        </div>
      </section>

      <section className="section-block">
        <p className="section-heading">Getting started</p>
        <CellGroup theme="card">
          {sections.map((item) => (
            <Cell
              key={item.title}
              title={item.title}
              description={item.description}
              arrow
            />
          ))}
        </CellGroup>
      </section>

      <section className="actions">
        <Button theme="primary" size="large" block>
          Run pnpm dev
        </Button>
        <Button variant="outline" size="large" block>
          Edit pages/index/+Page.tsx
        </Button>
      </section>
    </main>
  )
}
