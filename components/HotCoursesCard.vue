<template>
    <a :href="course.link" class="flex items-start p-4 border-b border-gray-400 hover:bg-gray-100 transition">
      <!-- Image -->
      <img :src="course.image" alt="Course Image" class="w-16 h-16 object-cover rounded mr-4" />
      <div class="flex-grow">
        <!-- Title and Description -->
        <h3 class="font-semibold text-sm mb-1">{{ course.title }}</h3>
        <p class="text-xs text-gray-500 flex items-center space-x-1">
          <span class="font-bold text-yellow-500">&#9733; {{ course.rating }}</span>
          <span class="ml-2">{{ course.reviews.toLocaleString() }} students</span>
        </p>
        <div class="flex items-center space-x-2 mt-1">
          <span v-if="course.badge" class="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 ">{{ course.badge }}</span>
          <p class="text-xs "><span class="text-md   font-bold  text-[#2c662f] ">{{ course.hours }} total hours </span> • Updated {{ course.updated }}</p>
        </div>
      </div>
      <!-- Price and Favorite -->
      <div class="flex flex-col items-end">
        <p class="font-bold text-sm">${{ course.price }}</p>
        <button class="mt-2 text-gray-500 hover:text-black transition">
          <i class="far fa-heart"></i> <!-- Use Font Awesome for the heart icon -->
        </button>
      </div>
    </a>
  </template>
  
  <script lang="ts">
  import { defineComponent, type PropType } from 'vue';
  
  interface Course {
    title: string;
    link: string;
    image: string;
    rating: number;
    reviews: number;
    hours: string;
    updated: string;
    price: string;
    badge?: string;
  }
  
  export default defineComponent({
    props: {
      course: {
        type: Object as PropType<Course>,
        required: true,
      },
    },
  });
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  </style>
  