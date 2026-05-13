import TDesign from 'tdesign-vue-next'
import type { PageContext } from 'vike/types'

export function onCreateApp(pageContext: PageContext) {
  if (pageContext.isRenderingHead) {
    return
  }

  pageContext.app!.use(TDesign)
}
