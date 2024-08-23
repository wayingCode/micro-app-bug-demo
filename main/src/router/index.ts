import { defineComponent, h } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/micro-app-vue'
    },
    {
      path: '/micro-app-vue',
      name: 'micro-app-vue',
      component: defineComponent({
        render() {
          return h('micro-app', {
            name: 'micro-app-vue',
            iframe: true,
            url: 'http://localhost:3001',
            'keep-alive': true
          })
        }
      })
    },
    {
      path: '/micro-app-svelte',
      name: 'micro-app-svelte',
      component: defineComponent({
        render() {
          return h('micro-app', {
            name: 'micro-app-svelte',
            iframe: true,
            url: 'http://localhost:3002',
            'keep-alive': true
          })
        }
      })
    },
    {
      path: '/micro-app-dom7',
      name: 'micro-app-dom7',
      component: defineComponent({
        render() {
          return h('micro-app', {
            name: 'micro-app-dom7',
            iframe: true,
            url: 'http://localhost:3003',
            'keep-alive': true
          })
        }
      })
    }
  ]
});