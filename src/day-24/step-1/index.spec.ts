import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day24Step1 } from '.';

describe('day-24-s1', () => {
    let day = new Day24Step1('assets/day-24.txt');
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it('Exemple...', () => {
        // Act
        let result = day.execute(`###########
#0.1.....2#
#.#######.#
#4.......3#
###########`);
        // Assert
        expect(result).to.be.equal(14);
    });
    it('Input...', function() {
        this.timeout(3000);
        // Act
        let result = day.run();
        // Assert
        return result.should.eventually.equal(462);
    });
});