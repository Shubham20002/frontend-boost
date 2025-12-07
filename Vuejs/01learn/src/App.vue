<template>
  <div>
    <h1>count: {{ count }}</h1>
    <button @click="increase">Increase</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.Count.count;
    }
  },
  methods: {
    increase() {
      this.$store.commit("Count/increasecount");
    }
  }
}
</script>
