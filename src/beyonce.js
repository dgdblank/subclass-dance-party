var makeJT = function (top, left, timeBetweenSteps) {
    makeDancer.call(this, top, left, timeBetweenSteps);
    this.$node  = $("<img src='./giphy.gif'>");

}


makeJT.prototype = Object.create(makeDancer.prototype);
makeJT.prototype.constructor = makeTJ;


makeTJ.prototype.step = function () {
  makeDancer.prototype.step.call(this);
}
