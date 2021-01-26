<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-2">
          <h1>Login:</h1>
          <h3>{{ $USER ? $USER.email : "nothing" }}</h3>
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
          <div class="bt-login">
            <button class="btn btn-success" @click="login">Login</button>
          </div>
          <p>
            You dont have account?
            <router-link to="/register">Create account.</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      try {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(
            (user) => {
              this.$router.replace("/home");
              alert("Bem vindo " + user.user.email + ".");
            },
            (err) => {
              switch (err.code) {
                case "auth/email-already-in-use":
                  alert("Este e-mail já está sendo usado por outra conta.");
                  break;
                case "auth/invalid-email":
                  alert("E-mail inválido.");
                  break;
                case "auth/user-disabled":
                  alert("Este usuário foi desativado.");
                  break;
                case "auth/operationNotAllowed":
                  alert("Operação não permitida.");
                  break;
                case "auth/wrong-password":
                  alert("Senha incorreta.");
                  break;
                case "auth/user-not-found":
                  alert("Não encontramos uma conta com o e-mail fornecido.");
                  break;
                case "auth/internal-error":
                  alert("Erro interno.");
                  break;
                case "auth/too-many-requests":
                  alert(
                    "Você já fez tentativas demais de login, aguarde alguns minutos."
                  );
                  break;
                case "auth/operation-not-allowed":
                  alert("A operação não é permitida.");
                  break;
                case "auth/weak-password":
                  alert(
                    "A senha não é forte o suficiente, certifique-se de usar letras maiúsculas, minúsculas, números e caracteres especiais."
                  );
                  break;
                default:
                  alert(
                    "Uma falha inesperada ocorreu. Por favor, contate nosso suporte."
                  );
                  break;
              }
            }
          );
      } catch (_) {
        //
      }
    },
  },
};
</script>