var test = require('tape');
var alarm = require('../engine/alarm');

test('Engine:Alarm:Test Basic', function(assert) {
  var alm = alarm.createAlarm(1, "Basic Alarm Test", null, alarm.AlarmSeverity.CRITICAL, null);

  assert.true(alm != null, "alarm object is not null");
  assert.true(alm.getAlarmNum() == 1 , "alarm number test passed");
  assert.true(alm.getName() == "Basic Alarm Test" , "alarm name test passed");
  assert.true(alm.getChannel() == null, "alarm channel test passed");
  assert.true(alm.getAlarmState() == alarm.AlarmState.NORMAL, "initial alarm state test passed");
  assert.true(alm.getAckState() == alarm.AlarmAckState.NOT_ACK, "initial ack state test passed");
  assert.true(alm.getAckState() == alarm.AlarmAckState.NOT_ACK, "initial ack state test passed");
  assert.true(alm.getAlarmTime() != null, "initial alarm time test passed");
  assert.true(alm.getSeverity() == alarm.AlarmSeverity.CRITICAL, "severity check test passed");
  assert.end();
});
