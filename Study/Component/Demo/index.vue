<template>
  <div id="demo" @click.once="playBgm">
    <div class="eye-mask">
      <div>
        <div class="eye"></div>
      </div>
    </div>

    <div class="eye"></div>
  </div>
</template>

<script>
  import _ from 'lodash'
  import * as PIXI from 'pixi.js'
  import {Scroller} from 'scroller'
  import TWEEN from '@tweenjs/tween.js'
  //resource
  import imgResources from './imgResources'

  //PIXI
  const Application = PIXI.Application
  const Loader = PIXI.loader
  const Resources = Loader.resources
  const Sprite = PIXI.Sprite
  const Container = PIXI.Container
  const Graphics = PIXI.Graphics

  //892
  const windowWidth = window.innerWidth
  //766
  const windowHeight = window.innerHeight
  //缩放比例(已750高为参考)
  const scale750 = windowWidth / 750
  //可视区域宽度
  const visibleWindowWidth = windowHeight / scale750
  const maxScrollHeight = windowHeight + 16067
  //始终横屏
  const rotation = Math.PI / 2

  let app, rootContainer, senceContainer, sence1, scroller, isScroll
  isScroll = false

  //获取全部图片地址
  function getAllImgUrls(resources) {
    let result = _.flatten(resources)
    result = _.map(result, function (o) {
      return o.url
    })

    return result
  }

  //加载全部图片
  function loadAllImgs(imgResources) {
    //加载全部图片
    let allImgUrls = getAllImgUrls(imgResources)

    return Loader
      .add(allImgUrls)
  }

  //设置场景1
  function setSence1(imgResources, Resources) {
    //创建场景容器
    let container = new Container()
    //2050是进入第二个场景的检查点，过啦2050开始放大
    //因此需要配置pivot，放大场景2
    container.pivot.set(2050, 300)
    container.position.set(2050, 300)

    //遍历该场景内全部图片元素
    _.map(imgResources, (o) => {
      //创建精灵
      let sprite = new Sprite(Resources[o.url].texture)
      sprite.name = o.name
      sprite.position.set(o.position.x, o.position.y)
      sprite.extraData = o

      container.addChild(sprite)
    })

    let videoMask1 = new Graphics()
    videoMask1.beginFill(6737151)
    videoMask1.drawRect(0, 0, 100, 50)
    videoMask1.endFill()
    videoMask1.position.set(2130, 0)
    videoMask1.extraData = {name: '', position: {x: 2130, y: 0}, speed: {x: 0, y: 0}}
    container.addChild(videoMask1)


    /*let mask = new Graphics()
    mask.beginFill(6737151)
    mask.drawRect(0, 0, 83, 59)
    mask.endFill()
    mask.position.set(845, 321)

    let videoMask1 = new Graphics()
    videoMask1.beginFill(0)
    videoMask1.drawRect(0, 0, 83, 158)
    videoMask1.endFill()
    videoMask1.mask = mask
    videoMask1.position.set(0, 0)

    container.addChild(videoMask1)*/

    return container
  }

  function track(left, top, zoom) {
    left = top

    if (left < 850) {
      if (left > 0) {
        let tween = new TWEEN.Tween(scroller)
        tween.to({__scrollTop: 850}, 800)
          .start()
          .onUpdate((s) => {
            left = s.__scrollTop
          })
      }

      sence1.position.x = 2050 + left
    }

    if (left >= 850 && left < 2130 - visibleWindowWidth + 850) {
      //第一个场景从0开始滚动
      let senceLeft = left - 850

      _.map(sence1.children, (child) => {
        if (child.extraData && child.extraData.speed) {
          if (left > 1250 && child.extraData.name === 'mother') {
            child.position.x = 950
          }
          else {
            child.position.x = child.extraData.position.x + senceLeft * child.extraData.speed.x
          }
        }
      })
    }

    if (left >= 0 && left <= 2050) {
      //sence1.position.x = 2900
    }
    else if (left >= 2500) {
    }

    senceContainer.position.x = -left
  }

  function initScroller() {
    let options = {
      zooming: false,
      animating: true,
      bouncing: false,
      scrollingX: false,
      scrollingY: true,
      animationDuration: 1e3
    }

    let scroller = new Scroller(track, options)
    scroller.setDimensions(windowWidth, windowHeight, windowWidth, maxScrollHeight)

    return scroller
  }

  //创建应用
  app = new Application({width: windowWidth, height: windowHeight})
  rootContainer = new Container()
  rootContainer.width = windowHeight
  rootContainer.height = windowWidth
  rootContainer.rotation = rotation
  //横屏设置x轴位置
  rootContainer.position.set(windowWidth, 0)
  rootContainer.scale.set(scale750, scale750)
  rootContainer.buttonMode = true
  rootContainer.interactive = true
  rootContainer
    .on('touchstart', (event) => {
      isScroll = true

      let e = event.data.originalEvent
      scroller.doTouchStart(e.touches, e.timeStamp)
    })
    .on('touchmove', (event) => {
      if (isScroll) {
        let e = event.data.originalEvent
        scroller.doTouchMove(e.touches, e.timeStamp, e.scale)
      }
    })
    .on('touchend', (event) => {
      let e = event.data.originalEvent
      scroller.doTouchEnd(e.timeStamp)
      isScroll = false
    })

  //添加rootContainer到舞台
  app.stage.addChild(rootContainer)
  //场景容器
  senceContainer = new Container()
  rootContainer.addChild(senceContainer)

  loadAllImgs(imgResources).load(() => {
    sence1 = setSence1(imgResources[0], Resources)
    senceContainer.addChild(sence1)

    scroller = initScroller()
    animate()
  })

  function animate() {
    TWEEN.update()
    requestAnimationFrame(animate)
    app.render(rootContainer)
  }

  export default {
    methods: {
      playBgm() {
        console.log(66)
        this.audioAutoPlay('bgm')
      },
      audioAutoPlay: function (t) {
        var e = document.getElementById(t),
          n = function () {
            document.removeEventListener("WeixinJSBridgeReady", n),
              document.removeEventListener("YixinJSBridgeReady", n),
              e.play()
          };
        e.play(),
        window.WeixinJSBridge && e.play(),
          "undefined" == typeof WeixinJSBridge ?
            document.addEventListener("WeixinJSBridgeReady", n, !1) :
            (document.addEventListener("YixinJSBridgeReady", n, !1), e.play())
      }
    },
    mounted() {
      //document.querySelector('#demo').appendChild(app.view)
    }
  }
</script>

<style lang="scss" scoped>
  #demo {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: red;
    position: relative;

    > .eye-mask {
      width: 100%;
      height: 100%;
      background-color: black;

      .eye {
        width: 100%;
        height: 0;
        background-color: red;
        position: absolute;
        top: 400px;
        left: 0;
        animation: eye 1.5s;
      }
    }
  }

  @keyframes eye {
    0% {
      top: 400px;
      height: 0;
      border-radius: 0;
      opacity: 1;
      transform: scale(1);

    }

    40% {
      top: 250px;
      height: 300px;
      border-radius: 50%;
      opacity: 1;
    }

    60% {
      top: 400px;
      height: 0px;
      border-radius: 0;
      opacity: 1;
      transform: scale(1.4);
    }

    70% {
      top: 250px;
      height: 300px;
      border-radius: 50%;
      opacity: 1;
    }

    90% {
      top: 400px;
      height: 0;
      border-radius: 0;
      opacity: 1;
      transform: scale(1.4);
    }

    100% {
      top: 250px;
      height: 300px;
      border-radius: 50%;
      transform: scale(3);
      opacity: 1;
    }
  }
</style>
