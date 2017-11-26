import Vue from 'vue'
import Router from 'vue-router'
import { mount } from 'vue-test-utils'
import RouterSync from './'

Vue.use(RouterSync)
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/', component: {
        render() {
          return null
        }
      }
    }
  ]
})

test('it works', async () => {
  const wrapper = mount({
    router,
    data() {
      return {
        foo: 'foo',
        bar: 'bar'
      }
    },
    syncDataRouter: {
      foo: 'f',
      bar: 'b'
    }
  })
  expect(wrapper.vm.$route.query).toEqual({
    f: 'foo',
    b: 'bar'
  })
  wrapper.vm.foo = 'newfoo'
  await Vue.nextTick()
  expect(wrapper.vm.$route.query).toEqual({
    f: 'newfoo',
    b: 'bar'
  })
})
