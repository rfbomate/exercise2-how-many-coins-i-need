
//import class Casher 
import { Casher } from './utilities/Casher';

console.clear(); //I clear the console

//Inside of this code block throw exceptions can ocurrs
try {
    const denominationList = [1, 5, 10]; //input array

    //instance of Casher class
    const casherInstance: Casher = new Casher(denominationList);


    const amount: number = 7; //input amount

    //result of the case
    const result: number = casherInstance.makeChange(amount);

    //I print in console the result
    console.log(result);
} catch (e) {
    //if ocurrs an exception, I show an error log with red color
    console.error('\x1b[31m', e);
}








