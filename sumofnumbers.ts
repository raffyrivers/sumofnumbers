function sumFor(numbers: number[]): number {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    // Add the current number to the sum
    sum += numbers[i];
  }
  return sum;
}

function sumWhile(numbers: number[]): number {
  let sum = 0;
  let i = 0;
  while (i < numbers.length) {
    // Add the current number to the sum
    sum += numbers[i];
    i++;
  }
  return sum;
}

function sumRecursion(numbers: number[]): number {
  // Base case: if the array is empty, return 0
  if (numbers.length === 0) {
    return 0;
  }
  // Recursive case: add the first number to the sum of the rest of the array
  return numbers[0] + recursiveSum(numbers.slice(1));
}

function sumTheFunctionalWay(numbers: number[]): number {
  // Use the reduce method to sum the numbers in the array
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(sumFor([1, 2, 3, 4, 5])); // Output: 15
console.log(sumWhile([1, 2, 3, 4, 5])); // Output: 15
console.log(sumRecursion([1, 2, 3, 4, 5])); // Output: 15
console.log(sumTheFunctionalWay([1, 2, 3, 4, 5])); // Output: 15
