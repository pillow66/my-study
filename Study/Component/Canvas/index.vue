<template>
  <div id="canvas">
  </div>
</template>

<script>
  import * as PIXI from 'pixi'
  //import _ from 'lodash'

  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight
  const scale = windowWidth / 750
  //const scaleHeight = windowHeight / scale

  const scenes = [
    //场景1
    [
      {
        url: '1/bg.png',
        position: {x: 535, y: 0}
      }
    ]
  ]

  function getImageUrl(url) {
    return `/static/Image/${url}`
  }

  function setRotateByOrientation() {
    switch (window.orientation) {
      case 0:
        break;
      case-90:

        break;
      case 90:
      case 180:
    }
  }

  function init() {
    const app = new PIXI.Application()
    document.querySelector('#canvas').appendChild(app.view)

    PIXI.loader.add('child', getImageUrl('1/child.png')).load((loader, resources) => {
      const child = new PIXI.Sprite(resources.child.texture);

      // Setup the position of the bunny
      child.x = app.renderer.width / 2;
      child.y = app.renderer.height / 2;

      // Rotate around the center
      child.anchor.x = 0.5;
      child.anchor.y = 0.5;

      // Add the bunny to the scene we are building
      app.stage.addChild(child);

      // Listen for frame updates
      app.ticker.add(() => {
        // each frame we spin the bunny around a bit
        child.rotation += 0.01;
      });
    });
  }

  export default {
    mounted() {
      init()
    }
  }
</script>

<style lang="scss" scoped>
</style>
