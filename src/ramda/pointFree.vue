<template>
  <div>
  </div>
</template>

<script>
  let data, val, fn, resolve, reject

  import {pipe, prop, propEq, assoc, pick, filter, join, map, path, concat, take} from 'ramda'
  //Type
  import {isNil} from 'ramda'
  //Logic
  import {not, or, ifElse, isEmpty} from 'ramda'

  /**
   */
  data = {
    tasks: [
      {
        id: 0,
        name: '66'
      },
      {
        id: 1,
        name: '77'
      }
    ]
  }

  let selectTasks = prop('tasks')
  let filterMember = name => filter(propEq('name', name))

  fn = pipe(
    selectTasks,
    filterMember('77')
  )
  val = fn(data)
  console.log(val)

  /**
   */
  data = {
    records: {
      id: 0,
      name: '5元火车票红包',
      periods: 3,
      message: '宝宝就是这么牛！',
      isPay: 0
    }
  }

  const selectRecords = prop('records')
  const isNilOrEmpty = (data) => or(isNil(data))(isEmpty(data))
  const check = pipe(
    isNilOrEmpty,
    not
  )
  const insertTitle = (data) => {
    let title = join(' ')([`第${prop('periods')(data)}期`, `${prop('name')(data)}得主`])

    return assoc('title')(title)(data)
  }
  const selectFields = pick(['id', 'name', 'title'])
  const resolveData = (data) => Promise.resolve(data)
  resolve = pipe(
    insertTitle,
    selectFields,
    resolveData
  )
  reject = () => Promise.reject({message: '数据异常'})

  fn = pipe(
    selectRecords,
    ifElse(
      check,
      resolve,
      reject
    )
  )

  fn(data).then(data => {
    val = data
    console.log(val) // {id:0, name:'5元火车票红包', title:'第3期 5元火车票红包得主'}
  }).catch(err => {
    console.log(err)
  })

  /**
   */
  data = {
    "data": {
      "gcVal": "1",
      "ifpay": 1,
      "ism": 0,
      "needshare": 3,
      "gcId": "2a330e5323f64fe990e4d01b97d487d1",
      "gcPrice": 0.01,
      "pictext": "红包",
      "stu": [{
        "ism": 1,
        "wximg": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJQrj0fibibNWQvcdWfWhts28zACvzJ6Qib5mpPCaMzN5apfcrqPohD8pjiciclro19S8RGG5HhKC8yJZg/132",
        "wx": "天空之城",
        "status": 1
      }, {
        "ism": 0,
        "wximg": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLhMtBwGqqmykoNia8coVI7R3mk0XrBD52j3fbggxB8mflCyicWtA0sQWFYmW7QwqVBe744q0dZs2ag/132",
        "wx": "66🐣",
        "status": 1
      }, {
        "ism": 0,
        "wximg": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83er9Wgp3Yiby2q8wOVTnwYFCk8g3VBbj0ocxDteDJu93jqtU2WowLAjgmIibia4WzV8cmPthYtO7pHAEw/132",
        "wx": "Gobi Zeng",
        "status": 1
      }],
      "time": 1551258503000,
      "pictype": "3",
      "etime": 1551171612000,
      "ifcy": 1,
      "isdone": 1,
      "gcNa": "1元火车票红包",
      "succnt": 6,
      "willshare": 0
    }
  }

  const selectDataStu = path(['data', 'stu'])
  const updateItem = pipe(
    assoc('style')(['active', 'avatar']),
    pick(['ism', 'wximg', 'style'])
  )
  const mapStu = map(updateItem)

  resolve = pipe(
    mapStu,
    resolveData
  )

  fn = pipe(
    selectDataStu,
    ifElse(
      check,
      resolve,
      reject
    )
  )

  fn(data).then(data => {
    val = data
    console.log(val) // {id:0, name:'5元火车票红包', title:'第3期 5元火车票红包得主'}
  }).catch(err => {
    console.log(err)
  })

  export default {}
</script>
