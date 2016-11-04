// **** OBJECTS *****
var resume = {
    open: function() {
        var x = "<h4><a onclick='footerTab()'>X</a></h4>";
            x += "<h6><a href='../docs/christopherparke.pdf'>Download PDF</a></h6>";
        return x;
    },
    
    close: function() {
        var x = "<h3><a onclick='footerTab()'>Resume</a></h3>";
        return x;
    }
}



// **** FUNCTION DECLARATIONS *** 

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
            // Nav Menu Close
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



// cycle through gallery onclick
var rotateGal = function () {

     // if project hasClass project 1 ...
     if ($('#project').hasClass('p1')) {
         // addClass project2
         $('#project').addClass('p2');
        // removeClass project1
         $('#project').removeClass('p1');
     } else if ($('#project').hasClass('p2')) {
         // addClass project3
        $('#project').addClass('p3');
        // removeClass project2
        $('#project').removeClass('p2');
     } else if ($('#project').hasClass('p3')) {
        // addClass project1
        $('#project').addClass('p1');
        // removeClass project 3
        $('#project').removeClass('p3');
     }
        
    
}

   
        




















//var footerTab = function() {
//    // if tab is CLOSED... 
//    if (!$('.resume').hasClass('resume-tab-open')) {
//        // ...open it...
//        $('.resume').addClass('resume-tab-open');
//        // ... and change the text to an x
//        document.getElementById('resume').innerHTML = resume.open();
//        
//        
//    // if tab is OPEN...   
//    } else if ($('.resume').hasClass('resume-tab-open')) {
//        // ...close it
//        $('.resume').removeClass('resume-tab-open');
//        // ...and change the text back to resume
//        document.getElementById('resume').innerHTML = resume.close();
//    }
//}








//
//    var x;
//    x+=1;
//        
//    if(x==1){
////        document.getElementById('project').innerHTML = PROJECT;
//        console.log('Project1');
//    }else if(x==2) {
////        document.getElementById('project').innerHTML = PROJECT2;
//        console.log('Project2');
//    }else if (x==3) {
////        document.getElementById('project').innerHTML = PROJECT3;
//        console.log('Project3');
//    }else if (x==4) {
//        x=0;
////        document.getElementById('project').innerHTML = PROJECT1;
//        console.log('Project4');
//    }









