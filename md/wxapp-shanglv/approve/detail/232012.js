// 单程数据
// const data = {
//   "res": {
//     "hd": { code: 1, desc: "success", systemtime: 1565143400737, traceId: "4c1014140867a000" },
//     "bd": {
//       "data": {
//         "id": 1,
//         "memo": "张总指示到北京出差",
//         "remark": "批准",
//         "status": "approved",
//         "approveManner": "approve-after-pay",
//         "identity": "approver",
//         "bookedBy": "李四",
//         "approvedBy": "王五",
//         "requestedTime": 1561340360056,
//         "approvedTime": 1561360360056,
//         "deadline": 1561426760056,
//         "payDeadline": 1561340380056,
//         "travelTripInfo": {
//           "tripType": "单程",
//           "airLine": "武汉 - 北京",
//           "travelTripDetails": [
//             {
//               "id": 1,
//               "tripTag": "单程",
//               "tripLine": "武汉 - 北京",
//               "classLevel": "商务舱",
//               "tripContent": "6月26日 周三 出发 商务舱",
//               "flightNo": "MU2452",
//               "depAirport": "武汉天河",
//               "arrAirport": "北京首都",
//               "airCorpCode": "CZ",
//               "airCorpName": "南方航空",
//               "depDate": "2019-06-26",
//               "depTime": "16:30",
//               "arrDate": "2019-06-26",
//               "arrTime": "18:40"
//             },
//             {
//               "id": 1,
//               "tripTag": "单程",
//               "tripLine": "武汉 - 北京",
//               "classLevel": "商务舱",
//               "tripContent": "6月26日 周三 出发 商务舱",
//               "flightNo": "MU2452",
//               "depAirport": "武汉天河",
//               "arrAirport": "北京首都",
//               "airCorpCode": "CZ",
//               "airCorpName": "南方航空",
//               "depDate": "2019-06-26",
//               "depTime": "16:30",
//               "arrDate": "2019-06-26",
//               "arrTime": "18:40"
//             }
//           ]
//         },
//         "travelStandardViolationMsgs": [
//           {
//             "travelTripDetailId": 1,
//             "classLevel": "商务舱",
//             "tripTag": "单程",
//             "tripLine": "武汉 - 北京",
//             "content": "未提前3天预定",
//             "reason": "临时安排，任务比较急"
//             }
//         ],
//         "travelTripOrder": {
//           "orderId": "D19151153039288200",
//           "orderPrice": 5889,
//           "passengers": "李四"
//         }
//       }
//     }
//   }
// }

// 单程中转数据
const data = {
  "res": {
    "hd": {
      "traceId": "015b9cc472461000",
      "code": 1,
      "systemtime": 1588044625771,
      "desc": "success"
    },
    "bd": {
      "data": {
        "id": 9,
        "approveManner": "approve-after-pay",
        "memo": "测试",
        "status": "paid",
        "remark": "审批通过！通过原因：通过",
        "identity": "applier",
        "bookedBy": "毛超",
        "approvedBy": "毛超",
        "requestedTime": 1588043492000,
        "approvedTime": 1588043531000,
        "deadline": 1588045150000,
        "travelTripInfo": {
          "tripType": "单程",
          "airLine": "中国香港 - 武汉",
          //多程
          "travelTripDetails": [
            {
              "flightNo": "MU508",
              "tripTag": "单程",
              "classLevel": "经济舱",
              "tripLine": "中国香港 - 武汉",
              "tripContent": "05月16日 出发 经济舱",
              "depDate": "2020-05-16",
              "depTime": "15:05",
              "depAirport": "中国香港机场",
              "arrDate": "2020-05-16",
              "arrTime": "17:45",
              "arrAirport": "浦东机场",
              "airCorpCode": "MU",
              "airCorpName": "东航",
              "tripNum": 1,
              "tripSeqNo": 1,
              "durationOfFlight": "2小时40分",
              "stopCity": "上海",
              "stoppingTime": "3小时35分钟"
            },
            {
              "flightNo": "CZ3544",
              "tripTag": "单程",
              "classLevel": "经济舱",
              "tripLine": "中国香港 - 武汉",
              "tripContent": "05月16日 出发 经济舱",
              "depDate": "2020-05-16",
              "depTime": "21:20",
              "depAirport": "浦东机场",
              "arrDate": "2020-05-16",
              "arrTime": "23:15",
              "arrAirport": "天河机场",
              "airCorpCode": "CZ",
              "airCorpName": "南航",
              "tripNum": 1,
              "tripSeqNo": 2,
              "durationOfFlight": "1小时55分"
            },
            {
              "flightNo": "MU508",
              "tripTag": "单程",
              "classLevel": "经济舱",
              "tripLine": "中国香港 - 武汉",
              "tripContent": "05月16日 出发 经济舱",
              "depDate": "2020-05-17",
              "depTime": "15:05",
              "depAirport": "中国香港机场",
              "arrDate": "2020-05-17",
              "arrTime": "17:45",
              "arrAirport": "浦东机场",
              "airCorpCode": "MU",
              "airCorpName": "东航",
              // "tripNum": 1,
              // "tripSeqNo": 3,
              "durationOfFlight": "2小时40分",
              "stopCity": "上海",
              "stoppingTime": "-20小时-25分钟"
            },
            {
              "flightNo": "CZ3544",
              "tripTag": "单程",
              "classLevel": "经济舱",
              "tripLine": "中国香港 - 武汉",
              "tripContent": "05月16日 出发 经济舱",
              "depDate": "2020-05-16",
              "depTime": "21:20",
              "depAirport": "浦东机场",
              "arrDate": "2020-05-16",
              "arrTime": "23:15",
              "arrAirport": "天河机场",
              "airCorpCode": "CZ",
              "airCorpName": "南航",
              "tripNum": 2,
              "tripSeqNo": 1,
              "durationOfFlight": "1小时55分"
            }
          ]
        },
        "travelStandardViolationMsgs": [
          {
            "travelTripDetailId": 392,
            "tripLine": "中国香港 - 上海",
            "content": "未提前60天预订",
            "reason": "出行计划刚确定"
                  },
          {
            "travelTripDetailId": 393,
            "tripLine": "上海 - 武汉",
            "content": "未提前60天预订",
            "reason": "出行计划刚确定"
                  }
              ],
        "travelTripOrder": {
          "orderId": "I588043466098601",
          "orderPrice": 3981.0,
          "passengers": "AAA/HJJK"
        },
        "approvers": "张帅,帅27000535,毛超,帅"
      }
    }
  }
}

export default data;
