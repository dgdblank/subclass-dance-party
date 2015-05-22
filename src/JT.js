var makeJT = function (top, left, timeBetweenSteps) {
    makeDancer.call(this, top, left, timeBetweenSteps);
    this.$node.append("<img height='288px' width='200' src='./giphy-1.gif' >");
    this.$node.addClass('Justin');
}

makeJT.prototype = Object.create(makeDancer.prototype);
makeJT.prototype.constructor = makeJT;

makeJT.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.css({'border':'none'});
}
