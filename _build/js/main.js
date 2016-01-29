$(document).ready(function() {
  navs();
  head();

  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({
    triggerElement: '#trigger1'
  })
  .setVelocity('.features', {opacity: 1}, {duration: 1000})
  .addTo(controller);

  var end = new ScrollMagic.Scene({
    triggerElement: '#trigger2'
  })
  .setVelocity('.features', {opacity: 0}, {duration: 1000})
  .addTo(controller);

  var caller = new ScrollMagic.Scene({
    triggerElement: '#trigger2'
  })
  .setVelocity('.call', {scale: 1.3}, {duration: 1000})
  .addTo(controller);


  //function getDur(){
    //return $('.features').outerHeight(true);
  //}

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

  $('.features').velocity({opacity: 0});

  $('.top-line').velocity(
    {opacity: 0}
  )
  .velocity(
    {opacity: 1},
    {duration: 2000})

  $('.call').click(function(){
    $('.call').velocity(
      {scale: 1.8},
      {duration: 200}
    )
    .velocity(
      {scale: 0},
      {duration: 200,
      visibility: "hidden"}
    );
  });



});
