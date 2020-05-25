!function () {
  //移动设备true, 其他false
  function isMobile() {
    return !(!/iphone|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|mobile/i.test(navigator.userAgent.toLowerCase()) || /pc=1/.test(location.search))
  }

  //微信内true，其他false
  function isWeixin() {
    var e = window.navigator.userAgent.toLowerCase();
    return "micromessenger" == e.match(/MicroMessenger/i)
  }

  //网易新闻true, 其他false ???
  function isNewsApp() {
    var e = window.navigator.userAgent.toLowerCase();
    return "newsapp" == e.match(/newsapp/i)
  }

  //解决微信/易信自动播放背景音乐
  function playAudio(id) {
    var elem = document.getElementById(id)

    function play() {
      document.removeEventListener("WeixinJSBridgeReady", play)
      document.removeEventListener("YixinJSBridgeReady", play)

      elem.play()
    }

    document.addEventListener("WeixinJSBridgeReady", play, !1)
    document.addEventListener("YixinJSBridgeReady", play, !1)
  }

  //解决微信/易信暂停播放背景音乐
  function pauseAudio(id) {
    var elem = document.getElementById(id)

    function pause() {
      document.removeEventListener("WeixinJSBridgeReady", pause)
      document.removeEventListener("YixinJSBridgeReady", pause)

      elem.play()
      elem.pause()
    }

    document.addEventListener("WeixinJSBridgeReady", pause, !1)
    document.addEventListener("YixinJSBridgeReady", pause, !1)
  }

  function setLoadingByScale() {
    windowWidth = window.innerWidth,
      windowHeight = window.innerHeight,

      //竖屏
      windowWidth < windowHeight ? (
          scale750 = windowWidth / 750, visoContentWidth = windowHeight / scale750,
            $("#loading").css({
              "-webkit-transform": "rotate(90deg) scale(" + scale750 + ") translate3d(0,-750px,0)",
              width: windowHeight / scale750,
              height: "750px"
            }),
            $(".loading_logo").css({left: (windowHeight / scale750 - 242) / 2 + "px"}),
            $(".loading_main").css({left: (windowHeight / scale750 - 283) / 2 + "px"})) :

        (scale750 = windowHeight / 750, visoContentWidth = windowWidth / scale750,
          $("#loading").css({
            "-webkit-transform": "rotate(0deg) scale(" + scale750 + ") translate3d(0,0,0)",
            width: windowWidth / scale750,
            height: "750px"
          }),
          $(".loading_logo").css({left: (windowWidth / scale750 - 242) / 2 + "px"}),
          $(".loading_main").css({left: (windowWidth / scale750 - 283) / 2 + "px"}))
  }

  function setLoadingByOrientation() {
    switch (window.orientation) {
      case 0:
        setTimeout(function () {
          setLoadingByScale(),
            Te = Math.PI / 2,
            canvasContainer.rotation = Te,
            canvasContainer.scale.set(scale750, scale750),
            canvas.resize(windowWidth, windowHeight),
            canvasContainer.position.set(windowWidth, 0),
            ScrollLeft = scroller.__scrollLeft,
            /*$("#loading").css({
              "-webkit-transform": "rotate(90deg) scale(" + scale750 + ") translate3d(0,-750px,0)",
              width: windowHeight / scale750,
              height: "750px"
            }),
            $(".loading_logo").css({left: (windowHeight / scale750 - 242) / 2 + "px"}),
            $(".loading_main").css({left: (windowHeight / scale750 - 283) / 2 + "px"}),*/

            setTimeout(function () {
              scroller.setDimensions(windowWidth, windowHeight, windowWidth, 16067 + windowHeight),
                scroller.scrollTo(0, ScrollLeft, !1),
                visoContentWidth = windowHeight / scale750, init()
            }, 200)
        }, 300);
        break;
      case-90:
        setTimeout(function () {
          setLoadingByScale(), Te = 0, canvasContainer.rotation = Te, canvasContainer.scale.set(scale750, scale750), canvas.resize(windowWidth, windowHeight),
            canvasContainer.position.set(0, 0), ScrollTop = scroller.__scrollTop, $("#loading").css({
            "-webkit-transform": "rotate(0deg) scale(" + scale750 + ") translate3d(0,0,0)",
            width: windowWidth / scale750,
            height: "750px"
          }), $(".loading_logo").css({left: (windowWidth / scale750 - 242) / 2 + "px"}), $(".loading_main").css({left: (windowWidth / scale750 - 283) / 2 + "px"}), setTimeout(function () {
            scroller.setDimensions(windowWidth, windowHeight, 16067 + windowWidth, windowHeight), scroller.scrollTo(ScrollTop, 0, !1), visoContentWidth = windowWidth / scale750, init()
          }, 200)
        }, 300);
        break;
      case 90:
        setTimeout(function () {
          setLoadingByScale(),
            Te = 0,
            canvasContainer.rotation = Te,
            canvasContainer.scale.set(scale750, scale750),
            canvas.resize(windowWidth, windowHeight),
            canvasContainer.position.set(0, 0),
            ScrollTop = scroller.__scrollTop

          $("#loading").css({
            "-webkit-transform": "rotate(0deg) scale(" + scale750 + ") translate3d(0,0,0)",
            width: windowWidth / scale750,
            height: "750px"
          })
          $(".loading_logo").css({left: (windowWidth / scale750 - 242) / 2 + "px"})
          $(".loading_main").css({left: (windowWidth / scale750 - 283) / 2 + "px"})
          setTimeout(function () {
            scroller.setDimensions(windowWidth, windowHeight, 16067 + windowWidth, windowHeight)
            scroller.scrollTo(ScrollTop, 0, !1)
            visoContentWidth = windowWidth / scale750
            init()
          }, 200)
        }, 300);
        break;
      case 180:
    }

    visoContentWidth = windowWidth < windowHeight ? windowHeight / scale750 : windowWidth / scale750
  }

  function setProgressPercent(e, i) {
    var n = parseInt(e.progress);
    $("#percent").html(n + "%")
  }

  //设置全部场景图片
  function setAllSence() {
    $("#percent").html("100%"),
      setTimeout(function () {
        $("#loading").fadeOut(300)
      }, 300),

      setLoadingByScale(),

      allSencesContainer = new Container,
      s1 = new Container,
      s1.pivot.set(2050, 300),
      s1.position.set(2050, 300),
      s2 = new Container,
      s2.pivot.set(550, 150),
      s2.position.set(2762, 150),
      s2.scale.set(.8, .8),
      s3 = new Container,
      s3.pivot.set(550, 150),
      s3.position.set(2762, 150),
      s3.alpha = 0,
      s4 = new Container,
      s4.position.set(5200, 0),
      z = new Sprite(Loader.resources[imageUrl + "3/tree.png"].texture),
      z.position.set(8670, 0),
      G = new Container, G.position.set(7500, 0),
      Q = new Container, Q.position.set(8800, 0),
      q = new Container, q.position.set(11250, 0),
      //每个场景中具体的元素信息
      ne = [scene1, scene2, _e, fe, Ie, Se, Pe],
      //几个场景内容
      te = [s1, s2, s3, s4, G, Q, q];

    for (var e = 0; e < te.length; e++) {
      for (var i = 0; i < ne[e].length; i++) {
        var n = new Sprite(Loader.resources[ne[e][i].url].texture);

        if (3 == e && 11 == i) {
          n = new Container;
          var t = new Sprite(Loader.resources[imageUrl + "3/car3.png"].texture),
            o = new Sprite(Loader.resources[imageUrl + "3/car3_wheel.png"].texture),
            d = new Sprite(Loader.resources[imageUrl + "3/car3_wheel.png"].texture);
          o.pivot.set(22.5, 22.5), d.pivot.set(22.5, 22.5), o.position.set(191.5, 100.5), d.position.set(383.5, 100.5), n.addChild(t, o, d)
        }
        if (3 == e && 12 == i) {
          n = new Container;
          var t = new Sprite(Loader.resources[imageUrl + "3/car4.png"].texture),
            o = new Sprite(Loader.resources[imageUrl + "3/car4_wheel.png"].texture),
            d = new Sprite(Loader.resources[imageUrl + "3/car4_wheel.png"].texture);
          o.pivot.set(22.5, 22.5), d.pivot.set(22.5, 22.5), o.position.set(215.5, 95.5), d.position.set(425.5, 95.5), n.addChild(t, o, d)
        }
        if (3 == e && 13 == i) {
          n = new Container;
          var t = new Sprite(Loader.resources[imageUrl + "3/car2.png"].texture),
            o = new Sprite(Loader.resources[imageUrl + "3/car2_wheel.png"].texture),
            d = new Sprite(Loader.resources[imageUrl + "3/car2_wheel.png"].texture);
          o.pivot.set(40.5, 40.5), d.pivot.set(40.5, 40.5), o.position.set(432.5, 122.5), d.position.set(107.5, 122.5), n.addChild(t, o, d)
        }
        if (3 == e && 14 == i) {
          n = new Container;
          var t = new Sprite(Loader.resources[imageUrl + "3/car1.png"].texture),
            p = new Sprite(Loader.resources[imageUrl + "3/car1_light.png"].texture);
          p.position.set(482, 64);
          var o = new Sprite(Loader.resources[imageUrl + "3/car1_wheel.png"].texture),
            d = new Sprite(Loader.resources[imageUrl + "3/car1_wheel2.png"].texture);
          o.pivot.set(41, 41), d.pivot.set(43, 43), o.position.set(422, 120), d.position.set(123, 118), n.addChild(t, o, d, p)
        }

        if (n.position.set(ne[e][i].position.x, ne[e][i].position.y),
            n.name = ne[e][i].name,
            n.data = ne[e][i],
          (1 == e && 1 == i || 1 == e && 12 == i || 1 == e && 27 == i || 1 == e && 29 == i || 1 == e && 31 == i || 1 == e && 33 == i) &&
          (n.alpha = 0),
          1 == e && 9 == i && n.pivot.set(8, 58),
          1 == e && 10 == i && n.pivot.set(88, 58),
          1 == e && 22 == i && n.pivot.set(295, 10),
          (1 == e && 30 == i || 1 == e && 31 == i) &&
          (n.pivot.set(44, 6), n.rotation = -.5),
          4 == e && 2 == i && n.pivot.set(85, 7),
          4 == e && 3 == i && n.pivot.set(21.5, 21.5),
          4 == e && 4 == i &&
          (n.pivot.set(41, 57), n.position.set(589, 410)), 4 == e && 5 == i && (n.pivot.set(41, 57), n.position.set(589, 410), n.visible = !1), 4 == e && 6 == i &&
          (n.pivot.set(205, 285), n.position.set(589, 410), n.visible = !1, n.scale.set(.2, .2)),
            te[e].addChild(n),
          4 == e && 6 == i) {
          ae = new Container;
          for (var h = 0; h < ke.length; h++) {
            var c = new Sprite(Loader.resources[ke[h].url].texture);
            c.pivot.set(ke[h].pivot.x, ke[h].pivot.y), c.position.set(ke[h].position.x + ke[h].pivot.x, ke[h].position.y + ke[h].pivot.y), c.data = ke[h], c.scale.set(3), c.rotation = ke[h].rotate, ae.addChild(c)
          }
          te[e].addChild(ae)
        }

        //第一个场景scene1，canvas绘图
        if (0 == i && 0 == e) {
          var u = new Graphics;
          u.beginFill(6737151),
            u.drawRect(300, 0, 83, 59),
            u.endFill(),
            u.data = {
              position: {x: 545, y: 321},
              speed: {x: .05, y: 0}
            },
            s1.addChild(u);

          var v = new Graphics;
          v.beginFill(0),
            v.drawRect(0, 0, 83, 158),
            v.endFill(),
            v.data = {
              position: {x: 846, y: 162},
              speed: {x: .05, y: .1}
            },
            v.mask = u,
            v.position.set(v.data.position.x, v.data.position.y);

          var y = new Graphics;
          y.beginFill(0),
            y.drawRect(0, 0, 83, 158),
            y.endFill(),
            y.data = {
              position: {x: 846, y: 380},
              speed: {x: .05, y: -.1}
            },
            y.mask = u,
            y.position.set(y.data.position.x, y.data.position.y),
            s1.addChild(v, y)
        }

        if (3 == e && i == fe.length - 1 && (Y = new Graphics, Y.beginFill(6737151), Y.drawRect(0, 0, 3690, 750), Y.endFill(), Y.data = {
            position: {
              x: 0,
              y: 0
            }, speed: {x: -.1, y: 0}
          }, s4.mask = Y, s4.addChild(Y)), 5 == e && 10 == i && (n.alpha = 0), 5 == e && 5 == i && (n.pivot.set(632, 16), n.visible = !1), (5 == e && 6 == i || 5 == e && 7 == i) && n.pivot.set(2400, 450), 5 == e && 19 == i && n.pivot.set(1e3, 450), 5 == e && 15 == i) {
          ie = new Container;
          var b = new Sprite(Loader.resources[imageUrl + "4/body.png"].texture);
          b.pivot.set(56, 100), b.position.set(107, 228);
          var f = new Sprite(Loader.resources[imageUrl + "4/hand1.png"].texture);
          f.pivot.set(52, 154), f.position.set(94, 157);
          var S = new Sprite(Loader.resources[imageUrl + "4/hand2.png"].texture);
          S.pivot.set(29, 163), S.position.set(93, 169);
          var P = new Sprite(Loader.resources[imageUrl + "4/leg1.png"].texture);
          P.pivot.set(63, 11), P.position.set(107, 289);
          var j = new Sprite(Loader.resources[imageUrl + "4/leg2.png"].texture);
          j.pivot.set(15, 13), j.position.set(114, 295);
          var K = new Sprite(Loader.resources[imageUrl + "4/head.png"].texture);
          K.pivot.set(113, 130), K.position.set(113, 192), ie.addChild(f, j, K, b, S, P), ie.data = {
            position: {
              x: 477,
              y: 0
            }, speed: 0
          }, ie.position.set(477, 0), Q.addChild(ie)
        }
        6 == e && 0 == i && (de = new PIXI.extras.AnimatedSprite.fromImages(pe), q.addChild(de))
      }
    }

    var oe = new Graphics;
    oe.beginFill(4158644), oe.drawRect(0, 0, 2e4, 2e4), oe.endFill(), H = new Container, N = new Sprite(Loader.resources[imageUrl + "start/bg.jpg"].texture), windowWidth < windowHeight ? N.width = windowHeight / scale750 : N.width = windowWidth / scale750, N.height = 750, F = new PIXI.extras.AnimatedSprite.fromImages([imageUrl + "start/eye_open.png", imageUrl + "start/eye_close.png"]), Ce = setInterval(function () {
      F.gotoAndStop(1), setTimeout(function () {
        F.gotoAndStop(0)
      }, 150)
    }, 1700), F.pivot.set(224, 311), F.position.set(224 + (visoContentWidth - 558) / 2, 361);
    var se = new Container;
    se.position.set(0, 55);
    var re = new Sprite(Loader.resources[imageUrl + "start/line.png"].texture),
      le = new Sprite(Loader.resources[imageUrl + "start/line.png"].texture);
    le.position.set(1747, 0), se.addChild(re, le), new TWEEN.Tween(se.position).to({x: -1747}, 9e4).repeat(1 / 0).start();
    var ge = new Container;
    ge.position.set(0, 14);
    var he = new Sprite(Loader.resources[imageUrl + "start/dot.png"].texture),
      ce = new Sprite(Loader.resources[imageUrl + "start/dot.png"].texture);
    ce.position.set(1635, 0), ge.addChild(he, ce), new TWEEN.Tween(ge.position).to({x: -1635}, 3e4).repeat(1 / 0).start(), L = new Graphics, L.beginFill(6737151), L.drawRect(0, 0, N.width, 750), L.endFill(), H.mask = L, H.addChild(N, se, ge, F, L), ye = new Container;
    var ue = new Sprite(Loader.resources[imageUrl + "start/hand.png"].texture);
    ue.position.set((visoContentWidth - 61) / 2 + 100, 483), me = new TWEEN.Tween(ue.position).to({x: (visoContentWidth - 61) / 2 - 100}, 1e3).delay(300).repeat(1 / 0).easing(TWEEN.Easing.Quadratic.Out).start();
    var xe = new Sprite(Loader.resources[imageUrl + "start/text.png"].texture);
    xe.position.set((visoContentWidth - 133) / 2, 610);
    var ve = new Graphics;
    ve.beginFill(0), ve.drawRect(0, 0, 2e3, 750), ve.endFill(), ve.alpha = .35, ye.addChild(ve, ue, xe), H.addChild(ye), Z = new Container;
    var Ee = new Sprite(Loader.resources[imageUrl + "start/bg.jpg"].texture);
    Z.position.set(13900, 0);
    var $e = new Container;
    $e.position.set(0, 55);
    var re = new Sprite(Loader.resources[imageUrl + "start/line.png"].texture),
      le = new Sprite(Loader.resources[imageUrl + "start/line.png"].texture);
    le.position.set(1747, 0), $e.addChild(re, le);
    var Me = new Container;
    Me.position.set(0, 14);
    var he = new Sprite(Loader.resources[imageUrl + "start/dot.png"].texture),
      ce = new Sprite(Loader.resources[imageUrl + "start/dot.png"].texture);
    ce.position.set(1635, 0), Me.addChild(he, ce), Ae = 100, $e.visible = !1, Me.visible = !1, V = setInterval(function () {
      $e.position.x -= Ae, Me.position.x -= Ae / 3, $e.position.x < -1747 && ($e.position.x += 1747), Me.position.x < -1635 && (Me.position.x += 1635)
    }, 60), ee = new Container;
    var ve = new Sprite(Loader.resources[imageUrl + "end/cover_bg1.png"].texture),
      Xe = new Sprite(Loader.resources[imageUrl + "end/watch_again1.png"].texture);
    Xe.position.set(78, 551), Xe.interactive = !0, Xe.buttonMode = !0, Xe.on("touchend", function () {
      location.reload()
    }), window.openNewsapp.init({
      projectId: "4JHDPZUJ-2",
      channels: ["news_sps_feidian", "sps_article", "sps"],
      param: "S1385797470941"
    });
    var We = new Sprite(Loader.resources[imageUrl + "end/netease1.png"].texture);
    We.position.set(78, 458), We.interactive = !0, We.buttonMode = !0, We.on("touchend", function (e) {
      window.openNewsapp.open({param: "reader/T1497354552181"})
    });
    var Re = new Sprite(Loader.resources[imageUrl + "end/share.png"].texture);
    Re.position.set(22, 444), Re.interactive = !0, Re.buttonMode = !0,
      Re.on("touchend", function (e) {
        h5Share.share()
      }), newsApp ? (Xe.visible = !1, We.visible = !1, Re.visible = !0) :
      (Xe.visible = !0, We.visible = !0, Re.visible = !1),
      ee.addChild(ve, Xe, We, Re),
      ee.position.set(visoContentWidth, 0),
      Z.addChild(Ee, $e, Me, ee)

    canvasContainer.addChild(allSencesContainer)
    Te = Math.PI / 2
    canvasContainer.rotation = Te
    canvasContainer.position.set(windowWidth, 0)
    allSencesContainer.addChild(oe, q, Q, G, s4, z, s2, s3, s1, H, Z)
    canvasContainer.scale.set(scale750, scale750)
    canvasContainer.interactive = !0
    canvasContainer.buttonMode = !0
    canvasContainer
      .on("touchstart", touchStart)
      .on("touchmove", touchMove)
      .on("touchend", touchEnd)
    setLoadingByOrientation()
    x()
    scroller.setDimensions(windowWidth, windowHeight, windowWidth, 16067 + windowHeight)
    canvas.render(canvasContainer)
    m()
  }

  function touchStart(e) {
    ye.visible = !1;
    var i = e.data.originalEvent;
    Le = !0, scroller.doTouchStart(i.touches, i.timeStamp)
  }

  function touchMove(e) {
    if (Le) {
      var i = e.data.originalEvent;
      scroller.doTouchMove(i.touches, i.timeStamp, i.scale)
    }
  }

  function touchEnd(e) {
    var i = e.data.originalEvent;
    scroller.doTouchEnd(i.timeStamp), Le = !1
  }

  function h() {
    Be = setInterval(function () {
      var e = 6 * Math.random();
      if (!(e > 5)) {
        var i = parseInt(150 + 100 * Math.random()), n = .2 * Math.random(),
          t = new TWEEN.Tween({rotation: -.5}).to({rotation: -n}, i).onUpdate(function () {
            s2.children[30].rotation = this.rotation, s2.children[31].rotation = this.rotation
          }).easing(TWEEN.Easing.Quadratic.Out).start(),
          o = new TWEEN.Tween({rotation: -n}).to({rotation: -.5}, 200).onUpdate(function () {
            s2.children[30].rotation = this.rotation, s2.children[31].rotation = this.rotation
          }).easing(TWEEN.Easing.Quadratic.Out);
        t.chain(o)
      }
    }, 450)
  }

  function c() {
    clearInterval(Be), Be = null
  }

  function u() {
    oe = new PIXI.extras.AnimatedSprite.fromImages(Ee),
      se = 1,
      windowWidth < windowHeight ?
        windowHeight / scale750 > 1206 && (se = windowHeight / scale750 / 1206) :
        windowWidth / scale750 > 1206 && (se = windowWidth / scale750 / 1206),
      oe.pivot.set(205, 285),
      oe.position.set(205 + 205 * (se - 1), 285),
      oe.scale.set(se),
      oe.visible = !1,
      G.addChildAt(oe, 7),

      re = new PIXI.extras.AnimatedSprite.fromImages(le)
    q.addChildAt(re, 2)
    re.position.set(601, 369)
    re.pivot.set(100, 265), re.scale.set(.6), ge = new PIXI.extras.AnimatedSprite.fromImages([imageUrl + "5/1-0.png", imageUrl + "5/1-1.png", imageUrl + "5/1-2.png", imageUrl + "5/1-3.png", imageUrl + "5/1-4.png", imageUrl + "5/1-5.png", imageUrl + "5/1-6.png"]), ge.position.set(1478, 125), he = new PIXI.extras.AnimatedSprite.fromImages([imageUrl + "5/2-0.png", imageUrl + "5/2-1.png", imageUrl + "5/2-2.png", imageUrl + "5/2-3.png", imageUrl + "5/2-4.png", imageUrl + "5/2-5.png", imageUrl + "5/2-6.png"]), he.position.set(1737, 116), ce = new PIXI.extras.AnimatedSprite.fromImages([imageUrl + "5/3-0.png", imageUrl + "5/3-1.png", imageUrl + "5/3-2.png", imageUrl + "5/3-3.png", imageUrl + "5/3-4.png", imageUrl + "5/3-5.png", imageUrl + "5/3-6.png"]), ce.position.set(1901, 102), ue = new PIXI.extras.AnimatedSprite.fromImages([imageUrl + "5/4-0.png", imageUrl + "5/4-1.png", imageUrl + "5/4-2.png", imageUrl + "5/4-3.png", imageUrl + "5/4-4.png", imageUrl + "5/4-5.png", imageUrl + "5/4-6.png"]), ue.position.set(2141, 229), ve = new PIXI.extras.AnimatedSprite.fromImages([imageUrl + "5/6-0.png", imageUrl + "5/6-1.png", imageUrl + "5/6-2.png", imageUrl + "5/6-3.png", imageUrl + "5/6-4.png", imageUrl + "5/6-5.png", imageUrl + "5/6-6.png"]), ve.position.set(2141, 207), xe = new PIXI.extras.AnimatedSprite.fromImages([imageUrl + "5/5-0.png", imageUrl + "5/5-1.png", imageUrl + "5/5-2.png", imageUrl + "5/5-3.png", imageUrl + "5/5-4.png", imageUrl + "5/5-5.png", imageUrl + "5/5-6.png"]), xe.position.set(2420, 105), q.addChildAt(ge, 3), q.addChildAt(he, 4), q.addChildAt(ce, 5), q.addChildAt(ue, 6), q.addChildAt(xe, 7), q.addChildAt(ve, 8);
    for (var e = [], i = 0; i < 17; i++) e.push(imageUrl + "end/" + i + ".png");
    K = new PIXI.extras.AnimatedSprite.fromImages(e), K.pivot.set(224, 330), K.position.set(224 + (visoContentWidth - 558) / 2, 357), Z.addChildAt(K, 3)
  }

  function x() {
    canvasContainer.removeChild(j), j = new Container, j.position.set(0, 628);
    for (var e = 0; e < 7; e++) {
      var i = new Sprite(Loader.resources[imageUrl + "text/" + e + ".png"].texture);
      i.visible = !1, i.position.x = (visoContentWidth - i.width) / 2, j.addChild(i)
    }
    canvasContainer.addChild(j)
  }

  function init() {
    x()
    ee.position.set(visoContentWidth, 0)
    H.removeChild(N)
    N = new Sprite(Loader.resources[imageUrl + "start/bg.jpg"].texture)
    N.width = visoContentWidth
    N.height = 750
    H.addChildAt(N, 0)
    H.removeChild(L)
    L = new Graphics
    L.beginFill(6737151)
    L.drawRect(0, 0, visoContentWidth, 750)
    L.endFill()
    H.mask = L
    H.addChildAt(L, 4)
    F.position.x = 224 + (visoContentWidth - 558) / 2
    K && (K.position.x = 224 + (visoContentWidth - 558) / 2)
    ye.children[1].position.x = (visoContentWidth - 61) / 2 + 100
    me.stop()
    me = new TWEEN.Tween(ye.children[1].position)
      .to({x: (visoContentWidth - 61) / 2 - 100}, 1e3)
      .delay(300)
      .repeat(1 / 0).easing(TWEEN.Easing.Quadratic.Out).start()
    ye.children[2].position.x = (visoContentWidth - 133) / 2
  }

  function y() {
    Je = setInterval(function () {
      K.gotoAndStop(16), setTimeout(function () {
        K.gotoAndStop(15)
      }, 150)
    }, 1700)
  }

  function m() {
    TWEEN.update(), requestAnimationFrame(m), canvas.render(canvasContainer)
  }

  //判断是否在移动设备中
  var mobile = isMobile();
  //非移动设备，退出
  if (!mobile) {
    var height = window.innerHeight

    $(".china_tolerance_content").height(height)
    $(".china_tolerance_content").html("")
    $(".china_tolerance_content").css({
      "background-color": "#eee",
      "background-image": "url(http://cms-bucket.nosdn.127.net/918219c1426d4d25a8bed87ac991fe6e20170914123039.jpeg)",
      "background-repeat": "no-repeat",
      "background-position": "center 100px"
    })

    return
  }

  //判断是否是IE
  var weixin = isWeixin(), newsApp = isNewsApp();
  //不是IE则初始化分享
  weixin || h5Share.init({
    title: "\u6002\u6002\u5fcd\u6002\u6002\u6002\u6002\u5fcd\u6002\u6002\uff0c\u8fd8\u5fcd\u5417",
    desc: "\u6d3b\u5230\u73b0\u5728\u4f60\u90fd\u9003\u4e0d\u5f00\u7684\u56db\u5b57\u9b54\u5492",
    url: window.location.href,
    img: "http://cms-bucket.nosdn.127.net/15447b3150fc427789fa41225d843b2b20170914111552.jpeg"
  });


  var scale750,
    //窗体高度
    windowHeight = window.innerHeight,
    //窗体宽度
    windowWidth = window.innerWidth,
    ScrollTop = 0,
    ScrollLeft = 0,
    //canvas相关
    //图层
    Container = PIXI.Container,
    //PIXI.autoDetectRenderer:44
    //PIXI.loader:161
    Loader = (PIXI.autoDetectRenderer, PIXI.loader),
    Sprite = (PIXI.loader.resources, PIXI.utils.TextureCache, PIXI.Texture, PIXI.Text, new PIXI.ticker.Ticker, PIXI.Sprite),
    //PIXI.Graphics:52
    Graphics = (PIXI.Rectangle, PIXI.Graphics),
    //图片地址
    imageUrl = "http://static.ws.126.net/f2e/news/china_tolerance/images/";

  //mask阻止手势滑动事件
  $(".mask").bind("touchmove", function (e) {
    e.preventDefault()
  });
  $(".mask").bind("touchstart", function (e) {
    e.preventDefault()
  });

  //页面中嵌入audio
  //播放背景音乐
  playAudio("bgm")
  //暂停其他背景音乐
  pauseAudio("guitar")
  pauseAudio("game")
  pauseAudio("close")
  pauseAudio("paper")
  pauseAudio("photo")
  pauseAudio("laugh")
  pauseAudio("mix")
  pauseAudio("car")
  pauseAudio("mouth")
  pauseAudio("hit")
  pauseAudio("ball")
  pauseAudio("chair")
  pauseAudio("type")
  pauseAudio("clock")
  pauseAudio("snow")
  pauseAudio("swish1")
  pauseAudio("swish2")
  pauseAudio("swish3")
  pauseAudio("swish4")
  pauseAudio("swish5")

  //设置canvas画布大小
  var canvasContainer = new Container
  canvasContainer.width = windowWidth
  canvasContainer.height = windowHeight

  //PIXI.CanvasRenderer编号76
  var canvas = new PIXI.CanvasRenderer(windowWidth, windowHeight)

  //将创建的canvas插入html
  $(".china_tolerance_content")[0].appendChild(canvas.view)
  //加载全部图片素材
  Loader.add(imageUrl + "start/bg.jpg")
    .add(imageUrl + "start/eye_open.png")
    .add(imageUrl + "start/eye_close.png")
    .add(imageUrl + "start/line.png")
    .add(imageUrl + "start/dot.png")
    .add(imageUrl + "start/hand.png")
    .add(imageUrl + "start/text.png")
    .add(imageUrl + "1/tree.png")
    .add(imageUrl + "1/cover.png")
    .add(imageUrl + "1/bg.png")
    .add(imageUrl + "1/child.png")
    .add(imageUrl + "1/mother.png")
    .add(imageUrl + "1/curtain.png")
    .add(imageUrl + "2/bg.jpg")
    .add(imageUrl + "2/balloon.png")
    .add(imageUrl + "2/balloon1.png")
    .add(imageUrl + "2/bed.png")
    .add(imageUrl + "2/bed_boy.png")
    .add(imageUrl + "2/mother_body.png")
    .add(imageUrl + "2/mother_left.png")
    .add(imageUrl + "2/mother_right.png")
    .add(imageUrl + "2/desk.png")
    .add(imageUrl + "2/light.png")
    .add(imageUrl + "2/lamp.png")
    .add(imageUrl + "2/book.png")
    .add(imageUrl + "2/book1.png")
    .add(imageUrl + "2/book2.png")
    .add(imageUrl + "2/book3.png")
    .add(imageUrl + "2/book4.png")
    .add(imageUrl + "2/boy.png")
    .add(imageUrl + "2/photo.png")
    .add(imageUrl + "2/photo1.png")
    .add(imageUrl + "2/boy1.png")
    .add(imageUrl + "2/thing.png")
    .add(imageUrl + "2/thing1.png")
    .add(imageUrl + "2/guitar_boy.png")
    .add(imageUrl + "2/guitar.png")
    .add(imageUrl + "2/guitar_hand.png")
    .add(imageUrl + "2/guitar_hand1.png").add(imageUrl + "2/boy2.png").add(imageUrl + "2_1/bg.jpg").add(imageUrl + "2_1/balloon.png").add(imageUrl + "2_1/balloon1.png").add(imageUrl + "2_1/bed.png").add(imageUrl + "2_1/bed_boy.png").add(imageUrl + "2_1/desk.png").add(imageUrl + "2_1/photo.png").add(imageUrl + "2_1/photo1.png").add(imageUrl + "2_1/boy1.png").add(imageUrl + "2_1/thing.png").add(imageUrl + "2_1/thing1.png").add(imageUrl + "2_1/guitar_boy.png").add(imageUrl + "2_1/guitar.png").add(imageUrl + "2_1/guitar_hand.png").add(imageUrl + "2_1/guitar_hand1.png").add(imageUrl + "2_1/boy2.png").add(imageUrl + "3/bg.jpg").add(imageUrl + "3/moon.png").add(imageUrl + "3/cloud.png").add(imageUrl + "3/back_bg.png").add(imageUrl + "3/front_bg.png").add(imageUrl + "3/man1.png").add(imageUrl + "3/man2.png").add(imageUrl + "3/umbrella1.png").add(imageUrl + "3/tree_big.png").add(imageUrl + "3/tree_small.png").add(imageUrl + "3/car3.png").add(imageUrl + "3/car3_wheel.png").add(imageUrl + "3/car4.png").add(imageUrl + "3/car4_wheel.png").add(imageUrl + "3/car2.png").add(imageUrl + "3/car2_wheel.png").add(imageUrl + "3/car1.png").add(imageUrl + "3/car1_light.png").add(imageUrl + "3/car1_wheel.png").add(imageUrl + "3/car1_wheel2.png").add(imageUrl + "3/stick.png").add(imageUrl + "3/third.png").add(imageUrl + "3/tree.png").add(imageUrl + "3/couple.png").add(imageUrl + "3_1/bg.jpg").add(imageUrl + "3_1/child.png").add(imageUrl + "3_1/leg.png").add(imageUrl + "3_1/ball.png").add(imageUrl + "3_1/boy.png").add(imageUrl + "3_1/boy1.png").add(imageUrl + "3_1/boy2.png").add(imageUrl + "3-4/0.png").add(imageUrl + "3_things/body.png").add(imageUrl + "3_things/car.png").add(imageUrl + "3_things/head.png").add(imageUrl + "3_things/leg.png").add(imageUrl + "3_things/plane.png").add(imageUrl + "3_things/wheel.png").add(imageUrl + "3_things/wings.png").add(imageUrl + "4/building.png").add(imageUrl + "4/cloud.png").add(imageUrl + "4/desk.png").add(imageUrl + "4/desk1.png").add(imageUrl + "4/light.png").add(imageUrl + "4/light2.png").add(imageUrl + "4/people1.png").add(imageUrl + "4/people2.png").add(imageUrl + "4/people3.png").add(imageUrl + "4/people4.png").add(imageUrl + "4/people5.png").add(imageUrl + "4/seat.png").add(imageUrl + "4/star.png").add(imageUrl + "4/file.png").add(imageUrl + "4/file1.png").add(imageUrl + "4/wall.png").add(imageUrl + "4/wall_night.png").add(imageUrl + "4/man.png").add(imageUrl + "4/body.png").add(imageUrl + "4/head.png").add(imageUrl + "4/hand1.png").add(imageUrl + "4/hand2.png").add(imageUrl + "4/leg1.png").add(imageUrl + "4/leg2.png").add(imageUrl + "4/big_head.png").add(imageUrl + "5/man1.png").add(imageUrl + "5/thing1.png").add(imageUrl + "5/thing2.png").add(imageUrl + "5/thing3.png").add(imageUrl + "5/thing4.png").add(imageUrl + "5/thing5.png").add(imageUrl + "5/snow1.png").add(imageUrl + "5/snow2.png").add(imageUrl + "5/snow3.png").add(imageUrl + "text/0.png").add(imageUrl + "text/1.png").add(imageUrl + "text/2.png").add(imageUrl + "text/3.png").add(imageUrl + "text/4.png").add(imageUrl + "text/5.png").add(imageUrl + "text/6.png").add(imageUrl + "end/cover_bg1.png").add(imageUrl + "end/watch_again1.png").add(imageUrl + "end/share.png").add(imageUrl + "end/netease1.png")
    .on("progress", setProgressPercent).load(setAllSence);

  //场景，图片，定位
  for (var allSencesContainer, j, F, L, N, visoContentWidth, s1, s2, s3, s4, Y, z, G, H, Q, q, Z, K, V, ee, ie, ne, te, oe, ae, se, de, pe, re, le, ge, he, ce, ue, xe, ve, ye, me,
         //场景1
         scene1 = [
           {
             name: "bg",
             url: imageUrl + "1/bg.png",
             position: {x: 535, y: 0},
             speed: {x: .05, y: 0}
           },
           {
             name: "curtain",
             url: imageUrl + "1/curtain.png",
             position: {x: 985, y: 40},
             speed: {x: .05, y: 0}
           },
           {
             name: "mother",
             url: imageUrl + "1/mother.png",
             position: {x: 1050, y: 245},
             speed: {x: -.25, y: 0}
           },
           {
             name: "child",
             url: imageUrl + "1/child.png",
             position: {x: 808, y: 392},
             speed: {x: .05, y: 0}
           },
           {
             name: "cover",
             url: imageUrl + "1/cover.png",
             position: {x: -244, y: 0},
             speed: 0
           },
           {
             name: "tree",
             url: imageUrl + "1/tree.png",
             position: {x: 0, y: 285},
             speed: {x: .5, y: 0}
           }
         ],
         //场景2
         scene2 = [
           {
             name: "bg",
             url: imageUrl + "2/bg.jpg",
             position: {x: 0, y: 0},
             speed: {x: -.1, y: 0}
           },
           {
             name: "bg",
             url: imageUrl + "2_1/bg.jpg",
             position: {x: 0, y: 0},
             speed: {x: -.1, y: 0}
           },
           {
             name: "balloon",
             url: imageUrl + "2/balloon.png",
             position: {x: 1141, y: 52},
             speed: {x: -.08, y: 0}
           },
           {
             name: "balloon1",
             url: imageUrl + "2/balloon1.png",
             position: {x: 1182, y: 42},
             speed: {x: -.02, y: 0}
           },
           {
             name: "bed_boy",
             url: imageUrl + "2/bed_boy.png",
             position: {x: 2216, y: 97},
             speed: {x: -.08, y: 0}
           },
           {
             name: "bed_boy",
             url: imageUrl + "2_1/bed_boy.png",
             position: {x: 2216, y: 97},
             speed: {x: -.08, y: 0}
           },
           {
             name: "bed",
             url: imageUrl + "2/bed.png",
             position: {x: 1905, y: 197},
             speed: {x: -.08, y: 0}
           },
           {
             name: "bed",
             url: imageUrl + "2_1/bed.png",
             position: {x: 1905, y: 197},
             speed: {x: -.08, y: 0}
           },
           {
             name: "mother_body",
             url: imageUrl + "2/mother_body.png",
             position: {x: 338, y: 166},
             speed: {x: 0, y: 0}
           },
           {
             name: "mother_left",
             url: imageUrl + "2/mother_left.png",
             position: {x: 349, y: 480},
             speed: {x: 0, y: 0}
           },
           {
             name: "mother_right",
             url: imageUrl + "2/mother_right.png",
             position: {x: 511, y: 481},
             speed: {x: 0, y: 0}
           },
           {
             name: "desk",
             url: imageUrl + "2/desk.png",
             position: {x: 40, y: 592},
             speed: 0
           },
           {
             name: "desk",
             url: imageUrl + "2_1/desk.png",
             position: {x: 40, y: 592},
             speed: 0
           },
           {
             name: "book",
             url: imageUrl + "2/book.png",
             position: {x: 715, y: 571},
             speed: {x: 0, y: 0}
           },
           {
             name: "book1",
             url: imageUrl + "2/book1.png",
             position: {x: 385, y: 566},
             speed: {x: 0, y: 0}
           },
           {name: "book2", url: imageUrl + "2/book2.png", position: {x: 389, y: 533}, speed: {x: 0, y: 0}}, {
             name: "book3",
             url: imageUrl + "2/book3.png",
             position: {x: 721, y: 539},
             speed: {x: 0, y: 0}
           },
           {name: "book4", url: imageUrl + "2/book4.png", position: {x: 723, y: 494}, speed: {x: 0, y: 0}}, {
             name: "boy",
             url: imageUrl + "2/boy.png",
             position: {x: 520, y: 303},
             speed: {x: 0, y: 0}
           },
           {name: "photo", url: imageUrl + "2/photo.png", position: {x: 1008, y: 525}, speed: {x: 0, y: 0}}, {
             name: "photo1",
             url: imageUrl + "2/photo1.png",
             position: {x: 1170, y: 483},
             speed: {x: 0, y: 0}
           }, {name: "lamp", url: imageUrl + "2/lamp.png", position: {x: 837, y: 416}, speed: {x: 0, y: 0}}, {
             name: "light",
             url: imageUrl + "2/light.png",
             position: {x: 875, y: 410},
             speed: {x: 0, y: 0}
           }, {name: "thing", url: imageUrl + "2/thing.png", position: {x: 1525, y: 601}, speed: {x: 0, y: 0}}, {
             name: "boy1",
             url: imageUrl + "2/boy1.png",
             position: {x: 1702, y: 310},
             speed: {x: 0, y: 0}
           }, {name: "thing1", url: imageUrl + "2/thing1.png", position: {x: 1959, y: 572}, speed: {x: 0, y: 0}}, {
             name: "guitar_boy",
             url: imageUrl + "2/guitar_boy.png",
             position: {x: 2121, y: 247},
             speed: {x: 0, y: 0}
           }, {
             name: "guitar_boy",
             url: imageUrl + "2_1/guitar_boy.png",
             position: {x: 2121, y: 247},
             speed: {x: 0, y: 0}
           }, {name: "guitar", url: imageUrl + "2/guitar.png", position: {x: 2292, y: 389}, speed: {x: 0, y: 0}}, {
             name: "guitar",
             url: imageUrl + "2_1/guitar.png",
             position: {x: 2292, y: 389},
             speed: {x: 0, y: 0}
           }, {
             name: "guitar_hand",
             url: imageUrl + "2/guitar_hand.png",
             position: {x: 2426, y: 417},
             speed: {x: 0, y: 0}
           }, {
             name: "guitar_hand",
             url: imageUrl + "2_1/guitar_hand.png",
             position: {x: 2426, y: 417},
             speed: {x: 0, y: 0}
           }, {
             name: "guitar_hand1",
             url: imageUrl + "2/guitar_hand1.png",
             position: {x: 2564, y: 445},
             speed: {x: 0, y: 0}
           }, {
             name: "guitar_hand1",
             url: imageUrl + "2_1/guitar_hand1.png",
             position: {x: 2564, y: 445},
             speed: {x: 0, y: 0}
           }, {
             name: "boy2",
             url: imageUrl + "2/boy2.png",
             position: {x: 2554, y: 213},
             speed: {x: -.05, y: 0}
           }],
         _e = [{
           name: "balloon",
           url: imageUrl + "2_1/balloon.png",
           position: {x: 1141, y: 52},
           speed: {x: -.08, y: 0}
         }, {
           name: "balloon1",
           url: imageUrl + "2_1/balloon1.png",
           position: {x: 1182, y: 42},
           speed: {x: -.02, y: 0}
         }, {name: "photo", url: imageUrl + "2_1/photo.png", position: {x: 1008, y: 525}, speed: 0}, {
           name: "photo1",
           url: imageUrl + "2_1/photo1.png",
           position: {x: 1170, y: 483},
           speed: 0
         }, {name: "thing", url: imageUrl + "2/thing.png", position: {x: 1525, y: 601}, speed: 0}, {
           name: "boy1",
           url: imageUrl + "2_1/boy1.png",
           position: {x: 1702, y: 310},
           speed: 0
         }, {name: "thing1", url: imageUrl + "2_1/thing1.png", position: {x: 1959, y: 572}, speed: 0}, {
           name: "boy2",
           url: imageUrl + "2_1/boy2.png",
           position: {x: 2554, y: 213},
           speed: {x: -.05, y: 0}
         }],
         //场景3
         fe = [
           //背景
           {
             name: "bg",
             url: imageUrl + "3/bg.jpg",
             position: {x: 0, y: 0},
             speed: {x: 0, y: 0}
           },
           //
           {
             name: "moon",
             url: imageUrl + "3/moon.png",
             position: {x: 30, y: 23},
             speed: {x: -.03, y: 0}
           },
           {
             name: "cloud",
             url: imageUrl + "3/cloud.png",
             position: {x: 169, y: 49},
             speed: {x: -.06, y: 0}
           },
           {
             name: "back_bg",
             url: imageUrl + "3/back_bg.png",
             position: {x: 75, y: 0},
             speed: {x: -.18, y: 0}
           },
           {name: "front_bg", url: imageUrl + "3/front_bg.png", position: {x: -400, y: 40}, speed: {x: -.5, y: 0}}, {
             name: "man1",
             url: imageUrl + "3/man1.png",
             position: {x: 304, y: 539},
             speed: {x: -.32, y: 0}
           },
           {
             name: "man2",
             url: imageUrl + "3/man2.png",
             position: {x: 2371, y: 482},
             speed: {x: -.32, y: 0}
           },
           {
             name: "tree_big",
             url: imageUrl + "3/tree_big.png",
             position: {x: 842, y: 0},
             speed: {x: -.38, y: 0}
           }, {
             name: "tree_small",
             url: imageUrl + "3/tree_small.png",
             position: {x: 119, y: 70},
             speed: {x: -.38, y: 0}
           }, {
             name: "umbrella1",
             url: imageUrl + "3/umbrella1.png",
             position: {x: 131, y: 375},
             speed: {x: -.36, y: 0}
           }, {
             name: "umbrella2",
             url: imageUrl + "3/umbrella1.png",
             position: {x: 2226, y: 375},
             speed: {x: -.36, y: 0}
           }, {name: "car3", url: imageUrl + "3/car3.png", position: {x: 736, y: 550}, speed: {x: -.8, y: 0}}, {
             name: "car4",
             url: imageUrl + "3/car4.png",
             position: {x: 2159, y: 547},
             speed: {x: -1, y: 0}
           }, {name: "car2", url: imageUrl + "3/car2.png", position: {x: 1246, y: 550}, speed: {x: .3, y: 0}}, {
             name: "car1",
             url: imageUrl + "3/car1.png",
             position: {x: 117, y: 560},
             speed: {x: 1, y: 0}
           },
           {
             name: "third",
             url: imageUrl + "3/third.png",
             position: {x: 1579, y: 345},
             speed: {x: 0, y: 0}
           },
           {
             name: "couple",
             url: imageUrl + "3/couple.png",
             position: {x: 1500, y: 268},
             speed: {x: 0, y: 0}
           }],

//
         Ie = [{name: "bg", url: imageUrl + "3_1/bg.jpg", position: {x: 0, y: 0}, speed: 0}, {
           name: "child",
           url: imageUrl + "3_1/child.png",
           position: {x: 135, y: 502},
           speed: 0
         }, {name: "leg", url: imageUrl + "3_1/leg.png", position: {x: 175, y: 634}, speed: 0}, {
           name: "ball",
           url: imageUrl + "3_1/ball.png",
           position: {x: 261.5, y: 708.5},
           speed: 0
         }, {name: "boy2", url: imageUrl + "3_1/boy2.png", position: {x: 543, y: 353}, speed: 0}, {
           name: "boy1",
           url: imageUrl + "3_1/boy1.png",
           position: {x: 543, y: 353},
           speed: 0
         }, {name: "boy", url: imageUrl + "3_1/boy.png", position: {x: 543, y: 353}, speed: 0}], ke = [{
      name: "body",
      url: imageUrl + "3_things/body.png",
      position: {x: 102, y: 114},
      pivot: {x: 531, y: 359},
      rotationSpeed: .4,
      rotate: 0
    }, {
      name: "head",
      url: imageUrl + "3_things/head.png",
      position: {x: 72, y: 16},
      pivot: {x: 501, y: 261},
      rotationSpeed: .2,
      rotate: 0
    }, {
      name: "leg",
      url: imageUrl + "3_things/leg.png",
      position: {x: 239, y: 242},
      pivot: {x: 364, y: 133},
      rotationSpeed: .3,
      rotate: 0
    }, {
      name: "car",
      url: imageUrl + "3_things/car.png",
      position: {x: 116, y: 404},
      pivot: {x: 487, y: 29},
      rotationSpeed: .4,
      rotate: 0
    }, {
      name: "wheel",
      url: imageUrl + "3_things/wheel.png",
      position: {x: 222, y: 559},
      pivot: {x: 381, y: -184},
      rotationSpeed: .5,
      rotate: 0
    }, {
      name: "plane",
      url: imageUrl + "3_things/plane.png",
      position: {x: 765, y: 16},
      pivot: {x: -162, y: 359},
      rotationSpeed: .6,
      rotate: 50 / (2 * Math.PI)
    }, {
      name: "wings",
      url: imageUrl + "3_things/wings.png",
      position: {x: 906, y: 147},
      pivot: {x: -303, y: 228},
      rotationSpeed: .7,
      rotate: 0
    }],
         Se = [{name: "bg", url: imageUrl + "start/bg.jpg", position: {x: 0, y: 0}, speed: 0}, {
           name: "star",
           url: imageUrl + "4/star.png",
           position: {x: 94, y: 165},
           speed: {x: -.05, y: 0}
         }, {name: "cloud", url: imageUrl + "4/cloud.png", position: {x: 0, y: 27}, speed: {x: -.08, y: 0}}, {
           name: "building",
           url: imageUrl + "4/building.png",
           position: {x: 50, y: 229},
           speed: {x: -.13, y: 0}
         }, {name: "file", url: imageUrl + "4/file.png", position: {x: 2029, y: 147}, speed: 0}, {
           name: "file1",
           url: imageUrl + "4/file1.png",
           position: {x: 2661, y: 163},
           speed: 0
         }, {name: "wall", url: imageUrl + "4/wall.png", position: {x: 2400, y: 450}, speed: 0}, {
           name: "wall_night",
           url: imageUrl + "4/wall_night.png",
           position: {x: 2400, y: 450},
           speed: 0
         }, {name: "people5", url: imageUrl + "4/people5.png", position: {x: 184, y: 318}, speed: 0}, {
           name: "desk",
           url: imageUrl + "4/desk.png",
           position: {x: 0, y: 334},
           speed: 0
         }, {name: "desk1", url: imageUrl + "4/desk1.png", position: {x: 0, y: 334}, speed: 0}, {
           name: "light",
           url: imageUrl + "4/light.png",
           position: {x: 0, y: 0},
           speed: 0
         }, {name: "light2", url: imageUrl + "4/light2.png", position: {x: 0, y: 0}, speed: 0}, {
           name: "people4",
           url: imageUrl + "4/people4.png",
           position: {x: 0, y: 402},
           speed: 0
         }, {name: "people3", url: imageUrl + "4/people3.png", position: {x: 746, y: 345}, speed: 0}, {
           name: "man",
           url: imageUrl + "4/man.png",
           position: {x: 462, y: 363},
           speed: 0
         }, {name: "seat", url: imageUrl + "4/seat.png", position: {x: 28, y: 453}, speed: 0}, {
           name: "people2",
           url: imageUrl + "4/people2.png",
           position: {x: 993, y: 252},
           speed: 0
         }, {name: "people1", url: imageUrl + "4/people1.png", position: {x: 243, y: 266}, speed: 0}, {
           name: "big_head",
           url: imageUrl + "4/big_head.png",
           position: {x: 2430, y: 450},
           speed: {x: -.08, y: 0}
         }], Pe = [{name: "bg", url: imageUrl + "start/bg.jpg", position: {x: -1300, y: 0}, speed: 0}, {
      name: "thing1",
      url: imageUrl + "5/thing1.png",
      position: {x: 1516, y: 329},
      speed: 0
    }, {name: "thing2", url: imageUrl + "5/thing2.png", position: {x: 1731, y: 350}, speed: 0}, {
      name: "thing3",
      url: imageUrl + "5/thing3.png",
      position: {x: 1965, y: 400},
      speed: 0
    }, {
      name: "thing5",
      url: imageUrl + "5/thing5.png",
      position: {x: 2494, y: 367},
      speed: 0
    }],
         Ce = null,
         Te = 0,
         Ae = 0,
         Ee = [],
         $e = 0;
       $e < 20;
       $e++) {
    //20张帧动画
    //http://static.ws.126.net/f2e/news/china_tolerance/images/3-4/0.png
    Ee.push(imageUrl + "3-4/" + $e + ".png")
  }

  pe = [imageUrl + "5/snow1.png", imageUrl + "5/snow2.png", imageUrl + "5/snow3.png"],
    le = [imageUrl + "5/man1.png", imageUrl + "5/man2.png", imageUrl + "5/man3.png", imageUrl + "5/man4.png", imageUrl + "5/man5.png", imageUrl + "5/man6.png"],
    setLoadingByScale(),
    window.onorientationchange = setLoadingByOrientation;

  var Me = isPlayedPaper = isPlayedGuitar1 = isPlayedGame = isPlayedCar = isPlayedPhoto = isPlayedMouth = isPlayedClose = isPlayedLaugh = !1,
    //全部音频，播放时间
    Videos = [
      {
        video: $("#close")[0],
        start: 1120,
        end: 1500,
        isPlayed: !1
      },
      {
        video: $("#paper")[0],
        start: 2100,
        end: 2400,
        isPlayed: !1
      },
      {
        video: $("#photo")[0],
        start: 2700,
        end: 3400,
        isPlayed: !1
      },
      {
        video: $("#mix")[0],
        start: 3100,
        end: 4700,
        isPlayed: !1
      }, {video: $("#car")[0], start: 5e3, end: 7800, isPlayed: !1}, {
        video: $("#mouth")[0],
        start: 6730,
        end: 7e3,
        isPlayed: !1
      }, {video: $("#ball")[0], start: 8300, end: 8600, isPlayed: !1}, {
        video: $("#hit")[0],
        start: 8500,
        end: 9300,
        isPlayed: !1
      }, {video: $("#chair")[0], start: 9600, end: 10200, isPlayed: !1}, {
        video: $("#type")[0],
        start: 9650,
        end: 11150,
        isPlayed: !1
      }, {video: $("#snow")[0], start: 11600, end: 13900, isPlayed: !1}, {
        video: $("#swish1")[0],
        start: 12310,
        end: 12535,
        isPlayed: !1
      }, {video: $("#swish2")[0], start: 12535, end: 12740, isPlayed: !1}, {
        video: $("#swish3")[0],
        start: 12740,
        end: 12985,
        isPlayed: !1
      }, {video: $("#swish4")[0], start: 12985, end: 13210, isPlayed: !1}, {
        video: $("#swish5")[0],
        start: 13210,
        end: 13350,
        isPlayed: !1
      }, {video: $("#clock")[0], start: 14500, end: 15700, isPlayed: !1}],
    We = !1,
    Re = !1,
    je = !1,

    //
    scrollTrack = function (e, i, n) {
      var t, left;

      //时间轴开场
      if (Te > 0 ? (left = i, t = e) : (left = e, t = i), left < 850) {
        left > 50 && left < 400 ? We || (We = !0, $(".mask").show(), Te > 0 ? new TWEEN.Tween(scroller).to({__scrollTop: 850}, 800).onUpdate(function () {
          left = scroller.__scrollTop
        }).onComplete(function () {
          $(".mask").hide(), We = !1
        }).start() : new TWEEN.Tween(scroller).to({__scrollLeft: 850}, 800).onUpdate(function () {
          left = scroller.__scrollLeft
        }).onComplete(function () {
          $(".mask").hide(), We = !1
        }).start()) : left < 800 && left >= 400 && (We || (We = !0, $(".mask").show(), Te > 0 ? new TWEEN.Tween(scroller).to({__scrollTop: 0}, 800).onUpdate(function () {
          left = scroller.__scrollTop
        }).onComplete(function () {
          $(".mask").hide(), We = !1
        }).start() : new TWEEN.Tween(scroller).to({__scrollLeft: 0}, 800).onUpdate(function () {
          left = scroller.__scrollLeft
        }).onComplete(function () {
          $(".mask").hide(), We = !1
        }).start()));

        var a = left;

        left > 50 ? Ce && (clearInterval(Ce), Ce = null, F.gotoAndStop(0)) : Ce || (Ce = setInterval(function () {
          F.gotoAndStop(1), setTimeout(function () {
            F.gotoAndStop(0)
          }, 150)
        }, 1700))

        H.position.x = a
        s1.position.x = 2050 + a;

        var s = a * a / 3e3;
        if (F.scale.set(1 + s), left > 150 ? (H.children[0].visible = !1, H.children[1].visible = !1, H.children[2].visible = !1) : (H.children[0].visible = !0, H.children[1].visible = !0, H.children[2].visible = !0), left > 550) {
          var a = left - 550;
          H.alpha = 1 - a / 300
        } else {
          H.alpha = 1
        }
      }

      //场景1
      if (left < 2130 - visoContentWidth + 850 && left >= 850) {
        Re || (Re = !0, u()), H.alpha = 0;

        //a相对滚动距离
        for (var a = left - 850, d = 0; d < s1.children.length; d++) {
          var p = s1.children[d];

          p.data.speed &&
          (p.position.x = p.data.position.x + p.data.speed.x * a, p.position.y = p.data.position.y + p.data.speed.y * a),
          left > 1250 &&
          5 == d &&
          (p.position.x = 950)
        }
      }

      //场景1过渡场景2
      if (left > 2050 && left < 2500) {
        isPlayedGame1 = !1;
        var a = left - 2050, r = 1 + a / 100, l = 1 - (a - 180) / 80;
        s1.alpha = l, s1.scale.set(r, r), s1.position.x = 2900 + 2 * a;
        var g = Math.min(1, .8 + a / 500);
        s2.position.x = 2762 - .05 * a, s3.position.x = 2762 - .05 * a, s2.scale.set(g, g), s3.scale.set(g, g)
      } else {
        left <= 2050 && left > 850 ?
          (s1.scale.set(1, 1),
            s1.alpha = 1,
            s1.position.x = 2900,
            s2.position.x = 2762 - .05 * (left - 2050),
            s3.position.x = 2762 - .05 * (left - 2050),
            s2.scale.set(.8, .8),
            s3.scale.set(.8, .8)) :
          left >= 2500 &&
          (s1.scale.set(10, 10),
              s1.alpha = 0,
              s2.scale.set(1, 1),
              s3.scale.set(1, 1)
          );
      }

      if (left > 2100 && left < 5450) {
        for (var a = left - 2100, d = 0; d < s2.children.length; d++) {
          var p = s2.children[d];
          p.data.speed && (p.position.x = p.data.position.x + p.data.speed.x * a, p.position.y = p.data.position.y + p.data.speed.y * a)
        }
        for (var d = 0; d < s3.children.length; d++) {
          var p = s3.children[d];
          p.data.speed && (p.position.x = p.data.position.x + p.data.speed.x * a, p.position.y = p.data.position.y + p.data.speed.y * a)
        }

        //手臂转动
        if (left < 2368) {
          var a = left - 2100;
          s2.children[9].rotation = -a / 250, s2.children[10].rotation = a / 250
        }
        if (left < 3e3 && left > 2300) {
          var a = left - 2300;
          s2.children[22].rotation = -a / 400
        }
        if (left < 2400) for (var a = left - 2100, x = 12 + parseInt(a / 50), d = 13; d < 18; d++) d <= x ? s2.children[d].visible = !0 : s2.children[d].visible = !1; else {
          s2.children[13].visible = !0, s2.children[14].visible = !0, s2.children[15].visible = !0, s2.children[16].visible = !0, s2.children[17].visible = !0;
          var a = left - 2400, v = 30 * Math.sin(a / 120), m = 20 * Math.sin(a / 150);
          if (s2.children[2].position.y = s2.children[2].data.position.y + v, s2.children[3].position.y = s2.children[3].data.position.y - m, left > 3100 && left < 4700 ? Me || (Me = !0, h()) : (left > 4700 && left < 5e3 || left < 3100) && Me && (Me = !1, c()), left > 3690) {
            var l = (left - 3690) / 300;
            s2.children[1].alpha = l, s2.children[5].alpha = l, s2.children[7].alpha = l, s2.children[12].alpha = l, s2.children[27].alpha = l, s2.children[29].alpha = l, s2.children[31].alpha = l, s2.children[33].alpha = l,
              s3.alpha = l
          } else s2.children[1].alpha = 0, s2.children[5].alpha = 0, s2.children[7].alpha = 0, s2.children[12].alpha = 0, s2.children[27].alpha = 0, s2.children[29].alpha = 0, s2.children[31].alpha = 0, s2.children[33].alpha = 0,
            s3.alpha = 0
        }
      } else {
        s2.children[13].visible = !1,
          s2.children[14].visible = !1,
          s2.children[15].visible = !1,
          s2.children[16].visible = !1,
          s2.children[17].visible = !1,
          s2.children[9].rotation = 0,
          s2.children[10].rotation = 0;
      }

      if (left > 3800 && left < 1e4) {
        var a = left - 5200;
        s4.position.x = 5200 + a / 2;
        for (var d = 0; d < s4.children.length; d++) {
          var p = s4.children[d];
          p.data.speed && (p.position.x = p.data.position.x + p.data.speed.x * a, p.position.y = p.data.position.y + p.data.speed.y * a), 11 == d && (p.children[1].rotation = -a / 12 / 2, p.children[2].rotation = -a / 12 / 2), 12 == d && (p.children[1].rotation = -a / 10 / 2,
            p.children[2].rotation = -a / 10 / 2), 13 == d && (p.children[1].rotation = a / 15 / 2, p.children[2].rotation = a / 15 / 2), 14 == d && (p.children[1].rotation = a / 5 / 2, p.children[2].rotation = a / 5 / 2)
        }
        if (left > 4500) {
          var a = left - 4500;
          if (s4.children[16].position.x = 1300 - a / 2, left > 5700) {
            for (var a = left - 5700, d = 0; d < 11; d++) {
              var p = s4.children[d];
              p.data.speed && (p.position.x = p.data.position.x + 500 * p.data.speed.x + a / 2, p.position.y = p.data.position.y + 500 * p.data.speed.y)
            }
            s4.children[13].position.x = s4.children[13].data.position.x + 500 * s4.children[13].data.speed.x + a * (s4.children[13].data.speed.x + .5), s4.children[14].position.x = s4.children[14].data.position.x + 500 * s4.children[14].data.speed.x + a * (s4.children[14].data.speed.x + .5), s4.children[16].position.x = 700 + a / 2, s4.children[15].position.x = 1600 - a / 2
          }
          if (left > 6730) {
            for (var a = left - 6730, d = 0; d < 11; d++) {
              var p = s4.children[d];
              p.data.speed && (p.position.x = p.data.position.x + 500 * p.data.speed.x + 515 + p.data.speed.x * a, p.position.y = p.data.position.y + 500 * p.data.speed.y)
            }
            s4.children[16].position.x = 1215 - a / 2, s4.children[15].position.x = 1085 - a / 2
          }
        }
      }
      if (left > 6600 && left < 1e4) {
        s4.visible = !0;
        var b = 6600, a = left - b;
        if (z.position.x = 7870 + (b - 5200) / 2 - .1 * (b - 5200) - .5 * a, Y.position.x = .1 * (b - 5200) - a - 1e3 - 100, G.position.x = a + b, left >= b + 1580 && left <= b + 1740) {
          var a = left - (b + 1580);
          G.children[2].rotation = -a / 100, G.children[3].rotation = 0, G.children[3].position.set(261.5, 708.5)
        } else if (left < b + 1580) G.children[2].rotation = 0, G.children[3].rotation = 0, G.children[3].position.set(261.5, 708.5); else if (left > b + 1740 && left < b + 2020) {
          var a = left - (b + 1740);
          G.children[2].rotation = -1.6, G.children[3].rotation = -a / 30, G.children[3].position.set(261.5 + a, 708.5 - a), G.children[4].visible = !0, G.children[5].visible = !1
        } else if (left >= b + 2020 && left < b + 2080) {
          var a = left - (b + 2020);
          G.children[2].rotation = -1.6, G.children[3].rotation = -280 / 30 - a / 50, G.children[3].position.set(541.5 - a, 428.5 + 2 * a);
          var r = a / 80;
          G.children[5].scale.set((1 + r) * se), G.children[6].scale.set((1 + r) / 5 * se), G.children[4].visible = !1, G.children[5].visible = !0, G.children[6].visible = !1
        } else if (left > b + 2080 && left <= b + 2355) {
          var a = left - (b + 2020), r = a / 80;
          G.children[5].scale.set((1 + r) * se), G.children[6].scale.set((1 + r) / 5 * se), G.children[5].visible = !1, G.children[6].visible = !0, oe.visible = !1, G.children[3].rotation = -280 / 30 - a / 50, G.children[3].position.set(541.5 - a, 428.5 + 2 * a)
        } else if (left > b + 2355) {
          G.children[5].scale.set(12 * se), G.children[6].scale.set(2.4 * se);
          var w = Math.min((left - (b + 2355)) / 25, 19);
          if (w > 9) for (var d = 0; d < G.children.length - 1; d++) G.children[d].visible = !1; else for (var d = 0; d < G.children.length - 1; d++) G.children[d].visible = !0;
          G.children[5].visible = !1, G.children[6].visible = !1, oe.visible = !0, oe.gotoAndStop(w);
          for (var a = left - (b + 2355), _ = Math.max(3 - a / 100, 0), d = 0; d < ae.children.length; d++) {
            var p = ae.children[d];
            p.rotation = p.data.rotate + a / 10 * p.data.rotationSpeed, p.scale.set(_)
          }
        }
      }
      if (left > 8800 && left < 11850) {
        s4.visible = !1;
        for (var a = left - 8e3 + 800, d = 0; d < Q.children.length; d++) {
          var p = Q.children[d];
          p.data.speed && (p.position.x = p.data.position.x + p.data.speed.x * a, p.position.y = p.data.position.y + p.data.speed.y * a)
        }
        if (left > 9400 && left <= 9560) {
          ie.visible = !0, Q.children[15].visible = !1;
          var a = Math.min(left - 8600 - 800, 160);
          ie.position.y = 2 * a, ie.children[0].rotation = -a / 100, ie.children[4].rotation = -a / 80, ie.children[1].rotation = a / 160, ie.children[5].rotation = a / 400, ie.children[2].rotation = a / 400, ie.children[3].rotation = a / 800
        } else if (left > 9560 && left < 9800) Q.children[15].visible = !0, ie.visible = !1; else if (left < 9400) {
          ie.visible = !0, Q.children[15].visible = !1;
          var a = left - 8600 - 800;
          ie.position.y = 10 * a, Q.children[13].alpha = 1, Q.children[7].alpha = 0, Q.children[8].alpha = 1, Q.children[19].alpha = 1, Q.children[14].alpha = 1, Q.children[12].alpha = 0, Q.children[10].alpha = 0, Q.children[18].alpha = 1
        }
        if (left < 9560) {
          var a = left - 8e3 - 800;
          Q.position.x = 8800 + a
        } else if (left < 11150) {
          Q.position.x = 9560;
          var a = left - 8760 - 800;
          Q.children[13].alpha = 1 - a / 100, Q.children[7].alpha = Math.max((a - 250) / 100, 0), Q.children[12].alpha = Math.max((a - 250) / 100, 0), Q.children[8].alpha = 1 - Math.max((a - 50) / 100, 0), Q.children[19].alpha = 1 - Math.max((a - 100) / 150, 0), Q.children[14].alpha = 1 - Math.max((a - 150) / 100, 0), Q.children[10].alpha = Math.max((a - 150) / 100, 0), Q.children[18].alpha = 1 - Math.max((a - 200) / 100, 0), Q.children[4].visible = !0, Q.children[2].visible = !0, Q.children[5].visible = !1, Q.children[5].alpha = 1, Q.children[6].scale.set(1), Q.children[7].scale.set(1), Q.children[20].scale.set(1)
        } else if (left < 11250) {
          var a = left - 10350 - 800;
          Q.children[4].visible = !1, Q.children[5].visible = !0, Q.children[5].alpha = Math.max(1 - a / 200, 0)
        } else if (left >= 11250) {
          var a = left - 10450 - 800;
          Q.children[2].visible = !1, Q.children[5].alpha = Math.max(.5 - a / 200, 0), Q.children[6].scale.set(1 + a / 600), Q.children[7].scale.set(1 + a / 600), Q.children[20].scale.set(1 + a / 600)
        }
      }
      if (left >= 11250) {
        var a = left - 10450 - 800;
        if (q.position.x = 11250 + a, Q.position.x = 9560 + a, de.gotoAndStop(a / 100), re.scale.set(Math.min(1, .6 + a / 400)), left >= 11300) {
          var a = left - 10500 - 800;
          ge.position.x = 1478 - a, ge.gotoAndStop(a / 20), he.position.x = 1737 - a, he.gotoAndStop(a / 20), ce.position.x = 1901 - a, ce.gotoAndStop(a / 20), ue.position.x = 2141 - a, ue.gotoAndStop(a / 20), ve.position.x = 2141 - a, ve.gotoAndStop(a / 20), xe.position.x = 2420 - a, xe.gotoAndStop(a / 20);
          for (var d = 9; d <= 12; d++) q.children[d].position.x = q.children[d].data.position.x - a;
          if (left < 12310) {
            ve.visible = !1;
            for (var d = 9; d <= 12; d++) q.children[d].visible = !1;
            re.gotoAndStop(0)
          } else left < 12535 ? (q.children[9].visible = !0, q.children[10].visible = !1, q.children[11].visible = !1, ue.visible = !0, ve.visible = !1, q.children[12].visible = !1, re.gotoAndStop(1)) : left < 12740 ? (q.children[9].visible = !0, q.children[10].visible = !0, q.children[11].visible = !1, ue.visible = !0, ve.visible = !1, q.children[12].visible = !1, re.gotoAndStop(2)) : left < 12985 ? (q.children[9].visible = !0, q.children[10].visible = !0, q.children[11].visible = !0, ue.visible = !0, ve.visible = !1, q.children[12].visible = !1, re.gotoAndStop(3)) : left < 13210 ? (q.children[9].visible = !0, q.children[10].visible = !0, q.children[11].visible = !0, ue.visible = !1, ve.visible = !0, q.children[12].visible = !1, re.gotoAndStop(4)) : left < 14800 && (q.children[9].visible = !0, q.children[10].visible = !0, q.children[11].visible = !0, ue.visible = !1, ve.visible = !0, q.children[12].visible = !0, re.gotoAndStop(5))
        }
      } else if (left >= 10100) {
        var a = left - 10450 - 800;
        Q.children[0].visible = !1, re.scale.set(.6)
      } else Q.children[0].visible = !0;
      if (left > 11800) {
        var a = left - 13100 - 800;
        Z.position.x = 13900 + a;
        var s = a < 600 ? (600 - a) * (600 - a) / 3e3 : 0;
        if (K.scale.set(1 + s), K.alpha = a / 300, left > 14300 ? (Z.children[0].visible = !0, Z.children[1].visible = !0, Z.children[2].visible = !0) : (Z.children[0].visible = !1, Z.children[1].visible = !1, Z.children[2].visible = !1), left > 14500 && left <= 15750) {
          var a = left - 13700 - 800;
          K.gotoAndStop(Math.min(a / 80, 15)), Ae = 100 * Math.max(1 - a / 1280, .05)
        } else left <= 14500 && (Ae = 100);
        if (left > 15750) {
          var f = left - 14950 - 800;
          ee.position.x = Math.max(visoContentWidth - f, visoContentWidth - 317), K.position.x = 224 + (visoContentWidth - 558) / 2 - f / 2, je || (je = !0, y())
        } else Je && (clearInterval(Je), Je = null), je = !1, K.position.x = 224 + (visoContentWidth - 558) / 2, ee.position.x = visoContentWidth
      } else left > 10800 && (K.scale.set(100), K.alpha = 0);

      left < 950 ? j.children[0].visible = !1 :
        left >= 950 && left < 2800 ?
          j.children[0].visible = !0 : left >= 2800 &&
          left < 3100 ? (j.children[0].visible = !1, j.children[1].visible = !1) :
          left >= 3100 && left < 4300 ? j.children[1].visible = !0 :
            left >= 4300 && left < 4800 ? (j.children[1].visible = !1, j.children[2].visible = !1) :
              left >= 4800 && left < 7600 ? j.children[2].visible = !0 :
                left >= 7600 && left < 8050 ? (j.children[2].visible = !1, j.children[3].visible = !1) :
                  left >= 8050 && left < 9350 ? j.children[3].visible = !0 :
                    left >= 9350 && left < 9600 ? (j.children[3].visible = !1, j.children[4].visible = !1) :
                      left >= 9600 && left < 11150 ? j.children[4].visible = !0 :
                        left >= 11150 && left < 11400 ? (j.children[4].visible = !1, j.children[5].visible = !1) :
                          left >= 11400 && left < 13900 ? j.children[5].visible = !0 :
                            left >= 13900 && left < 14500 ? (j.children[5].visible = !1, j.children[6].visible = !1) :
                              left >= 14500 && left < 15750 ? j.children[6].visible = !0 :
                                left >= 15750 && (j.children[6].visible = !1);

      //音频播放控制
      for (var I = 0; I < Videos.length; I++) {
        left >= Videos[I].start && left < Videos[I].end ?
          Videos[I].isPlayed || (Videos[I].isPlayed = !0, Videos[I].video.play()) :
          (Videos[I].isPlayed = !1, Videos[I].video.pause())
      }

      //全局容器滚动
      allSencesContainer.position.x = -left
      allSencesContainer.position.y = -t
    },
    Le = !1,
    scroller = new Scroller(scrollTrack, {zooming: !1, animating: !0, bouncing: !1, animationDuration: 1e3});
  scroller.__enableScrollY = !0;
  var Be = null, Je = null
}();

/**
 * http://news.163.com/special/fdh5_tolerance/
 * M='http://static.ws.126.net/f2e/news/china_tolerance/images/'
 *
 *0% {
    background-position: 0 0;
}
 2.86% {
    background-position: -230px 0;
}
 5.71% {
    background-position: -460px 0;
}
 8.57% {
    background-position: -690px 0;
}
 11.43% {
    background-position: -920px 0;
}
 14.29% {
    background-position: -1150px 0;
}
 17.14% {
    background-position: -1380px 0;
}
 20% {
    background-position: -1610px 0;
}
 22.86% {
    background-position: 0 -400px;
}
 25.71% {
    background-position: -230px -400px;
}
 28.57% {
    background-position: -460px -400px;
}
 31.43% {
    background-position: -690px -400px;
}
 34.29% {
    background-position: -920px -400px;
}
 37.14% {
    background-position: -1150px -400px;
}
 40% {
    background-position: -1380px -400px;
}
 42.86% {
    background-position: -1610px -400px;
}
 45.71% {
    background-position: 0 -800px;
}
 48.57% {
    background-position: -230px -800px;
}
 51.43% {
    background-position: -460px -800px;
}
 54.29% {
    background-position: -690px -800px;
}
 57.14% {
    background-position: -920px -800px;
}
 60% {
    background-position: -1150px -800px;
}
 62.86% {
    background-position: -1380px -800px;
}
 65.71% {
    background-position: -1610px -800px;
}
 68.57% {
    background-position: 0 -1200px;
}
 71.43% {
    background-position: -230px -1200px;
}
 74.29% {
    background-position: -460px -1200px;
}
 77.14% {
    background-position: -690px -1200px;
}
 80% {
    background-position: -920px -1200px;
}
 82.86% {
    background-position: -1150px -1200px;
}
 85.71% {
    background-position: -1380px -1200px;
}
 88.57% {
    background-position: -1610px -1200px;
}
 91.43% {
    background-position: 0 -1600px;
}
 94.29% {
    background-position: -230px -1600px;
}
 97.14% {
    background-position: -460px -1600px;
}
 100% {
    background-position: -690px -1600px;
}
 */
