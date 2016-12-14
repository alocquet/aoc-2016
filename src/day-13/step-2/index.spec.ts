import { Position } from './../model';
import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day13Step2 } from '.';

describe('day-13-s2', () => {
    it('En 50 étapes avec le favoris 1364, on peut atteindre 127 positions', () => {
        let day = new Day13Step2(1364, 50);
        // Assert
        expect(day.execute()).to.be.equal(127);
    });
});