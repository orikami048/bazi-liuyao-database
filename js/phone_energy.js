/**
 * js/phone_energy.js - 易经数理 · 八星手机号码数字能量学测算引擎
 * 基于 references/phone_energy_rules_v1.json 与 phone_energy_readings_v1.json 标准
 */

(function(window) {
  'use strict';

  // 1. 核心八星匹配表
  const STAR_MAP = {
    // 四吉星
    '13': { name: '天医', type: 'auspicious', level: 'L1', score: 100, desc: '财运丰盈 · 正财正桃花' },
    '31': { name: '天医', type: 'auspicious', level: 'L1', score: 100, desc: '财运丰盈 · 正财正桃花' },
    '68': { name: '天医', type: 'auspicious', level: 'L2', score: 90, desc: '智慧守财 · 贵人提携' },
    '86': { name: '天医', type: 'auspicious', level: 'L2', score: 90, desc: '智慧守财 · 贵人提携' },
    '94': { name: '天医', type: 'auspicious', level: 'L3', score: 80, desc: '小财得聚 · 踏实肯干' },
    '49': { name: '天医', type: 'auspicious', level: 'L3', score: 80, desc: '小财得聚 · 踏实肯干' },
    '72': { name: '天医', type: 'auspicious', level: 'L4', score: 70, desc: '财源初现 · 温和互惠' },
    '27': { name: '天医', type: 'auspicious', level: 'L4', score: 70, desc: '财源初现 · 温和互惠' },

    '14': { name: '生气', type: 'auspicious', level: 'L1', score: 100, desc: '超级贵人 · 随缘逢吉' },
    '41': { name: '生气', type: 'auspicious', level: 'L1', score: 100, desc: '超级贵人 · 随缘逢吉' },
    '67': { name: '生气', type: 'auspicious', level: 'L2', score: 90, desc: '人脉通达 · 乐天豁达' },
    '76': { name: '生气', type: 'auspicious', level: 'L2', score: 90, desc: '人脉通达 · 乐天豁达' },
    '93': { name: '生气', type: 'auspicious', level: 'L3', score: 80, desc: '常有帮手 · 心态平和' },
    '39': { name: '生气', type: 'auspicious', level: 'L3', score: 80, desc: '常有帮手 · 心态平和' },
    '28': { name: '生气', type: 'auspicious', level: 'L4', score: 70, desc: '人缘不错 · 随和包容' },
    '82': { name: '生气', type: 'auspicious', level: 'L4', score: 70, desc: '人缘不错 · 随和包容' },

    '19': { name: '延年', type: 'auspicious', level: 'L1', score: 100, desc: '领袖魄力 · 事业定海神针' },
    '91': { name: '延年', type: 'auspicious', level: 'L1', score: 100, desc: '领袖魄力 · 事业定海神针' },
    '87': { name: '延年', type: 'auspicious', level: 'L2', score: 90, desc: '专业掌舵 · 稳健守业' },
    '78': { name: '延年', type: 'auspicious', level: 'L2', score: 90, desc: '专业掌舵 · 稳健守业' },
    '43': { name: '延年', type: 'auspicious', level: 'L3', score: 80, desc: '踏实负责 · 独挡一面' },
    '34': { name: '延年', type: 'auspicious', level: 'L3', score: 80, desc: '踏实负责 · 独挡一面' },
    '62': { name: '延年', type: 'auspicious', level: 'L4', score: 70, desc: '尽职尽责 · 默默奉献' },
    '26': { name: '延年', type: 'auspicious', level: 'L4', score: 70, desc: '尽职尽责 · 默默奉献' },

    '11': { name: '伏位', type: 'neutral', level: 'L1', score: 75, desc: '蓄势沉淀 · 谨慎守成' },
    '22': { name: '伏位', type: 'neutral', level: 'L1', score: 75, desc: '蓄势沉淀 · 谨慎守成' },
    '33': { name: '伏位', type: 'neutral', level: 'L2', score: 75, desc: '蓄势沉淀 · 谨慎守成' },
    '44': { name: '伏位', type: 'neutral', level: 'L2', score: 75, desc: '蓄势沉淀 · 谨慎守成' },
    '66': { name: '伏位', type: 'neutral', level: 'L3', score: 75, desc: '蓄势沉淀 · 谨慎守成' },
    '77': { name: '伏位', type: 'neutral', level: 'L3', score: 75, desc: '蓄势沉淀 · 谨慎守成' },
    '88': { name: '伏位', type: 'neutral', level: 'L4', score: 75, desc: '蓄势沉淀 · 谨慎守成' },
    '99': { name: '伏位', type: 'neutral', level: 'L4', score: 75, desc: '蓄势沉淀 · 谨慎守成' },

    // 四凶星
    '12': { name: '绝命', type: 'inauspicious', level: 'L1', score: 30, desc: '敢闯大冒险 · 易大起大落' },
    '21': { name: '绝命', type: 'inauspicious', level: 'L1', score: 30, desc: '敢闯大冒险 · 易大起大落' },
    '69': { name: '绝命', type: 'inauspicious', level: 'L2', score: 40, desc: '投资果断 · 警惕冲动透支' },
    '96': { name: '绝命', type: 'inauspicious', level: 'L2', score: 40, desc: '投资果断 · 警惕冲动透支' },
    '84': { name: '绝命', type: 'inauspicious', level: 'L3', score: 50, desc: '劳碌波折 · 需防轻信' },
    '48': { name: '绝命', type: 'inauspicious', level: 'L3', score: 50, desc: '劳碌波折 · 需防轻信' },
    '73': { name: '绝命', type: 'inauspicious', level: 'L4', score: 60, desc: '小试锋芒 · 善始善终' },
    '37': { name: '绝命', type: 'inauspicious', level: 'L4', score: 60, desc: '小试锋芒 · 善始善终' },

    '17': { name: '祸害', type: 'inauspicious', level: 'L1', score: 35, desc: '口才出众 · 易祸从口出' },
    '71': { name: '祸害', type: 'inauspicious', level: 'L1', score: 35, desc: '口才出众 · 易祸从口出' },
    '98': { name: '祸害', type: 'inauspicious', level: 'L2', score: 45, desc: '雄辩滔滔 · 需防小人舌战' },
    '89': { name: '祸害', type: 'inauspicious', level: 'L2', score: 45, desc: '雄辩滔滔 · 需防小人舌战' },
    '64': { name: '祸害', type: 'inauspicious', level: 'L3', score: 55, desc: '言辞犀利 · 脾胃喉部保养' },
    '46': { name: '祸害', type: 'inauspicious', level: 'L3', score: 55, desc: '言辞犀利 · 脾胃喉部保养' },
    '23': { name: '祸害', type: 'inauspicious', level: 'L4', score: 65, desc: '小有口舌 · 宜谨言慎行' },
    '32': { name: '祸害', type: 'inauspicious', level: 'L4', score: 65, desc: '小有口舌 · 宜谨言慎行' },

    '18': { name: '五鬼', type: 'inauspicious', level: 'L1', score: 30, desc: '天马行空 · 疑心与变动大' },
    '81': { name: '五鬼', type: 'inauspicious', level: 'L1', score: 30, desc: '天马行空 · 疑心与变动大' },
    '97': { name: '五鬼', type: 'inauspicious', level: 'L2', score: 40, desc: '鬼才策划 · 防熬夜暗耗' },
    '79': { name: '五鬼', type: 'inauspicious', level: 'L2', score: 40, desc: '鬼才策划 · 防熬夜暗耗' },
    '36': { name: '五鬼', type: 'inauspicious', level: 'L3', score: 50, desc: '敏锐变通 · 心绪起伏' },
    '63': { name: '五鬼', type: 'inauspicious', level: 'L3', score: 50, desc: '敏锐变通 · 心绪起伏' },
    '24': { name: '五鬼', type: 'inauspicious', level: 'L4', score: 60, desc: '直觉灵敏 · 踏实落地为佳' },
    '42': { name: '五鬼', type: 'inauspicious', level: 'L4', score: 60, desc: '直觉灵敏 · 踏实落地为佳' },

    '16': { name: '六煞', type: 'inauspicious', level: 'L1', score: 35, desc: '万人迷魅力 · 情感纠葛与暗耗' },
    '61': { name: '六煞', type: 'inauspicious', level: 'L1', score: 35, desc: '万人迷魅力 · 情感纠葛与暗耗' },
    '47': { name: '六煞', type: 'inauspicious', level: 'L2', score: 45, desc: '异性缘旺 · 情绪波动多' },
    '74': { name: '六煞', type: 'inauspicious', level: 'L2', score: 45, desc: '异性缘旺 · 情绪波动多' },
    '38': { name: '六煞', type: 'inauspicious', level: 'L3', score: 55, desc: '细腻敏锐 · 需明辨真伪桃花' },
    '83': { name: '六煞', type: 'inauspicious', level: 'L3', score: 55, desc: '细腻敏锐 · 需明辨真伪桃花' },
    '92': { name: '六煞', type: 'inauspicious', level: 'L4', score: 65, desc: '善解人意 · 守正防耗' },
    '29': { name: '六煞', type: 'inauspicious', level: 'L4', score: 65, desc: '善解人意 · 守正防耗' }
  };

  const STAR_THEMES = {
    '天医': { title: '财富资源与正缘', yi: '整合资源、签约合作、兑现成果', ji: '轻信盲信、过度承诺', color: '#10B981', tag: '吉 · 财禄' },
    '生气': { title: '贵人提携与人缘', yi: '拓展人脉、请教长辈、共赢结盟', ji: '只聊不做、缺乏闭环', color: '#00F2FE', tag: '吉 · 贵人' },
    '延年': { title: '领袖担当与事业', yi: '统筹规划、扛起责任、攻克项目', ji: '大包大揽、身心过耗', color: '#F59E0B', tag: '吉 · 事业' },
    '伏位': { title: '蓄势深耕与专注', yi: '沉淀复盘、打磨技能、稳步积累', ji: '犹豫不决、被动拖延', color: '#8B5CF6', tag: '平 · 蓄能' },
    '绝命': { title: '魄力拼搏与防险', yi: '快刀斩乱麻、果断执行、开拓突破', ji: '盲目高杠杆、冲动豪赌', color: '#EF4444', tag: '凶 · 风险' },
    '祸害': { title: '口才演讲与谨言', yi: '商务谈判、主持培训、表达观点', ji: '口舌之争、死要面子', color: '#F97316', tag: '凶 · 口角' },
    '五鬼': { title: '创意革新与灵动', yi: '头脑风暴、技术攻关、小步试错', ji: '疑神疑鬼、熬夜内耗', color: '#EC4899', tag: '凶 · 变动' },
    '六煞': { title: '审美社交与情感', yi: '公关交往、美学设计、建立信任', ji: '多角纠缠、情绪内卷', color: '#06B6D4', tag: '凶 · 桃花' }
  };

  // 2. 解析算法
  function analyzePhone(rawInput) {
    const digits = String(rawInput || '').replace(/\D/g, '');
    if (!digits || digits.length < 2) {
      return { error: '请输入至少 2 位以上数字号码' };
    }

    // 中国 11 位手机号：首位 1 为运营商前导码，分析从第 2 位起算，同时保留首位兼容分析
    let seq = digits;
    if (digits.length === 11 && digits.startsWith('1')) {
      seq = digits.substring(1);
    }

    const segments = [];
    let auspiciousCount = 0;
    let inauspiciousCount = 0;
    let neutralCount = 0;
    let totalScore = 0;

    // 滑动窗口拆分两两相邻数字
    for (let i = 0; i < seq.length - 1; i++) {
      let pair = seq.substring(i, i + 2);
      // 特殊处理 0 和 5 的修饰
      let mod = null;
      if (pair.includes('0')) mod = '潜伏隐性';
      if (pair.includes('5')) mod = '凸显增强';

      // 提取核心两数 (如果含0或5，查找其骨架对应八星)
      let cleanPair = pair.replace(/[05]/g, '');
      if (cleanPair.length === 1) {
        // 如果只剩一位，与后续或前序借位，或视作伏位
        cleanPair = cleanPair + cleanPair;
      }
      if (cleanPair.length === 0) {
        cleanPair = '11'; // 纯 00 / 55 视作伏位延续
      }

      const match = STAR_MAP[pair] || STAR_MAP[cleanPair] || {
        name: '伏位', type: 'neutral', level: 'L2', score: 70, desc: '平稳过渡'
      };

      if (match.type === 'auspicious') auspiciousCount++;
      else if (match.type === 'inauspicious') inauspiciousCount++;
      else neutralCount++;

      totalScore += match.score;

      segments.push({
        pair,
        star: match.name,
        type: match.type,
        level: match.level,
        desc: match.desc,
        mod,
        theme: STAR_THEMES[match.name] || STAR_THEMES['伏位']
      });
    }

    const avgScore = Math.min(99, Math.max(50, Math.round(totalScore / segments.length)));
    const ausRatio = Math.round((auspiciousCount / segments.length) * 100);

    // 综合格局判定
    let verdictLevel = '上等吉祥大吉号';
    let verdictDesc = '吉星环绕，气运流通顺畅，利财官两旺。';
    if (ausRatio >= 60 && inauspiciousCount <= 1) {
      verdictLevel = '👑 大吉 · 富贵聚财格';
      verdictDesc = '天医与延年、生气互为表里，正财充盈、贵人有助，是事业起飞与家庭和睦的极优磁场。';
    } else if (ausRatio >= 40) {
      verdictLevel = '⚖️ 中吉 · 兼蓄平衡格';
      verdictDesc = '吉凶互见，既有果敢进取之魄力，亦需注意沟通把控与沉淀积累，瑕不掩瑜。';
    } else {
      verdictLevel = '⚠️ 磨砺 · 蓄势调整格';
      verdictDesc = '磁场中变动或冲动星宿略显密集，建议日常多加强理性复核、注意言语沟通与作息。';
    }

    // 尾数核心能量（最后两位的终局磁场最关键）
    const tailPair = seq.slice(-2);
    const tailMatch = STAR_MAP[tailPair] || segments[segments.length - 1];

    return {
      rawInput,
      digits,
      segments,
      auspiciousCount,
      inauspiciousCount,
      neutralCount,
      avgScore,
      ausRatio,
      verdictLevel,
      verdictDesc,
      tailMatch
    };
  }

  // 3. 渲染至 DOM
  window.runPhoneEnergyAnalysis = function(phoneVal) {
    const inputEl = document.getElementById('phoneEnergyInput');
    const val = phoneVal || (inputEl ? inputEl.value : '13813141988');
    if (inputEl) inputEl.value = val;

    const res = analyzePhone(val);
    const container = document.getElementById('phoneEnergyResultDeck');
    if (!container) return;

    if (res.error) {
      container.innerHTML = `<div style="color:#EF4444; padding:20px; text-align:center;">${res.error}</div>`;
      return;
    }

    // 生成磁场片段 Chips
    const chipsHtml = res.segments.map(s => {
      const isAus = s.type === 'auspicious';
      const isNeu = s.type === 'neutral';
      const color = isAus ? '#10B981' : isNeu ? '#A78BFA' : '#F87171';
      const bg = isAus ? 'rgba(16, 185, 129, 0.15)' : isNeu ? 'rgba(139, 92, 246, 0.15)' : 'rgba(239, 68, 68, 0.15)';
      const border = isAus ? 'rgba(16, 185, 129, 0.35)' : isNeu ? 'rgba(139, 92, 246, 0.35)' : 'rgba(239, 68, 68, 0.35)';

      return `
        <div class="star-chip" style="background:${bg}; border:1px solid ${border}; border-radius:10px; padding:10px 14px; display:flex; flex-direction:column; gap:4px; min-width:110px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-family:var(--font-mono); font-size:16px; font-weight:900; color:#FFF;">${s.pair}</span>
            <span style="font-size:11px; font-weight:800; color:${color};">${s.star}</span>
          </div>
          <div style="font-size:10.5px; color:#94A3B8;">${s.theme.tag}</div>
          <div style="font-size:10px; color:#CBD5E1; margin-top:2px;">${s.desc}</div>
          ${s.mod ? `<div style="font-size:9px; color:#FCD34D;">⚡ ${s.mod}</div>` : ''}
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div class="phone-result-card" style="background:linear-gradient(135deg, rgba(8, 20, 36, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%); border:1px solid rgba(0, 242, 254, 0.3); border-radius:16px; padding:24px; margin-top:20px; animation:fadeInSlide 0.35s ease;">
        
        <!-- 头部综合评分 -->
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:18px;">
          <div>
            <div style="font-size:12px; color:#94A3B8; text-transform:uppercase; letter-spacing:1px;">测算号码：${res.digits}</div>
            <div style="font-size:22px; font-weight:900; color:#FBBF24; margin:4px 0;">${res.verdictLevel}</div>
            <div style="font-size:13px; color:#E2E8F0;">${res.verdictDesc}</div>
          </div>
          <div style="text-align:right; display:flex; align-items:center; gap:16px;">
            <div>
              <div style="font-size:11px; color:#94A3B8;">吉星磁场占比</div>
              <div style="font-size:26px; font-weight:900; color:#10B981; font-family:var(--font-mono);">${res.ausRatio}%</div>
            </div>
            <div style="width:1px; height:40px; background:rgba(255,255,255,0.1);"></div>
            <div>
              <div style="font-size:11px; color:#94A3B8;">综合能量指数</div>
              <div style="font-size:32px; font-weight:900; color:#00F2FE; font-family:var(--font-serif);">${res.avgScore} <span style="font-size:14px; color:#64748B;">/100</span></div>
            </div>
          </div>
        </div>

        <!-- 八星逐段磁场流 -->
        <div style="margin-top:20px;">
          <div style="font-size:13px; font-weight:800; color:#FFF; margin-bottom:10px; display:flex; align-items:center; gap:8px;">
            <span>🧭 号码数字磁场全息流谱 (相邻滑动重叠推演)：</span>
          </div>
          <div style="display:flex; gap:10px; overflow-x:auto; padding-bottom:10px; scrollbar-width:thin;">
            ${chipsHtml}
          </div>
        </div>

        <!-- 尾号终局定势与行动自查练习 -->
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px; margin-top:20px;">
          <div style="background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:16px;">
            <div style="font-size:13px; font-weight:800; color:#FBBF24; margin-bottom:8px;">🎯 尾数终局磁场透视：【${res.tailMatch.star || res.tailMatch.name}】</div>
            <div style="font-size:12.5px; color:#E2E8F0; line-height:1.6;">
              号码末尾数字决定全盘磁场的沉淀方向。当前尾部为<strong>${res.tailMatch.star || res.tailMatch.name}</strong>，
              意味着该号码长期使用的主题定格在【${(STAR_THEMES[res.tailMatch.star || res.tailMatch.name] || {}).title || '稳健发展'}】。
            </div>
          </div>
          <div style="background:rgba(0,0,0,0.4); border:1px solid rgba(16,185,129,0.25); border-radius:12px; padding:16px;">
            <div style="font-size:13px; font-weight:800; color:#34D399; margin-bottom:8px;">💡 日常生活自查与开运指引</div>
            <div style="font-size:12.5px; color:#E2E8F0; line-height:1.6;">
              ${res.ausRatio >= 50 ? '● 宜：保持开放协同，把手头的机会与资源落地为契约与行动。<br>● 忌：优柔寡断或错失关键推进时机。' : '● 宜：遇到重大抉择留出 24 小时复核时间，理性权衡投入与产出。<br>● 忌：冲动承诺或在情绪化时作长远决策。'}
            </div>
          </div>
        </div>

      </div>
    `;
  };

  // 绑定初始化
  function initPhoneEnergy() {
    const btn = document.getElementById('btnRunPhoneEnergy');
    if (btn) {
      btn.onclick = () => {
        const inp = document.getElementById('phoneEnergyInput');
        window.runPhoneEnergyAnalysis(inp ? inp.value : '');
      };
    }
    // 预设样例按钮
    document.querySelectorAll('.phone-sample-btn').forEach(b => {
      b.onclick = () => {
        const p = b.getAttribute('data-phone');
        if (p) window.runPhoneEnergyAnalysis(p);
      };
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPhoneEnergy);
  } else {
    initPhoneEnergy();
  }

})(window);
