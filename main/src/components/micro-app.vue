<script lang="ts">
import { defineComponent, h } from 'vue'
export default defineComponent({
  render() {
    return h('micro-app', {
      name: 'app1',
      url: 'http://localhost:3001',
      iframe: true,
      fiber: true,
      'keep-alive': true,
    })
  }
})
</script>