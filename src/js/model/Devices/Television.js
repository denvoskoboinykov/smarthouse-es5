var Television = function(
  id,
  name,
  screenDiagonal,
  volume,
  saturation,
  brightness,
) {
  Device.call(this, id, name);
  this._screenDiagonal = screenDiagonal;
  this._volume = volume;
  this._saturation = saturation;
  this._brightness = brightness;
};

Television.prototype = Object.create(Device.prototype);
Television.prototype.constructor = Device;

Television.prototype.getScreenDiagonal = function() {
  return this._screenDiagonal;
};

Television.prototype.getVolume = function() {
  return this._volume.getCurrentValue();
};

Television.prototype.getSaturation = function() {
  return this._saturation.getCurrentValue();
};

Television.prototype.getBrightness = function() {
  return this._brightness.getCurrentValue();
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
