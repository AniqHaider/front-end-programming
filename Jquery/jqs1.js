$(document).ready(function(){

alert("loaded")

 document.getElementById('text').innerHTML = "This is my text";
 $('#text').html("This is my text");
 document.getElementsByClassName('my-input')[0].value="value of input";
 $('.my-input').val("new input val");

});
