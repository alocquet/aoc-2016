import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day6Step1 } from '.';

describe("day-06-s1", () => {
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it("Exemple...", () => {
        let day = new Day6Step1();
        day.filename = 'assets/day-06-test.txt';
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.equal('easter');
    });
    it("Input...", () => {
        let day = new Day6Step1();
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.equal('dzqckwsd');
    });
});