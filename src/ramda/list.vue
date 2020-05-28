<template>
  <h4>List</h4>
</template>

<script>
  let val, f

  /**
   * 数组特征判断
   * contains：包含某成员，返回true
   * all：所有成员满足指定函数，返回true
   * any：只要一个成员满足指定条件，返回true
   * none：没有任何成员满足指定条件，返回true
   */
  import {contains, all, any, none} from 'ramda'

  val = contains(3)([1, 2, 3])
  console.log(val) // true
  val = contains({a: 1})([{a: 1}])
  console.log(val) // true

  f = x => x === 3
  val = all(f)([3, 3])
  console.log(val) // true
  val = all(f)([3, 0])
  console.log(val) // false

  val = any(f)([3, 0])
  console.log(val) // true

  val = none(f)(1, 0)
  console.log(val) // true

  /**
   * 数组截取和添加
   * head：返回数组的第一个成员
   * last：返回数组的最后一个成员
   * tail：返回第一个成员以外的所有成员组成的新数组
   * init：返回最后一个成员以外的所有成员组成的新数组
   * nth：返回指定位置成员
   * take：返回前N个成员
   * takeLast：返回后N个成员
   * slice：从起始(包括)，至结束(不包括)，截取一个新数组
   * remove：移除开始位置起的N个成员
   * insert：在指定位置插入
   * insertAll：在指定位置插入另一数组
   * prepend：在头部插入
   * append：在尾部插入
   * intersperse：在数组成员间插入
   * join：数组合并成一个字符串
   */
  import {
    head, last, tail, init, nth, take, takeLast, slice, remove, insert,
    insertAll, prepend, append, intersperse, join
  } from 'ramda'

  val = head([1, 2, 3])
  console.log(val) // 1

  val = last([1, 2, 3])
  console.log(val) // 3

  val = tail([1, 2, 3])
  console.log(val) // [2, 3]

  val = init([1, 2, 3])
  console.log(val) // [1, 2]

  val = nth(1)([1, 2, 3])
  console.log(val) // 2
  val = nth(0)('abc')
  console.log(val) // 'a'

  val = take(2)([1, 2, 3])
  console.log(val) // [1, 2]

  val = takeLast(2)([1, 2, 3])
  console.log(val) // [2, 3]

  val = slice(1, 2)([1, 2, 3])
  console.log(val) // [2]
  val = slice(0, -1)([1, 2, 3])
  console.log(val) // [1, 2]

  val = remove(0, 2)([1, 2, 3])
  console.log(val) // [3]

  val = insert(1, 'x')([1, 2, 3])
  console.log(val) // [1, 'x', 2, 3]

  val = insertAll(1, ['x', 'y'])([1, 2, 3])
  console.log(val) // [1, 'x', 'y', 2, 3]

  val = prepend(0)([1, 2, 3])
  console.log(val) // [0, 1, 2, 3]
  val = prepend([0])([1, 2, 3])
  console.log(val) // [[0], 1, 2, 3]

  val = append(4)([1, 2, 3])
  console.log(val) // [1, 2, 3, 4]
  val = append([4])([1, 2, 3])
  console.log(val) // [1, 2, 3, [4]]

  val = intersperse('-')([1, 2, 3])
  console.log(val) // [1, -, 2, -, 3]

  val = join('-')([1, 2, 3])
  console.log(val) // '1-2-3'

  /**
   * 数组的过滤
   * filter：过滤出符合条件的成员
   * reject：过滤出不符合条件的成员
   * takeWhile：取得满足条件的成员
   * dropWhile：过滤满足条件的成员
   * without：返回指定值以外成员
   */
  import {filter, reject, takeWhile, dropWhile, without} from 'ramda'

  f = x => x !== 2
  val = filter(f)([1, 2, 3])
  console.log(val) // [1, 3]

  val = reject(f)([1, 2, 3])
  console.log(val) // [2]

  val = takeWhile(f)([1, 2, 3])
  console.log(val) // [1]

  val = dropWhile(f)([1, 2, 3])
  console.log(val) // [2, 3]

  val = without([2])([1, 2, 3])
  console.log(val) // [1, 3]

  /**
   * 单数组运算
   * countBy：对每个成员执行指定函数，返回一个对象，统计各执行结果包含几个成员
   * splitAt：在指定位置将原数组分成两个
   * splitEvery：按照指定个数，将原数组分成多个
   * splitWhen：从第一个满足指定函数的成员，将原数组分成两个
   * aperture：已成员后指定数量的成员，将原数组分成多个
   * partition：按照指定函数，将成员分区
   * indexOf：某值在数组中第一次出现的位置
   * lastIndexOf：某值在数组中最后一次出现的位置
   * map：对数组每个成员依次执行指定函数，返回新数组
   * mapObjIndexed：同map，额外获得索引和原数组
   * forEach：对数组每个成员依次执行指定函数，返回原数组
   * reduce：数组成员依次执行指定函数，每次运算结果会进行累计
   * reduceRight：同reduce，数组成员从左到右执行
   * reduceWhile：同reduce，有一个判断函数，一旦不符合条件，停止累计
   * sort：按照指定函数给数组排序
   * sortWith：按照给定的一组函数给数组进行多重排序
   * adjust：对指定位置的成员执行指定函数
   * ap：数组成员分别执行一组函数，结果合成一个数组
   * flatten：将嵌套数组铺平
   * groupBy：将数组成员按指定函数计算的值进行分组，
   * groupWith：将数组成员依次两两放入函数计算，依结果将所有成员分组
   */
  import {
    countBy, splitAt, splitEvery, splitWhen, aperture, partition, indexOf, lastIndexOf,
    map, mapObjIndexed, forEach, reduce, reduceRight, reduceWhile, sort, sortWith, adjust,
    ap, flatten, groupBy, groupWith
  } from 'ramda'

  val = countBy(f)([1, 2, 3])
  console.log(val) // {'true':2, 'false':1}

  val = splitAt(1)([1, 2, 3])
  console.log(val) // [[1], [2, 3]]

  val = splitEvery(1)([1, 2, 3])
  console.log(val) // [[1], [2], [3]]

  f = x => x === 2
  val = splitWhen(f)([1, 2, 3])
  console.log(val) // [[1, 2], [3]]

  val = aperture(2)([1, 2, 3])
  console.log(val) // [[1, 2], [2, 3]]

  f = x => x.toString().indexOf('A') >= 0
  val = partition(f)([1, '2A', '3A'])
  console.log(val) // [['2A', '3A'], [1]]

  val = indexOf(2)([1, 2, 2, 3])
  console.log(val) // 1
  val = indexOf('b')('abbc')
  console.log(val) // 1

  val = lastIndexOf(2)([1, 2, 2, 3])
  console.log(val) // 2

  f = x => 2 * x
  val = map(f)([1, 2, 3])
  console.log(val) // [2, 4, 6]

  val = forEach(f)([1, 2, 3])
  console.log(val) // [1, 2, 3]

  f = (x, idx) => `${x}-${idx}`
  val = mapObjIndexed(f)([1, 2, 3])
  console.log(val) // ['1-0', '2-1', '3-2']

  f = (x, y) => x - y
  val = reduce(f)(1)([2, 3])
  console.log(val) // 1 - 2 - 3 = -4

  val = reduceRight(f)(1)([2, 3])
  console.log(val) // 3 - 2 - 1 = 0

  val = reduceWhile(x => x > -1, f)(1)([2, 3])
  console.log(val) // 1 - 2 = -1

  f = (a, b) => b - a
  val = sort(f)([1, 2, 3])
  console.log(val) // [3, 2, 1]

  const byAgeDesc = (a, b) => b.age - a.age
  const byNumAsc = (a, b) => a.num - b.num
  val = sortWith([byAgeDesc, byNumAsc])([
    {id: 0, age: 2, num: 2},
    {id: 1, age: 1, num: 1},
    {id: 2, age: 2, num: 1}
  ])
  console.log(val) // [{id:2...}, {id:0...}, {id:1...}]

  f = x => 2 * x
  val = adjust(1)(f)([1, 2, 3])
  console.log(val) // [1, 4, 3]

  const tasty = x => `tasty ${x}`
  const toUpper = x => x.toString().toUpperCase()
  val = ap([tasty, toUpper])(['lulu'])
  console.log(val) // ['tasy lulu', 'LULU']

  val = flatten([1, [2], [[3]]])
  console.log(val) // [1, 2, 3]

  f = x => x % 2
  val = groupBy(f)([1, 2, 3])
  console.log(val) // ['0':[2], '1':[1, 3]]

  f = (x, y) => x === y
  val = groupWith(f)([0, 1, 1, 2])
  console.log(val) // [[0], [1, 1], [2]]

  /**
   * 双数组运算
   * concat：将两个数组合并成一个数组
   * zip：将两个数组对应位置的成员放在一起，生成一个新数组
   * zipObj：将两个数组对应位置的成员放在一起分别作为key和value，生成一个新数组
   * xprod：将两个数组成员两两混合，生成一个新数组
   * intersection：返回两个数组相同的成员
   * difference：返回第一个数组中不包含在第二个数组里的成员
   * differenceWith：返回指定函数执行后，第一个数组中不包含在第二个数组里的成员
   * symmetricDifference：返回两个数组非公有成员
   * symmetricDifferenceWith：返回指定函数执行后，两个数组所有计算结果不相等的成员
   */
  import {
    concat, zip, zipObj, xprod, intersection, difference, differenceWith,
    symmetricDifference, symmetricDifferenceWith
  } from 'ramda'

  val = concat('a')('b')
  console.log(val) // 'ab'
  val = concat([1, 2])([3])
  console.log(val) // [1, 2, 3]

  val = zip(['a'])([1])
  console.log(val) // [['a', 1]]

  val = zipObj(['a'])([1])
  console.log(val) // [{'a':1}]

  val = xprod([1, 2])(['a', 'b'])
  console.log(val) // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]

  val = intersection([1, 2])([3, 2, 4])
  console.log(val) // [2]

  val = difference([1, 2])([3, 2, 4])
  console.log(val) // [1]

  f = x => 2 * x
  val = differenceWith(f)([1, 2])([3, 2, 4])
  console.log(val) // []

  val = symmetricDifference([1, 2])([3, 2, 4])
  console.log(val) // [1, 3, 4]

  f = (x, y) => 2 * x === y
  val = symmetricDifferenceWith(f)([1, 2])([3, 2, 4])
  console.log(val) // [3, 2, 4]

  /**
   * 复合数组
   * find：返回符合指定条件的成员
   * findIndex：返回符合指定条件的成员的位置
   * findLast：返回最后一个符合指定条件的成员
   * findLastIndex：返回最后一个符合指定条件的成员的位置
   * pluck：取出数组成员某属性，组成新数组
   * project：取出成员多个属性，组成新数组
   * transpose：将每个成员相同位置的值，组成一个新数组
   * mergeAll：数组成员合并成一个新对象
   * fromPairs：将嵌套数组转为一个新对象
   * groupBy：数组成员按照指定条件分组
   * sortBy: 根据成员某属性排序
   */
  import {
    find, findIndex, findLast, findLastIndex, pluck, project, transpose, mergeAll,
    fromPairs, sortBy
  } from 'ramda'

  f = x => x.a === 2
  val = find(f)([{a: 1}, {a: 2}])
  console.log(val) // {a:1}

  val = findIndex(f)([{a: 1}, {a: 2}])
  console.log(val) // 1

  val = findLast(f)([{a: 2, id: 1}, {a: 2, id: 2}])
  console.log(val) // {a:2, id:2}

  val = findLastIndex(f)([{a: 2, id: 1}, {a: 2, id: 2}])
  console.log(val) // 1

  val = pluck('a')([{a: 1}, {a: 2}])
  console.log(val) // [1, 2]

  val = pluck(1)([[1, 2], [3, 4]])
  console.log(val) // [2, 4]

  val = project(['a', 'b'])([{a: 1, b: 2, c: 3}, {a: 11, b: 22, c: 33}])
  console.log(val) // [{a:1, b:2}, {a:11, b:22}]

  val = transpose([[1, 'a'], [2, 'b']])
  console.log(val) // [[1, 2], ['a', 'b']]

  val = mergeAll([{a: 1}, {b: 2}])
  console.log(val) // {a:1, b:2}

  val = fromPairs([['a', 1], ['b', 2]])
  console.log(val) // {a:1, b:2}

  f = student => {
    let score = student.score
    return score < 60 ? 'C' : score < 80 ? 'B' : 'A'
  }
  val = groupBy(f)([{score: 100}, {score: 50}, {score: 70}])
  console.log(val) // {A:[{score: 100}], B:[{score: 70}, C:[{score: 50}]]}

  f = item => item.a
  val = sortBy(f)([{a: 2}, {a: 1}])
  console.log(val) // [{a: 1}, {a: 2}]

  export default {}
</script>

<style lang="scss" scoped>
</style>
