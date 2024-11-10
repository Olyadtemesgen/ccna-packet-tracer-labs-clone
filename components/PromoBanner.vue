<template>
  <div class="bg-primaryYellow text-black px-4 text-center flex justify-center gap-10 items-center fixed top-0 h-20 w-full z-50">
    <p class="font-bold text-sm font-sans">
        New-learner offer | <span class="font-normal text-sm-base">Courses from $10.99. Click button to see savings.</span>
        <div class="font-bold text-base-lg mt-0.5">
            Ends in {{ hours }}h {{ minutes }}m {{ seconds }}s
        </div> 
      </p>
      <button class="bg-primaryPurple hover:bg-hoveredPrimary text-white font-bold text-sm text-[0.] px-5 py-3  hover:opacity-90">
        Click to redeem
      </button>
    </div>
    <CourseHeader />    
  </template>
  

  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  
  export default defineComponent({
    setup() {
      // Set initial countdown to 30 hours in seconds
      const countdown = ref(30 * 60 * 60); // 30 hours * 60 minutes * 60 seconds
      const hours = ref(0);
      const minutes = ref(0);
      const seconds = ref(0);
  
      // Function to update hours, minutes, and seconds
      const updateCountdown = () => {
        const totalSeconds = countdown.value;
        hours.value = Math.floor(totalSeconds / 3600);
        minutes.value = Math.floor((totalSeconds % 3600) / 60);
        seconds.value = totalSeconds % 60;
      };
  
      // Start the countdown
      onMounted(() => {
        updateCountdown();
        const interval = setInterval(() => {
          if (countdown.value > 0) {
            countdown.value--;
            updateCountdown();
          } else {
            clearInterval(interval);
          }
        }, 1000); // Update every second
      });
  
      return {
        hours,
        minutes,
        seconds,
      };
    },
  });
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  </style>
  