<template>
  <div class="login">
    <AuthShadow />
    <HeaderAuth />
    <div class="card">
      <div class="font-600-30" style="text-align: center; margin-bottom: 36px">Log In</div>
      <div style="margin-bottom: 30px">
        <label for="email">E-mail</label>
        <input id="email" class="text-field" type="email" placeholder="Enter Your Email" v-model="email" />
      </div>
      <div style="margin-bottom: 48px">
        <label for="password">Password</label>
        <input id="password" class="text-field" type="password" placeholder="Enter Password" v-model="password" />
      </div>
      <button @click="login()" :class="[ disableLogin ? 'login-btn' : 'active' ]">Log In</button>
      <div class="signup-login">
        <small style="color: #787777">New to Xplore? <b @click="goToRegister()" style="cursor: pointer">Sign Up</b></small>
        <small style="cursor: pointer; color: #787777">Forgot Password?</small>
      </div>
      <div class="divider-login">
        <hr />
        <small style="margin: 0px 10px">Or</small>
        <hr />
      </div>
      <button class="google-btn">
        <img style="margin-right: 20px" src="../assets/Icons/Google.svg" alt="" />
        <div>Log In with Google</div>
      </button>
    </div>
  </div>
</template>

<script setup>
import HeaderAuth from "../components/HeaderAuth.vue";
import AuthShadow from "../components/AuthShadow.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { computed } from "@vue/reactivity";

const router = useRouter();

const email = ref(null);
const password = ref(null);

const disableLogin = computed(() => {
  if (email.value === null || password.value === null || email.value === "" || password.value === "") {
    return true;
  }
  return false;
});

const goToRegister = () => {
  router.push({ name: "register" });
};

const login = async () => {
  if (email.value === null || password.value === null || email.value === "" || password.value === "") {
    const loginResponse = await fetch("https://api.kontenbase.com/query/api/v1/e97cd589-1ccb-4cf3-86f9-27a8dd71861f/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email.value, password: password.value }),
    });
    const response = await loginResponse.json();
    if (response.message.includes("invalid")) {
      alert(response.message);
    }
  }
};
</script>

<style scoped>
.card {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 3;
  width: 890px;
  height: 688px;
  background-color: white;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  padding: 103px 265px;
}

.login-btn {
  border: none;
  background-color: #fafafa;
  color: #787777;
}

.active {
  border: none;
  background-color: #e30607;
  color: white;
}

.signup-login {
  display: flex;
  justify-content: space-between;
  margin: 12px 0px;
}

.divider-login {
  margin: 12px 0px;
  display: flex;
}

hr {
  width: 100%;
}

.google-btn {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
