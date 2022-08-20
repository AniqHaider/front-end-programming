$(document).ready(function(){

alert("loaded")
 var el = document.getElementById('text');

 console.log("el in vanilla js ,", el);
 console.log("el in jquery ,", $(el));

 $('#go-button').on('click', function(){
   alert("Fantastic job clicking that button");
  })


});
