import { expect } from 'chai';
import { parseInputParametersToVariables } from './parseInputParametersToVariables';

describe.only('Testing parseInputParametersToVariables function', () => {

    it('Should return empty array, if called with null', () => {
        expect(parseInputParametersToVariables(null as any)).to.deep.equal([]);
    });

    it('Should return empy array, if called with string of 0 characters', () => {
        expect(parseInputParametersToVariables('')).to.deep.equal([]);
    });

    it('If called with invalid syntax, i.e. multiple commas', () => {
        expect(() => parseInputParametersToVariables('foo,bar,')).to.throw(/(unvalid input parameters)/);
    });

    it('If called with valid params, should return array of variables', () => {
        expect(parseInputParametersToVariables('foo=bar')).to.deep.equal([
            {id: 'foo', value: 'bar'}
        ]);
    });
});
