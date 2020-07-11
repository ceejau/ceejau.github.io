$(document).ready(function () {


    $("#slideshow > div:gt(0)").hide();

    setInterval(function() { 
      $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    },  3000);


 $('.gallery_desc').text('Elon Musk’s brother, Kimbal, is on a mission to feed the world and train the next generation of farmers.He co-founded Square Roots with CEO Tobias Peggs to grow non-GMO crops in reclaimed shipping containers, even in urban areas.')



 slide_up();

function slide_up(){
    setTimeout(function(){
        $( ".hydro_name" ).slideUp();
        $( ".aero_name" ).slideUp();
        $( ".aqua_name" ).slideUp();
        slide_down();
    },3000)
    

}

function slide_down(){
    
setTimeout(function(){
   
        $( ".hydro_name" ).slideDown();
        $( ".aero_name" ).slideDown();
        $( ".aqua_name" ).slideDown();
        slide_up();
    },2000)
    
  
}


   
var project_count=1;


$('.next').click(function()
{
  if(project_count == 7)
 {
   project_count = 0; 
 }
 project_count++;
 $('.actual_img').attr('src','/images/galler_'+ project_count +'.jpg')
 
 if(project_count == 1)
 {
   
   $('.gallery_desc').text("Elon Musk’s brother, Kimbal, is on a mission to feed the world and train the next generation of farmers.He co-founded Square Roots with CEO Tobias Peggs to grow non-GMO crops in reclaimed shipping containers, even in urban areas.")

 }
 else if(project_count == 2)
 {
   $('.gallery_desc').text("BrightFarms greenhouse in Pennsylvania produces around 34,000 kilograms (75,000 pounds) of nutrient-rich spinach per year—even in the thick of winter—while also conserving land, water, and fossil fuels. ")

 }
 else if(project_count == 3)
 {
   $('.gallery_desc').text("Aerofarm is one of the fastest growing indoor farming company.They have the patent on aeroponic technology which has done wonders in the field")
    
 }
 else if(project_count == 4)
 {
   $('.gallery_desc').text("Aquaponics Using natural fertilizer from fish waste also helps indoor farmers appeal to customers who prefer to consume organic vegetables. Because the plants and fish share an environment, it’s not possible or necessary to use many common types of agrochemicals ")
    
 }
 else if(project_count == 5)
 {
   $('.gallery_desc').text("In 1999, Stoner, funded by NASA, developed an inflatable low-mass aeroponic system (AIS) for space and earth for high performance food production.This advancements are very useful in space aeroponics.")
 }
 else if(project_count == 6)
 {
   $('.gallery_desc').text("Chris Precht Shares his Thoughts on the New Generation of Architects in ReSITE PodcastDesign and the City is a podcast by reSITE, raising questions and proposing solutions for the city of the future.")
 }
 else if(project_count == 7)
 {
   $('.gallery_desc').text("Growing Underground is the first of its kind vertical farm that is housed underneath the streets of London, using the air raid shelters from the second world war to create a very unconventional farm.")
 }

})
$('.prev').click(function()
{
  if(project_count == 1)
 {
   project_count = 8; 
 }
 project_count--;
 $('.actual_img').attr('src','/images/galler_'+ project_count +'.jpg')
 
 if(project_count == 1)
 {
   
   $('.gallery_desc').text("Elon Musk’s brother, Kimbal, is on a mission to feed the world and train the next generation of farmers.He co-founded Square Roots with CEO Tobias Peggs to grow non-GMO crops in reclaimed shipping containers, even in urban areas.")

 }
 else if(project_count == 2)
 {
   $('.gallery_desc').text("BrightFarms greenhouse in Pennsylvania produces around 34,000 kilograms (75,000 pounds) of nutrient-rich spinach per year—even in the thick of winter—while also conserving land, water, and fossil fuels. ")

 }
 else if(project_count == 3)
 {
   $('.gallery_desc').text("Aerofarm is one of the fastest growing indoor farming company.They have the patent on aeroponic technology which has done wonders in the field")
    
 }
 else if(project_count == 4)
 {
   $('.gallery_desc').text("Aquaponics Using natural fertilizer from fish waste also helps indoor farmers appeal to customers who prefer to consume organic vegetables. Because the plants and fish share an environment, it’s not possible or necessary to use many common types of agrochemicals ")
    
 }
 else if(project_count == 5)
 {
   $('.gallery_desc').text("In 1999, Stoner, funded by NASA, developed an inflatable low-mass aeroponic system (AIS) for space and earth for high performance food production.This advancements are very useful in space aeroponics.")
 }
 else if(project_count == 6)
 {
   $('.gallery_desc').text("Chris Precht Shares his Thoughts on the New Generation of Architects in ReSITE PodcastDesign and the City is a podcast by reSITE, raising questions and proposing solutions for the city of the future.")
 }
 else if(project_count == 7)
 {
   $('.gallery_desc').text("Growing Underground is the first of its kind vertical farm that is housed underneath the streets of London, using the air raid shelters from the second world war to create a very unconventional farm.")
 }

})
$('.next').mouseenter(function(){

    $(this).css('background-color', 'grey');

  })
  $('.next').mouseleave(function(){

    $(this).css('background-color', 'black');

  })
  $('.prev').mouseenter(function(){

    $(this).css('background-color', 'grey');

  })
  $('.prev').mouseleave(function(){

    $(this).css('background-color', 'black');


  })


})