//import my implementation of a sort method
import { sortNumericArrays } from './sortUtilities';

// I define the Cahser class for implement the business logic 
class Casher {
    //list of coins denominations
    _coinsDenominations: number[]

    //constructor where the attributes are initialized
    constructor(pCoinsDenominations: number[]) {

        //verify if all items of the array are integers
        const isAllCoinsIntegerValue = pCoinsDenominations.every((coin) => Number.isInteger(coin) && coin >= 0);

        if (!isAllCoinsIntegerValue) { //if array haven't a correct format, I throw an exception
            throw "All values of coins must be an integer value";
        }

        //If the input array have a correct format, I initialize the attribute
        this._coinsDenominations = pCoinsDenominations
    }

    //main method, answer the question of the exercise
    makeChange(pAmount: number): number {
        //this problems has the general cases and particular cases. I go to get first, the general case and resolve next the particular cases

        let minCoins: number = this.getGeneralCase(pAmount); //I get the result for the general cases


        //i go to work in the specific cases with a rotation matriz
        let quantityOfRotation: number = 0; // I define the number of rotation that I have made
        let foundCombination: boolean = (minCoins < Number.MAX_SAFE_INTEGER) ? true : false; // I define if I found a solution when review the general cases

        while (quantityOfRotation < this._coinsDenominations.length) { // while the rotations not finish, I try to find a solution
            let sum: number = 0;
            let quantity: number = 0;
            let partialValue: number = pAmount;

            for (let i = 0; i < this._coinsDenominations.length; i++) {

                const result: number = Math.floor(partialValue / this._coinsDenominations[i]);
                const rest: number = partialValue % this._coinsDenominations[i];

                if (result > 0) {

                    quantity += result;
                    partialValue = rest;
                    sum += this._coinsDenominations[i] * result;
                }

            }

            //if the partial solution is the best, I change the value of the best solution
            const resultStep: number = (sum == pAmount) ? quantity : -1;
            if (resultStep > 0 && resultStep < minCoins) {
                minCoins = resultStep;
                foundCombination = true;
            }

            this._coinsDenominations = this.rotateArrayOnePositionRight(this._coinsDenominations);
            quantityOfRotation++;

        }

        //I return the best solution or I notify that a solution doesn;t was founded
        return foundCombination ? minCoins : -1;

    }

    //I implemented a solution for rotate the items of a matrix one position to the right
    private rotateArrayOnePositionRight(pInputArray: number[]): number[] {
        let resultArray: number[] = new Array<number>(pInputArray.length).fill(0);
        for (let i = 0; i < pInputArray.length; i++) {
            if (i == pInputArray.length - 1) {
                resultArray[0] = pInputArray[i];
            } else {
                resultArray[i + 1] = pInputArray[i];
            }
        }
        return resultArray;
    }

    // I get a solution for the general cases 
    private getGeneralCase(pAmount: number): number {
        let sortedArray = [...this._coinsDenominations];
        sortNumericArrays(sortedArray, 'desc');


        let sum: number = 0;
        let quantity: number = 0;
        let partialValue: number = pAmount;

        for (let i = 0; i < sortedArray.length; i++) {

            const result: number = Math.floor(partialValue / sortedArray[i]);
            const rest: number = partialValue % sortedArray[i];

            if (result > 0) {

                quantity += result;
                partialValue = rest;
                sum += sortedArray[i] * result;
            }

        }

        const resultStep: number = (sum == pAmount) ? quantity : Number.MAX_SAFE_INTEGER;
        return resultStep;
    }

}



// I export the class
export { Casher }