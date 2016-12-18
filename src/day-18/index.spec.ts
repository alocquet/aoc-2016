import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day18 } from './day-18';

describe('day-18', () => {
    let day = new Day18();
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it('With \'^^..^\', the result is 6', () => {
        // Act
        let result = day.execute('..^^.', 3);
        // Assert
         expect(result).to.be.equal(6);
    });
    it('With \'.^^.^.^^^^\', the result is 38', () => {
        // Act
        let result = day.execute('.^^.^.^^^^', 10);
        // Assert
         expect(result).to.be.equal(38);
    });
    it('Input...', () => {
        // Act
        let result = day.execute('^^.^..^.....^..^..^^...^^.^....^^^.^.^^....^.^^^...^^^^.^^^^.^..^^^^.^^.^.^.^.^.^^...^^..^^^..^.^^^^', 40);
        // Assert
         expect(result).to.be.equal(1961);
    });
    it('Step - 2...', function () {
        this.timeout(6 * 1000);
        // Act
        let result = day.execute('^^.^..^.....^..^..^^...^^.^....^^^.^.^^....^.^^^...^^^^.^^^^.^..^^^^.^^.^.^.^.^.^^...^^..^^^..^.^^^^', 400000);
        // Assert
         expect(result).to.be.equal(20000795);
    });
});