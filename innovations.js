/**
 * innovations.js - 自主研发高留存与经典传承功能扩展模块
 * 1. 经典名造快速研盘案例库 (Famous Cases Showcase)
 * 2. 今日流日天时气象与个人实时能量罗盘 (Daily Transit Energy Compass)
 * 3. 唐代袁天罡称骨量化神数 (Yuan Tiangang Bone-Weighing Engine)
 */

// ==================== 1. 经典名造数据库与加载器 ====================
const FAMOUS_CASES_DB = {
  jobs: {
    name: '史蒂夫·乔布斯 (Steve Jobs)',
    date: '1955-02-24',
    time: '19:15',
    gender: 'male',
    lng: '122.0',
    desc: '丙火生于寅月长生，偏印格透食伤，颠覆性审美与科技传奇'
  },
  buffett: {
    name: '沃伦·巴菲特 (Warren Buffett)',
    date: '1930-08-30',
    time: '15:00',
    gender: 'male',
    lng: '96.0',
    desc: '壬水生于申月印旺长生，食神生正偏财，价值投资泰斗'
  },
  musk: {
    name: '埃隆·马斯克 (Elon Musk)',
    date: '1971-06-28',
    time: '07:30',
    gender: 'male',
    lng: '28.0',
    desc: '甲木生于午月伤官生财格，愿景驱动新能源与航天巅峰'
  },
  sushi: {
    name: '苏轼 (苏东坡)',
    date: '1037-01-08',
    time: '06:00',
    gender: 'male',
    lng: '103.8',
    desc: '癸水生于丑月，食伤吐秀诗词千古，旷达超脱之天仙'
  },
  zhuge: {
    name: '诸葛亮 (孔明)',
    date: '0181-08-20',
    time: '10:00',
    gender: 'male',
    lng: '118.3',
    desc: '申月金水相生，智冠三国，鞠躬尽瘁死而后已之良相'
  },
  tuyouyou: {
    name: '屠呦呦 (诺贝尔生理学或医学奖)',
    date: '1930-12-30',
    time: '08:00',
    gender: 'female',
    lng: '121.5',
    desc: '子月冬金水润，印绶生身利医学科研，造福人类'
  }
};

window.loadFamousCase = function(caseKey) {
  const item = FAMOUS_CASES_DB[caseKey];
  if (!item) return;

  // 1. 切换按钮高亮状态
  document.querySelectorAll('.famous-case-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.querySelector(`.famous-case-btn[data-case="${caseKey}"]`);
  if (activeBtn) activeBtn.classList.add('active');

  // 2. 注入表单参数
  const dEl = document.getElementById('baziDate');
  const tEl = document.getElementById('baziTime');
  const gEl = document.getElementById('baziGender');
  const lEl = document.getElementById('baziLng');
  const cEl = document.getElementById('baziCalType');

  if (dEl) dEl.value = item.date;
  if (tEl) tEl.value = item.time;
  if (gEl) gEl.value = item.gender;
  if (lEl) lEl.value = item.lng;
  if (cEl) cEl.value = 'solar';

  if (typeof updateBaziLunarPreview === 'function') {
    updateBaziLunarPreview();
  }

  // 3. 触发解算
  const runBtn = document.getElementById('btnRunBazi');
  if (runBtn) {
    runBtn.click();
  }

  // 4. 平滑滚动到结果区域
  setTimeout(() => {
    const resSec = document.getElementById('baziResultSection');
    if (resSec && resSec.style.display !== 'none') {
      resSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 120);
};

// ==================== 2. 今日流日天时气象与个人能量计算 ====================
window.renderDailyTransit = function(dayMaster) {
  try {
    if (typeof Solar === 'undefined') return;
    const now = new Date();
    const todaySolar = Solar.fromDate(now);
    const todayLunar = todaySolar.getLunar();
    const todayEc = todayLunar.getEightChar();
    const todayGan = todayEc.getDayGan();
    const todayZhi = todayEc.getDayZhi();

    const dateHeader = `${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日 · 农历${todayLunar.getMonthInChinese()}月${todayLunar.getDayInChinese()} · 【${todayGan}${todayZhi}】日`;
    const dateHeaderEl = document.getElementById('dailyTransitDateHeader');
    if (dateHeaderEl) dateHeaderEl.textContent = dateHeader;

    // 计算流日十神
    const ss = (typeof getShiShen === 'function') ? getShiShen(dayMaster, todayGan) : '正财';
    const ssEl = document.getElementById('dailyTransitShiShen');
    if (ssEl) ssEl.textContent = `流日十神：${ss}`;

    // 根据日元与流日十神的心象配置
    const transitMap = {
      '正财': {
        score: 93,
        level: '财星当令 · 稳健变现',
        yi: '签约合作、商务推进、财务盘点、采购重要物资',
        ji: '盲目借贷、过度担保、情绪消费',
        hours: '巳时 (09:00-11:00) / 申时 (15:00-17:00)',
        colorDir: '琥珀金、米白 · 正南方'
      },
      '偏财': {
        score: 95,
        level: '鸿运高照 · 机遇爆发',
        yi: '拓展市场、投资调研、结识高端人脉、推进新业务',
        ji: '贪多求全、短线投机赌博、轻信口头承诺',
        hours: '辰时 (07:00-09:00) / 酉时 (17:00-19:00)',
        colorDir: '琉璃黄、暖棕 · 正西方'
      },
      '食神': {
        score: 91,
        level: '灵感充盈 · 表达吐秀',
        yi: '策划撰文、公众演讲、艺术创作、品茗聚餐放松',
        ji: '暴饮暴食、拖延放纵、逃避关键决策',
        hours: '午时 (11:00-13:00) / 戌时 (19:00-21:00)',
        colorDir: '朱雀红、珊瑚橙 · 正东方'
      },
      '伤官': {
        score: 87,
        level: '魄力革新 · 破旧立新',
        yi: '技术攻坚、颠覆创新、突破流程死结、头脑风暴',
        ji: '顶撞上司、言语过激、傲慢树敌',
        hours: '寅时 (03:00-05:00) / 酉时 (17:00-19:00)',
        colorDir: '宝石蓝、亮橙 · 东南方'
      },
      '正官': {
        score: 89,
        level: '贵气凝结 · 秩序威望',
        yi: '面见权威、汇报述职、制度规范、重大复盘考核',
        ji: '违规越界、心存侥幸、消极抗拒',
        hours: '卯时 (05:00-07:00) / 巳时 (09:00-11:00)',
        colorDir: '玄黑、绀青 · 正北方'
      },
      '七杀': {
        score: 84,
        level: '雷霆决断 · 逆境突破',
        yi: '攻克难题、快刀斩乱麻、高强度运动、树立底线',
        ji: '正面硬刚、急躁动怒、孤注一掷',
        hours: '申时 (15:00-17:00) / 子时 (23:00-01:00)',
        colorDir: '深灰、藏蓝 · 西北方'
      },
      '正印': {
        score: 94,
        level: '贵人护佑 · 宁静致远',
        yi: '学术钻研、拜访师长、签订长线协议、身心疗愈',
        ji: '优柔寡断、思虑过剩、怠惰自满',
        hours: '辰时 (07:00-09:00) / 未时 (13:00-15:00)',
        colorDir: '翡翠绿、苍翠青 · 正东方'
      },
      '偏印': {
        score: 88,
        level: '玄妙悟道 · 敏锐直觉',
        yi: '深度独处、哲学易理研习、小众技能钻研、战略布局',
        ji: '孤芳自赏、过度猜忌、脱离现实',
        hours: '丑时 (01:00-03:00) / 亥时 (21:00-23:00)',
        colorDir: '丁香紫、墨青 · 东北方'
      },
      '比肩': {
        score: 86,
        level: '志同道合 · 并肩作战',
        yi: '同道合流、朋友相聚、团队协作、共创项目',
        ji: '固执己见、无谓争强好胜、盲目分利',
        hours: '寅时 (03:00-05:00) / 午时 (11:00-13:00)',
        colorDir: '素白、皓月银 · 正西方'
      },
      '劫财': {
        score: 82,
        level: '竞争竞速 · 守本开新',
        yi: '体育竞技、开拓新渠道、打破舒适区、慈善布施',
        ji: '大额借款给亲友、争风吃醋、投机跟风',
        hours: '卯时 (05:00-07:00) / 戌时 (19:00-21:00)',
        colorDir: '黛黑、青金蓝 · 西南方'
      }
    };

    const prof = transitMap[ss] || transitMap['正财'];

    const scoreEl = document.getElementById('dailyTransitScore');
    const levelEl = document.getElementById('dailyTransitLevel');
    const yiEl = document.getElementById('dailyTransitYi');
    const jiEl = document.getElementById('dailyTransitJi');
    const hoursEl = document.getElementById('dailyTransitHours');
    const colorEl = document.getElementById('dailyTransitColorDir');

    if (scoreEl) scoreEl.textContent = prof.score;
    if (levelEl) levelEl.textContent = prof.level;
    if (yiEl) yiEl.textContent = prof.yi;
    if (jiEl) jiEl.textContent = prof.ji;
    if (hoursEl) hoursEl.textContent = prof.hours;
    if (colorEl) colorEl.textContent = prof.colorDir;
  } catch(e) {
    console.warn('renderDailyTransit error:', e);
  }
};

// ==================== 3. 袁天罡唐代称骨量化神数数据库与计算 ====================
const CHENGGU_YEAR_WEIGHTS = {
  '甲子': 1.2, '乙丑': 0.9, '丙寅': 0.6, '丁卯': 0.7, '戊辰': 1.2, '己巳': 0.5, '庚午': 0.9, '辛未': 0.8, '壬申': 0.7, '癸酉': 0.8,
  '甲戌': 1.5, '乙亥': 0.9, '丙子': 1.6, '丁丑': 0.8, '戊寅': 0.8, '己卯': 1.9, '庚辰': 1.2, '辛巳': 0.6, '壬午': 0.8, '癸未': 0.7,
  '甲申': 0.5, '乙酉': 1.5, '丙戌': 0.6, '丁亥': 1.6, '戊子': 1.5, '己丑': 0.7, '庚寅': 0.9, '辛卯': 1.2, '壬辰': 1.0, '癸巳': 0.7,
  '甲午': 1.5, '乙未': 0.6, '丙申': 0.5, '丁酉': 1.4, '戊戌': 1.4, '己亥': 0.9, '庚子': 0.7, '辛丑': 0.7, '壬寅': 0.9, '癸卯': 1.2,
  '甲辰': 0.8, '乙巳': 0.7, '丙午': 1.3, '丁未': 0.5, '戊申': 1.4, '己酉': 0.5, '庚戌': 0.9, '辛亥': 1.7, '壬子': 0.5, '癸丑': 0.7,
  '甲寅': 1.2, '乙卯': 0.8, '丙辰': 0.8, '丁巳': 1.6, '戊午': 1.9, '己未': 0.6, '庚申': 0.8, '辛酉': 1.6, '壬戌': 1.0, '癸亥': 0.7
};

const CHENGGU_MONTH_WEIGHTS = [0, 0.6, 0.7, 1.8, 0.9, 0.5, 1.6, 0.9, 1.5, 1.8, 0.8, 0.9, 0.5];

const CHENGGU_DAY_WEIGHTS = [0,
  0.5, 1.0, 0.8, 1.5, 1.6, 1.5, 0.8, 1.6, 0.8, 1.6,
  0.9, 1.7, 0.8, 1.7, 1.0, 0.8, 0.9, 1.8, 0.5, 1.5,
  1.0, 0.9, 0.8, 0.9, 1.5, 1.8, 0.7, 0.8, 1.6, 0.6
];

const CHENGGU_TIME_WEIGHTS = {
  '子': 1.6, '丑': 0.6, '寅': 0.7, '卯': 1.0, '辰': 0.9, '巳': 1.6,
  '午': 1.0, '未': 0.8, '申': 0.8, '酉': 0.9, '戌': 1.1, '亥': 0.6
};

const CHENGGU_POEMS = {
  21: { poem: '短命非业谓大悲，平生浪子寻他乡。<br>若不过房并改姓，也当移徒二三通。', level: '初限艰难 · 离祖自立', desc: '此命骨肉轻薄，需出外闯荡谋生，改换门庭或离开出生地发展方能逢凶化吉。' },
  22: { poem: '身寒骨冷苦伶仃，此命推来行乞人。<br>劳劳碌碌无度日，终年衣食不称心。', level: '平素辛勤 · 勤俭持家', desc: '早年多奔波劳苦，需立一技之长，不图虚名，步步为营方得衣食温饱。' },
  23: { poem: '此命推来骨肉轻，求谋做事事难成。<br>妻儿兄弟实难靠，独自出外立门庭。', level: '白手起家 · 独闯四海', desc: '六亲少助，早年谋事多磨，宜依靠自我专业技能立足，中年后逐渐安稳。' },
  24: { poem: '此命推来福禄无，门庭困苦总难荣。<br>六亲骨肉皆无靠，流落他乡作老翁。', level: '他乡求财 · 厚积薄发', desc: '早年奔走四方，需耐住寂寞，宜出外求财，中年之后历练成熟渐入佳境。' },
  25: { poem: '身寒骨冷苦伶仃，此命推来行乞人。<br>劳劳碌碌无度日，终年衣食不称心。', level: '磨砺心性 · 自力更生', desc: '早年辛苦磨砺，宜守本分，学得一技傍身，待时运转旺自能转危为安。' },
  26: { poem: '平生衣禄苦中求，独自营谋事不休。<br>离祖出门宜早计，晚来衣禄自无忧。', level: '离祖自立 · 晚景安舒', desc: '离家创业得天时，青年苦干劳碌，中年立业，晚年衣禄无忧、家宅自丰。' },
  27: { poem: '一生作事少商量，难靠祖宗作主张。<br>独马单枪空做去，早年晚岁总无长。', level: '独立自主 · 凡事亲为', desc: '性格刚毅果敢，凡事亲力亲为，若能谦和结盟、虚心纳谏，则运势大增。' },
  28: { poem: '一生行事似飘蓬，祖宗产业在梦中。<br>若不过房改名姓，也当移徒二三通。', level: '四海为家 · 动中求财', desc: '宜异地发展或跨界转型，变动越大机会越多，中年后扎根方见稳固。' },
  29: { poem: '初年运限未曾亨，纵有功名在后成。<br>须过四旬方可立，移居改姓始为良。', level: '大器晚成 · 四旬转旺', desc: '早年运势尚在蓄能，四十岁后水到渠成，事业声誉自然显达。' },
  30: { poem: '劳劳碌碌苦中求，奔走红尘何日休。<br>若使终身勤与俭，老来稍可免忧愁。', level: '勤俭兴家 · 晚岁无忧', desc: '早年劳心劳力，以勤俭自律起家，中年后基业初成，晚年安享天伦。' },
  31: { poem: '忙忙碌碌苦中求，何日云开见日头。<br>难得祖基家可立，中年衣食渐无忧。', level: '苦尽甘来 · 中运渐通', desc: '青年时期需咬牙坚持，三十开外云开雾散，渐入佳境，衣食充盈。' },
  32: { poem: '初年运蹇事难谋，渐有财源如水流。<br>到得中年衣食旺，那时名利一齐收。', level: '渐入佳境 · 名利双收', desc: '早年运势多阻，中年财源广进如泉涌，名声与财富同步提升。' },
  33: { poem: '早年做事事难成，百计徒劳枉费心。<br>半世自来流水过，后来运到得黄金。', level: '否极泰来 · 晚景灿烂', desc: '早年心力付出多而收获迟，切莫气馁，时运一到如枯木逢春，黄金满堂。' },
  34: { poem: '此命福气果如何，僧道门中衣禄多。<br>离祖出家方得好，终朝拜佛念弥陀。', level: '仁慈福寿 · 精神富足', desc: '心性慈悲超脱，宜从事文化、教育、慈善或专业技术，精神与物质双丰收。' },
  35: { poem: '平生福量不周全，祖业根基亦少传。<br>营谋谋事成难定，奔走劳碌度平生。', level: '独闯乾坤 · 靠己不靠天', desc: '无祖荫庇佑，凭一身傲骨闯荡天地，中年后建立自己的一方天地。' },
  36: { poem: '不须劳碌过平生，独自成家福不轻。<br>早有福星常照命，任君行去百般成。', level: '福星高照 · 自成一家', desc: '天生自带福气，做事往往有惊无险，中年自立门户，名利通达。' },
  37: { poem: '事事常思财禄全，争奈运限未通然。<br>初限正如云遮月，中限运转日当头。', level: '云开见日 · 中年显贵', desc: '早年如云遮明月，中年运开如日中天，宜守住本心，静待良机。' },
  38: { poem: '一生骨肉最清高，早入黉门姓名标。<br>待看年将三十六，蓝衫脱去换红袍。', level: '金榜题名 · 官禄显达', desc: '骨相清奇智慧过人，利读书求学与体制晋升，三十六岁后名震一方。' },
  39: { poem: '少年命运未曾通，等闲衣禄也无功。<br>成家立业在中年，晚景荣华福寿长。', level: '厚积薄发 · 晚景荣华', desc: '少年蓄势蛰伏，中年成家立业威望自显，晚年福禄寿三星高照。' },
  40: { poem: '平生衣禄是绵长，件件心中自主张。<br>前面风霜多受过，后来必定享荣光。', level: '坚韧不拔 · 荣光自显', desc: '富有主见与决断力，历尽风霜不改其志，后半生必享大福报。' },
  41: { poem: '此命推来事不同，为人能干异凡庸。<br>中年还有高人引，木向春来日渐荣。', level: '贵人引路 · 春木向荣', desc: '才华卓绝异于常人，中年必遇重量级贵人提携，如春木逢甘霖，蒸蒸日上。' },
  42: { poem: '得宽怀处且宽怀，何用双眉皱不开。<br>若使中年命运济，那时名利自然来。', level: '心宽福厚 · 水到渠成', desc: '心胸豁达量大福大，莫为眼前小事忧虑，中年气运一至，名利不请自来。' },
  43: { poem: '为人心性最聪明，做事轩昂呈百能。<br>从此逢迎名利遂，一般财帛引心惊。', level: '聪明轩昂 · 名利兼全', desc: '头脑聪颖办事利落，八面玲珑，善于把握商机，财富积累令人赞叹。' },
  44: { poem: '万事由天莫苦求，须知福禄命里收。<br>少壮名利难如意，晚景荣华胜从前。', level: '顺应天时 · 晚胜从前', desc: '年少时不急于求成，踏实耕耘积蓄资源，晚景荣华远超从前。' },
  45: { poem: '名利推来竟若何，前番辛苦后奔波。<br>命中推定成家计，早运平平晚运多。', level: '白手致富 · 晚福充盈', desc: '前行虽有坎坷，但命带成家之格，后半生财富与家庭福泽深厚。' },
  46: { poem: '东西南北尽皆通，出姓移名整旧容。<br>衣丰食足名声显，差得天时与命同。', level: '四方通达 · 声名远播', desc: '适合走四方拓展版图，跨地域经营大吉，衣食丰足，名震业界。' },
  47: { poem: '此命推来旺末年，妻荣子贵自怡然。<br>平生衣禄丰盈足，财运亨通吉庆绵。', level: '妻荣子贵 · 末年大旺', desc: '家运极旺，子孙贤孝，一生衣禄无亏，晚年财运亨通安享尊荣。' },
  48: { poem: '初年运限未曾通，幼年衣禄也未充。<br>骨格清奇成大器，晚年荣昌受皇封。', level: '大器晚成 · 荣昌通达', desc: '骨相清奇，幼年磨炼反成后天大器之基石，晚年声名显赫，受人敬仰。' },
  49: { poem: '此命推来福不轻，自成自立显门庭。<br>从来富贵人钦敬，使婢差奴过一生。', level: '富贵自立 · 门庭显耀', desc: '自带富贵气象，靠自身才干光宗耀祖，受人敬重，统御指挥力极强。' },
  50: { poem: '为利为名终日劳，中年福禄也多遭。<br>老来荣华真富贵，名利双全在后高。', level: '后劲十足 · 晚景富贵', desc: '青年多劳碌探索，中年渐入坦途，晚年真正进入名利双全的黄金期。' },
  51: { poem: '一世荣华事事通，不须劳碌自亨通。<br>兄弟叔侄皆如意，家业丰盈自称雄。', level: '事事亨通 · 家业雄厚', desc: '天生福泽深厚，少走弯路，家族和睦同心，能创下令人艳羡的基业。' },
  52: { poem: '一世亨通事事能，不须劳苦自然宁。<br>宗族欣然心皆好，家业丰盈自称雄。', level: '福寿双全 · 门庭若市', desc: '一生运途平坦顺遂，做事游刃有余，深受家族尊崇，产业富足。' },
  53: { poem: '此格推来气象真，兴家立业在其中。<br>一生福禄安排定，却是人间一富翁。', level: '天生富翁 · 兴家立业', desc: '命中自带富贵格局，善于资产运作与实业兴邦，堪称人间巨贾。' },
  54: { poem: '此命推来厚且坚，谋为求事自然全。<br>富贵荣华天注定，五谷丰登庆有年。', level: '厚德载物 · 万事俱备', desc: '根基坚实如磐石，谋事顺风顺水，一生衣食丰足无忧，福泽延绵。' },
  55: { poem: '走马扬鞭争利名，少年作事费筹论。<br>一朝福禄源源至，富贵荣华显六亲。', level: '扬鞭跃马 · 荣显六亲', desc: '年轻时敢拼敢闯，中年福禄如泉涌，不仅自身显达，更荫庇全家族。' },
  56: { poem: '此格推来礼义通，一身福禄自无穷。<br>甜酸苦辣皆尝过，财源滚滚晚景隆。', level: '德高望重 · 晚景隆昌', desc: '为人深明大义，历经风雨淬炼，后半生财源滚滚，声誉与威望鼎盛。' },
  57: { poem: '福禄丰盈万事全，一身荣耀显双亲。<br>名题雁塔兼身贵，二十余年大业成。', level: '雁塔题名 · 光耀门楣', desc: '少年得意，才智过人，早年即可奠定事业基石，光宗耀祖极尽显贵。' },
  58: { poem: '平生福禄自然来，名利兼全福寿偕。<br>雁塔题名为贵客，紫袍玉带走金阶。', level: '紫袍玉带 · 极品贵造', desc: '官运或事业天花板格局，名利双全，福寿康宁，登临人生至高舞台。' },
  59: { poem: '细推此格妙且清，必定才高学业成。<br>甲第题名登金榜，荣华富贵自然生。', level: '才高八斗 · 登科及第', desc: '才学渊博超群，极利文教科研与政商巅峰，名利富贵自然相随。' },
  60: { poem: '一朝金榜快题名，显祖荣宗立大勋。<br>衣食丰盈人钦敬，富贵荣华过一生。', level: '立功立德 · 显赫一生', desc: '立大功勋建大业之格局，受万众敬仰，一生荣华富贵永无匮乏。' },
  61: { poem: '不须劳碌过平生，白手成家福不轻。<br>早有福星常照命，任君行去百般成。', level: '福星拱照 · 白手通神', desc: '天赐洪福，逢凶化吉，事业无往不利，终成行业顶尖翘楚。' },
  62: { poem: '名利双全富贵丰，前生修得今生逢。<br>荣华富贵自然显，金玉满堂世代隆。', level: '金玉满堂 · 世代昌隆', desc: '前生积善今生厚报，金玉满堂家业代代相传，人世间极品福格。' },
  63: { poem: '命主为官福禄长，得来富贵实丰常。<br>名题雁塔传千里，紫袍玉带走朝堂。', level: '位极人臣 · 朝堂栋梁', desc: '大权在握统领四方，威望名扬四海，辅国安民之大才。' },
  64: { poem: '此命推来福禄虚，门庭困苦总难荣。<br>官星高照福禄全，富贵双全万古传。', level: '官星高照 · 万古流芳', desc: '德才兼备名震古今，开疆拓土建立不朽功勋，富贵双全。' },
  65: { poem: '细推此命福非轻，富贵荣华孰与争。<br>定国安邦成大业，名垂青史振家声。', level: '定国安邦 · 名垂青史', desc: '经天纬地之才，定大局成伟业，青史留名，光耀千秋。' },
  66: { poem: '此命人间一福翁，天降甘霖处处通。<br>富贵荣华兼寿考，世间难得几人同。', level: '福寿兼备 · 人间罕见', desc: '五福俱全，长寿富贵康宁，世间难逢之大吉之命。' },
  67: { poem: '官职荣迁立大功，姓名远播四海中。<br>富贵荣华不可量，百岁安康福禄丰。', level: '名满天下 · 百岁安康', desc: '官阶勋位登峰造极，四海扬名，福寿绵长无疆。' },
  68: { poem: '富贵由天莫苦求，万般谋望自然优。<br>人间难得此清贵，紫微星照在心头。', level: '紫微拱照 · 清贵绝伦', desc: '紫微帝星高照，超凡脱俗，位居极品，福泽冠绝天下。' },
  69: { poem: '君是人间衣禄殊，一生荣华自然舒。<br>富贵清闲天注定，金车玉马步通途。', level: '金车玉马 · 人间至乐', desc: '一生富贵安闲，顺遂通达，尽享世间至美荣华。' },
  70: { poem: '此命推来福不轻，不须愁虑苦劳心。<br>一生天定衣与禄，富贵荣华过一生。', level: '天定富贵 · 坐享荣华', desc: '福禄天注定，无须焦虑奔忙，自然万物皆备于我，富贵一生。' },
  71: { poem: '此命生成大不同，公侯卿相在其中。<br>一生自有无限福，富贵荣华极品隆。', level: '公侯卿相 · 极品至尊', desc: '公侯相格，威震八荒，福寿荣华至高无上，千载难逢之神造。' }
};

window.renderChengGu = function(yG, yZ, mNum, dNum, tZ) {
  try {
    const yGz = `${yG}${yZ}`;
    const yWeight = CHENGGU_YEAR_WEIGHTS[yGz] || 1.0;
    const mWeight = CHENGGU_MONTH_WEIGHTS[mNum] || 1.0;
    const dWeight = CHENGGU_DAY_WEIGHTS[dNum] || 1.0;
    const tWeight = CHENGGU_TIME_WEIGHTS[tZ] || 1.0;

    const totalWeight = Math.round((yWeight + mWeight + dWeight + tWeight) * 10) / 10;
    const liang = Math.floor(totalWeight);
    const qian = Math.round((totalWeight - liang) * 10);

    const liangZhMap = { 2: '二', 3: '三', 4: '四', 5: '五', 6: '六', 7: '七' };
    const qianZhMap = { 0: '整', 1: '一', 2: '二', 3: '三', 4: '四', 5: '五', 6: '六', 7: '七', 8: '八', 9: '九' };

    const weightText = `${liangZhMap[liang] || liang}两${qian === 0 ? '整' : (qianZhMap[qian] || qian) + '钱'}`;
    const weightEl = document.getElementById('chengguWeightText');
    if (weightEl) weightEl.textContent = weightText;

    const tenthKey = Math.min(71, Math.max(21, Math.round(totalWeight * 10)));
    const poemData = CHENGGU_POEMS[tenthKey] || CHENGGU_POEMS[48];

    const levelEl = document.getElementById('chengguLevelText');
    const poemEl = document.getElementById('chengguPoemText');
    const modernEl = document.getElementById('chengguModernText');

    if (levelEl) levelEl.textContent = `【${poemData.level}】· 累积神数 ${totalWeight.toFixed(1)} 钱`;
    if (poemEl) poemEl.innerHTML = poemData.poem;
    if (modernEl) modernEl.innerHTML = `💡 <strong>现代通俗解读</strong>：${poemData.desc}`;
  } catch(e) {
    console.warn('renderChengGu error:', e);
  }
};

// 自动初始化与事件监听
document.addEventListener('DOMContentLoaded', () => {
  // 案例按钮点击事件委托
  document.querySelectorAll('.famous-case-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const caseKey = btn.getAttribute('data-case');
      if (caseKey && typeof window.loadFamousCase === 'function') {
        window.loadFamousCase(caseKey);
      }
    });
  });
});
