<template>
  <div class="profile">
    <HeaderProfile />
    <img src="../assets/Images/hero.png" alt="" style="width: 100%; height: 280px" />
    <div class="user-profile">
      <div class="photo-frame">
        <img src="../assets/Images/big-profile.png" alt="" />
      </div>
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
      <div class="secound-section">
        Experience
        <div v-if="showMore" v-for="ex in experienceStore.experiences">
          <div>{{ ex.jobTitle }}</div>
          <div>{{ ex.companyName }}</div>
          <div>{{ ex.start }} - {{ ex.end }}</div>
          <div>{{ ex.description }}</div>
          <hr />
        </div>
        <div v-else v-for="ex in slicedExperience">
          <div>{{ ex.jobTitle }}</div>
          <div>{{ ex.companyName }}</div>
          <div>{{ ex.start }} - {{ ex.end }}</div>
          <div>{{ ex.description }}</div>
          <hr />
        </div>
        <button @click="showMore = !showMore">
          <span v-if="showMore">Show Less</span>
          <span v-else>Show More</span>
        </button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import HeaderProfile from "../components/HeaderProfile.vue";
import Footer from "../components/Footer.vue";
import { onMounted, ref } from "vue";
import { useExperienceStore } from "../stores/experience";

const experienceStore = useExperienceStore();

const showMore = ref(false);
const slicedExperience = ref([]);

onMounted(async () => {
  // const getExperienceResponse = await fetch("https://api.kontenbase.com/query/api/v1/e97cd589-1ccb-4cf3-86f9-27a8dd71861f/experiences", {
  //   method: "GET",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  // });
  // const response = await getExperienceResponse.json();
  // if (response.message && response.message.includes("invalid")) {
  //   alert(response.message);
  // }
  // experienceStore.setExperiences(response);
  // slicedExperience.value = response.slice(0, 4)
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
.photo-frame {
  position: absolute;
  right: 0;
  left: 0;
  top: 220px;
  margin: auto;
  border: 18px solid #e30607;
  border-radius: 0px 0px 100px 100px;
  height: 240px;
  width: 200px;
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
