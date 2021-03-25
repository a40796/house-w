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
        var body = $('body');
        logInEl.toggle();
       
    });
    $('.login_close').click(function(e){
        e.preventDefault();
        // alert('qqqqq');
        var logInEl = $('.login-el');
        logInEl.toggle();
    });
     
  });


  // ----------------------- jquery - index.news.events,projects_signup -----------------------
  
  $(document).ready(function(){
    $(".signup").click(function(e){
        
        // alert('qqqqqq')
        e.preventDefault();
        var signupEl = $('.signup-el');
        signupEl.toggle();
    });
    $('.signup_close').click(function(e){
        e.preventDefault();
        // alert('qqqqq');
        var signupEl = $('.signup-el');
        signupEl.toggle();
    });
    
  });

   // ----------------------- jquery - contact us -----------------------
   // click - open
   $(document).ready(function(){
    $(".con_us").click(function(e){
        e.preventDefault();
        var contactUs = $('.contactUs')
    });
  });
   
  //click_hide
  $(document).ready(function(){
    $(".contactUs button").click(function(e){
        e.preventDefault();
        var contactUs = $('.contactUs')
    });
  });

  //註冊帳號密碼驗證

    $('.btnSubmit').on('click',function(event){
        event.preventDefault();
        let errormsg =$('.errormsg');
        if ($('.account').val().trim().length < 1) {
            errormsg.html('email or mobile number');
            $('.account').focus();
            return;
        }
            var reg = /^1[34578]\\d{9}$/;
            var reg2 = /^[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
            var input2 = $('.account').val();
            var input1 = $('.account').val();
            if(!reg.test(input1)&&!reg2.test(input2)){
                errormsg.html('Please enter the correct email or phone format!')
            }

        if ($('.password').val().trim().length < 1) {
            errormsg.html('type in the password');
            $('.password').focus();
            return;
        }
        errormsg.html('Registered successfully, redirecting');

    })

  //登入帳號密碼驗證

    $('.loginSubmit').on('click',function(event){
        event.preventDefault();
        let errormsg_login =$('.errormsg_login');
        if ($('.account_login').val().trim().length < 1) {
            errormsg_login.html('email or mobile number');
            $('.account_login').focus();
            return;
        }
            var reg = /^1[34578]\\d{9}$/;
            var reg2 = /^[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
            var input2 = $('.account_login').val();
            var input1 = $('.account_login').val();
            if(!reg.test(input1)&&!reg2.test(input2)){
                errormsg.html('Please enter the correct email or phone format!')
            }

        if ($('.pass_login').val().trim().length < 1) {
            errormsg_login.html('type in the password');
            $('.pass_login').focus();
            return;
        }
        errormsg_login.html('Registered successfully, redirecting');

    })
