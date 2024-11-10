<template>
  <div class="">
    <button
      @click="toggleOpen"
      class="w-full text-left py-3 px-4 flex justify-between items-center font-bold bg-whiteBlue transition  border-b-gray-300   border-0.3"
    >
      <span class="flex items-center">
        <span v-if="isOpen" class="transform  font-mono transition-all duration-300">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>        </span>
        <span v-else class="transform font-mono transition-all duration-300">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
        </span>
        <span class="ml-2 text-sm-base ">{{ title }}</span>
      </span>
      <span class="text-sm black font-normal">{{ lectures }} lectures • {{ duration }}</span>
    </button>
    <div v-if="isOpen" class="px-4 pb-4">
      <ul class="space-y-4 mt-5">
        <li v-for="(item, index) in items" :key="index" class="flex justify-between">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-gray-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.55 2.27-4.55 2.27V10zM4 5h16v14H4z"/>
            </svg>
            <a v-if="item.link" :href="item.link" class="text-blue-600 text-sm hover:underline">{{ item.name }}</a>
            <span v-else class="text-gray-800 text-sm">{{ item.name }}</span>
          </div>
          <span class="text-gray-500 text-sm">{{ item.duration }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, watch, type PropType } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    lectures: {
      type: Number,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    items: {
      type: Array as PropType<{ name: string; duration: string; link?: string }[]>,
      required: true,
    },
    initialOpen: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const isOpen = ref(props.initialOpen);

    watch(() => props.initialOpen, (newVal) => {
      isOpen.value = newVal;
    });

    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    };

    return { isOpen, toggleOpen };
  }
});
</script>

<style scoped></style>
