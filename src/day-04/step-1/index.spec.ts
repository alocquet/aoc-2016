import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day4Step1 } from '.';

describe("day-04-s1", () => {
    let day = new Day4Step1();
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it("aaaaa-bbb-z-y-x-123[abxyz] is a real room because the most common letters are a (5), b (3), and then a tie between x, y, and z, which are listed alphabetically.", () => {
        // Act
        let result = day.execute('aaaaa-bbb-z-y-x-123[abxyz]');
        // Assert
        expect(result).to.be.equal(123);
    });
    it("a-b-c-d-e-f-g-h-987[abcde] is a real room because although the letters are all tied (1 of each), the first five are listed alphabetically.", () => {
        // Act
        let result = day.execute('a-b-c-d-e-f-g-h-987[abcde]');
        // Assert
        expect(result).to.be.equal(987);
    });
    it("not-a-real-room-404[oarel] is a real room.", () => {
        // Act
        let result = day.execute('not-a-real-room-404[oarel]');
        // Assert
        expect(result).to.be.equal(404);
    });
    it("totally-real-room-200[decoy] is not.", () => {
        // Act
        let result = day.execute('totally-real-room-200[decoy]');
        // Assert
        expect(result).to.be.equal(0);
    });
    it("Input...", () => {
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.equal(245102);
    });
});