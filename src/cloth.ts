function createCloth():HTMLElement{
  if (document.getElementById(this.id) !== null) {
    document.body.removeChild(document.getElementById(this.id))
  }
  console.log('.....................')
  // 创建一个画布
  const can = document.createElement('canvas')
  // 设置画布的长宽
  const sWidth = this.contentText.length
  // 如果水印过长，更改画布宽高比例
  let xs = {
    w: 20,
    h: 20
  }
  if (sWidth > 10) {
    xs = { w: 10, h: 7 }
  }
  can.width = sWidth * xs.w
  can.height = sWidth * xs.h

  const cans = can.getContext('2d')
  // 旋转角度
  cans.rotate(-15 * Math.PI / 180)
  cans.font = this.fontSize
  // 设置填充绘画的颜色、渐变或者模式
  cans.fillStyle = this.color
  // 设置文本内容的当前对齐方式
  cans.textAlign = 'left'
  // 设置在绘制文本时使用的当前文本基线
  cans.textBaseline = 'middle'
  // 在画布上绘制填色的文本（输出的文本，开始绘制文本的X坐标位置，开始绘制文本的Y坐标位置）
  cans.fillText(this.contentText, 0, can.height / 2)
  return can
}

export {createCloth} 