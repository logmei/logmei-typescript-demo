 class Watermark{
  target: HTMLElement;
  contentText: String;
  constructor(contentText: String){
    this.target = document.documentElement;
    this.contentText = contentText
  }
  toString(){
    console.log('watermark:'+this.target+','+this.contentText)
  }
}
export {Watermark}