<template>
  <div>
    <h2>Composition API</h2>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'composition-api',
  setup() {
    const title = ref('Composition API')
    return {
      title
    };
  }
};
</script>

<style scoped>

</style>
