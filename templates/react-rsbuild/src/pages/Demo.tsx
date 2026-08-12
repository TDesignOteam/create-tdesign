import { useState } from 'react'
import { Badge, Button, Card, Space, Tag } from 'tdesign-react'

export default function Demo() {
  const [count, setCount] = useState(0)

  return (
    <Card
      className="demo-panel"
      bordered
      header={
        <div className="demo-head">
          <div className="demo-title">
            <Badge dot color="var(--starter-green)" />
            示例
          </div>
          <span className="demo-subtitle">交互示例</span>
        </div>
      }
    >
      <div className="demo-stage">
        <div className="demo-card">
          <span className="demo-mark">T</span>
          <h2>Hello, TDesign</h2>
          <p>点击按钮，体验这个模板中的基础交互。</p>
          <Space size={12} align="center">
            <Button
              className="demo-button"
              shape="square"
              theme="primary"
              onClick={() => setCount((c) => c - 1)}
              aria-label="减少"
            >
              −
            </Button>
            <Tag className="count" size="large" theme="primary" variant="light">
              {count}
            </Tag>
            <Button
              className="demo-button"
              shape="square"
              theme="primary"
              onClick={() => setCount((c) => c + 1)}
              aria-label="增加"
            >
              +
            </Button>
          </Space>
          <div className="hint">编辑首页文件并保存，查看热更新效果</div>
        </div>
      </div>
    </Card>
  )
}
