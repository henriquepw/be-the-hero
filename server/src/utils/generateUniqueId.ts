import crypto from 'crypto';

export default () => crypto.randomBytes(4).toString('HEX');
