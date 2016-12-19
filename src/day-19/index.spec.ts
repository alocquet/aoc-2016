import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day19 } from './day-19';

describe('day-19', () => {
    let day = new Day19();
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it('With 5 elves, the last elve with present is 3', () => {
        // Act
        let result = day.execute(5);
        // Assert
         expect(result).to.be.equal(3);
    });
    it('With 3014387 elves, the last elve with present is 3', () => {
        // Act
        let result = day.execute(3014387);
        // Assert
         expect(result).to.be.equal(1834471);
    });
});