(function(){
  var K='ismb_lang';
  window.setLang=function(lang){
    var ar=lang==='ar';
    document.documentElement.dir=ar?'rtl':'ltr';
    document.documentElement.lang=lang;
    [].forEach.call(document.querySelectorAll('[data-lang]'),function(el){
      el.style.display=el.getAttribute('data-lang')===lang?'':'none';
    });
    [].forEach.call(document.querySelectorAll('[data-lang-btn]'),function(b){
      var on=b.getAttribute('data-lang-btn')===lang;
      b.classList[on?'add':'remove']('lbtn-on');
    });
    try{localStorage.setItem(K,lang);}catch(e){}
  };
  function init(){
    var s='ar';try{s=localStorage.getItem(K)||'ar';}catch(e){}
    window.setLang(s);
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}
  else{init();}
})();
