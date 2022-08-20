$(document).ready(function(){

alert("loaded")
 var el = document.getElementById('text');

 console.log("el in vanilla js ,", el);
 console.log("el in jquery ,", $(el));

 $('#go-button').hover(function(){
   console.log("Fantastic job clicking that button");
  })
/*
other methods --

$('#go-button').on('mouseenter', function(){
  console.log("Fantastic job clicking that button");
})
  $('#go-button').on('mouseleave', function(){
    console.log("Fantastic job clicking that button");
})
    $('#go-button').on('mousedown', function(){
      console.log("Fantastic job clicking that button");
})
      $('#go-button').on('mouseup', function(){
        console.log("Fantastic job clicking that button");
})
*/

});
