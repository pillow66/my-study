/**
 * 接口
 * 对行为的抽象，具体如何需要由类实现
 */

interface IPerson {
  name: string,
  age: number,
  //可选，非必须匹配
  sex?: string
}

let lulu: IPerson = {
  name: 'lulu',
  age: 66,
  //不可添加未定义属性
  //country: 'china'
}

//Type '{ name: string; }' is not assignable to type 'IPerson'
/*let mimi: IPerson = {
  name: 'mimi'
}*/

interface IPerson2 {
  //允许任意属性
  [propName: string]: string
}

let mimi: IPerson2 = {
  name: 'mimi'
}
mimi.age = '66'

//mimi.type = 1


/**
 * 只读属性
 * 对象中的一些字段只能在创建时被赋值，可用readonly定义只读属性
 */
interface IPerson3 {
  readonly id: number,
  name: string
}

let tom: IPerson3 = {
  id: 1,
  name: 'tom'
}
//Cannot assign to 'id' because it is a constant or a read-only property
//tom.id = 2
tom.name = 'tom'
