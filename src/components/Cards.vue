<template>
  <b-container>
    <b-row>
      <b-col cols="12" sm="6" md="4" v-for="c in courses" :key="c.id">
        <b-card
          :title="c.data.name"
          :img-src="c.data.img"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="card_music mb-2"
        >
          <b-card-text>
            {{ c.data.description }}
          </b-card-text>

          <b-button to="/course" variant="warning" id="boton"
            >Saber más</b-button
          >
          <!-- <b-button :to="`/course/${course.id}`" variant="warning" id="boton"
            >Saber más</b-button
          > -->
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Cards",
  computed: {
    ...mapState(["courses", "course"]),
  },
  methods: {
    ...mapActions(["getCourses", "findCourse"]),
  },
  created() {
    this.getCourses();
  },
};
</script>

<style scoped lang="scss">
#boton {
  color: white;
}
</style>
