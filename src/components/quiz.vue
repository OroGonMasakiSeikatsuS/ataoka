'''
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
    <div v-if="computed">
      <h1>結果発表</h1>
      <div v-for="(question, index) in this.questions" :key="index">
        <div>{{ question.question }}</div>
        <ul>
          <li v-for="answer in question.answers" :key="answer">{{ answer }}</li>
        </ul>
        <span v-if="question.answer == answers[index]">正解</span>
        <span v-else>
          不正解<br />正解は「{{ question.answers[question.answer] }}」でした。
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      answers: [],
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
    completed: function () {
      return this.questions.length == this.answers.length
    },
  },
  methods: {
    addAnswer: function (index) {
      this.answers.push(index)
      if (!this.completed) {
        this.questionIndex++
      }
    },
  },
}
</script>
