export function debounce(func, delay) {
  let timer = null;
  return function() {
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func()
      // console.log(this);
    }, delay)
  }
}

export function  throttle(func, delay) {
  let flag = true;
  return function() {
    if(! flag) return;
    flag = false
    setTimeout(() => {
      func();
      console.log('上拉加载更多');
      flag = true;
    }, delay)
  }
}