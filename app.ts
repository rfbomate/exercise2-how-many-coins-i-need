import { Casher } from './utilities/Casher';

console.clear();
try {
    const denominationList = [1, 5, 10];
    const casherInstance: Casher = new Casher(denominationList);
    const amount: number = 7;

    const result: number = casherInstance.makeChange(amount);

    console.log(result);
} catch (e) {
    console.error('\x1b[31m', e);
}








