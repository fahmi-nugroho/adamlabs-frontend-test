<template>
  <div class="header">
    <div class="font-600-30" style="width: 160px; margin-right: 20px">L O G O</div>
    <div class="search-container">
      <img src="../assets/Icons/web.svg" alt="" style="margin-left: 18px; margin-right: 18px" />
      <div style="margin-right: 30px; margin-top: 8px">Menu</div>
      <img src="../assets/Icons/arrow-bottom.svg" alt="" style="width: 20px; height: 20px; margin-right: 15px; margin-top: 8px" />
      <div style="border-left: 1px solid black; margin-right: 12px; margin-top: 10px; margin-bottom: 10px"></div>
      <input class="search-input" type="text" placeholder="Search..." />
      <div class="search-btn">
        <img src="../assets/Icons/search.svg" alt="" />
      </div>
    </div>
    <img src="../assets/Icons/Message.svg" alt="" style="width: 30px; height: 30px; margin-left: 35px; margin-right: 18px; margin-top: 5px" />
    <img src="../assets/Icons/notification.svg" alt="" style="width: 30px; height: 30px; margin-right: 8px; margin-top: 5px" />
    <div class="profile-container">
      <img src="../assets/Icons/small-profile.svg" alt="" style="width: 30px; height: 30px" />
      <img src="../assets/Icons/Dropdown.svg" alt="" style="width: 13px; height: 13px; margin-top: 8px; margin-left: 8px" />
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  background-color: white;
  height: 80px;
  padding: 20px 24px;
}
.search-container {
  display: flex;
  width: 100%;
  border-radius: 6px;
  background-color: #f3f3f3;
}
.search-input {
  border: none;
  background-color: #f3f3f3;
  width: 100%;
  margin: 11px 0px;
}
.search-btn {
  display: flex;
  justify-content: center;
  padding: 3px;
  background-color: #e30607;
  border-radius: 6px;
  width: 60px;
  margin-right: 6px;
  margin-top: 6px;
  margin-bottom: 6px;
}
.profile-container {
  border: 1px solid black;
  border-radius: 6px;
  padding: 6px;
  display: flex;
  width: 68px;
}
</style>
