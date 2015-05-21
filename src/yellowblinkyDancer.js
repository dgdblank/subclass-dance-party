var makeYellowBlinkyDancer = function (top, left, timeBetweenSteps) {
    makeDancer.call(this, top, left, timeBetweenSteps);

}


makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeYellowBlinkyDancer;
makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step;

makeBlinkyDancer.prototype.step = function () {
  this.oldStep();
  this.$node.toggle();
}
