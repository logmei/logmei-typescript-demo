


/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */

export function debounce(func:Function, wait:number, immediate:boolean):Function {
  let timeout:any, args:any, context:any, timestamp:number, result:any

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }
  
  return function(...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

/**
 * 频率控制 返回函数连续调用时，func 执行频率限定为 次 / wait
 *
 * @param  {function}   func      传入函数
 * @param  {number}     wait      表示时间窗口的间隔
 * @param  {object}     options   如果想忽略开始边界上的调用，传入{leading: false}。
 *                                如果想忽略结尾边界上的调用，传入{trailing: false}
 * @return {function}             返回客户调用函数
 */
interface Options{
  leading?:boolean;
  trailing?:boolean;
}
export function throttle(func:Function, wait:number, options?:Options):Function {
  let context:any, args:any[], result:any
  let timeout:any = null
  // 上次执行时间点
  let previous = 0
  if (!options) options = {}
  // 延迟执行函数
  const later = function() {
    // 若设定了开始边界不执行选项，上次执行时间始终为0
    previous = options.leading === false ? 0 : Number(new Date())
    timeout = null
    result = func.apply(context, args)
    if (!timeout) context = args = null
  }
  return function(..._args) {
    const now = Number(new Date())
    // 首次执行时，如果设定了开始边界不执行选项，将上次执行时间设定为当前时间。
    if (!previous && options.leading === false) previous = now
    // 延迟执行时间间隔
    const remaining = wait - (now - previous)
    context = this
    args = _args
    // 延迟时间间隔remaining小于等于0，表示上次执行至此所间隔时间已经超过一个时间窗口
    // remaining大于时间窗口wait，表示客户端系统时间被调整过
    if (remaining <= 0 || remaining > wait) {
      clearTimeout(timeout)
      timeout = null
      previous = now
      result = func.apply(context, args)
      if (!timeout) context = args = null
      // 如果延迟执行不存在，且没有设定结尾边界不执行选项
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }
    return result
  }
}