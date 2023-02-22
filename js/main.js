/* sticy_menu_part============================== */
$(window).scroll(function(){
    if($(this).scrollTop() > 200){
        $('#menubar').addClass('sticky')
    } else{
        $('#menubar').removeClass('sticky')
    }
  });
  /* sticy_menu_part============================== */


  /* scroll_part_start============================== */
  $(window).scroll(function(){
    if($(this).scrollTop() > 200){
        $('.scroll_top').addClass('back_top')
    } else{
        $('.scroll_top').removeClass('back_top')
    }
  });
  /* scroll_part_end============================== */