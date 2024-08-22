<script lang="ts">
  import { SvelteUIProvider } from '@svelteuidev/core'
  import { Button, Modal } from '@svelteuidev/core';
  import Counter from './lib/Counter.svelte'
  let modalOpened = false
  const handleClick = () => {
    modalOpened = !modalOpened
  }
  const handleClose = () => {
    modalOpened = false
  }
</script>

<main>
  <SvelteUIProvider>
    <Button on:click={handleClick}>Click me</Button>
    <Modal opened={modalOpened} on:close={handleClose}>
      <h1>Modal</h1>
    </Modal>
    <Counter />
  </SvelteUIProvider>
</main>

<style>
</style>
