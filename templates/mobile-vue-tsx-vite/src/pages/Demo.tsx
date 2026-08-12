import { defineComponent, ref } from 'vue'
import { Badge as TBadge, Button as TButton } from 'tdesign-mobile-vue'

export default defineComponent(() => {
  const count = ref(0)
  const decrease = () => {
    count.value -= 1
  }
  const increase = () => {
    count.value += 1
  }

  return () => (
    <section class="demo-panel" aria-label="交互示例">
      <div class="demo-head">
        <div class="demo-title">
          <TBadge dot color="var(--starter-green)" />
          示例
        </div>
        <span class="demo-subtitle">交互示例</span>
      </div>
      <div class="demo-stage">
        <div class="demo-card">
          <span class="demo-mark">T</span>
          <h2>Hello, TDesign</h2>
          <p>点击按钮，体验这个模板中的基础交互。</p>
          <div class="counter" aria-label="计数器">
            <TButton
              class="demo-button"
              theme="primary"
              size="large"
              shape="square"
              aria-label="减少"
              onClick={decrease}
            >
              −
            </TButton>
            <span class="count">{count.value}</span>
            <TButton
              class="demo-button"
              theme="primary"
              size="large"
              shape="square"
              aria-label="增加"
              onClick={increase}
            >
              +
            </TButton>
          </div>
          <div class="hint">编辑首页文件并保存，查看热更新效果</div>
        </div>
      </div>
    </section>
  )
})
