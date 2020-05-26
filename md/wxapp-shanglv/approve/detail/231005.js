//返回失败的数据格式
// const data = {
//   "res": {
//     "hd": { "code": 99999, "desc": "系统无法为您提供服务，请确认！", "traceId": "1553248163164199876123" },
//     "bd": { "data": {} },
//   }
// }

//返回成功数据格式
const
  data = {
    "res": {
      "hd": { "traceId": "3cec82ed7de8c800", "code": 1, "systemtime": 1557728346956, "desc": "success" },
      "bd": { "data": { "message":"审批通过" } }
    }
  }

export default data;
