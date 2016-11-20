/* Hamburger open and close logic */
var clickBurger = function() {
    // Check if Hamburger Menu is open
    if (!$('.hamburger > #donutOne').hasClass('open1')) {
        // open menu
            // hamburger menu Open animation
            $('.hamburger > #donutOne').addClass('open1');
            $('.hamburger > #donutTwo').addClass('open2');
            $('.hamburger > #donutThree').addClass('open3');

            // Nav Menu Open
            $('.nav').addClass('navOpen');
        
            // X animation in
            $('.hamburger > #donutFour').addClass('x1open');
            $('.hamburger > #donutFive').addClass('x2open');
        
    } else {
        
         // X animation out
            $('.hamburger > #donutFour').removeClass('x1open');
            $('.hamburger > #donutFive').removeClass('x2open');
        
        // close menu
            $('.nav').removeClass('navOpen');
        
        
        // Hamburger menu Close animation
            $('.hamburger > #donutOne').removeClass('open1');
            $('.hamburger > #donutTwo').removeClass('open2');
            $('.hamburger > #donutThree').removeClass('open3'); 
    }
    
    // if document is scrolled down and the hamburger's first donut has the class 'open1'...
    if(document.body.scrollTop > 50 && $('.hamburger > #donutOne').hasClass('open1')) {
        
        // ...add the padding back in on the header to squeeze the hamburger back in
        $('.header').removeClass('zeroPadding');
        // ...bring the social icons back into visibilty.
        $('.social-icon').removeClass('zeroOpacity');
        // ...remove the border radius class from the hamburger.
         $('.hamburger').removeClass('rounded');
    }
    // if the document is scrolled down and the hambruger's first donut DOES NOT have the open1 class...
    if(document.body.scrollTop > 50 && !$('.hamburger > #donutOne').hasClass('open1')) {
        
        // ...take the padding off of the header to push the hamburger into the corner.
        $('.header').addClass('zeroPadding');
        // ...make the social icons invisible.
        $('.social-icon').addClass('zeroOpacity');
        // ...add the border radius for the Hamburger in
        $('.hamburger').addClass('rounded');
        
    }
}

/* Header fade in and out logic */
var noHeader = function() {

    if(document.body.scrollTop > 50){
        $('.header').addClass('transparent');
        $('.hamburger').addClass('opaque');

    } else if (document.body.scrollTop < 50){
        $('.header').removeClass('transparent');
        $('.hamburger').removeClass('opaque');
        $('.header').removeClass('zeroPadding');
        $('.social-icon').removeClass('zeroOpacity');
        
    }
    
    if(document.body.scrollTop > 50 && !$('.hamburger > #donutOne').hasClass('open1')){
        $('.header').addClass('zeroPadding');
        $('.social-icon').addClass('zeroOpacity');
        $('.hamburger').addClass('rounded');
        
    } 
    
    if (!$('.header').hasClass('transparent')){
        $('.hamburger').removeClass('rounded');
    }
    
    if(document.body.scrollTOp > 50 && $('.hamburger > #donutOne').hasClass('open1')){
        $('.hamburger').removeClass('rounded');
    }
}



// Click for next project in gallery
var Next = function () {

     if ($('#project').hasClass('p1')) {
         
         document.getElementById("project-list").innerHTML = "<li id='project' class='p2'><a href='http://christopherparke.com/bootgal/'><img src='img/bootgal.png' alt='project_two'></a></li>";
         document.getElementById("description").innerHTML = "Generic Gallery Website <br />HTML, CSS, JavaScript, Bootstrap";
     } else if ($('#project').hasClass('p2')) {
            
         document.getElementById("project-list").innerHTML = "<li id='project' class='p3'><a href='http://christopherparke.com/enride/'><img src='img/enride.png' alt='project_three'></a></li>";
         document.getElementById("description").innerHTML = "Enbridge Ride Group Website <br />HTML, CSS, JavaScript, Bootstrap";
         
     } else if ($('#project').hasClass('p3')) {
         
         document.getElementById("project-list").innerHTML = "<li id='project' class='p1'><a href='http://christopherparke.com/Hubnest/'><img src='img/logistiq.png' alt='project_one'></a></li>";
         document.getElementById("description").innerHTML = "Login page for LogistIQ <br />HTML, CSS, JavaScript, jQuery";
     }
}

   
// Click for previous project in gallery
var Previous = function () {

     if ($('#project').hasClass('p1')) {
         
         document.getElementById("project-list").innerHTML = "<li id='project' class='p3'><a href='http://christopherparke.com/enride/'><img src='img/enride.png' alt='project_three'></a></li>";
         document.getElementById("description").innerHTML = "Enbridge Ride Group Website <br />HTML, CSS, JavaScript, Bootstrap";
     } else if ($('#project').hasClass('p2')) {
       
         document.getElementById("project-list").innerHTML = "<li id='project' class='p1'><a href='http://christopherparke.com/Hubnest/'><img src='img/logistiq.png' alt='project_one'></a></li>";
         document.getElementById("description").innerHTML = "Login page for LogistIQ <br />HTML, CSS, JavaScript, jQuery";
     } else if ($('#project').hasClass('p3')) {
        
         document.getElementById("project-list").innerHTML = "<li id='project' class='p2'><a href='http://christopherparke.com/bootgal/'><img src='img/bootgal.png' alt='project_two'></a></li>";
         document.getElementById("description").innerHTML = "Generic Gallery Website <br />HTML, CSS, JavaScript, Bootstrap";
     }
}
        








