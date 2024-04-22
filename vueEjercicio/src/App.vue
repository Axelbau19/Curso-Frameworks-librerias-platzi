<template>
  <Title text="Peliculas" />
  <Form />
</template>

<script>
import Title from "./components/Tittle.vue";
import Form from "./components/Form.vue";

export default {
  name: "App",
  components: {
    Form: Form,
    Title: Title,
  },
  data() {
    return {
      movies: [
        {
          name: "Avengers",
          available: 3,
          quantity: 0,
        },
        {
          name: "Terminator",
          available: 5,
          quantity: 0,
        },
      ],
    };
  },
  methods() {
    return {
      updateMovie(newMovie) {
        const movieIndex = this.movies.findIndex(
          (movie) => movie.name === newMovie.name
        );

        this.movies[movieIndex] = newMovie;
      },
    };
  },
};
</script>

<style lang="scss">
@import "./styles/_variables.scss";
body {
  background: $bg;
  color: $color;
  margin: 0;
  font-family: sans-serif;
}
</style>
