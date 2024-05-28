<template>
  <header>
    <div class="header__image-wr">
      <img src="../../public/img/lion1.png" alt="">
    </div>
    <h1>Composition api tutorial</h1>
    <nav class="header__nav">
      <router-link to='/'>Home</router-link>
      <router-link to='/todo'>Todo</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header-component'
};
</script>

<style scoped>
header {
  background-color: #b1dbe9;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1
{
  font-size: 30px;
  font-weight: 700;
}
.header__image-wr
{
  width: 80px;
  height: 80px;
}
.header__image-wr img
{
  width: 100%;
}
.header__nav > *:not(:last-child)
{
  margin-right: 10px;
}
</style>

