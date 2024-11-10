<template>
    <div class="border p-6  shadow-md bg-white">
      <h2 class="text-lg font-bold mb-4">Frequently Bought Together</h2>
      <div class="space-y-4">
        <a v-for="(course, index) in courses" :key="index" class="flex items-start space-x-4 relative"  :href="course.link">
          <img :src="course.image" alt="Course Image" class="w-50 h-40 object-cover rounded" />
                    
          <div class="flex-grow">
            <h3 class="font-semibold text-sm">{{ course.title }}</h3>
            <p class="text-xs text-gray-500">{{ course.author }}</p>
            <div class="flex items-center space-x-2 text-xs">
              <span class="text-yellow-500">&#9733; {{ course.rating }}</span>
              <span class="text-gray-500">({{ course.reviews.toLocaleString() }})</span>
            </div>
            <span v-if="course.badge" class="inline-block mt-1 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded">{{ course.badge }}</span>
          </div>
          <span v-if="index < courses.length - 1" class="text-3xl  font-bold text-gray-400 self-center absolute left-24 top-36 shadow-xl w-16 h-16 rounded-full bg-white flex justify-center align-middle items-center z-40 ">+</span>

  
          <p class="font-bold text-sm self-start">${{ course.price }}</p>
        </a>
      </div>
  
      <div class="mt-6 flex justify-between items-center">
        <p class="text-lg font-bold">Total: ${{ totalPrice.toFixed(2) }}</p>
        <button class="bg-purple-600 text-white font-semibold px-4 py-2 rounded hover:bg-purple-700 transition">
          Add all to cart
        </button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        courses: [
          {
            title: "The Complete Networking Fundamentals Course. Your CCNA start",
            author: "David Bombal",
            image: "https://img-b.udemycdn.com/course/240x135/751094_fb27_2.jpg",
            link: "https://www.udemy.com/course/complete-networking-fundamentals-course-ccna-start/",
            rating: 4.6,
            reviews: 48403,
            price: 74.99,
            badge: "Bestseller",
          },
          {
            title: "Cisco CCNA Packet Tracer Ultimate labs: CCNA 200-301 labs",
            author: "David Bombal",
            image: "https://img-b.udemycdn.com/course/240x135/1414996_142c_3.jpg",
            link: "https://www.udemy.com/course/complete-networking-fundamentals-course-ccna-start/",
            rating: 4.8,
            reviews: 7938,
            price: 74.99,
            badge: "Bestseller",
          },
          {
            title: "Cisco CCNA 200-301 Complete Course: Packet Tracer Labs",
            author: "David Bombal",
            image: "https://img-b.udemycdn.com/course/240x135/1016736_2040_3.jpg",
            link: "https://www.udemy.com/course/complete-networking-fundamentals-course-ccna-start/",
            rating: 4.7,
            reviews: 4118,
            price: 74.99,
          },
        ],
      };
    },
    computed: {
      totalPrice() {
        return this.courses.reduce((total, course) => total + course.price, 0);
      },
    },
  });
  </script>
  
  <style scoped>
  </style>
  