//some tests
var volume = new Range(0, 100, 50);
var saturation = new Range(0, 100, 50);
var brightnessTV = new Range(0, 100, 100);

var brightnessLamp = new Range(0, 100, 100);
var color = new Color(
  new Range(0, 255, 255),
  new Range(0, 255, 255),
  new Range(0, 255, 255),
);

var television = new Television(
  Date.now().toString(),
  'LG',
  35,
  volume,
  saturation,
  brightnessTV,
);

var lamp = new Lamp(
  Date.now().toString(),
  'RGB-Lamp-143',
  brightnessLamp,
  color,
);

smartHouse.addDevice(television);
smartHouse.addDevice(lamp);

television.enable();
television.setVolume(73);
television.decreaseBrightness(18);
television.increaseSaturation(999);
television.toggleState();
television.enable();

console.log(television);

lamp.enable();
lamp.decreaseBrightness(841250);
lamp.setBlue(500);
lamp.decreaseGreen(-150);
lamp.setRed(177);

console.log(lamp);
