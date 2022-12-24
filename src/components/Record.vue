<script lang="ts" setup>
import { defineProps } from 'vue';


defineProps({
  id: Number,
  msg: String,
  date: Date,
  time: Number,
  location: String,
  mood: String,
  tags: [String]
})

</script>

<template>
  <div class="card w-96 relative bg-base-100 shadow-xl break-inside-avoid border border-emerald-300/50">
    <div class="rounded-full absolute text-white bg-secondary w-7 h-7 flex justify-center items-center top-4 left-4">{{ id }}</div>
  <div class="card-body">
    <div class="mt-8">
      <p>💬 {{ msg }}</p>
      <p>🕒 {{ date }} @ {{ time }}</p>
      <p>📌 {{ location }}</p>
    </div>
  </div>
</div>
</template>

