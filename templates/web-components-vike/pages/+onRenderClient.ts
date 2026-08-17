export async function onRenderClient() {
  const { initializeApp } = await import('../src/client')
  initializeApp()
}
