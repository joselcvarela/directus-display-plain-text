<template>
  <div>{{ plain }}</div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent();
</script>

<script setup lang="ts">
const props = defineProps<{
  value: string;
}>();

const plain = computed(() => {
  return innerHTML(props.value);
});

function innerHTML(html) {
  let div = document.createElement("DIV");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}
</script>
