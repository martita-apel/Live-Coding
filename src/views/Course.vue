<template>
  <b-container>
    <b-row>
      <b-col
        cols="12"
        sm="6"
        md="4"
        v-for="ex in course.data.examples"
        :key="ex.id"
      >
        <b-card :title="ex.data.title" :sub-title="ex.data.subtitle">
          <b-card-text>{{ ex.data.description }} </b-card-text>

          <b-card-text>{{ ex.data.mp3 }}</b-card-text>
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
    ...mapState(["course"]),
  },
  methods: {
    ...mapActions(["findCourse"]),
  },
  created() {
    this.findCourse();
  },
};
</script>

<style scoped></style>>
