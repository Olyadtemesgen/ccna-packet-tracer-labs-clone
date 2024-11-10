
  <template>
    <div
        class="w-[21rem] bg-white shadow-xl overflow-hidden"
        :class="{
          'fixed top-24 right-40 z-50 transition-all duration-500 ease-in-out': isFixed && !showImage,
          'absolute right-32 top-44 z-0': !isFixed && !showImage,
          'absolute right-32 top-10': showImage,
        }"
      >    <div v-if="showImage" class="relative">
          <img src="https://img-b.udemycdn.com/course/240x135/1414996_142c_3.jpg" srcset="https://img-b.udemycdn.com/course/240x135/1414996_142c_3.jpg 240w, https://img-b.udemycdn.com/course/480x270/1414996_142c_3.jpg 480w, https://img-b.udemycdn.com/course/750x422/1414996_142c_3.jpg 750w" alt="" style="background-size:cover;background-image:url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAABgmlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz8zgxGjERaUxaRhhcYosVFGQk2axii/NjPP/FDzxuu9mSRbZTtFiY1fC/4CtspaKSIlO2VNbNBz3oyaSebczj2f+733nO49F+yRtKIaVT5QM1k9PB7wzM7Ne5zP1NBGE63YooqhjYRCQSraxx02K970WLUqn/vX6pfihgK2WuFhRdOzwhPCwdWsZvG2cIuSii4Jnwp363JB4VtLjxX5xeJkkb8s1iPhUbA3CnuSZRwrYyWlq8LycrxqOqf83sd6iSuemZmW2CHejkGYcQJ4mGSMUQboY0jmAXrw0ysrKuT7CvlTrEiuIrPGGjrLJEmRpVvUnFSPS0yIHpeRZs3q/9++Gol+f7G6KwDVT6b51gnOLfjOm+bnoWl+H4HjES4ypfyVAxh8Fz1f0rz74N6As8uSFtuB801ofdCierQgOcTtiQS8nkDDHDRfQ91CsWe/+xzfQ2RdvuoKdvegS867F38AGNNnwvJxPYUAAAAJcEhZcwAACxMAAAsTAQCanBgAAALtSURBVHic7cEBAQAAAIIg/69uSEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Bh0SQABe+rNwwAAAABJRU5ErkJggg==&quot;)" sizes="(min-width: 1080px) 240px,
              (min-width: 43.8125rem) 600px,
              100vw" width="21rem" class="w-full" height="135" loading="eager">   
              <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center cursor-pointer">
                
                <div class="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="28"  height="28"  viewBox="0 0 24 24"  fill="black"  class="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>
                </div>
              </div>
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
              <button class="w-full bg-primaryPurple  hover:bg-hoveredPrimary text-white font-medium py-3  hover:bg-hardPurple">
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
                <p class="text-lg text-blackHover font-semibold mb-2">$74.99</p>
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
      import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
      
      export default defineComponent({
        props: {
          showImage: {
            type: Boolean,
            default: true,
          },
          showFixed: {
            type: Boolean,
            default: false,
          },
        },
        setup() {
        const activeTab = ref('Personal');
        const isFixed = ref(true);
        let footerObserver: IntersectionObserver | null = null;
    
        onMounted(() => {
          const footerElement = document.getElementById('footer');
    
          if (typeof IntersectionObserver !== 'undefined' && footerElement) {
            footerObserver = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  isFixed.value = !entry.isIntersecting; 
                });
              },
              { threshold: 0 }
            );
    
            footerObserver.observe(footerElement);
          }
        });
    
        onUnmounted(() => {
          if (footerObserver) {
            footerObserver.disconnect();
          }
        });
    
        return {
          activeTab,
          isFixed,
        };
      },
    });
      </script>
      
    
      <style scoped>
      .fade-slide-enter-active,
      .fade-slide-leave-active {
        transition: opacity 0.5s ease, transform 0.5s ease;
      }
      .fade-slide-enter-from {
        opacity: 0;
        transform: translateY(-20px); 
      }
      .fade-slide-leave-to {
        opacity: 0;
        transform: translateY(20px); 
      }
      </style>
      
    