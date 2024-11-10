<template>
    <div class=" py-6">
      <div class="flex items-center mb-4">
        <span class="text-yellow-600 text-3xl font-extrabold">&#9733;</span>
        <h2 class="ml-2 font-bold  text-2xl ">4.8 course rating</h2>
        <h2 class="ml-2 font-bold  text-2xl ">• 8K ratings</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="(review, index) in reviews" :key="index" class="border-t border-t-gray-300 p-4 shadow-sm">
           <div class="flex justify-between">
            <div class="flex items-center mb-2">
                <div class="bg-blackHover text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                {{ review.initials }}
                </div>
                <div class="ml-3">
                <h4 class="font-bold">{{ review.name }}</h4>
                <div class="flex items-center text-sm text-yellow-500">
                    <span class="text-bold text-xl">&#9733; </span>
                    <span class="text-bold text-xl">&#9733; </span>
                    <span class="text-bold text-xl">&#9733; </span>
                    <span class="text-bold text-xl">&#9733; </span>
                    <span v-if="review.rating == 5" class="text-bold text-xl">&#9733; </span>
                    <span class="text-bold text-xl">{{review.rating}}</span>
                    <p class="text-gray-500 ml-2">{{ review.timeAgo }}</p>
                </div>
                </div>
                <button class="ml-auto text-gray-500">
                <i class="fas fa-ellipsis-v"></i> 
                </button>
            </div>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="2"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                    <circle cx="12" cy="19" r="2"></circle>
                </svg>
            </button>
          </div>
          <p class="text-sm text-gray-700 mb-2">{{ review.text }}</p>
          <div class="flex items-center text-sm text-gray-500">
            <p class="mr-3 text-xs">Helpful?</p>
            <button class="flex  border-black hover:bg-whiteBlue items-center  p-2 text-gray-black transition">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-thumb-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" /></svg>                
            </button>
            <button class="flex border-black hover:bg-whiteBlue items-center   p-2 text-gray-black rotate-180 transition">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-thumb-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" /></svg>                
            </button>
          </div>
        </div>
        <button class="px- hover:bg-whiteBlue py-1 border border-gray-800">
            Show all reviews
        </button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        reviews: [
          {
            initials: "HB",
            name: "Harmeet singh B.",
            rating: 5,
            timeAgo: "2 months ago",
            text: "This course was much needed for my exam. And I think you have already updated this course for CCNA 1.1, please do it if not. I will send you my CCNA certificate when done. Thank you.",
          },
          {
            initials: "SS",
            name: "Sherman S.",
            rating: 4,
            timeAgo: "2 months ago",
            text: "I love these labs, the explanations are on point, but just a tad bit fast, but still gets me to where I need to be. I am able to complete most of the labs based off of memory due to the first videos, the second videos help reinforce a lot.",
          },
          {
            initials: "JR",
            name: "James R.",
            rating: 5,
            timeAgo: "3 months ago",
            text: "I've completed a online CCNA course, so I thought I'd do this course and some revision before taking the exam. At nearly half way through this labs course my confidence is growing in leaps and bounds. Its good for…",
          },
          {
            initials: "MD",
            name: "Maria D.",
            rating: 4,
            timeAgo: "3 months ago",
            text: "This is a great course. I had learned so much about configuring networks with Cisco Packet Tracer, although I would recommend having some background knowledge of CCNA concepts beforehand. I definitely feel more…",
          },
        ],
      };
    },
  });
  </script>
  
  <style scoped>
  </style>
  