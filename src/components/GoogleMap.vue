<template>
  <div>
    <GmapMap
      :center="{ lat: 34.8891409884306, lng: 134.6604286952726 }"
      :zoom="7"
      :options="{ streetViewControl: false }"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
      @dragend="onDragEnd"
    >
      <GmapInfoWindow
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen = false"
      >
        <div class="app">
          <h1 class="movieTitle">映画のタイトル{{ title }}</h1>
          <img src="" alt="" />
          <h4 class="movieCate">
            国：{{ country }}/ 主演:{{ actor }} / 監督：{{ director }}
          </h4>
          <p class="movieInfo">あらすじ{{ movieNote }}</p>
        </div>
        <!-- <p v-for="movie in movies" :key="movie.id"> 
          {{ movie.text? }} -->
      </GmapInfoWindow>
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="toggleInfoWindow(m)"
      />
    </GmapMap>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  name: "HelloWorld",
  data() {
    return {
      markers: [
        { position: { lat: 34.8891409884306, lng: 134.6604286952726 } },
        { position: { lat: 34.920695542205486, lng: 127.69364298548562 } }, //光陽港海洋公園
      ],
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
      infoWindowPos: null,
      infoWinOpen: false,
    }
  },
  methods: {
    onDragEnd() {
      console.log("hoge")
    },
    toggleInfoWindow(marker) {
      this.infoWindowPos = marker.position
      this.infoWinOpen = true
    },
  },
  created() {
    firebase
      .firestore()
      .collection("movies")
      .where("country", "==", "")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.movies.push({
            id: doc.id,
            ...doc.data(),
          })
        })
      })
  },
  //const db = firebase.firestore() //document取得
  //collection 取得
  /*const snapshot = await db
  .collection('movies')
  // .where('country', '==', '') //countryで一致するコレクションを持ってくる？
  .get();
snapshot.forEach(doc => {
  console.log(doc.id, '==', doc.data()); */
}
</script>

<style>
.app {
  width: 20rem;
  text-align: center;
  background-color: black;
  color: aliceblue;
}
.movieTitle {
  background-color: rgb(238, 225, 37);
  color: black;
}
</style>
