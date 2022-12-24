<script setup>

</script>

<template>
  <!-- The button to open modal -->
  <label for="my-modal-4" class="btn btn-xs btn-disabled">Create a Record</label>
  
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="my-modal-4" class="modal-toggle" />
  <label for="my-modal-4" class="modal modal-bottom sm:modal-middle cursor-pointer">
    <label class="modal-box relative" for="">
      <div class="w-full text-2xl font-bold border-b border-b-slate-100/50 pb-2">Create a New Record</div>
      <form class="flex flex-wrap flex-col">
        <textarea class="textarea textarea-accent my-2" placeholder="Message" v-model="text"/>
        <input type="date" class="input input-bordered my-2" v-model="date"/>
        <input type="time" class="input input-bordered my-2" placeholder="Time" v-model="time"/>
        <input type="text" placeholder="Origin" ref="origin" class="input input-bordered my-2" v-model="location"/>
        <input class="input input-bordered my-2" placeholder="Mood" v-model="mood"/>
        <input class="input input-bordered my-2" placeholder="Tags" v-model="tags"/>
      </form>
      <button type="submit" class="btn btn-primary normal-case float-right">Submit</button>
    </label>
  </label>
</template>