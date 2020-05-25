export default function (id) {
  var elem = document.getElementById(id)
  var removeListener = function () {
    document.removeEventListener("WeixinJSBridgeReady", n)
    document.removeEventListener("YixinJSBridgeReady", n)
    elem.play()
  }

  elem.play()

  if(window.WeixinJSBridge){
    document.addEventListener("WeixinJSBridgeReady", n, !1)
  }
  else{
    document.addEventListener("YixinJSBridgeReady", n, !1)
    elem.play()
  }
}
