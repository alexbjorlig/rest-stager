
import { vCheck } from './variable';

describe('Testing variables', () =>  {

    describe('the vCheck function', () =>  {
        it(`vCheck should return true with the following string: /a/simple/{{v_test}}`, () =>  {
            const result = vCheck('/a/simple/{{v_test}}');
            expect(result).toEqual(true);
        });

        it(`vCheck should return false with the following string: '/a/simple/v_test/test'`, () =>  {
            const result = vCheck('/a/simple/v_test/test');
            expect(result).toEqual(false);
        });

        it(`vCheck should return false, when given an empty string`, () =>  {
            const result = vCheck('');
            expect(result).toEqual(false);
        });
    });

});
