const app = getApp();

// Extended data for each type
const detailData = {
  1: {
    growthTips: [
      "学会接受不完美，允许自己和他人犯错",
      "表达内心的愤怒和不满，不要过度压抑",
      "对自己宽容一些，减少自我批评",
      "学会灵活变通，不是所有事情都只有一种正确方式"
    ],
    relationship: {
      love: "1号在恋爱中非常忠诚和负责，但可能过于挑剔。学会欣赏伴侣的优点，接受对方的不完美，会让关系更加和谐。",
      work: "1号是天生的质量把控者，适合做需要精确和规则的工作。学会授权和信任团队成员，避免微观管理。"
    },
    famousPeople: ["孔子", "甘地", "艾尔顿·约翰", "希拉里·克林顿"]
  },
  2: {
    growthTips: [
      "学会说"不"，把自己的需求放在首位",
      "不要为了被需要而付出，学会无条件的爱",
      "发展独立的自我，不依赖他人的认可",
      "认识到自己的价值不取决于为别人做了什么"
    ],
    relationship: {
      love: "2号是非常体贴和关怀的伴侣，但要注意不要过度付出而忽视自己的需求。健康的爱情需要平等和互相支持。",
      work: "2号擅长建立关系和团队协作，适合做客户服务或人力资源工作。学会设定界限，避免 burnout。"
    },
    famousPeople: ["特蕾莎修女", "奥普拉·温弗瑞", "多莉·帕顿", "理查德·西蒙斯"]
  },
  3: {
    growthTips: [
      "学会面对失败，将其视为成长的机会",
      "关注内在价值，而不是外在的成就和形象",
      "允许自己脆弱，不需要时刻保持完美",
      "发展真实的自我，而不是适应环境的变色龙"
    ],
    relationship: {
      love: "3号在恋爱中追求成功和认可，但要记住亲密关系需要真实的情感交流，而不是表演完美的关系。",
      work: "3号是高效和目标导向的领导者，但要注意团队合作的重要性，不要只为了个人成功而牺牲他人。"
    },
    famousPeople: ["汤姆·克鲁斯", "泰勒·斯威夫特", "奥普拉·温弗瑞", "比尔·克林顿"]
  },
  4: {
    growthTips: [
      "学会欣赏当下的美好，不要总是追求缺失的",
      "接受平凡，认识到每个人都是独特的",
      "不要让情绪控制行为，发展情绪调节能力",
      "关注他人的需求，减少自我沉溺"
    ],
    relationship: {
      love: "4号在感情中追求深度和真实，但可能过于情绪化。学会在稳定中寻找美，接受关系的平凡一面。",
      work: "4号富有创意和审美眼光，适合艺术或创意领域。学会按时完成任务，平衡理想与现实。"
    },
    famousPeople: ["梵高", "弗吉尼亚·伍尔夫", "约翰尼·德普", "王子"]
  },
  5: {
    growthTips: [
      "学会表达情感，与他人建立深层连接",
      "从观察走向参与，体验生活而不仅是思考",
      "分享你的知识和见解，不要过度保留",
      "认识到情感也是一种智慧"
    ],
    relationship: {
      love: "5号需要大量的个人空间和独处时间，伴侣需要理解这一点。学会表达情感需求，让伴侣走进你的内心世界。",
      work: "5号擅长研究和分析，是专家型人才。学会团队合作和沟通，将你的知识转化为实际价值。"
    },
    famousPeople: ["爱因斯坦", "比尔·盖茨", "蒂姆·伯顿", "简·奥斯汀"]
  },
  6: {
    growthTips: [
      "学会信任自己和他人，减少不必要的担忧",
      "面对恐惧而不是逃避，勇气是实践出来的",
      "发展内在的安全感，不过度依赖外部确认",
      "认识到怀疑也是一种智慧，但不要让它控制你"
    ],
    relationship: {
      love: "6号非常忠诚和可靠，但可能过于焦虑。学会信任伴侣，不要把最坏的情况投射到关系中。",
      work: "6号是优秀的风险管理者和团队成员。培养自信，相信自己的判断，不要过度寻求他人的认可。"
    },
    famousPeople: ["伍迪·艾伦", "梅丽尔·斯特里普", "乔治·W·布什", "黛安娜王妃"]
  },
  7: {
    growthTips: [
      "学会面对痛苦和不适，不要一味逃避",
      "培养专注力，完成一件事再做下一件",
      "深入体验当下，而不是急于寻找下一个刺激",
      "认识到承诺和深度也能带来快乐"
    ],
    relationship: {
      love: "7号带来欢乐和冒险，但要注意承诺的重要性。学会在一段关系中停留，面对困难而不是逃避。",
      work: "7号富有创意和乐观精神，适合创业或创新领域。学会坚持完成项目，不要被新的挑战分散注意力。"
    },
    famousPeople: ["罗宾·威廉姆斯", "金·凯瑞", "理查德·布兰森", "莎拉·杰西卡·帕克"]
  },
  8: {
    growthTips: [
      "学会示弱，脆弱也是一种力量",
      "控制愤怒，用更温和的方式表达意见",
      "倾听他人的观点，你并不总是对的",
      "保护他人的同时也要尊重他们的自主性"
    ],
    relationship: {
      love: "8号在恋爱中非常投入和保护欲强，但可能过于控制。学会温柔和倾听，让伴侣感到平等和尊重。",
      work: "8号是天生的领导者，有决断力和执行力。学会授权和信任，不要事必躬亲。"
    ],
    famousPeople: ["马丁·路德·金", "丘吉尔", "肖恩·康纳利", "芭芭拉·史翠珊"]
  },
  9: {
    growthTips: [
      "学会表达真实想法，不要总是迎合他人",
      "面对冲突，它是解决问题的必要过程",
      "设定优先级，专注于最重要的事情",
      "认识到你的存在本身就有价值"
    ],
    relationship: {
      love: "9号是非常包容和平和的伴侣，但要记得表达自己的需求和想法。避免为了和谐而压抑真实的自己。",
      work: "9号善于调解和团队合作，但要注意主动性和决断力。学会表达意见，参与竞争。"
    },
    famousPeople: ["林肯", "奥黛丽·赫本", "华特·迪士尼", "达赖喇嘛"]
  }
};

Page({
  data: {
    type: null,
    allTypes: [],
    growthTips: [],
    relationship: null,
    famousPeople: []
  },

  onLoad(options) {
    const typeId = parseInt(options.id);
    this.loadTypeData(typeId);
  },

  loadTypeData(typeId) {
    const types = app.globalData.enneagramTypes;
    const type = types.find(t => t.id === typeId);
    const details = detailData[typeId];

    this.setData({
      type,
      allTypes: types,
      growthTips: details.growthTips,
      relationship: details.relationship,
      famousPeople: details.famousPeople
    });

    wx.setNavigationBarTitle({
      title: `${type.name} - 详细解析`
    });
  },

  switchType(e) {
    const id = e.currentTarget.dataset.id;
    if (id !== this.data.type.id) {
      this.loadTypeData(id);
    }
  },

  startTest() {
    wx.navigateTo({
      url: '/pages/test/test'
    });
  }
});
