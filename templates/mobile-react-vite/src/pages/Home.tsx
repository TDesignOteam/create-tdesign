import { Button, Cell, CellGroup } from 'tdesign-mobile-react'
import { AppIcon } from 'tdesign-icons-react'

const sections = [
  {
    title: 'Starter stack',
    description: 'Built with React, TypeScript, and TDesign Mobile React.',
  },
  {
    title: 'Build workflow',
    description: 'Use Vite for instant local startup and production builds.',
  },
  {
    title: 'Next step',
    description: 'Open src/pages/Home.tsx and start shaping __PROJECTNAME__.',
  },
]

export default function HomePage() {
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
            __PROJECTNAME__ is ready for a fast mobile web prototype with React and
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
          Open src/pages/Home.tsx
        </Button>
      </section>
    </main>
  )
}
