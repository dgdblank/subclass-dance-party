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
      $('.dancer').draggable();
    });
  });

  $(".lineupButton").on("click", function(){
    var xValue = 10;
    for(var i = 0; i < window.dancers.length; i++){
      window.dancers[i].lineUp(xValue);
      xValue += 200;
    }
  });

  $(".danceOff").on("click", function () {
    // we have an array of dancers
    // randomize 2 of them, push into a seprate array
    // position the 2 at the middle of the screen  50 px apart,
    // the rest, half on the left of the screen. half on the right of the screen
    // var leftHalf = [];
    // var rightHalf = [];
    var fromLeftFirstGroup = 100;
    var fromLeftSecoundGroup = 800;
    var startFromTopFirstGroup = 5;
    var startFromTopSecondGroup = 5;
    for (var i = 0; i<window.dancers.length; i++) {
      if (i<window.dancers.length/2) {
        // leftHalf.push(window.dancers[i]);
        window.dancers[i].lineUpVertical(startFromTopFirstGroup, fromLeftFirstGroup);
        startFromTopFirstGroup += 200;
      } else {
        // rightHalf.push(window.dancers[i]);
        window.dancers[i].lineUpVertical(startFromTopSecondGroup, fromLeftSecoundGroup);
        startFromTopSecondGroup += 200;
      }
    }

    $('window.dancers[0]').animate({'left': +300px'}, 'slow');
  })



});

