var test = require('tape');
var channel = require('../engine/channel');

test('Eninge:Channel:Test-Analog Input Channel', function(assert) {
  var chnl = channel.createAnalogIn(1, "Test 1 Analog Channel");
  assert.true(chnl != null, "channel object is not null");
  assert.true(chnl.getChnlNum() == 1, "channel number is 1");
  assert.true(chnl.getChnlName() == 'Test 1 Analog Channel', 'channel name is ok');
  assert.true(chnl.chnl_type == channel.ChannelType.ANALOG, 'channel is analog channel');
  assert.true(chnl.chnl_dir  == channel.ChannelDirection.INPUT, 'channel is input channel');
  assert.true(chnl.getValue() == 0, "channel initial value is 0");
  chnl.setValue(0.5);
  assert.true(chnl.getValue() == 0.5, "channel value is 0.5");
  assert.end();
});

test('Eninge:Channel:Test-Analog Output Channel', function(assert) {
  var chnl = channel.createAnalogOut(2, "Test 2 Analog Channel");
  assert.true(chnl != null, "channel object is not null");
  assert.true(chnl.getChnlNum() == 2, "channel number is 2");
  assert.true(chnl.getChnlName() == 'Test 2 Analog Channel', 'channel name is ok');
  assert.true(chnl.chnl_type == channel.ChannelType.ANALOG, 'channel is analog channel');
  assert.true(chnl.chnl_dir  == channel.ChannelDirection.OUTPUT, 'channel is output channel');
  assert.true(chnl.getValue() == 0, "channel initial value is 0");
  chnl.setValue(0.5);
  assert.true(chnl.getValue() == 0.5, "channel value is 0.5");
  assert.end();
});

test('Eninge:Channel:Test-Analog Virtual Channel', function(assert) {
  var chnl = channel.createAnalogVirtual(3, "Test 3 Analog Virtual Channel");
  assert.true(chnl != null, "channel object is not null");
  assert.true(chnl.getChnlNum() == 3, "channel number is 3");
  assert.true(chnl.getChnlName() == 'Test 3 Analog Virtual Channel', 'channel name is ok');
  assert.true(chnl.chnl_type == channel.ChannelType.ANALOG, 'channel is analog channel');
  assert.true(chnl.chnl_dir  == channel.ChannelDirection.VIRTUAL, 'channel is virtual channel');
  assert.true(chnl.getValue() == 0, "channel initial value is 0");
  chnl.setValue(0.5);
  assert.true(chnl.getValue() == 0.5, "channel value is 0.5");
  assert.end();
});

test('Eninge:Channel:Test-Digital Input Channel', function(assert) {
  var chnl = channel.createDigitalIn(4, "Test 4 Digital Input Channel");
  assert.true(chnl != null, "channel object is not null");
  assert.true(chnl.getChnlNum() == 4, "channel number is 4");
  assert.true(chnl.getChnlName() == 'Test 4 Digital Input Channel', 'channel name is ok');
  assert.true(chnl.chnl_type == channel.ChannelType.DIGITAL, 'channel is digital channel');
  assert.true(chnl.chnl_dir  == channel.ChannelDirection.INPUT, 'channel is input channel');
  assert.true(chnl.getValue() == false, "channel initial value is false");
  chnl.setValue(true);
  assert.true(chnl.getValue() == true, "channel value is true");
  assert.end();
});

test('Eninge:Channel:Test-Digital Output Channel', function(assert) {
  var chnl = channel.createDigitalOut(5, "Test 5 Digital Output Channel");
  assert.true(chnl != null, "channel object is not null");
  assert.true(chnl.getChnlNum() == 5, "channel number is 5");
  assert.true(chnl.getChnlName() == 'Test 5 Digital Output Channel', 'channel name is ok');
  assert.true(chnl.chnl_type == channel.ChannelType.DIGITAL, 'channel is digital channel');
  assert.true(chnl.chnl_dir  == channel.ChannelDirection.OUTPUT, 'channel is output channel');
  assert.true(chnl.getValue() == false, "channel initial value is false");
  chnl.setValue(true);
  assert.true(chnl.getValue() == true, "channel value is true");
  assert.end();
});

test('Eninge:Channel:Test-Digital Virtual Channel', function(assert) {
  var chnl = channel.createDigitalVirtual(6, "Test 6 Digital Virtual Channel");
  assert.true(chnl != null, "channel object is not null");
  assert.true(chnl.getChnlNum() == 6, "channel number is 6");
  assert.true(chnl.getChnlName() == 'Test 6 Digital Virtual Channel', 'channel name is ok');
  assert.true(chnl.chnl_type == channel.ChannelType.DIGITAL, 'channel is digital channel');
  assert.true(chnl.chnl_dir  == channel.ChannelDirection.VIRTUAL, 'channel is virtual channel');
  assert.true(chnl.getValue() == false, "channel initial value is false");
  chnl.setValue(true);
  assert.true(chnl.getValue() == true, "channel value is true");
  assert.end();
});

test('Eninge:Channel:Test Sensor Fault', function(assert) {
  var chnl = channel.createDigitalVirtual(7, "Test 7 Digital Virtual Channel");
  assert.true(chnl != null, "channel object is not null");
  assert.true(chnl.getSensorFault() == false, 'channel initial sensor fault is ok');

  chnl.setSensorFault(true);
  assert.true(chnl.getSensorFault() == true, "channel sensor fault is true");
  assert.end();
});
