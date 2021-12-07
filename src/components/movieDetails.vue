<template>
  <div id="app">
    <h1 class="movieTitle">{{ title }}</h1>
    <img src="" alt="" />
    <h4 class="movieCate">
      国：{{ country }} 主演:{{ actor }} 監督：{{ director }}
    </h4>
    <p class="movieInfo">{{ movieNote }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: "ラストサムライ（2003）",
      country: "日本(兵庫県 書寫山圓教寺)",
      actor: "トム・クルーズ",
      director: "エドワード・ズウィック",
      movieNote:
        "明治維新後の日本、押し寄せる近代化の波の中、勝元はサムライの時代の終わりを察知していた。しかし勝元は戦わずして去るつもりはなかった。日本初の近代的軍隊を訓練する教官としてオールグレンを雇った時、二人の戦士の運命がひとつに重なる。（Filmarksより引用）",
    }
  },

  //const db = firebase.firestore() //document取得
  //collection 取得
  /*const snapshot = await db
  .collection('movies')
  .where('country', '==', '')
  .get();
snapshot.forEach(doc => {
  console.log(doc.id, '==', doc.data()); */
}
</script>

<style>
#app {
  width: 20rem;
  text-align: center;
}
</style>
