 import { createCloth } from './cloth'
 import { createCanvas } from './createCanvas'
 import { throttle } from './util'
 interface Watermark{
   [key:string]:any
 }
 class Watermark{

  public target: HTMLElement = document.documentElement;
  public contentText: string = '';
  public width:number;
  public height:number;
  public id:string = 'fe-waterMark';
  public fontSize:string = '10px';
  public color:string = '#cacaca';
  public top:string = '30px';
  public left:string = '0px';
  public opacity:number = 0.5;
  public zIndex:number = 1000;

  constructor(contentText: string){
    this.contentText = contentText;
    this.width = this.target.clientWidth;
    this.height = this.target.clientHeight;
  }
  initOptions(options:{[key:string]:any}):void{
    if(this.getType(options) === 'object')
     Object.keys(options).forEach((key:string)=>{
       this[key] = this[key] && (options[key] || this[key])
     })
  }
 
  getType(obj:any):string{
    return Object.prototype.toString.call(obj).replace(/^\S+\s+(\S+)\]$/,'$1').toLowerCase()
  }
  //设置水印
  setWatermark():void{
    // Window.devicePixelRatio = 2
    //创建画布
    const cons = createCloth.call(this)
    createCanvas.call(this,cons)
  }
  //渲染
  render():void{
    this.setWatermark()
    window.onresize = (event)=>{
      throttle(()=>{
        this.setWatermark()
      },500)
    }  
  }
}
export {Watermark}