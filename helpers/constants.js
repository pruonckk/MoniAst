const ROLE_STRING_CLIENT = 'Client';
const ROLE_STRING_ADMIN = 'Admin';

const ROLE_CLIENT = 5;
const ROLE_ADMIN = 10;

const SIP_STATUS_CODE_IDLE = '0';
const SIP_STATUS_CODE_IN_USE = '1';
const SIP_STATUS_CODE_BUSY = '2';
const SIP_STATUS_CODE_UNAVAILABLE = '4';
const SIP_STATUS_CODE_RINGING = '8';
const SIP_STATUS_CODE_ON_HOLD = '16';

const SIP_STATUS_IDLE = 'SIP_STATUS_IDLE';
const SIP_STATUS_IN_USE = 'SIP_STATUS_IN_USE';
const SIP_STATUS_BUSY = 'SIP_STATUS_BUSY';
const SIP_STATUS_UNAVAILABLE = 'SIP_STATUS_UNAVAILABLE';
const SIP_STATUS_RINGING = 'SIP_STATUS_RINGING';
const SIP_STATUS_ON_HOLD = 'SIP_STATUS_ON_HOLD';

const PJSIP_STATUS = {
  Unavailable: SIP_STATUS_UNAVAILABLE,
  Ringing: SIP_STATUS_RINGING,
  Onhold: SIP_STATUS_ON_HOLD,
  Inuse: SIP_STATUS_IN_USE,
  Not_inuse: SIP_STATUS_IN_USE,
  Ringinuse: SIP_STATUS_RINGING,
  Busy: SIP_STATUS_BUSY
};

const SIP_STATUS = {
  0: 'SIP_STATUS_IDLE',
  1: 'SIP_STATUS_IN_USE',
  2: 'SIP_STATUS_BUSY',
  4: 'SIP_STATUS_UNAVAILABLE',
  8: 'SIP_STATUS_RINGING',
  16: 'SIP_STATUS_ON_HOLD'
};

const QUEUE_MEMBER_STATUS = {
  '0': 'SIP_STATUS_UNAVAILABLE', //'AST_DEVICE_UNKNOWN',
  '1': 'SIP_STATUS_IDLE',
  '2': 'SIP_STATUS_IN_USE',
  '3': 'SIP_STATUS_BUSY',
  '4': 'SIP_STATUS_UNAVAILABLE', //'AST_DEVICE_INVALID',
  '5': 'SIP_STATUS_UNAVAILABLE',
  '6': 'SIP_STATUS_RINGING',
  '7': 'SIP_STATUS_IN_USE', //'AST_DEVICE_RINGINUSE',
  '8': 'SIP_STATUS_ON_HOLD'
};

const CHANNEL_STATUS_DOWN_AVAILABLE = 'CHANNEL_STATUS_DOWN_AVAILABLE';
const CHANNEL_STATUS_DOWN_RESERVED = 'CHANNEL_STATUS_DOWN_RESERVED';
const CHANNEL_STATUS_OFF_HOOK = 'CHANNEL_STATUS_OFF_HOOK';
const CHANNEL_STATUS_DIGITS_DIALED = 'CHANNEL_STATUS_DIGITS_DIALED';
const CHANNEL_STATUS_OUT_RINGING = 'CHANNEL_STATUS_OUT_RINGING';
const CHANNEL_STATUS_IN_RINGING = 'CHANNEL_STATUS_IN_RINGING';
const CHANNEL_STATUS_UP = 'CHANNEL_STATUS_UP';
const CHANNEL_STATUS_BUSY = 'CHANNEL_STATUS_BUSY';

const CHANNEL_STATUS_CODE_DOWN_AVAILABLE = 0;
const CHANNEL_STATUS_CODE_DOWN_RESERVED = 1;
const CHANNEL_STATUS_CODE_OFF_HOOK = 2;
const CHANNEL_STATUS_CODE_DIGITS_DIALED = 3;
const CHANNEL_STATUS_CODE_OUT_RINGING = 4;
const CHANNEL_STATUS_CODE_IN_RINGING = 5;
const CHANNEL_STATUS_CODE_UP = 6;
const CHANNEL_STATUS_CODE_BUSY = 7;

const CHANNEL_STATUS = {
  0: 'CHANNEL_STATUS_DOWN_AVAILABLE',
  1: 'CHANNEL_STATUS_DOWN_RESERVED',
  2: 'CHANNEL_STATUS_OFF_HOOK',
  3: 'CHANNEL_STATUS_DIGITS_DIALED',
  4: 'CHANNEL_STATUS_OUT_RINGING',
  5: 'CHANNEL_STATUS_IN_RINGING',
  6: 'CHANNEL_STATUS_UP',
  7: 'CHANNEL_STATUS_BUSY'
};

module.exports = {
  ROLE_STRING_CLIENT,
  ROLE_STRING_ADMIN,
  ROLE_CLIENT,
  ROLE_ADMIN,

  SIP_STATUS_CODE_IDLE,
  SIP_STATUS_CODE_IN_USE,
  SIP_STATUS_CODE_BUSY,
  SIP_STATUS_CODE_UNAVAILABLE,
  SIP_STATUS_CODE_RINGING,
  SIP_STATUS_CODE_ON_HOLD,

  SIP_STATUS_IDLE,
  SIP_STATUS_IN_USE,
  SIP_STATUS_BUSY,
  SIP_STATUS_UNAVAILABLE,
  SIP_STATUS_RINGING,
  SIP_STATUS_ON_HOLD,

  SIP_STATUS,
  PJSIP_STATUS,
  QUEUE_MEMBER_STATUS,

  CHANNEL_STATUS_DOWN_AVAILABLE,
  CHANNEL_STATUS_DOWN_RESERVED,
  CHANNEL_STATUS_OFF_HOOK,
  CHANNEL_STATUS_DIGITS_DIALED,
  CHANNEL_STATUS_OUT_RINGING,
  CHANNEL_STATUS_IN_RINGING,
  CHANNEL_STATUS_UP,
  CHANNEL_STATUS_BUSY,

  CHANNEL_STATUS_CODE_DOWN_AVAILABLE,
  CHANNEL_STATUS_CODE_DOWN_RESERVED,
  CHANNEL_STATUS_CODE_OFF_HOOK,
  CHANNEL_STATUS_CODE_DIGITS_DIALED,
  CHANNEL_STATUS_CODE_OUT_RINGING,
  CHANNEL_STATUS_CODE_IN_RINGING,
  CHANNEL_STATUS_CODE_UP,
  CHANNEL_STATUS_CODE_BUSY,

  CHANNEL_STATUS
};
