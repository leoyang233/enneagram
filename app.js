App({
  onLaunch() {
    // Load Enneagram data
    const enneagramData = require('./data/enneagram.js');
    this.globalData.enneagramTypes = enneagramData.types;
    this.globalData.questions = enneagramData.questions;
    
    console.log('Enneagram Mini Program launched');
  },
  
  globalData: {
    userInfo: null,
    enneagramTypes: [],
    questions: [],
    testResult: null
  }
});
