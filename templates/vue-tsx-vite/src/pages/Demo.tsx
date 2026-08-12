import { defineComponent, ref } from 'vue'
import {
  Badge as TBadge,
  Button as TButton,
  Card as TCard,
  Space as TSpace,
  Tag as TTag,
} from 'tdesign-vue-next'

export default defineComponent({
  name: 'Demo',
  setup() {
    const count = ref(0)
    const decrease = () => {
      count.value -= 1
    }
    const increase = () => {
      count.value += 1
    }

    return () => (
      <TCard class="demo-panel" bordered>
        {{
          header: () => (
            <div class="demo-head">
              <div class="demo-title">
                <TBadge dot color="var(--starter-green)" />
                示例
              </div>
              <span class="demo-subtitle">交互示例</span>
            </div>
          ),
          default: () => (
            <div class="demo-stage">
              <div class="demo-card">
                <span class="demo-mark">T</span>
                <h2>Hello, TDesign</h2>
                <p>点击按钮，体验这个模板中的基础交互。</p>
                <TSpace size={12} align="center">
                  <TButton
                    class="demo-button"
                    shape="square"
                    theme="primary"
                    onClick={decrease}
                    aria-label="减少"
                  >
                    {{
                      icon: () => '−',
                    }}
                  </TButton>
                  <TTag class="count" size="large" theme="primary" variant="light">
                    {count.value}
                  </TTag>
                  <TButton
                    class="demo-button"
                    shape="square"
                    theme="primary"
                    onClick={increase}
                    aria-label="增加"
                  >
                    {{
                      icon: () => '+',
                    }}
                  </TButton>
                </TSpace>
                <div class="hint">编辑首页文件并保存，查看热更新效果</div>
              </div>
            </div>
          ),
        }}
      </TCard>
    )
  },
})
