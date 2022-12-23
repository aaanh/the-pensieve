<script setup>
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
  <div class="card w-96 bg-base-100 shadow-xl  break-inside-avoid">
  <div class="card-body">
    <div class="rounded-full text-white bg-secondary w-7 h-7 flex justify-center items-center">{{ id }}</div>
    <p>💬 {{ msg }}</p>
    <p>🕒 {{ date }} @ {{ time }}</p>
    <p>📌 {{ location }}</p>
  </div>
</div>
</template>