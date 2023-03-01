<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
* {
  box-sizing: border-box;
}

@font-face {
  font-family: "OpenSans";
  src: local("OpenSans"), url("./assets/OpenSans.ttf") format("truetype");
}

.font-700-18 {
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
}

.font-600-36 {
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
}

.font-600-30 {
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
}

.font-400-16 {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}

html {
  margin: 0;
}

body {
  margin: 0;
  font-family: "OpenSans";
}

label {
  display: block;
  margin-bottom: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
}

button {
  display: block;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  border-radius: 6px;
  width: 360px;
  height: 50px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
}

.text-field {
  border-radius: 6px;
  border: 1px solid #787777;
  padding: 0px 16px;
  width: 100%;
  height: 40px;
}

.radio {
  margin: 0px;
  width: 30px;
  height: 30px;
}
</style>
