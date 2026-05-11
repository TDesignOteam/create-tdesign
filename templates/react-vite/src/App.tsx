import { Button, Card, Space, Tag } from 'tdesign-react'

const highlights = [
  'React + TypeScript',
  'Vite dev/build pipeline',
  'TDesign desktop components',
]

export default function App() {
  return (
    <main className="page-shell">
      <section className="hero-grid">
        <Card className="hero-card" bordered={false}>
          <Space direction="vertical" size={16}>
            <Tag theme="primary" variant="light-outline">
              __TEMPLATENAME__
            </Tag>
            <div>
              <h1>Create TDesign</h1>
              <p>
                Your __PROJECTNAME__ project is ready. Start building with React,
                TypeScript, and TDesign.
              </p>
            </div>
            <Space>
              <Button theme="primary">Open Docs</Button>
              <Button variant="outline">Start Editing</Button>
            </Space>
          </Space>
        </Card>

        <Card title="What is included" className="panel-card">
          <Space direction="vertical" size={12}>
            {highlights.map((item) => (
              <div key={item} className="feature-row">
                <Tag theme="success" variant="light-outline">
                  Ready
                </Tag>
                <span>{item}</span>
              </div>
            ))}
          </Space>
        </Card>
      </section>
    </main>
  )
}
