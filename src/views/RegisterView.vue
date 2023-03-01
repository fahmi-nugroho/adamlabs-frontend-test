<template>
  <div class="register">
    <AuthShadow />
    <HeaderAuth />
    <div class="card">
      <div class="font-600-30" style="text-align: center; margin-bottom: 36px">Sign Up</div>
      <div class="input-container">
        <div class="col" style="border-right: 1px solid black; padding-right: 36px">
          <div style="margin-bottom: 30px">
            <label for="email">E-mail</label>
            <input id="email" class="text-field" type="email" placeholder="Enter Your Email" v-model="email" />
          </div>
          <div style="margin-bottom: 30px">
            <label for="password">Password</label>
            <input id="password" class="text-field" type="password" placeholder="Enter Password" v-model="password" />
          </div>
          <div>
            <label for="phone">Phone Number</label>
            <input id="phone" class="text-field" type="number" placeholder="+62xxxxxxxxxx" v-model="phoneNumber" />
          </div>
        </div>
        <div class="col" style="margin-left: 36px">
          <div style="margin-bottom: 30px">
            <label for="first-name">First Name</label>
            <input id="first-name" class="text-field" type="text" v-model="firstName" />
          </div>
          <div style="margin-bottom: 30px">
            <label for="last-name">Last Name</label>
            <input id="last-name" class="text-field" type="text" v-model="lastName" />
          </div>
          <div class="radio-container">
            <input type="radio" name="user-type" id="student" class="radio" value="student" v-model="userType" />
            <label for="student" style="margin-bottom: 0px; margin-top: 2px">I’m a Student</label>
            <input type="radio" name="user-type" id="professional" class="radio" value="professional" v-model="userType" />
            <label for="professional" style="margin-bottom: 0px; margin-top: 2px">I’m a Professional</label>
          </div>
        </div>
      </div>
      <button class="login-btn" style="margin-top: 48px">Sign Up</button>
      <div class="login-signup">
        <small style="color: #787777">Already Have An Account? <b @click="goToLogin()" style="cursor: pointer">Log In</b></small>
      </div>
      <div class="divider-login">
        <hr />
        <small style="margin: 0px 10px">Or</small>
        <hr />
      </div>
      <button class="google-btn">
        <img style="margin-right: 20px" src="../assets/Icons/Google.svg" alt="" />
        <div>Sign up with Google</div>
      </button>
    </div>
  </div>
</template>

<script setup>
import HeaderAuth from "../components/HeaderAuth.vue";
import AuthShadow from "../components/AuthShadow.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const firstName = ref(null);
const lastName = ref(null);
const email = ref(null);
const password = ref(null);
const phoneNumber = ref(null);
const userType = ref(null);

const goToLogin = () => {
  router.push({ name: "login" });
};

const login = async () => {
  if (email.value != null && password.value != null) {
    const loginResponse = await fetch("https://api.kontenbase.com/query/api/v1/e97cd589-1ccb-4cf3-86f9-27a8dd71861f/auth/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        firstName: firstName.value, 
        lastName: lastName.value, 
        email: email.value, 
        password: password.value,
        phoneNumber: phoneNumber.value,
        userType: userType.value
      }),
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
  padding: 48.5px;
}

.input-container {
  display: flex;
}

.col {
  width: 100%;
}

.radio-container {
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.login-btn {
  border: none;
  background-color: #fafafa;
  color: #787777;
}

.login-signup {
  display: flex;
  justify-content: center;
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
