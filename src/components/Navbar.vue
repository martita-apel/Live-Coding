<template>
  <div id="navbar">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand to="/"><b>Live Coding</b></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Buscar"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0 mr-2">Buscar</b-button>
            </b-nav-form>

            <b-navbar-nav>
              <b-nav-item to="/about">Acerca de</b-nav-item>
            </b-navbar-nav>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>Usuario</em>
              </template>
              <b-dropdown-item to="/login" @click="logout">{{
                currentUser ? "Cerrar Sesión" : "Iniciar Sesión"
              }}</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import firebase from "firebase";

export default {
  name: "Navbar",
  data() {
    return {};
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    ...mapActions(["updateUser"]),
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.updateUser(null);
        });
    },
  },
};
</script>

<style scoped lang="scss"></style>
