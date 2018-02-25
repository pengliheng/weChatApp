//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')


Page({
    data: {
        searchResult: {},
        logged: false,
        takeSession: false,
        requestResult: ''
    },
    bindinputFunc: function(e) {
        console.log(e.detail.value);
        util.fly({
            url: "https://api.imjad.cn/cloudmusic",
            method: "GET",
            data: {
                type: "search",
                search_type: "1",
                s: e.detail.value
            }
        }).then(json =>{
            this.setData({
                searchResult: json.result.songs
            })
            console.log(json.result.songs);
        })        
    }
})
