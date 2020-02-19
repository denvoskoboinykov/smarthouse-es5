var Range = function(min, max, initialValue) {
  this._min = min;
  this._max = max;
  this._currentValue = initialValue;
};

Range.prototype.getMin = function() {
  return this._min;
};

Range.prototype.getMax = function() {
  return this._max;
};

Range.prototype.getCurrentValue = function() {
  return this._currentValue;
};

Range.prototype.setValue = function(value) {
  if (value < this._min || value > this._max) return;
  this._currentValue = value;
};

Range.prototype.increaseValue = function(value) {
  if (value <= 0) return;
  var expectedValue = this._currentValue + value;
  if (expectedValue > this._max) {
    this._currentValue = this._max;
    return;
  }
  this._currentValue = expectedValue;
};

Range.prototype.decreaseValue = function(value) {
  if (value <= 0) return;
  var expectedValue = this._currentValue - value;
  if (expectedValue < this._min) {
    this._currentValue = this._min;
    return;
  }
  this._currentValue = expectedValue;
};
