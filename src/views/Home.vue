<template>
  <div class="home">
    <h1>Cursos disponibles</h1>
    <p class="bajada">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sint
      corrupti sunt sed ducimus itaque eaque, accusantium est fuga inventore
      modi? Iusto laboriosam cumque laborum atque corporis deleniti a deserunt.
    </p>
    <Cards />
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";

export default {
  name: "Home",
  components: {
    Cards,
  },
};
</script>

<style scoped>
h1 {
  margin: 40px 0 20px 0;
}
.bajada {
  max-width: 80%;
  margin: auto;
  padding-bottom: 30px;
}
</style>
