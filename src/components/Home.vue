<script setup>
import AppLayout from './AppLayout.vue';
import sample_records from "../data/records";
import Record from "./Record.vue";

components: {
  AppLayout,
  Record
}

</script>

<template>
  <AppLayout>
    <div id="content" class="sm:columns-1 md:columns-2 columns-3 gap-4 space-y-4">
      <div v-for="record in sample_records" :key="record.id">
        <Record :id="record.id" :date="record.date" :msg="record.msg" :location="record.location" :mood="record.mood" :time="record.time"></Record>
      </div>
    </div>
  </AppLayout>
</template>
