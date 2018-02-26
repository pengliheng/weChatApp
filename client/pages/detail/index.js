//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')


Page({
    data: {},
    onLoad: function(options) {
        this.setData({
            name: options.name,
            author: options.author,
            image: options.image
        })
        util.fly({
            url: "https://api.imjad.cn/cloudmusic",
            method: "GET",
            data: {
                type: "song",
                id: options.id,
                br: 128000
            }
        }).then(json =>{
            this.setData({
                song: json.data[0].url
            })
        })
        util.fly({
            url: "https://api.imjad.cn/cloudmusic",
            method: "GET",
            data: {
                type: "detail",
                id: options.id,
                br: 128000
            }
        }).then(json =>{
            this.setData({
                image: json.songs[0].al.picUrl
            })
        })
        util.fly({
            url: "https://api.imjad.cn/cloudmusic",
            method: "GET",
            data: {
                type: "detail",
                id: options.id,
                br: 128000
            }
        }).then(json =>{
            this.setData({
                image: json.songs[0].al.picUrl
            })
        })
    }
})
