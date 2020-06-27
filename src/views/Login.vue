<template>
  <div class="login">
    <b-form id="form" :model="usuario">
      <b-card id="card_form">
        <h1 class="titulo_form">Iniciar Sesión</h1>
        <hr />
        <h5 class="bajada_form">
          ¡Hola! Te damos la bienvenida a <b>Live Coding</b>. Regístrate para
          ver todo el contenido.
        </h5>
        <b-form-input
          id="input-name"
          type="email"
          placeholder="Ingresa tu email"
          v-model="usuario.email"
          required
        ></b-form-input>

        <b-form-input
          id="input-password"
          type="password"
          placeholder="Ingresa tu contraseña"
          v-model="usuario.password"
          required
        ></b-form-input>

        <b-button id="form_boton" variant="warning" @click="login"
          >INGRESAR</b-button
        >
      </b-card>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      usuario: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["updateUser"]),
    login(e) {
      e.preventDefault();
      firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario.email, this.usuario.password)
        .then((user) => {
          console.log(user);
          let usuario = this.usuario.email;
          this.updateUser(usuario);
          this.$router.push("/");
          alert("Te has registrado con éxito!");
        })
        .catch(() => {
          this.updateUser(null);
          alert("¡Error al iniciar sesión!");
        });
    },
  },
};
</script>

<style scoped lang="scss">
#form {
  margin: 60px 20px;
}
#card_form {
  max-width: 50%;
  margin: auto;
  padding: 20px;
  border-radius: 15px;
}
.titulo_form {
  margin-bottom: 20px;
}
hr {
  border: 0.5px solid #2c3e50;
  max-width: 50%;
  margin: 20px auto;
}
.bajada_form {
  margin: 20px 10px;
}
#input-name {
  padding: 20px;
  margin: 10px auto;
  max-width: 100%;
  min-width: 80%;
}
#input-password {
  padding: 20px;
  margin: 10px auto;
  max-width: 100%;
  min-width: 80%;
}
#form_boton {
  color: white;
  margin-top: 20px;
  letter-spacing: 1px;
}
</style>
