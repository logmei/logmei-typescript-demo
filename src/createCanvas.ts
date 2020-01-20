 //创建画布
 function createCanvas(cons:HTMLCanvasElement){
   
  const div = document.createElement('div')
  div.id = this.id
  div.style.pointerEvents = 'none'
  div.style.top = this.top
  div.style.left = this.left
  div.style.position = 'fixed'
  div.style.zIndex = this.zIndex
  div.style.opacity = this.opacity
  div.style.width = document.documentElement.clientWidth + 'px'
  div.style.height = document.documentElement.clientHeight + 'px'
  div.style.background = 'url(' + cons.toDataURL('image/png') + ') left top repeat'
  document.body.appendChild(div)
}

export {createCanvas} 