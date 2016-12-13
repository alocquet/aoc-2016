import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day12Step2 } from '.';

describe('day-12-s2', () => {
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it('Exemple...', () => {
        let day = new Day12Step2();
        day.filename = 'assets/day-12-test.txt';
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.equal(42);
    });
    it('Input...', function() {
        this.timeout(10000);
        let day = new Day12Step2();
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.equal(9227661);
    });
});