import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day8Step1 } from '.';

describe('day-08-s1', () => {
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it('rect 3x2 creates a small rectangle in the top-left corner', () => {
        let day = new Day8Step1(7, 3);
        // Act
        let result = day.execute('rect 3x2');
        // Assert
        expect(result).to.be.equal(6);
        expect(day.screen.toString().replace(/\n/g, '')).to.be.equal('***    ***           ');
    });
    it('rotate column x=1 by 1 rotates the second column down by one pixel:', () => {
        let day = new Day8Step1(7, 3);
        // Act
        let result = day.execute('rect 3x2\nrotate column x=1 by 1');
        // Assert
        expect(result).to.be.equal(6);
        expect(day.screen.toString().replace(/\n/g, '')).to.be.equal('* *    ***     *     ');
    });
    it('rotate row y=0 by 4 rotates the top row right by four pixels:', () => {
        let day = new Day8Step1(7, 3);
        // Act
        let result = day.execute('rect 3x2\nrotate column x=1 by 1\nrotate row y=0 by 4');
        // Assert
        expect(result).to.be.equal(6);
        expect(day.screen.toString().replace(/\n/g, '')).to.be.equal('    * ****     *     ');
    });
    it('rotate column x=1 by 1...', () => {
        let day = new Day8Step1(7, 3);
        // Act
        let result = day.execute('rect 3x2\nrotate column x=1 by 1\nrotate row y=0 by 4\nrotate column x=1 by 1');
        // Assert
        expect(result).to.be.equal(6);
        expect(day.screen.toString().replace(/\n/g, '')).to.be.equal(' *  * ** *     *     ');
    });
    it('Input...', () => {
        let day = new Day8Step1(50, 6);
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.equal(119);
    });
});