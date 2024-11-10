<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-8">Course content</h1>
      <div class="flex items-center justify-between">
          <p class="text-sm text-gray-500 mb-6">45 sections • 135 lectures • 17h 27m total length</p>
          <button @click="toggleAllSections" class="  mb-6 text-sm font-extrabold text-hoveredPrimary">
            {{ areAllExpanded ? 'Collapse all sections' : 'Expand all sections' }}
          </button>
      </div>
      <table class="w-full   border-gray-300   border-0.3">
        <DropdownSection
          v-for="(section, index) in dropdownSections"
          :key="index"
          :title="section.title"
          :lectures="section.lectures"
          :duration="section.duration"
          :items="section.items"
          :initial-open="section.isOpen"
        />
      </table>
      <button class="w-full border border-gray-400 text-gray-600 py-2 hover:bg-whiteBlue mt-6">35 more sections</button>
    
    </div>
  </template>
  
  <script lang="ts">
import { defineComponent } from 'vue';
import DropdownSection from './DropdownSection.vue';
import dropdownSections from '../src/data/dropdownSectionsData'; 

export default defineComponent({
  components: {
    DropdownSection,
  },
  data() {
    return {
      dropdownSections: dropdownSections.map(section => ({ ...section, isOpen: false })),
      areAllExpanded: false
    };
  },
  methods: {
    toggleAllSections() {
      this.areAllExpanded = !this.areAllExpanded;
      this.dropdownSections.forEach(section => {
        section.isOpen = this.areAllExpanded;
      });
    }
  }
});
</script>

  <style scoped></style>
  