import {LogmeiCanvas} from './LogmeiCanvas';
function load(){
  const logmei = new LogmeiCanvas('123456')
  const options = {
    fontSize:'16px',
    color:'green',
    //画布
    top:'30px',
    left:'0px',
    opacity:0.7,
    zIndex : 1000,
  }
  logmei.initOptions(options)
  logmei.render()
}
document.body.onload = function(){
  load()
}
  
document.getElementById('app').innerHTML = 'hello world'