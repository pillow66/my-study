"""
切片
"""
l = [1, 2, 3, 4, 5]
# 从索引1开始，至索引3为止
a = l[1:3]
# [2, 3]
print(a)

# 从索引0开始(可省略)，至索引3为止
a = l[:3]
# [1, 2, 3]
print(a)

a = l[-3:-1]
# [3, 4]
print(a)

a = l[-3:]
# [3, 4, 5]
print(a)

# 复制数组
a = l[:]
# [1, 2, 3, 4, 5]
print(a)

# tuple也可以切片
t = (1, 2, 3, 4, 5)
a = t[1:3]
# (2, 3)
print(a)

# string也可以切片
s = '12345'
a = s[1:3]
# '23'
print(a)

"""
迭代
for ... in
"""
for i in l:
    print(i)

for i in t:
    print(i)

# 字典可迭代，但顺序不定
d = {'name': 66, 'age': 0}
# 66
# 0
for key in d:
    print(d[key])

for value in d.values():
    print(value)

for k, v in d.items():
    print(k, v)

# string可迭代
# A
# B
# C
for i in 'ABC':
    print(i)


# 通过collections模块的iterable类可判断对象是否可迭代
from collections import Iterable
a = isinstance('ABC', Iterable)
# True
print(a)

# Python内置enumerate函数可以吧list变成索引-元素对
# 0 1
# 1 2
# 2 3
# 3 4
# 4 5
for index,value in enumerate(l):
    print(index, value)

"""
列表生成式
List Comprehensions，创建list的生成式
"""
a = list(range(1, 3))
# [1, 2]
print(a)

a = [x * 2 for x in range(1, 3)]
# [2, 4]
print(a)

a = [x * 2 for x in range(1, 3) if x % 2 == 0]
# [4]
print(a)

"""
生成器
将列表生成式的[]改为()，就创建了一个generator

通过next()函数获得generator下一个返回值

可用for in迭代

一个函数中包含yield关键字，这个函数就是一个generator
"""
g = (x * 2 for x in range(1, 3))
# <generator object <genexpr> at 0x02B3AA30>
print(g)

a = next(g)
# 2
print(a)

a = next(g)
# 4
print(a)

# 抛出：StopIteration异常
#a = next(g)

# 通过for in访问g
# 2
# 4
g = (x * 2 for x in range(1, 3))
for i in g:
    print(i)

def fun():
    print(1)
    yield 'a'
    print(2)
    yield 'b'

a = fun()

# 1
# a
# 2
# b
for i in a:
    print(i)

"""
迭代器
集合数据类型list, tuple, dict, set, str和
generator可直接作用于for循环

Iterable：可直接作用于for循环的对象
Iterator：可以被next()函数调用不断返回下一个值的对象

generator都是Iterator，但list, dict, str虽然是Iterable，但不是Iterator
iter()函数可将list, dict, str等变为Iterator

为何list, dict, str等不是Iterator?
Python的Iterator对象表示一个数据流，不知道长度，只能通过next不断调用计算下一个值，至抛出StopIteration
因此，Iterator是惰性计算，要返回下一个值才计算

Iterator可以表示一个无穷大数据流，list永远不可能存储无穷数据
"""
from collections import Iterator

a = isinstance(l, Iterator)
# False
print(a)

ll = iter(l)
a = isinstance(ll, Iterator)
# True
print(a)

a = next(ll)
# 1
print(a)