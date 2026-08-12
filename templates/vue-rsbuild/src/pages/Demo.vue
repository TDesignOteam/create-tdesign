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
          <t-badge dot color="var(--td-success-color)" />
          示例
        </div>
        <span class="demo-subtitle">交互示例</span>
      </div>
    </template>
    <div class="demo-stage">
      <div class="demo-card">
        <t-avatar
          class="demo-mark"
          size="54px"
          shape="round"
          style="
            background: var(--td-brand-color);
            color: var(--td-text-color-anti);
            font-weight: 800;
          "
        >
          T
        </t-avatar>
        <t-typography-title class="demo-card-title" level="h3">Hello, TDesign</t-typography-title>
        <t-typography-paragraph class="demo-card-copy" theme="secondary">
          点击按钮，体验这个模板中的基础交互。
        </t-typography-paragraph>
        <t-space :size="12" align="center">
          <t-button theme="primary" size="large" shape="square" aria-label="减少" @click="decrease">
            −
          </t-button>
          <t-button variant="outline" size="large" disabled>{{ count }}</t-button>
          <t-button theme="primary" size="large" shape="square" aria-label="增加" @click="increase">
            +
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
  border-color: var(--td-component-border);
  border-radius: var(--td-radius-large);
  background: var(--td-bg-color-container);
  box-shadow: var(--td-shadow-1);
}
.demo-panel :deep(.t-card__header) {
  min-height: 56px;
  padding: 0 20px;
  border-bottom: 1px solid var(--td-component-border);
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
  box-shadow: 0 0 0 3px var(--td-success-color-light);
}
.demo-subtitle {
  color: var(--td-text-color-placeholder);
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
  background-color: var(--td-bg-color-secondarycontainer);
  background-image: radial-gradient(var(--td-component-border) 0.7px, transparent 0.7px);
  background-size: 18px 18px;
}
.demo-card {
  width: min(100%, 440px);
  padding: 38px 32px 32px;
  border: 1px solid var(--td-component-border);
  border-radius: var(--td-radius-default);
  background: var(--td-bg-color-container);
  box-shadow: var(--td-shadow-1);
  text-align: center;
}
.demo-mark {
  margin: 0 auto 18px;
}
.demo-card-title {
  margin: 0 0 8px;
  font-size: 22px;
}
.demo-card-copy {
  margin: 0 0 24px;
  font-size: 13px;
  line-height: 1.65;
}
.hint {
  margin-top: 22px;
  color: var(--td-text-color-placeholder);
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
