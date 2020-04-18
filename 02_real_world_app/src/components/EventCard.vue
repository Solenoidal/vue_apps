<template>
  <div class="card-container">
    event #{{ id }}
    <router-link :to="{ name: 'event-show', params: { id } }">
      <h1 class="title">
        {{ title }}
      </h1>
    </router-link>
    <p class="date">
      {{ date }}
    </p>
    <p class="time">
      {{ time }}
    </p>
    <div class="attendees">
      <BaseIcon name="users" />
      {{ attendees.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: Number, required: true },
    title: String,
    date: Date,
    time: String,
    attendees: {
      type: Object,
      default: () => {
        return { id: null, name: null };
      }
    }
  }
};
</script>

<style>
.attendees {
  display: inline-flex;
  align-items: center;
}
</style>
