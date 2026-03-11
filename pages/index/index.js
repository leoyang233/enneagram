const app = getApp();

Page({
  data: {
    types: []
  },

  onLoad() {
    this.setData({
      types: app.globalData.enneagramTypes
    });
  },

  onShow() {
    // Reset test result when returning to home
    app.globalData.testResult = null;
  },

  startTest() {
    wx.navigateTo({
      url: '/pages/test/test'
    });
  },

  goToTypes() {
    wx.switchTab({
      url: '/pages/types/types'
    });
  }
});
