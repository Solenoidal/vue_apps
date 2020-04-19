<template>
  <div>
    <!-- simple state usage is calling $state directly => {{$state.user.name}} -->
    <h1>Create new event, {{ user.name }}</h1>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
  </div>
</template>

//
<script>
/* mapState is helper function processing state */
import { mapState } from "vuex";
export default {
  // more useful way to use state is pass it to a method in computed property
  // computed: {
  //   userName() {
  //     return this.$state.user.name;
  //   }
  // },

  // or using mapState method
  // computed: mapState({
  //   username: state => state.user.name,
  //   categories: "categories"
  // }),

  // if you want to ues mapState with other method, you can use spread operator
  // computed:{
  //   some_method(){
  //     /* statement */
  //     return
  //   },
  //   ...mapState(["user"])
  // }

  // the simplest state processing but it is used for the top-level state
  computed: mapState(["user", "categories"])
};
</script>
