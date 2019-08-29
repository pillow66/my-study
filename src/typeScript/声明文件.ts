/**
 * 声明语句
 * 假如使用第三方库jQuery,ts中,并不知道$是什么，此时需要用declare var定义其类型
 * declare var并没有真正定义个变量，仅仅用于编译时检查，在编译结果中会被移除
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
 *
 *
 */
