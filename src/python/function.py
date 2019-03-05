#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
定义函数
def 语句，依次定义函数名，参数，返回值

函数体内，一旦执行到return就结束并返回
没有return，返回结果None， return None等同return
"""
def fun(x):
    return 2 * x

a = fun(1)
# 2
print(a)

# pass语句，定义空函数，占位符，什么都不做
def nop():
    pass

if True:
    # 还没想好怎么写，放一个，让代码运行起来
    pass
