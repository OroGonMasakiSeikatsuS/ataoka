<template>
  <h1>クイズ</h1>
</template>

<script>
export default {
  data() {
    return {
      isLaughing: false,
    }
  },
  methods: {
    makeLaugh() {
      this.isLaughing = true
    },
  },
}
</script>
