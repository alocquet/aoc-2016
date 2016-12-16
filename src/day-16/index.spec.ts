import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day16 } from './day-16';

describe('day-16', () => {
    let day = new Day16();
    before(() => {
        use(chaiAsPromised);
        should();
    });
    it('1 becomes 100', () => {
        // Act
        let result = day.binaryToString(day.generateData(3, day.stringToBinary('1')));
        // Assert
        return expect(result).to.be.equal('100');
    });
    it('0 becomes 001', () => {
        // Act
        let result = day.binaryToString(day.generateData(3, day.stringToBinary('0')));
        // Assert
        return expect(result).to.be.equal('001');
    });
    it('11111 becomes 11111000000', () => {
        // Act
        let result = day.binaryToString(day.generateData(11, day.stringToBinary('11111')));
        // Assert
        return expect(result).to.be.equal('11111000000');
    });
    it('111100001010 becomes 1111000010100101011110000', () => {
        // Act
        let result = day.binaryToString(day.generateData(25, day.stringToBinary('111100001010')));
        // Assert
        return expect(result).to.be.equal('1111000010100101011110000');
    });
    it('Generate Data for a 20 size disk, with initial state 10000 -> 10000011110010000111', () => {
        // Act
        let result = day.binaryToString(day.generateData(20, day.stringToBinary('10000')));
        // Assert
        return expect(result).to.be.equal('10000011110010000111');
    });
    it('hash of 110010110100 is 100', () => {
        // Act
        let result = day.binaryToString(day.generateHash(day.stringToBinary('110010110100')));
        // Assert
        return expect(result).to.be.equal('100');
    });
    it('Exemple...', () => {
        // Act
        let result = day.execute(20, '10000');
        // Assert
        return expect(result).to.be.equal('01100');
    });
    it('Input...', () => {
        // Act
        let result = day.execute(272, '10001001100000001');
        // Assert
        return expect(result).to.be.equal('10101001010100001');
    });
    it('Input - step 2...', function() {
        this.timeout(10000);
        // Act
        let result = day.execute(35651584, '10001001100000001');
        // Assert
        return expect(result).to.be.equal('10100001110101001');
    });
});