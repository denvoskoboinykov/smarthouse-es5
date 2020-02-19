var Lamp = function(id, name, brightness, color) {
  Device.call(this, id, name);
  this._brightness = brightness;
  this._activeColor = color;
};

Lamp.prototype = Object.create(Device.prototype);
Lamp.prototype.constructor = Device;

Lamp.prototype.getBrightness = function() {
  return this._brightness.getCurrentValue();
};

Lamp.prototype.getActiveColor = function() {
  return [
    this._activeColor.getRed(),
    this._activeColor.getGreen(),
    this._activeColor.getBlue(),
  ];
};

Lamp.prototype.setBrightness = function(value) {
  this._brightness.setValue(value);
};

Lamp.prototype.increaseBrightness = function(value) {
  this._brightness.increaseValue(value);
};

Lamp.prototype.decreaseBrightness = function(value) {
  this._brightness.decreaseValue(value);
};

Lamp.prototype.setRed = function(value) {
  this._activeColor.setRedValue(value);
};

Lamp.prototype.increaseRed = function(value) {
  this._activeColor.increaseRedValue(value);
};

Lamp.prototype.decreaseRed = function(value) {
  this._activeColor.decreaseRedValue(value);
};

Lamp.prototype.setGreen = function(value) {
  this._activeColor.setGreenValue(value);
};

Lamp.prototype.increaseGreen = function(value) {
  this._activeColor.increaseGreenValue(value);
};

Lamp.prototype.decreaseGreen = function(value) {
  this._activeColor.decreaseGreenValue(value);
};

Lamp.prototype.setBlue = function(value) {
  this._activeColor.setBlueValue(value);
};

Lamp.prototype.increaseBlue = function(value) {
  this._activeColor.increaseBlueValue(value);
};

Lamp.prototype.decreaseBlue = function(value) {
  this._activeColor.decreaseBlueValue(value);
};
