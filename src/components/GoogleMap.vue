<template>
  <div>
    <h1>Google Map</h1>
    <div ref="map" style="height: 500px; width: 800px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: "",
      myLatLng: { lat: -34.397, lng: 150.644 },
    }
  },
  mounted() {
    let script = document.createElement("script")
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAYmGZQYs5q_WtHPBwpXIUutujMHbD5hug&callback=initMap"
    script.async = true
    document.head.appendChild(script)

    window.initMap = () => {
      this.map = new window.google.maps.Map(this.$refs.map, {
        center: this.myLatLng,
        zoom: 8,
      })
      new window.google.maps.Marker({ position: this.myLatLng, map: this.map })
    }
  },
}
</script>
