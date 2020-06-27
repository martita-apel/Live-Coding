<template>
  <div class="notfound">
    <h1>
      La página que <br />
      buscas no existe
    </h1>
    <b-button to="/">Voler al Inicio</b-button>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 100px;
  margin: 80px 20px 0 20px;
  padding-bottom: 50px;
}
</style>
