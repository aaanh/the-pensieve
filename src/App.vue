<script setup>
import AppLayout from './components/AppLayout.vue';
import sample_records from "./data/records.ts";
import Record from "./components/Record.vue";

components: {
  AppLayout,
  Record
}

</script>

<template>
  <AppLayout>
    <div v-for="record in sample_records" :key="record.id">
      <Record :id="record.id" :date="record.date" :msg="record.msg" :location="record.location" :mood="record.mood" :time="record.time"></Record>
    </div>
  </AppLayout>
</template>
