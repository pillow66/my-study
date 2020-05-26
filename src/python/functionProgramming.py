#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
高阶函数
变量可以指向函数
函数名也是变量
变量可指向函数，函数参数能接收变量，一个函数就可以接收另一个函数作为参数
"""
def fun(x):
    return 2 * x

a = fun
a = a(1)
# 2
print(a)


def fun2(x, f):
    return f(x)

a = fun2(1, fun)
# 2
print(a)

"""
map/reduce
"""
a = map(fun, [1, 2])
a = list(a)
# [2, 4]
print(a)

from functools import reduce

def fun3(x, y):
    return x + y

a = reduce(fun3, [1, 2])
# 3
print(a)

# 简化为lambda函数
a = reduce(lambda x, y: x + y, [1, 2])
# 3
print(a)

"""
filter
"""
def fun4(x):
    return x % 2 == 0

a = list(filter(fun4, [1, 2, 3]))
# [2]
print(a)

"""
sorted
"""
def fun5(x, y):
    return x > y

a = list(sorted([2, 1, 3]))
# [1, 2, 3]
print(a)

a = list(sorted([2, 1, 3], reverse=True))
# [3, 2, 1]
print(a)

def fun6(x):
    return 5-x

a = list(sorted([2, 1, 3], key=fun6))
# [3, 2, 1]
print(a)

"""
返回函数

"""
