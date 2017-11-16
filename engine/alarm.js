/**
 * core alarm class implementation .
 *
 * @file alarm.js
 * @author Hawk Bokdol Hyouck Kim, hawk.kim1974@gmail.com
 * @version 0.1
 */
var assert  = require('assert');
var channel = require('channel');

const AlarmState = {
  NORMAL    : 'Normal',
  ALARM     : 'Alarm'
};

const AlarmAckState = {
  NOT_ACK   : 'NotAcked',
  ACK       : 'Acked'
};

/**
 * core base alarm class implementation.
 *
 * alarm state
 * - normal   : alarm condition is not met. No alarm state
 * - active   : alarm condition is met. alarm state
 *
 * ack state
 * - not_acked  : alarm is not acked by user
 * - acked      : alarm is acked by user
 */
function Alarm(alarm_num, name, chnl, cond) {
  this.alarm_num    = alarm_num;        /** alarm number : must be unique among alarms  */
  this.name         = name;             /** alarm string description                    */
  this.chnl         = chnl;             /** associated channel number                   */
  this.alarm_time   = new Date();       /** last time alarm occurred                    */
  this.alarm_state  = AlarmState.NORMAL;
  this.ack_state    = AlarmAckState.NOT_ACK;

  // in case of digital channel
  // alarm condition is either true or false
  //
  // in case of analog channel
  // alarm condition is when the channel value is either out of range or within range
  //
  this.cond         = cond;             /** alarm condition : depends on associated
                                            channel and alarm configuration */
}

Alarm.prototype = {
  constructor: Alarm,

  /**
   * @function Alarm.toString()
   * returns string description of a channel mostly for debugging purpose.
   */
  toString: function() {
    return "Alarm " + this.alarm_num + ":" + this.name;
  },

  /**
   * @function Alarm.getAlarmState()
   * returns current alarm state of the Alarm object.
   */
  getAlarmState : function() {
    return this.alarm_state;
  },

  /**
   * @function Alarm.getAckState()
   * returns current ack state of the Alarm object.
   */
  getAckState : function() {
    return this.ack_state;
  },

  /**
   * @function Alarm.getLastAlarmTime()
   * returns last time alarm occurred. Returns Date object.
   */
  getAlarmTime : function() {
    return this.alarm_time;
  },

  /**
   * @function Alarm.ack()
   * acknowledges current alarm.
   * if alarm is in Alarm state, 
   */
  ack : function() {
    if(this.alarm_state == AlarmState.ALARM && this.ack_state == AlarmAckState.NOT_ACK)
    {
      this.ack_state = AlarmAckState.ACK;
    }
  },

  update : function() {
  }
};
