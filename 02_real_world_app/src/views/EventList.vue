<template>
  <div>
    <h1>Events Lists</h1>
    <div v-for="event in events" :key="event.id" class="event">
      <EventCard v-bind="event" />
    </div>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService.js";

export default {
  components: { EventCard },
  data() {
    return {
      events: []
    };
  },
  async created() {
    const res = await EventService.getEvents().catch(err => {
      console.log("error: ", err.message);
    });
    this.events = res.data;
  }
};
</script>
