<template>
  <div id="app">
    <header>
      <div class="header-wrapper">
        <div class="OMLS">OMLS</div>
        <h1 class="daimei">世界の映画を見てみよう！！</h1>
        <div class="tab">
          <router-link to="/" class="router">home</router-link> |
          <router-link to="Quiz" class="router">Quiz</router-link>
        </div>
      </div>
      <div>
        <router-view />
      </div>
    </header>
    <div class="box">
      <div class="don">WorldWide Cinema</div>
      <div>
        <img
          src="https://manaboy.jp/archives/001/201810/d3e4af8e8ef7a512e0a771dd98696f9a.jpg"
          title="cinema-pic"
        />
      </div>
    </div>

    <div class="google-map">
      <google-map />
    </div>
    <div class="tab">
      <router-link to="Quiz" class="router">Quiz</router-link>
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
.html {
  font-family: "Times New Roman", Times, serif;
  background: black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: black;
}
.header-wrapper {
  display: table;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0) 95% rgb(0, 0, 0) 100px rgba(255, 255, 255, 0) 5%
      rgb(255, 255, 255) 100px
  );
  width: 100%;
  height: 120%;
  padding: 10px;
  margin: 10px;
}

.OMLS {
  font-weight: bold;
  font-size: 20px;
  padding: 0.5em 1em;
  margin: 2em 0;
  color: #2c2c2f;
  background: rgba(247, 247, 4, 0.925);
  display: inline-block;
  text-align: left;
  border-radius: 10px;
}

.daimei {
  display: inline-block;
  text-align: center;
  font-size: 30px;
  color: white;
  padding: 0px 250px;
}
.tab {
  text-align: right;
  font-family: fantasy;
  color: white;
  display: inline-block;
}
.router {
  color: white;
}
.box {
  position: relative;
}
.don {
  font-style: italic;
  font-size: 80px;
  font-weight: bold;
  padding: 30px;
  text-align: center;
  color: black;
  position: absolute;
  top: 300px;
  left: 300px;
}
.cinema-pic {
  height: 50%;
}

.google-map {
  float: none;
  color: white;
  padding: 30px;
}

.footer {
  color: aliceblue;
  font-size: 20px;
  background: black;
  text-align: center;
  padding: 30px;
  margin-top: 100px;
}
</style>
