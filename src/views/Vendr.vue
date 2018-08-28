<template>
  <div class="vendr">
    <h1>Welcome to my {{machine.name}} Machine</h1>
    <div class="sale-items">
      

    </div>
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
