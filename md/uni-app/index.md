### 什么是uni-app
uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉/淘宝）、快应用等多个平台。

### 快速上手
通过vue-cli脚手架创建uni-app项目  
npm install -g @vue/cli  
vue create -p dcloudio/uni-preset-vue my-project 选Hello uni-app模板

### 运行发布uni-app
npm run dev:%PLATFORM%  
npm run build:%PLATFORM%  
%PLATFORM%支持如下：  
app-plus,h5,mp-alipay,mp-baidu,mp-weixin,mp-toutiao,mp-qq,quickapp-webview  
  
在package.json中增加uni-app扩展节点，可自定义%PLATFORM% 

### 其他
- dev模式编译出代码存放于/dist/dev/目录
- build模式编译出代码存放于/dist/build/目录，会压缩代码
- 进行环境判断时，dev 模式 process.env.NODE_ENV 的值为 development，build 模式 process.env.NODE_ENV 的值为 production

### 开发规范
uni-app 使用vue的语法+小程序的标签和API
- 页面文件遵守Vue单文件组件(SFC)规范
- [组件标签靠近小程序规范](https://uniapp.dcloud.io/component/README)
- [JS API靠近微信小程序，需要将前缀wx替换为uni](https://uniapp.dcloud.io/api/README)
- 数据绑定及事件处理同Vue，同时添加了[APP及页面生命周期]()
- 为兼容多端，建议使用flex布局开发

### 目录结构
- components存放uni-app组件
- platforms存放各平台专用页面
- static存放静态资源(图片，视频)等，不要将包含es6的js,scss等文件放在此目录，不会被编译
- main.js初始化入口文件
- App.vue页面应用级配置，配置全局样式及应用生命周期监听
- manifest.json配置应用名称，appid，logo，版本等打包信息
- pages.json配置页面路由，导航条，选项卡等页面信息

### 资源路径说明
@开头代表项目根路径(vue-cli创建的项目指向src目录下)

- 模板内引入静态资源
@开头的绝对路径以及相对路径会经过base64转换规则校验  
引入静态资源在非H5平台，均不转为base64  
H5平台，小于4kb的资源才被转换成base64  
支付宝小程序组件内image标签不可使用相对路径
```html
<!-- 绝对路径 -->
<image src="/static/logo.png"></image>
<image src="@/static/logo.png"></image>
<!-- 相对路径 -->
<image src="../../static/logo.png"></image>
```
- js文件引入
js文件不支持/开头的绝对路径
```javascript
//绝对路径
import add from '@/common/add.js'
//相对路径
import add from '../../common/add.js'
```
- css引入静态资源
css文件或style标签内引入css文件只能使用相对路径(scss,less同理)
```scss
//@import '../../common/uni.css';

//引用图片可使用绝对路径或相对路径
background-image:url('~@/static/logo.png')
background-image:url('@/static/logo.png');
background-image:url('../../static/logo.png');
```
>注意：mp-weixin,mp-qq,mp-toutiao,app v2这四个平台不支持本地图片，小于40kb的图片会自动转base64

### 生命周期
#### 应用生命周期
仅在App.vue中监听
- onLaunch全局触发一次，当uni-app初始化完成时触发
- onShow当uni-app启动，或从后台进入前台时触发
- onHide当uni-app从前台进入后台时触发
- onError当uni-app报错时触发
- onUniNViewMessage对nvue页面发送的数据进行监听

> uni-app针对APP端内置了一个基于weex改进的原生渲染引擎，提供原生渲染能力。  
在APP端使用vue页面，则使用webview渲染，使用nvue，则使用原生渲染  
如果不开放APP，无需使用nvue

#### 页面生命周期
- onLoad监听页面加载，参数为上个页面传递数据类型为object(用于页面传参)
- onShow
- onReady
- onHide
- onUnload
- onResize
- onPullDownRefresh
- onReachBottom
- onTabItemTap
- onShareAppMessage
- onPageScroll
- onNavigationBarButtonTap
- onBackPress
- onNavigationBarSearchInputChanged
- onNavigationBarSearchInputConfirmed
- onNavigationBarSearchInputClicked

#### 组件生命周期
同vue
- beforeCreate
- created
- beforeMount
- mounted
- beforUpdate
- updated
- beforeDestroy
- destroyed

### 路由
框架统一管理，需在pages.json里配置路由路径及对应页面和页面样式，类似微信小程序配置页面路由，不同与vue router  
页面跳转使用[navigator组件](https://uniapp.dcloud.io/component/navigator)或[API](https://uniapp.dcloud.io/component/navigator)

### 运行环境判断
#### 开发生产环境
可通过process.env.NODE_ENV判断
```javascript
if(process.env.NODE_ENV === 'development'){
    console.log('开发环境')
}else{
    console.log('生产环境')
}
```
#### 平台
条件编译
```javascript
//仅在H5平台下
// #ifdef H5
// #endif

//除了H5平台
// #ifndef H5
// #endif

//H5平台或MP-WEIXIN平台
// #ifdef H5 || MP-WEIXIN
// #endif
```

运行期间判断
```javascript
switch(uni.getSystemInfoSync().platform){
    case 'android':
       console.log('运行Android上')
       break;
    case 'ios':
       console.log('运行iOS上')
       break;
    default:
       console.log('运行在开发者工具上')
       break;
}
```

### 页面样式与布局
- 支持px和rpx  
750*设计稿宽/设计稿基准宽度 = 元素rpx宽度  
- ::after,::befor仅微信小程序和APP支持  
- 不能使用*
- page相当于body
- 提供内置css变量 ----status-bar-height，--window-top，--window-bottom
- 鼓励flex布局
- 背景图片，支持base64图片，支持网络路径图片，小程序，部分APP不支持本地图片，不支持本地图且图片小于40kb会被base64

### template和block标签
block标签可用于条件渲染，不会在页面留下任何元素

### 条件编译
js条件编译
```javascript
// #ifdef H5
window.location.href = ''
// #endif
```

组件条件编译
```html
<!-- #ifdef MP-WEIXIN -->
<div>微信</div>
<!-- #endif -->
```

样式条件编译
```css
/* #ifdef H5 */
body{
background: red;
}
/* #endif */
```

pages.json条件编译
```javascript
// #ifdef APP-PLUS
{
    "path": "pages/api/speech",
    "style": {
        "navigationBarTitleText": "语音识别"
    }
}
```

static目录条件编译  
不同平台应用静态资源可能有差异，可在static目录下新建不同平台专有目录(mp-weixin全小写)  
  
整体目录条件编译
想把各品台页面文件更测地分开，在platforms目录下，创建mp-weixin等子目录，存放不同平台文件
 



