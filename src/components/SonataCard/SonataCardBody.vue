<template>
  <div>
    <div class="card__title">{{ opus }}</div>
    <div class="card__description">{{ musicalKey }}</div>
  </div>
</template>

<script>
export default {
  props: ["opus", "musicalKey"]
};
</script>
