var makeYellowBlinkyDancer = function (top, left, timeBetweenSteps) {
    makeBlinkyDancer.call(this, top, left, timeBetweenSteps);

}


makeYellowBlinkyDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makeYellowBlinkyDancer.prototype.constructor = makeYellowBlinkyDancer;


makeYellowBlinkyDancer.prototype.step = function () {
  makeBlinkyDancer.prototype.step.call(this);
  this.$node.css({'border-color': 'yellow'});
}
