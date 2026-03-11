// Enneagram Data
const enneagramData = {
    types: [
        {
            id: 1,
            name: "完美主义者",
            englishName: "The Reformer",
            keywords: ["原则", "完美", "正直", "秩序"],
            description: "追求完美，讲究原则，有强烈的正义感和责任心。",
            strengths: ["有责任心", "做事认真", "追求高标准", "诚实正直"],
            weaknesses: ["过于挑剔", "容易批评", "僵化固执", "压抑愤怒"],
            motivation: "希望做正确的事，避免错误。",
            color: "#E74C3C",
            icon: "⭐"
        },
        {
            id: 2,
            name: "助人者",
            englishName: "The Helper",
            keywords: ["关怀", "慷慨", "人际", "情感"],
            description: "热心助人，善解人意，渴望被需要和被爱。",
            strengths: ["富有同情心", "乐于助人", "善于倾听", "建立关系"],
            weaknesses: ["忽视自己", "过度付出", "寻求认可", "操控情感"],
            motivation: "希望被爱和被需要。",
            color: "#E67E22",
            icon: "❤️"
        },
        {
            id: 3,
            name: "成就者",
            englishName: "The Achiever",
            keywords: ["成功", "效率", "形象", "目标"],
            description: "目标导向，追求成功，注重形象和效率。",
            strengths: ["适应力强", "目标明确", "高效执行", "激励他人"],
            weaknesses: ["过度竞争", "形象至上", "忽视感受", "工作狂"],
            motivation: "希望被认可和钦佩。",
            color: "#F1C40F",
            icon: "🏆"
        },
        {
            id: 4,
            name: "浪漫主义者",
            englishName: "The Individualist",
            keywords: ["独特", "情感", "艺术", "深度"],
            description: "追求独特，情感丰富，富有创造力和艺术气质。",
            strengths: ["创意丰富", "情感真挚", "审美独特", "自我觉察"],
            weaknesses: ["情绪波动", "自我沉溺", "嫉妒他人", "疏离现实"],
            motivation: "希望找到真正的自我和意义。",
            color: "#9B59B6",
            icon: "🎨"
        },
        {
            id: 5,
            name: "观察者",
            englishName: "The Investigator",
            keywords: ["知识", "观察", "独立", "分析"],
            description: "求知欲强，善于观察，重视隐私和独立。",
            strengths: ["洞察深刻", "客观理性", "专注深入", "创新思维"],
            weaknesses: ["疏离孤立", "吝啬情感", "过度思考", "行动迟缓"],
            motivation: "希望有能力并掌握知识。",
            color: "#3498DB",
            icon: "🔍"
        },
        {
            id: 6,
            name: "忠诚者",
            englishName: "The Loyalist",
            keywords: ["安全", "忠诚", "责任", "准备"],
            description: "重视安全，忠诚可靠，善于预见风险和问题。",
            strengths: ["忠诚可靠", "负责任", "预见风险", "团队合作"],
            weaknesses: ["焦虑担忧", "怀疑权威", "依赖确认", "过度谨慎"],
            motivation: "希望获得安全和保障。",
            color: "#E91E63",
            icon: "🛡️"
        },
        {
            id: 7,
            name: "享乐主义者",
            englishName: "The Enthusiast",
            keywords: ["快乐", "自由", "冒险", "乐观"],
            description: "乐观开朗，追求快乐，喜欢新鲜和刺激的体验。",
            strengths: ["乐观积极", "创意无限", "适应力强", "感染他人"],
            weaknesses: ["逃避痛苦", "缺乏专注", "冲动行事", "承诺困难"],
            motivation: "希望保持快乐和自由。",
            color: "#FF9800",
            icon: "🌈"
        },
        {
            id: 8,
            name: "挑战者",
            englishName: "The Challenger",
            keywords: ["力量", "控制", "保护", "直接"],
            description: "自信果断，追求力量，具有领导力和保护欲。",
            strengths: ["果断决策", "保护弱者", "诚实直接", "领导力强"],
            weaknesses: ["控制欲强", "容易愤怒", "忽视脆弱", "对抗性强"],
            motivation: "希望掌控自己的命运。",
            color: "#C0392B",
            icon: "👑"
        },
        {
            id: 9,
            name: "和平者",
            englishName: "The Peacemaker",
            keywords: ["和谐", "平静", "包容", "稳定"],
            description: "追求和谐，性格平和，善于包容和调解。",
            strengths: ["包容接纳", "平静稳定", "善于调解", "视角全面"],
            weaknesses: ["回避冲突", "优柔寡断", "自我遗忘", "固执被动"],
            motivation: "希望保持内心的平静与和谐。",
            color: "#27AE60",
            icon: "☮️"
        }
    ],

    questions: [
        { id: 1, text: "我倾向于追求完美，对自己和他人都有很高的标准。", type: 1 },
        { id: 2, text: "我喜欢帮助他人，常常把他人的需求放在自己之前。", type: 2 },
        { id: 3, text: "我非常注重成就和成功，希望被他人认可。", type: 3 },
        { id: 4, text: "我常常感到自己与众不同，追求深刻的情感体验。", type: 4 },
        { id: 5, text: "我喜欢独处，通过学习和观察来理解世界。", type: 5 },
        { id: 6, text: "我经常会考虑最坏的情况，希望提前做好准备。", type: 6 },
        { id: 7, text: "我乐观开朗，喜欢尝试新事物和冒险。", type: 7 },
        { id: 8, text: "我性格直接，喜欢掌控局面，保护自己和他人。", type: 8 },
        { id: 9, text: "我追求和谐，不喜欢冲突，愿意妥协来维持平静。", type: 9 },
        { id: 10, text: "我对细节非常在意，容易发现错误和不完美之处。", type: 1 },
        { id: 11, text: "我渴望被爱和需要，善于察觉他人的情感需求。", type: 2 },
        { id: 12, text: "我善于适应环境，能快速调整自己来达成目标。", type: 3 },
        { id: 13, text: "我情感丰富，有时会因为情绪而影响日常生活。", type: 4 },
        { id: 14, text: "我珍惜自己的隐私和时间，不喜欢被打扰。", type: 5 },
        { id: 15, text: "我对权威有复杂的情感，既依赖又质疑。", type: 6 },
        { id: 16, text: "我讨厌无聊和限制，总是寻找新的刺激和乐趣。", type: 7 },
        { id: 17, text: "我敢说敢做，不怕冲突，会为自己认为对的事抗争。", type: 8 },
        { id: 18, text: "我容易犹豫不决，难以表达自己的真实想法。", type: 9 },
        { id: 19, text: "我有强烈的道德感，认为事情应该按照正确的方式做。", type: 1 },
        { id: 20, text: "付出让我感到满足，但有时会感到被利用。", type: 2 },
        { id: 21, text: "效率对我来说很重要，我会为了目标而努力工作。", type: 3 },
        { id: 22, text: "我渴望找到真正的自我，表达独特的个性。", type: 4 },
        { id: 23, text: "我更喜欢观察而不是参与，喜欢深入思考。", type: 5 },
        { id: 24, text: "我需要安全感，会寻找可以信任的团体或个人。", type: 6 },
        { id: 25, text: "我总是看到事物的积极面，相信明天会更好。", type: 7 },
        { id: 26, text: "我重视独立和自主，不喜欢被控制。", type: 8 },
        { id: 27, text: "我倾向于顺其自然，不喜欢给自己太多压力。", type: 9 },
        { id: 28, text: "我会压抑自己的愤怒，但内心会对错误感到不满。", type: 1 },
        { id: 29, text: "我很难拒绝别人的请求，即使这给我带来负担。", type: 2 },
        { id: 30, text: "我很在意别人怎么看我，会塑造良好的形象。", type: 3 },
        { id: 31, text: "我有时会感到缺失了什么，渴望找到完整的感觉。", type: 4 },
        { id: 32, text: "我喜欢积累知识，成为某个领域的专家。", type: 5 },
        { id: 33, text: "我会反复检查事情，确保一切安全无虞。", type: 6 },
        { id: 34, text: "我兴趣广泛，但可能缺乏深度专注。", type: 7 },
        { id: 35, text: "我相信实力至上，尊重强者，保护弱者。", type: 8 },
        { id: 36, text: "我容易被他人的观点影响，难以坚持自己的立场。", type: 9 }
    ]
};

// Export for module systems (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = enneagramData;
}
