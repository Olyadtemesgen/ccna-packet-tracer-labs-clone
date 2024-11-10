<template>
    <header class="py-3 font-sans z-20  mt-20 bg-white sticky top-0">
      <div class=" max-w-screen-xl mx-5 flex justify-between items-center ">
        <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy" width="91" height="34" loading="lazy">
        <button class="text-gray-700 font-medium text-xs-sm hover:text-hoveredPrimary">Categories</button>

        <div class="flex items-center">
          <div class="relative w-[90vw] sm:w-[35vw]">
            <input
              type="text"
              placeholder="Search for anything"
              class="w-full border border-black outline-none rounded-full pl-10 pr-4 py-3 text-sm"
            />
            <svg
                class="absolute top-1/2 left-3 transform -translate-y-1/2 w-4 h-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17a6 6 0 100-12 6 6 0 000 12zM21 21l-4.35-4.35" />
            </svg>
          </div>
        </div>
        <a href="#" class="text-gray-700 font-medium text-xs-sm hover:text-hoveredPrimary">Udemy Business</a>
        <a href="#" class="text-gray-700 font-medium text-xs-sm hover:text-hoveredPrimary">Teach on Udemy</a>
        <button class="text-gray-700">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
        </button>
        <div class="flex gap-3 mx-0 px-0 items-end">
            <button class="text-black font-bold text-xs-sm border border-black px-5 py-3 hover:bg-hoveredWhite">Log in</button>
            <button class="text-white bg-black font-bold text-xs-sm border border-black px-5 py-3 hover:bg-blackHover">Sign up</button>
            <button class="border border-black px-3 py-3 hover:bg-hoveredWhite">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-world"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" /></svg>
            </button>
        </div>  
      </div>
    </header>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({});
  </script>
  
  <style scoped>
  </style>
  