import { expect } from 'chai';
import { describe, it } from 'mocha';
import { sum, multiply } from '../src/arithmetics';

describe('testapp tests', () => {
    it('1 + 1 should return 2', () => {
        expect(sum(1, 1)).to.equal(2);
    });

    it('1 + 2 + 3 should return 6', () => {
        expect(sum(1, 2, 3)).to.equal(6);
    });

    it('2 * 2 should return 4', () => {
        expect(multiply(2, 2)).to.equal(4);
    });
});
