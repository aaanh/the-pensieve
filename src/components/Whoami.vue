<script setup>
import author from "../data/author";
import AppLayout from "./AppLayout.vue";

component: {
  AppLayout
}
</script>

<template>
  <AppLayout>
      <div class="w-1/4">
        <h1 class="text-2xl">About the author</h1>
        <div class="text-accent font-bold">{{ author.name }}</div>
        <div>{{ author.website }}</div>
        <div>{{ author.description }}</div>
      </div>
  </AppLayout>
</template>