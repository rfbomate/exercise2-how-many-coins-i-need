import { sortNumericArrays } from './sortUtilities';
class Casher {
    _coinsDenominations: number[]

    constructor(pCoinsDenominations: number[]) {

        const isAllCoinsIntegerValue = pCoinsDenominations.every((coin) => Number.isInteger(coin) && coin >= 0);

        if (!isAllCoinsIntegerValue) {
            throw "All values of coins must be an integer value";
        }

        this._coinsDenominations = pCoinsDenominations
    }

    makeChange(pAmount: number): number {
        //this problems has the general cases and particular cases. I go to get first, the general case and resolve next the particular cases

        let minCoins: number = this.getGeneralCase(pAmount); //get general cases


        //i go to work in the specific cases with a rotation matriz
        let quantityOfRotation: number = 0;
        let foundCombination: boolean = (minCoins < Number.MAX_SAFE_INTEGER) ? true : false;

        while (quantityOfRotation < this._coinsDenominations.length) {
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

            const resultStep: number = (sum == pAmount) ? quantity : -1;
            if (resultStep > 0 && resultStep < minCoins) {
                minCoins = resultStep;
                foundCombination = true;
            }

            this._coinsDenominations = this.rotateArrayOnePositionRight(this._coinsDenominations);
            quantityOfRotation++;

        }

        return foundCombination ? minCoins : -1;

    }

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




export { Casher }