<div align="center">

# 🔮 中华易学全息权威数据库与排盘引擎
### Chinese Metaphysics, BaZi & Liu Yao (I Ching) Authoritative Database & Engine

<p align="center">
  <a href="./README.md">🇺🇸 English</a> · <b>🇨🇳 简体中文</b>
</p>

<p align="center">
  <a href="https://bazi-liuyao-database.pages.dev"><img src="https://img.shields.io/badge/🌐_Cloudflare_Pages-bazi--liuyao--database.pages.dev-F38020?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Cloudflare Pages" /></a>
  <a href="https://orikami048.github.io/bazi-liuyao-database/"><img src="https://img.shields.io/badge/🌐_GitHub_Pages-orikami048.github.io-9E2A2B?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages" /></a>
  <img src="https://img.shields.io/badge/Dataset-BaZi_%26_LiuYao-8B0000?style=for-the-badge&logo=gitbook&logoColor=white" alt="Dataset" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
</p>

<p align="center">
  <b>「法遵易理 · 溯源古籍 · 结构严谨 · 开箱即用」</b><br/>
  全量集成四柱八字（十神/神煞/干支刑冲/调候格局）、六爻纳甲（64卦/京房纳甲/六亲六神/野鹤断法）、紫微斗数与奇门排盘引擎。
</p>

---

[🚀 立即在线体验 (Cloudflare Pages)](https://bazi-liuyao-database.pages.dev) · [🚀 备用线路 (GitHub Pages)](https://orikami048.github.io/bazi-liuyao-database/) · [📖 快速上手与 CLI 运行](#-快速上手与-cli-排盘运行) · [🗂️ 目录与架构说明](#-目录与架构总览) · [☯️ 八字数据与引擎](#-八字命理数据库与推演引擎) · [🔮 六爻数据与引擎](#-六爻纳甲数据库与排盘引擎) · [💾 SQLite 直连查询](#-sqlite-单文件数据库直连)

---

</div>

## 🌟 项目亮点

本项目是一个专为 **AI 大模型（LLM / RAG）、算法排盘引擎、国学研习者与现代玄学开发者** 打造的**权威、结构化、全功能中华易学数据库与排盘推演系统**。

1. **权威经典溯源**：
   - 八字命理宗师著作：《三命通会》《渊海子平》《滴天髓阐微》《子平真诠》《穷通宝鉴》。
   - 六爻纳甲正统宗门：《增删卜易》（野鹤老人）、《卜筮正宗》（王洪绪）、《火珠林》、《黄金策千金赋》。
2. **多端开箱即用**：
   - **Python CLI 独立推演引擎**：直接命令行排八字（真太阳时、节气起月、大运流年、神煞、五行旺衰量化）、六爻摇卦排盘、紫微与奇门。
   - **结构化 JSON 数据集** (`data/`)：字段标准化，供 Web / App / 小程序 / API / MCP Server 直接调用。
   - **SQLite 单文件数据库** (`database/yixue_master.sqlite`)：支持 SQL 复杂关联检索。
   - **完整知识库与真实案例** (`references/`, `cases/`)：9 大命理专论知识库 + 身强身弱调候从格实战命例。

---

## 🚀 快速上手与 CLI 排盘运行

### 1. 安装依赖
```bash
pip install -r requirements.txt
```

### 2. 四柱八字标准排盘 (`scripts/paipan.py`)
```bash
# 基本排盘（公历 1990年5月18日 10点30分，男）
python scripts/paipan.py 1990 5 18 10 30 --gender male

# 带真太阳时经度校准与十步大运流年输出
python scripts/paipan.py 1990 5 18 10 30 --gender male --lng 121.47 --years 2026 10

# 直接输出结构化 JSON 数据供接口调用
python scripts/paipan.py 1990 5 18 10 30 --gender male --json
```

### 3. 六爻纳甲装卦排盘 (`scripts/liuyao.py`)
```bash
# 铜钱摇卦（6=老阴 7=少阳 8=少阴 9=老阳，从初爻到上爻）
python scripts/liuyao.py --yao 789876 --query "占今年求财"

# 依公历时间起卦并自动装配年月日时、旬空、月破与六神
python scripts/liuyao.py --yao 789876 --date 2026 10 3 19 15 --query "占出行吉凶"
```

### 4. 其他术数支持
- **紫微斗数排盘**：`python scripts/ziwei.py`
- **奇门遁甲排盘**：`python scripts/qimen.py`
- **梅花易数推演**：`python scripts/meihua.py`

---

## 🗂️ 目录与架构总览

```
bazi-liuyao-database/
├── scripts/                              # 🐍 核心排盘与推演计算引擎 (可独立 CLI 运行)
│   ├── paipan.py                         # 四柱八字排盘核心 (节气/真太阳时/大运/神煞/五行强弱)
│   ├── liuyao.py                         # 六爻纳甲装卦核心 (安世应/配六亲/装六神/查空破/动变)
│   ├── ziwei.py                          # 紫微斗数排盘
│   ├── qimen.py                          # 奇门遁甲排盘
│   └── meihua.py                         # 梅花易数排盘
│
├── data/                                 # 🗄️ 标准化 JSON 知识库与数据字典
│   ├── bazi/                             # ☯️ 八字命理全量数据库
│   │   ├── ganzhi_60.json                # 六十甲子全息数据 (纳音/藏干比例/旬空/十二长生)
│   │   ├── shishen_matrix.json           # 十神相生相克与六亲心性矩阵
│   │   ├── ganzhi_relations.json         # 天干五合/地支六合/三合/三会/相刑/相冲/相害/相破
│   │   ├── shensha_complete.json         # 40+ 核心神煞查法法则与断语全集
│   │   ├── tiaohou_qiongtong.json        # 《穷通宝鉴》十天干十二月调候用神总表
│   │   ├── geju_rules.json               # 八正格/专旺格/从格成败救应准则
│   │   └── classics/                     # 命理古籍校订全本 (滴天髓/子平真诠/穷通宝鉴等)
│   │
│   └── liuyao/                            # 🔮 六爻纳甲全量数据库
│       ├── 64_hexagrams.json             # 六十四卦全息表 (八宫/世应/纳甲/六亲/爻辞)
│       ├── najia_system.json             # 京房浑天纳甲体系与配卦安支法则
│       ├── six_gods_six_relatives.json   # 六亲六神吉凶断事与象意详解
│       ├── yongshen_rules.json           # 12类常见占事（求财/官运/疾病/婚姻等）取用神法
│       ├── liuyao_master_compendium.json # 《增删卜易》《卜筮正宗》理法断卦核心宝典
│       └── classics/                     # 六爻经典原文 (增删卜易/卜筮正宗/黄金策等)
│
├── database/
│   └── yixue_master.sqlite               # 💾 预构建 SQLite 数据库 (直连即可查询)
│
├── references/                           # 📚 权威理论与命理知识库 (Markdown)
│   ├── 00_gainian_suoyin.md              # 概念索引与术语总览
│   ├── 01_paipan_jichu.md                # 排盘基础与推导规则
│   ├── 02_wangshuai_yongshen.md          # 五行旺衰与用神取法
│   ├── 03_tiaohou_qiongtong.md           # 《穷通宝鉴》调候专论
│   ├── 04_shishen_xiangyi.md             # 十神心性与象意详解
│   ├── 05_geju.md                        # 八字格局体系与破救
│   ├── 06_shensha.md                     # 神煞体系与吉凶判定
│   └── 08_gufu_duanyu.md                 # 经典古赋断语汇编
│
├── cases/                                # 📝 经典实战案例库
│   ├── 01_shenqiang_caiguan.md           # 身强财官格案例解析
│   ├── 02_shenruo_yinbi.md               # 身弱印比格案例解析
│   ├── 03_tiaohou.md                     # 寒暖燥湿调候案例解析
│   └── 04_conge.md                       # 从旺从弱专旺案例解析
│
├── examples/
│   └── python_example.py                 # Python 调用与 SQLite 快速查询演示脚本
└── requirements.txt                      # 项目依赖
```

---

## 💾 SQLite 单文件数据库直连

可以直接使用 SQLite 命令行、Python 或 Navicat / DBeaver 打开 `database/yixue_master.sqlite`：

```sql
-- 查询所有包含“天乙贵人”的神煞规则
SELECT * FROM bazi_shensha WHERE name = '天乙贵人';

-- 查询乾宫所有卦象及其世应位置
SELECT id, name, gong, gong_element, type, shi_pos, ying_pos 
FROM liuyao_64_hexagrams 
WHERE gong = '乾宫金';

-- 查询甲子旬所有干支及其纳音
SELECT name, tiangan, dizhi, nayin, xunkong 
FROM bazi_ganzhi_60 
WHERE xun = '甲子旬';
```

---

## 🏷️ 核心学术索引与检索主题

- **📚 命理古籍**：三命通会、渊海子平、滴天髓阐微、子平真诠、穷通宝鉴、黄帝内经、神农本草经。
- **🔮 易学卜筮**：周易、易经六十四卦、六爻纳甲、京房易、火珠林、增删卜易、卜筮正宗、易隐、黄金策千金赋。
- **⚡ 核心概念**：四柱八字、生辰八字、十神、天乙贵人、神煞、六十甲子纳音、十二长生、六亲、六神（青龙朱雀勾陈螣蛇白虎玄武）、世应、动变、旬空月破、飞神伏神。
- **🌐 国际标准对照**：Traditional Chinese Metaphysics, BaZi (Four Pillars of Destiny), I Ching (Book of Changes), Liu Yao Divination, 64 Hexagrams, Najia Method, Heavenly Stems and Earthly Branches, Ten Gods (Shi Shen).

---

## 📄 开源许可证 (License)

本项目采用 [MIT License](./LICENSE) 开放授权，允许自由用于个人学习、学术研究、商业软件集成与 AI 大模型训练。
