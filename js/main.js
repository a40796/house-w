// --------------------  index ------------------------

window.addEventListener("scroll", function(){
    // console.log("scrollX: " + window.scrollX);
    // console.log("scrollY: " + window.scrollY);
    //559
    var scrollY = window.scrollY;
    var headerUl = document.querySelector('.main .header ul');
    var topUl = document.querySelector('.header1 .center ul');

    if(scrollY >= 559){
        headerUl.style.opacity = 0 ;
        topUl.style.opacity = 1 ;

    }else if(scrollY == 0){
        headerUl.style.opacity = 1 ;
        topUl.style.opacity = 0 ;
    }
  });
  // ----------------------  jquery - index_menu. news_menu ----------------

$(document).ready(function(){
    $(".bt").click(function(e){
        // alert('qqqqqq')
        e.preventDefault();
        var menu = $('.menu');
        var body = $('body');
        var wrap = $('.wrap');
        var header = $('.header1');
        header.hide();
        if(menu.css('opacity','0' )){
            menu.css('opacity','1');
            wrap.css('opacity','.2');      
        };
        menu.toggle();  
        
    });
    $('.menu_close').click(function(e){
        e.preventDefault();
        var menu = $('.menu');
        var body = $('body');
        var wrap = $('.wrap');
        var header = $('.header1');
        header.show();
        if(menu.css('opacity','1')){
            menu.css('opacity','0');
            wrap.css('opacity','1');
        };
        menu.toggle();
    });
  });


  // ----------------------jquery - index,news,events,projects_login ,  ---------------------

  $(document).ready(function(){
    $(".login").click(function(e){
        // alert('qqqqqq')
        e.preventDefault();
        var logInEl = $('.login-el');
        var wrap = $('.wrap');
        
        if(logInEl.css('opacity','0' )){
            logInEl.css('opacity','1');
            // wrap.css('opacity','.2');   
            // wrap.css('filter','grayscale(1)');
            
        };
        logInEl.toggle();
        // logIn.toggle();
    });
    $('.login_close').click(function(e){
        e.preventDefault();
        // alert('qqqqq');
        var logInEl = $('.login-el');
        if(logInEl.css('opacity','1')){
            logInEl.css('opacity','0');
            // wrap.css('opacity','1');
        };
        logInEl.toggle();
    });
     
  });


  // ----------------------- jquery - index.news.events,projects_signup -----------------------
  
  $(document).ready(function(){
    $(".signup").click(function(e){
        // alert('qqqqqq')
        e.preventDefault();
        var signupEl = $('.signup-el');
        // signupEl.toggle();
        if(signupEl.css('opacity','0' )){
            signupEl.css('opacity','1');
        };
        signupEl.toggle();
    });
    $('.signup_close').click(function(e){
        e.preventDefault();
        // alert('qqqqq');
        var signupEl = $('.signup-el');
        if(signupEl.css('opacity','1')){
            signupEl.css('opacity','0');
            // wrap.css('opacity','1');
        };
        signupEl.toggle();
    });
    
  });

   // ----------------------- jquery - contact us -----------------------
   // click - open
   $(document).ready(function(){
    $(".con_us").click(function(e){
        e.preventDefault();
        var contactUs = $('.contactUs')
        if(contactUs.css('opacity','0')){
            contactUs.css('opacity','1');
        };   
    });
  });
   
  //click_hide
  $(document).ready(function(){
    $(".contactUs button").click(function(e){
        e.preventDefault();
        var contactUs = $('.contactUs')
        if(contactUs.css('opacity','1')){
            contactUs.css('opacity','0');
        };   
    });
  });