import { defineComponent, ref } from 'vue'
import {
  Avatar as TAvatar,
  Badge as TBadge,
  Button as TButton,
  Card as TCard,
  Space as TSpace,
  Paragraph as TParagraph,
  Text as TText,
  Title as TTitle,
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
                <TBadge dot color="var(--td-success-color)" />
                示例
              </div>
              <span class="demo-subtitle">交互示例</span>
            </div>
          ),
          default: () => (
            <div class="demo-stage">
              <div class="demo-card">
                <TAvatar
                  class="demo-mark"
                  size="54px"
                  shape="round"
                  style={{
                    background: 'var(--td-brand-color)',
                    color: 'var(--td-text-color-anti)',
                    fontWeight: 800,
                  }}
                >
                  T
                </TAvatar>
                <TTitle class="demo-card-title" level="h3">
                  Hello, TDesign
                </TTitle>
                <TText class="demo-card-copy" theme="secondary">
                  点击按钮，体验这个模板中的基础交互。
                </TText>
                <TSpace size={12} align="center">
                  <TButton
                    theme="primary"
                    size="large"
                    shape="square"
                    aria-label="减少"
                    onClick={decrease}
                  >
                    −
                  </TButton>
                  <TButton variant="outline" size="large" disabled>
                    {count.value}
                  </TButton>
                  <TButton
                    theme="primary"
                    size="large"
                    shape="square"
                    aria-label="增加"
                    onClick={increase}
                  >
                    +
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
