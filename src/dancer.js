var makeDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.step();
  this.setPosition(top, left);
};


makeDancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
}
makeDancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(xValue){
  this.setPosition(10, xValue);
}

makeDancer.prototype.lineUpVertical = function (fromTop, fromLeft) {
  this.setPosition(fromTop, fromLeft);
}














