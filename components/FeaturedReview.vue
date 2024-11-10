<template>
    <div class="border  border-gray-300 p-6 md:p-8 bg-white shadow-sm">
      <h3 class="text-lg font-bold mb-4">Featured review</h3>
      <div class="flex items-start space-x-4">
        <img src="https://img-c.udemycdn.com/user/200_H/17839332_fe04_4.jpg"
            alt="Matt Wade"
            class="w-16 h-16 rounded-full object-cover"
            />
            <div class="text-sm">
            <p class="font-semibold text-base" >Fred S.</p>
            <p class="text-sm text-gray-500">28 courses </p>
            <p class="text-sm text-gray-500">7 reviews</p>
            </div>
        </div>  
      <div class="flex items-start space-x-4">

        <div class="text-sm">
          <div class="flex items-center mt-2">
            <div class="flex text-2xl  text-[#b4690e]">
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
            </div>
            <p class="text-sm text-gray-500 ml-2">5 years ago</p>
          </div>
          <p class="text-gray-800 mt-2">
            Very thorough, covering all the material in an easy to digest, very well laid out, logical format. Better than most other 'CCNA' training I've seen, it is clear that Neil knows his stuff, and his teaching style and delivery are spot on.
          </p>
          <div class="items-center space-x-4 mt-4">
            <p class="text-xs-sm text-gray-500 mb-5">Was this review helpful?</p>
            <div class="flex gap-2 justify-start items-center">
                <button class="flex  w-10 h-10 border-black hover:bg-whiteBlue items-center border rounded-full p-2 text-gray-black transition">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-thumb-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" /></svg>                
                </button>
                <button class="flex  w-10 h-10 border-black hover:bg-whiteBlue items-center border rounded-full p-2 text-gray-black rotate-180 transition">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-thumb-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" /></svg>                
                </button>
                <a href="#" class="text-sm underline ml-2 hover:underline">Report</a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({});
  </script>
  
  <style scoped>
  </style>
  