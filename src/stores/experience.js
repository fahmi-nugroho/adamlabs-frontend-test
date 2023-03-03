import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useExperienceStore = defineStore("experience", () => {
  const experiences = ref([]);
  function setExperiences(data) {
    experiences.value = data;
  }

  return { experiences, setExperiences };
});
