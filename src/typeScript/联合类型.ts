/**
 * 联合类型
 * 表示取值可以为多种类型中的一种
 */
let num: string | number
num = 1
num = '1'
//Type 'boolean' is not assignable to type 'string | number'
//num = true

/**
 * 访问联合类型的属性或方法
 * 不确定联合类型的变量到底是哪个类型，只能访问联合类型的公共属性或方法
 * 联合类型的变量在赋值时，会根据类型推论的规则推断出一个类型
 */
//length不是string和number的公共属性，
function getLength(obj: string | number): number {
  //return obj.length
}

function getString(obj: string | boolean): string {
  return obj.toString()
}

let num2: string | number
num2 = '1'
num2.length
num2 = 1
//Property 'length' does not exist on type 'number'
//num2.length
