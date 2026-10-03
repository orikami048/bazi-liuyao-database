# -*- coding: utf-8 -*-
"""
bazi_calculator.py — 四柱八字排盘与神煞分析引擎
"""

import json

TIANGAN = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"]
DIZHI = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"]
TIANGAN_WUXING = {"甲": ("木", "阳"), "乙": ("木", "阴"), "丙": ("火", "阳"), "丁": ("火", "阴"), "戊": ("土", "阳"), "己": ("土", "阴"), "庚": ("金", "阳"), "辛": ("金", "阴"), "壬": ("水", "阳"), "癸": ("水", "阴")}
DIZHI_WUXING = {"子": ("水", "阳"), "丑": ("土", "阴"), "寅": ("木", "阳"), "卯": ("木", "阴"), "辰": ("土", "阳"), "巳": ("火", "阴"), "午": ("火", "阳"), "未": ("土", "阴"), "申": ("金", "阳"), "酉": ("金", "阴"), "戌": ("土", "阳"), "亥": ("水", "阴")}

SHENSHA_GUIREN = {
    "甲": ["丑", "未"], "戊": ["丑", "未"], "乙": ["子", "申"], "己": ["子", "申"],
    "丙": ["亥", "酉"], "丁": ["亥", "酉"], "壬": ["卯", "巳"], "癸": ["卯", "巳"],
    "庚": ["寅", "午"], "辛": ["寅", "午"]
}

class BaziCalculator:
    """四柱八字快速排盘分析"""
    
    @staticmethod
    def get_shishen(day_master, target_gan):
        """计算十神"""
        dm_elem, dm_yy = TIANGAN_WUXING[day_master]
        tg_elem, tg_yy = TIANGAN_WUXING[target_gan]
        same_yy = (dm_yy == tg_yy)
        
        if dm_elem == tg_elem:
            return "比肩" if same_yy else "劫财"
        elif (dm_elem == "木" and tg_elem == "火") or (dm_elem == "火" and tg_elem == "土") or (dm_elem == "土" and tg_elem == "金") or (dm_elem == "金" and tg_elem == "水") or (dm_elem == "水" and tg_elem == "木"):
            return "食神" if same_yy else "伤官"
        elif (dm_elem == "木" and tg_elem == "土") or (dm_elem == "火" and tg_elem == "金") or (dm_elem == "土" and tg_elem == "水") or (dm_elem == "金" and tg_elem == "木") or (dm_elem == "水" and tg_elem == "火"):
            return "偏财" if same_yy else "正财"
        elif (dm_elem == "木" and tg_elem == "金") or (dm_elem == "火" and tg_elem == "水") or (dm_elem == "土" and tg_elem == "木") or (dm_elem == "金" and tg_elem == "火") or (dm_elem == "水" and tg_elem == "土"):
            return "七杀" if same_yy else "正官"
        else:
            return "偏印" if same_yy else "正印"

    @staticmethod
    def check_shensha(day_gan, year_zhi, zhi_list):
        """分析四柱神煞"""
        results = []
        guiren_targets = SHENSHA_GUIREN.get(day_gan, [])
        for idx, z in enumerate(zhi_list):
            pos = ["年支", "月支", "日支", "时支"][idx]
            if z in guiren_targets:
                results.append(f"{pos}【{z}】临 天乙贵人")
        return results

if __name__ == "__main__":
    calc = BaziCalculator()
    print("甲日主见庚:", calc.get_shishen("甲", "庚"))
    print("甲日主见丑未神煞:", calc.check_shensha("甲", "辰", ["丑", "寅", "辰", "未"]))
