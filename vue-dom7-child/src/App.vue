<script setup lang="ts">
import { onMounted } from 'vue';
import { $, removeAttr, children } from 'dom7';
$.fn.removeAttr = removeAttr
$.fn.children = children


const removeElAttr = (collection: any) => {
  console.log(collection)
  collection.removeAttr('style')
  const children = collection.children()
  if (children && children.length){
    removeElAttr(children)
  }
}

onMounted(() => {
  setTimeout(() => {
    removeElAttr($('.ul'))
  }, 1000);
})
</script>

<template>
  <ul class="ul" style="background-color: bisque;">
    <li style="color:red;">1</li>
    <li style="color:red;">2</li>
    <li style="color:red;">3</li>
    <li style="color:red;">4</li>
    <li style="color:red;">5</li>
  </ul>
</template>

<style scoped>

</style>
