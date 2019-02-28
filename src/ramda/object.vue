<template>
  <h4>Object</h4>
</template>

<script>
  let val
  let f
  /**
   * 对象特征判断
   * has：包含某属性，返回true
   * hasIn：对象自身或原型链上包含某属性，返回true
   * propEq：属性等于给定值，返回true
   * whereEq：属性等于给定值，返回true
   * where：各属性符合指定条件，返回true
   */
  import {has, hasIn, propEq, whereEq, where} from 'ramda'

  val = has('a')({a: 1})
  console.log(val) // true

  val = has('b')({a: 1})
  console.log(val) // false

  val = {a: 1}
  val = hasIn('toString')(val)
  console.log(val) // true

  val = propEq('a', 1)({a: 1})
  console.log(val) // true

  val = whereEq({a: 1})({a: 1})
  console.log(val) // true

  f = {
    a: x => x === 1,
    b: x => x === 2
  }
  val = where(f)({a: 1, b: 1})
  console.log(val) // false

  val = where(f)({a: 1, b: 2})
  console.log(val) // true

  /**
   * 对象过滤
   * omit：过滤指定属性
   * filter：返回所有满足条件的属性
   * reject：返回所有满足条件的属性
   */
  import {omit, filter, reject} from 'ramda'

  val = omit(['a'])({a: 1, b: 2})
  console.log(val) // {b: 2}

  f = x => x % 2 === 0
  val = filter(f)({a: 1, b: 2, c: 3})
  console.log(val) // {a: 2}

  val = reject(f)({a: 1, b: 2, c: 3})
  console.log(val) // {a:1, c:3}

  /**
   * 对象截取
   * dissoc：过滤指定属性
   * assoc：改写某属性值
   * partition：依属性值是否满足指定函数，将属性分区
   * pick：返回指定属性组成的新对象
   * pickAll：同pick，会包括pick中不存在的属性，值undefined
   * pickBy：返回符合指定函数的属性
   * keys：返回属性组成的新数组
   * keysIn：返回对象自身属性和原型链继承属性组成的新数组
   * values：返回对象属性值组成的新数组
   * valuesIn：返回对象自身属性和原型链继承属性值组成的新数组
   * invertObj：将属性值和属性名互换，如多个属性值相同，只返回最后一个
   * invert：属性值和属性名互换，每个属性值对应一个数组
   */
  import {
    dissoc, assoc, partition, pick, pickAll, pickBy, keys, keysIn, values, valuesIn,
    invertObj, invert
  } from 'ramda'

  val = dissoc('b')({a: 1, b: 2})
  console.log(val) // {a: 1}

  val = assoc('a', 3)({a: 1})
  console.log(val) // {a:3}

  f = x => x === 2
  val = partition(f)({a: 1, b: 2, c: 3})
  console.log(val) // [{b:2}, {a:1, c:3}]

  val = pick(['a', 'c'])({a: 1, b: 2, c: 3})
  console.log(val) // {a: 1, c: 3}

  val = pickAll(['a', 'd'])({a: 1, b: 2, c: 3})
  console.log(val) // {a:1, d:undefined}

  val = pickBy(f)({a: 1, b: 2, c: 3})
  console.log(val) // {b:2}

  val = keys({a: 1, b: 2})
  console.log(val) // ['a', 'b']

  f = function () {
    this.a = 1
  }
  f.prototype.b = 2
  val = keysIn(new f())
  console.log(val) // ['a', 'b']

  val = values({a: 1, b: 2})
  console.log(val) // [1, 2]

  val = valuesIn(new f())
  console.log(val) // [1, 2]

  val = invertObj({a: 1, b: 2, c: 1})
  console.log(val) // {1:'c', 2:'b'}

  val = invert({a: 1, b: 2, c: 1})
  console.log(val) // {1:['a', 'c'], 2:['b']}

  /**
   * 对象运算
   * prop：返回指定属性值
   * map：遍历对象属性依次执行某函数
   * mapObjIndexed：同map，会传入key，obj两参数
   * forEachObjIndexed：每个属性依次执行指定函数，传入value，key两参数，返回原对象
   * merge：合并两个对象，如果有同名属性，后面覆盖前面
   * mergeWith：同上，如有同名属性，使用指定函数处理
   * eqProps：比较两个对象指定属性是否相等
   * evolve：对象属性分别经过一组函数处理，返回一个新对象
   */
  import {prop, map, mapObjIndexed, forEachObjIndexed, merge, mergeWith, eqProps, evolve} from 'ramda'

  val = prop('a')({a: 1})
  console.log(val) // 1

  val = prop('b')({a: 1})
  console.log(val) // undefined

  f = x => 2 * x
  val = map(f)({a: 1, b: 2})
  console.log(val) // {a:2, b:4}

  f = (num, key, obj) => `${num}-${key}-${obj}`
  val = mapObjIndexed(f)({a: 1, b: 2})
  console.log(val) // {a: '1-a-[object]', b: '2-b-[object]'}

  let newArray = []
  f = (value, key) => newArray.push(`${value}-${key}`)
  val = forEachObjIndexed(f)({a: 1, b: 2})
  console.log(val, newArray) // {a:1, b:2}, ['1-a', '2-b']

  val = merge({a: 2})({a: 1, b: 2})
  console.log(val) // {a:1, b:2}

  f = (x, y) => x > y ? x : y
  val = mergeWith(f)({a: 2})({a: 1, b: 2})
  console.log(val) // {a:2, b:2}

  val = eqProps('a')({a: 1})({a: '1'})
  console.log(val) // false
  val = eqProps('a')({a: 1})({a: 1})
  console.log(val) // true

  f = {
    a: x => 2 * x,
    b: x => x % 2
  }
  val = evolve(f)({a: 1, b: 2})
  console.log(val) // {a:2, b:0}

  /**
   * 复合对象
   * path：取出数组指定路径的值
   * pathEq：返回指定路径符合条件值的成员
   * assocPath：添加或改写指定路径的属性值
   */
  import {path, pathEq, assocPath} from 'ramda'

  val = path(['a', 'b'])({a: {b: 1}})
  console.log(val) // 1

  val = pathEq(['a', 'b'], 2)({a: {b: 1}})
  console.log(val) // false
  val = pathEq(['a', 'b'], 2)({a: {b: 2}})
  console.log(val) // true

  val = assocPath(['a', 'b'], 2)({a: null})
  //添加属性
  console.log(val) // {a: {b: 2}}
  val = assocPath(['a', 'b'], 2)({a: {b: 1}})
  //改写属性
  console.log(val) // {a: {b: 2}}

  export default {}
</script>

<style lang="scss" scoped>
</style>
