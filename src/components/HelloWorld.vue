<template>
  <v-container>
    <div class="text-center">
      <v-row>
        <h3>{{ $USER ? $USER.email : "nothing" }}</h3>
      </v-row>
      <v-row>
        <h4>{{ msg }}</h4>
      </v-row>
      <v-row>
        <button class="btn btn-info" @click="buscaAPI">Buscar</button>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    msg: "teste",
  }),
  methods: {
    buscaAPI() {
      this.$http.get(this.$SERVE + "/teste").then(
        (res) => {
          this.msg = res.data;
        },
        (err) => {
          this.msg = err.message;
        }
      );
    },
  },
};
</script>
