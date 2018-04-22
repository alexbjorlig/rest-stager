import { round } from 'lodash';

/**
 * The purpose of this simple function is to convert Bytes to MB,
 * and then do a simple rounding
 * @export
 * @param {number} inputNumberInBytes
 * @returns
 */
export function convertBytesToMB(inputNumberInBytes: number) {
    const numberInMB = inputNumberInBytes / 1048576;
    const roundedNumber = round(numberInMB, 2);
    return roundedNumber;
}
