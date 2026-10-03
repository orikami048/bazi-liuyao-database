# -*- coding: utf-8 -*-
"""
liuyao_calculator.py — 六爻装卦排盘与用神判定引擎
"""

import json

class LiuyaoCalculator:
    """六爻排盘与纳甲装卦核心"""
    
    SIX_GODS_ORDER = ["青龙", "朱雀", "勾陈", "螣蛇", "白虎", "玄武"]
    DAY_GAN_START_GOD = {
        "甲": 0, "乙": 0,
        "丙": 1, "丁": 1,
        "戊": 2,
        "己": 3,
        "庚": 4, "辛": 4,
        "壬": 5, "癸": 5
    }
    
    @staticmethod
    def get_six_gods(day_gan):
        """依日干排六神（从初爻至上爻）"""
        start_idx = LiuyaoCalculator.DAY_GAN_START_GOD.get(day_gan, 0)
        gods = []
        for i in range(6):
            gods.append(LiuyaoCalculator.SIX_GODS_ORDER[(start_idx + i) % 6])
        return gods

if __name__ == "__main__":
    calc = LiuyaoCalculator()
    print("甲日六神（初爻至六爻）:", calc.get_six_gods("甲"))
    print("庚日六神（初爻至六爻）:", calc.get_six_gods("庚"))
