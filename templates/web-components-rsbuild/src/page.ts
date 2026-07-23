export const projectName = __PROJECTNAMEJSON__
const templateName = __TEMPLATENAMEJSON__
const devCommand = __DEVCOMMANDJSON__
const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => `&#${character.charCodeAt(0)};`)

export const pageHtml = `
  <div class="starter-page">
    <header class="topbar">
      <div class="topbar-inner">
        <a class="brand" href="https://tdesign.tencent.com/" target="_blank" rel="noreferrer">
          <img src="https://tdesign.gtimg.com/site/TDesign.png" alt="TDesign" />
          <span>Web Components</span>
        </a>
        <div class="topbar-actions">
          <a class="icon-link" href="https://tdesign.tencent.com/web-components/overview" target="_blank" rel="noreferrer" aria-label="Open component documentation" title="Component documentation">
            <t-icon-book-open></t-icon-book-open>
          </a>
          <a class="icon-link" href="https://github.com/TDesignOteam/tdesign-web-components" target="_blank" rel="noreferrer" aria-label="Open GitHub repository" title="GitHub repository">
            <t-icon-logo-github></t-icon-logo-github>
          </a>
          <t-button id="theme-toggle" variant="text" shape="square" aria-label="Switch to dark theme" title="Switch theme">
            <t-icon-moon class="moon-icon"></t-icon-moon>
            <t-icon-sunny class="sunny-icon"></t-icon-sunny>
          </t-button>
        </div>
      </div>
    </header>

    <main class="workspace">
      <section class="welcome" aria-labelledby="starter-title">
        <div>
          <span class="status-tag status-tag-primary">${escapeHtml(templateName)}</span>
          <h1 id="starter-title">${escapeHtml(projectName)} is ready.</h1>
          <p>Build framework-agnostic interfaces with standards-based custom elements from TDesign.</p>
        </div>
        <a href="https://tdesign.tencent.com/web-components/overview" target="_blank" rel="noreferrer">
          <t-button theme="primary">Explore components</t-button>
        </a>
      </section>

      <section class="command-panel" aria-label="Development command">
        <span class="feature-icon"><t-icon-code></t-icon-code></span>
        <div class="command-copy">
          <span>Development command</span>
          <code>${escapeHtml(devCommand)}</code>
        </div>
        <span class="status-tag status-tag-success">Ready</span>
      </section>

      <section class="overview-grid" aria-label="Project overview">
        <article class="surface-card">
          <div class="overview-item">
            <span class="feature-icon"><t-icon-app></t-icon-app></span>
            <div><small>Application</small><strong>Web Components + TypeScript</strong></div>
          </div>
        </article>
        <article class="surface-card">
          <div class="overview-item">
            <span class="feature-icon"><t-icon-component-grid></t-icon-component-grid></span>
            <div><small>Design system</small><strong>TDesign Desktop</strong></div>
          </div>
        </article>
        <article class="surface-card">
          <div class="overview-item">
            <span class="feature-icon feature-icon-green"><t-icon-browse></t-icon-browse></span>
            <div><small>Runtime</small><strong>Native custom elements</strong></div>
          </div>
        </article>
      </section>

      <section class="work-grid">
        <section class="surface-card work-card" aria-labelledby="components-title">
          <h2 id="components-title">Component workspace</h2>
          <div class="component-demo">
            <div>
              <span class="demo-label">Buttons</span>
              <div class="demo-row">
                <t-button theme="primary">Primary</t-button>
                <t-button variant="outline">Outline</t-button>
                <t-button variant="text">Text</t-button>
              </div>
            </div>
            <div>
              <span class="demo-label">Status tags</span>
              <div class="demo-row">
                <span class="status-tag status-tag-success">Available</span>
                <span class="status-tag status-tag-warning">Review</span>
                <span class="status-tag status-tag-outline">Custom element</span>
              </div>
            </div>
          </div>
        </section>

        <section class="surface-card work-card" aria-labelledby="resources-title">
          <h2 id="resources-title">Resources</h2>
          <nav class="resource-list" aria-label="TDesign resources">
            <a href="https://tdesign.tencent.com/web-components/overview" target="_blank" rel="noreferrer">
              <span><strong>Component docs</strong><small>Examples and API reference</small></span>
              <t-icon-chevron-right></t-icon-chevron-right>
            </a>
            <a href="https://github.com/TDesignOteam/tdesign-web-components" target="_blank" rel="noreferrer">
              <span><strong>GitHub repository</strong><small>Source, issues, and releases</small></span>
              <t-icon-chevron-right></t-icon-chevron-right>
            </a>
            <a href="https://developer.mozilla.org/docs/Web/API/Web_components" target="_blank" rel="noreferrer">
              <span><strong>Web Components</strong><small>Platform standards on MDN</small></span>
              <t-icon-chevron-right></t-icon-chevron-right>
            </a>
          </nav>
        </section>
      </section>
    </main>
  </div>
`
