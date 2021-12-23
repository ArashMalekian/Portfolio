const wellcome = ()=>{

    document.getElementById("wellcome").style.opacity= "1";
}

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
    document.getElementById("btn").style.opacity= "1";
       
   } else {
    document.getElementById("btn").style.opacity= "0";

   }
   lastScrollTop = st;
});





