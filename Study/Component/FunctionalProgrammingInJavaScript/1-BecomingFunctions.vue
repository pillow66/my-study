<template>
  <div>
    <h3>Becoming Functions</h3>
  </div>
</template>

<script>
  import {map, curry, chain} from 'lodash'

  /**
   * 设计原则：
   * 可扩展
   * 模块化
   * 可重用
   * 易于测试
   * 可读性强
   */

  /**
   * 函数式程序设计理念基础：
   * 申明式程序设计
   * 纯函数
   * 引用透明
   * 不可变
   */

  /**
   * 函数式程序设计是申明式
   * 命令式：暴露具体求值实现步骤
   * 申明式：分离描述和具体求值，提倡用表达式描述业务逻辑，无需关注控制流(if else...for...)和状态(state)变化
   */

  /**
   * class分类:
   * First Class:该类型值可作为函数参数和返回值，可赋值给变量(一等公民)
   * Second Class:该类型值可作为函数的参数，不能从函数返回，不能赋值给变量
   * Third Class:改类型值连函数参数也不行
   */

  /**
   * for循环的问题
   * 命令式控制结构
   * 无法复用
   * 难以插入其他操作
   * 暗示代码一直变化
   */

  /**
   * 函数式程序设计要求尽可能
   * 无状态，不会污染全局状态(state)
   * 不可变
   *
   * 使用纯函数可避免副作用和改变状态(state)
   *
   * 通过一系列纯函数组合的申明表达式，创建不可变程序，消除函数副作用
   */

  /*** 命令式 ***/
  let array = [1, 2]
  let len = array.length
  for (; len--;) {
    array[len] = array[len] + 6
  }
  console.log(array) //[7, 8]

  /*** 申明式 ***/
  array = [1, 2]
  //无需关心循环计数和数组索引
  //标准循环代码很难复用，除非抽象成方法
  //结合ES6的lambda表达式和箭头函数，将代码尽可能的精简
  array = map(array, item => item + 6)
  console.log(array) //[7, 8]

  /*** 非纯函数 ***/
  let counter = 0

  //非纯函数
  function increment() {
    //副作用，依赖一个输出不可预见的因素——时间
    let date = new Date.now()

    //副作用，改变了不属于其作用域内的外部状态counter，在调用期间counter可被修改
    return ++counter
  }

  /**
   * 函数副作用(调用函数时，除返回函数值外，还对主调用函数产生附加的影响)
   * 改变全局变量，属性，数据结构
   * 改变函数参数原始值
   * 处理用户输入值
   * 抛出一个异常，除非在方法内catch
   * 打印到屏蔽或log
   * 遍历HTML结构，cookies, 访问数据库
   *
   * JavaScript中this对象取决于调用上下文，导致理解困难
   */
  let elementId = 'div66'
  let db = {
    get(id) {
    }
  }

  function showStudent(ssn) {
    //使用未在参数中申明的外部变量db作为数据访问入口
    //db可被外部修改为任何值，计算结果可能改变，破坏程序完整性
    let student = db.get(ssn)

    if (student != null) {
      //全局变量elementId可以被外部修改为任何值，难以控制
      //HTML元素被直接修改，HTML元素本身是一个可变，共享，全局资源
      document.querySelector(`#${elementId}`).innerHTML = `${student.ssn},${student.firstName}`
    }
    else {
      //强行抛出异常，将导致程序调用堆栈回滚以及程序突然中止
      throw new Error('Student not found.')
    }
  }

  /**
   * 纯函数优点
   * 求值期间仅依赖输入，不依赖任何额外状态(state)
   * 不会造成操出其作用域(scope)外的变化，比如修改全局状态(state)，或通过引用传值的参数
   *
   * 命令式程序设计总是申明变量，然后将变量从一个状态变更为另一个状态
   */

  /**
   * 引用透明
   * 定义纯函数的一种方式，函数返回值仅仅依赖函数参数，确保同一个输入只能得到同一个结果
   * 为达到引用透明，需移除其依赖状态(state)，移除引用的外部变量，显示指定方法参数签名
   */

  /**
   * 以上showStudent函数的改善建议：
   * 将较长的函数分割成小函数片段，确保小函数片段职责单一
   * 通过明确定义函数需要的所有参数来减少副作用
   *
   * 柯里化（Currying），又称部分求值（Partial Evaluation），是把接受多个参数的函数变换成接受一个
   * 单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术
   */
  let abc = function (a, b, c) {
    return [a, b, c]
  }
  let curried = curry(abc)
  //全部输出:[1,2,3]
  console.log(curried(1)(2)(3), curried(1, 2, 3))

  let find = curry((db, id) => {
    let obj = db.get(id)

    if (obj == null) {
      //有待改进，应该确保函数返回一个稳定且可预测的结果
      throw new Error('Student not found.')
    }

    return obj
  })

  let csv = function (student) {
    return `${student.ssn},${student.firstName}`
  }

  let innerHTML = curry((elementId, info) => {
    document.querySelector(`#${elementId}`).innerHTML = info
  })

  //将函数拆分成小功能片段，有利于灵活复用，申明式的调用使得代码可读性更强
  //魔法run函数后续将介绍
  //let showStudentAdavance = run(innerHTML('#div66'), csv, find(db))
  //showStudentAdavance('66')

  /**
   * 保持不可变
   * 不可变数据是创建后就不可被改变的数据(JavaScript基本类型)
   * 但Arrays等引用类型可变，即使作为参数参入函数，可修改原始数据导致函数副作用
   */
  let sortDesc = function (arr) {
    return arr.sort((a, b) => b - a)
  }
  let arr = [1, 2]
  //输出：[2,1], [2,1],原数组已改变
  console.log(arr, sortDesc(arr))


  /**
   * 函数式程序设计的优势
   * 本质:各种简单的小函数组合成完整的功能
   *
   * 基于单一原则分解复杂任务
   * 之前使用高阶函数run组合整个程序，run接受其他的函数作为参数，并返回一个函数
   * f*g = f(g(x)) f组合g，g的返回值作为参数传入f(要求函数的输入和输出达成一致)
   * 函数式组合提高抽象层次，描述代码大纲，但不暴露执行细节
   *
   * 使用链式调用传递数据
   *
   * 通过响应式范式减少异步操作和事件驱动代码的复杂性
   */

  /*** 命令式:求enrolled>1的学生平均分数 ***/
  let enrollment = [{enrolled: 1, grade: 10}, {enrolled: 2, grade: 20}]
  let totalGrades = 0
  let totalStudentsFound = 0
  for (let len = enrollment.length; len--;) {
    let student = enrollment[len]

    if (student.enrolled > 1) {
      totalGrades += student.grade
      totalStudentsFound++
    }
  }
  //20
  console.log(totalGrades / totalStudentsFound)

  /*** 函数式:求enrolled>1的学生平均分数，使用链式调用chain传递数据 ***/
  let avarage = chain(enrollment)
    .filter(student => student.enrolled > 1)
    .meanBy(o => o.grade)

  //20，chain惰性求值，调用value()方法才计算结果 ~^-^~
  console.log(avarage.value())

  export default {}
</script>
