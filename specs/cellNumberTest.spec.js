import { expect } from 'chai';
import { isValidateSAPhoneNumber } from '../src/phoneNumber.js';

describe('isValidateSAPhoneNumber', () => {
    it('Validation for valid South African phone numbers', () => {
      expect(isValidateSAPhoneNumber('+27831234567')).to.be.true;
      expect(isValidateSAPhoneNumber('0831234567')).to.be.true;
      expect(isValidateSAPhoneNumber('0645678901')).to.be.true;
    });
  
    it('Validation for invalid South African phone numbers', () => {
      expect(isValidateSAPhoneNumber('1234567890')).to.be.false; // Invalid length
      expect(isValidateSAPhoneNumber('+271234567890')).to.be.false; // Invalid prefix
      expect(isValidateSAPhoneNumber('072abcdefg')).to.be.false; // Invalid characters
    });
  });