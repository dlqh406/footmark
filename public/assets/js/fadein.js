// .fi-1{opacity: 0;}
// .fi-2{opacity: 0; position: relative; top: 200px;}

$(document).ready(function() {

$(window).scroll( function(){
    var windowWidth = $( window ).width();

    if(windowWidth <= 1536 && windowWidth > 768){
      $('.slide1').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object* 3 /4 ){
          $(this).animate({'opacity':'1', 'left':'330px'},1800 ,function(){
            $('.slide2').each( function(i){
              var bottom_of_object = $(this).offset().top + $(this).outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              if( bottom_of_window > bottom_of_object* 3 /4 ){
                $(this).animate({'opacity':'1', 'left':'480px'},1800);
              }
            });
          });
        }
      });
    } else if(windowWidth <= 768){
      $('.slide1').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          if( bottom_of_window > bottom_of_object* 3 /4 ){
              $(this).animate({'opacity':'1'},1800 ,function(){
                $('.slide2').each( function(i){
                  var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                  var bottom_of_window = $(window).scrollTop() + $(window).height();
                  if( bottom_of_window > bottom_of_object* 3 /4 ){
                    $(this).animate({'opacity':'1'},1800);
                  }
                });
              });
          }
      });
    } else {
      $('.slide1').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          if( bottom_of_window > bottom_of_object* 3 /4 ){
              $(this).animate({'opacity':'1', 'left':'300px'},1800 ,function(){
                $('.slide2').each( function(i){
                  var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                  var bottom_of_window = $(window).scrollTop() + $(window).height();
                  if( bottom_of_window > bottom_of_object* 3 /4 ){
                    $(this).animate({'opacity':'1', 'left':'430px'},1800);
                  }
                });
              });
          }
      });
    }

    $('.three_img').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object* 3 /4 ){
            $(this).animate({'opacity':'1', 'left': '10px'}, 2000);
        }
    });

    /* Zero */
    $('.smallfeet1').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object* 3 /4 ){
            $(this).animate({'opacity':'1'}, 1000, function(){
              $('.smallfeet2').each( function(i){
                  if( bottom_of_window > bottom_of_object* 3 /4 ){
                      $(this).animate({'opacity':'1'}, 1000, function(){
                        $('.smallfeet3').each( function(i){
                            if( bottom_of_window > bottom_of_object* 3 /4 ){
                                $(this).animate({'opacity':'1'}, 1000, function(){
                                  $('.smallfeet4').each( function(i){
                                      if( bottom_of_window > bottom_of_object* 3 /4 ){
                                          $(this).animate({'opacity':'1'}, 1000, function(){

                                            if(windowWidth <= 1537 && windowWidth > 768){
                                              $('.feetcheck').each( function(i){
                                                if( bottom_of_window > bottom_of_object* 3 /4 ){
                                                  $(this).animate({'opacity':'1', 'left':'800px'}, 1000, function(){
                                                    $('.smallfeet4').each( function(i){
                                                      if( bottom_of_window > bottom_of_object* 3 /4 ){
                                                        $(this).animate({'opacity':'0.8'}, 1000, function(){
                                                          //$('.feed_detail').rotateY('80deg');
                                                          $('.feed_detail').each( function(i){
                                                            if( bottom_of_window > bottom_of_object* 3 /4 ){
                                                              $(this).animate({'opacity':'1', 'left':'1120px'}, 800);

                                                            }
                                                          });
                                                        });
                                                      }
                                                    });
                                                  });
                                                }
                                              });
                                            } else if(windowWidth <= 768){
                                              $('.feetcheck').each( function(i){
                                                if( bottom_of_window > bottom_of_object* 3 /4 ){
                                                  $(this).animate({'opacity':'1'}, 1000, function(){
                                                    $('.smallfeet4').each( function(i){
                                                      if( bottom_of_window > bottom_of_object* 3 /4 ){
                                                        $(this).animate({'opacity':'0.8'}, 1000, function(){
                                                          //$('.feed_detail').rotateY('80deg');
                                                          $('.feed_detail').each( function(i){
                                                            if( bottom_of_window > bottom_of_object* 3 /4 ){
                                                              $(this).animate({'opacity':'1'}, 800);

                                                            }
                                                          });
                                                        });
                                                      }
                                                    });
                                                  });
                                                }
                                              });
                                            }else{
                                              $('.feetcheck').each( function(i){
                                                if( bottom_of_window > bottom_of_object* 3 /4 ){
                                                  $(this).animate({'opacity':'1', 'left':'1020px'}, 1000, function(){
                                                    $('.smallfeet4').each( function(i){
                                                      if( bottom_of_window > bottom_of_object* 3 /4 ){
                                                        $(this).animate({'opacity':'0.8'}, 1000, function(){
                                                          //$('.feed_detail').rotateY('80deg');
                                                          $('.feed_detail').each( function(i){
                                                            if( bottom_of_window > bottom_of_object* 3 /4 ){
                                                              $(this).animate({'opacity':'1', 'left':'1340px'}, 800);

                                                            }
                                                          });
                                                        });
                                                      }
                                                    });
                                                  });
                                                }
                                              });
                                            }
                                          });
                                      }
                                  });
                                });
                            }
                        });
                      });
                  }
              });
            });
        }
    });


    /* Five */
    $('.center-phone').each( function(i){
      if (windowWidth <= 768) {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object* 3 /4 ){
          $(this).animate({'opacity':'1'}, 2000, function(){
            $('.s_feed1').each( function(i){
              if( bottom_of_window > bottom_of_object* 3 /4 ){
                $(this).addClass('animate');
                $(this).animate({'opacity':'1'}, 800, function(){
                  $('.s_feed2').each( function(i){
                    if( bottom_of_window > bottom_of_object* 3 /4 ){
                      $(this).addClass('animate');
                      $(this).animate({'opacity':'1'}, 800);
                    }
                  });
                });
              }
            });
          });
        }
      } else{
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object* 3 /4 ){
          $(this).animate({'opacity':'1'}, 2000, function(){
            $('#five1').each( function(i){
              if( bottom_of_window > bottom_of_object* 3 /4 ){
                $(this).addClass('animate');
                $(this).animate({'opacity':'1'}, 500, function(){
                  $('#five2').each( function(i){
                    if( bottom_of_window > bottom_of_object* 3 /4 ){
                      $(this).addClass('animate');
                      $(this).animate({'opacity':'1'}, 500, function(){
                        $('#five3').each( function(i){
                          if( bottom_of_window > bottom_of_object* 3 /4 ){
                            $(this).addClass('animate');
                            $(this).animate({'opacity':'1'}, 500, function(){
                              $('#five4').each( function(i){
                                if( bottom_of_window > bottom_of_object* 3 /4 ){
                                  $(this).addClass('animate');
                                  $(this).animate({'opacity':'1'}, 500, function(){
                                    $('.s_feed1').each( function(i){
                                      if( bottom_of_window > bottom_of_object* 3 /4 ){
                                        $(this).addClass('animate');
                                        $(this).animate({'opacity':'1'}, 800, function(){
                                          $('.s_feed2').each( function(i){
                                            if( bottom_of_window > bottom_of_object* 3 /4 ){
                                              $(this).addClass('animate');
                                              $(this).animate({'opacity':'1'}, 800);
                                            }
                                          });
                                        });
                                      }
                                    });
                                  });
                                }
                              });
                            });
                          }
                        });
                      });
                    }
                  });
                });
              }
            });
          });
        }

      }
    });

    /* Six */
    $('.six-full-img').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object* 3 /4 ){
          if(windowWidth <= 768){
            $(this).animate({'opacity':'1'}, 2000);
          } else{
            $(this).animate({'opacity':'1', 'left':'100px'}, 2000);
          }
        }
    });

    /* Seven */
    $('.opening').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if(windowWidth > 768){
          if( bottom_of_window > bottom_of_object* 3 /4 ){
            $(this).animate({'opacity':'1', 'top':'100px'}, 2000);
          }
        } else {
          if( bottom_of_window > bottom_of_object* 3 /4 ){
            $(this).animate({'opacity':'1', 'top':'300px'}, 2000);
          }
        }
    });

});
});
