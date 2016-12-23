import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day23Step1 } from '.';

describe('day-23-s1', () => {
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it('Exemple...', () => {
        let day = new Day23Step1('assets/day-23-test.txt');
        day.filename = 'assets/day-23-test.txt';
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.equal(3);
    });
    it('Input...', () => {
        let day = new Day23Step1('assets/day-23.txt');
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.equal(318007);
    });
});