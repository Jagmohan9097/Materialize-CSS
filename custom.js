$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.carousel').carousel();
    $('.materialboxed').materialbox();
    $('input#mobile').characterCounter();
    $('.collapsible').collapsible();
    $('.modal').modal();
    $('.fixed-action-btn').floatingActionButton();
    $('.datepicker').datepicker();


$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators : true
  });
      setInterval(function(){
    $('.carousel').carousel('next');
        
      }, 3000); //miliseconds
});
