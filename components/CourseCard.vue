<template>
  <div class="w-[21rem] bg-white shadow-xl overflow-hidden absolute right-32 top-10 z-0" >
    <div v-if="showImage" class="relative">
        <!-- <img src="/path/to/preview-image.jpg" alt="Course Preview" class="w-full h-48 object-cover" /> -->
      </div>
  
      <!-- Tab Section -->
      <div class="flex justify-around  text-black  border-b font-bold border-gray-300">
        <button :class="{'border-b-2 border-black': activeTab === 'Personal'}" class="py-3 flex-1" @click="activeTab = 'Personal'">Personal</button>
        <button :class="{'border-b-2 border-black': activeTab === 'Teams'}" class="py-3 flex-1" @click="activeTab = 'Teams'">Teams</button>
      </div>
  
      <div class="p-4">
        <div v-if="activeTab === 'Personal'">
          <h2 class="text-xl pr-10 font-semibold font-serif mb-2">Subscribe to Udemy’s top courses</h2>
          <p class="text-sm text-gray-600 mb-4">
            Get this course, plus 12,000+ of our top-rated courses, with Personal Plan.
            <a href="#" class="text-blue-500 underline">Learn more</a>
          </p>
          <button class="w-full bg-primaryPurple text-white font-medium py-3  hover:bg-hardPurple">
            Try Personal Plan for free
          </button>
          <p class="text-xs text-gray-500 text-center mt-2">Starting at $10.00 per month after trial</p>
          <p class="text-xs text-gray-500 text-center mb-4">Cancel anytime</p>
          <div class="flex items-center justify-between text-gray-500 text-sm">
            <span class="flex-1 border-t border-gray-300"></span>
            <span class="mx-2">or</span>
            <span class="flex-1 border-t border-gray-300"></span>
          </div>
          <div class="mt-4">
            <p class="text-xl font-semibold mb-2">$74.99</p>
            <button class="w-full border border-gray-800 text-black font-medium py-3  hover:bg-gray-100">
                Add to cart
            </button>
            <p class="text-xs text-gray-500 text-center mt-4">30-Day Money-Back Guarantee</p>
            <p class="text-xs text-gray-500 text-center mb-4">Full Lifetime Access</p>
            </div>
    
            <div class="flex justify-around text-sm text-gray-700 font-medium mt-4">
            <a href="#" class="underline">Share</a>
            <a href="#" class="underline">Gift this course</a>
            <a href="#" class="underline">Apply Coupon</a>
            </div>
        </div>
        <div v-if="activeTab === 'Teams'"  >
            <img src="https://udemy.com/staticx/udemy/images/v7/logo-ub.svg" alt="Udemy Business" width="141" height="24" class="purchase-team-tabs--logo--mRRl-" loading="lazy">
            <p class="text-sm text-gray-600 mb-4 pr-10">
                Subscribe to this course and 27,000+ top‑rated Udemy courses for your organization.
            </p>   
            <button class="w-full bg-primaryPurple text-white font-medium py-3  hover:bg-hardPurple">
                Try Udemy Business
            </button>
            <div class="p-4 text-sm flex flex-col gap-y-2 text-gray-800">
                <p class="flex items-center mb-2">
                    <span class="mr-2">✔</span> For teams of 2 or more users
                </p>
                <p class="flex items-center mb-2">
                    <span class="mr-2">✔</span> 27,000+ fresh & in-demand courses
                </p>
                <p class="flex items-center mb-2">
                    <span class="mr-2">✔</span> Learning Engagement tools
                </p>
                <p class="flex items-center">
                    <span class=" mr-2">✔</span> SSO and LMS Integrations
                </p> 
            </div> 
        </div>
        
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    props: {
      showImage: {
        type: Boolean,
        default: true,
      },
    },
    setup() {
      const activeTab = ref('Personal');
      return {
        activeTab,
      };
    },
  });
  </script>
  
  <style scoped></style>
  