import { expect } from 'chai';
import { convertBytesToMB } from './utils';

describe('the convertBytesToMb function', () =>  {

    it(`convertBytesToMb should return 0,12 when given 123892 `, () =>  {
        const result = convertBytesToMB(123892);
        expect(result).to.equal(0.12);
    });

    it(`convertBytesToMb should return 0 when given 0 `, () =>  {
        const result = convertBytesToMB(0);
        expect(result).to.equal(0);
    });

    it(`convertBytesToMb should return 0 when given null `, () =>  {
        const result = convertBytesToMB(null);
        expect(result).to.equal(0);
    });
});
