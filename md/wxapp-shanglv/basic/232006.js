const data = {
  "res": {
    "hd": { "traceId": "4ee639af91977c00", "code": 1, "systemtime": 1557820026649, "desc": "success" },
    "bd": {
      "code": 1,
      "msg": "success",
      "success": "true",
      "data": {
        "travelStandards": [
          {
            "bizType": "国内机票",
            "rules": [
              {
                "type": "可订舱位",
                "content": "经济舱",
                "displayContent": "可订舱位: 经济舱",
                "currentEffective": null
                },
              {
                "type": "最低价控制",
                "content": "无限制",
                "displayContent": "最低价控制: 无限制",
                "currentEffective": null
                },
              {
                "type": "提前预订",
                "content": "提前3天",
                "displayContent": "提前预订: 提前3天",
                "currentEffective": null
                },
              {
                "type": "折扣控制",
                "content": "9折及以下",
                "displayContent": "折扣控制: 9折及以下",
                "currentEffective": null
                }
              ],
            "travelStandardGroups": [
              {
                "groupName": "*预订差标",
                "rules": [
                  {
                    "type": "可订舱位",
                    "content": "经济舱",
                    "displayContent": "可订舱位: 经济舱",
                    "currentEffective": null
                    },
                  {
                    "type": "最低价控制",
                    "content": "无限制",
                    "displayContent": "最低价控制: 无限制",
                    "currentEffective": null
                    },
                  {
                    "type": "提前预订",
                    "content": "提前3天",
                    "displayContent": "提前预订: 提前3天",
                    "currentEffective": null
                    },
                  {
                    "type": "折扣控制",
                    "content": "9折及以下",
                    "displayContent": "折扣控制: 9折及以下",
                    "currentEffective": null
                    }
                  ]
                },
              {
                "groupName": "*改期差标",
                "rules": [
                  {
                    "type": "可订舱位",
                    "content": "无限制",
                    "displayContent": "可订舱位: 无限制",
                    "currentEffective": null
                    },
                  {
                    "type": "提前预订",
                    "content": "无限制",
                    "displayContent": "提前预订: 无限制",
                    "currentEffective": null
                    },
                  {
                    "type": "折扣控制",
                    "content": "无限制",
                    "displayContent": "折扣控制: 无限制",
                    "currentEffective": null
                    }
                  ]
                }
              ]
            },
          {
            "bizType": "国际机票",
            "rules": [
              {
                "type": "可订舱位",
                "content": "无限制",
                "displayContent": "可订舱位: 无限制",
                "currentEffective": null
                },
              {
                "type": "最低价控制",
                "content": "无限制",
                "displayContent": "最低价控制: 无限制",
                "currentEffective": null
                },
              {
                "type": "提前预订",
                "content": "无限制",
                "displayContent": "提前预订: 无限制",
                "currentEffective": null
                }
              ],
            "travelStandardGroups": [
              {
                "groupName": "*预订差标",
                "rules": [
                  {
                    "type": "可订舱位",
                    "content": "无限制",
                    "displayContent": "可订舱位: 无限制",
                    "currentEffective": null
                    },
                  {
                    "type": "最低价控制",
                    "content": "无限制",
                    "displayContent": "最低价控制: 无限制",
                    "currentEffective": null
                    },
                  {
                    "type": "提前预订",
                    "content": "无限制",
                    "displayContent": "提前预订: 无限制",
                    "currentEffective": null
                    }
                  ]
                },
              {
                "groupName": "*改期差标",
                "rules": [
                  {
                    "type": "可订舱位",
                    "content": "无限制",
                    "displayContent": "可订舱位: 无限制",
                    "currentEffective": null
                    },
                  {
                    "type": "提前预订",
                    "content": "无限制",
                    "displayContent": "提前预订: 无限制",
                    "currentEffective": null
                    }
                  ]
                }
              ]
            },
          {
            "bizType": "火车票",
            "rules": [
              {
                "type": "可订坐席",
                "content": "无座、硬座、硬卧、软座、软卧、高级软卧、二等座、二等卧",
                "displayContent": "可订坐席: 无座、硬座、硬卧、软座、软卧、高级软卧、二等座、二等卧",
                "currentEffective": null
                }
              ],
            "travelStandardGroups": [
              {
                "groupName": "*预订差标",
                "rules": [
                  {
                    "type": "可订坐席",
                    "content": "无座、硬座、硬卧、软座、软卧、高级软卧、二等座、二等卧",
                    "displayContent": "可订坐席: 无座、硬座、硬卧、软座、软卧、高级软卧、二等座、二等卧",
                    "currentEffective": null
                    }
                  ]
                },
              {
                "groupName": "*改期差标",
                "rules": [
                  {
                    "type": "可订坐席",
                    "content": "无限制",
                    "displayContent": "可订坐席: 无限制",
                    "currentEffective": null
                    }
                  ]
                }
              ]
            },
          {
            "bizType": "酒店",
            "rules": [
              {
                "type": "一线城市",
                "content": "每晚房费：0-200/间\n可订星级：三星级",
                "displayContent": "一线城市：每晚房费：0-200/间\n可订星级：三星级",
                "currentEffective": "Y"
                },
              {
                "type": "二线城市",
                "content": "每晚房费：0-200/间\n可订星级：五星级",
                "displayContent": "二线城市：每晚房费：0-200/间\n可订星级：五星级",
                "currentEffective": null
                },
              {
                "type": "国内其他城市",
                "content": "每晚房费：0-200/间\n可订星级：五星级",
                "displayContent": "国内其他城市：每晚房费：0-200/间\n可订星级：五星级",
                "currentEffective": null
                },
              {
                "type": "港澳台（中国）",
                "content": "每晚房费：0-200/间\n可订星级：五星级",
                "displayContent": "港澳台（中国）：每晚房费：0-200/间\n可订星级：五星级",
                "currentEffective": null
                }
              ],
            "travelStandardGroups": [
              {
                "groupName": "*预订差标",
                "rules": [
                  {
                    "type": "一线城市",
                    "content": "每晚房费：0-200/间\n可订星级：三星级",
                    "displayContent": "一线城市：每晚房费：0-200/间\n可订星级：三星级",
                    "currentEffective": "Y"
                    },
                  {
                    "type": "二线城市",
                    "content": "每晚房费：0-200/间\n可订星级：五星级",
                    "displayContent": "二线城市：每晚房费：0-200/间\n可订星级：五星级",
                    "currentEffective": null
                    },
                  {
                    "type": "国内其他城市",
                    "content": "每晚房费：0-200/间\n可订星级：五星级",
                    "displayContent": "国内其他城市：每晚房费：0-200/间\n可订星级：五星级",
                    "currentEffective": null
                    },
                  {
                    "type": "港澳台（中国）",
                    "content": "每晚房费：0-200/间\n可订星级：五星级",
                    "displayContent": "港澳台（中国）：每晚房费：0-200/间\n可订星级：五星级",
                    "currentEffective": null
                    }
                  ]
                }
              ]
            },
          {
            "bizType": "专车",
            "rules": [
              {
                "type": "可订车等",
                "content": "舒适型",
                "displayContent": "可订车等: 舒适型",
                "currentEffective": null
                }
              ],
            "travelStandardGroups": [
              {
                "groupName": "*预订差标",
                "rules": [
                  {
                    "type": "可订车等",
                    "content": "舒适型",
                    "displayContent": "可订车等: 舒适型",
                    "currentEffective": null
                    }
                  ]
                }
              ]
            }
          ]
      }

    }
  }
}

export default data;
