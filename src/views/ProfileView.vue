<template>
  <div class="profile">
    <HeaderProfile />
    <img src="../assets/Images/hero.png" alt="" style="width: 100%; height: 280px" />
    <div class="user-profile">
      <div class="photo-frame">
        <img src="../assets/Images/big-profile.png" alt="" />
      </div>
      <div class="name-container font-700-28">
        <div>Amanda Christine</div>
        <img src="../assets/Icons/flower.svg" alt="" />
        <img src="../assets/Icons/edit.svg" alt="" />
      </div>
      <div style="text-align: center"><span class="font-600-18">UI/UX Designer at Talent Insider</span> | <span class="font-400-16">South Jakarta, DKI Jakarta, Indonesia</span></div>
      <div class="counter-container">
        <div>
          <div class="font-600-20">482</div>
          <div class="font-400-16">Views</div>
        </div>
        <div style="margin: 10px 0px; border-left: 2px solid black"></div>
        <div>
          <div class="font-600-20">542</div>
          <div class="font-400-16">Connects</div>
        </div>
        <div style="margin: 10px 0px; border-left: 2px solid black"></div>
        <div>
          <div class="font-600-20">1,245</div>
          <div class="font-400-16">Followers</div>
        </div>
      </div>
    </div>
    <div class="main-container">
      <div class="first-section">
        <div class="status-container">
          <div class="font-700-24" style="display: flex; justify-content: space-between; margin-bottom: 12px">
            ProfileStatus
            <img src="../assets/Icons/more.svg" alt="" />
          </div>
          <div class="font-700-20" style="margin-bottom: 8px">Intermediate</div>
          <div class="font-400-16">Complete 2 steps to achieve Expert!</div>
          <div class="progress-bar">
            <div class="filled-bar">
              <div class="font-700-24" style="text-align: center; color: white; padding-top: 2px">70 %</div>
            </div>
            <div class="unfilled-bar"></div>
          </div>
          <div class="question-card">
            <div class="font-600-18" style="margin-bottom: 12px">Which industry do you work in?</div>
            <div class="font-400-16" style="margin-bottom: 18px">Members who add an industry receive up to 2.5 times as many profile views</div>
            <button>Button</button>
          </div>
          <div class="question-card">
            <div class="font-600-18" style="margin-bottom: 12px">Which University do you go to?</div>
            <div class="font-400-16" style="margin-bottom: 18px">Members who add an industry receive up to 2.5 times as many profile views</div>
            <button>Button</button>
          </div>
        </div>
        <div class="about-container">
          <div class="font-700-24" style="display: flex; justify-content: space-between; margin-bottom: 25px">
            <div style="padding-top: 5px">About</div>
            <img src="../assets/Icons/edit.svg" alt="" />
          </div>
          <div class="font-400-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
            Maecenas eget condimentum velit, sit amet fu
          </div>
        </div>
      </div>
      <div class="secound-section">
        <div class="section-links">
          <img src="../assets/Icons/experience.svg" alt="" />
          <img src="../assets/Icons/education.svg" alt="" />
          <img src="../assets/Icons/skills.svg" alt="" />
          <img src="../assets/Icons/post.svg" alt="" />
          <img src="../assets/Icons/contact.svg" alt="" />
        </div>
        <div class="font-700-24" style="height: 40px; margin: 23.5px 0px; display: flex; justify-content: space-between">
          <div style="padding-top: 2px">
            Experience
            <span class="font-400-24">({{ experienceStore.experiences.length }})</span>
          </div>
          <div style="padding-top: 2px">
            <img @click="showModal = true" src="../assets/Icons/plus.svg" alt="" style="cursor: pointer" />
          </div>
        </div>
        <div v-if="showMore" v-for="ex in experienceStore.experiences">
          <div style="display: flex">
            <div style="margin-top: 24px; margin-right: 24px">
              <img v-if="ex.companyName.toLowerCase().includes('insider')" src="../assets/Icons/talent-insider.svg" alt="" />
              <img v-else-if="ex.companyName.toLowerCase().includes('gojek')" src="../assets/Icons/gojek.svg" alt="" />
              <img v-else-if="ex.companyName.toLowerCase().includes('jco')" src="../assets/Icons/jco.svg" alt="" />
              <img v-else-if="ex.companyName.toLowerCase().includes('fiverr')" src="../assets/Icons/fiverr.svg" alt="" />
              <div v-else style="width: 60px; height: 60px; background-color: #d9d9d9; border-radius: 6px"></div>
            </div>
            <div>
              <div class="font-600-22" style="margin-top: 24px">{{ ex.jobTitle }}</div>
              <div class="font-400-16">{{ ex.companyName }}</div>
              <div class="font-400-16" style="margin-bottom: 18px">{{ ex.start }} - {{ ex.end }}</div>
              <div class="font-400-16" style="margin-bottom: 24px">{{ ex.description }}</div>
            </div>
          </div>
          <hr />
        </div>
        <div v-else v-for="ex in slicedExperience">
          <div style="display: flex">
            <div style="margin-top: 24px; margin-right: 24px">
              <img v-if="ex.companyName.toLowerCase().includes('insider')" src="../assets/Icons/talent-insider.svg" alt="" />
              <img v-else-if="ex.companyName.toLowerCase().includes('gojek')" src="../assets/Icons/gojek.svg" alt="" />
              <img v-else-if="ex.companyName.toLowerCase().includes('jco')" src="../assets/Icons/jco.svg" alt="" />
              <img v-else-if="ex.companyName.toLowerCase().includes('fiverr')" src="../assets/Icons/fiverr.svg" alt="" />
              <div v-else style="width: 60px; height: 60px; background-color: #d9d9d9; border-radius: 6px"></div>
            </div>
            <div>
              <div class="font-600-22" style="margin-top: 24px">{{ ex.jobTitle }}</div>
              <div class="font-400-16">{{ ex.companyName }}</div>
              <div class="font-400-16" style="margin-bottom: 18px">{{ ex.start }} - {{ ex.end }}</div>
              <div class="font-400-16" style="margin-bottom: 24px">{{ ex.description }}</div>
            </div>
          </div>
          <hr />
        </div>
        <button class="seemore-btn" @click="showMore = !showMore">
          <div v-if="showMore" style="display: flex; justify-content: center; align-content: center">
            <span class="font-700-20" style="margin-top: 3px; margin-right: 12px">Show Less</span>
            <img class="rotateimg180" src="../assets/Icons/down.svg" alt="" />
          </div>
          <div v-else style="display: flex; justify-content: center; align-content: center">
            <span class="font-700-20" style="margin-top: 3px; margin-right: 12px">Show More</span>
            <img src="../assets/Icons/down.svg" alt="" />
          </div>
        </button>
      </div>
    </div>
    <Footer />
    <div v-if="showModal" class="modal">
      <div class="card">
        <div class="card-title">
          <div style="display: flex">
            <div class="font-600-24" style="flex-grow: 1; padding-left: 28px">Add Experience</div>
            <img @click="showModal = false" src="../assets/Icons/close.svg" alt="" style="margin-left: auto" />
          </div>
          <div class="font-400-18">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        <div class="card-body">
          <div style="margin-bottom: 30px">
            <label for="country">Country</label>
            <input id="country" class="text-field" type="text" placeholder="Enter a country" v-model="country" />
          </div>
          <div style="margin-bottom: 30px">
            <label for="job-title">Job Title</label>
            <input id="job-title" class="text-field" type="text" placeholder="Enter a position or title" v-model="jobTitle" />
          </div>
          <div style="margin-bottom: 30px">
            <label for="company-name">Company Name</label>
            <input id="company-name" class="text-field" type="text" placeholder="Ex. Microsoft" v-model="companyName" />
          </div>
          <div style="margin-bottom: 30px; display: flex;">
            <input id="current-status" type="checkbox" v-model="currentStatus" style="width: 30px; height: 30px; margin: 0;" />
            <label class="font-400-18" for="current-status" style="margin: 0; padding-top: 2px; padding-left: 10px;">I’m currently working in this role</label>
          </div>
          <div style="margin-bottom: 30px">
            <label>Start Date</label>
            <div style="display: flex;">
              <input id="start-month" class="text-field" type="text" placeholder="Enter a month" v-model="startMonth" style="margin-right: 20px;"/>
              <input id="start-year" class="text-field" type="text" placeholder="Enter a year" v-model="startYear" />
            </div>
          </div>
          <div>
            <label>End Date</label>
            <div style="display: flex;">
              <input id="end-month" class="text-field" type="text" placeholder="Enter a month" v-model="endMonth" style="margin-right: 20px;" />
              <input id="end-year" class="text-field" type="text" placeholder="Enter a year" v-model="endYear" />
            </div>
          </div>
        </div>
        <button @click="save()" class="big-button" :class="[ disableLogin ? 'save-btn' : 'active' ]">Save</button>
      </div>
      <div @click="showModal = false" class="element"></div>
    </div>
  </div>
</template>

<script setup>
import HeaderProfile from "../components/HeaderProfile.vue";
import Footer from "../components/Footer.vue";
import { onMounted, ref } from "vue";
import { useExperienceStore } from "../stores/experience";

const experienceStore = useExperienceStore();

const showMore = ref(false);
const showModal = ref(false);
const slicedExperience = ref([]);

onMounted(async () => {
  const getExperienceResponse = await fetch("https://api.kontenbase.com/query/api/v1/e97cd589-1ccb-4cf3-86f9-27a8dd71861f/experiences", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const response = await getExperienceResponse.json();
  if (response.message && response.message.includes("invalid")) {
    alert(response.message);
  }
  experienceStore.setExperiences(response);
  slicedExperience.value = response.slice(0, 4);
});

const addExperience = () => {};
</script>

<style scoped>
.profile {
  background-color: #534f4f;
}
.name-container {
  display: flex;
  margin-top: 22.5px;
  justify-content: center;
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
  text-align: center;
  justify-content: space-between;
  align-content: center;
  width: 250px;
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
  width: 485px;
}
.status-container {
  background-color: white;
  border-radius: 6px;
  margin-right: 24px;
  margin-bottom: 24px;
  padding: 24px;
}
.progress-bar {
  display: flex;
  margin-top: 18px;
  margin-bottom: 20px;
}
.filled-bar {
  background-color: #e30607;
  border-radius: 6px 0px 0px 6px;
  height: 40px;
  width: 70%;
}
.unfilled-bar {
  background-color: #d9d9d9;
  border-radius: 0px 6px 6px 0px;
  height: 40px;
  width: 30%;
}
.question-card {
  background-color: #d9d9d9;
  border-radius: 12px;
  padding: 12px 18px;
  margin-bottom: 12px;
}
.about-container {
  background-color: white;
  border-radius: 6px;
  margin-right: 24px;
  padding: 24px;
}
.secound-section {
  background-color: white;
  padding: 0px 28px;
  border-radius: 6px;
  flex-grow: 1;
}
.section-links {
  display: flex;
  justify-content: space-around;
  padding: 20px 0px;
  border-bottom: 2px solid black;
  height: 80px;
}
.seemore-btn {
  border: none;
  width: 100%;
  height: 50px;
}
.rotateimg180 {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}
.card {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 3;
  width: 600px;
  height: 802px;
  background-color: white;
  border-radius: 6px;
  margin-left: auto;
  margin-right: auto;
}
.card-title {
  text-align: center;
  padding: 30px 24px;
  border-bottom: 1px solid black;
}
.card-body {
  padding: 20px 30px;
  border-bottom: 1px solid black;
}
.save-btn {
  margin-top: 20px;
  border: none;
  background-color: #fafafa;
  color: #787777;
}

.active {
  margin-top: 20px;
  border: none;
  background-color: #e30607;
  color: white;
}
.element {
  z-index: 2;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(30, 30, 30, 0.5);
  margin: 0 auto;
}
</style>
