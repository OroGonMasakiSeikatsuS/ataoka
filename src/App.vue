<template>
  <div>
    <google-map />
    <movieDetails />
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
