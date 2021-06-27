/*
 * @Author: your name
 * @Date: 2021-06-27 12:06:07
 * @LastEditTime: 2021-06-27 12:23:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuepress\docs\.vuepress\config.js
 */
module.exports = {
    title: 'MY blog',
    description:'我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link',{rel:'icon',href: '/logo.jpg'}], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base:'/', //这是部署到github相关的配置
    markdown:{
        lineNumbers: false //代码块显示行号
    },
    themConfig:{
        nav:[  //导航栏配置
            {text: '前端基础', link:'/Home.md/'},
            {text: 'HTML', link:'/b/'},
            {text: 'CSS', link:'/c/'}
        ],
        sidebar:'auto', //侧边栏配置
        sidebarDepth: 2, //侧边栏显示2级 
    }
}