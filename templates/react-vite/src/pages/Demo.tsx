import { useState } from 'react'
import { Avatar, Badge, Button, Card, Space, Typography } from 'tdesign-react'

export default function Demo() {
  const [count, setCount] = useState(0)
  const decrease = () => {
    setCount((c) => c - 1)
  }
  const increase = () => {
    setCount((c) => c + 1)
  }

  return (
    <Card
      className="demo-panel"
      bordered
      header={
        <div className="demo-head">
          <div className="demo-title">
            <Badge dot color="var(--td-success-color)" />
            示例
          </div>
          <span className="demo-subtitle">交互示例</span>
        </div>
      }
    >
      <div className="demo-stage">
        <div className="demo-card">
          <Avatar
            className="demo-mark"
            size="54px"
            shape="round"
            style={{
              background: 'var(--td-brand-color)',
              color: 'var(--td-text-color-anti)',
              fontWeight: 800,
            }}
          >
            T
          </Avatar>
          <Typography.Title className="demo-card-title" level="h3">
            Hello, TDesign
          </Typography.Title>
          <Typography.Text className="demo-card-copy" theme="secondary">
            点击按钮，体验这个模板中的基础交互。
          </Typography.Text>
          <Space size={12} align="center">
            <Button
              theme="primary"
              size="large"
              shape="square"
              aria-label="减少"
              onClick={decrease}
            >
              −
            </Button>
            <Button variant="outline" size="large" disabled>
              {count}
            </Button>
            <Button
              theme="primary"
              size="large"
              shape="square"
              aria-label="增加"
              onClick={increase}
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
