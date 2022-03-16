# Exercise 2: How many coins do I need?

Given an array of positive integers representing coin denominations and a single non-negative integer n  representing a target amount of money, write a function that returns the smallest number of coins needed to make change for (to sum up to) that target amount using the given coin denominations.

Note that you have access to an unlimited amount of coins. In other words, if the denominations are [1, 5, 10] , you have access to an unlimited amount of 1s 5s and 10s

If it's impossible to make change for the target amount, return -1.
  
Sample Input:

n = 7

denoms = [1, 5, 10]

Sample Output:
3


# Installation instructions

The first thing to do is to install the necessary packages and dependencies. To perform this task, the following command must be executed:

```bash
npm i
```

# Instructions for run the app
To run the application, execute the following command:

```bash
npm run dev
```

# Instructions for run the tests
To run the tests sets, execute the following command:


```bash
npm run test
```

I have used "Jest" to do the unit tests.

To validate the solution, I have implemented these test cases: 

1. Creating an instance of Casher class
2. All values in coin list are not integer
3. Test with amount 7 and denominationList = [1, 5, 10]
4. Test with amount 11 and denominationList = [2, 5, 10]
5. Test with amount 29 and denominationList = [1, 5, 10]
6. Test with amount 143 and denominationList = [8, 7, 3, 12, 6]
7. Test with amount 10 and denominationList = []