<template>
  <div class="vendr">
    <h1>Hello {{machine.name}}</h1>
  </div>
</template>

<script>
export default {
  methods: {},
  computed: {
    machine() {
      return this.$store.state.machine;
    }
  }
};
</script>
