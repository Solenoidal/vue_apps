<template>
  <div>
    <h1>Events Lists</h1>
    <div v-for="event in events" :key="event.id" class="event">
      <EventCard v-bind="event" />
    </div>
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
      >
        Prev Page
      </router-link>
      |
    </template>
    <template v-if="hasNext">
      <router-link :to="{ name: 'event-list', query: { page: page + 1 } }">
        Next Page
      </router-link>
    </template>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import { mapState } from "vuex";

export default {
  components: { EventCard },
  created() {
    this.$store.dispatch("fetchEvents", {
      perPage: 3,
      page: this.page
    });
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    hasNext() {
      return this.events_length >= this.page * this.perPage;
    },
    ...mapState(["events", "events_length"])
  }
};
</script>
