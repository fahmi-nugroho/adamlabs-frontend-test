import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const expiresOn = ref();
    const token = ref();
    const user = ref();

    function setAuthData(data) {
      expiresOn.value = data.expiresOn;
      token.value = data.token;
      user.value = data.user;
    }

    return { expiresOn, token, user, setAuthData };
  },
  {
    persist: true,
  }
);
