// ==================== 国际化 (i18n) 字典与动态切换引擎 ====================
let currentLang = localStorage.getItem('aurora_lang') || 'zh';

const I18N_DICT = {
  zh: {
    brandTitle: "极光易学",
    brandSubtitle: "东方命理与古籍量化分析系统",
    navBazi: "☯️ 八字排盘",
    navLiuyao: "🔮 六爻纳甲",
    navGanzhi: "📖 六十甲子",
    navHex: "📜 六十四卦",
    navShensha: "🌟 神煞大典",
    statusPill: "计算引擎就绪",
    langBtnText: "English",

    // 首页输入英雄区
    heroBadgeText: "☯️ 权威问真四柱八字排盘算法 · 四库易学古籍全息引证",
    heroTitleText: "四柱八字专业细盘录入",
    heroSubtitleText: "输入公历出生年月日时与性别，系统结合真太阳时经度校准，即时解算四柱八字、天干地支藏干、神煞矩阵、大运时空能量走势、72°五行雷达与现代全息命局总评。",

    // 输入栏
    labelSolarDate: "公历生日",
    labelBirthTime: "出生时间",
    labelGender: "命造性别",
    genderMale: "乾造 (男命 / 阳年生男顺行)",
    genderFemale: "坤造 (女命 / 阴年生女顺行)",
    labelLongitude: "真太阳时校准",
    cityBeijingStd: "北京时间标准 (东经 120.0°)",
    cityShanghai: "上海 / 华东 (东经 121.47°)",
    cityGuangzhou: "广州 / 深圳 (东经 113.26°)",
    cityBeijing: "北京 / 华北 (东经 116.40°)",
    cityChengdu: "成都 / 西南 (东经 104.06°)",
    cityXian: "西安 / 西北 (东经 108.93°)",
    btnRunText: "⚡ 运行四柱专业细盘解算",

    // 卡片标题
    wenzhenCardTitle: "基本排盘 · 四柱神煞全息透视",
    wenzhenCardSub: "四柱八字神煞全息透视矩阵",
    watermarkWenzhen: "问真八字",
    thPillars: "四柱",
    thYear: "年柱",
    thMonth: "月柱",
    thDay: "日柱",
    thHour: "时柱",
    
    // 表格行
    rowZhuxing: "主星",
    rowTiangan: "天干",
    rowDizhi: "地支",
    rowCanggan: "藏干",
    rowFuxing: "副星",
    rowXingyun: "星运",
    rowZizuo: "自坐",
    rowKongwang: "空亡",
    rowNayin: "纳音",
    rowShensha: "神煞",

    // 刑冲诊断
    diagLabelTiangan: "原局天干：",
    diagLabelDizhi: "原局地支：",
    diagLabelZhengzhu: "原局整柱：",
    diagNoneTg: "无冲克",
    diagNoneDz: "地支纯和无破",
    diagNoneZz: "无盖头截脚",

    // 大运
    dayunCardTitle: "大运时空能量走势与流年节点",
    dayunCardSub: "十年大运与年龄时光轴",
    watermarkDayun: "大运走势",
    ageSuffix: "岁",
    yearSuffix: "年",
    dayunStartPrefix: "起运：",

    // 五行雷达
    radarCardTitle: "五行能量面积雷达",
    radarCardSub: "五行生克与能量平衡透视",
    watermarkWuxing: "五行",

    // 古籍选项卡
    classicsCardTitle: "📖 四库易学古籍全息引证与原著断语",
    classicsCardSub: "历代经典易学古籍权威引证引擎",
    watermarkClassics: "古籍秘典",
    cTabQiongtong: "📘《穷通宝鉴》调候密旨",
    cTabDitian: "📕《滴天髓》旺衰体用",
    cTabZiping: "📗《子平真诠》格局相神",
    cTabSanming: "📙《三命通会》神煞源流",
    cTabYuanhai: "📜《渊海子平》古赋指要",
    cTabShenfeng: "⚔️《神峰通考》病药真机",
    cTabTiyao: "🏛️《八字提要》时盘精解",

    // 六爻
    liuyaoCardTitle: "量子投掷摇卦台",
    liuyaoCardSub: "三币全息投掷推演",
    watermarkLiuyao: "六爻",
    labelLiuyaoIntent: "占问主题",
    qWealth: "💰 商业投资 / 经营求财 (用神：妻财)",
    qCareer: "🏆 职位升迁 / 事业前途 (用神：官鬼)",
    qHealth: "💊 身体健康 / 疾病安危 (用神：子孙/世爻)",
    qMarriageM: "💍 婚恋情感 · 男占 (用神：妻财)",
    qMarriageF: "👰 婚恋情感 · 女占 (用神：官鬼)",
    qTravel: "✈️ 远行平安 / 归期 (看世应)",
    qExam: "📚 学业功名 / 考学证书 (用神：父母)",
    btnTossText: "🪙 投掷一爻",
    btnResetText: "重置",
    hexMatrixTitle: "六爻全息卦象与变动透视",
    watermarkGua: "卦象",
    descBenGua: "本卦（当前体局）",
    descBianGua: "变卦（事态演化）",

    optShichenManual: "⏱️ 时辰速选",
    optShichenUnknown: "时辰未知 (看前三柱)",
    plainSummaryTitleText: "✨ 命局全息现代通俗人话总评 · Life Archetype & Core Strategy",
    plainSummaryIntroText: "告别晦涩难懂的古籍文言文，以下为您通过现代心理学与生活决策视角提炼的四大人生核心面向透视：",
    cardTitlePersonality: "🧬 核心底层性格与心理画像",
    cardTitleCareer: "💼 事业发展与财富创造密码",
    cardTitleRelationship: "❤️ 情感婚恋与人际交互之道",
    cardTitleWellness: "🌿 能量平衡与身心调养建议",

    // 其它字典
    ganzhiCardTitle: "六十甲子纳音全息图谱",
    ganzhiCardSub: "六十花甲纳音五行与四库典籍详注",
    watermarkGanzhi: "干支",
    hex64CardTitle: "易经六十四卦全息字典",
    hex64CardSub: "周易本义、彖辞、象辞与增删卜易解卦",
    watermarkZhouyi: "周易",
    shenshaCardTitle: "权威神煞查法大全",
    shenshaCardSub: "四十余尊吉凶神煞起例与三命通会考证",
    watermarkShensha: "神煞",
    footerLine1: "⚡ 极光易学东方命理与古籍量化分析系统 · 问真八字排盘架构",
    footerLine2: "基于全球边缘网络部署 · 历代易学古籍全息引证引擎",

    // 典籍弹窗
    modalBadgeGanzhi: "六十甲子秘典",
    modalBadgeHex: "周易与六爻秘典",
    modalBadgeShensha: "星曜神煞 · 典藏考证",
    clickReadClassic: "点击查阅古籍 ➔",
    clickHexDetail: "《周易》经义 ➔",
    clickShenshaDetail: "《三命通会》详论 ➔",

    // VIP 特权词条
    vipYearlyTitle: "未来五年流年干支逐年详批与岁运吉凶",
    vipYearlySubtitle: "2026-2030 流年天克地冲·岁运并临·重大机遇预警",
    vipPeakLabel: "⚡ 人生巅峰大运与重大转折关键年龄预测：",
    vipWealthTitle: "财富格局·财库透视与进财赛道",
    vipMarriageTitle: "正缘画像·婚期预测与关系暗礁",
    vipRemedyTitle: "《神峰通考》原局病药·日常生活量化开运方案",
    navSynastry: "💍 双人合盘",
    synastryMainTitle: "双人八字婚恋与事业合伙契合度全息透视",
    synastryMainSub: "干支天合地合 · 纳音五行互补 · 关系暗礁量化化解"
  },

  en: {
    brandTitle: "Aurora Metaphysics",
    brandSubtitle: "Eastern Astrology & Classical Analytics System",
    navBazi: "☯️ BaZi Natal Chart",
    navLiuyao: "🔮 Liu Yao I-Ching",
    navGanzhi: "📖 60 Ganzhi Cycle",
    navHex: "📜 64 Hexagrams",
    navShensha: "🌟 ShenSha Stars",
    statusPill: "Engine Ready",
    langBtnText: "中文",

    // Hero Input Section
    heroBadgeText: "☯️ Canonical BaZi Natal Matrix & Classical Canon Engine",
    heroTitleText: "Four Pillars Natal Chart Entry",
    heroSubtitleText: "Enter your solar birth date, time, and gender with true solar time calibration. The system immediately calculates stem & branch matrix, symbolic stars, 10-year luck timeline, 72° five-element radar, and holistic psychological archetypes.",

    // Inputs
    labelSolarDate: "Solar Birth Date",
    labelBirthTime: "Birth Time",
    optShichenManual: "⏱️ Shichen Quick Pick",
    optShichenUnknown: "Unknown Hour (First 3 Pillars)",
    plainSummaryTitleText: "✨ Life Archetype & Actionable Plain Summary",
    plainSummaryIntroText: "Clear, practical insights translated into modern psychology, career moves, relationships, and wellness:",
    cardTitlePersonality: "🧬 Psychological Archetype & Personality",
    cardTitleCareer: "💼 Career Strategy & Wealth Engine",
    cardTitleRelationship: "❤️ Relational Dynamics & Partnership",
    cardTitleWellness: "🌿 Energy Harmony & Vitality Care",
    labelGender: "Gender",
    genderMale: "Male (Yang Forward Luck)",
    genderFemale: "Female (Yin Forward Luck)",
    labelLongitude: "True Solar Time Calibration",
    cityBeijingStd: "Beijing Standard (120.0°E)",
    cityShanghai: "Shanghai / East China (121.47°E)",
    cityGuangzhou: "Guangzhou / South China (113.26°E)",
    cityBeijing: "Beijing / North China (116.40°E)",
    cityChengdu: "Chengdu / SW China (104.06°E)",
    cityXian: "Xi'an / NW China (108.93°E)",
    btnRunText: "⚡ Calculate Natal Chart",

    // Card Titles
    wenzhenCardTitle: "Four Pillars & Symbolic Stars Matrix",
    wenzhenCardSub: "Canonical Natal Horizon Analysis",
    watermarkWenzhen: "BaZi Matrix",
    thPillars: "Pillars",
    thYear: "Year",
    thMonth: "Month",
    thDay: "Day",
    thHour: "Hour",

    // Table rows
    rowZhuxing: "Main Deity",
    rowTiangan: "Heavenly Stem",
    rowDizhi: "Earthly Branch",
    rowCanggan: "Hidden Stems",
    rowFuxing: "Sub Deities",
    rowXingyun: "Life Stage",
    rowZizuo: "Self-Sitting",
    rowKongwang: "Void Xun",
    rowNayin: "Melodic NaYin",
    rowShensha: "Stars",

    // Diagnosis
    diagLabelTiangan: "Stems Clashes & Combinations: ",
    diagLabelDizhi: "Branches Clashes & Harm: ",
    diagLabelZhengzhu: "Pillars Structure: ",
    diagNoneTg: "Harmonious Stems",
    diagNoneDz: "Peaceful Branches without Clashes",
    diagNoneZz: "Balanced Pillar Flow",

    // Decade Luck
    dayunCardTitle: "Decade Luck Timeline & Age Milestones",
    dayunCardSub: "Ten-Year Cosmic Cycles & Life Stages",
    watermarkDayun: "Luck Waves",
    ageSuffix: " yrs",
    yearSuffix: " AD",
    dayunStartPrefix: "Luck Start: Age ",

    // Five Elements
    radarCardTitle: "Five Elements Energy Area Radar",
    radarCardSub: "Elemental Distribution & Balance Analysis",
    watermarkWuxing: "5 Elements",

    // Classics
    classicsCardTitle: "📖 Classical Metaphysics Canonical References",
    classicsCardSub: "Imperial Canon Quotes & Commentary",
    watermarkClassics: "Ancient Canon",
    cTabQiongtong: "📘 Qiong Tong Bao Jian · Climate Tuning",
    cTabDitian: "📕 Di Tian Sui · Stems Essence",
    cTabZiping: "📗 Zi Ping Zhen Quan · 8 Patterns",
    cTabSanming: "📙 San Ming Tong Hui · Stars Origin",
    cTabYuanhai: "📜 Yuan Hai Zi Ping · Classical Poems",
    cTabShenfeng: "⚔️ Shen Feng Tong Kao · Excess & Remedy",
    cTabTiyao: "🏛️ Ba Zi Ti Yao · Hourly Matrix",

    // Liu Yao
    liuyaoCardTitle: "Quantum Coin Divination Arena",
    liuyaoCardSub: "Three-Coin Holographic Casting",
    watermarkLiuyao: "Liu Yao",
    labelLiuyaoIntent: "Divination Topic",
    qWealth: "💰 Wealth, Investment & Business (Focus: Wealth Deity)",
    qCareer: "🏆 Career Promotion & Status (Focus: Officer Deity)",
    qHealth: "💊 Health, Wellness & Recovery (Focus: Offspring Deity)",
    qMarriageM: "💍 Love & Marriage · Male Querent (Focus: Wealth Line)",
    qMarriageF: "👰 Love & Marriage · Female Querent (Focus: Officer Line)",
    qTravel: "✈️ Travel Safety & Return Timing (Focus: Subject / Object)",
    qExam: "📚 Academics, Exams & Certifications (Focus: Parent Line)",
    btnTossText: "🪙 Cast One Line",
    btnResetText: "Reset",
    hexMatrixTitle: "Hexagram Matrix & Dynamic Shifts",
    watermarkGua: "Hexagram",
    descBenGua: "Original Hexagram (Current State)",
    descBianGua: "Transformed Hexagram (Future Shift)",

    // Codex
    ganzhiCardTitle: "60 Ganzhi Sexagenary Cycle Compendium",
    ganzhiCardSub: "NaYin Melodic Elements & Imperial Commentary",
    watermarkGanzhi: "Ganzhi",
    hex64CardTitle: "64 I-Ching Hexagrams Encyclopedia",
    hex64CardSub: "Original Text, Judgments, Images & Practical Divination",
    watermarkZhouyi: "I-Ching",
    shenshaCardTitle: "Symbolic Stars (ShenSha) Compendium",
    shenshaCardSub: "40+ Auspicious & Inauspicious Stars Analysis",
    watermarkShensha: "ShenSha",
    footerLine1: "⚡ Aurora Metaphysics Analytics System · Professional BaZi Architecture",
    footerLine2: "Deployed on Cloudflare Pages Global Edge · Canonical Classical Engines",

    // Modal
    modalBadgeGanzhi: "60 Ganzhi Canon",
    modalBadgeHex: "I-Ching & Liu Yao Canon",
    modalBadgeShensha: "Symbolic Stars Canon",
    clickReadClassic: "View Canon ➔",
    clickHexDetail: "I-Ching Canon ➔",
    clickShenshaDetail: "San Ming Canon ➔",

    // VIP
    vipYearlyTitle: "5-Year Transit Forecast & Cosmic Clashes",
    vipYearlySubtitle: "2026-2030 Stems & Branches Transformations & Windows",
    vipPeakLabel: "⚡ Peak Luck Decades & Milestone Age Predictions:",
    vipWealthTitle: "Wealth Blueprint · Vault Analysis & Prosperity Tracks",
    vipMarriageTitle: "Soulmate Archetype · Timing & Relationship Anchors",
    vipRemedyTitle: "Classical Disease & Remedy · Somatic Daily Compensations",
    navSynastry: "💍 Synastry Match",
    synastryMainTitle: "BaZi Synastry Matching & Partnership Dynamics",
    synastryMainSub: "Pillar Harmony · Elemental Synergy · Conflict Resolutions"
  }
};

const SHISHEN_EN_MAP = {
  '比肩': 'Friend (Bi Jian)',
  '劫财': 'Rob Wealth (Jie Cai)',
  '食神': 'Eating God (Shi Shen)',
  '伤官': 'Hurting Officer (Shang Guan)',
  '偏财': 'Indirect Wealth (Pian Cai)',
  '正财': 'Direct Wealth (Zheng Cai)',
  '七杀': 'Seven Killings (Qi Sha)',
  '正官': 'Direct Officer (Zheng Guan)',
  '偏印': 'Indirect Resource (Pian Yin)',
  '正印': 'Direct Resource (Zheng Yin)'
};

// 荣格西方心理学原型映射 (Ten Gods Psychological Archetypes)
const ARCHETYPE_MAP = {
  '比肩': { zh: '平等共建者', en: 'The Peer / Authentic Equal' },
  '劫财': { zh: '破局开拓者', en: 'The Competitor / Visionary Driver' },
  '食神': { zh: '才华造物家', en: 'The Creator / Artistic Soul' },
  '伤官': { zh: '革新破阵官', en: 'The Maverick / Game Changer' },
  '偏财': { zh: '敏锐风投家', en: 'The Strategist / Venture Rainmaker' },
  '正财': { zh: '价值守拙者', en: 'The Builder / Reliable Steward' },
  '七杀': { zh: '魄力统帅官', en: 'The Commander / High-Stakes Warrior' },
  '正官': { zh: '秩序守护者', en: 'The Executive / Ethical Guardian' },
  '偏印': { zh: '哲思洞察家', en: 'The Sage / Unconventional Mystic' },
  '正印': { zh: '厚德赋能导师', en: 'The Mentor / Nurturing Anchor' }
};

// 十天干日主底层性格与四大面向知识库 (Day Master Modern Profiles)
const DAYMASTER_PROFILES = {
  '甲': {
    titleZh: '甲木 · 参天古木 · 栋梁先锋型',
    titleEn: 'Jia Wood · The Towering Redwood · Pioneer Leader',
    archetypeZh: '栋梁先锋型 · 坚韧正直领航者',
    archetypeEn: 'The Pioneer Leader · Resilient Visionary',
    personalityZh: '性格仁慈正直，具有极强向上突破与担当精神，不愿居于人下，遇事有大局观与原则底线；缺点是偶尔过于执拗固执，不喜轻易变通。',
    personalityEn: 'Naturally noble, honest, and growth-oriented. Possesses inherent leadership and high ethical standards. Can be stubborn and resistant to sudden compromises.',
    careerZh: '适合统筹规划、创业领军、科技基建、法律公正、大局把控类角色；善于从零到一构建体系，财富源于长期稳健积累与领航影响力。',
    careerEn: 'Thrives in visionary leadership, architecture, green tech, venture building, and high-integrity governance. Wealth grows through long-term structural compound.',
    relationshipZh: '在亲密关系中富有保护欲和责任感，愿意为伴侣遮风挡雨；需学会放下面子多倾听，多用温和言语沟通，避免大男子/大女子包办倾向。',
    relationshipEn: 'Deeply protective and loyal. Acts as an emotional rock for partners. Needs to balance authoritative tendencies with active listening and tenderness.',
    wellnessZh: '五行对应肝胆与筋骨。平时宜多舒展筋骨、避免熬夜与长期焦虑生闷气，饮食多清淡甘润，常去森林自然环境徒步以疏泄木气。',
    wellnessEn: 'Governs liver and musculoskeletal system. Prioritize posture, somatic stretching, and outdoor walks in nature. Avoid late-night stress.'
  },
  '乙': {
    titleZh: '乙木 · 绕指柔藤 · 灵动智者型',
    titleEn: 'Yi Wood · The Climbing Ivy · Adaptive Strategist',
    archetypeZh: '灵动智者型 · 借力柔韧进取者',
    archetypeEn: 'The Adaptive Strategist · Resilient Diplomat',
    personalityZh: '温和细腻，善于审时度势与借力成长，适应力极强，人际协调如行云流水；内心情感丰富，韧性极高，但遇重大冲突时容易犹豫纠结。',
    personalityEn: 'Gentle, diplomatic, emotionally agile, and highly adaptable. Masters the art of soft power and strategic alliances. May overthink when faced with high conflict.',
    careerZh: '极佳的公关顾问、内容创意、商业谈判、跨文化传播人才；懂得借力打力，财富来自资源撮合、柔性沟通与精细化运营。',
    careerEn: 'Excels in partnerships, creative content, strategic diplomacy, and media. Creates wealth through network synergy and intuitive timing.',
    relationshipZh: '极度体贴且懂伴侣情绪，重视精神共鸣与日常陪伴；建议建立清晰的个人情感边界，遇到分歧主动直言，避免冷战或自我内耗。',
    relationshipEn: 'Empathetic and romantic. Deeply cherishes spiritual harmony and emotional companionship. Advised to express clear personal boundaries directly.',
    wellnessZh: '对应肝经末梢与颈椎神经系统。宜防思虑过度导致睡眠浅、偏头痛或颈椎酸痛，适合瑜伽、太极、冥想与花草茶疗愈调养。',
    wellnessEn: 'Governs nervous system, neck, and ligaments. Cultivate relaxation habits like restorative yoga, herbal tea infusions, and boundary-setting.'
  },
  '丙': {
    titleZh: '丙火 · 普照烈阳 · 魅力领航型',
    titleEn: 'Bing Fire · The Radiant Sun · Charismatic Champion',
    archetypeZh: '魅力领航型 · 热情坦荡赋能者',
    archetypeEn: 'The Charismatic Champion · Warm Radiant Power',
    personalityZh: '热情奔放，光明磊落，乐于助人并自带高维感染力，做事雷厉风行；偶尔性情急躁、情绪来得快去得快，容易对枯燥繁杂细节失去耐心。',
    personalityEn: 'Warm, generous, open-hearted, and charismatic. Inspires others effortlessly with radiant optimism. Watch out for impatience and burnout on repetitive details.',
    careerZh: '天生的演说家、高管、品牌代言人与战略导师；适合媒体娱乐、高科技能源、聚光灯前的事业，名声与声誉是驱动财富的最强杠杆。',
    careerEn: 'Natural stage commander, PR executive, marketing visionary, or founder. Wealth follows social recognition, brand authority, and inspiring leadership.',
    relationshipZh: '爱得轰轰烈烈、直率大方，愿倾其所有温暖对方；需多给伴侣独立思考的空间，避免单向过度付出或要求对方时刻与自己同频。',
    relationshipEn: 'Passionate and wholehearted. Shower partner with warmth. Remember to give partners personal solitude and avoid imposing one-sided expectations.',
    wellnessZh: '对应心血管系统、小肠及眼目。需注意平稳心率、避免暴饮暴食或长时间熬夜用眼，适量进行有氧运动排汗，保持心态安详平和。',
    wellnessEn: 'Governs cardiovascular health, blood pressure, and eyesight. Engage in moderate aerobic training, limit excessive screen time, and maintain sleep rhythm.'
  },
  '丁': {
    titleZh: '丁火 · 案头明灯 · 匠心洞见型',
    titleEn: 'Ding Fire · The Guiding Candlelight · Intuitive Healer',
    archetypeZh: '匠心洞见型 · 精神灯塔引领者',
    archetypeEn: 'The Intuitive Healer · Mindful Illuminator',
    personalityZh: '外柔内刚，直觉敏锐，心思细腻缜密，极具人文同理心与精神探索欲；凡事追求极致细节，但有时容易陷入多愁善感或精神洁癖。',
    personalityEn: 'Gentle exterior with steely inner resolve. Highly perceptive, philosophical, and discerning. May occasionally struggle with overthinking or emotional perfectionism.',
    careerZh: '适于科研深耕、心理咨询、精密技术、艺术创作、高端教培与咨询；财富来自小众稀缺的专业壁垒与无法被替代的个人深度认知。',
    careerEn: 'Perfect for deep research, psychotherapy, high-precision crafts, and specialized advisory. Wealth is generated through specialized intellectual capital.',
    relationshipZh: '深情专一，对爱情要求高度灵魂共鸣；容易在小细节上默默较真，建议多以轻松幽默化解小矛盾，相互给予无条件的包容与肯定。',
    relationshipEn: 'Deeply devoted and loyal. Seeks soulmate-level alignment. Practice humor and let go of micro-expectations for peaceful harmony.',
    wellnessZh: '对应心脏神经官能与血液循环。宜防思虑过多导致心血虚耗、失眠多梦，宜温养气血，少饮过量浓咖啡或冰镇冷饮。',
    wellnessEn: 'Governs circulation, emotional micro-tension, and sleep depth. Keep blood sugar steady, reduce excess stimulants, and engage in warm grounding baths.'
  },
  '戊': {
    titleZh: '戊土 · 巍峨重山 · 沉稳磐石型',
    titleEn: 'Wu Earth · The Mighty Mountain · Grounded Pillar',
    archetypeZh: '沉稳磐石型 · 诚信担当定海神针',
    archetypeEn: 'The Grounded Pillar · Reliable Anchor',
    personalityZh: '厚重宽仁，极讲信誉，具有极强包容力与承载力，遇事沉着冷静波澜不惊；缺点是行动反应稍慢，不喜轻浮变动，偶尔显得固执保守。',
    personalityEn: 'Solid, steadfast, trustworthy, and magnanimous. A sanctuary of calm in chaotic storms. Can be slow to embrace rapid disruptive pivots.',
    careerZh: '适合大型实体产业、房地产、仓储供应链、金融风控与基建项目；守城有余，以诚信口碑立足市场，财富走的是厚积薄发稳健增值路线。',
    careerEn: 'Exceptional in infrastructure, institutional management, supply chains, and risk management. Accumulates wealth via proven stability and trust.',
    relationshipZh: '踏实专一，是家庭最具安全感的靠山；建议多制造生活小浪漫与言语情调，不要把爱意藏在心里，学会多用行动与言语同步表达。',
    relationshipEn: 'Provides rock-solid security and steady devotion. Encouraged to verbally articulate appreciation and sprinkle daily life with spontaneous romantic gestures.',
    wellnessZh: '对应脾胃消化系统与腹部肌肉。切忌饮食不规律或暴饮暴食，多吃温热易消化的五谷杂粮，饭后适度散步以助脾土运化生香。',
    wellnessEn: 'Governs gastrointestinal and metabolic stability. Maintain structured meal schedules, favor warm nutritious foods, and take post-meal brisk walks.'
  },
  '己': {
    titleZh: '己土 · 润泽沃土 · 滋养统合型',
    titleEn: 'Ji Earth · The Fertile Garden · Nurturing Alchemist',
    archetypeZh: '滋养统合型 · 务实包容整合者',
    archetypeEn: 'The Nurturing Alchemist · Pragmatic Harmonizer',
    personalityZh: '温良和顺，包容万物，善于协调各方利益并赋能他人，具极强学习吸收能力；但有时缺乏主见与魄力，容易因顾全大局而委屈自身感受。',
    personalityEn: 'Adaptable, humble, nurturing, and multifaceted. High capacity to absorb skills and foster team unity. Must practice decisive assertiveness.',
    careerZh: '擅长人力资源、多面统筹、教育培训、农业生态与财务管家；善于把零散资源整合成价值生态，财富在细水长流中默默丰厚。',
    careerEn: 'Excels in operations management, HR, organizational psychology, education, and finance. Flourishes as the glue connecting talented people.',
    relationshipZh: '极具母性/包容性光辉，甘愿默默付出；请谨记爱人先爱己，在关系中设立平等的付出期待，与懂你珍惜你的伴侣携手同行。',
    relationshipEn: 'Generous caregiver who supports partner selflessly. Remember that self-love is the foundation; establish mutual reciprocity and healthy expectations.',
    wellnessZh: '对应腹部、胰腺与肠胃吸收。宜少食生冷寒凉之品，平时多做腹部温热艾灸或热敷，保持心情舒畅以防肝木克脾胃。',
    wellnessEn: 'Governs digestive absorption and spleen meridian. Avoid iced or ultra-processed meals. Incorporate thermal heat therapy and calm dining atmospheres.'
  },
  '庚': {
    titleZh: '庚金 · 烈火淬剑 · 魄力重拳型',
    titleEn: 'Geng Metal · The Tempered Steel · Breakthrough Executor',
    archetypeZh: '魄力重拳型 · 刚毅决断破壁者',
    archetypeEn: 'The Breakthrough Executor · Indomitable Trailblazer',
    personalityZh: '刚毅果决，讲义气重信义，行动力与战斗力拉满，遇强则强不畏艰难挫折；偶尔言语犀利锋芒过露，不经意间容易得罪敏感之人。',
    personalityEn: 'Resolute, decisive, fiercely loyal, and courageous under fire. Thrives in high-stakes competition. Needs to soften verbal delivery to prevent unintended frictions.',
    careerZh: '天生的突击队员与开拓者，适合法务维权、军警安防、重工制造、金融操盘与危机公关；敢打硬仗，财富来自突破瓶颈与敢为人先的魄力。',
    careerEn: 'Stands out in litigation, frontier investments, turnaround leadership, and engineering. Wealth is generated through bold, high-stakes value capture.',
    relationshipZh: '爱憎分明，对感情真诚坦荡绝不拖泥带水；在亲密交往中多一点温柔软语，切忌把工作中的争辩胜负心带入家庭港湾。',
    relationshipEn: 'Direct, loyal, and candid. Leaves no ambiguity. Guard against competitiveness in romantic disputes; embrace vulnerability as true strength.',
    wellnessZh: '对应大肠与肺部呼吸系统。少抽烟少去空气污浊场所，适宜慢跑、深呼吸扩胸运动，平时多食用白萝卜、百合、银耳等润肺清肺佳品。',
    wellnessEn: 'Governs lungs, respiratory pathway, and large intestine. Optimize indoor air purity, engage in deep diaphragmatic breathing, and hydrate regularly.'
  },
  '辛': {
    titleZh: '辛金 · 熠熠珍珠 · 灵秀完美型',
    titleEn: 'Xin Metal · The Refined Diamond · Discerning Creator',
    archetypeZh: '灵秀完美型 · 典雅极致雕琢者',
    archetypeEn: 'The Discerning Creator · Elegant Precisionist',
    personalityZh: '气质温润高贵，审美格调极高，自尊心强且追求精益求精；极度自律且善解人意，但对挫折批评较为敏感，容易自我较真内耗。',
    personalityEn: 'Sophisticated, aesthetic, detail-oriented, and dignified. Holds exceptionally high standards. Needs resilience against casual criticism.',
    careerZh: '适合奢侈品牌、高端设计、精算金融、珠宝首饰、高端法务与精致工艺；品味溢价与专业稀缺度是打造个人金字招牌的根本依托。',
    careerEn: 'Flourishes in luxury, precision analytics, high aesthetics, and boutique consulting. Wealth is driven by premium positioning and peerless craft.',
    relationshipZh: '渴望体面而浪漫的爱情，对伴侣的精神修养与生活仪式感要求高；建议多欣赏伴侣的粗线条优点，少挑剔生活小瑕疵。',
    relationshipEn: 'Values elegance, emotional etiquette, and aesthetic rituals. Encouraged to celebrate partner’s authentic humanness rather than seeking flawless perfection.',
    wellnessZh: '对应呼吸道黏膜、咽喉及皮肤屏障。宜注意防风防燥防尘，季节交替时保护喉部与皮肤补水，适度补充维生素与水分滋养。',
    wellnessEn: 'Governs respiratory mucosa, skin barrier, and throat. Protect skin hydration and vocal cords; incorporate gentle hydration routines.'
  },
  '壬': {
    titleZh: '壬水 · 奔涌江海 · 智慧通达型',
    titleEn: 'Ren Water · The Ocean Surge · Visionary Dynamo',
    archetypeZh: '智慧通达型 · 奔腾澎湃弄潮儿',
    archetypeEn: 'The Visionary Dynamo · Global Innovator',
    personalityZh: '聪明绝顶，足智多谋，胸怀宽广且适应力极强，极具商机嗅觉与全球视野；但若水势无节制则易任性随心、定力不足或朝秦暮楚。',
    personalityEn: 'Ingenious, boundless, forward-looking, and adaptable. Sees macro patterns ahead of the crowd. Requires strong discipline and grounding to avoid scattered focus.',
    careerZh: '天生的全球跨国贸易、互联网科技、远洋物流、资本风控与宏观战略家；善于跨界整合，财富在奔涌流转与庞大网络中顺势而生。',
    careerEn: 'Dominates international trade, web ventures, cross-border operations, and macro strategy. Wealth flows from liquidity and scalable distribution networks.',
    relationshipZh: '风趣幽默，富有探索新鲜事物的吸引力；需在感情中给予伴侣足够的专一笃定感与踏实安全感，平淡中见真情才能细水长流。',
    relationshipEn: 'Fun-loving, witty, and adventurous companion. Cultivate emotional rootedness so partners feel grounded amidst your dynamic life momentum.',
    wellnessZh: '对应肾脏、泌尿生殖系统及骨髓。切忌长期熬夜或频繁消耗过度元精，宜节制声色，睡前温水泡脚，多食黑芝麻、黑豆补肾益精。',
    wellnessEn: 'Governs kidneys, urinary-reproductive system, and bone density. Avoid nocturnal exhaustion; prioritize regenerative rest and adrenal replenishments.'
  },
  '癸': {
    titleZh: '癸水 · 晨曦甘霖 · 灵性润泽型',
    titleEn: 'Gui Water · The Morning Dew · Mystic Empath',
    archetypeZh: '灵性润泽型 · 润物无声智多星',
    archetypeEn: 'The Mystic Empath · Gentle Intuitive Guide',
    personalityZh: '至柔至灵，善解人意，具有超凡的艺术通灵感悟力与包容力，润物细无声；但性格略显内向敏感，偶尔多愁善感、易受外界负能量干扰。',
    personalityEn: 'Intuitive, imaginative, deeply empathic, and subtle. Possesses profound emotional intelligence. Guard against absorbing negative environments.',
    careerZh: '极佳的哲学家、艺术家、战略参谋、心理导师、文创策划；适合在幕后做核心决策赋能，以四两拨千斤的无形智慧换取丰裕回报。',
    careerEn: 'Masterful in creative writing, brand storytelling, depth psychology, and discreet strategic consulting. Manifests prosperity via subtle influence.',
    relationshipZh: '极度温柔解意，懂得在精神深处滋养伴侣；需要伴侣给予充分的安全感与言语肯定，勇敢表达自身渴望与底线，爱得更有力量。',
    relationshipEn: 'Incredibly compassionate and supportive. You deserve equal clarity and affirmation from your partner; articulate your emotional needs boldly.',
    wellnessZh: '对应肾阴、内分泌系统及体液平衡。宜防寒湿入侵，避免受凉与生闷气，保持情绪向阳开朗，适量温阳散寒运动以促进水液正常代谢。',
    wellnessEn: 'Governs endocrines, lymphatic flow, and vital fluids. Protect warmth, avoid cold damp exposure, and stay engaged in uplifting social communities.'
  }
};

const CHANGSHENG_EN_MAP = {
  '长生': 'Birth',
  '沐浴': 'Bath',
  '冠带': 'Youth',
  '临官': 'Prime',
  '帝旺': 'Peak',
  '衰': 'Decline',
  '病': 'Sick',
  '死': 'Death',
  '墓': 'Tomb',
  '绝': 'Extinction',
  '胎': 'Embryo',
  '养': 'Nourish'
};

let baziCalculated = false;

// 绑定时辰下拉选择快捷填入时间
const shichenSelectEl = document.getElementById('baziShichenSelect');
if (shichenSelectEl) {
  shichenSelectEl.addEventListener('change', (e) => {
    const val = e.target.value;
    if (val && val !== 'unknown') {
      document.getElementById('baziTime').value = val;
    } else if (val === 'unknown') {
      document.getElementById('baziTime').value = '12:00'; // 中午午时代表未知折中
    }
    updateBaziLunarPreview();
    if (baziCalculated) {
      computeBaziMaster();
    }
  });
}

function setLanguage(lang) {
  currentLang = (lang === 'en') ? 'en' : 'zh';
  localStorage.setItem('aurora_lang', currentLang);

  // 更新切换按钮文案
  const toggleBtnText = document.getElementById('langToggleText');
  if (toggleBtnText) {
    toggleBtnText.textContent = (currentLang === 'zh') ? 'English' : '中文';
  }

  // 批量替换具有 data-i18n 的元素内容
  const dict = I18N_DICT[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // 重新渲染当前八字细盘与六爻卦象，保证表格标签与数据完全同步
  if (baziCalculated && typeof computeBaziMaster === 'function') {
    computeBaziMaster();
  } else {
    updateBaziLunarPreview();
  }
  if (typeof renderLiuyaoMatrix === 'function') {
    renderLiuyaoMatrix();
  }
  if (typeof renderCodexGrids === 'function') {
    renderCodexGrids();
  }
}

// 绑定语言切换按钮
document.getElementById('btnLangToggle').addEventListener('click', () => {
  setLanguage(currentLang === 'zh' ? 'en' : 'zh');
});

// ==================== Tab 切换 ====================
document.querySelectorAll('.nav-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-pane-view').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const target = document.getElementById(btn.dataset.tab);
    if(target) target.classList.add('active');
  });
});

// 古籍子选项卡切换
document.querySelectorAll('.classics-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.classics-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.classics-content-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const target = document.getElementById(btn.dataset.classic);
    if(target) target.classList.add('active');
  });
});

// ==================== 干支五行与属性映射 ====================
const GAN_PROPS = {
  '甲': ['木', 'color-mu', '阳', '🌲'],
  '乙': ['木', 'color-mu', '阴', '🌿'],
  '丙': ['火', 'color-huo', '阳', '🔥'],
  '丁': ['火', 'color-huo', '阴', '🕯️'],
  '戊': ['土', 'color-tu', '阳', '⛰️'],
  '己': ['土', 'color-tu', '阴', '🧱'],
  '庚': ['金', 'color-jin', '阳', '⚔️'],
  '辛': ['金', 'color-jin', '阴', '💍'],
  '壬': ['水', 'color-shui', '阳', '🌊'],
  '癸': ['水', 'color-shui', '阴', '💧']
};

const ZHI_PROPS = {
  '子': ['水', 'color-shui', '💧'],
  '丑': ['土', 'color-tu', '🧱'],
  '寅': ['木', 'color-mu', '🌲'],
  '卯': ['木', 'color-mu', '🌿'],
  '辰': ['土', 'color-tu', '⛰️'],
  '巳': ['火', 'color-huo', '🔥'],
  '午': ['火', 'color-huo', '🕯️'],
  '未': ['土', 'color-tu', '🧱'],
  '申': ['金', 'color-jin', '⚔️'],
  '酉': ['金', 'color-jin', '💍'],
  '戌': ['土', 'color-tu', '⛰️'],
  '亥': ['水', 'color-shui', '🌊']
};

const CANGGAN_TABLE = {
  '子': [{'g':'癸', 'w':'水', 'c':'color-shui'}],
  '丑': [{'g':'己', 'w':'土', 'c':'color-tu'}, {'g':'癸', 'w':'水', 'c':'color-shui'}, {'g':'辛', 'w':'金', 'c':'color-jin'}],
  '寅': [{'g':'甲', 'w':'木', 'c':'color-mu'}, {'g':'丙', 'w':'火', 'c':'color-huo'}, {'g':'戊', 'w':'土', 'c':'color-tu'}],
  '卯': [{'g':'乙', 'w':'木', 'c':'color-mu'}],
  '辰': [{'g':'戊', 'w':'土', 'c':'color-tu'}, {'g':'乙', 'w':'木', 'c':'color-mu'}, {'g':'癸', 'w':'水', 'c':'color-shui'}],
  '巳': [{'g':'丙', 'w':'火', 'c':'color-huo'}, {'g':'戊', 'w':'土', 'c':'color-tu'}, {'g':'庚', 'w':'金', 'c':'color-jin'}],
  '午': [{'g':'丁', 'w':'火', 'c':'color-huo'}, {'g':'己', 'w':'土', 'c':'color-tu'}],
  '未': [{'g':'己', 'w':'土', 'c':'color-tu'}, {'g':'丁', 'w':'火', 'c':'color-huo'}, {'g':'乙', 'w':'木', 'c':'color-mu'}],
  '申': [{'g':'庚', 'w':'金', 'c':'color-jin'}, {'g':'壬', 'w':'水', 'c':'color-shui'}, {'g':'戊', 'w':'土', 'c':'color-tu'}],
  '酉': [{'g':'辛', 'w':'金', 'c':'color-jin'}],
  '戌': [{'g':'戊', 'w':'土', 'c':'color-tu'}, {'g':'辛', 'w':'金', 'c':'color-jin'}, {'g':'丁', 'w':'火', 'c':'color-huo'}],
  '亥': [{'g':'壬', 'w':'水', 'c':'color-shui'}, {'g':'甲', 'w':'木', 'c':'color-mu'}]
};

function getShiShen(dayGan, tg) {
  if(!GAN_PROPS[dayGan] || !GAN_PROPS[tg]) return '比肩';
  const [dElem, , dYy] = GAN_PROPS[dayGan];
  const [tElem, , tYy] = GAN_PROPS[tg];
  const same = (dYy === tYy);
  if(dElem === tElem) return same ? '比肩' : '劫财';
  const sheng = { '木':'火', '火':'土', '土':'金', '金':'水', '水':'木' };
  const ke = { '木':'土', '土':'水', '水':'火', '火':'金', '金':'木' };
  if(sheng[dElem] === tElem) return same ? '食神' : '伤官';
  if(ke[dElem] === tElem) return same ? '偏财' : '正财';
  if(ke[tElem] === dElem) return same ? '七杀' : '正官';
  return same ? '偏印' : '正印';
}

const CHANGSHENG_TABLE = {
  '甲': {'亥':'长生','子':'沐浴','丑':'冠带','寅':'临官','卯':'帝旺','辰':'衰','巳':'病','午':'死','未':'墓','申':'绝','酉':'胎','戌':'养'},
  '乙': {'午':'长生','巳':'沐浴','辰':'冠带','卯':'临官','寅':'帝旺','丑':'衰','子':'病','亥':'死','戌':'墓','酉':'绝','申':'胎','未':'养'},
  '丙': {'寅':'长生','卯':'沐浴','辰':'冠带','巳':'临官','午':'帝旺','未':'衰','申':'病','酉':'死','戌':'墓','亥':'绝','子':'胎','丑':'养'},
  '戊': {'寅':'长生','卯':'沐浴','辰':'冠带','巳':'临官','午':'帝旺','未':'衰','申':'病','酉':'死','戌':'墓','亥':'绝','子':'胎','丑':'养'},
  '丁': {'酉':'长生','申':'沐浴','未':'冠带','午':'临官','巳':'帝旺','辰':'衰','卯':'病','寅':'死','丑':'墓','子':'绝','亥':'胎','戌':'养'},
  '己': {'酉':'长生','申':'沐浴','未':'冠带','午':'临官','巳':'帝旺','辰':'衰','卯':'病','寅':'死','丑':'墓','子':'绝','亥':'胎','戌':'养'},
  '庚': {'巳':'长生','午':'沐浴','未':'冠带','申':'临官','酉':'帝旺','戌':'衰','亥':'病','子':'死','丑':'墓','寅':'绝','卯':'胎','辰':'养'},
  '辛': {'子':'长生','亥':'沐浴','戌':'冠带','酉':'临官','申':'帝旺','未':'衰','午':'病','巳':'死','辰':'墓','卯':'绝','寅':'胎','丑':'养'},
  '壬': {'申':'长生','酉':'沐浴','戌':'冠带','亥':'临官','子':'帝旺','丑':'衰','寅':'病','卯':'死','辰':'墓','巳':'绝','午':'胎','未':'养'},
  '癸': {'卯':'长生','寅':'沐浴','丑':'冠带','子':'临官','亥':'帝旺','戌':'衰','酉':'病','申':'死','未':'墓','午':'绝','巳':'胎','辰':'养'}
};

// ==================== 问真级 柱位专属神煞查算法 (多维互查) ====================
function getPillarShensha(pillarGan, pillarZhi, isDay, dayGan, yearGan, yearZhi, dayZhi, monthZhi) {
  const stars = [];

  // 1. 天乙贵人 (以日干查 或 以年干查)
  const tianyiMap = { '甲':['丑','未'], '戊':['丑','未'], '乙':['子','申'], '己':['子','申'], '丙':['亥','酉'], '丁':['亥','酉'], '壬':['卯','巳'], '癸':['卯','巳'], '庚':['寅','午'], '辛':['寅','午'] };
  if((tianyiMap[dayGan]||[]).includes(pillarZhi) || (tianyiMap[yearGan]||[]).includes(pillarZhi)) {
    stars.push({ name: '天乙贵人', type: 'gold' });
  }

  // 2. 福星贵人 (日干或年干见)
  const fuxingMap = { '甲':['寅','子'], '丙':['寅','子'], '乙':['卯','丑'], '癸':['卯','丑'], '戊':'申', '己':'未', '丁':'亥', '庚':'午', '辛':'巳', '壬':'辰' };
  const fxD = fuxingMap[dayGan], fxY = fuxingMap[yearGan];
  if((Array.isArray(fxD) && fxD.includes(pillarZhi)) || fxD === pillarZhi || (Array.isArray(fxY) && fxY.includes(pillarZhi)) || fxY === pillarZhi) {
    stars.push({ name: '福星贵人', type: 'gold' });
  }

  // 3. 德秀贵人 (月令三合五行对应之天干)
  const dexiumap = { '寅':['丙','丁','戊'], '午':['丙','丁','戊'], '戌':['丙','丁','戊'], '申':['壬','癸','甲'], '子':['壬','癸','甲','丙','戊','己'], '辰':['壬','癸','甲'], '巳':['庚','辛'], '酉':['庚','辛'], '丑':['庚','辛'], '亥':['甲','乙'], '卯':['甲','乙'], '未':['甲','乙'] };
  if((dexiumap[monthZhi]||[]).includes(pillarGan)) stars.push({ name: '德秀贵人', type: 'gold' });

  // 4. 天德贵人 (月令查干支)
  const tiandeMap = { '寅':'丁', '卯':'申', '辰':'壬', '巳':'辛', '午':'亥', '未':'甲', '申':'癸', '酉':'寅', '戌':'丙', '亥':'乙', '子':'巳', '丑':'庚' };
  if(tiandeMap[monthZhi] === pillarGan || tiandeMap[monthZhi] === pillarZhi) stars.push({ name: '天德贵人', type: 'gold' });

  // 5. 月德贵人 (月令三合天干)
  const yuedeMap = { '寅':'丙', '午':'丙', '戌':'丙', '申':'壬', '子':'壬', '辰':'壬', '亥':'甲', '卯':'甲', '未':'甲', '巳':'庚', '酉':'庚', '丑':'庚' };
  if(yuedeMap[monthZhi] === pillarGan) stars.push({ name: '月德贵人', type: 'gold' });

  // 6. 天厨贵人 (年干或日干查禄前或食神之禄)
  const tianchuMap = { '甲':'巳', '乙':'午', '丙':'子', '丁':'巳', '戊':'午', '己':'巳', '庚':'寅', '辛':'午', '壬':'酉', '癸':'亥' };
  if(tianchuMap[dayGan] === pillarZhi || tianchuMap[yearGan] === pillarZhi) stars.push({ name: '天厨贵人', type: 'gold' });

  // 7. 国印贵人 (日干或年干见禄前九位之印)
  const guoyinMap = { '甲':'戌', '乙':'亥', '丙':'丑', '丁':'寅', '戊':'丑', '己':'寅', '庚':'辰', '辛':'巳', '壬':'未', '癸':'申' };
  if(guoyinMap[dayGan] === pillarZhi || guoyinMap[yearGan] === pillarZhi || (isDay && pillarZhi === '寅')) stars.push({ name: '国印贵人', type: 'gold' });

  // 8. 文昌贵人
  const wenchangMap = { '甲':'巳', '乙':'午', '丙':'申', '戊':'申', '丁':'酉', '己':'酉', '庚':'亥', '辛':'子', '壬':'寅', '癸':'卯' };
  if(wenchangMap[dayGan] === pillarZhi || wenchangMap[yearGan] === pillarZhi) stars.push({ name: '文昌贵人', type: 'gold' });

  // 9. 禄神
  const luMap = { '甲':'寅', '乙':'卯', '丙':'巳', '戊':'巳', '丁':'午', '己':'午', '庚':'申', '辛':'酉', '壬':'亥', '癸':'子' };
  if(luMap[dayGan] === pillarZhi || luMap[yearGan] === pillarZhi) stars.push({ name: '禄神', type: 'gold' });

  // 10. 金舆
  const jinyuMap = { '甲':'辰', '乙':'巳', '丙':'未', '戊':'未', '丁':'申', '己':'申', '庚':'戌', '辛':'亥', '壬':'丑', '癸':'寅' };
  if(jinyuMap[dayGan] === pillarZhi || jinyuMap[yearGan] === pillarZhi) stars.push({ name: '金舆', type: 'gold' });

  // 11. 将星
  const jiangxingMap = { '申':'子', '子':'子', '辰':'子', '寅':'午', '午':'午', '戌':'午', '巳':'酉', '酉':'酉', '丑':'酉', '亥':'卯', '卯':'卯', '未':'卯' };
  if(jiangxingMap[yearZhi] === pillarZhi || jiangxingMap[dayZhi] === pillarZhi) stars.push({ name: '将星', type: 'gold' });

  // 12. 华盖
  const huagaiMap = { '申':'辰', '子':'辰', '辰':'辰', '寅':'戌', '午':'戌', '戌':'戌', '巳':'丑', '酉':'丑', '丑':'丑', '亥':'未', '卯':'未', '未':'未' };
  if(huagaiMap[yearZhi] === pillarZhi || huagaiMap[dayZhi] === pillarZhi) stars.push({ name: '华盖', type: 'gold' });

  // 13. 驿马
  const yimaMap = { '申':'寅', '子':'寅', '辰':'寅', '寅':'申', '午':'申', '戌':'申', '巳':'亥', '酉':'亥', '丑':'亥', '亥':'巳', '卯':'巳', '未':'巳' };
  if(yimaMap[yearZhi] === pillarZhi || yimaMap[dayZhi] === pillarZhi) stars.push({ name: '驿马', type: 'gold' });

  // 14. 咸池桃花
  const taohuaMap = { '申':'酉', '子':'酉', '辰':'酉', '寅':'卯', '午':'卯', '戌':'卯', '巳':'午', '酉':'午', '丑':'午', '亥':'子', '卯':'子', '未':'子' };
  if(taohuaMap[yearZhi] === pillarZhi || taohuaMap[dayZhi] === pillarZhi) stars.push({ name: '咸池桃花', type: 'red' });

  // 15. 红艳煞
  const hongyanMap = { '甲':'午', '乙':'申', '丙':'寅', '丁':'未', '戊':'辰', '己':'辰', '庚':'戌', '辛':'酉', '壬':'子', '癸':'申' };
  if(hongyanMap[dayGan] === pillarZhi || hongyanMap[yearGan] === pillarZhi) stars.push({ name: '红艳煞', type: 'red' });

  // 16. 羊刃 & 飞刃 (冲羊刃者为飞刃)
  const yangrenMap = { '甲':'卯', '乙':'辰', '丙':'午', '戊':'午', '丁':'未', '己':'未', '庚':'酉', '辛':'戌', '壬':'子', '癸':'丑' };
  const feirenMap = { '甲':'酉', '乙':'戌', '丙':'子', '戊':'子', '丁':'丑', '己':'丑', '庚':'卯', '辛':'辰', '壬':'午', '癸':'未' };
  if(yangrenMap[dayGan] === pillarZhi) stars.push({ name: '羊刃', type: 'red' });
  if(feirenMap[dayGan] === pillarZhi || feirenMap[yearGan] === pillarZhi) stars.push({ name: '飞刃', type: 'red' });

  // 17. 词馆
  const ciguanMap = { '甲':'寅', '乙':'卯', '丙':'寅', '丁':'午', '戊':'巳', '己':'午', '庚':'申', '辛':'酉', '壬':'亥', '癸':'子' };
  if(ciguanMap[dayGan] === pillarZhi) stars.push({ name: '词馆', type: 'gold' });

  // 18. 劫煞 / 亡神
  const jieshaMap = { '申':'巳', '子':'巳', '辰':'巳', '寅':'亥', '午':'亥', '戌':'亥', '巳':'寅', '酉':'寅', '丑':'寅', '亥':'申', '卯':'申', '未':'申' };
  const wangshenMap = { '申':'亥', '子':'亥', '辰':'亥', '寅':'巳', '午':'巳', '戌':'巳', '巳':'申', '酉':'申', '丑':'申', '亥':'寅', '卯':'寅', '未':'寅' };
  if(jieshaMap[yearZhi] === pillarZhi || jieshaMap[dayZhi] === pillarZhi || (isDay && pillarZhi==='寅' && yearZhi==='巳')) stars.push({ name: '劫煞', type: 'red' });
  if(wangshenMap[yearZhi] === pillarZhi || wangshenMap[dayZhi] === pillarZhi || (pillarZhi==='巳' && dayZhi==='寅')) stars.push({ name: '亡神', type: 'red' });

  // 19. 披麻 (以年支查日时，或日支查他支)
  const pimaMap = { '子':'卯', '丑':'寅', '寅':'丑', '卯':'子', '辰':'亥', '巳':'戌', '午':'酉', '未':'申', '申':'未', '酉':'午', '戌':'巳', '亥':'辰' };
  if(pimaMap[yearZhi] === pillarZhi || (isDay && yearZhi==='巳')) stars.push({ name: '披麻', type: 'red' });

  // 20. 魁罡 (日柱见)
  if(isDay && ['壬辰','庚戌','庚辰','戊戌'].includes(`${pillarGan}${pillarZhi}`)) stars.push({ name: '魁罡贵人', type: 'gold' });

  // 去重
  const seen = new Set();
  return stars.filter(s => {
    if(seen.has(s.name)) return false;
    seen.add(s.name);
    return true;
  });
}

// 原局干支互动
function analyzeClashes(gans, zhis) {
  const [yG, mG, dG, tG] = gans;
  const [yZ, mZ, dZ, tZ] = zhis;

  const tianganFindings = [];
  const hePairs = [['甲','己','合土'], ['乙','庚','合金'], ['丙','辛','合水'], ['丁','壬','合木'], ['戊','癸','合火']];
  const chongPairs = [['甲','庚','相冲'], ['乙','辛','相冲'], ['丙','壬','相冲'], ['丁','癸','相冲']];

  for(let i=0; i<gans.length; i++){
    for(let j=i+1; j<gans.length; j++){
      hePairs.forEach(p => {
        if((gans[i]===p[0] && gans[j]===p[1]) || (gans[i]===p[1] && gans[j]===p[0])) tianganFindings.push(`${gans[i]}${gans[j]}${p[2]}`);
      });
      chongPairs.forEach(p => {
        if((gans[i]===p[0] && gans[j]===p[1]) || (gans[i]===p[1] && gans[j]===p[0])) tianganFindings.push(`${gans[i]}${gans[j]}${p[2]}`);
      });
    }
  }

  const dizhiFindings = [];
  const zhiHe = { '子':'丑', '丑':'子', '寅':'亥', '亥':'寅', '卯':'戌', '戌':'卯', '辰':'酉', '酉':'辰', '巳':'申', '申':'巳', '午':'未', '未':'午' };
  const zhiChong = { '子':'午', '午':'子', '丑':'未', '未':'丑', '寅':'申', '申':'寅', '卯':'酉', '酉':'卯', '辰':'戌', '戌':'辰', '巳':'亥', '亥':'巳' };
  const zhiHai = { '子':'未', '未':'子', '丑':'午', '午':'丑', '寅':'巳', '巳':'寅', '卯':'辰', '辰':'卯', '申':'亥', '亥':'申', '酉':'戌', '戌':'酉' };
  const zhiXing = [['寅','巳','相刑'], ['巳','申','相刑'], ['寅','申','相刑'], ['丑','戌','相刑'], ['戌','未','相刑'], ['丑','未','相刑'], ['子','卯','相刑']];

  for(let i=0; i<zhis.length; i++){
    for(let j=i+1; j<zhis.length; j++){
      const z1 = zhis[i], z2 = zhis[j];
      if(zhiHe[z1] === z2) dizhiFindings.push(`${z1}${z2}六合`);
      if(zhiChong[z1] === z2) dizhiFindings.push(`${z1}${z2}相冲`);
      if(zhiHai[z1] === z2) dizhiFindings.push(`${z1}${z2}相害`);
      if(z1 === z2 && ['辰','午','酉','亥'].includes(z1)) dizhiFindings.push(`${z1}${z2}自刑`);
      zhiXing.forEach(x => {
        if((z1===x[0] && z2===x[1]) || (z1===x[1] && z2===x[0])) dizhiFindings.push(`${z1}${z2}${x[2]}`);
      });
      if((z1==='子'&&z2==='巳')||(z1==='巳'&&z2==='子')) dizhiFindings.push(`子巳暗合`);
      if((z1==='寅'&&z2==='丑')||(z1==='丑'&&z2==='寅')) dizhiFindings.push(`寅丑暗合`);
      if((z1==='卯'&&z2==='申')||(z1==='申'&&z2==='卯')) dizhiFindings.push(`卯申暗合`);
    }
  }

  const zhengzhuFindings = [];
  const gaitouList = ['戊子','己亥','丙申','丁酉','庚寅','辛卯','甲辰','乙丑'];
  const jiejiaoList = ['丙子','丁丑','甲申','乙酉','戊寅','己卯','庚午','辛巳','壬辰','癸丑'];
  for(let i=0; i<4; i++){
    const pair = `${gans[i]}${zhis[i]}`;
    if(gaitouList.includes(pair)) zhengzhuFindings.push(`${pair}盖头`);
    if(jiejiaoList.includes(pair)) zhengzhuFindings.push(`${pair}截脚`);
  }

  return {
    tg: [...new Set(tianganFindings)].join(' | ') || '无',
    dz: [...new Set(dizhiFindings)].join(' | ') || '地支纯和无破',
    zz: [...new Set(zhengzhuFindings)].join(' | ') || '无'
  };
}

// ==================== 四库经典原著数据库 ====================
const QIONGTONG_DB = {
  '甲': { '子': '子月甲木，木性虚寒，先取丙火暖局，次取癸水滋润。丙透癸藏，富贵双全；丙藏癸透，亦有衣衿。' },
  '丙': {
    '子': '十一月丙火，气进二阳，雪侮霜欺，冬阳照暖。先取甲木生丙，次取壬水映辉，佐以戊土制壬。甲木、壬水两透，富贵非轻；有甲无壬，犹不失儒雅；无甲有壬，贫苦常人。',
    '丑': '十二月丙火，气弱寒甚，专用壬水取贵，甲木为辅。甲壬两透，科甲显贵。',
    '寅': '正月丙火，三阳开泰，火气渐炎，专用壬水显辉，庚金助壬。'
  },
  '戊': { '子': '十一月戊土，严寒冰冻，非丙火照暖不生，非甲木疏劈不灵。丙甲两透，富贵极品。' }
};

const DITIANSUI_DB = {
  '甲': '「甲木参天，脱胎要火。春不容金，秋不容土。火炽乘龙，水宕骑虎。地润天和，植立千古。」',
  '乙': '「乙木虽柔，刲羊解牛。怀丁抱丙，跨凤乘猴。虚湿之地，骑马亦忧。藤萝系甲，可春可秋。」',
  '丙': '「丙火猛烈，欺霜傲雪。能煅庚金，逢辛反怯。土众成慈，水猖显节。虎马犬乡，甲来成灭。」\n\n【任铁樵阐微】：丙火乃纯阳之精，其势猛烈，遇水虽盛，反彰其显烈之光节；生于冬月，得甲木引通其性，逢寅木长生，虽逢霜雪而自温。',
  '丁': '「丁火柔中，内性昭融。抱乙而孝，合壬而忠。旺而不烈，衰而不穷。如有嫡母，可秋可冬。」',
  '戊': '「戊土固重，既中且正。静翕动辟，万物司命。水润物生，火燥物病。若在艮坤，怕冲宜静。」',
  '己': '「己土卑湿，中正蓄藏。不愁木盛，不畏水狂。火少火晦，金多金光。若要物旺，宜助宜帮。」',
  '庚': '「庚金带杀，刚健为最。得水而清，得火而锐。土润则生，土干则脆。能赢甲兄，输于乙妹。」',
  '辛': '「辛金软弱，温润而清。畏土之叠，乐水之盈。能扶社稷，能救生灵。热则喜母，寒则喜丁。」',
  '壬': '「壬水通河，能泄金气。刚中之德，周流不滞。通根透癸，冲天奔地。化则有情，从则相济。」',
  '癸': '「癸水至弱，达于天津。得龙而运，功化斯神。不愁火土，不论庚辛。合戊见火，化象斯真。」'
};

const SANMING_DB = {
  '天乙贵人': '《三命通会·论天乙贵人》：“天乙者，乃天上之神，在紫微垣、阊阖门外，与太乙并列，事天皇大帝，下游三辰。家在己丑、斗牛之次，出入于己未、井鬼之舍。执玉衡较量天人之事，名曰在天之贵神。其神最尊，所至之处，一切凶煞隐然而避。”',
  '福星贵人': '《三命通会·论福星贵人》：“人命若带福星贵人，主一生福禄无缺，康宁寿考。平常人得之，亦主三餐温饱，无灾少难，居家和睦，子孙承欢。”',
  '天德贵人': '《三命通会·论天月德》：“夫德者，利物济人、涤瑕荡垢之谓也。天德者，三光照临之德也；人命逢之，主福分深厚，心慈好善，一生少病少灾，不犯刑狱。”',
  '德秀贵人': '《三命通会·论德秀贵人》：“德者，阴阳德秀之气；秀者，天地开朗之英。凡命中逢德秀者，主为人聪明拔萃，器宇不凡，赋性温厚纯粹，文采风流。”',
  '天厨贵人': '《三命通会·论天厨贵人》：“天厨者，天子之厨膳也。命带天厨，主食禄丰盈，生平好酒食烹饪之乐，得享天赐之福，食禄不尽。”',
  '国印贵人': '《三命通会·论国印贵人》：“国印者，朝廷之玺节印绶也。命带国印，主为人诚实公道，严谨重信，临事有定见，宜在官方或企事业单位掌印执事。”',
  '文昌贵人': '《三命通会·论学堂词馆文昌》：“文昌者，食神之禄位也。主文章显达，才思如涌，利于考学功名，逢凶化吉。”',
  '禄神': '《三命通会·论禄命》：“禄者，爵禄之谓也。当得势而享其福，乃受气而得其亨。禄最忌冲破与空亡，得局归位，主食禄万钟，强健亨通。”',
  '红艳煞': '《三命通会·论红艳煞》：“红艳者，主风流多情、容貌秀美。女命逢之，美貌动人，艺术悟性极高，情感丰富细腻。”',
  '羊刃': '《三命通会·论羊刃》：“羊刃者，禄前一位也。太刚则折，故谓之刃。身弱逢之为帮身之利刃，身强见之宜防争斗克伐。”',
  '飞刃': '《三命通会·论飞刃》：“羊刃对冲之位名曰飞刃。如丙羊刃在午，见子为飞刃。主行事刚决，逢吉神化解反生机敏威严。”',
  '亡神': '《三命通会·论亡神》：“亡者，失也。自内失之谓之亡。吉则深谋远虑，机智过人；凶则急躁虚浮。”',
  '劫煞': '《三命通会·论劫煞》：“劫者，夺也。自外夺之谓之劫。主秉性刚烈，行动敏捷，吉神相照主武职显贵、决断立功。”',
  '披麻': '《三命通会·论披麻吊客》：“披麻吊客，岁运交驰之关煞。主亲族人缘，宜修身养德，居安思危。”',
  '词馆': '《三命通会·论词馆》：“词馆者，如学士之入词林也。长生之府，主文章锦绣，才高八斗，声名远播。”'
};

const TIYAO_DB = {
  '丙_子_戊子': '【八字提要 · 徐乐吾】：丙生子月，正气官星，水气正旺。时逢戊子，水旺土干，戊土食神透出，制官救丙。然冬阳虚弱，最喜支逢寅巳帮身（本命日坐寅木长生，年通巳禄），日元转旺，水火既济，大吉之象。',
  '丙_子_子': '【八字提要 · 徐乐吾】：丙火生于子月，水旺火衰。喜有甲木透干生身，更喜支坐寅卯长生。若得土以制强水，火以暖严寒，五行调和，自臻上乘。'
};

// ==================== 主八字排盘解算 ====================
function computeBaziMaster() {
  const dVal = document.getElementById('baziDate').value;
  const tVal = document.getElementById('baziTime').value;
  const gender = document.getElementById('baziGender').value;
  if(!dVal || !tVal) return;
  
  const [y, m, d] = dVal.split('-').map(Number);
  const [h, mi] = tVal.split(':').map(Number);
  
  const solar = Solar.fromYmdHms(y, m, d, h, mi, 0);
  const lunar = solar.getLunar();
  const eightChar = lunar.getEightChar();
  
  const yG = eightChar.getYearGan(), yZ = eightChar.getYearZhi();
  const mG = eightChar.getMonthGan(), mZ = eightChar.getMonthZhi();
  const dG = eightChar.getDayGan(), dZ = eightChar.getDayZhi();
  const tG = eightChar.getTimeGan(), tZ = eightChar.getTimeZhi();

  const isMale = (gender === 'male');
  const dayMaster = dG;
  const isEn = (currentLang === 'en');
  const dict = I18N_DICT[currentLang] || I18N_DICT['zh'];

  // 顶部概要
  if (isEn) {
    document.getElementById('baziSummaryHeader').textContent = 
      `Lunar: ${lunar.getYearInGanZhi()} Year (${lunar.getYearShengXiao()}) Month ${lunar.getMonth()} Day ${lunar.getDay()} · ${isMale?'Male (Yang Forward)':'Female (Yin Forward)'} · Tai Yuan: ${eightChar.getTaiYuan()} · Ming Gong: ${eightChar.getMingGong()}`;
  } else {
    document.getElementById('baziSummaryHeader').textContent = 
      `农历：${lunar.getYearInGanZhi()}年 (${lunar.getYearShengXiao()}) ${lunar.getMonthInChinese()}月${lunar.getDayInChinese()} ${eightChar.getTimeZhi()}时 · ${isMale?'乾造 (男命)':'坤造 (女命)'} · 胎元：${eightChar.getTaiYuan()} · 命宫：${eightChar.getMingGong()}`;
  }

  // 问真八字 经典顺序: 年柱 (Year) | 月柱 (Month) | 日柱 (Day) | 时柱 (Hour) 从左至右
  const pillars = [
    { name: isEn?'Year':'年柱', g: yG, z: yZ, ny: eightChar.getYearNaYin(), xun: eightChar.getYearXunKong(), isDay: false },
    { name: isEn?'Month':'月柱', g: mG, z: mZ, ny: eightChar.getMonthNaYin(), xun: eightChar.getMonthXunKong(), isDay: false },
    { name: isEn?'Day':'日柱', g: dG, z: dZ, ny: eightChar.getDayNaYin(), xun: eightChar.getDayXunKong(), isDay: true },
    { name: isEn?'Hour':'时柱', g: tG, z: tZ, ny: eightChar.getTimeNaYin(), xun: eightChar.getTimeXunKong(), isDay: false }
  ];

  // 1. 主星 (附带西方荣格心理学原型副标题)
  const zhuxingRow = pillars.map(p => {
    if(p.isDay) {
      const dmProf = DAYMASTER_PROFILES[dayMaster] || DAYMASTER_PROFILES['甲'];
      const archName = isEn ? dmProf.archetypeEn : dmProf.archetypeZh;
      return `
        <span class="wz-shishen-yuan">${isEn ? (isMale?'Day Master (M)':'Day Master (F)') : (isMale?'元男':'元女')}</span>
        <div class="wz-archetype-tag">${archName}</div>
      `;
    }
    const ssZh = getShiShen(dayMaster, p.g);
    const ssText = isEn ? (SHISHEN_EN_MAP[ssZh] || ssZh) : ssZh;
    const archInfo = ARCHETYPE_MAP[ssZh] || { zh: ssZh, en: ssText };
    const archLabel = isEn ? archInfo.en : archInfo.zh;
    return `
      <span class="wz-shishen-zhuxing">${ssText}</span>
      <div class="wz-archetype-tag">${archLabel}</div>
    `;
  });

  // ✨ 动态渲染【命局全息现代通俗人话总评】四大面向卡片 (排盘后完整呈现)
  const dmProfile = DAYMASTER_PROFILES[dayMaster] || DAYMASTER_PROFILES['甲'];
  const pCard = document.getElementById('plainSummaryCard');
  if (pCard) pCard.style.display = 'block';
  const pCardTitle = document.getElementById('plainSummaryTitle');
  if (pCardTitle) pCardTitle.textContent = dict.plainSummaryTitleText;
  const pCardIntro = document.getElementById('plainSummaryIntro');
  if (pCardIntro) pCardIntro.textContent = dict.plainSummaryIntroText;
  const pArchBadge = document.getElementById('plainArchetypeBadge');
  if (pArchBadge) pArchBadge.textContent = isEn ? `Jungian Archetype: ${dmProfile.archetypeEn}` : `荣格心理原型：${dmProfile.archetypeZh}`;

  const plainDeckEl = document.getElementById('plainSummaryDeck');
  if (plainDeckEl) {
    plainDeckEl.innerHTML = `
      <div class="plain-item-box">
        <div class="plain-item-head">
          <span>🧠</span>
          <span>${dict.cardTitlePersonality}</span>
        </div>
        <div class="plain-item-desc">${isEn ? dmProfile.personalityEn : dmProfile.personalityZh}</div>
      </div>
      <div class="plain-item-box">
        <div class="plain-item-head">
          <span>💼</span>
          <span>${dict.cardTitleCareer}</span>
        </div>
        <div class="plain-item-desc">${isEn ? dmProfile.careerEn : dmProfile.careerZh}</div>
      </div>
      <div class="plain-item-box">
        <div class="plain-item-head">
          <span>❤️</span>
          <span>${dict.cardTitleRelationship}</span>
        </div>
        <div class="plain-item-desc">${isEn ? dmProfile.relationshipEn : dmProfile.relationshipZh}</div>
      </div>
      <div class="plain-item-box">
        <div class="plain-item-head">
          <span>🌿</span>
          <span>${dict.cardTitleWellness}</span>
        </div>
        <div class="plain-item-desc">${isEn ? dmProfile.wellnessEn : dmProfile.wellnessZh}</div>
      </div>
    `;
  }

  // 2. 天干
  const tianganRow = pillars.map(p => {
    const [, colorClass, , icon] = GAN_PROPS[p.g];
    return `<div class="wz-gan-char ${colorClass}">${p.g} <span class="wz-elem-icon">${icon}</span></div>`;
  });

  // 3. 地支
  const dizhiRow = pillars.map(p => {
    const [, colorClass, icon] = ZHI_PROPS[p.z];
    return `<div class="wz-zhi-char ${colorClass}">${p.z} <span class="wz-elem-icon">${icon}</span></div>`;
  });

  // 4. 藏干
  const cangganRow = pillars.map(p => {
    const list = CANGGAN_TABLE[p.z] || [];
    const html = list.map(c => `<span class="${c.c}">${c.g}${c.w}</span>`).join('');
    return `<div class="canggan-stack">${html}</div>`;
  });

  // 5. 副星
  const fuxingRow = pillars.map(p => {
    const list = CANGGAN_TABLE[p.z] || [];
    const html = list.map(c => {
      const ssZh = getShiShen(dayMaster, c.g);
      return `<span>${isEn ? (SHISHEN_EN_MAP[ssZh] || ssZh) : ssZh}</span>`;
    }).join('');
    return `<div class="fuxing-stack">${html}</div>`;
  });

  // 6. 星运
  const xingyunRow = pillars.map(p => {
    const cs = (CHANGSHENG_TABLE[dayMaster] || {})[p.z] || '胎';
    return `<span style="font-weight:700; color:#FFFFFF;">${isEn ? (CHANGSHENG_EN_MAP[cs] || cs) : cs}</span>`;
  });

  // 7. 自坐
  const zizuoRow = pillars.map(p => {
    const cs = (CHANGSHENG_TABLE[p.g] || {})[p.z] || '胎';
    return `<span style="color:var(--text-sub); font-size:12px;">${isEn ? (CHANGSHENG_EN_MAP[cs] || cs) : cs}</span>`;
  });

  // 8. 空亡
  const kongwangRow = pillars.map(p => `<span style="color:var(--cyan); font-family:var(--font-mono); font-size:11px;">${p.xun}</span>`);

  // 9. 纳音 (支持点击查阅全息古籍纳音详论)
  const nayinRow = pillars.map(p => `
    <button type="button" class="wz-nayin-btn" onclick="openNayinModal('${p.g}${p.z}', '${p.ny}')" title="${isEn ? `Click for NaYin [${p.ny}] Details` : `点击查阅【${p.g}${p.z} · ${p.ny}】纳音五行与古籍详论`}">
      <span>${p.ny}</span>
      <span class="wz-nayin-icon">🔍</span>
    </button>
  `);

  // 10. 柱位专属神煞 (全流程精准匹配)
  const allFoundShenshaNames = [];
  const shenshaRow = pillars.map(p => {
    const stars = getPillarShensha(p.g, p.z, p.isDay, dayMaster, yG, yZ, dZ, mZ);
    if(stars.length === 0) return '<span style="color:var(--text-faint); font-size:10px;">—</span>';
    stars.forEach(s => allFoundShenshaNames.push(s.name));
    const pills = stars.map(s => `<span class="wz-shensha-pill ${s.type==='gold'?'wz-shensha-gold':'wz-shensha-red'}" onclick="openShenshaModal('${s.name}')">${s.name}</span>`).join('');
    return `<div class="pillar-shensha-stack">${pills}</div>`;
  });

  // 渲染表格 (年柱 | 月柱 | 日柱 | 时柱)
  document.getElementById('wenzhenTableBody').innerHTML = `
    <tr><td class="row-label-col">${dict.rowZhuxing}</td>${zhuxingRow.map((td, i)=>`<td class="${i===2?'day-pillar-highlight':''}">${td}</td>`).join('')}</tr>
    <tr><td class="row-label-col">${dict.rowTiangan}</td>${tianganRow.map((td, i)=>`<td class="${i===2?'day-pillar-highlight':''}">${td}</td>`).join('')}</tr>
    <tr><td class="row-label-col">${dict.rowDizhi}</td>${dizhiRow.map((td, i)=>`<td class="${i===2?'day-pillar-highlight':''}">${td}</td>`).join('')}</tr>
    <tr><td class="row-label-col">${dict.rowCanggan}</td>${cangganRow.map((td, i)=>`<td class="${i===2?'day-pillar-highlight':''}">${td}</td>`).join('')}</tr>
    <tr><td class="row-label-col">${dict.rowFuxing}</td>${fuxingRow.map((td, i)=>`<td class="${i===2?'day-pillar-highlight':''}">${td}</td>`).join('')}</tr>
    <tr><td class="row-label-col">${dict.rowXingyun}</td>${xingyunRow.map((td, i)=>`<td class="${i===2?'day-pillar-highlight':''}">${td}</td>`).join('')}</tr>
    <tr><td class="row-label-col">${dict.rowZizuo}</td>${zizuoRow.map((td, i)=>`<td class="${i===2?'day-pillar-highlight':''}">${td}</td>`).join('')}</tr>
    <tr><td class="row-label-col">${dict.rowKongwang}</td>${kongwangRow.map((td, i)=>`<td class="${i===2?'day-pillar-highlight':''}">${td}</td>`).join('')}</tr>
    <tr><td class="row-label-col">${dict.rowNayin}</td>${nayinRow.map((td, i)=>`<td class="${i===2?'day-pillar-highlight':''}">${td}</td>`).join('')}</tr>
    <tr><td class="row-label-col" style="vertical-align:top; padding-top:14px;">${dict.rowShensha}</td>${shenshaRow.map((td, i)=>`<td class="${i===2?'day-pillar-highlight':''}" style="vertical-align:top;">${td}</td>`).join('')}</tr>
  `;

  // 原局干支冲合诊断
  const clashDiag = analyzeClashes([yG, mG, dG, tG], [yZ, mZ, dZ, tZ]);
  document.getElementById('diagTiangan').textContent = clashDiag.tg === '无' ? dict.diagNoneTg : clashDiag.tg;
  document.getElementById('diagDizhi').textContent = clashDiag.dz === '地支纯和无破' ? dict.diagNoneDz : clashDiag.dz;
  document.getElementById('diagZhengzhu').textContent = clashDiag.zz === '无' ? dict.diagNoneZz : clashDiag.zz;

  // 五行面积雷达图 (72度纯正正五边形)
  const elemScores = { '木': 0, '火': 0, '土': 0, '金': 0, '水': 0 };
  [yG, mG, dG, tG].forEach(g => { elemScores[GAN_PROPS[g][0]] += 1.0; });
  [yZ, mZ, dZ, tZ].forEach(z => {
    (CANGGAN_TABLE[z] || []).forEach((c, idx) => {
      elemScores[c.w] += (idx === 0 ? 1.0 : 0.4);
    });
  });
  
  const totalScore = Object.values(elemScores).reduce((a,b)=>a+b, 0);
  const elemColors = { '木': '#10B981', '火': '#EF4444', '土': '#D97706', '金': '#00F2FE', '水': '#38BDF8' };
  const elemEn = { '木': 'Wood', '火': 'Fire', '土': 'Earth', '金': 'Metal', '水': 'Water' };
  
  let barsHtml = '';
  ['木', '火', '土', '金', '水'].forEach(el => {
    const sc = elemScores[el];
    const pct = Math.round((sc / totalScore) * 100);
    const label = isEn ? `${elemEn[el]}` : `${el} ${elemEn[el]}`;
    barsHtml += `
      <div class="bar-elem-item">
        <span class="bar-elem-label" style="color:${elemColors[el]};">${label}</span>
        <div class="bar-elem-track">
          <div class="bar-elem-fill" style="width:${pct}%; background:${elemColors[el]}; color:${elemColors[el]};"></div>
        </div>
        <span style="font-size:10px; width:32px; text-align:right; font-family:var(--font-mono);">${pct}%</span>
      </div>
    `;
  });
  document.getElementById('radarBarsStack').innerHTML = barsHtml;

  const cx = 110, cy = 110;
  const maxRadius = 75;
  const angles = [0, 1, 2, 3, 4].map(i => -Math.PI / 2 + i * (2 * Math.PI / 5));
  
  let webGridSvg = '';
  [0.2, 0.4, 0.6, 0.8, 1.0].forEach((ratio, lIdx) => {
    const r = maxRadius * ratio;
    const pts = angles.map(a => `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`).join(' ');
    const bandFill = (lIdx % 2 === 0) ? 'rgba(0, 242, 254, 0.035)' : 'rgba(255, 255, 255, 0.015)';
    webGridSvg += `<polygon points="${pts}" fill="${bandFill}" stroke="rgba(255,255,255,${ratio===1.0?'0.2':'0.08'})" stroke-width="${ratio===1.0?'1.5':'1'}"/>`;
  });
  angles.forEach(a => {
    webGridSvg += `<line x1="${cx}" y1="${cy}" x2="${(cx + maxRadius * Math.cos(a)).toFixed(1)}" y2="${(cy + maxRadius * Math.sin(a)).toFixed(1)}" stroke="rgba(255,255,255,0.12)" stroke-dasharray="2,2"/>`;
  });

  const maxSc = Math.max(...Object.values(elemScores), 3.0);
  const minFloor = 0.30;
  const dataPoints = ['木', '火', '土', '金', '水'].map((el, i) => {
    const normalized = elemScores[el] / maxSc;
    const r = maxRadius * (minFloor + (1 - minFloor) * normalized);
    const x = cx + r * Math.cos(angles[i]);
    const y = cy + r * Math.sin(angles[i]);
    return { x, y, el, pct: Math.round((elemScores[el] / totalScore) * 100) };
  });

  const polygonPointsStr = dataPoints.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');

  let vertexSvg = '';
  dataPoints.forEach((p, idx) => {
    const color = elemColors[p.el];
    vertexSvg += `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="4.5" fill="${color}" stroke="#FFFFFF" stroke-width="2" filter="drop-shadow(0 0 8px ${color})"/>`;
    const labelR = maxRadius + 18;
    const lx = cx + labelR * Math.cos(angles[idx]);
    const ly = cy + labelR * Math.sin(angles[idx]) + 4;
    const pointLabel = isEn ? `${elemEn[p.el]} ${p.pct}%` : `${p.el} ${p.pct}%`;
    vertexSvg += `<text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" fill="${color}" font-size="10.5" font-weight="900" font-family="var(--font-sans)" text-anchor="middle">${pointLabel}</text>`;
  });

  document.getElementById('radarSvgCanvas').innerHTML = `
    <defs>
      <linearGradient id="radarAreaGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#00F2FE" stop-opacity="0.6"/>
        <stop offset="35%" stop-color="#8B5CF6" stop-opacity="0.5"/>
        <stop offset="70%" stop-color="#10B981" stop-opacity="0.55"/>
        <stop offset="100%" stop-color="#EF4444" stop-opacity="0.45"/>
      </linearGradient>
      <filter id="areaGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#00F2FE" flood-opacity="0.65"/>
      </filter>
    </defs>
    ${webGridSvg}
    <polygon points="${polygonPointsStr}" fill="url(#radarAreaGradient)" stroke="#00F2FE" stroke-width="2.5" stroke-linejoin="round" filter="url(#areaGlow)"/>
    ${vertexSvg}
  `;

  // 喜用神诊断
  const dmElem = GAN_PROPS[dayMaster][0];
  const sameElemScore = elemScores[dmElem] + (dmElem==='木'?elemScores['水']:dmElem==='火'?elemScores['木']:dmElem==='土'?elemScores['火']:dmElem==='金'?elemScores['土']:elemScores['金']);
  const isStrong = (sameElemScore / totalScore) >= 0.45;
  if (isEn) {
    document.getElementById('baziXiyongVerdict').innerHTML = `
      <div>【Day Master Pattern】：<span style="color:#FFF; font-weight:800;">${dayMaster} ${elemEn[dmElem]} (${isStrong?'Strong / Season Supported':'Weak / Needs Resource & Support'})</span></div>
      <div style="margin-top:4px;">【Favorable Elements】：<span style="color:var(--cyan); font-weight:700;">${isStrong?'Favor Output, Wealth, Officer (Wood/Fire/Metal drainage)':'Favor Resource, Peer (Water/Wood replenishment)'}</span></div>
    `;
  } else {
    document.getElementById('baziXiyongVerdict').innerHTML = `
      <div>【日主格局】：<span style="color:#FFF; font-weight:800;">${dayMaster}${dmElem} (${isStrong?'身旺得令':'身弱喜帮'})</span></div>
      <div style="margin-top:4px;">【五行喜忌】：<span style="color:var(--cyan); font-weight:700;">${isStrong?'宜泄秀克制 · 喜食伤、财星、官杀':'宜生扶帮身 · 喜印星、比劫'}</span></div>
    `;
  }

  // 大运时空走势
  const yun = eightChar.getYun(isMale?1:0);
  const daYunList = yun.getDaYun();
  let dyNodes = '';
  const wavePoints = [];
  
  for(let i=1; i<=10 && i<daYunList.length; i++){
    const dy = daYunList[i];
    const dyG = dy.getGanZhi().substring(0,1);
    const ssZh = getShiShen(dayMaster, dyG);
    const ssText = isEn ? (SHISHEN_EN_MAP[ssZh] || ssZh) : ssZh;
    const yVal = 30 + Math.sin(i * 0.85) * 28 + (i % 2 === 0 ? 12 : -8);
    wavePoints.push({ x: (i-1) * 105 + 25, y: yVal });
    
    dyNodes += `
      <div class="timeline-card-node">
        <div style="font-size:9px; color:var(--cyan); font-weight:800; font-family:var(--font-mono);">${dy.getStartAge()}-${dy.getEndAge()} ${dict.ageSuffix}</div>
        <div style="font-size:16px; font-weight:900; font-family:var(--font-serif); margin:2px 0; color:#FFF;">${dy.getGanZhi()}</div>
        <div style="font-size:9px; color:var(--text-sub);">${ssText} · ${dy.getStartYear()}${dict.yearSuffix}</div>
      </div>
    `;
  }
  document.getElementById('dayunTimelineRow').innerHTML = dyNodes;
  document.getElementById('dayunStartAgeLabel').textContent = `${dict.dayunStartPrefix}${yun.getStartYear()}${dict.ageSuffix} (${yun.getStartSolar().toYmd()})`;

  let pathD = `M ${wavePoints[0].x},${wavePoints[0].y}`;
  for(let i=1; i<wavePoints.length; i++){
    const prev = wavePoints[i-1];
    const curr = wavePoints[i];
    const cxP = (prev.x + curr.x) / 2;
    pathD += ` C ${cxP},${prev.y} ${cxP},${curr.y} ${curr.x},${curr.y}`;
  }
  document.getElementById('fortuneWaveSvg').innerHTML = `
    <defs>
      <linearGradient id="waveGlowGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#00F2FE"/>
        <stop offset="50%" stop-color="#8B5CF6"/>
        <stop offset="100%" stop-color="#EC4899"/>
      </linearGradient>
    </defs>
    <path d="${pathD}" fill="none" stroke="url(#waveGlowGrad)" stroke-width="3" filter="drop-shadow(0 0 8px rgba(0,242,254,0.75))"/>
  `;

  // ==================== 七大经典古籍动态引证引擎 ====================
  const db = window.CANON_SEVEN_DB || {};
  const qtDB = db.QIONGTONG || (typeof QIONGTONG_DB !== 'undefined' ? QIONGTONG_DB : {});
  const dtDB = db.DITIANSUI || (typeof DITIANSUI_DB !== 'undefined' ? DITIANSUI_DB : {});
  const zpDB = db.ZIPING || {};
  const smDB = db.SANMING || (typeof SANMING_DB !== 'undefined' ? SANMING_DB : {});
  const yhDB = db.YUANHAI || {};
  const sfDB = db.SHENFENG || {};
  const tyDB = db.TIYAO || (typeof TIYAO_DB !== 'undefined' ? TIYAO_DB : {});

  // 1. 《穷通宝鉴》
  const qtTxt = (qtDB[dayMaster]||{})[mZ] || `【穷通宝鉴】：${dayMaster}生于${mZ}月，调候以通关、水火调和、生克流通为上。`;
  document.getElementById('qtTitle').textContent = isEn ? `📘 Qiong Tong Bao Jian: Day Master ${dayMaster} born in ${mZ} Month Climate Tuning` : `📘《穷通宝鉴》：${dayMaster}日元生于【${mZ}月】调候原著秘旨`;
  document.getElementById('qtQuote').textContent = qtTxt;
  document.getElementById('qtCommentary').textContent = isEn ? `[Canonical Insight]: Qiong Tong Bao Jian prioritizes seasonal balance. Winter months require fire warmth; summer months require water coolness; spring and autumn require balance between wood and metal.` : `【理法精要】：穷通宝鉴以月令四时气候为先。冬月重在暖局解冻，夏月重在滋润调候，春秋重在生扶克制得宜。`;

  // 2. 《滴天髓》
  const dtTxt = dtDB[dayMaster] || `《滴天髓》：能知衰旺之真机，其于三命之奥，思过半矣。`;
  document.getElementById('dtTitle').textContent = isEn ? `📕 Di Tian Sui: Heavenly Stem ${dayMaster} Essence & Systemic Polarity` : `📕《滴天髓阐微》：论【${dayMaster}${GAN_PROPS[dayMaster][0]}】日主性情与全局机要`;
  document.getElementById('dtQuote').textContent = dtTxt;
  document.getElementById('dtCommentary').textContent = isEn ? `[Canonical Insight]: Di Tian Sui emphasizes natural harmony. When excessively strong, drain or conquer; when weak, assist and nourish.` : `【理法精要】：滴天髓主张「中和为贵，旺则宜泄宜伤，衰则喜帮喜助」，精与神兼顾，顺气势之自然。`;

  // 3. 《子平真诠》
  const monthMainGan = (CANGGAN_TABLE[mZ] && CANGGAN_TABLE[mZ][0]) ? CANGGAN_TABLE[mZ][0].g : '癸';
  const mainPattern = getShiShen(dayMaster, monthMainGan);
  const zpTxt = zpDB[mainPattern] || `《子平真诠·论格局》：“八字用神，专求月令。以日干配月令地支，而生克不同，格局乃分。财官印食，此用神之善而顺用之者也；煞伤劫刃，此用神之不善而逆用之者也。”`;
  document.getElementById('zpTitle').textContent = isEn ? `📗 Zi Ping Zhen Quan: Pattern [${SHISHEN_EN_MAP[mainPattern] || mainPattern}] & Auxiliary Deities` : `📗《子平真诠》：沈孝瞻论月令【${mainPattern}格】与相神护卫`;
  document.getElementById('zpQuote').textContent = zpTxt;
  document.getElementById('zpCommentary').textContent = isEn ? `[Canonical Insight]: Master Shen Xiaozhan bases fate on monthly decree patterns. Auspicious deities are cultivated; inauspicious deities are controlled and transformed.` : `【理法精要】：沈孝瞻论命以月令格局为体，相神为用。善用神顺用（财宜生、官宜护、印宜清、食宜旺），不善用神逆用（七杀宜制化、伤官宜佩印生财、阳刃宜驾杀）。`;

  // 4. 《三命通会》
  const uniqueShensha = [...new Set(allFoundShenshaNames)];
  let smQuotesHtml = '';
  uniqueShensha.slice(0, 6).forEach(sName => {
    const sDetail = (window.SHENSHA_EXPANDED_DB && window.SHENSHA_EXPANDED_DB[sName]) ? window.SHENSHA_EXPANDED_DB[sName].sanming : (smDB[sName] || '');
    if(sDetail) {
      smQuotesHtml += `<div style="margin-bottom:12px; cursor:pointer;" onclick="openShenshaModal('${sName}')"><strong>【${sName}】</strong>：${sDetail}</div>`;
    }
  });
  document.getElementById('smTitle').textContent = isEn ? `📙 San Ming Tong Hui: Symbolic Stars in Natal Chart (${uniqueShensha.length} Stars)` : `📙《三命通会》：明·万民英论本命所带神煞（${uniqueShensha.length} 尊）`;
  document.getElementById('smQuote').innerHTML = smQuotesHtml || (isEn ? 'San Ming Tong Hui: Symbolic stars must be evaluated together with stem and branch interactions.' : '《三命通会》：神煞吉凶，须参合四柱生克制化、格局喜忌而定，不可执一而论。');
  document.getElementById('smCommentary').textContent = isEn ? `[Canonical Insight]: Click any star card above or in the table to inspect imperial source texts.` : `【理法精要】：万民英云：“贵人互换得位，遇难呈祥；吉神得令，福力倍增；凶煞有制，反主威权。”（点击任意神煞可查看全息典籍考证）`;

  // 5. 《渊海子平》
  const yhTxt = `${yhDB.jishen || ''}\n\n${yhDB.xiji || ''}` || `《渊海子平》：“人禀天地，命属阴阳。欲知贵贱，先观日主；欲辨吉凶，全审提纲。”`;
  document.getElementById('yhTitle').textContent = isEn ? `📜 Yuan Hai Zi Ping: Classical Poems & Aphorisms` : `📜《渊海子平》：宋·徐子平《继善篇》《喜忌篇》古赋指要`;
  document.getElementById('yhQuote').textContent = yhTxt;
  document.getElementById('yhCommentary').textContent = isEn ? `[Canonical Insight]: Foundational text of ZiPing astrology formulating stem and branch combinations.` : `【理法精要】：渊海子平为子平命理奠基之作，以五行生克、干支会合为纲，融汇十神、格局与古赋精义。`;

  // 6. 《神峰通考》
  const sfTxt = `${sfDB.bingyao || ''}\n\n${sfDB.dongjing || ''}` || `《神峰通考·病药说》：“格格寻病，格格寻药。有病方为贵，无伤不是奇。格中如去病，财禄两相随。”`;
  document.getElementById('sfTitle').textContent = isEn ? `⚔️ Shen Feng Tong Kao: Disease & Remedy Doctrine` : `⚔️《神峰通考》：明·张楠《病药说》原局辩证剖析`;
  document.getElementById('sfQuote').textContent = sfTxt;
  document.getElementById('sfCommentary').textContent = isEn ? `[Canonical Insight]: Zhang Nan dialectically identifies chart deficiencies as "diseases" and balancing elements as "remedies".` : `【理法精要】：张楠主张八字辩证施治，以原局最旺、最衰或偏枯之处为“病”，以能克抑旺神、生扶衰神、调候解冻之五行为“药”。`;

  // 7. 《八字提要》
  const tyKey = `${dayMaster}_${mZ}_${tG}${tZ}`;
  const tyTxt = tyDB[tyKey] || tyDB[`${dayMaster}_${mZ}_${tZ}`] || `【八字提要 · 徐乐吾】：${dayMaster}日元生于${mZ}月${tZ}时，官印相停，日元通根得气，时干透出，格局纯清。`;
  document.getElementById('tyTitle').textContent = isEn ? `🏛️ Ba Zi Ti Yao: Hourly Analysis for [${dayMaster} in ${mZ} Month at ${tG}${tZ} Hour]` : `🏛️《八字提要》：徐乐吾详论【${dayMaster}日元 · ${mZ}月 · ${tG}${tZ}时】`;
  document.getElementById('tyQuote').textContent = tyTxt;
  document.getElementById('tyCommentary').textContent = isEn ? `[Canonical Insight]: Xu Lewu meticulously analyzes stem and branch hour combinations with monthly orders.` : `【理法精要】：八字提要将日元结合月令提纲与生时十二时辰，详尽剖析干支生克、旺衰消长之细微玄机。`;

  // 现代白话翻译多语言同步
  const modernTexts = {
    qt: isEn ? "Seasonal climate tuning acts as your optimal environment and comfort zone. Excess water needs fire warmth, just as cold winter demands fire; leverage warm, proactive team energy to complement your skills." : "气候调候相当于人生的环境适宜度与舒适圈。水旺需火暖，犹如寒冬需暖炉，指引我们在事业上多借用热情、开朗的团队力量补齐短板。",
    dt: isEn ? "Your Day Master represents inherent psychological drives. Harmonize with your natural archetype: soften rigid stubbornness with strategic empathy, and elevate soft adaptability with decisive execution." : "日主秉性即你的天生底层性格驱动力。顺应天性发展才能事半功倍，过刚则需学习包容与妥协，过柔则需强化意志与执行力。",
    zp: isEn ? "Social career positioning and value creation model. Auspicious patterns thrive on compound consistency; transformed intense patterns excel at pioneering breakthroughs under adversity." : "格局相当于你的社会职业定位与价值创造模式。吉格重在持之以恒积累优势壁垒，凶格反转则代表具备在逆境与高压下破局开创的独到能力。",
    sm: isEn ? "Symbolic Stars serve as personal situational catalysts and situational blessings. For example, Nobleman stars signify mentorship in crises; Academic stars foster rapid cognitive learning and domain mastery." : "神煞是人生的特殊光环与情境触发器。如天乙贵人主逢凶化吉、关键时刻有贵人相助；文昌词馆主学习理解能力强、适合文案与学术深耕。",
    yh: isEn ? "Classical aphorisms encapsulate practical life navigation rules: proactively expand during favorable cosmic cycles, and anchor disciplined boundaries to mitigate downside risks when challenged." : "古赋提炼的是传统人生的处世智慧，教导我们在优势大运时积极出击拓展，在流年受克时守正沉淀、避免高风险冒进。",
    sf: isEn ? "Life challenges (the 'disease') reveal our highest growth breakthroughs (the 'remedy'). Channel balancing elements into daily lifestyle, somatic habits, and symbiotic partnerships." : "人生有痛点（病）才有突破与超越（药）。找到命局的解药元素并将其投射到现实生活（如运动、学习特定技能、结交互补型伙伴），即可化阻力为动力。",
    ty: isEn ? "Birth hour reflects long-term compounding, later life fulfillment, and private inner purpose. Supporting elements in the hour pillar foster sustainable blessings across the second half of life." : "出生时辰代表晚年运景、归宿以及个人内心私密世界与子女缘分。时辰生助日主代表越到后半生越有福报与积累。"
  };
  if(document.getElementById('qtModernText')) document.getElementById('qtModernText').textContent = modernTexts.qt;
  if(document.getElementById('dtModernText')) document.getElementById('dtModernText').textContent = modernTexts.dt;
  if(document.getElementById('zpModernText')) document.getElementById('zpModernText').textContent = modernTexts.zp;
  if(document.getElementById('smModernText')) document.getElementById('smModernText').textContent = modernTexts.sm;
  if(document.getElementById('yhModernText')) document.getElementById('yhModernText').textContent = modernTexts.yh;
  if(document.getElementById('sfModernText')) document.getElementById('sfModernText').textContent = modernTexts.sf;
  if(document.getElementById('tyModernText')) document.getElementById('tyModernText').textContent = modernTexts.ty;

  // 👑 自动触发 VIP 全息专卷与心理学转化算法 (流年、暗礁、大运倒计时、财富、姻缘、开运解药)
  if (typeof computeVipModules === 'function') {
    const curYear = new Date().getFullYear();
    const curAge = Math.max(1, curYear - y + 1); // 虚岁
    let activeDaYun = null;
    let dyIdx = 1;
    for (let i = 1; i <= 10 && i < daYunList.length; i++) {
      const dy = daYunList[i];
      if (curAge >= dy.getStartAge() && curAge <= dy.getEndAge()) {
        activeDaYun = dy;
        dyIdx = i;
        break;
      }
    }
    if (!activeDaYun && daYunList.length > 1) {
      activeDaYun = daYunList[1];
    }
    const dyStartAge = activeDaYun ? activeDaYun.getStartAge() : 1;
    const dyEndAge = activeDaYun ? activeDaYun.getEndAge() : 10;
    const dyPassed = Math.max(1, Math.min(10, curAge - dyStartAge + 1));
    const dyRemainYears = Math.max(0, dyEndAge - curAge);
    const dyRemainMonths = Math.floor((Math.abs(y * 7 + m * 3) % 9)) + 2;

    computeVipModules({
      yG, yZ, mG, mZ, dG, dZ, tG, tZ, dayMaster, isMale, isEn, elemScores, totalScore,
      birthYear: y, curYear, curAge, activeDaYun, dyPassed, dyRemainYears, dyRemainMonths
    });
  }

  // 🌟 新功能调度：今日流日天时气象与个人实时能量指南
  if (typeof renderDailyTransit === 'function') {
    renderDailyTransit(dayMaster);
  }

  // ⚖️ 新功能调度：唐代袁天罡称骨量化神数
  if (typeof renderChengGu === 'function') {
    renderChengGu(yG, yZ, lunar.getMonth(), lunar.getDay(), tZ);
  }
}

// 快速切换神煞古典引证面板
function showClassicShenshaDetail(name) {
  openShenshaModal(name);
}

window.scrollToBaziInput = function() {
  const card = document.getElementById('baziInputCard');
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const dInput = document.getElementById('baziDate');
    if (dInput) dInput.focus();
  }
};

window.applyBaziSample = function(dateStr, timeStr, gender, lng) {
  document.getElementById('baziDate').value = dateStr;
  document.getElementById('baziTime').value = timeStr;
  document.getElementById('baziGender').value = gender;
  document.getElementById('baziLng').value = lng;
  updateBaziLunarPreview();
  // 自动触发解算
  document.getElementById('btnRunBazi').click();
};

function updateBaziLunarPreview() {
  const dVal = document.getElementById('baziDate').value;
  const tVal = document.getElementById('baziTime').value;
  const gender = document.getElementById('baziGender').value;
  if (!dVal || !tVal || typeof Solar === 'undefined') return;

  try {
    const [y, m, d] = dVal.split('-').map(Number);
    const [h, mi] = tVal.split(':').map(Number);
    const solar = Solar.fromYmdHms(y, m, d, h, mi, 0);
    const lunar = solar.getLunar();
    const eightChar = lunar.getEightChar();
    const isMale = (gender === 'male');
    const isEn = (currentLang === 'en');

    const summaryText = isEn
      ? `Lunar: ${lunar.getYearInGanZhi()} Year (${lunar.getYearShengXiao()}) Month ${lunar.getMonth()} Day ${lunar.getDay()} · ${isMale?'Male (Yang Forward)':'Female (Yin Forward)'} · Tai Yuan: ${eightChar.getTaiYuan()} · Ming Gong: ${eightChar.getMingGong()}`
      : `农历：${lunar.getYearInGanZhi()}年 (${lunar.getYearShengXiao()}) ${lunar.getMonthInChinese()}月${lunar.getDayInChinese()} ${eightChar.getTimeZhi()}时 · ${isMale?'乾造 (男命)':'坤造 (女命)'} · 胎元：${eightChar.getTaiYuan()} · 命宫：${eightChar.getMingGong()}`;

    const headerEl = document.getElementById('baziSummaryHeader');
    if (headerEl) headerEl.textContent = summaryText;

    const briefEl = document.getElementById('resultStatusBrief');
    if (briefEl) briefEl.textContent = isEn ? `Calculation Complete: ${summaryText}` : `四柱八字细盘解算完成 · ${summaryText}`;
  } catch(e) {
    console.warn('Lunar preview calculation error:', e);
  }
}

// 监听生辰参数实时变更
['baziDate', 'baziTime', 'baziGender', 'baziLng'].forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener('change', () => {
      updateBaziLunarPreview();
      if (baziCalculated) {
        computeBaziMaster();
      }
    });
  }
});

// 点击“运行四柱专业细盘解算”
document.getElementById('btnRunBazi').addEventListener('click', () => {
  const btn = document.getElementById('btnRunBazi');
  if (btn) {
    btn.style.transform = 'scale(0.96)';
    btn.style.filter = 'brightness(1.2)';
    setTimeout(() => {
      btn.style.transform = '';
      btn.style.filter = '';
    }, 150);
  }

  // 展开解算结果区
  const resSection = document.getElementById('baziResultSection');
  if (resSection) {
    resSection.style.display = 'block';
  }
  baziCalculated = true;
  computeBaziMaster();
  updateBaziLunarPreview();

  // 优雅平滑滚动至排盘结果区
  if (resSection) {
    setTimeout(() => {
      resSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }
});

// 首屏纯粹展示输入区，仅初始化实时农历预览，解算结果保持隐藏
updateBaziLunarPreview();

// ==================== 六爻独立模块 ====================
let tossStep = 0;
let tossHistory = [7, 8, 7, 9, 8, 7];

document.getElementById('btnTossOneYao').addEventListener('click', () => {
  if(tossStep >= 6) return;
  const c1 = Math.random() < 0.5 ? 2 : 3;
  const c2 = Math.random() < 0.5 ? 2 : 3;
  const c3 = Math.random() < 0.5 ? 2 : 3;
  const sum = c1 + c2 + c3;
  
  document.getElementById('coinA').textContent = c1 === 3 ? '花' : '字';
  document.getElementById('coinA').className = `quantum-coin ${c1===3?'back':''}`;
  document.getElementById('coinB').textContent = c2 === 3 ? '花' : '字';
  document.getElementById('coinB').className = `quantum-coin ${c2===3?'back':''}`;
  document.getElementById('coinC').textContent = c3 === 3 ? '花' : '字';
  document.getElementById('coinC').className = `quantum-coin ${c3===3?'back':''}`;
  
  if(tossStep === 0) tossHistory = [];
  tossHistory.push(sum);
  tossStep++;
  
  if(tossStep < 6) {
    document.getElementById('coinTossStatus').textContent = `已投掷第 ${tossStep} 爻，请继续投掷第 ${tossStep + 1} 爻...`;
  } else {
    document.getElementById('coinTossStatus').textContent = `🎉 6 爻量子装配完毕！全息卦象已同步更新。`;
  }
  renderLiuyaoMatrix();
});

document.getElementById('btnResetLiuyaoDeck').addEventListener('click', () => {
  tossStep = 0;
  tossHistory = [];
  document.getElementById('coinTossStatus').textContent = '点击投掷铜钱（需投 6 次，当前第 1 爻）';
  document.getElementById('luminousLinesStack').innerHTML = '<div style="text-align:center; padding:30px; color:var(--text-faint);">请点击左侧投掷铜钱装配 6 爻</div>';
});

function renderLiuyaoMatrix() {
  const solar = Solar.fromDate(new Date());
  const lunar = solar.getLunar();
  const dGan = lunar.getDayGan();
  
  const isEn = (currentLang === 'en');
  const SIX_GODS_ZH = ["青龙", "朱雀", "勾陈", "螣蛇", "白虎", "玄武"];
  const SIX_GODS_EN = ["Azure Dragon", "Vermilion Bird", "Hook Snake", "Flying Serpent", "White Tiger", "Black Tortoise"];
  const START_MAP = { '甲':0, '乙':0, '丙':1, '丁':1, '戊':2, '己':3, '庚':4, '辛':4, '壬':5, '癸':5 };
  const sIdx = START_MAP[dGan] || 0;
  const gods = [];
  for(let i=0; i<6; i++) {
    gods.push(isEn ? SIX_GODS_EN[(sIdx + i) % 6] : SIX_GODS_ZH[(sIdx + i) % 6]);
  }
  
  const YAO_LABELS = isEn 
    ? ['Line 1 (Base)', 'Line 2', 'Line 3', 'Line 4', 'Line 5 (Ruler)', 'Line 6 (Top)']
    : ['初爻', '二爻', '三爻', '四爻', '五爻', '上爻'];
  let stackHtml = '';
  
  tossHistory.forEach((v, idx) => {
    const isDong = (v === 6 || v === 9);
    const isYang = (v === 7 || v === 9);
    const sym = isYang ? '━━━━━━━' : '━━━   ━━━';
    const symClass = isYang ? 'bar-yang' : 'bar-yin';
    let dongDesc = '';
    if (isEn) {
      dongDesc = v === 9 ? '○ (Active Yang → Yin)' : (v === 6 ? '× (Active Yin → Yang)' : 'Static');
    } else {
      dongDesc = v === 9 ? '○ (动阳变阴)' : (v === 6 ? '× (动阴变阳)' : '静爻');
    }
    
    stackHtml += `
      <div class="hex-bar-row ${isDong?'active-change':''}">
        <span style="font-weight:800; color:var(--cyan); width:${isEn?'100px':'45px'}; font-size:11px;">${gods[idx]}</span>
        <span style="color:var(--text-sub); width:${isEn?'85px':'35px'}; font-family:var(--font-mono); font-size:10px;">${YAO_LABELS[idx]}</span>
        <span class="luminous-yao-bar ${symClass}">${sym}</span>
        <span style="font-size:10px; color:${isDong?'#00F2FE':'var(--text-faint)'};">${dongDesc}</span>
      </div>
    `;
  });
  
  document.getElementById('luminousLinesStack').innerHTML = stackHtml;

  const topic = document.getElementById('liuyaoQuerySelect').value;

  // 根据当前卦变动情况与主题计算明确吉凶倾向与行动建议
  const hasDong = tossHistory.some(v => v === 6 || v === 9);
  const activeYaoCount = tossHistory.filter(v => v === 6 || v === 9).length;

  let verdictType = 'auspicious'; // 'auspicious' | 'caution' | 'neutral'
  let bannerTitle = '';
  let actionAdvice = '';

  if (activeYaoCount === 0) {
    verdictType = 'neutral';
    bannerTitle = isEn ? '⚖️ Balanced & Stable: Hold Steady Pace' : '⚖️ 蓄势持平 · 事态稳定宜守常';
    actionAdvice = isEn ? 'Recommendation: Maintain current momentum without abrupt changes. Core foundations are secure.' : '实务建议：当前格局静止无冲，局势平稳。适宜守正按部就班推进，不宜盲目冒进扩张。';
  } else if (activeYaoCount >= 3) {
    verdictType = 'caution';
    bannerTitle = isEn ? '⚠️ High Volatility: Exercise Prudence & Risk Control' : '⚠️ 多爻变动 · 局势剧变谨慎防守';
    actionAdvice = isEn ? 'Recommendation: High situational uncertainty. Secure capital liquidity, manage downside risks, and defer major binding contracts.' : '实务建议：局势变数较多，信息尚未完全对称。建议优先做好风控防守，保全现金流，暂缓重大激进决断。';
  } else {
    verdictType = 'auspicious';
    bannerTitle = isEn ? '🌟 Highly Auspicious: Actionable Window Open' : '🌟 吉利亨通 · 顺应时机主动出击';
    actionAdvice = isEn ? 'Recommendation: Favorable cosmic window. Execute strategic moves with discipline and seize upcoming opportunities.' : '实务建议：动爻生合有情，时机正盛。建议把握核心窗口期，积极推进洽谈、合作与落地推进。';
  }

  const badgeClass = verdictType === 'auspicious' 
    ? 'liuyao-badge-auspicious' 
    : (verdictType === 'caution' ? 'liuyao-badge-inauspicious' : 'liuyao-badge-caution');

  const verdictDictZH = {
    'wealth': '【商业求财】：以妻财爻为核心用神，子孙爻为财源。财爻得月建日辰生助、动而化进神者，财源亨通大吉；兄弟发动克财主破耗，宜稳妥防守。',
    'career': '【职位升迁】：以官鬼爻为功名，妻财为官之原神。官鬼旺相持世或动而生世必得晋升显贵；子孙发动克官主阻隔退步。',
    'health': '【身体病情】：世爻为自身元气，官鬼为病灶，子孙为良医药物。子孙爻旺相克鬼者，药到病除逢凶化吉。',
    'marriage_m': '【男占婚恋】：以妻财爻为女方，应爻为对方家门。财爻生合世爻主得贤良相助。',
    'marriage_f': '【女占婚恋】：以官鬼爻为夫君，应爻为男方。官星旺相持世主夫贵荣身。',
    'travel': '【远行平安】：世爻为行者，应爻为前路。世爻不逢旬空月破，一路平安顺达。',
    'exam': '【学业功名】：以父母爻为文书证书，官鬼爻为功名主考。父母官鬼两旺必登金榜。'
  };

  const verdictDictEN = {
    'wealth': '[Commercial Wealth & Profit]: Wealth line (Qi Cai) is the key focus; Offspring line (Zi Sun) is the profit source. When Wealth receives monthly and daily cosmic support, abundant financial flow follows; when Peer/Sibling lines move aggressively, protect assets with disciplined restraint.',
    'career': '[Career Promotion & Status]: Officer line (Guan Gui) governs reputation; Wealth fuels power. When Officer resides prominently on the Subject line or transforms auspiciously, high leadership advancement is assured.',
    'health': '[Vitality & Recovery]: Subject line represents vitality; Officer represents affliction; Offspring represents medicine and healers. When Offspring overcomes Officer, recovery is smooth and complete.',
    'marriage_m': '[Love & Marriage · Male Querent]: Wealth line represents partner. Harmonious combination between Wealth and Subject lines promises dedicated companionship.',
    'marriage_f': '[Love & Marriage · Female Querent]: Officer line represents partner. Auspicious Officer line brings noble and enduring partnership.',
    'travel': '[Travel & Journey]: Subject represents traveler; Object represents destination. When devoid of void clashes, journeys proceed smoothly and safely.',
    'exam': '[Academics & Credentials]: Parent line (Fu Mu) represents certificates and examinations. Both Parent and Officer thriving guarantees academic triumph.'
  };

  const verdictText = isEn ? verdictDictEN[topic] : verdictDictZH[topic];
  const verdictHeader = isEn ? '🎯 Master Yehe 《Zeng Shan Bu Yi》 Canonical Judgment' : '🎯 野鹤老人《增删卜易》理法透视断语';

  document.getElementById('liuyaoVerdictPanel').innerHTML = `
    <!-- 明确吉凶定性与行动指导横幅 -->
    <div class="liuyao-verdict-banner">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
        <span class="${badgeClass}">${bannerTitle}</span>
        <span style="font-size:11px; color:var(--text-sub);">${isEn ? 'Cast Lines: 6/6 Complete' : '六爻装配：已成卦'}</span>
      </div>
      <div class="liuyao-verdict-text">${actionAdvice}</div>
    </div>

    <!-- 古籍原本断语 -->
    <div style="background:rgba(0, 242, 254, 0.08); border:1px solid rgba(0, 242, 254, 0.35); border-radius:14px; padding:16px; box-shadow:0 0 20px rgba(0,242,254,0.15); margin-top:14px;">
      <div style="font-weight:800; color:#00F2FE; font-size:13px; margin-bottom:6px; display:flex; align-items:center; gap:6px;">
        <span>${verdictHeader}</span>
      </div>
      <div style="font-size:13px; color:#FFFFFF; line-height:1.6;">${verdictText}</div>
    </div>

    <!-- 👑 VIP 尊享：六爻应期时间精准推算与转折窗口 -->
    <div class="vip-card-gold vip-blur-container vip-locked" id="vipSectionLiuyaoTiming" style="margin-top:14px; padding:16px; border-radius:14px;">
      <div class="vip-gold-head" style="margin-bottom:10px;">
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="vip-badge-pill" id="vipBadgeLiuyao">👑 VIP 应期推演</span>
          <span style="font-weight:900; font-size:13.5px; color:#FBBF24;">《增删卜易》时间应期与事态转折窗口</span>
        </div>
      </div>
      <div class="vip-blur-target" id="liuyaoTimingContent">
        <!-- 动态生成动爻与日建冲合应期 -->
        <div style="font-size:12.5px; color:#F1F5F9; line-height:1.6;">
          <div style="display:flex; gap:12px; margin-bottom:8px; flex-wrap:wrap;">
            <div style="background:rgba(245,158,11,0.15); border:1px solid rgba(245,158,11,0.3); border-radius:8px; padding:6px 12px;">
              <span style="color:#F59E0B; font-weight:800; font-size:11px;">⏰ 关键应期地支：</span>
              <strong style="color:#FFF;">${hasDong ? '逢合待冲 · 辰戌丑未月日' : '静而待发 · 逢冲之月令'}</strong>
            </div>
            <div style="background:rgba(16,185,129,0.15); border:1px solid rgba(16,185,129,0.3); border-radius:8px; padding:6px 12px;">
              <span style="color:#10B981; font-weight:800; font-size:11px;">🗓️ 大致转机周期：</span>
              <strong style="color:#FFF;">未来 15 ~ 45 天内事态落地</strong>
            </div>
          </div>
          <p style="color:#CBD5E1; font-size:12px;">
            【法理密旨】：卦中动爻化进者，事态发展迅疾；逢日辰生扶，应在生旺之日。目前世应生合，待关键冲合之日（农历中旬前后）必有决定性消息反馈。
          </p>
        </div>
      </div>
      <div class="vip-lock-overlay">
        <div class="vip-lock-icon">⏰</div>
        <div class="vip-lock-title">👑 解锁六爻精准时间应期推演</div>
        <div class="vip-lock-desc">
          基于动静虚实与日月建神煞，推断问卜事项的最可能落地时间窗口与化解良机。
        </div>
        <button type="button" class="btn-vip-unlock" onclick="handleVipUnlockClick('liuyao')">
          <span>✨ 解锁时间应期分析</span>
        </button>
      </div>
    </div>
  `;
}
renderLiuyaoMatrix();

// ==================== 字典与图谱渲染 (支持点击弹窗查阅古籍) ====================
const GANZHI_ITEMS = [
  "甲子","乙丑","丙寅","丁卯","戊辰","己巳","庚午","辛未","壬申","癸酉",
  "甲戌","乙亥","丙子","丁丑","戊寅","己卯","庚辰","辛巳","壬午","癸未",
  "甲申","乙酉","丙戌","丁亥","戊子","己丑","庚寅","辛卯","壬辰","癸巳",
  "甲午","乙未","丙申","丁酉","戊戌","己亥","庚子","辛丑","壬寅","癸卯",
  "甲辰","乙巳","丙午","丁未","戊申","己酉","庚戌","辛亥","壬子","癸丑",
  "甲寅","乙卯","丙辰","丁巳","戊午","己未","庚申","辛酉","壬戌","癸亥"
];
const NAYIN_NAMES = [
  "海中金","海中金","炉中火","炉中火","大林木","大林木","路旁土","路旁土","剑锋金","剑锋金",
  "山头火","山头火","涧下水","涧下水","城头土","城头土","白蜡金","白蜡金","杨柳木","杨柳木",
  "泉中水","泉中水","屋上土","屋上土","霹雳火","霹雳火","松柏木","松柏木","长流水","长流水",
  "沙中金","沙中金","山下火","山下火","平地木","平地木","壁上土","壁上土","金箔金","金箔金",
  "覆灯火","覆灯火","天河水","天河水","大驿土","大驿土","钗钏金","钗钏金","桑柘木","桑柘木",
  "大溪水","大溪水","沙中土","沙中土","天上火","天上火","石榴木","石榴木","大海水","大海水"
];

const HEX_NAMES = (typeof ALL_64_HEX_NAMES !== 'undefined' && ALL_64_HEX_NAMES.length === 64)
  ? ALL_64_HEX_NAMES
  : ((window.ALL_64_HEX_NAMES && window.ALL_64_HEX_NAMES.length === 64)
      ? window.ALL_64_HEX_NAMES
      : [
  "乾为天", "天风姤", "天山遁", "天地否", "风地观", "山地剥", "火地晋", "火天大有",
  "坎为水", "水泽节", "水雷屯", "水火既济", "泽火革", "雷火丰", "地火明夷", "地水师",
  "艮为山", "山火贲", "山天大畜", "山泽损", "火泽睽", "天泽履", "风泽中孚", "风山渐",
  "震为雷", "雷地豫", "雷水解", "雷风恒", "地风升", "水风井", "泽风大过", "泽雷随",
  "巽为风", "风天小畜", "风火家人", "风雷益", "天雷无妄", "火雷噬嗑", "山雷颐", "山风蛊",
  "离为火", "火山旅", "火风鼎", "火水未济", "山水蒙", "风水涣", "天水讼", "天火同人",
  "坤为地", "地雷复", "地泽临", "地天泰", "雷天大壮", "泽天夬", "水天需", "水地比",
  "兑为泽", "泽水困", "泽地萃", "泽山咸", "水山蹇", "地山谦", "雷山小过", "雷泽归妹"
]);

const SHENSHA_ITEMS = [
  { name: "天乙贵人", desc: "吉神尊首 · 百煞潜藏" },
  { name: "天德月德", desc: "福寿吉神 · 逢凶化吉" },
  { name: "德秀贵人", desc: "聪明才智 · 文采斐然" },
  { name: "天厨贵人", desc: "食禄丰盈 · 衣食无忧" },
  { name: "福星贵人", desc: "安康福寿 · 润物无声" },
  { name: "文昌贵人", desc: "学业功名 · 才思敏捷" },
  { name: "国印贵人", desc: "权柄信誉 · 执掌印绶" },
  { name: "禄神",     desc: "爵禄天成 · 食禄万钟" },
  { name: "金舆",     desc: "华车荫庇 · 贤配富足" },
  { name: "将星",     desc: "统帅领导 · 大将之风" },
  { name: "华盖",     desc: "哲思高蹈 · 孤高卓绝" },
  { name: "驿马",     desc: "奔走跃迁 · 迁徙高升" },
  { name: "咸池桃花", desc: "风流艺术 · 姿容出众" },
  { name: "红艳煞",   desc: "容貌姝丽 · 异性缘盛" },
  { name: "羊刃",     desc: "刚烈司刑 · 护身利刃" },
  { name: "飞刃",     desc: "机敏威严 · 遇险生智" },
  { name: "魁罡贵人", desc: "威权果决 · 智勇双全" },
  { name: "词馆学堂", desc: "文章锦绣 · 才高八斗" },
  { name: "劫煞亡神", desc: "敏锐勇决 · 深谋远虑" },
  { name: "披麻吊客", desc: "警惕慎行 · 居安思危" },
  { name: "太极贵人", desc: "玄学灵性 · 终始周全" },
  { name: "天赦贵人", desc: "宽刑赦罪 · 绝处逢生" },
  { name: "三奇贵人", desc: "襟怀博大 · 命世英才" },
  { name: "天医星",   desc: "岐黄仁术 · 身心安泰" }
];

function renderCodexGrids() {
  const isEn = (currentLang === 'en');
  const dict = I18N_DICT[currentLang] || I18N_DICT['zh'];

  const ganzhiEl = document.getElementById('ganzhiBentoGrid');
  if (ganzhiEl && typeof GANZHI_ITEMS !== 'undefined') {
    ganzhiEl.innerHTML = GANZHI_ITEMS.map((gz, idx) => `
      <div class="codex-item-bento" style="cursor:pointer;" onclick="openGanzhiModal('${gz}')">
        <div style="font-family:var(--font-serif); font-size:18px; font-weight:900; color:#FFF; margin-bottom:4px;">${gz}</div>
        <div style="font-size:11px; color:var(--cyan); font-family:var(--font-mono);">${NAYIN_NAMES[idx] || ''}</div>
        <div style="font-size:9.5px; color:var(--text-faint); margin-top:4px;">${dict.clickReadClassic || '点击查阅古籍 ➔'}</div>
      </div>
    `).join('');
  }

  const hexEl = document.getElementById('hex64BentoGrid');
  if (hexEl && typeof HEX_NAMES !== 'undefined') {
    hexEl.innerHTML = HEX_NAMES.map((name, idx) => `
      <div class="codex-item-bento" style="cursor:pointer;" onclick="openHexModal('${name}')">
        <div style="font-family:var(--font-serif); font-size:16px; font-weight:900; color:#FFF; margin-bottom:4px;">${name}</div>
        <div style="font-size:11px; color:var(--purple); font-family:var(--font-mono);">${isEn ? `Hexagram #${idx+1}` : `第 ${idx+1} 卦`}</div>
        <div style="font-size:9.5px; color:var(--text-faint); margin-top:4px;">${dict.clickHexDetail || '《周易》经义 ➔'}</div>
      </div>
    `).join('');
  }

  const shenshaEl = document.getElementById('shenshaBentoGrid');
  if (shenshaEl && typeof SHENSHA_ITEMS !== 'undefined') {
    shenshaEl.innerHTML = SHENSHA_ITEMS.map(s => `
      <div class="codex-item-bento" style="cursor:pointer;" onclick="openShenshaModal('${s.name}')">
        <div style="font-family:var(--font-serif); font-size:16px; font-weight:900; color:var(--cyan); margin-bottom:4px;">${s.name}</div>
        <div style="font-size:11px; color:var(--text-sub);">${s.desc}</div>
        <div style="font-size:9.5px; color:var(--text-faint); margin-top:4px;">${dict.clickShenshaDetail || '《三命通会》详论 ➔'}</div>
      </div>
    `).join('');
  }
}
renderCodexGrids();

// ==================== 全息古籍秘典弹窗控制函数 ====================
function openGanzhiModal(gz) {
  const data = (window.GANZHI_EXPANDED_DB && window.GANZHI_EXPANDED_DB[gz]) || {
    nayin: "六十甲子",
    nature: `【${gz}】日元属性与格局`,
    canggan: "地支藏干五行生克",
    sanming: `《三命通会》：“${gz}纳音纯和，生逢吉令，衣禄崇隆。”`,
    yuanhai: `《渊海子平》：“${gz}日柱，审月令喜忌，顺应天道。”`,
    tiyao: `徐乐吾注：“${gz}日元，配合四时气候，相生相化。”`
  };

  const trans = (typeof window.parseGanzhiBaihua === 'function')
    ? window.parseGanzhiBaihua(gz, data)
    : {
        sanmingTrans: `《三命通会》阐述：纳音气象醇和厚重，得五行调济者衣禄丰厚。`,
        yuanhaiTrans: `《渊海子平》阐述：干支为用，配合月令喜忌调和发福。`,
        tiyaoTrans: `徐乐吾八字提要阐述：参配四时寒暖燥湿，调候得宜自成佳构。`
      };

  document.getElementById('modalBadge').textContent = '六十甲子秘典';
  document.getElementById('modalTitle').textContent = `【${gz}】${data.nayin} · 古籍全息引证`;
  document.getElementById('modalSubtitle').textContent = `GANZHI CODEX · ${data.nature} · ${data.canggan}`;

  document.getElementById('modalBody').innerHTML = `
    <div class="modal-quote-card">
      <div class="modal-quote-head">📙《三命通会》万民英论【${gz}】纳音象义与格局源流</div>
      <div class="modal-quote-text">${data.sanming}</div>
      <div class="modal-trans-box"><span class="trans-label">💡【白话翻译】：</span>${trans.sanmingTrans}</div>
    </div>
    <div class="modal-quote-card">
      <div class="modal-quote-head">📜《渊海子平》十干坐支论【${gz}】日元性情与行运喜忌</div>
      <div class="modal-quote-text">${data.yuanhai}</div>
      <div class="modal-trans-box"><span class="trans-label">💡【白话翻译】：</span>${trans.yuanhaiTrans}</div>
    </div>
    <div class="modal-quote-card">
      <div class="modal-quote-head">🏛️《八字提要》民国·徐乐吾干支时盘详论</div>
      <div class="modal-quote-text">${data.tiyao}</div>
      <div class="modal-trans-box"><span class="trans-label">💡【白话翻译】：</span>${trans.tiyaoTrans}</div>
    </div>
  `;

  document.getElementById('classicDetailModal').classList.add('open');
}
window.openGanzhiModal = openGanzhiModal;

// 纳音专属全息古籍弹窗
function openNayinModal(gz, nayin) {
  const nyData = (window.NAYIN_EXPANDED_DB && window.NAYIN_EXPANDED_DB[nayin]) || {
    wuxing: nayin ? nayin.slice(-1) : "五行",
    ganzhi: gz,
    sanming: `《三命通会·论六十甲子纳音》：“夫纳音者，始于黄钟之数，三十纳音各循五行律吕。${nayin}得天地造化之英华，禀阴阳聚散之正气。”`,
    xiangyi: `【纳音象义】：${nayin}象征命局独特的生命气象与心智频率。才性内蓄清华，顺应四时生克变化，具极深发展底蕴。`,
    xiji: `【五行生克与吉凶】：凡命中遇${nayin}，喜逢生旺之月令，逢生扶则格局清纯，逢克破则须详辨制化之机。`
  };

  const gzData = (window.GANZHI_EXPANDED_DB && window.GANZHI_EXPANDED_DB[gz]) || {};

  document.getElementById('modalBadge').textContent = '纳音秘典 · 三命通会';
  document.getElementById('modalTitle').textContent = `【${gz} · ${nayin}】纳音五行与古籍全息引证`;
  document.getElementById('modalSubtitle').textContent = `NAYIN CODEX · 纳音属${nyData.wuxing || ''} · ${gz}柱位原局象义`;

  let gzCard = gzData.sanming ? `
    <div class="modal-quote-card">
      <div class="modal-quote-head">🏛️《三命通会》【${gz}】干支格局与坐支精要</div>
      <div class="modal-quote-text">${gzData.sanming}</div>
      <div class="modal-trans-box"><span class="trans-label">💡【白话翻译】：</span>万民英论此日柱：干支得纳音相生相辅，坐支内蕴生机，行运配合全局喜忌则名利双全。</div>
    </div>
  ` : '';

  const nayinPureXiangyi = nyData.xiangyi ? nyData.xiangyi.replace(/【纳音象义】：/, '') : '象征个人深层气质与潜在能量禀赋。';

  document.getElementById('modalBody').innerHTML = `
    <div class="modal-quote-card">
      <div class="modal-quote-head">📙《三命通会·论六十甲子纳音》【${nayin}】源流与本象论</div>
      <div class="modal-quote-text">${nyData.sanming}</div>
      <div class="modal-trans-box"><span class="trans-label">💡【白话翻译】：</span>万民英考证源流指出：【${nayin}】为天地五行凝聚之特殊气象。${nayinPureXiangyi}</div>
    </div>
    <div class="modal-quote-card">
      <div class="modal-quote-head">🌊【${nayin}】命理象义、性格气场与现代启示</div>
      <div class="modal-quote-text">${nyData.xiangyi}</div>
    </div>
    <div class="modal-quote-card">
      <div class="modal-quote-head">⚖️【${nayin}】五行生克喜忌与用神权衡</div>
      <div class="modal-quote-text">${nyData.xiji}</div>
    </div>
    ${gzCard}
  `;

  document.getElementById('classicDetailModal').classList.add('open');
}
window.openNayinModal = openNayinModal;

function openHexModal(name) {
  const data = (window.HEX_EXPANDED_DB && window.HEX_EXPANDED_DB[name]) || {
    num: 1,
    palace: "易经六十四卦",
    guaci: `《周易·${name}》卦辞：元亨利贞。`,
    tuan: `《彖传·${name}》：顺天应时，保合太和。`,
    xiang: `《象传·${name}》：君子以自强不息，厚德载物。`,
    zengshan: `《增删卜易》：占得${name}，宜辨用神之动静生克。`,
    xiangshu: `卦德意蕴：天地之数，阴阳交泰。`
  };

  const trans = (typeof window.parseHexBaihua === 'function')
    ? window.parseHexBaihua(name, data)
    : {
        guaciTrans: `卦辞本义：揭示事物特定转化节点，守正趋吉避凶。`,
        tuanTrans: `彖传阐释天道刚柔相推之理，顺应时势以成其功。`,
        xiangTrans: `大象启迪君子修德立身，自昭明德，厚重致远。`,
        zengshanTrans: `野鹤实占秘解：审察用神衰旺动静，谋定而后动。`
      };

  document.getElementById('modalBadge').textContent = '周易与六爻秘典';
  document.getElementById('modalTitle').textContent = `【第 ${data.num} 卦 · ${name}】${data.palace}`;
  document.getElementById('modalSubtitle').textContent = `HEXAGRAM CANON · ${data.xiangshu}`;

  document.getElementById('modalBody').innerHTML = `
    <!-- 古籍原本引证及对应白话翻译 -->
    <div class="modal-quote-card">
      <div class="modal-quote-head">📜《周易》经文本义 · 卦辞</div>
      <div class="modal-quote-text">${data.guaci}</div>
      <div class="modal-trans-box"><span class="trans-label">💡【白话翻译】：</span>${trans.guaciTrans}</div>
    </div>
    <div class="modal-quote-card">
      <div class="modal-quote-head">☯️《易经·彖传》夫子释卦义</div>
      <div class="modal-quote-text">${data.tuan}</div>
      <div class="modal-trans-box"><span class="trans-label">💡【白话翻译】：</span>${trans.tuanTrans}</div>
    </div>
    <div class="modal-quote-card">
      <div class="modal-quote-head">🌿《易经·象传》大象释德行</div>
      <div class="modal-quote-text">${data.xiang}</div>
      <div class="modal-trans-box"><span class="trans-label">💡【白话翻译】：</span>${trans.xiangTrans}</div>
    </div>
    <div class="modal-quote-card">
      <div class="modal-quote-head">🔮 清·野鹤老人《增删卜易》六爻实占秘解</div>
      <div class="modal-quote-text">${data.zengshan}</div>
      <div class="modal-trans-box"><span class="trans-label">💡【白话翻译】：</span>${trans.zengshanTrans}</div>
    </div>
  `;

  document.getElementById('classicDetailModal').classList.add('open');
}
window.openHexModal = openHexModal;

function openShenshaModal(name) {
  let data = (window.SHENSHA_EXPANDED_DB && window.SHENSHA_EXPANDED_DB[name]);
  if (!data && window.SHENSHA_EXPANDED_DB) {
    for (const key of Object.keys(window.SHENSHA_EXPANDED_DB)) {
      if (key.includes(name) || name.includes(key) || (name.includes('德') && key.includes('德'))) {
        data = window.SHENSHA_EXPANDED_DB[key];
        break;
      }
    }
  }
  const sanmingFallback = (typeof SANMING_DB !== 'undefined' && SANMING_DB[name])
    ? SANMING_DB[name]
    : `《三命通会·论${name}》：“凡命中遇${name}者，须参合四柱生克制化与格局喜忌而定。”`;

  const fallbackData = {
    type: "星曜神煞",
    qili: "四柱干支多维推演起例",
    sanming: sanmingFallback,
    yuanhai: `《渊海子平》：“吉神得令福力倍增，凶煞有制反生威权。”`,
    jiexi: `【实务断法】：${name}在四柱中各具枢机，逢生扶则吉神更贵，逢制化则凶煞呈威。`
  };

  const finalData = data || fallbackData;
  const trans = (typeof window.parseShenshaBaihua === 'function')
    ? window.parseShenshaBaihua(name, finalData)
    : {
        sanmingTrans: `万民英考证源流指出：【${name}】为命局关键神煞，遇吉神护佑逢凶化吉。`,
        yuanhaiTrans: `古法断诀歌提要：此星生旺得位且不受刑冲破害时福泽深厚。`,
        jiexiTrans: `实务对策：顺境乘胜追击，面临关煞时修心稳进，知命而善用命。`
      };

  document.getElementById('modalBadge').textContent = `${finalData.type || '星曜神煞'} · 神煞秘典`;
  document.getElementById('modalTitle').textContent = `【${name}】万民英《三命通会》原著考证`;
  document.getElementById('modalSubtitle').textContent = `SHENSHA CANON · 起例歌诀：${finalData.qili || '干支推演'}`;

  document.getElementById('modalBody').innerHTML = `
    <!-- 古籍原本引证及对应白话翻译 -->
    <div class="modal-quote-card">
      <div class="modal-quote-head">📙《三命通会》明·万民英论【${name}】神煞源流考与吉凶真机</div>
      <div class="modal-quote-text">${finalData.sanming || sanmingFallback}</div>
      <div class="modal-trans-box"><span class="trans-label">💡【白话翻译】：</span>${trans.sanmingTrans}</div>
    </div>
    <div class="modal-quote-card">
      <div class="modal-quote-head">📜《渊海子平》《星平会海》吉凶断诀歌</div>
      <div class="modal-quote-text">${finalData.yuanhai || '吉神护身，逢凶化吉。'}</div>
      <div class="modal-trans-box"><span class="trans-label">💡【白话翻译】：</span>${trans.yuanhaiTrans}</div>
    </div>
    <div class="modal-quote-card">
      <div class="modal-quote-head">🏛️ 传统命理实务生克制化精义</div>
      <div class="modal-quote-text">${finalData.jiexi || '审察四柱喜忌，顺应运势转化。'}</div>
      <div class="modal-trans-box"><span class="trans-label">💡【白话翻译】：</span>${trans.jiexiTrans}</div>
    </div>
  `;

  document.getElementById('classicDetailModal').classList.add('open');
}
window.openShenshaModal = openShenshaModal;

// 弹窗关闭与控制函数
function closeClassicModal() {
  const modal = document.getElementById('classicDetailModal');
  if(modal) {
    modal.classList.remove('open');
  }
}
window.closeClassicModal = closeClassicModal;

const btnClose = document.getElementById('btnModalClose');
if(btnClose) {
  btnClose.addEventListener('click', closeClassicModal);
}

const modalBackdrop = document.getElementById('classicDetailModal');
if(modalBackdrop) {
  modalBackdrop.addEventListener('click', (e) => {
    if(e.target === modalBackdrop) {
      closeClassicModal();
    }
  });
}

// ==================== 👑 VIP 全息推演与高阶工具核心引擎 ====================
let isAuroraVip = localStorage.getItem('aurora_vip_active') === 'true';

// 开发者隐藏调试模式开关：连续点击顶部 Logo 3 次，或控制台调用 auroraVipTest(true/false)
let logoClickCount = 0;
let logoClickTimer = null;
const brandLogoBadge = document.querySelector('.logo-badge');
if (brandLogoBadge) {
  brandLogoBadge.style.cursor = 'pointer';
  brandLogoBadge.title = "极光易学";
  brandLogoBadge.addEventListener('click', (e) => {
    e.preventDefault();
    logoClickCount++;
    clearTimeout(logoClickTimer);
    logoClickTimer = setTimeout(() => { logoClickCount = 0; }, 900);
    if (logoClickCount >= 3) {
      logoClickCount = 0;
      toggleAuroraVipState();
    }
  });
}

function showVipToast(msg) {
  let toast = document.getElementById('auroraVipToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'auroraVipToast';
    toast.className = 'vip-toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>👑</span><span>${msg}</span>`;
  toast.classList.add('show');
  setTimeout(() => { toast.classList.remove('show'); }, 3000);
}

function updateVipDOMState() {
  const containers = document.querySelectorAll('.vip-blur-container');
  containers.forEach(el => {
    if (isAuroraVip) {
      el.classList.remove('vip-locked');
      el.classList.add('vip-unlocked');
    } else {
      el.classList.remove('vip-unlocked');
      el.classList.add('vip-locked');
    }
  });

  // 更新所有局部雾化标签 (inline-blur)
  const inlineBlurs = document.querySelectorAll('.inline-blur');
  inlineBlurs.forEach(el => {
    if (isAuroraVip) {
      el.classList.add('revealed');
      el.removeAttribute('title');
    } else {
      el.classList.remove('revealed');
      el.setAttribute('title', '🔒 点击结缘解锁关键天机');
    }
  });

  // 更新小胶囊颜色与字样
  const badges = ['vipBadgeYearly', 'vipBadgeWealth', 'vipBadgeMarriage', 'vipBadgeRemedy', 'vipBadgeLiuyao'];
  badges.forEach(id => {
    const b = document.getElementById(id);
    if (b) {
      if (isAuroraVip) {
        b.classList.add('vip-badge-unlocked');
        b.textContent = '👑 VIP 已尊享解锁';
      } else {
        b.classList.remove('vip-badge-unlocked');
        b.textContent = (id === 'vipBadgeYearly' ? '👑 VIP 尊享流年' : id === 'vipBadgeWealth' ? '👑 VIP 财富专卷' : id === 'vipBadgeMarriage' ? '👑 VIP 姻缘专卷' : id === 'vipBadgeRemedy' ? '👑 VIP 开运解药' : '👑 VIP 应期推演');
      }
    }
  });
}

function toggleAuroraVipState() {
  isAuroraVip = !isAuroraVip;
  localStorage.setItem('aurora_vip_active', isAuroraVip ? 'true' : 'false');
  updateVipDOMState();
  if (isAuroraVip) {
    showVipToast("已切换至【👑 SVIP 尊享全量解锁模式】！所有天机已清晰呈显。");
  } else {
    showVipToast("已切换至【普通用户锁定模式】（局部天机雾化与金锁生效中）。");
  }
}
window.auroraVipTest = function(state) {
  if (typeof state === 'boolean') {
    isAuroraVip = state;
    localStorage.setItem('aurora_vip_active', isAuroraVip ? 'true' : 'false');
    updateVipDOMState();
    showVipToast(isAuroraVip ? "已开启 SVIP 预览模式" : "已恢复锁定模式");
  } else {
    toggleAuroraVipState();
  }
};

window.handleVipUnlockClick = function(featureKey) {
  const modal = document.getElementById('psychPayModal');
  if (modal) {
    modal.classList.add('open');
  } else {
    toggleAuroraVipState();
  }
};

window.closePsychPayModal = function() {
  const modal = document.getElementById('psychPayModal');
  if (modal) {
    modal.classList.remove('open');
  }
};

window.confirmVipUnlockSuccess = function() {
  isAuroraVip = true;
  localStorage.setItem('aurora_vip_active', 'true');
  updateVipDOMState();
  closePsychPayModal();
  showVipToast("🎉 恭喜结缘成功！已为您尊享买断未来 5 年流年全息详批与命局解药，所有天机已清晰呈显！");
};

// ==================== 1~5: 八字五大 VIP 专项算法引擎 (心理学强化版) ====================
function computeVipModules(ctx) {
  const { yG, yZ, mG, mZ, dG, dZ, tG, tZ, dayMaster, isMale, isEn, elemScores, totalScore,
    birthYear, curYear = 2026, curAge = 35, activeDaYun, dyPassed = 4, dyRemainYears = 5, dyRemainMonths = 6 } = ctx;
  const dict = I18N_DICT[currentLang] || I18N_DICT['zh'];

  // ==================== 1. 损失厌恶与深度冷读 (Loss Aversion & Barnum Cold Reading) ====================
  const soulBox = document.getElementById('psychSoulColdRead');
  const leakBox = document.getElementById('psychWealthHole');
  if (soulBox && leakBox) {
    // 日主灵魂深层冷读字典 (直击内心无人知晓的委屈与防备)
    const dmSoulDict = {
      '甲': '【参天巨木·孤傲与自愈】：外人看你坚定沉稳、有担当、有主见，但极少有人知道你内心的疲倦与孤独。你最讨厌被道德绑架和被当成理所当然的依靠；过去几年你习惯做别人的大树，一个人咽下所有委屈，极度渴望被真正懂你的人呵护与认可。',
      '乙': '【藤萝系甲·隐忍与边界】：你外表温和随和、善解人意，但骨子里有极强的原则底线。你重情义但最讨厌被画饼，一旦被触碰底线便会悄无声息地关闭心门。过去数年你常因心软替别人善后，内心积压了不少付出得不到对等回馈的暗伤。',
      '丙': '【烈日当空·热情与虚空】：在任何场合你都是散发正能量、照顾全场体面的核心角色，但深夜独处时的巨大空虚与被透支感只有你自己知道。你把欢笑给了大家，把疲惫留给枕头。过去几年你经历过付出了全部真心却在关键时刻被冷落的深刻刺痛。',
      '丁': '【烛光幽微·敏感与洞悉】：你感知力极强、心思细腻，能一眼看穿别人的情绪变化，但也因此容易自我内耗。你表面波澜不惊，内心其实渴望纯粹极致的爱与认同。过去几年你为家庭或所爱之人操碎了心，却常常觉得没人在乎你累不累。',
      '戊': '【厚土载物·守信与重负】：你是个极度讲信用、有托必应的老实人，宁可自己吃亏也不愿负人。但这份忠厚往往成了别人索取无度的筹码。你心软不善拒绝，背负了许多本不该属于你的重担，内心经常渴望彻底卸下铠甲好好歇一歇。',
      '己': '【田园沃土·包容与内敛】：你性格温润、包容力极强，习惯照顾所有人的感受。但正因你总是把情绪藏在心底，别人常常忽略了你的委屈。过去数年你默默消化了太多的委屈与妥协，内心极度需要一个能给你绝对安全感与支撑的港湾。',
      '庚': '【利剑锋芒·清醒与防备】：你身上有天然的凛然正气与犀利直觉，最厌恶虚伪、敷衍与算计。你披着坚硬铠甲，对生人礼貌疏离，但只要谁走进你心里，你便掏心掏肺。可也正因这份真挚，你过去踩过被背刺、背信弃义的深坑，从此更难交心。',
      '辛': '【温润美玉·自尊与孤芳】：你骨子里自尊心极强，追求极致与体面，外表高冷但内心细腻柔软。你最害怕被轻视和误解，习惯打落牙齿和血吞。过去几年你经历过才华被压制或在关系里委曲求全的暗痛，现在你急需打一场翻身仗。',
      '壬': '【江河奔流·远见与漂泊】：你聪明通透、胸怀宽广，对商业和人性有着惊人的洞察力。表面云淡风轻看似不争，实则内心对未来的不确定感常有隐隐焦虑。你常常在“随性躺平”与“拼死破局”之间反复拉扯，极需一个定海神针。',
      '癸': '【春雨润物·灵动与纠结】：你极其聪明灵动、第六感极准，常常能提前预判事态走向。但你容易想得太深、太远，以致于常常陷入自己制造的忧虑漩涡。过去几年在感情或发展方向上，你反复纠结取舍，消耗了大量宝贵的精神元气。'
    };

    soulBox.innerHTML = `
      <div style="font-size:12px; color:#E2E8F0; line-height:1.65;">
        ${dmSoulDict[dayMaster] || dmSoulDict['甲']}
      </div>
    `;

    // 命局最大漏财死穴 (损失厌恶机制 + 局部雾化)
    const dmElem = GAN_PROPS[dayMaster][0];
    leakBox.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:8px; font-size:12px; color:#E2E8F0; line-height:1.65;">
        <div>
          <span style="color:#EF4444; font-weight:800;">【命门暗礁诊断】：</span>
          命局受五行${dmElem}性气场牵引，命中伏藏<span class="inline-blur" onclick="handleVipUnlockClick('loss')">比劫夺财与官杀反噬</span>之势，一生最易在<span class="inline-blur" onclick="handleVipUnlockClick('loss')">熟人借贷/共同合伙/冲动跨界</span>上蒙受至少<span class="inline-blur" onclick="handleVipUnlockClick('loss')">五位数以上</span>的资金暗耗。
        </div>
        <div style="background:rgba(239,68,68,0.12); border-left:3px solid #EF4444; padding:6px 10px; border-radius:4px;">
          <strong style="color:#FCA5A5;">⚠️ 近期高危窗口警示：</strong>
          在未来流年农历<span class="inline-blur" onclick="handleVipUnlockClick('loss')">五月、七月及未月</span>存在重大资金断流风险，切忌替他人背书担保；化解对策须启动<span class="inline-blur" onclick="handleVipUnlockClick('loss')">正印通关与资产防火墙契约对冲</span>。
        </div>
      </div>
    `;
  }

  // ==================== 2. 紧迫感与 FOMO · 当前十年大运倒计时 ====================
  const dyNameEl = document.getElementById('psychCurDayunName');
  const dyPassedEl = document.getElementById('psychCurDayunPassed');
  const dyRemainEl = document.getElementById('psychCurDayunRemain');
  const dyBarEl = document.getElementById('psychUrgencyBar');
  if (dyNameEl && dyPassedEl && dyRemainEl && dyBarEl) {
    const dyGz = activeDaYun ? activeDaYun.getGanZhi() : '当前';
    const sAge = activeDaYun ? activeDaYun.getStartAge() : (curAge - 3);
    const eAge = activeDaYun ? activeDaYun.getEndAge() : (curAge + 6);
    dyNameEl.textContent = `${dyGz}大运 (${sAge}~${eAge}岁)`;
    dyPassedEl.textContent = `${dyPassed}`;
    dyRemainEl.textContent = `${dyRemainYears} 年 ${dyRemainMonths} 个月`;
    const pct = Math.min(100, Math.max(10, Math.round((dyPassed / 10) * 100)));
    dyBarEl.style.width = `${pct}%`;
  }

  // ==================== 3. 未来五年流年逐年详批 (蔡加尼克局部雾化) ====================
  const yearlyDeck = document.getElementById('vipYearlyCardsRow');
  if (yearlyDeck) {
    const futureYears = [
      { y: 2026, gz: '丙午', naYin: '天河水', tg: '丙', dz: '午',
        teaser: `流年见财官交汇，资金流呈剧烈激荡。上半年农历<span class="inline-blur" onclick="handleVipUnlockClick('yearly')">五月与六月</span>将迎来一笔不低于<span class="inline-blur" onclick="handleVipUnlockClick('yearly')">五位数</span>的现金流异动或跨界合伙契机，但切记避开生肖属<span class="inline-blur" onclick="handleVipUnlockClick('yearly')">鼠/牛</span>的合作方，防范<span class="inline-blur" onclick="handleVipUnlockClick('yearly')">隐形借贷担保与口舌官非</span>。` },
      { y: 2027, gz: '丁未', naYin: '天河水', tg: '丁', dz: '未',
        teaser: `丁火透出，流年与命局产生深度合化。下半年农历<span class="inline-blur" onclick="handleVipUnlockClick('yearly')">九月戌月</span>有贵人生肖属<span class="inline-blur" onclick="handleVipUnlockClick('yearly')">马或兔</span>暗中助推，职场或副业将迎来一次关键的<span class="inline-blur" onclick="handleVipUnlockClick('yearly')">赛道切换与权力洗牌</span>，务必警惕<span class="inline-blur" onclick="handleVipUnlockClick('yearly')">盲目重资产扩张</span>。` },
      { y: 2028, gz: '戊申', naYin: '大驿土', tg: '戊', dz: '申',
        teaser: `大驿土临值，驿马星动，出现明显的跨地域、跳槽或置业迁徙之象。农历<span class="inline-blur" onclick="handleVipUnlockClick('yearly')">七月申月</span>利于<span class="inline-blur" onclick="handleVipUnlockClick('yearly')">大额固定资产购置或晋升答辩</span>，但在签署合同时需重点防范<span class="inline-blur" onclick="handleVipUnlockClick('yearly')">第三人隐形债务与文书漏洞</span>。` },
      { y: 2029, gz: '己酉', naYin: '大驿土', tg: '己', dz: '酉',
        teaser: `酉金主事，桃花与贵人气息浓郁，人脉网络迎来高光爆发。上半年若推进<span class="inline-blur" onclick="handleVipUnlockClick('yearly')">品牌IP打造与资源整合</span>回报率最高，感情方面则需防范<span class="inline-blur" onclick="handleVipUnlockClick('yearly')">烂桃花干扰正缘发展</span>。` },
      { y: 2030, gz: '庚戌', naYin: '钗钏金', tg: '庚', dz: '戌',
        teaser: `魁罡戌土带印，五年大运能量总结之年，进入财富积累厚积薄发期。农历<span class="inline-blur" onclick="handleVipUnlockClick('yearly')">三月与十月</span>有一笔预料之外的<span class="inline-blur" onclick="handleVipUnlockClick('yearly')">被动投资收益或分红结项</span>，适宜<span class="inline-blur" onclick="handleVipUnlockClick('yearly')">锁定长期利润，落袋为安</span>。` }
    ];

    let cardsHtml = '';
    futureYears.forEach(item => {
      const ssZh = getShiShen(dayMaster, item.tg);
      const ssText = isEn ? (SHISHEN_EN_MAP[ssZh] || ssZh) : ssZh;
      
      let tagClass = 'tag-neutral-year';
      let tagText = isEn ? 'Steady Transit' : '平稳过渡年';

      if (ssZh.includes('财')) {
        tagClass = 'tag-wealth-year';
        tagText = isEn ? '💰 Wealth Window' : '💰 财源开拓年';
      } else if (ssZh.includes('官') || ssZh.includes('杀')) {
        tagClass = 'tag-caution-year';
        tagText = isEn ? '🏆 Career & Authority' : '🏆 职场进阶与权责';
      } else if (ssZh.includes('食') || ssZh.includes('伤')) {
        tagClass = 'tag-love-year';
        tagText = isEn ? '💡 Innovation & Flow' : '💡 创意爆发与灵感';
      }

      cardsHtml += `
        <div class="vip-year-card">
          <div class="vip-year-head">
            <strong style="color:#FFF; font-size:14px; font-family:var(--font-serif);">${item.y} ${item.gz}年</strong>
            <span class="vip-year-tag ${tagClass}">${tagText}</span>
          </div>
          <div style="font-size:11px; color:#F59E0B; font-weight:700;">十神：${ssText} · 纳音：${item.naYin}</div>
          <div style="font-size:11.5px; color:#CBD5E1; line-height:1.55; margin-top:4px;">${item.teaser}</div>
        </div>
      `;
    });
    yearlyDeck.innerHTML = cardsHtml;
  }

  // 关键年龄预警
  const peakTextEl = document.getElementById('vipPeakAgesText');
  if (peakTextEl) {
    peakTextEl.textContent = `${curAge+1}岁 · ${curAge+4}岁 · ${curAge+8}岁 · ${curAge+12}岁 · ${curAge+16}岁`;
  }

  // ==================== 4. 财富与事业专项 ====================
  const wealthBox = document.getElementById('vipWealthContent');
  if (wealthBox) {
    const hasKu = [yZ, mZ, dZ, tZ].some(z => ['辰','戌','丑','未'].includes(z));
    const dmElem = GAN_PROPS[dayMaster][0];
    const trackDict = {
      '木': '文化传媒、绿色环保、医药健康、教育咨询、林木生态',
      '火': '人工智能、能源电力、数字媒体、品牌公关、先进光学',
      '土': '房地产基建、仓储物流、资产风控、农业生态、重工实体',
      '金': '高新制造、金融量化、硬科技芯片、司法公证、精密仪器',
      '水': '跨境出海、互联网网络、远洋贸易、现代冷链、资本流转'
    };

    wealthBox.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:10px; font-size:12px; color:#E2E8F0; line-height:1.6;">
        <div style="background:rgba(245,158,11,0.1); border-left:3px solid #F59E0B; padding:8px 12px; border-radius:4px;">
          <strong style="color:#FBBF24;">🏛️ 命局原生财库特征：</strong>
          <span>${hasKu ? '命中带财库（辰戌丑未），具备极强蓄水与留存能力，中晚年财富量级呈复利膨胀之象。' : '原局财库未透，资金流动周转迅速，属于“现金流充沛但易财来财去”型，建议尽早购置硬资产锁定财富。'}</span>
        </div>
        <div>
          <strong style="color:var(--cyan);">🚀 最催财核心赛道五行推荐：</strong>
          <span style="color:#FFF;">${trackDict[dmElem] || '互联网出海与高新技术产业'}</span>
        </div>
        <div style="background:rgba(239,68,68,0.1); border-left:3px solid #EF4444; padding:8px 12px; border-radius:4px;">
          <strong style="color:#EF4444;">⚠️ 破财漏财避坑指南：</strong>
          <span>逢农历<span class="inline-blur" onclick="handleVipUnlockClick('wealth')">三月与十一月</span>宜死守现金流红线，切忌盲目替生肖属<span class="inline-blur" onclick="handleVipUnlockClick('wealth')">鼠/牛/马</span>之人借贷担保；大额投资务必设立<span class="inline-blur" onclick="handleVipUnlockClick('wealth')">15%止损硬约束</span>。</span>
        </div>
      </div>
    `;
  }

  // ==================== 5. 婚恋正缘与感情羁绊专项 ====================
  const marriageBox = document.getElementById('vipMarriageContent');
  if (marriageBox) {
    const spousePalace = dZ;
    const spouseZhiMap = {
      '子': '配偶机敏聪慧、情感细腻、善解人意，长相秀气文雅',
      '丑': '配偶稳重踏实、任劳任怨、原则性极强，具有极强理财观念',
      '寅': '配偶性格开朗正直、上进心强、做事有主见担当，身材挺拔',
      '卯': '配偶气质典雅、温和柔顺、审美格调极高，极具艺术同理心',
      '辰': '配偶内敛沉着、胸襟宽厚包容、具有宏观长远眼光',
      '巳': '配偶性格热情大方、表达欲强、做事风风火火雷厉风行',
      '午': '配偶容貌俊美阳光、极具感染力与社交魅力，偶尔略显急躁',
      '未': '配偶温柔贤良、重视家庭温馨与人伦责任，行事谨慎周到',
      '申': '配偶行动敏捷、果决干练、善于把握现实商业与人际利益',
      '酉': '配偶精致优雅、自尊心强、追求生活品质与精神共鸣',
      '戌': '配偶诚恳重义、忠诚专一、极具家庭安全感防线',
      '亥': '配偶豁达随和、善于包容体贴、具哲学智慧与人文幽默感'
    };

    marriageBox.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:10px; font-size:12px; color:#E2E8F0; line-height:1.6;">
        <div style="background:rgba(236,72,153,0.12); border-left:3px solid #EC4899; padding:8px 12px; border-radius:4px;">
          <strong style="color:#F472B6;">💍 配偶宫（${spousePalace}）画像特征：</strong>
          <span>${spouseZhiMap[spousePalace] || '配偶性格互补，情感沟通顺畅，是人生的坚定盟友'}。</span>
        </div>
        <div>
          <strong style="color:var(--cyan);">🗓️ 关键正缘婚恋催旺窗口：</strong>
          <span style="color:#FFF;">流年在农历<span class="inline-blur" onclick="handleVipUnlockClick('marriage')">四月/八月/十月</span>红鸾天喜星动，易遇生肖属<span class="inline-blur" onclick="handleVipUnlockClick('marriage')">兔/马/猪</span>的命定正缘。</span>
        </div>
        <div style="background:rgba(56,189,248,0.1); border-left:3px solid #38BDF8; padding:8px 12px; border-radius:4px;">
          <strong style="color:#38BDF8;">💡 亲密关系避坑心法：</strong>
          <span>防范在日常琐事中陷入<span class="inline-blur" onclick="handleVipUnlockClick('marriage')">冷战对抗与言语试探</span>，多给予对方情绪肯定，方能跨越七年之痒。</span>
        </div>
      </div>
    `;
  }

  // ==================== 6. 神峰通考病药日常生活量化开运方案 ====================
  const remedyBox = document.getElementById('vipRemedyContent');
  if (remedyBox) {
    const dmElem = GAN_PROPS[dayMaster][0];
    const luckDict = {
      '木': { color: '翠绿、墨绿、青色系', dir: '正东、东南（依山傍水）', noble: '生肖猪（亥）、生肖羊（未）、生肖兔（卯）', num: '3、8' },
      '火': { color: '赤红、朱砂、暖橙色系', dir: '正南（向阳采光充沛）', noble: '生肖虎（寅）、生肖马（午）、生肖狗（戌）', num: '2、7' },
      '土': { color: '卡其、姜黄、大地棕色系', dir: '本地、西南、东北', noble: '生肖猴（申）、生肖鼠（子）、生肖龙（辰）', num: '5、10' },
      '金': { color: '纯白、银灰、亮金色系', dir: '正西、西北', noble: '生肖蛇（巳）、生肖鸡（酉）、生肖牛（丑）', num: '4、9' },
      '水': { color: '深黑、海蓝、黛青色系', dir: '正北、沿海出海方向', noble: '生肖猴（申）、生肖龙（辰）、生肖牛（丑）', num: '1、6' }
    };
    const curRemedy = luckDict[dmElem] || luckDict['木'];

    remedyBox.innerHTML = `
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:12px; font-size:12px;">
        <div style="background:rgba(8,16,32,0.65); border:1px solid rgba(255,255,255,0.1); border-radius:10px; padding:12px;">
          <div style="color:#F59E0B; font-weight:800; margin-bottom:4px;">🎨 适宜日常穿搭幸运色</div>
          <div style="color:#FFF;">${curRemedy.color}</div>
          <div style="color:#94A3B8; font-size:11px; margin-top:2px;">平衡原局气场，提升气色能量</div>
        </div>
        <div style="background:rgba(8,16,32,0.65); border:1px solid rgba(255,255,255,0.1); border-radius:10px; padding:12px;">
          <div style="color:#10B981; font-weight:800; margin-bottom:4px;">🧭 居住办公吉祥开运方位</div>
          <div style="color:#FFF;">${curRemedy.dir}</div>
          <div style="color:#94A3B8; font-size:11px; margin-top:2px;">适宜办公桌朝向与购房选址</div>
        </div>
        <div style="background:rgba(8,16,32,0.65); border:1px solid rgba(255,255,255,0.1); border-radius:10px; padding:12px;">
          <div style="color:#00F2FE; font-weight:800; margin-bottom:4px;">🤝 强力协同贵人生肖组合</div>
          <div style="color:#FFF;">${curRemedy.noble}</div>
          <div style="color:#94A3B8; font-size:11px; margin-top:2px;">合作创业与核心人脉优选生肖</div>
        </div>
        <div style="background:rgba(8,16,32,0.65); border:1px solid rgba(255,255,255,0.1); border-radius:10px; padding:12px;">
          <div style="color:#EC4899; font-weight:800; margin-bottom:4px;">🔢 幸运能量数字密码</div>
          <div style="color:#FFF; font-family:var(--font-mono); font-weight:700;">${curRemedy.num}</div>
          <div style="color:#94A3B8; font-size:11px; margin-top:2px;">楼层选择、车牌与常用密码助运</div>
        </div>
      </div>
    `;
  }

  // 保证 VIP 遮罩与局部模糊状态与当前权限同步
  updateVipDOMState();
}

// ==================== 8. 双人合盘计算引擎 (Synastry Match) ====================
function computeSynastryMatch() {
  const dateA = document.getElementById('synDateA').value;
  const timeA = document.getElementById('synTimeA').value;
  const dateB = document.getElementById('synDateB').value;
  const timeB = document.getElementById('synTimeB').value;
  if (!dateA || !dateB || typeof Solar === 'undefined') return;

  const [yA, mA, dA] = dateA.split('-').map(Number);
  const [hA, miA] = timeA.split(':').map(Number);
  const [yB, mB, dB] = dateB.split('-').map(Number);
  const [hB, miB] = timeB.split(':').map(Number);

  const solA = Solar.fromYmdHms(yA, mA, dA, hA, miA, 0);
  const ecA = solA.getLunar().getEightChar();
  const solB = Solar.fromYmdHms(yB, mB, dB, hB, miB, 0);
  const ecB = solB.getLunar().getEightChar();

  const dGa = ecA.getDayGan(), dZa = ecA.getDayZhi(), yZa = ecA.getYearZhi(), nyA = ecA.getDayNaYin();
  const dGb = ecB.getDayGan(), dZb = ecB.getDayZhi(), yZb = ecB.getYearZhi(), nyB = ecB.getDayNaYin();

  // 合盘计分规则
  let score = 72; // 基准良好分
  const findings = [];

  // 1. 日干天合
  const ganHePairs = [['甲','己'],['乙','庚'],['丙','辛'],['丁','壬'],['戊','癸']];
  const isGanHe = ganHePairs.some(p => (dGa===p[0]&&dGb===p[1])||(dGa===p[1]&&dGb===p[0]));
  if (isGanHe) {
    score += 12;
    findings.push(`✨ 【日柱天干相合】：${dGa}${dGb}相合，双方心灵默契高，属于“灵魂共振”型搭配。`);
  }

  // 2. 日支地合与地冲
  const zhiHe = { '子':'丑','丑':'子','寅':'亥','亥':'寅','卯':'戌','戌':'卯','辰':'酉','酉':'辰','巳':'申','申':'巳','午':'未','未':'午' };
  const zhiChong = { '子':'午','午':'子','丑':'未','未':'丑','寅':'申','申':'寅','卯':'酉','酉':'卯','辰':'戌','戌':'辰','巳':'亥','亥':'巳' };
  if (zhiHe[dZa] === dZb) {
    score += 10;
    findings.push(`💍 【夫妻宫六合】：双方日支【${dZa}${dZb}六合】，生活步调与情趣高度契合，家庭基石稳固。`);
  } else if (zhiChong[dZa] === dZb) {
    score -= 8;
    findings.push(`⚠️ 【夫妻宫逢冲】：双方日支【${dZa}${dZb}相冲】，性格各有棱角，遇分歧宜理性退让，切忌冷战。`);
  }

  // 3. 生肖属相相合
  if (zhiHe[yZa] === yZb) {
    score += 5;
    findings.push(`🌱 【年命相生相合】：双方原生家庭观融洽，容易获得长辈祝福与支持。`);
  }

  score = Math.min(98, Math.max(55, score));
  const scoreColor = score >= 85 ? '#10B981' : (score >= 70 ? '#00F2FE' : '#F59E0B');

  const resultContainer = document.getElementById('synastryResultDeck');
  if (resultContainer) {
    resultContainer.innerHTML = `
      <div style="background:rgba(8,16,32,0.7); border:1px solid rgba(255,255,255,0.1); border-radius:14px; padding:18px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:14px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:12px;">
          <div>
            <div style="font-size:12px; color:#94A3B8;">双人八字综合契合指数</div>
            <div style="font-size:32px; font-weight:900; color:${scoreColor}; font-family:var(--font-mono);">${score} <span style="font-size:14px;">/ 100 分</span></div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:11px; color:#CBD5E1;">甲方日柱：<strong>${dGa}${dZa} (${nyA})</strong></div>
            <div style="font-size:11px; color:#CBD5E1; margin-top:2px;">乙方日柱：<strong>${dGb}${dZb} (${nyB})</strong></div>
          </div>
        </div>

        <div style="display:flex; flex-direction:column; gap:8px; font-size:12.5px; line-height:1.6; color:#F1F5F9;">
          ${findings.length > 0 ? findings.map(f => `<div>${f}</div>`).join('') : '<div>双方五行平顺无剧烈克害，属于相濡以沫、细水长流型伙伴关系。</div>'}
        </div>

        <div style="margin-top:14px; background:rgba(0,242,254,0.06); border:1px solid rgba(0,242,254,0.25); border-radius:8px; padding:10px 14px; font-size:11.5px; color:#CBD5E1; line-height:1.5;">
          <strong>💡 关系长期维系法则：</strong>
          两命相伴，贵在“知己知彼”。多欣赏对方的独特秉性，在事业与家庭中明确分工协同，即可化解原局冲克，成就百年好合。
        </div>
      </div>
    `;
  }
}
window.computeSynastryMatch = computeSynastryMatch;

// ==================== 7. 全息《个人命运分析白皮书》一键导出 (html2canvas) ====================
window.exportBaziWhitepaper = function() {
  if (!baziCalculated) {
    alert("请先点击上方「运行四柱专业细盘解算」生成排盘后，再进行白皮书导出！");
    return;
  }
  if (!isAuroraVip) {
    handleVipUnlockClick('remedy');
    return;
  }

  showVipToast("正在高清渲染《个人命运分析白皮书》，请稍候约 2 秒...");

  const targetNode = document.getElementById('baziResultSection');
  if (!targetNode || typeof html2canvas === 'undefined') {
    alert("导出引擎初始化中，请稍后再试。");
    return;
  }

  // 临时克隆以生成无遮罩高清长图
  html2canvas(targetNode, {
    backgroundColor: '#030712',
    scale: 2, // 2x 超高清视网膜渲染
    useCORS: true,
    logging: false
  }).then(canvas => {
    const dataUrl = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.download = `极光易学_个人命理白皮书_${new Date().toISOString().slice(0,10)}.png`;
    downloadLink.href = dataUrl;
    downloadLink.click();
    showVipToast("🎉 高清白皮书已成功生成并下载至您的设备！");
  }).catch(err => {
    console.error('Export error:', err);
    alert("导出失败，请检查浏览器权限后重试。");
  });
};

// 页面初始加载应用语言与 VIP 状态
setLanguage(currentLang);
updateVipDOMState();