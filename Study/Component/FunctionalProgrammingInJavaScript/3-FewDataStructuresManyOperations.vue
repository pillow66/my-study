<template>
  <h3>Few Data Structures, Many Operations</h3>
</template>

<script>
  import _ from 'lodash'

  /**
   * 程序控制流
   */
  /*
  //OOP
  while (optC) {
    if (optA()) {
      optB1()
    }
    else {
      optB2()
    }
  }
  optD();

  //FP
  optA().optB().optC().optD*/

  /**
   * 方法链(Method chaining)
   * OOP中允许对同一类型执行链式函数调用实现复合操作
   */
  //OOP
  //substring和toLowerCase函数通过内部this访问原字符串值，并返回新字符串
  'Function'.substring(0, 5).toLowerCase()

  //FP
  //FP方式显然没有OOP方法链调用看起来通俗易懂
  //toLowerCase(subString('Function', 0, 5))

  /**
   * 函数链(Function chaining)
   * OOP通过继承实现代码重用，通过创建新类型，继承父类型函数，再此基础上修改实现自己的业务逻辑
   * 而FP不通过创建新类型，而通过抽象提出一些高阶函数
   */

  /**
   * lodash.js
   */
    //OOP
  let result = []
  let arr1 = [1, 2, 3]
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] * 2)
  }

  //FP
  //map返回一个新数组[2, 4, 6]，不会改变原数组arr1
  _.map(arr1, a => a * 2)

  //map实现原理
  function map(arr, fn) {
    let idx = 0,
      len = arr.length,
      result = new Array(len)

    //基于传统循环
    //不必关心循环计数和边界条件检查
    while (idx < len) {
      result[idx] = fn(arr[idx], idx, arr)
      idx++
    }

    return result
  }

  //返回6
  _.reduce(arr1, (a, b) => a + b)

  //返回[1]
  _.filter(arr1, a => a === 1)

  /**
   * 申明式惰性函数链
   */
  //使用_chain组合链式操作，惰性求值，调用value函数时才放回计算结果
  //返回2
  //point-free语法，简洁优雅语义化~流弊流弊~
  _.chain(arr1)
    .filter(a => a === 1)
    .map(a => a * 2)
    .reduce((a, b) => a + b)
    .value()

  /**
   * 递归
   * 包含2个主要部分：
   * 1.结束条件
   * 2.递归条件
   *
   * 使用递归代替loop
   */
    //OOP
  let sumNum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sumNum += arr1[i]
  }
  //输出6
  console.log(sumNum)

  //FP
  //输出6
  console.log(_.chain(arr1).reduce((a, b) => a + b, 0).value())

  function sum(arr) {
    let result

    if (_.isEmpty(arr)) {
      result = 0
    }
    else {
      result = _.first(arr) + sum(_.drop(arr))
    }

    return result
  }

  /*function sum(arr, sum = 0) {
    if (_.isEmpty(arr)) {
      return 0
    }

    //可利用ES6尾调用优化
    return sum(_.drop(arr), sum + _.first(arr))
  }*/

  //输出6
  console.log(sum(arr1))

  export default {}
</script>

<style lang="scss" scoped>
</style>
