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
  <t-card class="demo-panel" :bordered="true">
    <template #header>
      <div class="demo-head">
        <div class="demo-title">
          <t-badge dot color="var(--starter-green)" />
          示例
        </div>
        <span class="demo-subtitle">交互示例</span>
      </div>
    </template>
    <div class="demo-stage">
      <div class="demo-card">
        <span class="demo-mark">T</span>
        <h2>Hello, TDesign</h2>
        <p>点击按钮，体验这个模板中的基础交互。</p>
        <t-space :size="12" align="center">
          <t-button
            class="demo-button"
            shape="square"
            theme="primary"
            @click="decrease"
            aria-label="减少"
          >
            <template #icon>−</template>
          </t-button>
          <t-tag class="count" size="large" theme="primary" variant="light">
            {{ count }}
          </t-tag>
          <t-button
            class="demo-button"
            shape="square"
            theme="primary"
            @click="increase"
            aria-label="增加"
          >
            <template #icon>+</template>
          </t-button>
        </t-space>
        <div class="hint">编辑首页文件并保存，查看热更新效果</div>
      </div>
    </div>
  </t-card>
</template>

<style scoped>
.demo-panel {
  overflow: hidden;
  border-color: var(--starter-border);
  border-radius: 8px;
  background: var(--starter-surface);
  box-shadow: var(--starter-shadow);
}
.demo-panel :deep(.t-card__header) {
  min-height: 56px;
  padding: 0 20px;
  border-bottom: 1px solid var(--starter-border);
}
.demo-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
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
.demo-panel :deep(.t-card__body) {
  padding: 0;
}
.demo-stage {
  display: grid;
  min-height: 430px;
  padding: 40px 24px;
  place-items: center;
  background-color: var(--starter-surface-soft);
  background-image: radial-gradient(var(--starter-border) 0.7px, transparent 0.7px);
  background-size: 18px 18px;
}
.demo-card {
  width: min(100%, 440px);
  padding: 38px 32px 32px;
  border: 1px solid var(--starter-border);
  border-radius: 8px;
  background: var(--starter-surface);
  box-shadow: 0 16px 38px rgba(31, 45, 61, 0.1);
  text-align: center;
}
.demo-mark {
  display: grid;
  width: 54px;
  height: 54px;
  margin: 0 auto 18px;
  place-items: center;
  color: #fff;
  border-radius: 8px;
  background: var(--starter-blue);
  font-size: 25px;
  font-weight: 800;
}
.demo-card h2 {
  margin: 0 0 8px;
  font-size: 22px;
  letter-spacing: 0;
}
.demo-card p {
  margin: 0 0 24px;
  color: var(--starter-secondary);
  font-size: 13px;
  line-height: 1.65;
}
.demo-button {
  min-width: 36px;
  width: 36px;
  height: 36px;
  font-size: 18px;
}
.count {
  width: 64px;
  text-align: center;
}
.hint {
  margin-top: 22px;
  color: var(--starter-muted);
  font-size: 11px;
}

@media (max-width: 600px) {
  .demo-stage {
    min-height: 360px;
    padding: 24px 14px;
  }
  .demo-card {
    padding: 30px 18px 26px;
  }
}
</style>
