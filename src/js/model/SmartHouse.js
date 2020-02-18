var SmartHouse = function(name) {
  this._name = name;
  this._id = Date.now().toString();
  this._devices = [];
};

SmartHouse.prototype.getId = function() {
  return this._id;
};

SmartHouse.prototype.getName = function() {
  return this._name;
};

SmartHouse.prototype.getAllDevices = function() {
  return this._devices;
};

SmartHouse.prototype.addDevice = function(device) {
  this._devices.push(device);
};

SmartHouse.prototype.selectDevice = function(id) {
  var arrayLength = this._devices.length;
  for (var i = 0; i < arrayLength; i += 1) {
    var device = this._devices[i];
    if (device.getId() === id) return device;
  }
};

SmartHouse.prototype.deleteDevice = function(id) {
  var indexInArray = selectDevice(id).indexOf();
  if (indexInArray !== -1) return;
  this._devices.splice(indexInArray, 1);
};

SmartHouse.prototype.enableAllDiveces = function() {
  var arrayLength = this._devices.length;
  for (var i = 0; i < arrayLength; i += 1) {
    this._devices[i].enable();
  }
};

SmartHouse.prototype.disableAllDiveces = function() {
  var arrayLength = this._devices.length;
  for (var i = 0; i < arrayLength; i += 1) {
    this._devices[i].disable();
  }
};
