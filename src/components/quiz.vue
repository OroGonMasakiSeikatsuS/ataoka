<template>
  <div>
    <h1>クイズ</h1>
    <div>
      <div>第{{ questionIndex + 1 }}問</div>
      <div>{{ currentQuestion.question }}</div>
      <button
        v-for="(answer, index) in currentQuestion.answers"
        :key="index"
        v-onclick="addAnswer(index)"
      >
        {{ index + 1 }}. {{ answer }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questionIndex: 0,
      questions: [
        {
          question: "",
          answers: ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
          answer: 1,
        },
        {
          question: "",
          answers: ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
          answer: 1,
        },
        {
          question: "",
          answers: ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
          answer: 1,
        },
        {
          question: "",
          answers: ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
          answer: 1,
        },
        {
          question: "",
          answers: ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
          answer: 1,
        },
      ],
    }
  },
  computed: {
    currentQuestion: function () {
      return this.questions[this.questionIndex]
    },
  },
  addAnswer: function (index) {
    this.answers.push(index)

    if (this.questions.length == this.answers.length) {
      var correctCount = 0
      for (var i in this.answers) {
        var answer = this.answers[i]
        if (answer == this.questions[i].answer) {
          correctCount++
        }
      }
      alert(correctCount + "問正解です！")
    } else {
      this.questionIndex++
    }
  },
}
</script>
