<template>
  <div id="app">
    <header>
      <h1 class="daimei">世界の映画を見てみよう！！</h1>
      <h2 class="namae">Arashi Saki Koudai</h2>
    </header>

    <div></div>
    <div>
      <google-map />
    </div>
    <div class="footer">
      <p>©️kokomademitekuretethankyoudayo, All Rights Reserved?</p>
    </div>
  </div>
</template>

<script>
import GoogleMap from "./components/GoogleMap.vue"

export default {
  name: "App",
  components: {
    GoogleMap,
  },
}
</script>

<style>
.templete {
  font-family: "Times New Roman", Times, serif;
  background-color: antiquewhite;
}

.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.daimei {
  background: linear-gradient(
    180deg,
    rgba(223, 137, 25, 0.918) 80%,
    rgb(223, 137, 25, 0.918) 100px,
    rgba(7, 56, 189, 0.918) 100px,
    rgb(7, 56, 189, 0.918) 20%
  );
  text-align: center;
  font-size: 50px;
  padding: 30px;
  color: aliceblue;
}

.namae {
  text-align: right;
  font-size: 30px;
  padding: 20px;
}

.footer {
  color: aliceblue;
  font-size: 20px;
  background: linear-gradient(
    180deg,
    rgba(223, 137, 25, 0.918) 85%,
    rgb(223, 137, 25, 0.918) 50px,
    rgba(7, 56, 189, 0.918) 50px,
    rgb(7, 56, 189, 0.918) 15%
  );
  text-align: center;
  padding: 30px;
  margin-top: 100px;
}
</style>
