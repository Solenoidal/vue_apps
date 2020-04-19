<template>
  <div>
    <!-- simple state usage is calling $state directly => {{$state.user.name}} -->
    <h1>Create new event, {{ user.name }}</h1>
    <p>There are {{ catLength }} categories</p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
    <p>There are {{ activeTodosCount }} todos</p>
    <div v-for="todo in todos" :key="todo.id">
      <div>
        {{ todo.title }}
      </div>
    </div>
  </div>
</template>

//
<script>
/* mapState is helper function processing state */
import { mapState, mapGetters } from "vuex";
export default {
  // more useful way to use state is pass it to a method in computed property
  // computed: {
  //   userName() {
  //     return this.$state.user.name;
  //   }
  // },
  //
  // or using mapState method
  // computed: mapState({
  //   username: state => state.user.name,
  //   categories: "categories"
  // }),
  //
  // the simplest state processing but it is used for the top-level state
  // computed: mapState(["user", "categories"])
  //
  // if you want to ues mapState with other method, you can use spread operator
  computed: {
    ...mapGetters(["catLength", "activeTodosCount"]),
    ...mapState(["user", "categories", "todos"])
  }
};
</script>
