/**
 * 原始数据类型:
 * 布尔值, 数值, 字符串, null, undefined, Symbol(ES6)
 *
 * 对象类型:
 *
 *
 */

/**
 * 布尔值
 */
let isDone: boolean = false
//直接调用Boolean()也可返回一个boolean类型
let isDone2: boolean = Boolean(1)

//new Boolean返回一个Boolean对象
//报错:Type 'Boolean' is not assignable to type 'boolean'
//let isDone3: boolean = new Boolean(1)
//返回一个Boolean对象
let isDone4: Boolean = new Boolean(1)

'在TypeScript中，boolean是基本类型，Boolean是构造函数，其他类型同(除null和undefined)'

/**
 * 数值
 */
let num: number = 6
let num2: number = NaN

/**
 * 字符串
 */
let str: string = '66'
let str2: string = `Hello ${str}`

/**
 * void(空值)
 */
let v: void = null
let v2: void = undefined
//void只能被赋值null, undefined
//let v3: void = 0

function alert(str): void {
  alert(str)
}

/**
 * null和undefined
 *
 */
let n: null = null
let u: undefined = undefined
//null和undefined是所有类型子类型，可以赋值给其他类型，但void不行
let num3: number = u
let v4: void = null
//Type 'void' is not assignable to type 'number'
//let num4: number = v4
