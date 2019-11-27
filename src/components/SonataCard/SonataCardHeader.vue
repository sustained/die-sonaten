<template>
  <div class="card__header">
    <div class="card__avatar">{{ number }}</div>
  </div>
</template>

<script>
export default {
  props: ["number", "opus", "nickname"]
};
</script>
