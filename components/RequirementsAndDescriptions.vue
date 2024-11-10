<template>
    <div class="p-4 md:p-8">
      <section class="mb-6">
        <h2 class="text-2xl font-bold mb-5">Requirements</h2>
        <ul class="list-disc ml-5 space-y-2 text-sm-base text-blackHover">
          <li>Preparing for CCNA 200-301 exam</li>
          <li>Have already completed basic theory. This course is a practical test of your knowledge to help you pass the exam.</li>
        </ul>
      </section>
  
      <section class="text-sm-base  text-blackHover">
        <h2 class="text-2xl font-bold mb-5 text-black">Description</h2>
        <p class="mb-2">
          <strong>Labs! Labs! And more Labs! Get the hands-on experience to pass your CCNA exam!</strong>
        </p>
        <p class="">
          <strong>Make sure you are ready to pass the CCNA exam!</strong> Prepare <strong>practically</strong> for the Cisco CCNA certification which is the most in-demand networking certification in the world today! Make sure you can pass the Cisco CCNA Routing and Switching 200-301 exam!
        </p>
        <p class="mb-4">
          This course tests your knowledge of CCNA topics with practical, hands-on labs. Labs include both configuration as well as troubleshooting labs.
        </p>
        <p class="font-semibold mb-2">Ask yourself these questions:</p>
        <ul
            :class="{
                'text-gray-400': !showMore, 
                'text-black': showMore
            }" 
            class="ml-5 space-y-1 mb-4 transition-colors duration-300"
            >  
        <li>Are you ready and prepared for the labs in the CCNA exam?</li>
        <li>Are you able to troubleshoot Cisco networks?</li>
        </ul>

  
        <div v-if="showMore">
          <ul class="list-disc ml-5 space-y-1 mb-4">
            <li>Are you confident with your ability to configure networks as required by Cisco to pass the CCNA?</li>
          </ul>
          <p class="mb-4"><strong>Answer:</strong> This course helps you prepare for the exam and gain the confidence to pass the exam!</p>
          <p class="mb-4">There are many topologies and many labs in this course!</p>
          <p class="mb-4">
            Networks are all around us and you are using one right now to access this course. Imagine for a moment, how different your life would be without access to Facebook, Snapchat, Google, YouTube, WhatsApp or any of the other websites on the Internet? How would you live with no Internet?
          </p>
          <p class="mb-4">
            The Internet is extremely important in modern life today and all websites and Internet communication rely on networking. This reliance is only predicted to continue with the growth of the Internet of Things (IoT) in the next few years.
          </p>
          <p class="mb-4">
            Without routers, switches, network cabling, and protocols like BGP there would be no Internet!
          </p>
          <p class="mb-4">
            This course will teach you how networks actually work and how you are able to connect to websites like Facebook, Google, and YouTube.
          </p>
          <p class="mb-4">
            Companies throughout the world (from the smallest to the largest) rely on networks designed, installed, and maintained by networking engineers. Join this in-demand industry!
          </p>
          <p class="mb-4">Start your journey today learning about networking.</p>
          <p class="mb-4">
            I want to welcome you to this Cisco CCNA Packet Tracer Ultimate labs course! I'm David Bombal, and I have been teaching networking courses for over 15 years. I qualified as a Cisco Certified Interwork Engineer (CCIE) in 2003 and hold numerous other networking certifications. I'm also a Cisco and HPE certified instructor where I have trained thousands of networking engineers in many of the largest companies in the world including Fortune 100 companies.
          </p>
          <p class="mb-4">
            The course covers the topics in the Cisco CCNA 200-301 exam.
          </p>
          <p class="mb-4">
            At the end of this course, you will be able to confidently discuss networking topics; and be able to start configuring real networking devices such as routers and switches. This is an introductory course but contains a lot of information that can be directly applied to the CCNA certification.
          </p>
          <p class="mb-4">
            The ideal student for this course is someone looking to break into the networking field, someone looking to extend their knowledge from PCs and servers to networking, or someone interested in getting the knowledge to work in one of the most exciting, most in-demand jobs in IT - networking.
          </p>
          <p class="mb-4">There are no requirements necessary to enroll in this course, I only ask that you come open-minded and ready to learn.</p>
          <p class="mb-4">Feel free to take a look at the course description and some of the sample free videos.</p>
          <p class="mb-4">I look forward to seeing you on the inside!</p>
          <p class="font-bold text-2xl text-black">Who this course is for:</p>
          <ul class="list-disc ml-5 space-y-2 my-5">
            <li>CCNA candidates</li>
          </ul>
        </div>
  
        <button @click="toggleShowMore" class="text-hoveredPrimary font-extrabold  mt-2 flex  justify-center align-middle gap-3 ">
         <div> {{ showMore ? 'Show less' : 'Show more' }} </div>
          <div :class="{
            'transform rotate-180': showMore,
            'transform rotate-0': !showMore
          }" class="transition mt-0.5
            duration-300">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>
          </div>  
        </button>
      </section>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    setup() {
      const showMore = ref(false);
  
      const toggleShowMore = () => {
        showMore.value = !showMore.value;
      };
  
      return { showMore, toggleShowMore };
    }
  });
  </script>
  
  <style scoped>
  /* Add your custom styles here, if needed */
  </style>
  