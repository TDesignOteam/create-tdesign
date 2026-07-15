<script setup lang="ts">
import { ClientOnly } from 'vike-vue/ClientOnly'
import ChatPanel from './ChatPanel'
</script>

<template>
  <ClientOnly>
    <ChatPanel />
    <template #fallback>
      <div class="chatbot-host chat-placeholder">Preparing chat workspace...</div>
    </template>
  </ClientOnly>
</template>
