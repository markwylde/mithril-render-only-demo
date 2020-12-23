# mithril-render-only-demo

This shows a demo of using only two files from mithril js to create a ui.

```javascript
const render = require('mithril/render');
const h = require('mithril/hyperscript');

document.addEventListener('DOMContentLoaded', () => {
  const ui = h('div', 'hello world');

  render(document.body, ui);
});
```

This results in a bundle and minified build of **17K**.

Whereas using the full mithril library:

```javascript
const { render, h } = require('mithril');
```

Will result in a size of **33K**.
