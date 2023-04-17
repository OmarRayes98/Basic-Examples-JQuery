// Header Style App : عند الضغط على li سنعطيها كلاس معين 
//Window App
//Dynamic Taps
//Filter Images
//Smooth Scroll Header App
//Scroll To Top App
//Calculate | CountDown Characters of Textarea App


$(document).ready(function(){


    //Header Style App :

    $("header li a").on("click",function(){

        // $(this).addClass('active').parent().siblings().children().removeClass('active');
        $(this).addClass('active').parent().siblings().find("a").removeClass('active');
 
    })
/*
//IN JS :

// Cache the list, and the items
const list = document.querySelector('header ul');
const links = list.querySelectorAll('a');

// Add one listener to the list element
list.addEventListener('click', handleClick);

// If the clicked element is a link remove all the active classes from the other links, and then
// add the active class to the link that was clicked on
function handleClick(e) {
  if (e.target.matches('a')) {

    links.forEach(link => link.classList.remove('active'));

    e.target.classList.add('active');
  }
}

*/

//-----------------------------------------

    //Window App // by scroll event

    let homeOffset = $(".home").offset().top; // على بعد اديش من الصفحة 

    $(window).scroll(function(){

        let windowScroll = $(this).scrollTop();

        if(windowScroll >= homeOffset){

            $(".home").css('background','red');
        }else{

            $(".home").css('background','orange');
        }

        if(windowScroll > 200){
            $("header").addClass('changeHeader');
        }else{

            $("header").removeClass('changeHeader');
        }
        // console.log($(window).scrollTop());
        // console.log(homeOffset);
    });


//--------------------------------------------------------
    //Dynamic Taps

     $("header a").click(function(){

         let myId = $(this).attr("id"); // home or about portofolio or contact

         $('body section').hide(); // like reset for hide every section then show specific one that I clicked

         // $('.' + myId).show(); // will show that section was display :none 
         $('.' + myId).fadeIn();
     })

     
/*
    // in JS :
    const links = document.querySelectorAll('header a');

    console.log(links);

    links.forEach(link => {

        link.addEventListener("click", function(){
        
            let myID =  this.id;

            console.log( document.querySelectorAll("body section"))
    
            document.querySelectorAll("body section").forEach(link => link.style.display= "none");
    
            document.querySelector(`.${myID}`).style.display="block";
        })
    
    });
   
*/

//---------------------------------------------------------------------


    //Filter Images

    $(".tabs button").click(function(){

        let myClass = $(this).attr("class"); // home or about portofolio or contact
        
        if(myClass=='all'){
            $('.images img').fadeIn();
        }else{

        $('.images img').hide(); // like reset for hide every images then show specific one that I clicked
        // $('.' + myId).show(); // will show that section was display :none 
        $(".images ." + myClass).fadeIn();
    }

    })


//-------------------------------------------------------------------------
    //Smooth Scroll Header App

    let headerHeight = $("header").height(); // or innerHeight or etc but here I need height()

    $("header a").click(function(){

        let myId = $(this).attr('id');
        $("body,html").animate({
            screenTop : $("." + myId).offset().top -headerHeight, // -60 "the  height of header"
        })
    })

//-----------------------------------------------------------------------------
    //Scroll To Top App

    $(window).scroll(function(){

        //to show or hide
        if($(this).scrollTop() > 200){
            $(".scrollTop").show();
        }else{
            $(".scrollTop").hide();

        }
    })
    
    // to enable event of click 
    $(".scrollTop").click(function(){
        $("body,html").animate({
            scrollTop: 0,
        },800)
    })
//-----------------------------------------------------------------------------

    //Calculate | CountDown Characters of Textarea App

    $("textarea").keyup(function(e){

        console.log(e.target.value.length);

        if(e.target.value.length >=100){

            e.target.value = e.target.value.substr(0,100);
        }
    })



})// End Jquery