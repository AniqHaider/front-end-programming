

$(document).ready(function(){
  var el = document.getElementById('text');

    $('[data-trigger="dropdown"]').on('mouseenter' ,function(){
      var submenu = $(this).parent().find('.submenu');
     submenu.fadeIn('300');

       $('.profile-menu').on('mouseleave', function(){
          submenu.fadeOut('300');
       });

     });



});



/*

can be used to make the menu disappear its second event listener.
$(this).on('mouseleave', function(){
 submenu.removeClass('active');

});

active dropdown setup above is fade one.

var submenu = $(this).parent().find('.submenu');
submenu.addClass('active');

 $('.profile-menu').on('mouseleave', function(){
    submenu.removeClass('active');
 });
*/
