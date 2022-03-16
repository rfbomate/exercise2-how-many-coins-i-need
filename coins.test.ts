import { Casher } from './utilities/Casher';

describe("Casher tests", () => {
    let denominationList = [1, 5, 10];
    let amount: number = 7;

    it('Creating an instance of Casher class', () => {

        const casherInstance: Casher = new Casher(denominationList);
        expect(casherInstance).toBeInstanceOf(Casher);
    });


    it('All values in coin list is not integer', () => {
        denominationList = [1, 5, 10.7];

        try {
            const instance: Casher = new Casher(denominationList);
        } catch (e) {
            expect(e).toBe('All values of coins must be an integer value')
        }
    });

    it('Test with amount 7 and denominationList = [1, 5, 10]', () => {
        denominationList = [1, 5, 10];
        const casherInstance: Casher = new Casher(denominationList);
        const result = casherInstance.makeChange(amount);
        expect(result).toBe(3);
    });

    it('Test with amount 11 and denominationList = [2, 5, 10]', () => {
        denominationList = [2, 5, 10];
        amount = 11;
        const casherInstance: Casher = new Casher(denominationList);
        const result = casherInstance.makeChange(amount);
        expect(result).toBe(-1);
    });

    it('Test with amount 29 and denominationList = [1, 5, 10]', () => {
        denominationList = [1, 5, 10];
        amount = 29;
        const casherInstance: Casher = new Casher(denominationList);
        const result = casherInstance.makeChange(amount);
        expect(result).toBe(7);
    });

    it('Test with amount 143 and denominationList = [8, 7, 3, 12, 6]', () => {
        denominationList = [8, 7, 3, 12, 6];
        amount = 143;
        const casherInstance: Casher = new Casher(denominationList);
        const result = casherInstance.makeChange(amount);
        expect(result).toBe(13);
    });

    it('Test with amount 10 and denominationList = []', () => {
        denominationList = [];
        amount = 10;
        const casherInstance: Casher = new Casher(denominationList);
        const result = casherInstance.makeChange(amount);
        expect(result).toBe(-1);
    });




});