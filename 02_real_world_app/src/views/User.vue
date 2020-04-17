<template>
  <div class="user">
    <!-- current route state is stored in $route -->
    <h1>This is {{ $route.params.username }}'s page</h1>

    <!-- using props makes code easier than $route.params.~ -->
    <p>Username: {{ username }}</p>
  </div>
</template>

<script>
export default {
  props: ["username"]
};
</script>
