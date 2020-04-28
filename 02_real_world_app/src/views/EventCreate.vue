<template>
  <div>
    <!-- simple state usage is calling $state directly => {{$state.user.name}} -->
    <h1>Create new event</h1>
    <form @submit.prevent="createEvent">
      <label for="">Select category</label>
      <select id="" v-model="event.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>
      <div class="question">Name & descrive your event</div>
      <div class="field">
        <label for="">Title</label
        ><input
          type="text"
          v-model="event.title"
          placeholder="Add an event title"
        />
      </div>
      <div class="field">
        <label for="">Description</label
        ><input
          type="text"
          v-model="event.description"
          placeholder="Add a discription"
        />
      </div>
      <div class="question">Where is your event?</div>
      <div class="field">
        <label for="">Location</label
        ><input
          type="text"
          v-model="event.location"
          placeholder="Add a location"
        />
      </div>
      <div class="question">When is your event?</div>
      <div class="field">
        <label for="">Date</label>
        <datepicker v-model="event.date" placeholder="Select a date" />
      </div>
      <div class="field">
        <label for="">Select a time</label>
        <select id="" v-model="event.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>
      <input type="submit" value="Submit" class="btn -fill-gradient" />
    </form>
  </div>
</template>

//
<script>
/* mapState is helper function processing state */
// import { mapState, mapGetters } from "vuex";
import datepicker from "vuejs-datepicker";
export default {
  components: {
    datepicker
  },
  data() {
    const times = [];
    for (let i = 1; i <= 24; i++) {
      times.push(i + ":00");
    }
    return {
      times,
      categories: this.$store.state.categories,
      event: this.createFreshEventObject()
    };
  },
  methods: {
    async createEvent() {
      try {
        await this.$store.dispatch("event/createEvent", this.event);
        this.$router.push({
          name: "event-show",
          params: { id: this.event.id }
        });
        this.event = this.createFreshEventObject();
      } catch (error) {
        () => {};
      }
    },
    createFreshEventObject() {
      const user = this.$store.state.user.user;
      const id = Math.floor(Math.random() * 10000000);
      return {
        id,
        user,
        category: "",
        organizer: user,
        title: "",
        description: "",
        location: "",
        date: "",
        time: "",
        attendees: []
      };
    }
  }
};
</script>
