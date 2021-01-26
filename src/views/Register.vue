<template>
  <div class="sign-up">
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-2">
          <h1>Register:</h1>
          <input
            class="form-control"
            type="text"
            id="email"
            placeholder="Email"
            v-model="email"
          />
          <br />
          <input
            class="form-control"
            type="password"
            id="password"
            placeholder="Password"
            v-model="password"
          />
          <br />
          <div class="bt-register">
            <button class="btn btn-success" @click="register">Register</button>
          </div>
          <p>
            You already have an account
            <router-link to="/login">Go Back!</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            console.log(user);
          },
          (err) => {
            alert("Aconteceu algo inesperado: " + err.message);
          }
        );
    },
  },
};
</script>