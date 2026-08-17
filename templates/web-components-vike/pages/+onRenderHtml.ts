import { dangerouslySkipEscape, escapeInject } from 'vike/server'
import { pageHtml, projectName } from '../src/page'
import '../src/style.css'

export function onRenderHtml() {
  return escapeInject`<!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="TDesign Web Components starter powered by TypeScript and Vike."
        />
        <title>${projectName}</title>
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
}
