# coding:utf-8

# int
a = -1
print(a)

# float
a = 1.333
print(a)

# string
a = 'abc'
print(a)

# \转义字符串
a = 'a\'b\'c'
# 输出:a'b'c
print(a)

# r''不转义字符串
a = r'a\'b\'c'
# 输出:a\'b\'c
print(a)

# '''...'''支持\n换行
a = '''a
b
c'''
# 输出: a
# b
# c
print(a)
