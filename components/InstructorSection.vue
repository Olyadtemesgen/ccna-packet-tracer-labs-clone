<template>
    <div class="border p-6 rounded-lg shadow-md bg-white">
      <h2 class="text-2xl font-extrabold mb-4">Instructor</h2>
      <div class="flex items-start space-x-4">
        <img src="https://img-b.udemycdn.com/user/200_H/794308_b2a6_5.jpg" alt="Instructor Image" class="w-24 h-24 object-cover rounded-full" />
        
        <div class="flex-grow">
          <a href="#" class=" underline font-bold text-lg text-hoveredPrimary hover:underline">David Bombal</a>
          <p class="text-sm text-gray-500">CCIE #11023, over 20 years of network training experience</p>
          
          <div class="flex items-center space-x-6 mt-3 text-sm">
            <div class="flex items-center space-x-2">
              <span class="text-yellow-500">&#9733;</span>
              <p>4.7 Instructor Rating</p>
            </div>
            <div class="flex items-center space-x-2">
              <i class="fas fa-comment"></i> 
              <p>128,641 Reviews</p>
            </div>
            <div class="flex items-center space-x-2">
              <i class="fas fa-users"></i>
              <p>1,239,871 Students</p>
            </div>
            <div class="flex items-center space-x-2">
              <i class="fas fa-book"></i>
              <p>48 Courses</p>
            </div>
          </div>
        </div>
      </div>
      
      <p class="text-sm text-gray-700 mt-4">
        David Bombal (CCIE #11023 Emeritus) passed his Cisco Certified Internetwork Expert Routing and Switching exam in January 2003 and is one of a small percentage of Cisco Engineers that pass their CCIE labs on their first attempt.
      </p>
      <p  class="text-sm text-gray-700 mt-2">
        David qualified as a Cisco Certified Systems Instructor (CCSI #22787) many years ago! He has been training Cisco courses for over 20 years and has delivered instructor-led courses in various countries around the world covering a wide range of Cisco topics from CCNA to CCIE.
      </p>
      <p v-if="showMore" class="text-sm text-gray-700 mt-2">
        David is very active on social media and has over 2 million YouTube subscribers and has posted over 1,000 free videos.
      </p>
  
      <button @click="toggleShowMore" class="text-hoveredPrimary font-bold text-sm  mt-2 flex  justify-center align-middle gap-3 ">
        <div> {{ showMore ? 'Show less' : 'Show more' }} </div>
        <div :class="{
        'transform rotate-180': showMore,
        'transform rotate-0': !showMore
        }" class="transition mt-0.5
        duration-300">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>
        </div>  
    </button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        showMore: false,
      };
    },
    methods: {
      toggleShowMore() {
        this.showMore = !this.showMore;
      },
    },
  });
  </script>
  
  <style scoped>
  </style>
  