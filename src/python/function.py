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

# 空函数，pass语句，占位符，什么都不做
def nop():
    pass

if True:
    # 还没想好怎么写，放一个，先让代码运行起来
    pass

"""
参数检查
"""
def fun2(x):
    # 类型检查，只接受整数和浮点
    if not isinstance(x, (int, float)):
        raise TypeError('参数类型错误')
    return 2 * x

# 传入参数，与定义参数个数不符，报错
# a = fun2(1, 2)
# 传入参数，与定义参数类型不符，报错
# a = fun2('1')
a = fun2(1)
# 2
print(a)

"""
返回多个值
返回多个值是语法糖，其实返回的是一个tuple
"""
def fun3(n):
    nx = 1 * n
    ny = 2 * n

    return nx, ny

x, y = fun3(1)
# 1 2
print(x, y)

# 返回多个值是语法糖，其实返回的是一个tuple
a = fun3(1)
# (1, 2)
print(a)

def power(x, n = 2):
    s = 1
    while n > 0:
        n -= 1
        s *= x
    return s

"""
位置参数
"""
# x,n为位置参数，调用时需按顺序传入
a = power(2,2)
# 4
print(a)

"""
默认参数
默认参数必须定义在必选参数后
默认参数必须指向不变对象
"""
a = power(2)
# 4
print(a)

# 默认参数坑
def fun4(l = []):
    l.append('END')
    return l

a = fun4()
# ['END']
print(a)

a = fun4()
# ['END', 'END']
# 原因：l是一个变量，指向[]，改变l内容会改变默认参数内容
print(a)

# 默认参数必须指向不变对象
def fun5(l = None):
    if l is None:
        l = []

    l.append('END')
    return l

a = fun5()
# ['END']
print(a)

a = fun5()
# ['END']
print(a)

"""
可变参数 
* 定义
"""
def fun6(*numbers):
    print(numbers)

    sum = 0
    for n in numbers:
        sum += n

    return sum

a = fun6(1, 2, 3)
# (1, 2, 3) 可变参numbers也是一个tuple
# 6
print(a)

params = [1, 2, 3]
a = fun6(*params)
print(a)

params = (1, 2, 3)
a = fun6(*params)
print(a)

"""
关键字参数 
** 定义，在函数内部将参数封装为一个dict
"""
def fun7(name, **others):
    print(name, others)

# lulu {}
fun7('lulu')

# lulu {'age':1, 'sex':0}
fun7('lulu', age=1, sex=0)
# **params传入会吧params拷贝一份，传入，函数改动不会影响外部
params = {'age': 1, 'sex': 0}
fun7('lulu', **params)

"""
命名关键字参数
* 后部分为命名关键字参数
"""
def fun8(name, *, age, sex):
    print(name, age, sex)

# 命名关键字强制指定接受参数的名字，不满足条件报错
# params = {'age': 1}
# params = {'age': 1, 'sex': 0, 'age':0}
params = {'age': 1, 'sex': 0}
# lulu {'age':1, 'sex':0}
fun8('lulu', **params)

"""
参数组合
"""
def fun9(a, b=0, *args, **kw):
    print(a, b, args, kw)

# 1 2 (3, 4) {'name': 'lulu', 'sex': 0}
fun9(1,2,3,4,**{'name': 'lulu', 'sex': 0})

"""
递归函数
递归调用次数过多，会导致栈溢出，每进入一个函数调用，会增加一层栈

尾递归：函数返回的时候，调用自身，且return语句不能包含表达式
编译器可以优化尾递归，使递归无论调用多少次，都只占有一个栈，不溢出

然鹅
Python解释器并没有做尾调用优化
"""
def fun10(n):
    if n == 1:
        return 1
    # 非尾递归
    return n + fun10(n-1)

a = fun10(3)
# 6
print(a)

def fun11(n):
    return fun11_iter(n, 1)

def fun11_iter(n, result):
    if n == 1:
        return result
    return fun11_iter(n-1, result + n)

a = fun11(3)
print(a)