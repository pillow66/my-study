/**
 * 函数声明
 *
 */
function sum(x, y) {
  return x + y
}

//调用时，输入多余或少传参数不被允许
function sum2(x: number, y: number): number {
  return x + y
}

//Supplied parameters do not match any signature of call target
//sum2(1, 2, 3)
//sum2(1)
sum2(1, 2)

/**
 * 函数表达式声明
 */
let sum3 = function (x, y) {
  return x + y
}

let sum4 = function (x: number, y: number): number {
  return x + y
}

//TypeScript类型定义中的=>用来表示函数的定义，左边输入类型(需用括号)，右边输出类型
//并非ES6中箭头函数！！！
let sum5: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y
}

/**
 * 接口定义函数签名
 */
interface IWork {
  (status: string): boolean
}

let myWork: IWork
myWork = function (status: string) {
  return status === 'finished'
}

/**
 * 可选参数
 * 必须是最后一个参数
 */
function sum6(x: number, y?: number) {
  return x
}

sum6(1)

/**
 * 参数默认值
 * TypeScript将添加了默认值得参数识别为可选参数，此时不受可选参数必须是最后一个参数的约束
 */
function sum7(x: number, y: number = 6) {
  return x + y
}

sum7(1)

function sum8(x: number = 6, y: number) {
  return x + y
}

sum8(1, 2)
sum8(undefined, 2)

/**
 * 剩余参数(rest参)
 * ...实际上是一个数组
 * 只能是最后一个参数
 */
function sum9(...items: number[]): number {
  let result = 0

  items.forEach(function (item) {
    result += item
  })

  return result
}

sum9(1, 2, 3, 4, 5)

/**
 * 重载
 * 允许一个函数接受不同签名的参数，做不同处理
 */
//TypeScript优先从最前面的函数定义开始匹配，所以要优先声明更精确的函数定义
function sum10(x: number): number
function sum10(x: string): string
function sum10(x: number | string): number | string {
  let result: number | string = 0

  if (typeof x === 'number') {
    result += x
  }
  else if (typeof x === 'string') {
    result += x
    result = result.toString()
  }

  return result
}
