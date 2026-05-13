import { AppIcon } from 'tdesign-icons-react'
import { Button, Card, Space } from 'tdesign-react'

const sections = [
  {
    title: 'Starter stack',
    description: 'Built with React, TypeScript, Vike, and TDesign desktop components.',
  },
  {
    title: 'Routing and rendering',
    description: 'Use file-system routing with an SSR-ready React app powered by Vike.',
  },
  {
    title: 'Next step',
    description: 'Open pages/index/+Page.tsx and start shaping __PROJECTNAME__.',
  },
]

export default function Page() {
  return (
    <main className="page-shell">
      <section className="hero-grid">
        <Card className="hero-card" bordered={false}>
          <Space direction="vertical" size={20}>
            <p className="eyebrow">
              <AppIcon style={{ marginRight: '6px', verticalAlign: 'middle' }} />
              __TEMPLATENAME__
            </p>
            <div className="hero-copy">
              <h1 className="hero-title">Create TDesign</h1>
              <p className="hero-intro">
                Your __PROJECTNAME__ project is ready. Start building with React,
                TypeScript, Vike, and TDesign.
              </p>
            </div>
            <div className="action-row">
              <Button theme="primary">Run pnpm dev</Button>
              <Button variant="outline">Edit pages/index/+Page.tsx</Button>
            </div>
          </Space>
        </Card>

        <Card className="panel-card">
          <div className="section-block">
            <p className="section-heading">What you get</p>
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
