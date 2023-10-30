<template >
    <li class="nav-item">
      <router-link class="nav-link" :to="to">
        {{ title }}
      </router-link>
    </li>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  defineProps({
    title: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      default: '/',
    },
  });
  </script>
  
    <style scoped>
    .nav-item {
      margin: 0 0.2rem;
    }
    </style>