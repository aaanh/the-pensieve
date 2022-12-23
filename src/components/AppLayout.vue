<template>
  <nav class="w-screen flex h-12 justify-end items-center space-x-2 p-4 overflow-y-hidden">
    <button class="normal-case btn btn-primary btn-sm font-mono">auth</button>
    <button class="normal-case btn btn-secondary btn-sm font-mono">log-out</button>
    <button class="normal-case btn btn-info btn-sm font-mono">who-am-i</button>
  </nav>
  <div class="flex flex-col justify-center items-center">
    <h1 class="text-7xl font-['Sacramento'] text-accent">The Pensive</h1>
    <div id="content" class="columns-3 gap-4 space-y-4">
      <slot/>
    </div>
  </div>
</template>