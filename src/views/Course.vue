<template>
  <b-container>
    <b-row>
      <b-col cols="12" sm="6" md="4" v-for="c in courses" :key="c.id">
        <b-card
          :title="c.examples.data.title"
          :sub-title="c.examples.data.subtitle"
        >
          <b-card-text>{{ c.examples.data.description }} </b-card-text>

          <b-card-text>{{ c.examples.data.mp3 }}</b-card-text>
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
    ...mapState(["courses"]),
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
