/**
 * 任意值(any)用来表示允许赋值为任意类型
 * 对于普通类型，不允许在赋值后改变值类型
 */
let num: number = 1
//Type 'string' is not assignable to type 'number'
//num = '1'

//any类型，允许被赋值为任意类型
let num2: any = 1
num2 = '1'

/**
 * 任意值的属性和方法
 * 申明一个变量为任意值后，对他的任何操作，返回的内容的类型都是任意值
 */
num2.name
num2.setName('66')

let num3: number = 1
//Unresolved variable name
//num3.name
//num3.setName('66')

/**
 * 未声明类型的变量
 * 变量在声名时，未指定类型，会识别为任意值类型
 */
let v
v = '1'
v = 1

let v2 = 1
//Type 'string' is not assignable to type 'number'
//v2 = '1'
