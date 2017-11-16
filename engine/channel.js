/**
 * core channel class implementation .
 *
 * @file channel.js
 * @author Hawk Bokdol Hyouck Kim, hawk.kim1974@gmail.com
 * @version 0.1
 *
 * TODO
 * a) channel filter
 * b) raw value & engineering value
 * c) lookup table
 */
var assert = require('assert');

/**
 * channel type enum
 * DIGITAL  : a channel with only on or off value
 * ANALOG   : a channel with analog values.
 */
const ChannelType = {
  DIGITAL : 'Digital',
  ANALOG  : 'Analog'
};

/**
 * channel direction
 * INPUT  : channel is associated with physical input 
 * OUTPUT : channel is associated with physical output 
 * VIRTUAL: channel has no association with any physical I/O
 */
const ChannelDirection = {
  INPUT   : 'Input',
  OUTPUT  : 'Output',
  VIRTUAL : 'Virtual'
};

/**
 * core base Channel class implementation.
 * 
 */
function Channel(chnl_num, name, chnl_type, chnl_dir) {
  this.chnl_num     = chnl_num;         /** channel number. must be unique      */
  this.name         = name;             /** channel string description          */
  this.chnl_type    = chnl_type;        /** channel type : digital or analog    */
  this.chnl_dir     = chnl_dir;         /** channel direction : In/Out/Virtual  */
  this.sensor_fault = false;            /** channel fault statue                */

  switch(this.chnl_type)
  {
  case ChannelType.DIGITAL:
    this.value  = false;
    break;

  case ChannelType.ANALOG:
    this.value  = 0;
    break;

  default:
    assert.fail('***** BUG: Invalid Channel Type ****' + this.chnl_type);
    break;
  }
}

Channel.prototype = {
  constructor: Channel,
  /** 
   * @function Channel.toString()
   * returns string description of a channel mostly for debugging purpose.
   */
  toString : function() {
    return "Channel " + this.chnl_num + ":" + this.name;
  },

  /** 
   * @function Channel.getValue()
   * returns current value of the channel.
   * value types depend on channel type.
   */
  getValue : function() {
    return this.value;
  },

  /** 
   * @function Channel.setValue(value)
   * sets the current value of the channel.
   * value types should match the channel type.
   *
   * @param value new value for channel
   */
  setValue : function(value) {
    this.value = value;
  },

  /** 
   * @function Channel.getChnlNum()
   * returns the channel number of the channel.
   */
  getChnlNum : function() {
    return this.chnl_num;
  },

  /** 
   * @function Channel.getChnlName()
   * returns the channel name of the channel.
   */
  getChnlName : function() {
    return this.name;
  },

  /** 
   * @function Channel.getSensorFault()
   * returns the sensor fault status (true or false) of the channel.
   */
  getSensorFault : function() {
    return this.sensor_fault;
  },

  /** 
   * @function Channel.getChnlName(value)
   * sets the sensor fault status of the channel.
   *
   * @param new sensor fault status(boolean)
   */
  setSensorFault: function(value) {
    this.sensor_fault = value;
  }
};

module.exports = {
  createAnalogIn: function(chnl_num, name) {
    return new Channel(chnl_num, name, ChannelType.ANALOG, ChannelDirection.INPUT);
  },
  createAnalogOut: function(chnl_num, name) {
    return new Channel(chnl_num, name, ChannelType.ANALOG, ChannelDirection.OUTPUT);
  },
  createAnalogVirtual: function(chnl_num, name) {
    return new Channel(chnl_num, name, ChannelType.ANALOG, ChannelDirection.VIRTUAL);
  },
  createDigitalIn: function(chnl_num, name) {
    return new Channel(chnl_num, name, ChannelType.DIGITAL, ChannelDirection.INPUT);
  },
  createDigitalOut: function(chnl_num, name) {
    return new Channel(chnl_num, name, ChannelType.DIGITAL, ChannelDirection.OUTPUT);
  },
  createDigitalVirtual: function(chnl_num, name) {
    return new Channel(chnl_num, name, ChannelType.DIGITAL, ChannelDirection.VIRTUAL);
  },
  ChannelType : ChannelType,
  ChannelDirection : ChannelDirection
};
