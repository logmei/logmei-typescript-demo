import {Watermark} from './watermark';
// const watermark = new Watermark('logmei');
// console.log(Watermark)
function load(){
  const watermark = new Watermark('杨晓妹')
  const options = {
    fontSize:'16px',
    color:'green',
    //画布
    top:'30px',
    left:'0px',
    opacity:0.7,
    zIndex : 1000,
  }
  watermark.initOptions(options)
  watermark.render()
}
document.body.onload = function(){
  load()
}
  
document.getElementById('app').innerHTML = 'hello world'