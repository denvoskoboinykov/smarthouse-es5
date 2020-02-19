var Device = function(id, name) {
  this._id = id;
  this._name = name;
  this._state = false;
};

Device.prototype.getId = function() {
  return this._id;
};

Device.prototype.getState = function() {
  return this._state;
};

Device.prototype.getName = function() {
  return this._name;
};

Device.prototype.setName = function(name) {
  this._name = name;
};

Device.prototype.toggleState = function() {
  this._state = !this._state;
};

Device.prototype.disable = function() {
  this._state = false;
};

Device.prototype.enable = function() {
  this._state = true;
};
