var Range = function(min, max, initialValue) {
  this._minValue = min;
  this._maxValue = max;
  this._currentValue = initialValue;
};

Range.prototype.getMinValue = function() {
  return this._minValue;
};

Range.prototype.getMaxValue = function() {
  return this._maxValue;
};

Range.prototype.getCurrentValue = function() {
  return this._currentValue;
};

Range.prototype.setValue = function(value) {
  if (value < this._minValue || value > this._maxValue) return;
  this._currentValue = value;
};

Range.prototype.increaseValue = function(value) {
  if (value <= 0) return;
  var expectedValue = this._currentValue + value;
  if (expectedValue > this._maxValue) {
    this._currentValue = this._maxValue;
    return;
  }
  this._currentValue = expectedValue;
};

Range.prototype.decreaseValue = function(value) {
  if (value <= 0) return;
  var expectedValue = this._currentValue - value;
  if (expectedValue < this._minValue) {
    this._currentValue = this._minValue;
    return;
  }
  this._currentValue = expectedValue;
};
