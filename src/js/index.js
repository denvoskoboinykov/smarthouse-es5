//some tests
var television = new Television('LG', 35);
var lamp = new Lamp('RGB-Lamp-143');

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
