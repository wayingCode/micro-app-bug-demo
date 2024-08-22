<script lang="ts">
import { defineComponent, h } from 'vue'
export default defineComponent({
  render() {
    return h('micro-app', {
      name: 'app2',
      url: 'http://localhost:3002',
      iframe: true
    })
  }
})
</script>