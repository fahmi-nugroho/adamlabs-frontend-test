<template>
  <div class="profile">
    <HeaderProfile />
    <img src="../assets/Images/hero.png" alt="" style="width: 100%; height: 280px" />
    <div class="user-profile">
      <div>Amanda Christine</div>
      <div>UI/UX Designer at Talent Insider | South Jakarta, DKI Jakarta, Indonesia</div>
      <div class="counter-container">
        <div>
          <div>482</div>
          <div>Views</div>
        </div>
        <div>
          <div>542</div>
          <div>Connects</div>
        </div>
        <div>
          <div>1,245</div>
          <div>Followers</div>
        </div>
      </div>
    </div>
    <div class="main-container">
      <div class="first-section">
        <div class="status-container">ProfileStatus</div>
        <div class="about-container">About</div>
      </div>
      <div class="secound-section">Experience</div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import HeaderProfile from "../components/HeaderProfile.vue";
import Footer from "../components/Footer.vue";
import { onMounted } from "vue";

onMounted(async () => {
  const getExperienceResponse = await fetch("https://api.kontenbase.com/query/api/v1/e97cd589-1ccb-4cf3-86f9-27a8dd71861f/experiences", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const response = await getExperienceResponse.json();
  if (response.message.includes("invalid")) {
    alert(response.message);
  }
});
</script>

<style scoped>
.profile {
  background-color: #534f4f;
}
.user-profile {
  margin: 24px;
  border-radius: 50px 50px 0px 0px;
  padding-top: 65px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 20px;
  background-color: white;
}
.counter-container {
  display: flex;
}
.main-container {
  display: flex;
  padding-left: 24px;
  padding-right: 24px;
}
.first-section {
  flex-grow: 1;
}
.status-container {
  background-color: white;
  border-radius: 6px;
  margin-right: 24px;
  margin-bottom: 24px;
}
.about-container {
  background-color: white;
  border-radius: 6px;
  margin-right: 24px;
}
.secound-section {
  background-color: white;
  border-radius: 6px;
  flex-grow: 2;
}
</style>
