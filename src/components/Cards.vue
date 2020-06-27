<template>
  <div id="cards">
    <div v-for="c in courses" :key="c.id">
      <b-card
        :title="c.data.name"
        :img-src="c.data.img"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <!--       <b-card-title>{{ c.data.name }}</b-card-title>
 -->
        <b-card-text>
          {{ c.data.description }}
        </b-card-text>

        <b-button to="/course1" variant="warning" id="boton"
          >Saber más</b-button
        >
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Cards",
  computed: {
    ...mapState(["courses"]),
  },
  methods: {
    ...mapActions(["getCourses"]),
  },
  created() {
    this.getCourses();
  },
};
</script>

<style scoped lang="scss">
#cards {
  display: flex;
  margin: auto;
}
#boton {
  color: white;
}
</style>
