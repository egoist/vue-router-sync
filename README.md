# vue-router-sync

[![NPM version](https://img.shields.io/npm/v/vue-router-sync.svg?style=flat)](https://npmjs.com/package/vue-router-sync) [![NPM downloads](https://img.shields.io/npm/dm/vue-router-sync.svg?style=flat)](https://npmjs.com/package/vue-router-sync) [![CircleCI](https://circleci.com/gh/egoist/vue-router-sync/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/vue-router-sync/tree/master)

Keep vm data and router state in sync.

## Install

```bash
yarn add vue-router-sync
```

CDN: [UNPKG](https://unpkg.com/vue-router-sync/) | [jsDelivr](https://cdn.jsdelivr.net/npm/vue-router-sync/) (available as `window.RouterSync`)

## Usage

Note that this is supposed to work with `vue-router`:

```js
import Vue from 'vue'
import RouterSync from 'vue-router-sync'

Vue.use(RouterSync)
```

Then in your component

```vue
<script>
export default {
  data() {
    return {
      foo: 'foo'
    }
  },
  syncDataRouter: {
    foo: 'foo_in_query'
  }
}
</script>
```

Mount the app and the URL will be updated to `/?foo_in_query=foo`. Everytime the `foo` is changed the corresponding URL query will be updated too.

## License

MIT &copy; [EGOIST](https://github.com/egoist)
