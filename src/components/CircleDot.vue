<template>
  <div class="circle-dot m-3"></div>
</template>

<script>
export default {
  name: "CircleDot",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
  .circle-dot{
  height: 1.5rem !important;
  width: 1.5rem !important;
  border-radius: 50% !important;
  background-color: $primary-100;
}
</style>