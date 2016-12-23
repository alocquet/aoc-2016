import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day23Step2 } from '.';

describe('day-23-s2', () => {
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it('Input...', () => {
        let day = new Day23Step2('assets/day-23-2.txt');
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.equal(479009133);
    });
});