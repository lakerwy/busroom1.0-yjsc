export const getMenulist = {
    "success": true,
    "message": "success",
    "code": 200,
    "timestamp": 1695621168548,
    "result": [
        {
            "id": "125909152017944576",
            "parentId": "0",
            "name": "xboot",
            "showAlways": true,
            "level": 0,
            "type": -1,
            "title": "我的商务室",
            "path": "",
            "component": "",
            "icon": "md-home",
            "url": "",
            "buttonType": "",
            "children": [
                {
                    "id": "1267737640451575808",
                    "parentId": "125909152017944576",
                    "name": "home",
                    "showAlways": false,
                    "level": 1,
                    "type": 0,
                    "title": "首页",
                    "path": "/home",
                    "component": "Main",
                    "icon": "ios-home",
                    "url": "",
                    "buttonType": "",
                    "children": [
                        {
                            "id": "1267737907955896321",
                            "parentId": "1267737640451575808",
                            "name": "home_index",
                            "showAlways": true,
                            "level": 2,
                            "type": 0,
                            "title": "首页",
                            "path": "home",
                            "component": "home/home",
                            "icon": "ios-home",
                            "url": "",
                            "buttonType": "",
                            "children": null,
                            "permTypes": []
                        }
                    ],
                    "permTypes": null
                },
                {
                    "id": "1267750735592951808",
                    "parentId": "125909152017944576",
                    "name": "hugeData",
                    "showAlways": false,
                    "level": 1,
                    "type": 0,
                    "title": "元博大数据",
                    "path": "/hugeData",
                    "component": "Main",
                    "icon": "md-analytics",
                    "url": "",
                    "buttonType": "",
                    "children": [
                        {
                            "id": "1267751456908382208",
                            "parentId": "1267750735592951808",
                            "name": "special",
                            "showAlways": true,
                            "level": 2,
                            "type": 0,
                            "title": "专题频道",
                            "path": "special",
                            "component": "hugeData/special",
                            "icon": "ios-cog",
                            "url": null,
                            "buttonType": "",
                            "children": null,
                            "permTypes": []
                        }
                    ],
                    "permTypes": null
                },
                {
                    "id": "1403777101856928",
                    "parentId": "125909152017944576",
                    "name": "autoBid",
                    "showAlways": false,
                    "level": 1,
                    "type": 0,
                    "title": "非招标采购公告专区",
                    "path": "/infoPublishOut",
                    "component": "Main",
                    "icon": "ios-disc",
                    "url": "",
                    "buttonType": "",
                    "children": [
                        {
                            "id": "1403777200423008",
                            "parentId": "1403777101856928",
                            "name": "autoBid",
                            "showAlways": true,
                            "level": 2,
                            "type": 0,
                            "title": "非招标采购公告专区",
                            "path": "autoBid",
                            "component": "infoPublishOut/autoBid",
                            "icon": "ios-mail-open",
                            "url": "",
                            "buttonType": "",
                            "children": null,
                            "permTypes": []
                        }
                    ],
                    "permTypes": null
                },
                {
                    "id": "1267737178067308544",
                    "parentId": "125909152017944576",
                    "name": "find",
                    "showAlways": true,
                    "level": 1,
                    "type": 0,
                    "title": "找项目",
                    "path": "/find",
                    "component": "Main",
                    "icon": "ios-search",
                    "url": "",
                    "buttonType": "",
                    "children": [
                        {
                            "id": "1267739521206849537",
                            "parentId": "1267737178067308544",
                            "name": "tendering",
                            "showAlways": true,
                            "level": 2,
                            "type": 0,
                            "title": "招标与采购",
                            "path": "tendering",
                            "component": "find/tendering",
                            "icon": "ios-albums",
                            "url": "",
                            "buttonType": "",
                            "children": null,
                            "permTypes": []
                        },
                        {
                            "id": "1267739952108670977",
                            "parentId": "1267737178067308544",
                            "name": "building",
                            "showAlways": true,
                            "level": 2,
                            "type": 0,
                            "title": "前期拟在建",
                            "path": "building",
                            "component": "find/building",
                            "icon": "md-archive",
                            "url": null,
                            "buttonType": "",
                            "children": null,
                            "permTypes": []
                        }
                    ],
                    "permTypes": null
                },
                {
                    "id": "1267740442234064897",
                    "parentId": "125909152017944576",
                    "name": "subscribe",
                    "showAlways": false,
                    "level": 1,
                    "type": 0,
                    "title": "我的订阅",
                    "path": "/subscribe",
                    "component": "Main",
                    "icon": "ios-add-circle",
                    "url": "",
                    "buttonType": "",
                    "children": [
                        {
                            "id": "1304288402107142144",
                            "parentId": "1267740442234064897",
                            "name": "subscribe-email",
                            "showAlways": true,
                            "level": 2,
                            "type": 0,
                            "title": "邮件订阅",
                            "path": "email",
                            "component": "subscribe/email",
                            "icon": "ios-mail",
                            "url": "",
                            "buttonType": "",
                            "children": null,
                            "permTypes": []
                        },
                        {
                            "id": "1267740911392133120",
                            "parentId": "1267740442234064897",
                            "name": "subscribe-overview",
                            "showAlways": true,
                            "level": 2,
                            "type": 0,
                            "title": "订阅总览",
                            "path": "overview",
                            "component": "subscribe/overview",
                            "icon": "ios-analytics",
                            "url": "",
                            "buttonType": "",
                            "children": null,
                            "permTypes": []
                        },
                        {
                            "id": "1267741452444766208",
                            "parentId": "1267740442234064897",
                            "name": "subscribe-manage",
                            "showAlways": true,
                            "level": 2,
                            "type": 0,
                            "title": "订阅管理",
                            "path": "manage",
                            "component": "subscribe/manage",
                            "icon": "ios-construct",
                            "url": "",
                            "buttonType": "",
                            "children": null,
                            "permTypes": []
                        }
                    ],
                    "permTypes": null
                },
                {
                    "id": "1276796266608726017",
                    "parentId": "125909152017944576",
                    "name": "collect",
                    "showAlways": false,
                    "level": 1,
                    "type": 0,
                    "title": "我的收藏",
                    "path": "/collect",
                    "component": "Main",
                    "icon": "ios-star-half",
                    "url": "",
                    "buttonType": "",
                    "children": [
                        {
                            "id": "1276796830469984256",
                            "parentId": "1276796266608726017",
                            "name": "collect",
                            "showAlways": true,
                            "level": 2,
                            "type": 0,
                            "title": "我的收藏",
                            "path": "collect",
                            "component": "collect/collect",
                            "icon": "ios-star-half",
                            "url": "",
                            "buttonType": "",
                            "children": null,
                            "permTypes": []
                        }
                    ],
                    "permTypes": null
                },
                {
                    "id": "1392323279716448",
                    "parentId": "125909152017944576",
                    "name": "creditRate",
                    "showAlways": false,
                    "level": 1,
                    "type": 0,
                    "title": "AAA企业信用等级",
                    "path": "/creditRate",
                    "component": "Main",
                    "icon": "md-funnel",
                    "url": "",
                    "buttonType": "",
                    "children": [
                        {
                            "id": "1392323376185440",
                            "parentId": "1392323279716448",
                            "name": "creditRate",
                            "showAlways": true,
                            "level": 2,
                            "type": 0,
                            "title": "AAA企业信用等级",
                            "path": "creditRate",
                            "component": "creditRate/creditRate",
                            "icon": "md-funnel",
                            "url": null,
                            "buttonType": "",
                            "children": null,
                            "permTypes": []
                        }
                    ],
                    "permTypes": null
                },
                {
                    "id": "1497449514401888",
                    "parentId": "125909152017944576",
                    "name": "benCattle",
                    "showAlways": false,
                    "level": 1,
                    "type": 0,
                    "title": "拓犇牛标书",
                    "path": "/benCattle",
                    "component": "Main",
                    "icon": "md-funnel",
                    "url": "",
                    "buttonType": "",
                    "children": [
                        {
                            "id": "1497449912860768",
                            "parentId": "1497449514401888",
                            "name": "benCattle",
                            "showAlways": true,
                            "level": 2,
                            "type": 0,
                            "title": "拓犇牛标书",
                            "path": "benCattle",
                            "component": "creditRate/benCattle",
                            "icon": "md-funnel",
                            "url": "",
                            "buttonType": "",
                            "children": null,
                            "permTypes": []
                        }
                    ],
                    "permTypes": null
                },
                {
                    "id": "1386693921865826",
                    "parentId": "125909152017944576",
                    "name": "infoPublish",
                    "showAlways": true,
                    "level": 1,
                    "type": 0,
                    "title": "非招标采购信息发布",
                    "path": "/infoPublish",
                    "component": "Main",
                    "icon": "ios-create",
                    "url": "",
                    "buttonType": "",
                    "children": [
                        {
                            "id": "1386721266630754",
                            "parentId": "1386693921865826",
                            "name": "infoHome",
                            "showAlways": true,
                            "level": 2,
                            "type": 0,
                            "title": "自主招标首页",
                            "path": "infoHome",
                            "component": "infoPublish/infoHome/infoHome",
                            "icon": "ios-planet",
                            "url": "",
                            "buttonType": "",
                            "children": null,
                            "permTypes": []
                        },
                        {
                            "id": "1388180563558496",
                            "parentId": "1386693921865826",
                            "name": "project",
                            "showAlways": true,
                            "level": 2,
                            "type": 0,
                            "title": "项目",
                            "path": "project",
                            "component": "infoPublish/project/project",
                            "icon": "ios-apps",
                            "url": null,
                            "buttonType": "",
                            "children": null,
                            "permTypes": []
                        },
                        {
                            "id": "1389471138316384",
                            "parentId": "1386693921865826",
                            "name": "prequalification",
                            "showAlways": true,
                            "level": 2,
                            "type": 0,
                            "title": "资格预审公告",
                            "path": "prequalification",
                            "component": "infoPublish/prequalification/prequalification",
                            "icon": "ios-apps",
                            "url": "",
                            "buttonType": "",
                            "children": null,
                            "permTypes": []
                        },
                        {
                            "id": "1389254852739168",
                            "parentId": "1386693921865826",
                            "name": "tender",
                            "showAlways": true,
                            "level": 2,
                            "type": 0,
                            "title": "招标公告",
                            "path": "tender",
                            "component": "infoPublish/tender/tender",
                            "icon": "md-albums",
                            "url": null,
                            "buttonType": "",
                            "children": null,
                            "permTypes": []
                        },
                        {
                            "id": "1389285427118176",
                            "parentId": "1386693921865826",
                            "name": "candidate",
                            "showAlways": true,
                            "level": 2,
                            "type": 0,
                            "title": "中标候选人公示",
                            "path": "candidate",
                            "component": "infoPublish/candidate/candidate",
                            "icon": "ios-contact",
                            "url": null,
                            "buttonType": "",
                            "children": null,
                            "permTypes": []
                        },
                        {
                            "id": "1389402735509600",
                            "parentId": "1386693921865826",
                            "name": "result",
                            "showAlways": true,
                            "level": 2,
                            "type": 0,
                            "title": "中标结果公告",
                            "path": "result",
                            "component": "infoPublish/result/result",
                            "icon": "md-browsers",
                            "url": "",
                            "buttonType": "",
                            "children": null,
                            "permTypes": []
                        }
                    ],
                    "permTypes": null
                },
                {
                    "id": "1267742005732184064",
                    "parentId": "125909152017944576",
                    "name": "companyManage",
                    "showAlways": true,
                    "level": 1,
                    "type": 0,
                    "title": "企业管理",
                    "path": "/companyManage",
                    "component": "Main",
                    "icon": "ios-pie",
                    "url": "",
                    "buttonType": "",
                    "children": [
                        {
                            "id": "1267742977019744257",
                            "parentId": "1267742005732184064",
                            "name": "certificate",
                            "showAlways": true,
                            "level": 2,
                            "type": 0,
                            "title": "企业认证",
                            "path": "certificate",
                            "component": "companyManage/certificate",
                            "icon": "ios-checkmark-circle",
                            "url": null,
                            "buttonType": "",
                            "children": null,
                            "permTypes": []
                        },
                        {
                            "id": "1267744381285306369",
                            "parentId": "1267742005732184064",
                            "name": "count",
                            "showAlways": true,
                            "level": 2,
                            "type": 0,
                            "title": "账号管理",
                            "path": "count",
                            "component": "companyManage/count",
                            "icon": "ios-contact",
                            "url": null,
                            "buttonType": "",
                            "children": null,
                            "permTypes": []
                        }
                    ],
                    "permTypes": null
                }
            ],
            "permTypes": null
        }
    ]
}
export const sex = {
    "success": true,
    "message": "success",
    "code": 200,
    "timestamp": 1694884656403,
    "result": [
        {
            "id": "75158227712479232",
            "createBy": "admin",
            "createTime": "2018-11-14 23:44:19",
            "updateBy": "admin",
            "updateTime": "2019-04-01 23:53:13",
            "delFlag": 0,
            "title": "男",
            "value": "男",
            "sortOrder": 0,
            "status": 0,
            "description": "",
            "dictId": "75135930788220928"
        },
        {
            "id": "75159254272577536",
            "createBy": "admin",
            "createTime": "2018-11-14 23:48:24",
            "updateBy": "admin",
            "updateTime": "2019-04-01 23:53:17",
            "delFlag": 0,
            "title": "女",
            "value": "女",
            "sortOrder": 1,
            "status": 0,
            "description": "",
            "dictId": "75135930788220928"
        }
    ]
}
export const message_type = {
    "success": true,
    "message": "success",
    "code": 200,
    "timestamp": 1694884656505,
    "result": [
        {
            "id": "75385648017575936",
            "createBy": "admin",
            "createTime": "2018-11-15 14:48:00",
            "updateBy": "admin",
            "updateTime": "2019-04-02 00:10:36",
            "delFlag": 0,
            "title": "系统公告",
            "value": "系统公告",
            "sortOrder": 0,
            "status": 0,
            "description": "",
            "dictId": "75383353938808832"
        },
        {
            "id": "75385706913992704",
            "createBy": "admin",
            "createTime": "2018-11-15 14:48:14",
            "updateBy": "admin",
            "updateTime": "2019-04-02 00:10:32",
            "delFlag": 0,
            "title": "提醒",
            "value": "提醒",
            "sortOrder": 1,
            "status": 0,
            "description": "",
            "dictId": "75383353938808832"
        },
        {
            "id": "75385774274514944",
            "createBy": "admin",
            "createTime": "2018-11-15 14:48:30",
            "updateBy": "admin",
            "updateTime": "2019-04-02 00:10:28",
            "delFlag": 0,
            "title": "私信",
            "value": "私信",
            "sortOrder": 2,
            "status": 0,
            "description": "",
            "dictId": "75383353938808832"
        },
        {
            "id": "125170157323554816",
            "createBy": "admin",
            "createTime": "2019-04-01 23:53:52",
            "updateBy": "admin",
            "updateTime": "2019-04-01 23:53:52",
            "delFlag": 0,
            "title": "工作流",
            "value": "工作流",
            "sortOrder": 3,
            "status": 0,
            "description": "",
            "dictId": "75383353938808832"
        },
        {
            "id": "1268013029535125504",
            "createBy": "admin",
            "createTime": "2020-06-03 10:53:59",
            "updateBy": "admin",
            "updateTime": "2020-06-03 10:53:59",
            "delFlag": 0,
            "title": "信息分享",
            "value": "信息分享",
            "sortOrder": 4,
            "status": 0,
            "description": "信息分享",
            "dictId": "75383353938808832"
        },
        {
            "id": "1268013088402182144",
            "createBy": "admin",
            "createTime": "2020-06-03 10:54:13",
            "updateBy": "admin",
            "updateTime": "2020-06-03 10:54:13",
            "delFlag": 0,
            "title": "订阅方案",
            "value": "订阅方案",
            "sortOrder": 5,
            "status": 0,
            "description": "订阅方案",
            "dictId": "75383353938808832"
        },
        {
            "id": "1391041162772576",
            "createBy": "admin",
            "createTime": "2021-01-07 10:01:56",
            "updateBy": "admin",
            "updateTime": "2021-01-07 10:01:56",
            "delFlag": 0,
            "title": "开始提醒",
            "value": "开始提醒",
            "sortOrder": 6,
            "status": 0,
            "description": "开始提醒",
            "dictId": "75383353938808832"
        },
        {
            "id": "1391041288601696",
            "createBy": "admin",
            "createTime": "2021-01-07 10:02:56",
            "updateBy": "admin",
            "updateTime": "2021-01-07 10:03:05",
            "delFlag": 0,
            "title": "结束提醒",
            "value": "结束提醒",
            "sortOrder": 7,
            "status": 0,
            "description": "结束提醒",
            "dictId": "75383353938808832"
        }
    ]
}
export const priority = {
    "success": true,
    "message": "success",
    "code": 200,
    "timestamp": 1694884656398,
    "result": [
        {
            "id": "81843987719131136",
            "createBy": "admin",
            "createTime": "2018-12-03 10:31:08",
            "updateBy": "admin",
            "updateTime": "2018-12-03 10:31:08",
            "delFlag": 0,
            "title": "普通",
            "value": "0",
            "sortOrder": 0,
            "status": 0,
            "description": "",
            "dictId": "81843858882695168"
        },
        {
            "id": "81844044015079424",
            "createBy": "admin",
            "createTime": "2018-12-03 10:31:22",
            "updateBy": "admin",
            "updateTime": "2018-12-03 10:31:22",
            "delFlag": 0,
            "title": "重要",
            "value": "1",
            "sortOrder": 1,
            "status": 0,
            "description": "",
            "dictId": "81843858882695168"
        },
        {
            "id": "81844100705292288",
            "createBy": "admin",
            "createTime": "2018-12-03 10:31:35",
            "updateBy": "admin",
            "updateTime": "2018-12-03 10:31:35",
            "delFlag": 0,
            "title": "紧急",
            "value": "2",
            "sortOrder": 2,
            "status": 0,
            "description": "",
            "dictId": "81843858882695168"
        }
    ]
}
export const leavetype = {
    "success": true,
    "message": "success",
    "code": 200,
    "timestamp": 1694884656504,
    "result": [
        {
            "id": "99020985985929216",
            "createBy": "admin",
            "createTime": "2019-01-19 20:06:23",
            "updateBy": "admin",
            "updateTime": "2019-04-01 23:55:48",
            "delFlag": 0,
            "title": "年假",
            "value": "年假",
            "sortOrder": 0,
            "status": 0,
            "description": "",
            "dictId": "99020862912466944"
        },
        {
            "id": "99021020739932160",
            "createBy": "admin",
            "createTime": "2019-01-19 20:06:32",
            "updateBy": "admin",
            "updateTime": "2019-04-01 23:55:52",
            "delFlag": 0,
            "title": "事假",
            "value": "事假",
            "sortOrder": 1,
            "status": 0,
            "description": "",
            "dictId": "99020862912466944"
        },
        {
            "id": "99021195566911488",
            "createBy": "admin",
            "createTime": "2019-01-19 20:07:13",
            "updateBy": "admin",
            "updateTime": "2019-04-01 23:55:56",
            "delFlag": 0,
            "title": "病假",
            "value": "病假",
            "sortOrder": 2,
            "status": 0,
            "description": "",
            "dictId": "99020862912466944"
        },
        {
            "id": "99021242476007424",
            "createBy": "admin",
            "createTime": "2019-01-19 20:07:24",
            "updateBy": "admin",
            "updateTime": "2019-04-01 23:56:01",
            "delFlag": 0,
            "title": "调休",
            "value": "调休",
            "sortOrder": 3,
            "status": 0,
            "description": "",
            "dictId": "99020862912466944"
        },
        {
            "id": "99021300730695680",
            "createBy": "admin",
            "createTime": "2019-01-19 20:07:38",
            "updateBy": "admin",
            "updateTime": "2019-04-01 23:56:05",
            "delFlag": 0,
            "title": "产假",
            "value": "产假",
            "sortOrder": 4,
            "status": 0,
            "description": "",
            "dictId": "99020862912466944"
        },
        {
            "id": "99021341889400832",
            "createBy": "admin",
            "createTime": "2019-01-19 20:07:48",
            "updateBy": "admin",
            "updateTime": "2019-04-01 23:56:10",
            "delFlag": 0,
            "title": "陪产假",
            "value": "陪产假",
            "sortOrder": 5,
            "status": 0,
            "description": "",
            "dictId": "99020862912466944"
        },
        {
            "id": "99021382393794560",
            "createBy": "admin",
            "createTime": "2019-01-19 20:07:58",
            "updateBy": "admin",
            "updateTime": "2019-04-01 23:56:14",
            "delFlag": 0,
            "title": "婚假",
            "value": "婚假",
            "sortOrder": 6,
            "status": 0,
            "description": "",
            "dictId": "99020862912466944"
        },
        {
            "id": "99021437171404800",
            "createBy": "admin",
            "createTime": "2019-01-19 20:08:11",
            "updateBy": "admin",
            "updateTime": "2019-04-01 23:56:18",
            "delFlag": 0,
            "title": "例假",
            "value": "例假",
            "sortOrder": 7,
            "status": 0,
            "description": "",
            "dictId": "99020862912466944"
        },
        {
            "id": "99021497724571648",
            "createBy": "admin",
            "createTime": "2019-01-19 20:08:25",
            "updateBy": "admin",
            "updateTime": "2019-04-01 23:56:23",
            "delFlag": 0,
            "title": "丧假",
            "value": "丧假",
            "sortOrder": 8,
            "status": 0,
            "description": "",
            "dictId": "99020862912466944"
        },
        {
            "id": "99021556704874496",
            "createBy": "admin",
            "createTime": "2019-01-19 20:08:39",
            "updateBy": "admin",
            "updateTime": "2019-04-01 23:56:27",
            "delFlag": 0,
            "title": "哺乳假",
            "value": "哺乳假",
            "sortOrder": 9,
            "status": 0,
            "description": "",
            "dictId": "99020862912466944"
        }
    ]
}
export const getByCondition = {
    "success": true,
    "message": "success",
    "code": 200,
    "timestamp": 1695621169089,
    "result": {
        "content": [
            {
                "id": "1541983556337796",
                "createBy": "1394855940980832",
                "createTime": "2023-04-20 11:04:18",
                "updateBy": "1394855940980832",
                "updateTime": "2023-04-20 11:04:18",
                "delFlag": 0,
                "username": "1541983556337796",
                "loginId": "1541983556337796",
                "loginIdHash": 2501742749875163600,
                "loginVer": 1,
                "password": null,
                "pwdSalt": "QlQTpQTXcLgNBNJpOHWejchxBaUUPbJvzXiIbTwJsNnXYgAqjBNilPcXUaWecyiI",
                "pwdVer": 1,
                "pwdCrypt": "ali_sign_pwd",
                "nickname": "测试王w",
                "mobile": "YzI1MmIyMmYtNzJiZi00MWNiLTkwN2MtNDNhM2JiNzA0MzZkAObLVfFbTxceVZJMQQI7jmrYKmIIQ0OTP6RXuCKJkxWMDiQM552VpVW7vGk=",
                "mobileHash": 4759901892773869000,
                "mobileVer": -1,
                "email": null,
                "wechat": null,
                "app": null,
                "address": null,
                "street": null,
                "sex": null,
                "passStrength": null,
                "avatar": "https://gys-public.oss-cn-beijing.aliyuncs.com/shangwushi/635fb51350914a04ad96226a469328c6.png",
                "type": 0,
                "status": 0,
                "description": null,
                "departmentId": null,
                "departmentTitle": null,
                "department": "技术部",
                "companyId": "123456789",
                "companyName": null,
                "registerType": 3,
                "crmLxrId": null,
                "birth": null,
                "isLink": 1,
                "roles": [
                    {
                        "id": "1267725543390973952",
                        "name": "普通用户",
                        "description": null
                    }
                ],
                "permissions": null,
                "defaultRole": null,
                "creator": "王三",
                "memberType": null,
                "expireTime": null,
                "contact": null,
                "contactPhone": null,
                "loginPrompt": "0",
                "couponAmount": null,
                "couponExpire": null,
                "voucherUsers": null,
                "payFlag": false,
                "mailTemplate": 1,
                "wxQrcode": null,
                "popWxFlag": null,
                "subTipFlag": null,
                "contactDept": null,
                "pv": null
            },
            {
                "id": "1537672073969792",
                "createBy": "1394855940980832",
                "createTime": "2023-03-27 15:59:43",
                "updateBy": "1394855940980832",
                "updateTime": "2023-03-27 15:59:43",
                "delFlag": 0,
                "username": "1537672073969792",
                "loginId": "1537672073969792",
                "loginIdHash": -1817260980189823700,
                "loginVer": 1,
                "password": null,
                "pwdSalt": "LfzNTPuOlCHKXhaUjmDtKFtxAoCcTEAlalUTtfnpNjaGpUyzoXNrKOLpzAkGhgNt",
                "pwdVer": 1,
                "pwdCrypt": "ali_sign_pwd",
                "nickname": "测试王",
                "mobile": "YzI1MmIyMmYtNzJiZi00MWNiLTkwN2MtNDNhM2JiNzA0MzZkiEX9XNFI5ySSpF9NdVQcm3iaObTclIkK+p/XWJgC+o3eJk8KVAs5R+3KRlo=",
                "mobileHash": 2425650880316268000,
                "mobileVer": -1,
                "email": null,
                "wechat": null,
                "app": null,
                "address": null,
                "street": null,
                "sex": null,
                "passStrength": null,
                "avatar": "https://gys-public.oss-cn-beijing.aliyuncs.com/shangwushi/635fb51350914a04ad96226a469328c6.png",
                "type": 0,
                "status": 0,
                "description": null,
                "departmentId": null,
                "departmentTitle": null,
                "department": "技术部",
                "companyId": "123456789",
                "companyName": null,
                "registerType": 3,
                "crmLxrId": null,
                "birth": null,
                "isLink": 1,
                "roles": [
                    {
                        "id": "1267725543390973952",
                        "name": "普通用户",
                        "description": null
                    }
                ],
                "permissions": null,
                "defaultRole": null,
                "creator": "王三",
                "memberType": null,
                "expireTime": null,
                "contact": null,
                "contactPhone": null,
                "loginPrompt": "0",
                "couponAmount": null,
                "couponExpire": null,
                "voucherUsers": null,
                "payFlag": false,
                "mailTemplate": 1,
                "wxQrcode": null,
                "popWxFlag": null,
                "subTipFlag": null,
                "contactDept": null,
                "pv": null
            },
            {
                "id": "1394855940980832",
                "createBy": "1321703165904687104",
                "createTime": "2021-01-28 11:19:05",
                "updateBy": "admin",
                "updateTime": "2021-02-26 14:50:39",
                "delFlag": 0,
                "username": "1394855940980832",
                "loginId": "1394855940980832",
                "loginIdHash": -7772888863641912000,
                "loginVer": 1,
                "password": null,
                "pwdSalt": "MzRUytgkEqpoICTWqvfgarcIiiKfYIIKykKCHvTEMwEfYVwniYXiklfBdFETFRjE",
                "pwdVer": 1,
                "pwdCrypt": "ali_sign_pwd",
                "nickname": "王三",
                "mobile": "150****6456",
                "mobileHash": -4544228971539729400,
                "mobileVer": -1,
                "email": "132@qq.com",
                "wechat": "",
                "app": "",
                "address": "",
                "street": "",
                "sex": "男",
                "passStrength": "",
                "avatar": "https://gys-public.oss-cn-beijing.aliyuncs.com/shangwushi/635fb51350914a04ad96226a469328c6.png",
                "type": 1,
                "status": 0,
                "description": "",
                "departmentId": null,
                "departmentTitle": "",
                "department": "测试",
                "companyId": "123456789",
                "companyName": null,
                "registerType": 1,
                "crmLxrId": "",
                "birth": null,
                "isLink": 0,
                "roles": [
                    {
                        "id": "1289042242639630336",
                        "name": "管理员",
                        "description": null
                    }
                ],
                "permissions": [
                    {
                        "title": "添加用户",
                        "path": "/xboot/user/admin/add*"
                    },
                    {
                        "title": "编辑用户",
                        "path": "/xboot/user/admin/edit*"
                    },
                    {
                        "title": "禁用用户",
                        "path": "/xboot/user/admin/disable/**"
                    },
                    {
                        "title": "启用用户",
                        "path": "/xboot/user/admin/enable/**"
                    },
                    {
                        "title": "删除用户",
                        "path": "/xboot/user/delByIds**"
                    },
                    {
                        "title": "上传图片",
                        "path": "无"
                    },
                    {
                        "title": "导入用户",
                        "path": "/xboot/user/importData*"
                    },
                    {
                        "title": "重置密码",
                        "path": "/xboot/user/resetPass"
                    },
                    {
                        "title": "添加角色",
                        "path": "/xboot/role/save*"
                    },
                    {
                        "title": "添加部门",
                        "path": "/xboot/department/add*"
                    },
                    {
                        "title": "编辑角色",
                        "path": "/xboot/role/edit*"
                    },
                    {
                        "title": "编辑部门",
                        "path": "/xboot/department/edit*"
                    },
                    {
                        "title": "删除角色",
                        "path": "/xboot/role/delByIds**"
                    },
                    {
                        "title": "删除部门",
                        "path": "/xboot/department/delByIds*"
                    },
                    {
                        "title": "分配权限",
                        "path": "/xboot/role/editRolePerm**"
                    },
                    {
                        "title": "设为默认角色",
                        "path": "/xboot/role/setDefault*"
                    },
                    {
                        "title": "添加菜单",
                        "path": "/xboot/permission/add*"
                    },
                    {
                        "title": "添加消息",
                        "path": "/xboot/message/add*"
                    },
                    {
                        "title": "编辑菜单",
                        "path": "/xboot/permission/edit*"
                    },
                    {
                        "title": "编辑消息",
                        "path": "/xboot/message/edit*"
                    },
                    {
                        "title": "删除消息",
                        "path": "/xboot/message/delByIds*"
                    },
                    {
                        "title": "删除菜单",
                        "path": "/xboot/permission/delByIds**"
                    },
                    {
                        "title": "添加已发送消息",
                        "path": "/xboot/messageSend/save*"
                    },
                    {
                        "title": "删除解绑",
                        "path": "/xboot/relate/delByIds*"
                    },
                    {
                        "title": "上传文件",
                        "path": "无"
                    },
                    {
                        "title": "查看社交账号数据",
                        "path": "无"
                    },
                    {
                        "title": "重命名文件",
                        "path": "/xboot/file/rename*"
                    },
                    {
                        "title": "复制文件",
                        "path": "/xboot/file/copy*"
                    },
                    {
                        "title": "删除文件",
                        "path": "/xboot/file/delete*"
                    },
                    {
                        "title": "编辑已发送消息",
                        "path": "/xboot/messageSend/update*"
                    },
                    {
                        "title": "删除已发送消息",
                        "path": "/xboot/messageSend/delByIds/*"
                    },
                    {
                        "title": "添加字典",
                        "path": "/xboot/dict/add*"
                    },
                    {
                        "title": "查看私密配置",
                        "path": "/xboot/setting/seeSecret/**"
                    },
                    {
                        "title": "编辑字典",
                        "path": "/xboot/dict/edit*"
                    },
                    {
                        "title": "编辑配置",
                        "path": "/xboot/setting/*/set*"
                    },
                    {
                        "title": "删除字典",
                        "path": "/xboot/dict/delByIds**"
                    },
                    {
                        "title": "添加字典数据",
                        "path": "/xboot/dictData/add*"
                    },
                    {
                        "title": "编辑字典数据",
                        "path": "/xboot/dictData/edit*"
                    },
                    {
                        "title": "删除字典数据",
                        "path": "/xboot/dictData/delByIds/**"
                    }
                ],
                "defaultRole": null,
                "creator": "王君",
                "memberType": null,
                "expireTime": null,
                "contact": null,
                "contactPhone": null,
                "loginPrompt": "0",
                "couponAmount": null,
                "couponExpire": null,
                "voucherUsers": null,
                "payFlag": false,
                "mailTemplate": 0,
                "wxQrcode": null,
                "popWxFlag": null,
                "subTipFlag": null,
                "contactDept": null,
                "pv": null
            },
            {
                "id": "1323897715796611072",
                "createBy": "1321703165904687104",
                "createTime": "2020-11-04 15:59:48",
                "updateBy": "1321703165904687104",
                "updateTime": "2020-11-04 15:59:48",
                "delFlag": 0,
                "username": "1323897715796611072",
                "loginId": "1323897715796611072",
                "loginIdHash": -1699077412438373600,
                "loginVer": 1,
                "password": null,
                "pwdSalt": "rtvadDdqENFSMSPcAnzSQCNdZOKpTOthBlvWUTsBPqAMJDqjlWYNcDgxSqkRPFRb",
                "pwdVer": 1,
                "pwdCrypt": "ali_sign_pwd",
                "nickname": "王二",
                "mobile": "MzRjMjA2ZDgtNWUwZS00YjY5LTgxZDctZWM2Mjc3YWM0MmVhJpPsyQ/8uUH0G7WJtAsAmads+PtSWoOF+1WU7x7FS9aLNnNQBwfR2/UX1EQ=",
                "mobileHash": -2965902081810800600,
                "mobileVer": -1,
                "email": null,
                "wechat": null,
                "app": null,
                "address": null,
                "street": null,
                "sex": "男",
                "passStrength": null,
                "avatar": "https://gys-public.oss-cn-beijing.aliyuncs.com/shangwushi/635fb51350914a04ad96226a469328c6.png",
                "type": 0,
                "status": 0,
                "description": null,
                "departmentId": null,
                "departmentTitle": "",
                "department": "测试",
                "companyId": "123456789",
                "companyName": null,
                "registerType": 1,
                "crmLxrId": null,
                "birth": null,
                "isLink": 0,
                "roles": [
                    {
                        "id": "1267725543390973952",
                        "name": "普通用户",
                        "description": null
                    }
                ],
                "permissions": null,
                "defaultRole": null,
                "creator": "王君",
                "memberType": null,
                "expireTime": null,
                "contact": null,
                "contactPhone": null,
                "loginPrompt": "0",
                "couponAmount": null,
                "couponExpire": null,
                "voucherUsers": null,
                "payFlag": false,
                "mailTemplate": 0,
                "wxQrcode": null,
                "popWxFlag": null,
                "subTipFlag": null,
                "contactDept": null,
                "pv": null
            }
        ],
        "pageable": {
            "sort": {
                "sorted": true,
                "unsorted": false,
                "empty": false
            },
            "offset": 0,
            "pageNumber": 0,
            "pageSize": 1000000,
            "paged": true,
            "unpaged": false
        },
        "last": true,
        "totalElements": 4,
        "totalPages": 1,
        "sort": {
            "sorted": true,
            "unsorted": false,
            "empty": false
        },
        "first": true,
        "size": 1000000,
        "number": 0,
        "numberOfElements": 4,
        "empty": false
    }
}
export const getAllGroup = {
    "success": true,
    "message": "success",
    "code": 200,
    "timestamp": 1695621169048,
    "result": [
        {
            "id": "1531684449157216",
            "createBy": "1394855940980832",
            "createTime": "2023-02-22 14:54:20",
            "updateBy": "1394855940980832",
            "updateTime": "2023-02-22 14:54:23",
            "delFlag": 0,
            "userId": 1394855940980832,
            "name": "电力 + 项目公告 + 内容 + 全部地区 + 全部阶段 + 全部一级行业 + 全部二级行业 + 或查询 + 近一年",
            "area": "",
            "infoType": "3110",
            "category": null,
            "primaryIndustry": "-1",
            "secondaryIndustry": "-1",
            "stage": "0",
            "searchRange": 0,
            "type": 1,
            "dateRange": 6,
            "startTime": null,
            "endTime": null,
            "keyword": "电力",
            "isEmail": true,
            "isWechat": false,
            "isSms": false,
            "isApp": false,
            "status": null,
            "keywordLogic": 0,
            "xxlx": null,
            "bxlb": "0"
        },
        {
            "id": "1530788413702240",
            "createBy": "1394855940980832",
            "createTime": "2023-02-17 16:13:18",
            "updateBy": "1394855940980832",
            "updateTime": "2023-02-17 16:13:23",
            "delFlag": 0,
            "userId": 1394855940980832,
            "name": "电力 + 项目公告 + 内容 + 全部地区 + 全部阶段 + 全部一级行业 + 全部二级行业 + 与查询 + 近一周",
            "area": "",
            "infoType": "3110",
            "category": null,
            "primaryIndustry": "-1",
            "secondaryIndustry": "-1",
            "stage": "0",
            "searchRange": 0,
            "type": 1,
            "dateRange": 1,
            "startTime": null,
            "endTime": null,
            "keyword": "电力",
            "isEmail": true,
            "isWechat": false,
            "isSms": false,
            "isApp": false,
            "status": null,
            "keywordLogic": 1,
            "xxlx": null,
            "bxlb": "0"
        },
        {
            "id": "1530736928620640",
            "createBy": "1394855940980832",
            "createTime": "2023-02-17 09:24:07",
            "updateBy": "1394855940980832",
            "updateTime": "2023-02-17 09:24:07",
            "delFlag": 0,
            "userId": 1394855940980832,
            "name": "电力 + 项目跟踪 + 内容 + 全部地区 + 全部阶段 + 全部一级行业 + 全部二级行业 + 与查询 + 近三月",
            "area": "",
            "infoType": "3070,3020",
            "category": null,
            "primaryIndustry": "-1",
            "secondaryIndustry": "-1",
            "stage": "0",
            "searchRange": 0,
            "type": 1,
            "dateRange": 4,
            "startTime": null,
            "endTime": null,
            "keyword": "电力",
            "isEmail": false,
            "isWechat": false,
            "isSms": false,
            "isApp": false,
            "status": null,
            "keywordLogic": 1,
            "xxlx": null,
            "bxlb": "0"
        },
        {
            "id": "1530246115366112",
            "createBy": "9461283417952256",
            "createTime": "2023-02-14 08:23:30",
            "updateBy": "9461283417952256",
            "updateTime": "2023-02-14 08:23:30",
            "delFlag": 0,
            "userId": 1394855940980832,
            "name": "电力 + 项目公告 + 内容 + 全部地区 + 全部阶段 + 全部一级行业 + 全部二级行业 + 或查询 + 近三月",
            "area": "",
            "infoType": "3110,3120",
            "category": null,
            "primaryIndustry": "-1",
            "secondaryIndustry": "-1",
            "stage": "0",
            "searchRange": 0,
            "type": 1,
            "dateRange": 4,
            "startTime": null,
            "endTime": null,
            "keyword": "电力",
            "isEmail": false,
            "isWechat": false,
            "isSms": false,
            "isApp": false,
            "status": null,
            "keywordLogic": 0,
            "xxlx": null,
            "bxlb": null
        }
    ]
}
export const userInfo = {
    "success": true,
    "message": "success",
    "code": 200,
    "timestamp": 1695621169154,
    "result": {
        "id": "1394855940980832",
        "createBy": "1321703165904687104",
        "createTime": "2021-01-28 11:19:05",
        "updateBy": "1394855940980832",
        "updateTime": "2023-09-25 13:52:49",
        "delFlag": 0,
        "username": "1394855940980832",
        "loginId": "1394855940980832",
        "loginIdHash": -7772888863641912000,
        "loginVer": 1,
        "password": null,
        "pwdSalt": "MzRUytgkEqpoICTWqvfgarcIiiKfYIIKykKCHvTEMwEfYVwniYXiklfBdFETFRjE",
        "pwdVer": 1,
        "pwdCrypt": "ali_sign_pwd",
        "nickname": "王三",
        "mobile": "150****6456",
        "mobileHash": -4544228971539729400,
        "mobileVer": -1,
        "email": "1****2@qq.com",
        "wechat": "",
        "app": "",
        "address": "",
        "street": "",
        "sex": "男",
        "passStrength": "",
        "avatar": "https://gys-public.oss-cn-beijing.aliyuncs.com/shangwushi/635fb51350914a04ad96226a469328c6.png",
        "type": 1,
        "status": 0,
        "description": "",
        "departmentId": null,
        "departmentTitle": "",
        "department": "测试",
        "companyId": "123456789",
        "companyName": "1",
        "registerType": 1,
        "crmLxrId": "",
        "birth": null,
        "isLink": 0,
        "roles": [
            {
                "id": "1289042242639630336",
                "name": "管理员",
                "description": null
            }
        ],
        "permissions": [
            {
                "title": "添加用户",
                "path": "/xboot/user/admin/add*"
            },
            {
                "title": "编辑用户",
                "path": "/xboot/user/admin/edit*"
            },
            {
                "title": "禁用用户",
                "path": "/xboot/user/admin/disable/**"
            },
            {
                "title": "启用用户",
                "path": "/xboot/user/admin/enable/**"
            },
            {
                "title": "删除用户",
                "path": "/xboot/user/delByIds**"
            },
            {
                "title": "上传图片",
                "path": "无"
            },
            {
                "title": "导入用户",
                "path": "/xboot/user/importData*"
            },
            {
                "title": "重置密码",
                "path": "/xboot/user/resetPass"
            },
            {
                "title": "添加角色",
                "path": "/xboot/role/save*"
            },
            {
                "title": "添加部门",
                "path": "/xboot/department/add*"
            },
            {
                "title": "编辑角色",
                "path": "/xboot/role/edit*"
            },
            {
                "title": "编辑部门",
                "path": "/xboot/department/edit*"
            },
            {
                "title": "删除角色",
                "path": "/xboot/role/delByIds**"
            },
            {
                "title": "删除部门",
                "path": "/xboot/department/delByIds*"
            },
            {
                "title": "分配权限",
                "path": "/xboot/role/editRolePerm**"
            },
            {
                "title": "设为默认角色",
                "path": "/xboot/role/setDefault*"
            },
            {
                "title": "添加菜单",
                "path": "/xboot/permission/add*"
            },
            {
                "title": "添加消息",
                "path": "/xboot/message/add*"
            },
            {
                "title": "编辑菜单",
                "path": "/xboot/permission/edit*"
            },
            {
                "title": "编辑消息",
                "path": "/xboot/message/edit*"
            },
            {
                "title": "删除消息",
                "path": "/xboot/message/delByIds*"
            },
            {
                "title": "删除菜单",
                "path": "/xboot/permission/delByIds**"
            },
            {
                "title": "添加已发送消息",
                "path": "/xboot/messageSend/save*"
            },
            {
                "title": "删除解绑",
                "path": "/xboot/relate/delByIds*"
            },
            {
                "title": "上传文件",
                "path": "无"
            },
            {
                "title": "查看社交账号数据",
                "path": "无"
            },
            {
                "title": "重命名文件",
                "path": "/xboot/file/rename*"
            },
            {
                "title": "复制文件",
                "path": "/xboot/file/copy*"
            },
            {
                "title": "删除文件",
                "path": "/xboot/file/delete*"
            },
            {
                "title": "编辑已发送消息",
                "path": "/xboot/messageSend/update*"
            },
            {
                "title": "删除已发送消息",
                "path": "/xboot/messageSend/delByIds/*"
            },
            {
                "title": "添加字典",
                "path": "/xboot/dict/add*"
            },
            {
                "title": "查看私密配置",
                "path": "/xboot/setting/seeSecret/**"
            },
            {
                "title": "编辑字典",
                "path": "/xboot/dict/edit*"
            },
            {
                "title": "编辑配置",
                "path": "/xboot/setting/*/set*"
            },
            {
                "title": "删除字典",
                "path": "/xboot/dict/delByIds**"
            },
            {
                "title": "添加字典数据",
                "path": "/xboot/dictData/add*"
            },
            {
                "title": "编辑字典数据",
                "path": "/xboot/dictData/edit*"
            },
            {
                "title": "删除字典数据",
                "path": "/xboot/dictData/delByIds/**"
            }
        ],
        "defaultRole": null,
        "creator": null,
        "memberType": "入门会员",
        "expireTime": "2023-03-23",
        "contact": "",
        "contactPhone": "400-006-6655",
        "loginPrompt": "0",
        "couponAmount": null,
        "couponExpire": null,
        "voucherUsers": [],
        "payFlag": false,
        "mailTemplate": 0,
        "wxQrcode": null,
        "popWxFlag": null,
        "subTipFlag": null,
        "contactDept": null,
        "pv": [
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0"
        ]
    }
}
export const nzjSearch = {
    "status": "OK",
    "request_id": "169562116916800182750075",
    "result": {
        "searchtime": 0.084032,
        "total": 3468,
        "num": 30,
        "viewtotal": 3468,
        "compute_cost": [
            {
                "index_name": "chinabiddingopensearch",
                "value": 12.527
            }
        ],
        "items": [
            {
                "category_id": "3\t1",
                "classb_id": "",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMYG",
                "title": "枣强县客运站（城乡客运一体化项目二期） 项目监理招标计划公示表",
                "area_id": "5",
                "id": "2349582023",
                "publish_date": "1695571200000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nfDmfS.html"
            },
            {
                "category_id": "17\t3",
                "classb_id": "",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMYG",
                "title": "国网山东省电力公司费县供电公司马庄供电所电力巡线站项目招标计划",
                "area_id": "16",
                "id": "2349624560",
                "publish_date": "1695571200000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nfD45p.html"
            },
            {
                "category_id": "17\t2",
                "classb_id": "",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMGS",
                "title": "国网甘肃省电力公司沙戈荒新能源基地电站并网性能实测及数据分析平台技改项目",
                "area_id": "28",
                "id": "2349618729",
                "publish_date": "1695571200000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nfDOR-.html"
            },
            {
                "category_id": "1\t3",
                "classb_id": "",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMYG",
                "title": "枣强县客运站（城乡客运一体化项目二期） 项目招标计划公示表",
                "area_id": "5",
                "id": "2349582025",
                "publish_date": "1695571200000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nfDmfF.html"
            },
            {
                "category_id": "17",
                "classb_id": "",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMGS",
                "title": "平凉海螺新能源崆峒区峡门风电二期5万千瓦项目",
                "area_id": "28",
                "id": "2349140635",
                "publish_date": "1695312000000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nf1GqY.html"
            },
            {
                "category_id": "3",
                "classb_id": "001",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMGS",
                "title": "鑫煜电力（襄阳）有限公司湖北省襄阳市枣阳市熊集镇红土村六组9号耿学强26.4KW屋顶分布式光伏发电项目(2309-420683-04-01-282050)",
                "area_id": "18",
                "id": "2349249563",
                "publish_date": "1695312000000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nfwtKK.html"
            },
            {
                "category_id": "3",
                "classb_id": "001",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMYG",
                "title": "天津滨海南港东220千伏变电站110千伏出线工程",
                "area_id": "3",
                "id": "2349222947",
                "publish_date": "1695312000000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nfw17w.html"
            },
            {
                "category_id": "3\t1",
                "classb_id": "",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMYG",
                "title": "亦庄新城环宇东四路(景盛南六街～辛四路)新建道路工程（施工）",
                "area_id": "1",
                "id": "2349102364",
                "publish_date": "1695312000000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nf1Tb1.html"
            },
            {
                "category_id": "3",
                "classb_id": "001",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMGS",
                "title": "国网荆门供电公司废矿物油暂存库建设项目(2303-420802-04-01-615384)",
                "area_id": "18",
                "id": "2349381971",
                "publish_date": "1695312000000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nfwSva.html"
            },
            {
                "category_id": "3\t1",
                "classb_id": "",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMYG",
                "title": "亦庄新城小张家湾街(环宇东二路～环宇东五路)新建道路工程（施工）",
                "area_id": "1",
                "id": "2349102342",
                "publish_date": "1695312000000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nf1TBj.html"
            },
            {
                "category_id": "5\t3",
                "classb_id": "",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMYG",
                "title": "庐江县2023-2024年第一批政府零星工程及客户工程箱式变、油浸式变压器、高压电缆分支箱、落地式高压计量柜框架采购",
                "area_id": "13",
                "id": "2349215126",
                "publish_date": "1695312000000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nfw5xg.html"
            },
            {
                "category_id": "3\t1",
                "classb_id": "",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMYG",
                "title": "新安江路建设工程（临河西路-撮镇路）",
                "area_id": "13",
                "id": "2349290870",
                "publish_date": "1695312000000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nfwhCi.html"
            },
            {
                "category_id": "3\t1",
                "classb_id": "",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMYG",
                "title": "亦庄新城景盛南五街(环宇东二路～环宇东五路)新建道路工程（施工）",
                "area_id": "1",
                "id": "2349102251",
                "publish_date": "1695312000000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nf1Tca.html"
            },
            {
                "category_id": "3",
                "classb_id": "001",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMGS",
                "title": "鑫煜电力（武汉）有限公司湖北省武汉市黄陂区李集街道博秀街75号杜红华11.55KWP屋顶分布式光伏发电项目(2309-420116-04-01-189736)",
                "area_id": "18",
                "id": "2349243762",
                "publish_date": "1695312000000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nfwrDb.html"
            },
            {
                "category_id": "3",
                "classb_id": "001",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMGS",
                "title": "鑫煜电力（武汉）有限公司武汉市长江新区大潭办事处墩子河村3组33号罗志强29.7KWP屋顶分布式光伏发电项目(2309-420130-04-01-853733)",
                "area_id": "18",
                "id": "2349249603",
                "publish_date": "1695312000000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nfwtRW.html"
            },
            {
                "category_id": "3",
                "classb_id": "001",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMGS",
                "title": "鑫煜电力（襄阳）有限公司湖北省襄阳市枣阳市太平镇肖毛村三组23号乔兴力26.95KW屋顶分布式光伏发电项目(2309-420683-04-01-318196)",
                "area_id": "18",
                "id": "2349249641",
                "publish_date": "1695312000000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nfwtRI.html"
            },
            {
                "category_id": "3",
                "classb_id": "001",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMYG",
                "title": "国网天津城东公司辰盛路110千伏变电站10千伏同期出线新建工程",
                "area_id": "3",
                "id": "2349324816",
                "publish_date": "1695312000000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nfwb03.html"
            },
            {
                "category_id": "3\t1",
                "classb_id": "",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMYG",
                "title": "亦庄新城环宇东三路(南区南街～辛四路)新建道路工程（施工）",
                "area_id": "1",
                "id": "2349102358",
                "publish_date": "1695312000000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nf1TbC.html"
            },
            {
                "category_id": "3\t17",
                "classb_id": "",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMYG",
                "title": "北河小区电力配套工程设计",
                "area_id": "1",
                "id": "2349287443",
                "publish_date": "1695312000000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nfw-D8.html"
            },
            {
                "category_id": "17",
                "classb_id": "",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMGS",
                "title": "宏发海沧临港工业园",
                "area_id": "14",
                "id": "2349184035",
                "publish_date": "1695312000000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nf1v3N.html"
            },
            {
                "category_id": "3",
                "classb_id": "001",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMGS",
                "title": "武汉庙山220千伏变电站扩建工程(2110-420118-89-01-577085)",
                "area_id": "18",
                "id": "2349238927",
                "publish_date": "1695312000000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nfwyxF.html"
            },
            {
                "category_id": "3",
                "classb_id": "001",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMGS",
                "title": "武汉东湖高新周店110千伏变电站扩建工程(2110-420118-89-01-564265)",
                "area_id": "18",
                "id": "2349238931",
                "publish_date": "1695312000000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nfwyxI.html"
            },
            {
                "category_id": "18\t14",
                "classb_id": "",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMGS",
                "title": "中国石油天然气股份有限公司云南临沧销售分公司镇康工业园区加油站新建光伏项目",
                "area_id": "24",
                "id": "2349445894",
                "publish_date": "1695312000000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nfDCUv.html"
            },
            {
                "category_id": "3\t5",
                "classb_id": "001",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMGS",
                "title": "江西中泽生态环境有限公司4号和5号生产厂房建设项目工程",
                "area_id": "15",
                "id": "2349243463",
                "publish_date": "1695312000000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nfwrUF.html"
            },
            {
                "category_id": "3",
                "classb_id": "001",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMGS",
                "title": "鑫煜电力（襄阳）有限公司湖北省襄阳市枣阳市太平镇肖毛村三组22号赵青举19.3KW屋顶分布式光伏发电项目(2309-420683-04-01-106139)",
                "area_id": "18",
                "id": "2349249451",
                "publish_date": "1695312000000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nfwt0E.html"
            },
            {
                "category_id": "3\t1",
                "classb_id": "",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMYG",
                "title": "【西咸新区·沣西新城】【沣西新城】沣西新城创新环东路（创智路-创智北路）市政工程施工招标计划",
                "area_id": "26",
                "id": "2349149263",
                "publish_date": "1695312000000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nf1EJM.html"
            },
            {
                "category_id": "3",
                "classb_id": "001",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMYG",
                "title": "天津滨海南港东220千伏变电站110千伏出线工程",
                "area_id": "3",
                "id": "2349109091",
                "publish_date": "1695312000000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nf1ZrX.html"
            },
            {
                "category_id": "3",
                "classb_id": "001",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMYG",
                "title": "河西区解放南路52号地块黑号电缆管线切改项目",
                "area_id": "3",
                "id": "2349222949",
                "publish_date": "1695312000000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nfw17q.html"
            },
            {
                "category_id": "17\t14",
                "classb_id": "",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMGS",
                "title": "(金冠）崔家屯充电站",
                "area_id": "24",
                "id": "2349445950",
                "publish_date": "1695312000000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nfDC5L.html"
            },
            {
                "category_id": "3\t1",
                "classb_id": "",
                "numa": "0.0",
                "table_name": "XMXX",
                "table_name2": "XMYG",
                "title": "亦庄新城小张家湾街(环宇东二路～环宇东五路)新建道路工程（施工）",
                "area_id": "1",
                "id": "2349628080",
                "publish_date": "1695312000000",
                "index_name": "chinabiddingopensearch",
                "is_collected": "0",
                "url": "https://www.chinabidding.cn/xmxx/nfD4vo.html"
            }
        ],
        "facet": []
    },
    "errors": [],
    "tracer": "",
    "ops_request_misc": "%7B%22request%5Fid%22%3A%22169562116916800182750075%22%2C%22scm%22%3A%2220140713.130003677..%22%7D"
}
export const getToken = {
    "success": true,
    "message": "success",
    "code": 200,
    "timestamp": 1695689681429,
    "result": "0fb1621e004f47a7ba6aef95df8547bd"
}

/*----------------------管理员部分----------------------------*/
//首页数据

