/**
 * 声明语句
 * 假如使用第三方库jQuery,ts中,并不知道$是什么，此时需要用declare var定义其类型
 * declare var并没有真正定义变量，仅仅用于编译时检查，在编译结果中会被移除
 */
declare var $: (selector: string) => any
$('body')

/**
 * 声明文件
 * 通常会把声明语句放到一个单独的文件(jQuery.d.ts)
 * 声明文件必需以.d.ts为后缀
 * ts会解析项目中所有*.ts，*.d.ts，所以其他所有*.ts可以获取jQuery的类型定义
 * 如无法解析，请检查tsconfig.json中的files，include和exclude配置，确保包含了jQuery.d.ts文件
 */

/**
 * 第三方声明文件
 * 推荐使用@types统一管理第三方库声明文件
 * @types 使用方便，直接用npm安装对应的声明模块即可
 *
 * npm install @types/jquery --save-dev
 * https://microsoft.github.io/TypeSearch/
 */

/**
 * 书写声明文件
 * 第三方库没有提供声明文件时，需要自己书写声明文件
 * 库的使用场景：
 * 1.全局变量，通过<script>标签引入
 * 2.npm包，通过import foo from 'foo'引入，符合ES6模块规范
 * 3.UMD库，即可通过<script>引入，又可通过import导入
 * 4.直接扩展全局变量，通过<script>引入，改变全局变量结构
 * 5.在npm包或UMD库中扩展全局变量
 * 6.模块插件，通过<script>或import引入后，改变模块结构
 */

/**
 * 全局变量
 * npm install @types/xxx --save-dev安装无需任何配置
 */
//全局变量一般用const定义，不可修改
declare const jQuery: (selector: string) => any
//声明语句中只能声明类型，不能定义具体实现
//An implementation cannot be declared in ambient contexts
/*declare const query = function (selector){
  return selector
}*/

//declare function声明全局函数
declare function query(selector: string): any
//支持函数重载
declare function query(domReadyCallback: () => any): any

query('body')
query(() => {
})

//declare class声明全局类
//同样，只能用来声明类型，不能定义具体实现
declare class Animal {
  name: string

  constructor(name: string)

  hello(): string

  //An implementation cannot be declared in ambient contexts
  /*hello() {
    return this.name
  }*/
}

//declare enum声明全局枚举
//同样，只能声明类型，不能指定具体值
declare enum Types {
  Up,
  Down
}

//namespace既ES6的module，ts为了兼容，使用namespace代替了module
//不建议使用namespace，推荐使用ES6模块化方案

declare namespace vendor {
  const versoin: number

  class Event {
    blur(eventType: EventType): void
  }

  function ajax(url: string, setting?: AjaxSettings): void

  enum EventType {
    Up,
    Down
  }

  //嵌套命名空间
  namespace fn {
    const name: string
  }

  //可以直接使用interface或type声明全局接口或类型
  interface AjaxSettings {
    method?: 'GET' | 'POST'
    data?: any
  }
}

vendor.versoin
vendor.ajax('/api/get')
vendor.fn.name
let setting: vendor.AjaxSettings = {
  method: 'GET'
}

//声明合并，jQuery即是一个函数，也是一个对象，有子属性，可以组合多个声明语句
declare function query(selector: string): any

declare namespace query {
  function ajax(url: string, setting?: any): void
}

query('body')
query.ajax('/api/get')

/**
 * npm包声明文件一般存在2个地方：
 * 与npm包绑在一起，package.json中有types字段，或一个index.d.ts声明文件，无需额外安装包，最为推荐
 * 发布到@types里，使用npm install @types/xxx --save-dev安装
 *
 * 假如以上2种方式都没有对应声明文件，需要自己创建，通过import语句导入模块，声明文件存放位置有约束
 * 1.创建node_modules/@types/foo/index.d.ts，存放foo模块声明文件
 * 2.创建types目录
 */
