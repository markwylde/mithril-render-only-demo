const render = require('mithril/render');
const h = require('mithril/hyperscript');

document.addEventListener('DOMContentLoaded', () => {
  const ui = h('div', 'hello world');

  render(document.body, ui);
});
