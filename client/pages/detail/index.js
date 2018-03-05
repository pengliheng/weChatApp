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
                type: "lyric",
                id: options.id
            }
        }).then(json =>{
            const lyricArr = json.lrc.lyric.split('\n').map(arr=>{
                return {
                    time: arr.split(']')[0].replace('[',''),
                    word: arr.match(/([^\]]+)$/g) ? arr.match(/([^\]]+)$/g)[0] : ''
                }
            });
            console.log(lyricArr);
            this.setData({
                lyric: lyricArr
            })
        })
        util.fly({
            url: "https://api.imjad.cn/cloudmusic",
            method: "GET",
            data: {
                type: "comments",
                id: options.id
            }
        }).then(json =>{
            console.log(json.hotComments);
            this.setData({
                comments: json.hotComments
            })
        })
    }
})
