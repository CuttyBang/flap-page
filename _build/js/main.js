$(document).ready(function() {
  navs();
  head();
  pip();



  $('.call').click(function(){
    $('.call').velocity(
      {scale: 1.3},
      {duration: 200}
    )
    .velocity(
      {scale: 0},
      {duration: 800,
      visibility: "hidden"}
    );
  });


  function pip(){
    $('#cred').velocity(
      'transition.flipXIn',
      {stagger: 200, drag: true}
    );
  }

  function navs(){
    $('.menu ul li').velocity('transition.slideRightIn', {
      stagger: 200, drag: true
    });
  }

  function head(){
    $('header img').velocity('transition.expandIn', {
      stagger: 800
    });
  }


});
