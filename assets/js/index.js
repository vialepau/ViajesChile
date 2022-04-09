 $("a").on('click', function (event) {

    event.preventDefault();
    
    var hash = this.hash;
    
    $('html').animate({
    scrollTop: $(hash).offset().top - 80
    }, 1000)
    
    });

    $(window).scroll(function(){
      if($("#menu").offset().top >150){
         $("#menu").addClass("bg-inverse");
      }else{
         $("#menu").removeClass("bg-inverse");
      }
   });