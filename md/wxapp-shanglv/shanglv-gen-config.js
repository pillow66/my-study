/**
 * 解决因shanglv小程序包含了航班，火车，专车，酒店等模块，开发编译运行较慢的问题
 * 可以指定shanglv小程序要编译的模块
 * *
 * 使用方式：
 * 修改package.json
 * 默认传参高铁项目
 * "gen:wxapp-shanglv": "cross-env APP_NAME=wxapp-shanglv node shanglv-gen-config.js gaotie"
 * *
 * 执行npm run dev:wxapp-shanglv
 * *
 * 高铁因为没有测试环境，执行npm run dev:wxapp-shanglv需要将src/config/env/wxapp-shanglv.js中
 * // ULR相关配置
 * BASE_URL_H5: 'https://h5.133.cn',
 * BASE_URL_COMMON: 'https://jp.rsscc.com',
 * BASE_URL_GAOTIE: 'https://jp.rsscc.com',
 * BASE_URL_PAY: 'https://payment.rsscc.com/pay',
 * BASE_URL_DEFRAY: 'https://payapi.huoli.com'
 * 替换为正式地址，否则省份认证会失败
 */

const fs = require('fs');
const stripJsonComments = require('strip-json-comments');
const rm = require('rimraf');
const path = require('path');
const vfs = require('vinyl-fs');
const readline = require('readline');
const appName = process.env.APP_NAME;

const matchedRouteFileName = 'route.json';
const matchedGtgjRouteFileName = 'route-gtgj.json';
const routeFilePath = 'src/pages.json';
//const regExcludeDirs = [/.*projects\/home-.*/];
//指定编译商旅某个项目
const shanglvProject = process.argv[2] || 'gaotie'

genManifest();
genHomepage()
  .then(() => genPages('src/projects', routeFilePath))
  .then(() => {
    console.log('生成路由 ' + routeFilePath);
    genRoutes();
    genTabBars();
  })
  .catch(e => console.error(e))

// 生成首页 src/projects/home
function genHomepage() {
  // 拷贝各自小程序的home页面至 src/projects/home
  return new Promise((resolve, reject) => {
    rm(path.resolve(__dirname, './src/projects/home/*'), err => {
      if (err) reject();

      vfs.src([`./src/projects/home-${appName}/**/*.*`])
        .pipe(vfs.dest('./src/projects/home'))
        .on('end', function () {
          console.log(`生成首页文件, 来源 src/projects/home-${appName}`);
          resolve();
        });
    })
  })
}

// 生成 src/manifest.json
function genManifest() {
  let data = fs.readFileSync(`src/config/manifest/${appName}.json`).toString();
  fs.writeFileSync('src/manifest.json', data);
  console.log(`读取manifest配置文件 src/config/manifest/${appName}.json`);
}

// 生成 src/routes.js
function genRoutes() {
  let data = fs.readFileSync('src/pages.json').toString();
  data = stripJsonComments(data);
  data = JSON.parse(data);

  const routes = config2routes(data);
  const s = 'export default ' + JSON.stringify(routes, ' ', 2);
  fs.writeFileSync('src/routes.js', s);
  console.log('生成路由', 'src/routes.js');
}

// 生成src/projects/payment/tabBars.js
function genTabBars() {
  let data = fs.readFileSync('src/pages.json').toString();
  data = stripJsonComments(data);
  data = JSON.parse(data);

  const tabBars = data.tabBar && data.tabBar.list ? data.tabBar.list : [];
  const s = 'export default ' + JSON.stringify(tabBars, ' ', 2);
  fs.writeFileSync('src/projects/payment/tabBars.js', s);
  console.log('生成tabBar', 'src/projects/payment/tabBars.js');
}

function config2routes(config) {
  const configs = [
    {
      pages: config.pages
    },
    ...config.subPackages
  ];
  return [].concat(...configs.map(pages2routes));
}

function pages2routes(config) {
  const root = config.root ? config.root + '/' : '';
  const routes = config.pages.map(p => {
    const r = {
      path: '/' + root + p.path
    };
    if (p.name) {
      r.name = p.name;
    }
    if (p.meta) {
      r.meta = p.meta;
    }
    return r;
  });
  return routes;
}

function genPages(srcDir, targetPath) {
  let fileName = matchedRouteFileName
  if (appName.indexOf('-gtgj') > -1) {
    fileName = matchedGtgjRouteFileName
  }

  return Promise.all(getRoutePages(srcDir, fileName))
    .then(routes => {
      const r = merge(routes);
      r.pages = handleHomePage(r.pages)

      fs.writeFileSync(path.resolve(__dirname, targetPath), JSON.stringify(r, ' ', 2));
    })

  function handleHomePage(pages) {
    const homeIndex = pages.findIndex(p => p.path.includes('^'));
    if (homeIndex < 0) return pages;

    const home = {
      ...pages[homeIndex],
      path: pages[homeIndex].path.replace('^', '')
    };
    pages.splice(homeIndex, 1);
    pages.unshift(home);
    return pages;
  }

  function merge(routes) {
    return routes.reduce((obj, item) => {
      Object.keys(item).forEach(k => {
        switch (k) {
          case 'pages':
          case 'subPackages':
            obj[k] = obj[k].concat(item[k]);
            break;
          case 'workers':
            obj[k] = item[k];
            break;
          default:
            obj[k] = {
              ...obj[k],
              ...item[k]
            }
            break;
        }
      })
      return obj;

    }, {pages: [], subPackages: []});
  }
}

function getRoutePages(dir, fileName = matchedRouteFileName) {
  let result = [];

  //商旅指定项目
  fs.readdirSync(dir).forEach(function (file) {
    const curFilePath = dir + '/' + file;
    const stat = fs.statSync(curFilePath);

    if (stat && stat.isDirectory() && (file == 'home' || file == shanglvProject)) {
      result = result.concat(getRoutePages(curFilePath, fileName));
    } else {
      if (curFilePath.includes(fileName)) result.push(pruneRoute(curFilePath));
    }
  })

  return result
}

function pruneRoute(filePath) {
  let res = '';
  const needprune = [];

  return new Promise((resolve, reject) => {
    readline.createInterface({
      input: fs.createReadStream(filePath),
      crlfDelay: Infinity
    })
      .on('line', function (line) {
        line = line.trim();

        const hasIfdef = line.includes('#ifdef');
        const hasIfndef = line.includes('#ifndef');
        if (hasIfdef || hasIfndef) {
          const index = line.indexOf(appName);
          const shouldprune = hasIfdef ? index === -1 : index > -1;
          if (shouldprune || needprune.length) needprune.push(1);
          line = '';
        } else if (line.includes('#endif')) {
          needprune.pop();
          line = '';
        }

        if (!needprune.length && line) res += line;
      })
      .on('error', function (e) {
        reject('解析路由出错', e);
      })
      .on('close', function () {
        res = res.replace(',]', ']').replace(',}', '}')
        resolve(JSON.parse(res));
      });
  })
}
