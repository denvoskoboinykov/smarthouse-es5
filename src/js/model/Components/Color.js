var Color = function() {
  this._red = new Range(0, 255, 255);
  this._green = new Range(0, 255, 255);
  this._blue = new Range(0, 255, 255);
};

Color.prototype.getRed = function() {
  return this._red;
};

Color.prototype.getGreen = function() {
  return this._green;
};

Color.prototype.getBlue = function() {
  return this._blue;
};

Color.prototype.setRedValue = function(value) {
  this._red.setValue(value);
};

Color.prototype.increaseRedValue = function(value) {
  this._red.increaseValue(value);
};

Color.prototype.decreaseRedValue = function(value) {
  this._red.decreaseValue(value);
};

Color.prototype.setGreenValue = function(value) {
  this._green.setValue(value);
};

Color.prototype.increaseGreenValue = function(value) {
  this._green.increaseValue(value);
};

Color.prototype.decreaseGreenValue = function(value) {
  this._green.decreaseValue(value);
};

Color.prototype.setBlueValue = function(value) {
  this._blue.setValue(value);
};

Color.prototype.increaseBlueValue = function(value) {
  this._blue.increaseValue(value);
};

Color.prototype.decreaseBlueValue = function(value) {
  this._blue.decreaseValue(value);
};
