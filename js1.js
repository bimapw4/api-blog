/**
 * Direction:
 * Find the higher value from the array bellow
 *
 * Expected Result:
 * 8
 */
 let numbers = [3, 1, 2, 3, 7, 5, 6, 8, 2, 1];

 function result(numbers) {
    var max = 0;
    numbers.forEach(number => {
        if (number >= max) {
            max = number
        }
    });

    return max
 }
 
 console.log(result(numbers));