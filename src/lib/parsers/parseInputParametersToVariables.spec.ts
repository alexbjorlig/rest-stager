import { expect } from 'chai';
import { parseInputParametersToVariables } from './parseInputParametersToVariables';

describe('Testing parseInputParametersToVariables function', () => {

    it('Should return empty array, if called with null', () => {
        const result = parseInputParametersToVariables(null);
        expect(result).to.deep.equal([]);
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

    it('If called with valid params, should return array of variables', () => {
        expect(parseInputParametersToVariables('foo=bar,foo2=bar2')).to.deep.equal([
            {id: 'foo', value: 'bar'}, {id: 'foo2', value: 'bar2'}
        ]);
    });

});
