function getImageUrl(url) {
  return `/static/Image/${url}.png`
}

export default [
  [
    {name: 'bg', url: getImageUrl('1/bg'), position: {x: 535, y: 0}, speed: {x: .05, y: 0}},
    {name: 'curtain', url: getImageUrl('1/curtain'), position: {x: 985, y: 40}, speed: {x: .05, y: 0}},
    {name: 'mother', url: getImageUrl('1/mother'), position: {x: 1050, y: 245}, speed: {x: -.25, y: 0}},
    {name: 'child', url: getImageUrl('1/child'), position: {x: 808, y: 392}, speed: {x: .05, y: 0}},
    {name: 'cover', url: getImageUrl('1/cover'), position: {x: -244, y: 0}},
    {name: 'tree', url: getImageUrl('1/tree'), position: {x: 0, y: 285}, speed: {x: .5, y: 0}}
  ]
]
