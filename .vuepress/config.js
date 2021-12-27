module.exports = {
    "title": "Wen's Blog",
    "lang": "zh-cn",
    "description": "Blog",
    "dest": "public",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/favicon.ico"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    "theme": "reco",
    "themeConfig": {
        "nav": [
            {
                "text": "Home",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "TimeLine",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            {
                "text": "Contact",
                "icon": "reco-message",
                "items": [{
                    "text": "GitHub",
                    "link": "https://github.com/recoluan",
                    "icon": "reco-github"
                }]
            }
        ],
        "sidebar": 'auto',
        "type": "blog",
        "blogConfig": {
            "category": {
                "location": 2,
                "text": "Categories"
            },
            "tag": {
                "location": 3,
                "text": "Tags"
            }
        },
        "friendLink": [
            {
                "title": "午后南杂",
                "desc": "Enjoy when you can, and endure when you must.",
                "email": "1156743527@qq.com",
                "link": "https://www.recoluan.com"
            },
            {
                "title": "vuepress-theme-reco",
                "desc": "A simple and beautiful vuepress Blog & Doc theme.",
                "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                "link": "https://vuepress-theme-reco.recoluan.com"
            }
        ],
        "logo": "/logo.png",
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "Last Updated",
        "author": "文",
        "authorAvatar": "/avatar.png",
        "startYear": "2021"
    },
    "markdown": {
        "lineNumbers": true
    }
}
