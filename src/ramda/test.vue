<template>
  <div>Test</div>
</template>

<script>
  import * as R from 'ramda'
  import {propEq} from "ramda";

  let arr1 = [1, 2, 3, 4, 5, 7, 0]
  let arr2 = [{a: 1}, {a: 1, b: 2}]
  let result

  result = R.contains('1')(arr1)
  //false
  console.log(result)

  result = R.contains(1)(arr1)
  //true
  console.log(result)

  result = R.contains({a: 1, b: 2})(arr2)
  //true
  console.log(result)

  result = R.any(item => item == '1')(arr1)
  //true
  console.log(result)

  //map返回新数组
  result = R.map((item) => item * 2)(arr1)
  //[2, 4, 6, 8, 10, 14, 0]
  console.log(result)

  //forEach返回原数组
  result = R.forEach(item => item * 2)(arr1)
  //[1, 2, 3, 4, 5, 7, 0]
  console.log(result)

  result = R.nth('5')(arr1)
  //7
  console.log(result)
  result = R.nth(10)(arr1)
  //undefined
  console.log(result)

  result = R.filter(item => item == '2')(arr1)
  //[2]
  console.log(result)
  result = R.filter(item => item == 10)(arr1)
  //[]
  console.log(result)

  result = R.sort((x, y) => x - y)(arr1)
  //[0, 1, 2, 3, 4, 5, 7]
  console.log(result)

  result = R.concat(arr1)(arr2)
  //[1, 2, 3, 4, 5, 7, 0, {a: 1}, {a: 1, b: 2}]
  console.log(result)

  result = R.find(item => item.b == '2')(arr2)
  //{a: 1, b: 2}
  console.log(result)

  result = R.findIndex(item => item.b == '2')(arr2)
  //1
  console.log(result)

  result = R.mergeAll([{a: 1}, {b: 2}, 3])
  //{a: 1, b: 2}
  console.log(result)

  result = R.has('1')(arr1)
  //true
  console.log(result)

  let obj = {a: 1, b: 2}
  result = R.has('toString')(obj)
  //false
  console.log(result)
  result = R.has('b')(obj)
  //true
  console.log(result)

  result = R.hasIn('toString')(obj)
  //true
  console.log(result)
  result = R.hasIn('b')(obj)
  //true
  console.log(result)

  result = R.propEq('a')(1)(obj)
  //true
  console.log(result)

  result = R.filter(item => item == '2')(obj)
  //{b: 2}
  console.log(result)

  export default {}
</script>
