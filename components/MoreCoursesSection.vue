<template>
    <div class="border-t py-6">
      <h2 class="text-lg font-bold mb-4">
        More Courses by
        <a href="#" class="text-hoveredPrimary hover:underline">David Bombal</a>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a v-for="(course, index) in courses" :key="index" class="" :href="(course.link)">
          <img :src="course.image" alt="Course Image" class="w-full h-40 object-cover rounded mb-3" />
          
          <h3 class="font-semibold text-sm mb-1">{{ course.title }}</h3>
          <p class="text-xs text-gray-500 mb-1">{{ course.instructor }}</p>
          
          <div class="flex items-center text-sm text-yellow-600 mb-2">
              <span class="text-lg">&#9733; </span>
              <span class="text-lg">&#9733; </span>
            <span class="text-lg">&#9733; </span>
            <span class="text-lg">&#9733; </span>
            <span class="text-lg">&#9733; </span>
            <span >{{ course.rating }}</span>
            <p class="text-gray-500 ml-2">{{ course.reviews.toLocaleString() }}</p>
          </div>
          <p class="text-xs text-gray-500">{{ course.details }}</p>
          
          <p class="font-bold mt-2">${{ course.price }}</p>
        </a>
      </div>
      <button class="mt-6 px-4 py-2 w-full border  hover:bg-whiteBlue border-gray-500 transition">
        Report abuse
      </button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        courses: [
          {
            image: "https://img-b.udemycdn.com/course/240x135/751094_fb27_2.jpg",
            title: "The Complete Networking Fundamentals Course. Your CCNA start",
            instructor: "David Bombal",
            rating: 4.6,
            reviews: 48403,
            details: "80 total hours • 680 lectures • Beginner",
            price: 74.99,
            link: "/course/complete-networking-fundamentals-course-ccna-start/"
          },
          {
            image: "https://img-b.udemycdn.com/course/240x135/4564706_996d_5.jpg",
            title: "Getting Started with Wireshark: The Ultimate...",
            instructor: "Experts with David Bombal, Chris Greer...",
            rating: 4.8,
            reviews: 7469,
            details: "7 total hours • 73 lectures • Beginner",
            price: 69.99,
            link: "/course/wireshark-ultimate-hands-on-course/"
          },
          {
            image: "https://img-b.udemycdn.com/course/240x135/2351336_fb8c_6.jpg",
            title: "Wireshark: Packet Analysis and Ethical Hacking: Core...",
            instructor: "David Bombal",
            rating: 4.7,
            reviews: 8158,
            details: "14.5 total hours • 208 lectures • Beginner",
            price: 64.99,
            link: "/course/wireshark-packet-analysis-and-ethical-hacking-core-skills/"
          },
        ],
      };
    },
  });
  </script>
  
  <style scoped>
  </style>
  