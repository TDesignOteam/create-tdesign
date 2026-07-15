<script setup lang="ts">
import type {
  AIMessageContent,
  ChatServiceConfig,
  SSEChunkData,
} from '@tdesign-vue-next/chat'

const chatServiceConfig: ChatServiceConfig = {
  endpoint: 'https://1257786608-9i9j1kpa67.ap-guangzhou.tencentscf.com/sse/normal',
  stream: true,
  onMessage: (chunk: SSEChunkData): AIMessageContent => {
    const data = chunk.data as { msg?: string } | undefined

    return {
      type: 'markdown',
      data: data?.msg ?? '',
    }
  },
}
</script>

<template>
  <div class="chatbot-host">
    <t-chatbot :chat-service-config="chatServiceConfig" />
  </div>
</template>
