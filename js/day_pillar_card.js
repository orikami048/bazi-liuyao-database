/**
 * js/day_pillar_card.js - 小红书/抖音爆款：六十日柱灵魂图腾与 3:4 社交能量海报生成器
 * 核心机制：日元天干图腾 + 日柱性格社交标签 + 2026火运搞钱指南 + 3:4 高清 Canvas 海报导出
 */

(function(window) {
  'use strict';

  // 1. 十天干灵魂能量图腾与自然隐喻
  const GAN_TOTEMS = {
    '甲': { totem: '🌲 参天建木 · 顶天立地', arche: '开拓领袖型 · 向上生长', trait: '意志坚韧，不服输有担当，天生的破局者与奠基人', powerWord: '破土重生 · 势不可挡', element: '木' },
    '乙': { totem: '🌿 灵动藤萝 · 柔韧百折', arche: '灵巧同盟型 · 顺势借力', trait: '情商极高，极具韧性与适应力，善于整合资源成就大业', powerWord: '随风摇曳 · 生生不息', element: '木' },
    '丙': { totem: '☀️ 烈烈初阳 · 普照万方', arche: '魅力灯塔型 · 热情坦荡', trait: '能量饱满，光明磊落感染力极强，舞台聚光灯下的焦点', powerWord: '光芒万丈 · 照亮阴霾', element: '火' },
    '丁': { totem: '🕯️ 星火烛照 · 洞悉幽微', arche: '思想引路人 · 温柔执着', trait: '直觉敏锐，外柔内刚有大智慧，自带精神疗愈与指引力', powerWord: '暗夜微光 · 聚沙成炬', element: '火' },
    '戊': { totem: '⛰️ 厚德昆仑 · 稳如磐石', arche: '中流砥柱型 · 宽厚守信', trait: '胸怀坦荡包容万物，极具信用与定力，让人极其安心', powerWord: '厚德载物 · 万仞不动', element: '土' },
    '己': { totem: '🌾 田园沃土 · 润物无声', arche: '育人谋士型 · 细腻多才', trait: '极具内涵与包容力，善于沉淀经营与默默蓄能，大智若愚', powerWord: '静水流深 · 沃土生金', element: '土' },
    '庚': { totem: '⚔️ 霜雪干将 · 披荆斩棘', arche: '铁血将帅型 · 义薄云天', trait: '刚直果决，执行力爆表，遇强则强，最具颠覆革新魄力', powerWord: '千锤百炼 · 锋芒毕露', element: '金' },
    '辛': { totem: '💎 璀璨明珠 · 月光钻石', arche: '完美美学家 · 自带贵气', trait: '审美绝顶，心思缜密追求极致，骨子里自带高雅与清贵', powerWord: '脱胎换骨 · 惊艳人间', element: '金' },
    '壬': { totem: '🌊 浩瀚江海 · 奔流不息', arche: '智慧航海家 · 宏大辽阔', trait: '智谋深远，胸襟辽阔不拘小节，适应力极强善于把握大势', powerWord: '海纳百川 · 气吞万里', element: '水' },
    '癸': { totem: '🌧️ 九天甘霖 · 润泽万物', arche: '先知灵性者 · 灵动敏锐', trait: '洞察入微，第六感通神，心性澄澈有大悲悯与哲思深度', powerWord: '润泽众生 · 大道至简', element: '水' }
  };

  // 2. 六十日柱社交爆款标签库（精选代表性高频标签）
  const DAY_PILLAR_TAGS = {
    '甲子': ['#海中金玉', '#贵人长生', '#领袖气质', '#天生开挂'],
    '乙丑': ['#金神带印', '#搞钱劳模', '#耐力王者', '#闷声发财'],
    '丙寅': ['#长生纯阳', '#颠覆创新', '#天生演说家', '#魅力狂飙'],
    '丁卯': ['#九紫离火', '#高维直觉', '#艺术天赋', '#人间清醒'],
    '戊辰': ['#冠带水库', '#统帅格局', '#沉稳可靠', '#聚宝盆体质'],
    '己巳': ['#金神帝旺', '#内秀深藏', '#行事果决', '#福泽厚重'],
    '庚午': ['#火炼秋金', '#天生将相', '#飒爽英姿', '#贵气拉满'],
    '辛未': ['#得库清秀', '#珠宝蒙尘后大放光彩', '#美学天才', '#品味高级'],
    '壬申': ['#长生学堂', '#智商天花板', '#财运通神', '#人生大赢家'],
    '癸酉': ['#金白水清', '#冰雪聪明', '#颜值在线', '#清贵之神'],
    '甲戌': ['#暗藏财库', '#实干兴家', '#忠诚厚道', '#大器晚成'],
    '乙亥': ['#天德贵人', '#佛系通透', '#人缘爆棚', '#逢凶化吉'],
    '丙子': ['#水火既济', '#颜值扛把子', '#外柔内刚', '#贵人引路'],
    '丁丑': ['#暗藏食神', '#低调首富', '#专业过硬', '#护城河深'],
    '戊寅': ['#长生杀印', '#破局能手', '#逆风翻盘', '#威震四方'],
    '己卯': ['#风雅名士', '#情商极高', '#细腻感性', '#人见人爱'],
    '庚辰': ['#魁罡贵人', '#气场两米八', '#决策果断', '#无所畏惧'],
    '辛巳': ['#天地官印', '#正财得禄', '#名利兼收', '#体面尊贵'],
    '壬午': ['#九紫水火', '#财官双美', '#商业嗅觉', '#躺赢体质'],
    '癸未': ['#自坐华盖', '#玄学灵性', '#深谋远虑', '#大器晚成']
  };

  // 默认标签生成器（若未单独定义某日柱，依日元天干五行与十二支自适应生成）
  function getDayPillarTags(dayGz) {
    if (DAY_PILLAR_TAGS[dayGz]) return DAY_PILLAR_TAGS[dayGz];
    const g = dayGz.charAt(0);
    const z = dayGz.charAt(1);
    const gInfo = GAN_TOTEMS[g] || GAN_TOTEMS['甲'];
    return [
      `#${gInfo.element}行灵秀`,
      `#${gInfo.arche.split(' · ')[0]}`,
      '#2026火运爆款体质',
      '#搞钱搞事业大赢家'
    ];
  }

  // 3. 构建 3:4 海报 DOM 结构并触发 html2canvas
  function getCurrentPillarInfo() {
    let dayMaster = '丙';
    let dayPillar = '丙寅';

    try {
      // 方式 1: 直接寻找问真表格中天干行与地支行被标注为日柱的单元格
      const highlightedCells = document.querySelectorAll('#wenzhenTableBody td.day-pillar-highlight');
      if (highlightedCells.length >= 3) {
        // 通常依次为：主星(2列), 天干(2列), 地支(2列)...
        const gText = highlightedCells[1]?.textContent?.trim() || '';
        const zText = highlightedCells[2]?.textContent?.trim() || '';
        if (gText) dayMaster = gText.slice(0, 1);
        if (gText && zText) dayPillar = `${gText.slice(0, 1)}${zText.slice(0, 1)}`;
      } else {
        // 方式 2: 按行列索引读取
        const rows = document.querySelectorAll('#wenzhenTableBody tr');
        if (rows.length >= 3) {
          const gRowTds = rows[1].querySelectorAll('td');
          const zRowTds = rows[2].querySelectorAll('td');
          // label 在第0列，年=1，月=2，日=3，时=4
          if (gRowTds.length >= 4 && zRowTds.length >= 4) {
            const gText = gRowTds[3].textContent.trim();
            const zText = zRowTds[3].textContent.trim();
            if (gText) dayMaster = gText.slice(0, 1);
            if (gText && zText) dayPillar = `${gText.slice(0, 1)}${zText.slice(0, 1)}`;
          }
        }
      }
    } catch (e) {
      console.warn('Auto grab day pillar error:', e);
    }

    if (window.currentDayMaster) dayMaster = window.currentDayMaster;
    if (window.currentDayPillar) dayPillar = window.currentDayPillar;

    return { dayMaster, dayPillar };
  }

  window.generateDayPillarPoster = function() {
    const { dayMaster, dayPillar } = getCurrentPillarInfo();
    const gTotem = GAN_TOTEMS[dayMaster] || GAN_TOTEMS['丙'];
    const tags = getDayPillarTags(dayPillar);

    const posterBox = document.getElementById('dayPillarPosterContainer');
    if (!posterBox) return;

    // 填充海报内容
    const dayPillarEl = document.getElementById('posterDayPillar');
    const totemEl = document.getElementById('posterTotem');
    const archeEl = document.getElementById('posterArche');
    const traitEl = document.getElementById('posterTrait');
    const powerWordEl = document.getElementById('posterPowerWord');
    const tagsEl = document.getElementById('posterTagsDeck');

    if (dayPillarEl) dayPillarEl.textContent = dayPillar;
    if (totemEl) totemEl.textContent = gTotem.totem;
    if (archeEl) archeEl.textContent = gTotem.arche;
    if (traitEl) traitEl.textContent = gTotem.trait;
    if (powerWordEl) powerWordEl.textContent = `“ ${gTotem.powerWord} ”`;
    
    // 标签 Chips
    if (tagsEl) {
      tagsEl.innerHTML = tags.map(t => `<span class="poster-tag-pill">${t}</span>`).join('');
    }

    // 显现海报弹窗/预览区域
    posterBox.style.display = 'flex';
  };

  window.downloadDayPillarPoster = function() {
    const cardEl = document.getElementById('dayPillarPosterCard');
    if (!cardEl || typeof html2canvas === 'undefined') {
      alert('海报渲染引擎未就绪，请稍后重试。');
      return;
    }

    const btn = document.getElementById('btnDownloadPoster');
    if (btn) btn.textContent = '⏳ 高清渲染导出中...';

    const { dayPillar } = getCurrentPillarInfo();

    html2canvas(cardEl, {
      scale: 3, // 3x 超清小红书/朋友圈分享级别
      useCORS: true,
      backgroundColor: '#030712'
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = `极光易学_六十日柱灵魂能量图腾_${dayPillar}_小红书海报.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();

      if (btn) btn.textContent = '✅ 已下载至本地相册，可分享至小红书/抖音！';
      setTimeout(() => {
        if (btn) btn.textContent = '📥 一键保存 3:4 高清壁纸海报';
      }, 3500);
    }).catch(err => {
      console.error('Poster export error:', err);
      if (btn) btn.textContent = '❌ 生成失败，请重试';
    });
  };

  window.closeDayPillarPoster = function() {
    const posterBox = document.getElementById('dayPillarPosterContainer');
    if (posterBox) posterBox.style.display = 'none';
  };

})(window);
