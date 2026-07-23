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
          <t-tag theme="primary" variant="light">__TEMPLATENAME__</t-tag>
          <h1 id="starter-title">__PROJECTNAME__ is ready.</h1>
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
          <code>__DEVCOMMAND__</code>
        </div>
        <t-tag theme="success" variant="light">Ready</t-tag>
      </section>

      <section class="overview-grid" aria-label="Project overview">
        <t-card>
          <div class="overview-item">
            <span class="feature-icon"><t-icon-app></t-icon-app></span>
            <div><small>Application</small><strong>Web Components + TypeScript</strong></div>
          </div>
        </t-card>
        <t-card>
          <div class="overview-item">
            <span class="feature-icon"><t-icon-component-grid></t-icon-component-grid></span>
            <div><small>Design system</small><strong>TDesign Desktop</strong></div>
          </div>
        </t-card>
        <t-card>
          <div class="overview-item">
            <span class="feature-icon feature-icon-green"><t-icon-browse></t-icon-browse></span>
            <div><small>Runtime</small><strong>Native custom elements</strong></div>
          </div>
        </t-card>
      </section>

      <section class="work-grid">
        <t-card title="Component workspace" header-bordered>
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
                <t-tag theme="success" variant="light">Available</t-tag>
                <t-tag theme="warning" variant="light">Review</t-tag>
                <t-tag theme="primary" variant="outline">Custom element</t-tag>
              </div>
            </div>
          </div>
        </t-card>

        <t-card title="Resources" header-bordered>
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
        </t-card>
      </section>
    </main>
  </div>
`
