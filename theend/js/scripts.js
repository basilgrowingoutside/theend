$(document).ready(function(){

console.log("js loaded successfully");
  // $(".exhibitzoom").hide();

  $(".exhibit").click( function() {
    $(".exhibit").hide();
    console.log("exhibit click");
    $(".exhibitzoom").show();
  });

  $(".close").click( function() {
    $(".exhibitzoom").hide();
    console.log("close click");
    $(".exhibit").show();
  });

  $(".wall1").click( function() {
    $(".wall1").hide();
    $(".wall1zoom").show();
  });

  $(".close").click( function() {
    $(".wall1zoom").hide();
    $(".wall1").show();
  });

  $(".reset").click( function() {
    $(".exhibitzoom").hide();
    console.log("close click");
    $(".exhibit").show();
  });

  $(".popupclose").click( function() {
    $(".popup").hide();
  });

  //lightbox opening logic. this is... extremely messy but we're on a time crunch here. will clean up if i get the chance

  $(".lightbox_trigger.i1").click(function() {
    $(".lightbox.i1").show();
  });

  $(".lightbox_trigger.i2").click(function() {
    $(".lightbox.i2").show();
  });

  $(".lightbox_trigger.i3").click(function() {
    $(".lightbox.i3").show();
  });

  $(".lightbox_trigger.i4").click(function() {
    $(".lightbox.i4").show();
  });

  $(".lightbox_trigger.i5").click(function() {
    $(".lightbox.i5").show();
  });

  $(".lightbox_trigger.i6").click(function() {
    $(".lightbox.i6").show();
  });

  $(".lightbox_trigger.i7").click(function() {
    $(".lightbox.i7").show();
  });

  $(".lightbox_trigger.i8").click(function() {
    $(".lightbox.i8").show();
  });


  //lightbox closing. equally messy lol. but again. very little time to fix right now

  $(".imageclose.i1").click(function() {
    $(".lightbox.i1").hide();
  });

  $(".imageclose.i2").click(function() {
    $(".lightbox.i2").hide();
  });

  $(".imageclose.i3").click(function() {
    $(".lightbox.i3").hide();
  });

  $(".imageclose.i4").click(function() {
    $(".lightbox.i4").hide();
  });

  $(".imageclose.i5").click(function() {
    $(".lightbox.i5").hide();
  });

  $(".imageclose.i6").click(function() {
    $(".lightbox.i6").hide();
  });

  $(".imageclose.i7").click(function() {
    $(".lightbox.i7").hide();
  });

  $(".imageclose.i8").click(function() {
    $(".lightbox.i8").hide();
  });





  $( function() {
      $( ".draggable" ).draggable();
    } );


  $(".popupclose").click( function() {
    $(".popup").hide();
  });


});

var slideIndex = [1,1,1,1];
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (x.length > 0) {
    if (n > x.length) {slideIndex[no] = 1}
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    x[slideIndex[no]-1].style.display = "block";
  }
}
