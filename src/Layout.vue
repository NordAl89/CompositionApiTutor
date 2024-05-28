<template>
  <div>
    <Header />
    <main>
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'lay-out',
  components: {
    Header,
    Footer,
  }
};
</script>

<style scoped>
main {
  min-height: calc(100vh - 120px); /* Adjust based on header/footer height */
  padding: 1rem;
  box-sizing: border-box;
}
</style>
