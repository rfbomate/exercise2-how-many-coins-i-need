
const compareCriteriaAscending = function (pFirstValue: number, pSecondValue: number): number {
    return (pFirstValue - pSecondValue)
}

const compareCriteriaDescending = function (pFirstValue: number, pSecondValue: number): number {
    return (pSecondValue - pFirstValue)
}


//typeOfString: 'asc' or 'desc';

const sortNumericArrays = (arrayToSort: number[], typeOfSort: string): number[] => {
    if (typeOfSort == 'asc') {
        return arrayToSort.sort(compareCriteriaAscending);
    } else if (typeOfSort == 'desc') {
        return arrayToSort.sort(compareCriteriaDescending);
    } else {
        return arrayToSort;
    }
}

export { sortNumericArrays }