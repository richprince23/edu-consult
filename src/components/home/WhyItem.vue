<template>
  <div class="why-item">
    <div class="why-item-content">
      <h4 class="text-center">{{ caption }}</h4>
      <p class="text-center">
        {{ reason }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhyItem",
  created() { },
  data() {
    return {};
  },
  props: {
    reason: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },

  },
  methods: {},
};
</script>
