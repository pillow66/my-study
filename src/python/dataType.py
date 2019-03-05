#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
整数
"""
a = -1
print(a)

"""
浮点数
"""
a = 1.333
print(a)

"""
字符串
"""
a = 'abc'
print(a)

# \转义字符串
a = 'a\'b\'c'
# a'b'c
print(a)

# r''不转义字符串
a = r'a\'b\'c'
# a\'b\'c
print(a)

# '''...'''支持\n换行
a = '''a
b
c'''
# a
# b
# c
print(a)

"""
布尔值
可用and, or, not运算
"""
a = True or False
# False
print(a)

"""
空值
Python里一个特殊的值，用None表示
"""
a = None
# None
print(a)

"""
变量
= 赋值语句，可以把任意数据类型赋值给变量，同一变量可反复赋值，且可为不同类型变量
变量本身类型不固定的语言称之为动态语言，与之对应的是静态语言
静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，就会报错(如Java)
"""
# 变量a是一个整数
a = 1
a = 'abc'
# 解释器创建布尔类型True和变量a，将a指向True
a = True
# 解释器创建变量b，将b指向a指向的True
b = a
# 解释器创建字符串'abc'，将a指向'abc'
a = 'abc'
# b指向并未改变
# True
print(b)

"""
常量
不能改变的量，Python中，通常常量名全大写
"""
PI = 3.14
print(PI)
# 但实际上PI仍然是一个变量，Python根本没有任何机制保障PI不会改变(笑)
# // 地板除，值始终为整数
# 3
PI = 10//3
print(PI)

"""
字符串编码
ASCII:计算机由美国人发明，收录大小写英文数字等，通常1字节表示1字符
GB2312:处理中文1字节不够，至少2字节，中国制定该编码
Unicode:把所有语言统一到一套编码，避免乱码
问题：通常使用2字节表示1字符(偏僻字符可能4字节)，英文用Unicode编码要比ASCII需要多一倍存储空间
因此，出现将Unicode编码转换为可变长编码的UTF-8，通常英文1字节，汉子3字节(偏僻字4-6字节)，节省空间

计算机内存统一使用Unicode编码，需要保存到硬盘或传输时，再转为UTF-8

Python 3字符串Unicode编码，支持多语言

字符串操作str和bytes互转，为避免乱码，始终坚持使用utf-8编码
"""
a = '中文'
print(a)

# 取字符串整数表示
a = ord('中')
print(a)

# 编码转换为字符
a = chr(20013)
print(a)

# 知道字符整数编码，可用十六进制直接写
a = '\u4e2d\u6587'
# '中文'
print(a)

# b''编码为bytes，每字符1字节，只支持英文
a = b'abc'
print(a)

a = '中文'
# 中文使用encode可编码为指定bytes
a = a.encode('utf-8')
# b'\xe4\xb8\xad\xe6\x96\x87'
print(a)

a = b'\xe4\xb8\xad\xe6\x96\x87'
# bytes解码为指定编码, errors参数忽略错误字节
a = a.decode('utf-8', errors='ignore')
# 中文
print(a)

# len获取字符数
a = len('中文')
# 2
print(a)
a = len('中文'.encode('utf-8'))
# 6 1个中文经utf-8编码后通常占3字节
print(a)

"""
格式化
%d 整数占位符
%f 浮点数占位符
%s 字符串占位符
%x 十六进制整数占位符

% 和字母间插入数字，表示最大场宽
%2d 输出2位整数，不够2位右对齐
%02d 输出2位整数，不够2位0补齐

使用format函数
"""
a = '%2d-%02d' % (3, 1)
# _3-01
print(a)

# 浮点数保留小数点后2位
a = '%.2f' % 3.1415926
# 3.14
print(a)

# %s始终把任何类型转换为字符串显示
a = 'hello %s' % 66
# hello 66
print(a)

# %%表示一个%
a = '%%%d' % 10
# %10
print(a)

# {0}，{1}占位
a = 'hello {0}, {1:.2f}'.format('66', 3.1415926)
# hello 66, 3.14
print(a)

"""
list
有序集合，可随时添加删除其中元素
"""
a = ['66', '77']
# 2
print(len(a))
# 77
print(a[1])
# 77 -1倒数第1， -2倒数第2，-3倒数第3
print(a[-1])

# 追加元素
a.append('88')
# ['66', '77', '88']
print(a)

# 指定位置插入元素
a.insert(1, '11')
# ['66', '11', '77', '88']
print(a)

# 出栈
b = a.pop()
# 88
print(b)
# ['66', '11', '77']
print(a)

# 指定位置出栈
b = a.pop(1)
# 11
print(b)
# ['66', '77']
print(a)

a[0] = '666'
# 666
print(a[0])

"""
tuple
元祖，类似list，但一旦初始化就不能修改
用()定义
"""
a = ('66', '77')
# ('66', '77')
print(a)
# '77'
print(a[1])

# 定义空tuple
a = ()
# ()
print(a)

# 定义只含一个元素的tuple
a = (1)
# 1 a = 1
print(a)
# 后加,才是定义一个元素的tuple
a = (1,)
# (1,)
print(a)

# tuple本身不可变，但其包含的元素可变
a = (1, ['66'])
# 改变tuple内list指向
a[1][0] = '77'
# (1, ['77'])
print(a)

"""
dict
map键值对，具有极快查找速度

和list比较：
dict查找插入速度极快，不会随key增加变慢
dict需要占用大量内存

dict的key必须是不可变对象，因为根据key计算value存储位置
"""
dict = {'ada': 0, 'lulu': 1}
dict['alex'] = 2
a = dict['alex']
# 2
print(a)

# in判断键是否存在
a = 'simon' in dict
# False
print(a)

# 通过get取值，不存在返回None(或返回指定值)
a = dict.get('simon')
# None
print(a)

a = dict.get('simon', -1)
# -1
print(a)

# 删除key
a = dict.pop('alex')
# 2
print(a)
# {'ada': 0, 'lulu': 1}
print(dict)

"""
set
类似dict，一组key集合，不存储value，因key不能重复，set中无重复key

与dict唯一区别，不存储value
"""
# 创建set，需传入一个list集合
s = set(['ada', 'lulu', 'ada'])
# 无序，且自动过滤重复元素
# {'lulu', 'ada'}
print(s)

# 添加key
a = s.add('alex')
# None
print(a)
# {'alex', 'ada', 'lulu'}
print(s)

# 删除key
a = s.remove('alex')
# None
print(a)
# {'lulu', 'ada'}
print(s)

# 两个set可做求交集，并集等操作
s = set(['ada', 'lulu']) & set(['lulu', 'alex'])
# {'lulu'}
print(s)

s = set(['ada', 'lulu']) | set(['lulu', 'alex'])
# {'lulu', 'ada', 'alex'}
print(s)
