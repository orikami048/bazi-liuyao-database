<div align="center">

# 🔮 Chinese Metaphysics, BaZi & Liu Yao (I Ching) Authoritative Database & Calculation Engine
### 中华易学全息权威数据库与排盘引擎

<p align="center">
  <b>🇺🇸 English</b> · <a href="./README_ZH.md">🇨🇳 简体中文</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Dataset-BaZi_%26_LiuYao-8B0000?style=for-the-badge&logo=gitbook&logoColor=white" alt="Dataset" />
  <img src="https://img.shields.io/badge/Format-JSON_%26_SQLite_%26_Python-2E8B57?style=for-the-badge" alt="Format" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
</p>

<p align="center">
  <b>"Rooted in Canonical Metaphysics · Rigorously Structured · Developer & AI Ready"</b><br/>
  Comprehensive authoritative dataset & CLI calculation engines for Four Pillars of Destiny (BaZi), Liu Yao (I Ching Najia), Ziwei Doushu & Qimen Dunjia.
</p>

---

[🚀 Quick Start & CLI](#-quick-start--cli-usage) · [🗂️ Repository Architecture](#-repository-architecture) · [☯️ BaZi Data & Engine](#-four-pillars-bazi-data--engine) · [🔮 Liu Yao Data & Engine](#-liu-yao-i-ching-divination-data--engine) · [💾 SQLite Queries](#-sqlite-database-querying) · [🏷️ Indexing Keywords](#-indexing--topic-taxonomy-search-keywords)

---

</div>

## 🌟 Overview & Highlights

**Chinese Metaphysics, BaZi & Liu Yao Database** is an authoritative, standardized, and machine-readable open knowledge dataset and calculation suite curated for **AI/LLM developers, RAG knowledge graph builders, astrology researchers, and software engineers**.

1. **Canonical Classical Heritage**:
   - **Four Pillars of Destiny (BaZi)**: Sourced from foundational treatises: *Sanming Tonghui* (三命通会), *Yuanhai Ziping* (渊海子平), *Ditian Sui* (滴天髓), *Ziping Zhenquan* (子平真诠), and *Qiongtong Baojian* (穷通宝鉴).
   - **Liu Yao (Najia I Ching Divination)**: Compiled from classical authorities: *Zengshan Buyi* (增删卜易), *Bushi Zhengzong* (卜筮正宗), *Huozhulin* (火珠林), and *Huangjin Ce* (黄金策).
2. **Ready-to-Use Multi-Format Delivery**:
   - **Pure Python CLI Engines** (`scripts/`): Full-pipeline natal chart calculation with true solar time correction, solar terms month transitions, Dayun/Liunian timelines, Shensha stars, and elemental strength quantification.
   - **JSON Datasets** (`data/`): Structured schemas for instant API, web, mobile, and MCP server integrations.
   - **Standalone SQLite Database** (`database/yixue_master.sqlite`): Zero-configuration embedded relational SQL queries.
   - **Comprehensive Theory & Case Studies** (`references/`, `cases/`): 9 in-depth reference guides and clinical divination case analyses.

---

## 🚀 Quick Start & CLI Usage

### 1. Install Requirements
```bash
pip install -r requirements.txt
```

### 2. Four Pillars (BaZi) Charting (`scripts/paipan.py`)
```bash
# Standard Chart (Solar: May 18, 1990 10:30 AM, Male)
python scripts/paipan.py 1990 5 18 10 30 --gender male

# With True Solar Time (Longitude) and 10-Year Timeline
python scripts/paipan.py 1990 5 18 10 30 --gender male --lng 121.47 --years 2026 10

# Output structured JSON for API integration
python scripts/paipan.py 1990 5 18 10 30 --gender male --json
```

### 3. Liu Yao (I Ching Najia) Hexagram Setup (`scripts/liuyao.py`)
```bash
# Coin toss input (6=Old Yin, 7=Young Yang, 8=Young Yin, 9=Old Yang from line 1 to 6)
python scripts/liuyao.py --yao 789876 --query "Wealth Outlook This Year"

# Setup with date & time to auto-generate Solar terms, Day/Month clash, Void, and Six Deities
python scripts/liuyao.py --yao 789876 --date 2026 10 3 19 15 --query "Travel Safety"
```

---

## 🗂️ Repository Architecture

```
bazi-liuyao-database/
├── scripts/                              # 🐍 Core Calculation & Charting Engines (Standalone CLI)
│   ├── paipan.py                         # Four Pillars (BaZi) Engine (Solar terms, True solar time, Dayun, Shensha)
│   ├── liuyao.py                         # Liu Yao Engine (Hexagram setup, Shi/Ying, Six Kinships, Six Deities, Void)
│   ├── ziwei.py                          # Ziwei Doushu charting
│   ├── qimen.py                          # Qimen Dunjia charting
│   └── meihua.py                         # Meihua Yishu divination
│
├── data/                                 # 🗄️ Standardized JSON Knowledge Bases & Data Dictionaries
│   ├── bazi/                             # ☯️ Four Pillars (BaZi) Datasets
│   │   ├── ganzhi_60.json                # Sixty Jiazi complete data (Nayin, Hidden Stems, Void, 12 Stages of Life)
│   │   ├── shishen_matrix.json           # Ten Gods generation/control and psychological trait matrix
│   │   ├── ganzhi_relations.json         # Stems & Branches combinations, clashes, punishments, harms, breaks
│   │   ├── shensha_complete.json         # 40+ Major Shensha Stars lookup formulas & classical interpretations
│   │   ├── tiaohou_qiongtong.json        # Qiongtong Baojian 10 Stems x 12 Months Climate Adjustment Table
│   │   ├── geju_rules.json               # Eight Regular & Special Structural Pattern rules
│   │   └── classics/                     # Classical full texts (Ditian Sui, Ziping Zhenquan, etc.)
│   │
│   └── liuyao/                            # 🔮 Liu Yao (I Ching Divination) Datasets
│       ├── 64_hexagrams.json             # Complete 64 Hexagrams (8 Palaces, Shi/Ying lines, Najia Stems/Branches)
│       ├── najia_system.json             # Jing Fang Najia system formulas & line placement rules
│       ├── six_gods_six_relatives.json   # Six Kinships and Six Deities indications and traits
│       ├── yongshen_rules.json           # Focus Spirit (Yong Shen) rules for 12 clinical inquiry domains
│       ├── liuyao_master_compendium.json # Zengshan Buyi & Bushi Zhengzong core decision algorithms
│       └── classics/                     # Classical full texts (Zengshan Buyi, Bushi Zhengzong, etc.)
│
├── database/
│   └── yixue_master.sqlite               # 💾 Pre-built single-file SQLite database
│
├── references/                           # 📚 Metaphysical Theory Knowledge Bases (Markdown)
│   ├── 00_gainian_suoyin.md              # Core Concept Index & Glossary
│   ├── 01_paipan_jichu.md                # Chart Construction Foundations
│   ├── 02_wangshuai_yongshen.md          # Elemental Strength & Useful Spirit Rules
│   ├── 03_tiaohou_qiongtong.md           # Climate Balance & Temperature Adjustment
│   ├── 04_shishen_xiangyi.md             # Ten Gods Symbolism & Psychological Profiles
│   ├── 05_geju.md                        # Pattern Formations & Rescues
│   ├── 06_shensha.md                     # Shensha Auspicious & Inauspicious Stars
│   └── 08_gufu_duanyu.md                 # Classical Poetry & Predictive Aphorisms
│
├── cases/                                # 📝 Real-World Analytical Case Studies
│   ├── 01_shenqiang_caiguan.md           # Strong Body Wealth-Official Pattern Case
│   ├── 02_shenruo_yinbi.md               # Weak Body Resource-Companion Pattern Case
│   ├── 03_tiaohou.md                     # Temperature & Moisture Balance Case
│   └── 04_conge.md                       # Transformation & Special Pattern Case
│
├── examples/
│   └── python_example.py                 # Interactive Python query and usage demo
└── requirements.txt                      # Project Dependencies
```

---

## 💾 SQLite Database Querying

```sql
-- Query Tianyi Nobleman star rule
SELECT * FROM bazi_shensha WHERE name = '天乙贵人';

-- Query all hexagrams belonging to the Qian (Heaven) Palace
SELECT id, name, gong, gong_element, type, shi_pos, ying_pos 
FROM liuyao_64_hexagrams 
WHERE gong = '乾宫金';

-- Query all Stems and Branches in Jia-Zi Xun with Nayin
SELECT name, tiangan, dizhi, nayin, xunkong 
FROM bazi_ganzhi_60 
WHERE xun = '甲子旬';
```

---

## 🏷️ Indexing & Topic Taxonomy (Search Keywords)

- **📚 Classical Literature**: *Sanming Tonghui*, *Yuanhai Ziping*, *Ditian Sui*, *Ziping Zhenquan*, *Qiongtong Baojian*, *I Ching (Book of Changes)*, *Zengshan Buyi*, *Bushi Zhengzong*, *Huangjin Ce*.
- **🔮 Metaphysics & Divination**: Four Pillars of Destiny (BaZi), Liu Yao Divination, 64 Hexagrams, Najia System, Jing Fang Yi, Six Kinships (Liu Qin), Six Deities (Liu Shen), Shi Shen (Ten Gods), Shensha Stars, Nayin Elements.
- **🌐 International Categories**: Traditional Chinese Metaphysics, Chinese Astrology, Eastern Philosophy, Divination Algorithms, Fortune Telling Datasets, Machine Readable I Ching, RAG Knowledge Graph.

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE) — open and free for personal study, academic research, commercial applications, and AI model training.
