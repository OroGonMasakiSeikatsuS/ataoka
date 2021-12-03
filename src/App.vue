<template>
  <div>
    <google-map />
    <quiz />
  </div>
</template>

<script>
import GoogleMap from "./components/GoogleMap.vue"
import Quiz from "./components/quiz.vue"

export default {
  name: "App",
  components: {
    GoogleMap,
    Quiz,
  },
}
</script>
