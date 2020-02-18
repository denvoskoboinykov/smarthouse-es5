var Television = function(name, screenDiagonal) {
  Device.call(this, name);
  this._screenDiagonal = screenDiagonal;
  this._volume = new Range(0, 100, 50);
  this._saturation = new Range(0, 100, 50);
  this._brightness = new Range(0, 100, 100);
};

Television.prototype = Object.create(Device.prototype);
Television.prototype.constructor = Device;

Television.prototype.getScreenDiagonal = function() {
  return this._diagonal;
};

Television.prototype.getVolume = function() {
  return this._diagonal;
};

Television.prototype.getSaturation = function() {
  return this._diagonal;
};

Television.prototype.getBrightness = function() {
  return this._diagonal;
};

Television.prototype.setVolume = function(value) {
  this._volume.setValue(value);
};

Television.prototype.increaseVolume = function(value) {
  this._volume.increaseValue(value);
};

Television.prototype.decreaseVolume = function(value) {
  this._volume.decreaseValue(value);
};

Television.prototype.setSaturation = function(value) {
  this._saturation.setValue(value);
};

Television.prototype.increaseSaturation = function(value) {
  this._saturation.increaseValue(value);
};

Television.prototype.decreaseSaturation = function(value) {
  this._saturation.decreaseValue(value);
};

Television.prototype.setBrightness = function(value) {
  this._brightness.setValue(value);
};

Television.prototype.increaseBrightness = function(value) {
  this._brightness.increaseValue(value);
};

Television.prototype.decreaseBrightness = function(value) {
  this._brightness.decreaseValue(value);
};
