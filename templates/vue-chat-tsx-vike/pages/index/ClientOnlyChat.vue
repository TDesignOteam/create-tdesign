<script setup lang="ts">
import { ClientOnly } from 'vike-vue/ClientOnly'
import Demo from './Demo'
</script>

<template>
  <ClientOnly>
    <Demo />
    <template #fallback>
      <div class="chatbot-host chat-placeholder">Preparing chat workspace...</div>
    </template>
  </ClientOnly>
</template>
