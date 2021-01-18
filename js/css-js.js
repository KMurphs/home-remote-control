const cssJavascript = {
  addVH: function(target = null){
    
    const htmlTarget = target ? target : document.querySelector(':root');

    const adjuster = (target)=> { 
      target?.style.setProperty('--vh', window.innerHeight/100 + 'px');
    }

    window.addEventListener("resize", ()=> adjuster(htmlTarget));
    adjuster(htmlTarget);
  }
}