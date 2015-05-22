$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 500
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

    $(function() {
      $(".dancer").draggable();
    });


    // $(".dancer").mouseenter(function(){
    //   // $(this).animate({rotate: '+=10deg'}, 0);
    //   $(this).addClass("rotate");
    // });
    // $(".dancer").mouseleave(function(){
    //   // $(this).animate({rotate: '+=10deg'}, 0);
    //   $(this).removeClass("rotate");
    // });


  $(".lineupButton").on("click", function(){
    var xValue = 10;
    for(var i = 0; i < window.dancers.length; i++){
      window.dancers[i].lineUp(xValue);
      xValue += 200;
    }
  });

  $(".danceOff").on("click", function () {
    var fromLeftFirstGroup = 100;
    var fromLeftSecoundGroup = 800;
    var startFromTopFirstGroup = 50;
    var startFromTopSecondGroup = 50;
    for (var i = 0; i<window.dancers.length; i++) {
      if (i<window.dancers.length/2) {
        window.dancers[i].lineUpVertical(startFromTopFirstGroup, fromLeftFirstGroup);
        startFromTopFirstGroup += 200;
      } else {
        window.dancers[i].lineUpVertical(startFromTopSecondGroup, fromLeftSecoundGroup);
        startFromTopSecondGroup += 200;
      }
    }
  });

//   var $dancer = $('.dancer');
//   var rotate = function(){
//     $(this).rotate({ count:4, duration:0.6, easing:'ease-out' });
//   }

// var pleaseRotate = rotate.bind($dancer);

//  $('.dancer').click(pleaseRotate);
  });
});
