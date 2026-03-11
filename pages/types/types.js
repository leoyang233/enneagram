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

  goToDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    });
  },

  startTest() {
    wx.navigateTo({
      url: '/pages/test/test'
    });
  }
});
