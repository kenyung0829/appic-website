
var canScroll = true;
var timeout;
document.addEventListener("wheel", function (e) {
    if (timeout){
      clearTimeout(timeout);
    }
    if (e.deltaY > 0){
      timeout = setTimeout(function(){
        api.next();
      }, 500);
    }
    if (e.deltaY < 0){
      timeout = setTimeout(function(){
        api.prev();
      }, 500);
    }
    return false;
}, true);
