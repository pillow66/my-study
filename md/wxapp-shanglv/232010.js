//国内机票申请审批详情
const data = {
  "res": {
    "hd": { code: 1, desc: "success", systemtime: 1565143400737, traceId: "4c1014140867a000" },
    "bd": {
      "data": {
        "id": 1,
        "memo": "张总指示到北京出差",
        "remark": "批准",
        "status": "apply",
        "approveManner": "approve-after-pay",
        "identity": "approver",
        "bookedBy": "李四",
        "approvedBy": "王五",
        "requestedTime": 1561340360056,
        "approvedTime": 1561360360056,
        "deadLine": 1561426760056,
        "payDeadLine": 1561340380056,
        "travelTripInfo": {
          "tripType": "单程",
          "airLine": "武汉 - 北京",
          "travelTripDetails": [
            {
              "id": 1,
              "tripTag": "单程",
              "tripLine": "武汉 - 北京",
              "classLevel": "商务舱",
              "tripContent": "6月26日 周三 出发 商务舱",
              "flightNo": "MU2452",
              "depAirport": "武汉天河",
              "arrAirport": "北京首都",
              "airCorpCode": "CZ",
              "airCorpName": "南方航空",
              "depDate": "2019-06-26",
              "depTime": "16:30",
              "arrDate": "2019-06-26",
              "arrTime": "18:40"
                },
            ]
        },
        // "preTravelTripInfo": {
        //   "tripType": "单程",
        //   "airLine": "武汉 - 北京",
        //   "travelTripDetails": [
        //     {
        //       "id": 1,
        //       "tripTag": "单程",
        //       "tripLine": "武汉 - 北京",
        //       "classLevel": "商务舱",
        //       "tripContent": "6月26日 周三 出发 商务舱",
        //       "flightNo": "MU2452",
        //       "depAirport": "武汉天河",
        //       "arrAirport": "北京首都",
        //       "airCorpCode": "CZ",
        //       "airCorpName": "南方航空",
        //       "depDate": "2019-06-26",
        //       "depTime": "16:30",
        //       "arrDate": "2019-06-26",
        //       "arrTime": "18:40"
        //         },
        //     ]
        // },

        "travelStandardViolationMsgs": [
          {
            "travelTripDetailId": 1,
            "classLevel": "商务舱",
            "tripTag": "单程",
            "tripLine": "武汉 - 北京",
            "content": "未提前3天预定",
            "reason": "临时安排，任务比较急"
            }
        ],
        "travelTripOrder": {
          "orderId": "D19151153039288200",
          "orderPrice": 5888,
          "passengers": "李四"
        }
      }
    }
  }
}

export default data;
