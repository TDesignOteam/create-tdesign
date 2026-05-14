import { ChatBot } from '@tdesign-react/chat'
import type { AIMessageContent, ChatServiceConfig, SSEChunkData } from '@tdesign-react/chat'
import '@tdesign-react/chat/es/style/index.js'

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

export default function ChatPanel() {
  return <ChatBot chatServiceConfig={chatServiceConfig} />
}
