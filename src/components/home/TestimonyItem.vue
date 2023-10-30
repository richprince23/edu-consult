<template>
    <div class="testimony-item d-flex flex-column">
      <div class="testimony-item-image text-center mb-3">
        <img :src=image alt="" lazy class="circle img-fluid">
      </div>
      <div class="testimony-item-content">
        <h4 class="text-center">{{ name }}</h4>
        <p class="text-center">
         <q class="text-black-50 fst-italic">
           {{ testimony }} 
         </q> 
        </p>
      </div>
    </div>
</template>

<script>
export default {
  name: "TestimonyItem",
  created() {},
  data() {
    return {};
  },
  props: {
    testimony: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>