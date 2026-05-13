import { defineComponent } from 'vue'
import { Chatbot } from '@tdesign-vue-next/chat'

export default defineComponent(() => {
  return () => <Chatbot defaultMessages={[]} />
})
