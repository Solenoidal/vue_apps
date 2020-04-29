<template>
  <div class="notification-bar" :class="notificationType">
    <p>{{ notification.text }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      timeout: null
    };
  },
  mounted() {
    this.timeout = setTimeout(() => {
      this.remove(this.notification);
    }, 5000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  methods: mapActions("notification", ["remove"]),
  computed: {
    notificationType() {
      return `-text-${this.notification.type}`;
    }
  }
};
</script>

<style scoped>
.notification-bar {
  margin: 1em 0 1em;
}
</style>
