<template>
  <h4>Function</h4>
</template>

<script>
  let val
  let f
  let fCurry

  /**
   * 函数合成
   * compose：合并多个函数，从右到左执行
   * pipe：合并多个函数，从左到右执行
   * converge：第一个参数函数，第二个参issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduh数函数数组，传入值先经过第二个函数数组依次处理后，再传入第一个函数处理
   */
  import {curry, compose, pipe, converge} from 'ramda'

  const first = n => n * 2
  const second = (a, b) => a + b
  const secondCurry = curry(second)

  f = compose(secondCurry(1), first)
  val = f(2)
  console.log(val) // 5

  f = pipe(first, secondCurry)
  val = f(2)(1)
  console.log(val) // 5

  const sumArr = arr => {
    let sum = 0
    arr.forEach(i => sum += i)

    return sum
  }

  const lenArr = arr => arr.length
  const avarage = (sum, len) => sum / len

  f = converge(avarage, [sumArr, lenArr])
  val = f([1, 2])
  console.log(val) // 3/2

  /**
   * 函数柯里化
   * curry：多参数函数转为单参数形式
   * partial：多参数函数接受一个参数数组，以指定最左边部分参数
   * partialRight：同partial，指定最最右边部分参数
   * useWith：接受一个函数，和一个函数数组，返回函数柯里化版本
   * memoizeWith：返回一个缓存执行结果的函数，第一个参数传入缓存id
   * complement：返回一个新函数，原函数返回true，新函数返回false
   */
  import {partial, partialRight, useWith, identity, memoizeWith, complement} from 'ramda'

  f = (a, b, c) => `${a} ${b} ${c}`
  fCurry = curry(f)
  val = fCurry('hello')('ms')('66')
  console.log(val) // hello ms 66

  fCurry = partial(f, ['hello'])
  val = fCurry('ms', '66')
  console.log(val) // hello ms 66

  fCurry = partialRight(f, ['ms', '66'])
  val = fCurry('hello')
  console.log(val) // hello ms 66

  const decrease = x => --x
  const increase = x => ++x

  fCurry = useWith(f, [decrease, increase])
  val = fCurry(1)(2)
  // val = fCurry(1)(2)(3)抛异常
  // val = fCurry(__, 2)(1)
  console.log(val) // 0 3 undefined

  let count = 0
  fCurry = memoizeWith(identity, (n) => {
    count++

    return n
  })
  fCurry(1)
  fCurry(1)
  fCurry(1)
  fCurry(2)
  // fCurry执行了4次，参数相同执行结果会被缓存，count不会增加
  console.log(count) // 2

  f = x => x > 0
  fCurry = complement(f)
  val = fCurry(-1)
  console.log(val) // true

  /**
   * 函数执行
   * binary：参数函数执行时，只传入最前面两个参数
   * tap：一个值传入指定函数，并返回该值
   * zipWith：将2数组键值对应，传入某函数
   * apply：数组转成参数序列，传入某函数
   * applySpec：返回一个模板函数, 该函数会将参数传入模板内执行，并将结果填充到模板
   * ascend：返回一个升序排列的比较函数，主要用于排序
   * descend：返回一个降序排列的比较函数，主要用于排序
   */
  import {binary, tap, zipWith, apply, applySpec, ascend, descend} from 'ramda'

  f = (a, b, c) => [a, b, c]
  fCurry = binary(f)
  val = fCurry(1, 2, 3)
  console.log(val) // [1, 2, undefined]

  f = x => x * 2
  fCurry = tap(f)
  val = fCurry(1)
  console.log(val) // 1

  f = (x, y) => `${x}:${y}`
  val = zipWith(f, ['a', 'b', 'c'], [1, 2, 3])
  console.log(val) // ['a:1', 'b:2', 'c:3']

  val = apply(f, ['a', 1])
  console.log(val) // 'a':1

  f = applySpec({
    add: x => ++x,
    others: {
      del: x => --x
    }
  })
  val = f(1)
  console.log(val) // {add:2, others:{del:0}}

  f = ascend(x => x.age)
  val = f({age: 0})({age: 1})
  console.log(val) // -1
  val = f({age: 1})({age: 0})
  console.log(val) // 1

  f = descend(x => x.age)
  val = f({age: 0})({age: 1})
  console.log(val) // 1
  val = f({age: 1})({age: 0})
  console.log(val) // -1

  export default {}
</script>

<style lang="scss" scoped>
</style>
