### 全局环境变量
-.env
-.env.development
-.env.production
-.env.test

VUE_APP_打头的才会被注入

### 目录结构
App.vue,main.js主程序入口
ant-design-vue.js按需引入组件，尽量使用
/router项目路由目录
configureRouter.js加入导航守卫，登录状态检查等操作（开发先注释掉，目前登录功能未完成）
routes.js路由。。。建议在Boot目录loadRoutes.js中动态注入路由
boot目录会在项目启动前运行

因为使用定宽布局（1200px），不做适配，过小出现滚动条，建议使用layouts/MainLoayout控件布局

projects目录下各自的业务目录
projects/common放日历等通用控件

request,auth目录封装登录+请求

通用静态页面，登录，404放views目录

assets目录静态图片，编译好的css文件

utils目录工具库