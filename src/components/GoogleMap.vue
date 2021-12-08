<template>
  <div class="googleMap">
    <GmapMap
      :center="{ lat: 34.8891409884306, lng: 134.6604286952726 }"
      :zoom="7"
      :options="{ streetViewControl: false }"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
      @dragend="onDragEnd"
    >
      <div class="movies" v-for="(m, index) in movies" :key="m.title">
        <GmapInfoWindow
          :options="infoOptions"
          :position="infoWindowPos"
          :opened="infoWinOpen"
          @closeclick="infoWinOpen = false"
        >
          <div v-html="contentStrings[index].contentString"></div>
        </GmapInfoWindow>
        <GmapMarker
          :position="{ lat: m.lat, lng: m.lng }"
          :clickable="true"
          :draggable="true"
          @click="toggleInfoWindow(m)"
        />
      </div>
    </GmapMap>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  name: "HelloWorld",
  data() {
    return {
      markers: [],
      movies: [],
      contentStrings: [],
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
      this.infoWindowPos = { lat: marker.lat, lng: marker.lng }
      this.infoWinOpen = true
    },
  },
  created() {
    firebase
      .firestore()
      .collection("movies")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          this.movies.push({
            id: doc.id,
            ...doc.data(),
          })
        })
      })
      .then(() => {
        for (let i = 0; i < this.movies.length; i++) {
          const contentString =
            `<div class="movie">` +
            `<h1 class="movieTitle">${this.movies[i].title}</h1>` +
            `<img src="" alt="" />` +
            `<h4 class="movieCate">` +
            `国：${this.movies[i].country}/ 主演:${this.movies[i].actor} / 監督：${this.movies[i].director}/ジャンル：${this.movies[i].genre}` +
            `</h4>` +
            `<p class="movieInfo">あらすじ：${this.movies[i].movieNote}（Filmarksより引用）</p>` +
            `</div>`
          this.contentStrings.push({
            contentString: contentString,
          })
        }
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
.movie {
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
