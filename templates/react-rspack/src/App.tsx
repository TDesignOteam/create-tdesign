import { Button, Card, Space } from 'tdesign-react'

const sections = [
  {
    title: 'Starter stack',
    description: 'Built with React, TypeScript, and TDesign desktop components.',
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

export default function App() {
  return (
    <main className="page-shell">
      <section className="hero-grid">
        <Card className="hero-card" bordered={false}>
          <Space direction="vertical" size={20}>
            <p className="eyebrow">__TEMPLATENAME__</p>
            <div className="hero-copy">
              <h1 className="hero-title">Create TDesign</h1>
              <p className="hero-intro">
                Your __PROJECTNAME__ project is ready. Start building with React,
                TypeScript, and TDesign.
              </p>
            </div>
            <div className="action-row">
              <Button theme="primary">Run pnpm dev</Button>
              <Button variant="outline">Open src/App.tsx</Button>
            </div>
          </Space>
        </Card>

        <Card className="panel-card">
          <div className="section-block">
            <p className="section-heading">Getting started</p>
            <div className="section-list">
              {sections.map((item) => (
                <div key={item.title} className="section-row">
                  <span className="section-row-title">{item.title}</span>
                  <p className="section-row-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </section>
    </main>
  )
}
