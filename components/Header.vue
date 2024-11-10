<template>
    <header class="py-3 font-sans z-20  mt-20 bg-white sticky top-0">
      <div class=" max-w-screen-xl mx-5 flex justify-between items-center ">
        <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy" width="91" height="34" loading="lazy">
        <button class="text-gray-700 font-medium text-xs-sm  hover:text-hoveredPrimary transition-all duration-500"
         @mouseover="isHovered = true" 
         @mouseleave="scheduleHideDropdown"
         >Categories</button>
        <div 
          v-if="isHovered" 
          @mouseover="cancelHideDropdown" 
          @mouseleave="scheduleHideDropdown"
          class="absolute top-full left-0 mt-2 w-[1000px] bg-white shadow-lg border text-blackHover text-sm border-gray-200 z-50 p-4 transition-all duration-500"
        >
        <div class="grid grid-cols-4 gap-3">
        <div>
          <h3 class="font-bold text-lg mb-2">Browse Certifications</h3>
          <ul class="space-y-1">
            <li><a href="#" class="hover:underline">Certification preparation</a></li>
            <li><a href="#" class="hover:underline">Development</a></li>
            <li><a href="#" class="hover:underline">Business</a></li>
            <li><a href="#" class="hover:underline">Finance & Accounting</a></li>
            <li><a href="#" class="hover:underline">IT & Software</a></li>
            <li><a href="#" class="hover:underline">Office Productivity</a></li>
            <li><a href="#" class="hover:underline">Personal Development</a></li>
            <li><a href="#" class="hover:underline">Design</a></li>
            <li><a href="#" class="hover:underline">Marketing</a></li>
            <li><a href="#" class="hover:underline">Lifestyle</a></li>
            <li><a href="#" class="hover:underline">Photography & Video</a></li>
            <li><a href="#" class="hover:underline">Health & Fitness</a></li>
            <li><a href="#" class="hover:underline">Music</a></li>
            <li><a href="#" class="hover:underline">Teaching & Academics</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold text-lg mb-2">Entrepreneurship</h3>
          <ul class="space-y-1">
            <li><a href="#" class="hover:underline">Communication</a></li>
            <li><a href="#" class="hover:underline">Management</a></li>
            <li><a href="#" class="hover:underline">Sales</a></li>
            <li><a href="#" class="hover:underline">Business Strategy</a></li>
            <li><a href="#" class="hover:underline">Operations</a></li>
            <li><a href="#" class="hover:underline">Project Management</a></li>
            <li><a href="#" class="hover:underline">Business Law</a></li>
            <li><a href="#" class="hover:underline">Business Analytics & Intelligence</a></li>
            <li><a href="#" class="hover:underline">Human Resources</a></li>
            <li><a href="#" class="hover:underline">Industry</a></li>
            <li><a href="#" class="hover:underline">E-Commerce</a></li>
            <li><a href="#" class="hover:underline">Media</a></li>
            <li><a href="#" class="hover:underline">Real Estate</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold text-lg mb-2">Personal</h3>
          <ul class="space-y-1">
            <li><a href="#" class="hover:underline">Product Management</a></li>
            <li><a href="#" class="hover:underline">Leadership</a></li>
            <li><a href="#" class="hover:underline">Management Skills</a></li>
            <li><a href="#" class="hover:underline">ISO 9001</a></li>
            <li><a href="#" class="hover:underline">Business Strategy</a></li>
            <li><a href="#" class="hover:underline">Quality Management</a></li>
            <li><a href="#" class="hover:underline">Project Management</a></li>
            <li><a href="#" class="hover:underline">Risk Management</a></li>
            <li><a href="#" class="hover:underline">Manager Training</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold text-lg mb-2">Popular Topics</h3>
          <ul class="space-y-1">
            <li><a href="#" class="hover:underline">Entrepreneurship</a></li>
            <li><a href="#" class="hover:underline">Communication</a></li>
            <li><a href="#" class="hover:underline">Management</a></li>
            <li><a href="#" class="hover:underline">Sales</a></li>
            <li><a href="#" class="hover:underline">Business Strategy</a></li>
            <li><a href="#" class="hover:underline">Operations</a></li>
            <li><a href="#" class="hover:underline">Project Management</a></li>
            <li><a href="#" class="hover:underline">Business Law</a></li>
            <li><a href="#" class="hover:underline">Business Analytics & Intelligence</a></li>
          </ul>
        </div>
      </div>
    </div>
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
        <a href="javascript:void(0);" @mouseover="isBusinessHovered = true"  @mouseleave="isBusinessHovered = false"
        class="text-gray-700 font-medium text-xs-sm hover:text-hoveredPrimary">Udemy Business</a>
        <div 
        v-if="isBusinessHovered" 
        @mouseover="isBusinessHovered = true" 
        @mouseleave="isBusinessHovered = false"
        class="absolute top-full right-80 mt-0 w-80 bg-white shadow-lg border border-gray-200 z-50 pt-1 pb-2 px-3"
      >
         <div class="font-extrabold text-lg text-blackHover text-center p-4">Get your team access to over 27,000 top Udemy courses, anytime, anywhere. </div>
         <button class="text-white w-full py-2  font-bold text-base-lg bg-blackHover">Try Udemy Business</button>
      </div>
        <a href="javascript:void(0);" @mouseover="isTeachHovered = true" @mouseleave="isTeachHovered = false"
        class="text-gray-700 font-medium text-xs-sm hover:text-hoveredPrimary">Teach on Udemy</a>
        <div 
        v-if="isTeachHovered" 
        @mouseover="isTeachHovered = true" 
        @mouseleave="isTeachHovered = false"
        class="absolute top-full right-60 mt-0 w-80 bg-white shadow-lg border border-gray-200 z-50 pt-1 pb-2 px-3"
      >
         <div class="font-extrabold text-lg text-blackHover text-center p-4">Get your team access to over 27,000 top Udemy courses, anytime, anywhere. </div>
         <button class="text-white w-full py-2  font-bold text-base-lg bg-blackHover">Try Udemy Business</button>
      </div>
        <button class="text-gray-700" @mouseover="isCartHovered = true" @mouseleave="isCartHovered=false">
            <svg class="hover:stroke-hoveredPrimary icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
        </button>
        <div 
        v-if="isCartHovered" 
        @mouseover="isCartHovered = true" 
        @mouseleave="isCartHovered = false"
        class="absolute top-full right-40 mt-0 w-64 bg-white shadow-lg border border-gray-200 z-50 pt-1 py-4 px-3"
      >
         <div class="font-extrabold text-base text-blackHover text-center px-4">Your cart is empty </div>
         <div class="font-extrabold text-base text-hoveredPrimary text-center pt-2">Keep shopping </div>
      </div>
        <div class="flex gap-3 mx-0 px-0 items-end justify-end ml-8">
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
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const isHovered = ref(false);
      const isBusinessHovered = ref(false);
      const isTeachHovered = ref(false);
      const isCartHovered = ref(false);
      const hideTimeout: any = ref(null);
      return { isHovered, isBusinessHovered , isTeachHovered, hideTimeout , isCartHovered};
    },
    methods: {
    showDropdown() {
      this.isHovered = true;
      if (this.hideTimeout) clearTimeout(this.hideTimeout); 
    },
    scheduleHideDropdown() {
      this.hideTimeout = setTimeout(() => {
        this.isHovered = false;
      }, 200); 
    },
    cancelHideDropdown() {
      if (this.hideTimeout) clearTimeout(this.hideTimeout);
    },
  }
  });
</script>
  
  
  <style scoped>
  </style>
  