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
