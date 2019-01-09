# express-json-server

> 原先使用json-server用于本地接口mock，但发现json-server对完整地址的支持并不那么便利，且默认get为读取数据，post写入数据，针对已经明确请求地址及请求方式的接口，不是那么便利，于是决定回归express搭建本地服务，结合json-server的理念实现接口数据mock



请求路由：`/routes/server.js`

```javascript
router.post('/saas/*', function(req, res, next) {
    let url = req.url
    fs.readFile('./json/db.json', 'utf8', function(err, data) {
        if (err) {
            console.log(err)
            return false
        }
        let jsonData = JSON.parse(data)
        res.json(jsonData[url]);
    })
});
```



mock数据源：`/json/db.json`

```json
{
    "/saas/v1/admin/system/log/pageList":
    {
        "code": 1,
        "ts": 1545968539,
        "msg": "数据查询成功",
        "data":
        {
            "pageNum": 1,
            "pageSize": 10,
            "totalNum": 2,
            "totalPage": 1,
            "isMore": 0,
            "items": [
            {
                "id": 1,
                "appName": null,
                "clientIp": "192.168.1.175",
                "tenantId": null,
                "operatorId": 1,
                "operatorName": "admin",
                "traceId": null,
                "opId": "adminLogin",
                "opName": "登录",
                "opLogLevel": "NORMAL",
                "opTime": "2018-12-26 16:10:10",
                "opContent": null,
                "opDesc": null,
                "opCity": null,
                "opDevice": null
            },
            {
                "id": 2,
                "appName": null,
                "clientIp": "192.168.1.175",
                "tenantId": null,
                "operatorId": 1,
                "operatorName": "admin",
                "traceId": null,
                "opId": "adminLogin",
                "opName": "登录",
                "opLogLevel": "NORMAL",
                "opTime": "2018-12-26 16:10:10",
                "opContent": null,
                "opDesc": null,
                "opCity": null,
                "opDevice": null
            }]
        }
    }
}    
```



