/**
 * [类型 + []]表示
 */
let arr: number[] = [1, 2, 3]
//Type '(number | string)[]' is not assignable to type 'number[]'
//arr = [1, '2', 3]
arr.push(4)
//Type '(number | string)[]' is not assignable to type 'number[]'
//arr.push('5')

/**
 * 数组泛型(Array Generic)
 */
let arr2: Array<number> = [1, 2, 3]

/**
 * 接口数组
 */
interface INumberArray {
  [index: number]: number
}

let arr3: INumberArray = [1, 2, 3]

/**
 * 用any表示数组中允许出现任意类型
 */
let arr4: any[] = [1, true, 'hello']

/**
 * 类数组
 * 不是数组类型，如：arguments
 * 常见类数组都有自己的接口定义，如IArguments, NodeList, HTMLCollection等
 */
function sum() {
  //Type 'IArguments' is not assignable to type 'number[]'
  //let args: any[] = arguments

  let args: IArguments = arguments
}
