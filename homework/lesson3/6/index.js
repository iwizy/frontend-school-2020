/*
    6)
    Написать функцию, которая считает сумму элементов массива кратных числу 2.

    Например:

    sum(1, 2, 3, 4, 5) // 6
    sum(3, 8, 1, 40, 6) // 54
*/

const sum = (...args) => args.reduce(
    (acc, item) => (item % 2 === 0) ? acc + item : acc, 0);
