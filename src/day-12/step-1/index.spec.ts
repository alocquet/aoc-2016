import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day12Step1 } from '.';

describe('day-12-s1', () => {
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it('Exemple...', () => {
        let day = new Day12Step1('assets/day-12-test.txt');
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.equal(42);
    });
    it('Input...', () => {
        let day = new Day12Step1('assets/day-12.txt');
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.equal(318007);
    });
});