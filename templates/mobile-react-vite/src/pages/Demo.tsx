import { useState } from 'react'
import { Avatar, Badge, Button, Typography } from 'tdesign-mobile-react'

export default function Demo() {
  const [count, setCount] = useState(0)

  return (
    <section className="demo-panel" aria-label="交互示例">
      <div className="demo-head">
        <div className="demo-title">
          <Badge dot color="var(--td-success-color)" />
          示例
        </div>
        <span className="demo-subtitle">交互示例</span>
      </div>
      <div className="demo-stage">
        <div className="demo-card">
          <Avatar
            className="demo-mark"
            size="52px"
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
          <div className="counter" aria-label="计数器">
            <Button
              className="demo-button"
              theme="primary"
              size="large"
              shape="square"
              aria-label="减少"
              onClick={() => setCount(count - 1)}
            >
              −
            </Button>
            <span className="count">{count}</span>
            <Button
              className="demo-button"
              theme="primary"
              size="large"
              shape="square"
              aria-label="增加"
              onClick={() => setCount(count + 1)}
            >
              +
            </Button>
          </div>
          <div className="hint">编辑首页文件并保存，查看热更新效果</div>
        </div>
      </div>
    </section>
  )
}
