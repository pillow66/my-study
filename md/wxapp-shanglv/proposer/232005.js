const data = {
  "res": {
    "hd": { "traceId": "4ee639af91977c00", "code": 1, "systemtime": 1557820026649, "desc": "success" },
    "bd":{
      "code": 1,
      "success": "true",
      "msg": null,
      "data": {
        "travelBookingId": 1,
        "bookedBy": "12345",
        "bookingParam": "1",
        "detailParam": "1,2",
        "corpId": 1,
        //差标超标题
        "statement": "根据贵司规定，不符合差标行程，选择原因后，可继续使用企业支付。但操作行为将进行记录。",
        "applyStatement":"根据贵司的差旅规定，您的预订行程需要通过审批才能使用企业支付哦",
        // 不同
        "travelTripInfo": {
          "tripType": "往返",
          "airLine": "武汉 - 北京",
          //违规行程数组
          "travelTripDetails": [
            {
              "id": 1,
              "tripTag": "往程",
              "tripLine": "武汉 - 厦门",
              "depTime": "2019-06-26",
              "classLevel": "经济舱",
              "tripContent": "往程: 6月26日 周三 出发 经济舱S",
              "travelStandardViolationMsgs": [
                "1.未预定经济舱, 公务舱",
                "2.未预定5折及以下折扣舱位"
              ]
            },
            {
              "id": 2,
              "tripTag": "返程",
              "tripLine": "厦门 - 武汉",
              "depTime": "2019-06-27",
              "classLevel": "经济舱",
              "tripContent": "返程: 6月27日 周四 出发 经济舱S",
              "travelStandardViolationMsgs": [
                "1.未预定经济舱, 公务舱"
              ]
            }
          ]
        },
        //差标超原因
        "travelStandardViolationReasons": [
          "出行计划刚确定",
          "原定出行计划变更",
          "临时安排的紧急计划"
        ],
        "flag": 2,
        "orderPrice": 1200,
        "passengers": "小王、小李"
      }
    }
  }
}

export default data;
