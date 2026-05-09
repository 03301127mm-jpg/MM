export type ProjectCategory = "ui_system" | "tourism" | "game_narrative" | "aigc_visual";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  cover: string;
  assetDir: string;
};

export const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const projectGroups: { category: ProjectCategory; title: string }[] = [
  { category: "ui_system", title: "界面与系统体验" },
  { category: "tourism", title: "文旅体验与活动运营" },
  { category: "game_narrative", title: "文化游戏与交互叙事" },
  { category: "aigc_visual", title: "AIGC 影像与文化视觉" }
];

export const categoryLabels = Object.fromEntries(
  projectGroups.map((group) => [group.category, group.title])
) as Record<ProjectCategory, string>;

export const projects: Project[] = [
  {
    id: "digital_twin",
    title: "数字孪生数智化校园可视化设计",
    category: "ui_system",
    shortDesc: "以高校校园为对象，通过三维场景与数据界面整合饮食、运动、能源与安防等校园管理信息。",
    fullDesc:
      "【项目概况】\n以西安美术学院雁塔校区为对象，引入数字孪生概念进行立体建模，通过数字化运营实现精细化管理。\n\n【核心设计】\n1. 三维地图展示平台：基于3D软件搭建闭环式高校信息展示方案，提供超越2D/2.5D的立体交互体验。\n2. 信息版面优化：巧妙设计数据链接与UI版面，提升信息浏览的便捷性与系统响应性能。\n3. 多维度可视化分析：涵盖学生健康数据、能源管理、设施寿命管理及安防系统联动控制。\n\n【交互创新】\n支持鼠标拖拽、缩放浏览全景，点击任意建筑模型即可弹出实时管理数据，实现智慧化、大健康概念的校园场景。\n\n【所获荣誉】\n国家级奖项-中国好创意(第十八届)暨全国数字艺术设计大赛 全国交叉学科类赛道-金奖",
    tags: ["智慧校园", "数字孪生", "数据可视化", "界面设计"],
    cover: publicAsset("/assets/projects/campus-digital-twin/cover.jpg"),
    assetDir: "campus-digital-twin"
  },
  {
    id: "autonomous",
    title: "全自动驾驶背景下的车间交互界面设计",
    category: "ui_system",
    shortDesc: "围绕智能驾驶高风险路段展开用户研究与界面设计，探索更安全、更亲和的信息提示方式。",
    fullDesc:
      "【设计出发点】\n在自动辅助驾驶向全自动驾驶过渡的时代，解决用户将生命安全交给AI的心理顾虑，以安全为核心构建交互策略。\n\n【研究深度】\n通过深度调研与访谈，分析易发生事故路段的诱因，挖掘用户在车辆自动决策过程中的信任痛点。\n\n【交互策略】\n聚焦车间信息的传递效率，优化路况共享、风险提示及HUD信息层级。通过直观、可靠的界面语言，为智能驾驶提供更具亲和力的信任背书。\n\n【设计产出】\n包含完整的HMI设计规范、紧急场景预警流程以及基于真实用户反馈的迭代方案。",
    tags: ["智能驾驶", "用户访谈", "HUD", "路况共享", "HMI设计"],
    cover: publicAsset("/assets/projects/auto-hud/cover.jpg"),
    assetDir: "auto-hud"
  },
  {
    id: "ningyuan",
    title: "宁远古城 IP 漫游导览与集邮打卡系统",
    category: "tourism",
    shortDesc: "将景点路线、地图视觉与集邮式玩法结合，提升游客的探索感、参与感与纪念价值。",
    fullDesc:
      "【方案概述】\n针对宁远古城，精选12处标志性建筑进行IP化创作，将沉重的历史转化为亲切的卡通视觉语言。\n\n【核心玩法】\n1. 手绘地图整合：将IP图标精确嵌入地图坐标，配套S型最佳打卡路径，引导游客精准闯关。\n2. 闭环体验：围绕12个点位开发专属邮票、贴纸。用户通过“看地图-走路线-集油印”获得深度导览体验。\n\n【商业价值】\n通过IP化叙事激活古城文创潜力，将单纯的观光转化为具有纪念意义的闭环互动，满足深度旅游需求。\n\n【所获荣誉】\n省级奖项-中国好创意(第十八届)暨全国数字艺术设计大赛 省级二等奖",
    tags: ["古城导览", "地图设计", "IP视觉", "集邮玩法"],
    cover: publicAsset("/assets/projects/ningyuan-tour/cover.jpg"),
    assetDir: "ningyuan-tour"
  },
  {
    id: "patterns",
    title: "纹样万花筒 · 中华纹样数字展",
    category: "tourism",
    shortDesc: "围绕中华纹样开展数字展览与线下活动策划，参与动线、工作坊、物料、公众号与活动运营。",
    fullDesc:
      "【项目背景】\n由深圳大学重点实验室主办，于深圳市天河城·金啤坊举办的为期一个月的文化盛宴。\n\n【模块规划】\n活动分为中华纹样数字展览、学术沙龙讲座、音乐节、集市与工作坊（都OK工作坊）四大板块。\n\n【全链路设计】\n作为核心成员参与了从数字万花筒视觉生成、展厅空间动线设计到线下物料制作及公众号运营的全过程。旨在全方位、多角度地展现中华纹样的独特魅力与文化底蕴。",
    tags: ["中华纹样", "数字展览", "空间策划", "活动运营", "文创"],
    cover: publicAsset("/assets/projects/pattern-exhibition/cover.jpg"),
    assetDir: "pattern-exhibition"
  },
  {
    id: "visitor",
    title: "客从何处来游戏概念设计",
    category: "game_narrative",
    shortDesc: "以客家南迁历史为灵感，通过探索、对话、任务与多结局选择，让玩家在迁徙旅程中理解文化记忆。",
    fullDesc:
      "【世界观设定】\n基于客家先民南迁历史，以现代主人公追寻家族记忆为线索。涵盖河洛故地、江淮山林、赣南、闽西及梅州聚居地等五大空间节点。\n\n【设计理论】\n以交互叙事理论为核心，结合MDA（机制、动态、体验）模型构建。将迁徙历史、民俗礼仪转化为像素风的可参与互动体验。\n\n【交互亮点】\n采用线性推进与关键决策相结合。玩家通过与人物对话、完成任务、做出选择，亲身体验客家文化在迁徙中不断生成与沉淀的过程，实现传统文化的数字化转译。",
    tags: ["客家文化", "像素风", "交互叙事", "多结局设定"],
    cover: publicAsset("/assets/projects/hakka-game/cover.jpg"),
    assetDir: "hakka-game"
  },
  {
    id: "stars",
    title: "星星相惜：动态星象图互动媒体设计",
    category: "game_narrative",
    shortDesc: "围绕年轻人对星座与自我探索的兴趣，设计动态星象交互体验，呈现人与内心世界之间的连接。",
    fullDesc:
      "【设计驱动】\n洞察千禧一代及Z世代在社交媒体上对“星座”、“水逆”的广泛传播现象，将其转化为科学普及与情绪探索的载体。\n\n【视觉创新】\n采用具有“电子油墨感”的动态交互视觉。通过触控星轨触发特定的声光反馈，模拟人与星空、人与内心世界的感应。\n\n【交互核心】\n基于动态星象图的科普交互设计。将星座占卜这一流行现象转译为严谨的科普知识与治愈系的情绪体验，探索在科技发达的时代，传统星相学如何作为当代人的心理慰藉。\n\n【所获荣誉】\n省级奖项-中国好创意(第十八届)暨全国数字艺术设计大赛 广东省二等奖",
    tags: ["星座科普", "电子油墨", "动态交互", "情绪体验"],
    cover: publicAsset("/assets/projects/star-empathy/cover.jpg"),
    assetDir: "star-empathy"
  },
  {
    id: "luoyang",
    title: "洛城时空梦",
    category: "aigc_visual",
    shortDesc: "以洛阳城市文化为主题，通过 AI 动画与风格化视觉，呈现古都历史与现代活力之间的融合。",
    fullDesc:
      "【技术方案】\n通过AI风格化生图技术结合Runway的视频生成能力。对洛阳古城墙、天堂名堂等标志性建筑进行超现实风格设计。\n\n【叙事手法】\n通过AI控制实现画风一致的动画转换，展现洛阳不同时空的截面。观众能直观感受到历史与现代的交融，激发对古都文化的兴趣。\n\n【所获荣誉】\n省级奖项-未来设计师大赛 广东省三等奖",
    tags: ["洛阳文旅", "AI影像", "Runway", "城市文化"],
    cover: publicAsset("/assets/projects/luoyang-ai/cover.jpg"),
    assetDir: "luoyang-ai"
  },
  {
    id: "season",
    title: "时节一梦",
    category: "aigc_visual",
    shortDesc: "以小女孩的梦境旅程串联四时节气变化，用动画方式呈现传统节气中的自然与农事记忆。",
    fullDesc:
      "【创作初心】\n旨在唤起大众对那些“不为人知”的小节气的认识。选取极具记忆点的农事活动与自然景象作为核心视觉符号。\n\n【剧作结构】\n采用时空交错的叙事逻辑。通过主角小女孩在美术馆的一场恍然之梦，串联起四时节气的流转。带来一场生动、美妙、沉浸式的国风数字影像之旅。\n\n【所获荣誉】\n省级奖项-中国好创意(第十八届)暨全国数字艺术设计大赛 广东省三等奖",
    tags: ["二十四节气", "国风动画", "时空叙事", "数字艺术"],
    cover: publicAsset("/assets/projects/season-dream/cover.jpg"),
    assetDir: "season-dream"
  }
];

export const keywordGroups = [
  { title: "视觉与影像", words: ["动画", "AIGC", "视觉设计", "视频生成"] },
  { title: "文化与内容", words: ["文旅", "文化转译", "内容策划", "叙事设计"] },
  { title: "交互与体验", words: ["游戏", "交互", "用户研究", "界面设计"] },
  { title: "运营与传播", words: ["活动运营", "品牌", "IP 设计", "数字展览"] }
];

export const values = [
  ["文化内容转译", "把文化主题、地方记忆、传统符号转化为故事、场景、任务、角色与视觉系统。"],
  ["AIGC 创意生产", "熟悉 Midjourney、Runway、可灵、即梦、HeyGen、Gen2 等工具，能完成图像、视频、扩图和动态化提案。"],
  ["视觉风格整合", "根据项目主题建立统一风格，让画面、角色、UI、物料和展示页面形成整体表达。"],
  ["交互体验思维", "关注用户如何进入、理解并记住体验，能设计游戏系统、导览流程、界面结构与互动路径。"],
  ["内容策划与表达", "从主题出发梳理叙事逻辑，提炼项目亮点，并转化为视频、图文、活动或网页呈现。"],
  ["运营与落地意识", "有展览活动、公众号排版、线下物料、用户触达和传播复盘经验，关注作品从设计到使用的过程。"],
  ["跨工具学习能力", "能快速学习和组合不同工具，根据项目目标选择合适的实现方式。"],
  ["连接型协作", "在团队中整合不同人的想法，把零散内容整理成清晰方案，推动项目表达更完整。"]
];

export const lifeCards = [
  ["小猫", "喜欢小猫的松弛感，也喜欢它们对世界保持好奇。", publicAsset("/assets/life/life_cat.jpg")],
  ["大海", "喜欢蓝色的大海，它给我一种漂浮、流动和重新出发的感觉。", publicAsset("/assets/life/life_ocean.jpg")],
  ["城市漫游", "在街道、店铺和展览里观察人如何生活，也收集创作的灵感。", publicAsset("/assets/life/life_city.jpg")],
  ["内容记录", "用拍摄、写作和视觉整理，把日常经验转化成表达。", publicAsset("/assets/life/life_record.jpg")],
  ["摄影", "留意光线、材质和小细节，让平常画面变得可被记住。", publicAsset("/assets/life/life_photo.jpg")],
  ["展览与艺术活动", "在展览、工作坊和城市活动里吸收新的观看方式。", publicAsset("/assets/life/life_exhibit.jpg")]
];
