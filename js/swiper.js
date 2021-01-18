// https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
const swiper = {
  setup: function(swipeLeftCb = null, swipeRightCb = null, swipeUpCb = null, swipeDownCb = null){

    appContentContainer.addEventListener('touchstart', swiper.handleTouchStart, false);        
    appContentContainer.addEventListener('touchmove', swiper.handleTouchMove, false);
    appContentContainer.addEventListener('mousedown', swiper.handleTouchStart, false);        
    appContentContainer.addEventListener('mouseup', swiper.handleTouchMove, false);

    swiper.xDown = null;                                      
    swiper.yDown = null;       

    if(swipeLeftCb) swiper.swipeLeftCb = swipeLeftCb;
    if(swipeRightCb) swiper.swipeRightCb = swipeRightCb;
    if(swipeUpCb) swiper.swipeUpCb = swipeUpCb;
    if(swipeDownCb) swiper.swipeDownCb = swipeDownCb;
  },


  xDown: null,
  yDown: null,
  swipeLeftCb: null,
  swipeRightCb: null,
  swipeUpCb: null,
  swipeDownCb: null,



  getTouches: function(evt) {
    return (evt.touches && evt.touches[0]) ||                     // browser API
           (evt.originalEvent && evt.originalEvent.touches[0]) || // jQuery
           evt;                            // mouse event does not have touch
  },


  handleTouchStart: function(evt){
    const firstTouch = swiper.getTouches(evt);                                      
    swiper.xDown = firstTouch.clientX;                                      
    swiper.yDown = firstTouch.clientY;   
  },

  handleTouchMove: function(evt) {

    
    if (!swiper.xDown || !swiper.yDown) { return; }


    var xUp = swiper.getTouches(evt).clientX;                                    
    var yUp = swiper.getTouches(evt).clientY;

    var xDiff = swiper.xDown - xUp;
    var yDiff = swiper.yDown - yUp;



    if ( Math.abs(xDiff) > Math.abs(yDiff)) {   /*most significant swipe is horizontal*/

      if (xDiff > 0) {  if(swiper.swipeLeftCb)  swiper.swipeLeftCb();   }     /* left swipe */
      else {            if(swiper.swipeRightCb) swiper.swipeRightCb();  }     /* right swipe */
                   
    } else {

      if (yDiff > 0) {  if(swiper.swipeUpCb)    swiper.swipeUpCb();   }       /* up swipe */
      else {            if(swiper.swipeDownCb)  swiper.swipeDownCb();  }      /* down swipe */
                                                              
    }


    /* reset values */
    swiper.xDown = null;
    swiper.yDown = null;    

  }
}