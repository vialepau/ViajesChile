// $(document).ready(function () {
//     $("a").click(function (event) {
//         event.preventDefault();

//         var miHash = this.hash;
//         $("html").animate(
//             {
//                 scrollTop: $(miHash).offset().top
//             },
//             800
//         );
//     });
// });

// $(document).ready(function(){
   
//     $("a").on('click', function(event) {
  
//       if (this.hash !== "") {
        
//         event.preventDefault();
  
       
//         var hash = this.hash;  
    
//         $('html, body').animate({
//           scrollTop: $(hash).offset().top
//         }, 800, function(){
  
//           window.location.hash = hash;
//         });
//       } 
//     });
//   });

  $("a").on('click', function (event) {

    event.preventDefault();
    
    var hash = this.hash;
    
    $('html').animate({
    scrollTop: $(hash).offset().top - 80
    }, 1000)
    });
