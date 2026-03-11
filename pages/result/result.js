const app = getApp();

Page({
  data: {
    primaryType: null,
    secondaryType: null,
    sortedScores: []
  },

  onLoad() {
    const result = app.globalData.testResult;
    if (!result) {
      wx.redirectTo({
        url: '/pages/test/test'
      });
      return;
    }

    const types = app.globalData.enneagramTypes;
    const primaryType = types.find(t => t.id === result.primaryType);
    const secondaryType = types.find(t => t.id === result.secondaryType);

    // Prepare sorted scores for chart
    const sortedScores = Object.keys(result.scores)
      .map(typeId => {
        const type = types.find(t => t.id === parseInt(typeId));
        return {
          type: parseInt(typeId),
          name: type.name,
          score: result.scores[typeId],
          color: type.color,
          percentage: result.percentages[typeId]
        };
      })
      .sort((a, b) => b.score - a.score);

    this.setData({
      primaryType,
      secondaryType,
      sortedScores
    });
  },

  onShareAppMessage() {
    return {
      title: `我是${this.data.primaryType.name}，来测测你的九型人格吧！`,
      path: '/pages/index/index'
    };
  },

  viewAllTypes() {
    wx.switchTab({
      url: '/pages/types/types'
    });
  },

  retakeTest() {
    wx.navigateTo({
      url: '/pages/test/test'
    });
  }
});
