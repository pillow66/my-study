#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
条件判断
"""
a = 20

# 20
if a >= 10:
    print(a)

# 10.0
if a >= 30:
    print(a)
else:
    print(a/2)

# 20
if a >= 30:
    print(10)
elif a == 20:
    print(a)
else:
    print(None)

# a为非零数值，非空字符串，非空list，tuple，就为True
# True
if a:
    print(True)

a = input('sex:')
# input输入是str虚转换为int，才能比较
a = int(a)
if a < 1:
    print('female')
else:
    print('male')

"""
循环
for...in
while
"""
a = [1, 2, 3]
# 1
# 2
# 3
for item in a:
    print(item)

l = len(a)-1
# 3
# 2
# 1
while l >= 0:
    print(a[l])
    l -= 1

"""
break
提前退出循环

continue
跳过当前循环，进入下一循环
"""
l = 0
# 2
# 3
while l <= 100:
    if l < 3:
        if l == 0:
            l += 1
            continue
        else:
            print(a[l])
            l += 1
    else:
        break