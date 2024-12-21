
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 4977, hash: '6b37883f5dd37ce41c8d11b6725067a4adf36c44f71b4b13fd93cd2d6a514105', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1076, hash: '3421bd4031c3a5b196cdf070d29709069f3e83ec740a136cf28310869a7908b1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
