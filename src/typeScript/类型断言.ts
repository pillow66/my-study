/**
 * 类型断言
 * <类型>值
 * 值 as 类型
 * 类型断言不是类型转换
 */
function getLength(val: string | number): number {
  let result = 0

  if (<string>val) {
    result = (<string>val).length
  }
  else if (val as number) {
    result = Number(val)
  }
  //断言一个联合类型中不存在的类型是不允许的
  //Type 'string | number' cannot be converted to type 'boolean'
  else if (<boolean>val) {
  }

  return result
}
