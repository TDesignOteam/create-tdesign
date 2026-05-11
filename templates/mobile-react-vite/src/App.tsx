import { Button, Cell, CellGroup } from 'tdesign-mobile-react'

const sections = [
  {
    title: 'Mobile-ready starter',
    description: 'Built with React, TypeScript, and TDesign Mobile React.',
  },
  {
    title: 'Fast local loop',
    description: 'Use Vite for instant dev startup and production builds.',
  },
  {
    title: 'Clean foundation',
    description: 'Start from a minimal app shell and shape the product quickly.',
  },
]

export default function App() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">__TEMPLATENAME__</p>
        <h1>Mobile TDesign Starter</h1>
        <p className="intro">
          __PROJECTNAME__ is ready for a fast mobile web prototype with React and
          TDesign Mobile.
        </p>
      </section>

      <div className="feature-group">
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
      </div>

      <section className="actions">
        <Button theme="primary" size="large" block>
          Run pnpm dev
        </Button>
        <Button variant="outline" size="large" block>
          Start Editing
        </Button>
      </section>
    </main>
  )
}
