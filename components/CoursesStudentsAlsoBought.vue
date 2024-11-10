<template>
  <div>
    <h2 class="text-lg font-bold mb-4">Students also bought</h2>
    <div class="space-y-4">
      <HotCoursesCard
        v-for="(course, index) in visibleCourses"
        :key="index"
        :course="course"
      />
    </div>
    <button @click="toggleShowMore" class="mt-6  text-blackHover w-full border border-blackHover p-2 flex align-middle items-center font-bold text-sm justify-center hover:bg-whiteBlue">
      {{ showMore ? "Show less" : "Show more" }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CourseCard from '../components/CourseCard.vue';
import coursesData from '../src/data/coursesData';
import HotCoursesCard from './HotCoursesCard.vue';

export default defineComponent({
  components: { CourseCard },
  data() {
    return {
      coursesData,
      showMore: false,
    };
  },
  computed: {
    visibleCourses() {
      return this.showMore ? this.coursesData : this.coursesData.slice(0, 7);
    },
  },
  methods: {
    toggleShowMore() {
      this.showMore = !this.showMore;
    },
  },
});
</script>
