<template>
  <form v-for="movie in movies">
    <p>¿Cuantos boletos de {{ movie.name }} necesitas?</p>
    <button
      type="button"
      v-on:click="movie.quantity -= 1"
      :disabled="movie.quantity <= 0"
    >
      -
    </button>
    {{ movie.quantity }}
    <button
      type="button"
      v-on:click="movie.quantity += 1"
      :disabled="movie.quantity == movie.available"
    >
      +
    </button>
  </form>
</template>

<script>
export default {
  name: "Form",
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
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
form {
  background: $bg;
  border: 1px solid $color;
  margin: 0 50px 25px;
  font-family: courier;
  padding: 10px 25px 25px;
  text-aling: center;
  transform: scale(1);
  transition: 0.3s transform;
}
form:hover {
  transform: scale(1.2);
}
button {
  background: $color2;
  border: 1px solid transparent;
  padding: 5px 10px;
  transition: border-color 0.15;
}
button:hover {
  border-color: $color2;
}
button[disabled] {
  opacity: 0.5;
}
</style>
