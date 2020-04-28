<template>
  <div>
    <span class="date"> {{ date }}({{ day }}) </span>
    <span class="time"> {{ hour }}:{{ minuite }}:{{ second }} </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      now: new Date()
    };
  },
  computed: {
    hour() {
      let hour = this.now.getHours();
      if (hour > 12) {
        hour -= 12;
      }
      return this.zeroFill(hour);
    },
    minuite() {
      const minuite = this.now.getMinutes();
      return this.zeroFill(minuite);
    },
    second() {
      const sec = this.now.getSeconds();
      return this.zeroFill(sec);
    },
    date() {
      return this.now.toLocaleDateString();
    },
    day() {
      const day = ["日", "月", "火", "水", "木", "金", "土"];
      return day[this.now.getDay()];
    }
  },
  methods: {
    zeroFill: num => String(num).padStart(2, "0")
  },
  mounted() {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
}
div > span {
  margin: 1rem;
}
</style>
