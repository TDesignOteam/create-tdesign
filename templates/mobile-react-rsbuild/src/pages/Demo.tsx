import { useState } from 'react'
import { Badge, Button } from 'tdesign-mobile-react'

export default function Demo() {
  const [count, setCount] = useState(0)

  return (
    <section className="demo-panel" aria-label="交互示例">
      <div className="demo-head">
        <div className="demo-title">
          <Badge dot color="var(--starter-green)" />
          示例
        </div>
        <span className="demo-subtitle">交互示例</span>
      </div>
      <div className="demo-stage">
        <div className="demo-card">
          <span className="demo-mark">T</span>
          <h2>Hello, TDesign</h2>
          <p>点击按钮，体验这个模板中的基础交互。</p>
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
