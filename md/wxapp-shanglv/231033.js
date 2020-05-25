const data = {
  "res": {
    "hd": { "traceId": "4ee639af91977c00", "code": 1, "systemtime": 1557820026649, "desc": "success" },
    "bd": {
      "success": "true",
      "msg": "success",
      "code": 1,
      "data": {
        "needToApproveTrvlReqList": [{
          "travelRequestId": 243,
          "requestedTime": 1571969468000,
          "memo": "张总出差接机",
          "deadline": Date.now() + (13 * 60 * 1000),
          "secondsToWait": null,
          "approveManner": "approve-after-booking",
          "approvedTime": null,
          "bizType": null,
          "orderId": "D19182162134338484",
          "payOrderId": "P1918216213784400256",
          "price": 910,
          "status": "apply",
          "approvalSubject": "individual",
          "approver": "27000535",
          "corpId": 10000,
          "departureCity": "北京",
          "arrivalCity": "上海",
          "departureAirport": "北京首都(PEK)T2",
          "arrivalAirport": "上海虹桥(SHA)T2",
          "departureTime": 1562022000000,
          "arrivalTime": 1562030400000,
          "bookedBy": "丁强",
          "bookedTime": 1561969294000,
          "passengers": [
            "丁强"
          ],
          "tripType": "单程",
          //是否违规‘Y’违规
          "isViolation": "Y"
        }],
        "trainTicketNeedToApproveTrvlReqList": [{
            "id": 1,
            "approveManner": "approve-after-pay",
            "serviceId": "6",
            "memo": "张总出差接机",
            "identity": "approver",
            "tripDestination": "",
            "tripInfo": "北京首都机场T3航站楼-武汉万达威斯汀酒店",
            "tripArrangeInfo": "11月30日 16:40",
            //座位信息
            "travelStandardStmt": "二等座、软卧",
            //乘车人(可选属性)
            "tripMembers":"小王, 小李",
            //预订人
            "bookedBy": "李四",
            "requestedTime": 1561340360055,
            //剩余审批时间，需结合当前时间算倒计时
            "deadline": Date.now() + (100 * 60 * 1000),
            //剩余支付时间，需结合当前时间算倒计时
            //"payDeadline": Date.now() + (100 * 60 * 1000),
            "travelStandardViolationMsgs": [{
               "content": "可订坐席：二等座、软卧",
               "reason": "计划外的紧急任务"
             }],
            "orderId": "CA12321312",
            //票价(可选属性)
            "orderPrice": "130.00",
            "status": "apply"
        }],
        "carNeedToApproveTrvlReqList": [{
            "id": 1,
            "approveManner": "approve-after-booking",
            "serviceId": "6",
            "memo": "张总出差接机",
            "identity": "approver",
            "tripDestination": "",
            "tripInfo": "北京 接机/接车",
            "tripArrangeInfo": "11月30日",
            "travelStandardStmt": "舒适型及以下",
            "bookedBy": "李四",
            //申请审批时间
            "requestedTime": 1561340360056,

            "deadline": Date.now() + (32 * 60 * 1000),
            "travelStandardViolationMsgs": [{
              "content": "一类城市 每晚房费: 0-400/间 可订星级: 5星级及以下",
              "reason": "计划外的紧急任务"
            }],
            "status": "apply"
        },
        {
            "id": 2,
            "approveManner": "approve-after-pay",
            "serviceId": "6",
            "memo": "12 分钟内",
            "identity": "approver",
            "tripDestination": "",
            "tripInfo": "北京首都机场T3航站楼-武汉万达威斯汀酒店",
            "tripArrangeInfo": "11月30日 16:40",
            "travelStandardStmt": "舒适型及以下",
            "tripMembers":"小王, 小李",
            "bookedBy": "李四",
            "requestedTime": 1561340360057,
            "deadline": Date.now() + (12 * 60 * 1000),
            "travelStandardViolationMsgs": [{
               "content": "可订坐席：二等座、软卧",
               "reason": "计划外的紧急任务"
             }],
            "orderId": "CA12321312",
            "orderPrice": "130.00",
            "status": "apply"
        },
        {
            "id": 2,
            "approveManner": "approve-after-pay",
            "serviceId": "6",
            "memo": "11 分钟内",
            "identity": "approver",
            "tripDestination": "",
            "tripInfo": "北京首都机场T3航站楼-武汉万达威斯汀酒店",
            "tripArrangeInfo": "11月30日 16:40",
            "travelStandardStmt": "舒适型及以下",
            "tripMembers":"小王, 小李",
            "bookedBy": "李四",
            "requestedTime": 1561340360058,
            "deadline": Date.now() + (11 * 60 * 1000),
            "travelStandardViolationMsgs": [{
               "content": "可订坐席：二等座、软卧",
               "reason": "计划外的紧急任务"
             }],
            "orderId": "CA12321312",
            "orderPrice": "130.00",
            "status": "apply"
        },
        {
            "id": 2,
            "approveManner": "approve-after-pay",
            "serviceId": "6",
            "memo": "100 分钟内",
            "identity": "approver",
            "tripDestination": "",
            "tripInfo": "北京首都机场T3航站楼-武汉万达威斯汀酒店",
            "tripArrangeInfo": "11月30日 16:40",
            "travelStandardStmt": "舒适型及以下",
            "tripMembers":"小王, 小李",
            "bookedBy": "李四",
            "requestedTime": 1561340360059,
            "deadline": Date.now() + (100 * 60 * 1000),
            "travelStandardViolationMsgs": [{
               "content": "可订坐席：二等座、软卧",
               "reason": "计划外的紧急任务"
             }],
            "orderId": "CA12321312",
            "orderPrice": "130.00",
            "status": "apply"
        },
      ],
        "hotelNeedToApproveTrvlReqList": [{
            "id": 1,
            "approveManner": "approve-after-booking",
            "serviceId": "6",
            "memo": "张总出差接机",
            "identity": "approver",
            "tripDestination": "",
            "tripInfo": "北京 接机/接车",
            "tripArrangeInfo": "11月30日",
            "travelStandardStmt": "舒适型及以下",
            "tripMembers":"",
            "bookedBy": "李四",
            "requestedTime": 1561340360056,
            "deadline": Date.now() + (50 * 60 * 1000),
            "travelStandardViolationMsgs": [{
              "content": "一类城市 每晚房费: 0-400/间 可订星级: 5星级及以下",
              "reason": "计划外的紧急任务"
            }],
            "status": "apply"
        }]
      }
    }
  }
}

export default data;
