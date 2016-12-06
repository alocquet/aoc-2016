import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day1Step1 } from '.';

describe("day-01", () => {
    let day1Step1 = new Day1Step1();
    before(() => {
        use(chaiAsPromised);
        should();
    });

    it("Following R2, L3 leaves you 2 blocks East and 3 blocks North, or 5 blocks away.", () => {
        // Act
        let result = day1Step1.execute('R2, L3');
        // Assert
        expect(result).to.be.equal(5);
    });
    it("R2, R2, R2 leaves you 2 blocks due South of your starting position, which is 2 blocks away.", () => {
        // Act
        let result = day1Step1.execute('R2, R2, R2');
        // Assert
        expect(result).to.be.equal(2);
    });
    it("R5, L5, R5, R3 leaves you 12 blocks away.", () => {
        // Act
        let result = day1Step1.execute('R5, L5, R5, R3');
        // Assert
        expect(result).to.be.equal(12);
    });
});