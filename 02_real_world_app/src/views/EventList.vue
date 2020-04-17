<template>
  <div>
    <h1>Events Listign</h1>
    <div v-for="{ id } in events" :key="id" class="event">
      <router-link :to="{ name: 'event-show', params: { id } }">
        event #{{ id }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [{ id: 1 }, { id: 2 }, { id: 3 }]
    };
  }
};
</script>
>
<style>
.event {
  display: inline-block;
  box-sizing: border-box;
  border: 0.25rem solid gray;
  margin: 0 0.5rem;
  padding: 0.2rem;
  border-radius: 0.5rem;
}
.event a {
  color: #2c3e50;
}
</style>
