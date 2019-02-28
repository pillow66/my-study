<template>
  <h4>Others</h4>
</template>

<script>
  let val, f

  /**
   * Ramda is all curried
   */
  import {map, curry} from 'ramda'

  const double = x => x * 2

  val = map(double)([1, 2])
  console.log(val)

  const addCurry = curry((x, y) => x + y)
  val = addCurry(1)(2)
  console.log(val)
  val = addCurry(1, 2)
  console.log(val)

  /**
   * 比较运算
   * gt：判断第一个参数是否大于第二个参数
   * gte：判断第一个参数是否大于等于第二个参数
   * lt：判断第一个参数是否小于第二个参数
   * lte：判断第一个参数是否小于等于第二个参数
   * equals：比较两个值是否相等（支持对象的比较）
   * eqBy：比较两个值传入指定函数的运算结果是否相等
   */
  import {gt, gte, lt, lte, equals, eqBy} from 'ramda'

  val = gt(2)(1)
  console.log(val) // true

  val = gte(1)(1)
  console.log(val) // true

  val = lt(2)(1)
  console.log(val) // false

  val = lte(2)(2)
  console.log(val) // true

  val = equals(1)(1)
  console.log(val) // true
  val = equals({a: 1}, {a: 1})
  console.log(val) // true

  val = eqBy(Math.abs)(5)(-5)
  console.log(val) // true

  /**
   * 数学运算
   * add：返回两个值的和
   * subtract：返回两个值的差
   * multiply：返回两个值的积
   * divide：返回两个值的商
   */
  import {add, subtract, multiply, divide} from 'ramda'

  val = add(1)(2)
  console.log(val) // 3

  val = subtract(10)(1)
  console.log(val) // 9

  val = multiply(2)(5)
  console.log(val) // 10

  val = divide(10)(2)
  console.log(val) // 5

  /**
   * 逻辑运算
   * either：接受2个函数，其中一个返回true则为true（||条件）
   * both：接受2个函数，全部返回true则为true（&&条件）
   * allPass：接受一个函数数组，全部返回true则为true
   */
  import {__, either, both, allPass} from 'ramda'

  f = either(lt(__, 1), gt(__, 10)) // 小于1或大于10
  val = f(5)
  console.log(val) // false
  val = f(0)
  console.log(val) // true
  val = f(11)
  console.log(val) // true

  f = both(gt(__, 1), lt(__, 10)) // 大于1且小于10
  val = f(5)
  console.log(val) // true
  val = f(0)
  console.log(val) // false
  val = f(11)
  console.log(val) // false

  f = allPass([gt(__, 1), lt(__, 10)])
  val = f(5)
  console.log(val) // true
  val = f(0)
  console.log(val) // false
  val = f(11)
  console.log(val) // false

  /**
   * 字符串
   * split：分隔字符串
   * test：是否匹配正则
   * match：返回字符串匹配结果
   */
  import {split, test, match} from 'ramda'

  val = split('.')('a.b.c')
  console.log(val) // ['a', 'b', 'c']

  val = test(/^x/)('xyz')
  console.log(val) // true

  val = match(/a/g)('bananas')
  console.log(val) // ['a', 'a', 'a']

  export default {}
</script>

<style scoped>
</style>
