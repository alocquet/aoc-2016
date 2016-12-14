import { Position } from './../model';
import { expect, should, use } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { Day13Step1 } from '.';

describe('day-13-s1', () => {
    it('0,0 est un espace libre avec le favoris 10', () => {
        // Assert
        expect(new Position(0, 0).isWall(10)).to.be.equal(false);
    });
    it('0,1 est un espace libre avec le favoris 10', () => {
        // Assert
        expect(new Position(0, 1).isWall(10)).to.be.equal(false);
    });
    it('1,0 est un mur avec le favoris 10', () => {
        // Assert
        expect(new Position(1, 0).isWall(10)).to.be.equal(true);
    });
    it('3,4 est un espace libre avec le favoris 10', () => {
        // Assert
        expect(new Position(3, 4).isWall(10)).to.be.equal(false);
    });
    it('La position 7,4 se trouve en 11 étapes avec le favoris 10', () => {
        let day = new Day13Step1(10, new Position(7, 4));
        // Assert
        expect(day.execute()).to.be.equal(11);
    });
    it('La position 31,39 se trouve en 86 étapes avec le favoris 1364', () => {
        let day = new Day13Step1(1364, new Position(31, 39));
        // Assert
        expect(day.execute()).to.be.equal(86);
    });
});