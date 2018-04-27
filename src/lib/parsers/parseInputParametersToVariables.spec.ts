import { parseInputParametersToVariables } from './parseInputParametersToVariables';

describe('Testing parseInputParametersToVariables function', () => {

    it('Should return empty array, if called with null', () => {
        const result = parseInputParametersToVariables(null);
        expect(result).toEqual([]);
    });

    it('Should return empy array, if called with string of 0 characters', () => {
        expect(parseInputParametersToVariables('')).toEqual([]);
    });

    it('If called with invalid syntax, i.e. multiple commas', () => {
        expect(() => parseInputParametersToVariables('foo,bar,')).toThrowError(/(unvalid input parameters)/);
    });

    it('If called with valid params, should return array of variables', () => {
        expect(parseInputParametersToVariables('foo=bar')).toEqual([
            {id: 'foo', value: 'bar'}
        ]);
    });

    it('If called with valid params, should return array of variables', () => {
        expect(parseInputParametersToVariables('foo=bar,foo2=bar2')).toEqual([
            {id: 'foo', value: 'bar'}, {id: 'foo2', value: 'bar2'}
        ]);
    });

});
