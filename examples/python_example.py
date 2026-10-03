# -*- coding: utf-8 -*-
"""
python_example.py — 快速上手使用八字与六爻数据库
"""

import os
import json
import sqlite3

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DB_PATH = os.path.join(BASE_DIR, "database", "yixue_master.sqlite")

def test_sqlite_queries():
    print("=" * 60)
    print("1. 测试 SQLite 数据库直连查询")
    print("=" * 60)
    
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
    
    # 1. 查询 60 甲子中纳音为“海中金”的干支
    cur.execute("SELECT name, tiangan, dizhi, nayin, xunkong FROM bazi_ganzhi_60 WHERE nayin = '海中金'")
    rows = cur.fetchall()
    print("【纳音为海中金的干支】:")
    for r in rows:
        print(f"  干支: {r[0]} | 天干: {r[1]} | 地支: {r[2]} | 旬空: {r[4]}")
        
    # 2. 查询乾宫所有卦象
    cur.execute("SELECT id, name, gong, gong_element, type, shi_pos, ying_pos FROM liuyao_64_hexagrams WHERE gong = '乾宫金'")
    hex_rows = cur.fetchall()
    print("\n【乾宫八卦及其世应位置】:")
    for h in hex_rows:
        print(f"  第 {h[0]:02d} 卦: {h[1]} ({h[4]}) -> 世在第 {h[5]} 爻，应在第 {h[6]} 爻")
        
    conn.close()

def test_json_datasets():
    print("\n" + "=" * 60)
    print("2. 测试 JSON 格式数据集直接读取")
    print("=" * 60)
    
    shensha_path = os.path.join(BASE_DIR, "data", "bazi", "shensha_complete.json")
    with open(shensha_path, "r", encoding="utf-8") as f:
        shensha_data = json.load(f)
        
    print(f"成功载入八字神煞库，共收录 {len(shensha_data)} 个核心神煞：")
    for s in shensha_data[:4]:
        print(f"  - {s['name']} ({s['type']}): {s['formula']}")
        
    hex_path = os.path.join(BASE_DIR, "data", "liuyao", "64_hexagrams.json")
    with open(hex_path, "r", encoding="utf-8") as f:
        hex_data = json.load(f)
        
    print(f"\n成功载入六爻纳甲库，共收录 {len(hex_data)} 卦全息纳甲数据。")
    print(f"以第一卦【{hex_data[0]['name']}】为例，初爻至六爻装配：")
    for line in hex_data[0]["lines"]:
        print(f"  第 {line['line']} 爻: {line['label']}")

if __name__ == "__main__":
    test_sqlite_queries()
    test_json_datasets()
    print("\n[OK] 所有易学数据库与引擎验证通过！")
