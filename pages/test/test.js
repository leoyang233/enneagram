const app = getApp();

Page({
  data: {
    questions: [],
    currentIndex: 0,
    currentQuestion: null,
    totalQuestions: 0,
    progressPercent: 0,
    answers: {},
    scores: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 }
  },

  onLoad() {
    const questions = app.globalData.questions;
    this.setData({
      questions: questions,
      currentQuestion: questions[0],
      totalQuestions: questions.length,
      progressPercent: Math.round(1 / questions.length * 100)
    });
  },

  selectAnswer(e) {
    const score = parseInt(e.currentTarget.dataset.score);
    const questionId = this.data.currentQuestion.id;
    const questionType = this.data.currentQuestion.type;
    
    // Update answers
    const answers = { ...this.data.answers, [questionId]: score };
    
    // Update type scores
    const scores = { ...this.data.scores };
    // Remove old score if exists
    if (this.data.answers[questionId]) {
      scores[questionType] -= this.data.answers[questionId];
    }
    // Add new score
    scores[questionType] += score;
    
    this.setData({ answers, scores });

    // Auto advance after short delay
    setTimeout(() => {
      if (this.data.currentIndex < this.data.totalQuestions - 1) {
        this.nextQuestion();
      }
    }, 300);
  },

  nextQuestion() {
    if (this.data.currentIndex < this.data.totalQuestions - 1) {
      const newIndex = this.data.currentIndex + 1;
      this.setData({
        currentIndex: newIndex,
        currentQuestion: this.data.questions[newIndex],
        progressPercent: Math.round((newIndex + 1) / this.data.totalQuestions * 100)
      });
    } else {
      this.calculateResult();
    }
  },

  prevQuestion() {
    if (this.data.currentIndex > 0) {
      const newIndex = this.data.currentIndex - 1;
      this.setData({
        currentIndex: newIndex,
        currentQuestion: this.data.questions[newIndex],
        progressPercent: Math.round((newIndex + 1) / this.data.totalQuestions * 100)
      });
    }
  },

  jumpToQuestion(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      currentIndex: index,
      currentQuestion: this.data.questions[index],
      progressPercent: Math.round((index + 1) / this.data.totalQuestions * 100)
    });
  },

  calculateResult() {
    const scores = this.data.scores;
    
    // Find the type with highest score
    let maxScore = 0;
    let primaryType = 1;
    
    for (let type in scores) {
      if (scores[type] > maxScore) {
        maxScore = scores[type];
        primaryType = parseInt(type);
      }
    }
    
    // Calculate percentages
    const maxPossible = 20; // 4 questions per type, max score 5 each
    const typePercentages = {};
    for (let type in scores) {
      typePercentages[type] = Math.round((scores[type] / maxPossible) * 100);
    }
    
    // Find secondary type
    let secondaryType = null;
    let secondaryMax = 0;
    for (let type in scores) {
      if (parseInt(type) !== primaryType && scores[type] > secondaryMax) {
        secondaryMax = scores[type];
        secondaryType = parseInt(type);
      }
    }
    
    const result = {
      primaryType: primaryType,
      secondaryType: secondaryType,
      scores: scores,
      percentages: typePercentages,
      maxScore: maxScore
    };
    
    app.globalData.testResult = result;
    
    wx.navigateTo({
      url: '/pages/result/result'
    });
  }
});
