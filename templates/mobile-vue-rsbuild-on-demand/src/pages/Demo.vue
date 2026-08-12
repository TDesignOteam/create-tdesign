<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const decrease = () => {
  count.value -= 1
}
const increase = () => {
  count.value += 1
}
</script>

<template>
  <section class="demo-panel" aria-label="交互示例">
    <div class="demo-head">
      <div class="demo-title">
        <t-badge dot color="var(--starter-green)" />
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
          <t-button
            class="demo-button"
            theme="primary"
            size="large"
            shape="square"
            aria-label="减少"
            @click="decrease"
          >
            −
          </t-button>
          <span class="count">{{ count }}</span>
          <t-button
            class="demo-button"
            theme="primary"
            size="large"
            shape="square"
            aria-label="增加"
            @click="increase"
          >
            +
          </t-button>
        </div>
        <div class="hint">编辑首页文件并保存，查看热更新效果</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.demo-panel {
  overflow: hidden;
  border: 1px solid var(--starter-border);
  border-radius: 12px;
  background: var(--starter-surface);
  box-shadow: 0 14px 40px rgba(31, 45, 61, 0.08);
}
.demo-head {
  display: flex;
  height: 56px;
  padding: 0 18px;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border-bottom: 1px solid var(--starter-border);
}
.demo-title {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 14px;
  font-weight: 600;
}
.demo-title :deep(.t-badge) {
  box-shadow: 0 0 0 3px var(--starter-green-soft);
}
.demo-subtitle {
  color: var(--starter-muted);
  font-size: 11px;
}
.demo-stage {
  display: grid;
  min-height: 320px;
  padding: 32px 18px;
  place-items: center;
  background-color: var(--starter-surface-soft);
  background-image: radial-gradient(var(--starter-border) 0.7px, transparent 0.7px);
  background-size: 18px 18px;
}
.demo-card {
  width: min(100%, 360px);
  padding: 32px 24px 26px;
  border: 1px solid var(--starter-border);
  border-radius: 10px;
  background: var(--starter-surface);
  box-shadow: 0 16px 38px rgba(31, 45, 61, 0.1);
  text-align: center;
}
.demo-mark {
  display: grid;
  width: 52px;
  height: 52px;
  margin: 0 auto 16px;
  place-items: center;
  color: #fff;
  border-radius: 8px;
  background: var(--starter-blue);
  font-size: 24px;
  font-weight: 800;
}
.demo-card h2 {
  margin: 0 0 8px;
  font-size: 20px;
  letter-spacing: 0;
}
.demo-card p {
  margin: 0 0 22px;
  color: var(--starter-secondary);
  font-size: 13px;
  line-height: 1.65;
}
.counter {
  display: inline-flex;
  align-items: center;
  gap: 14px;
}
.count {
  display: grid;
  min-width: 60px;
  height: 36px;
  padding: 0 12px;
  place-items: center;
  border: 1px solid var(--starter-border);
  border-radius: 6px;
  background: var(--starter-surface-soft);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 15px;
  font-weight: 600;
}
.demo-button {
  min-width: 40px;
  height: 40px;
  font-size: 18px;
}
.hint {
  margin-top: 20px;
  color: var(--starter-muted);
  font-size: 11px;
}
</style>
