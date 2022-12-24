<script setup>
import CreateRecordModal from './CreateRecordModal.vue';
</script>


<template>
  <nav class="w-screen flex h-12 justify-end items-center space-x-2 p-4 overflow-y-hidden">
    <button class="normal-case btn btn-primary btn-sm font-mono btn-disabled">auth</button>
    <button class="normal-case btn btn-secondary btn-sm font-mono btn-disabled">log-out</button>
    <button for="my-modal-4" class="normal-case btn btn-info btn-sm font-mono" @click="$router.push('/whoami')">who-am-i</button>
  </nav>
  <div class="flex flex-col justify-center items-center">
    <h1 class="text-7xl font-['Sacramento'] text-accent"><a href="/">The Pensieve</a></h1>
    <CreateRecordModal/>
    <br/>
    <slot/>
  </div>
</template>