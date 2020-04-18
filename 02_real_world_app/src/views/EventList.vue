<template>
  <div>
    <h1>Events Listign</h1>
    <div v-for="event in events" :key="event.id" class="event">
      <EventCard v-bind="event" />
    </div>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
export default {
  components: { EventCard },
  data() {
    return {
      events: [
        {
          id: 1,
          title: "JS-Conf 2020",
          date: new Date(),
          time: "11:20",
          attendees: { id: "jfiaejif", name: "solenoid" }
        },
        { id: 2 },
        { id: 3 }
      ]
    };
  }
};
</script>

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
