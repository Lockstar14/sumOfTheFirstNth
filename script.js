// const numbers = 1 + 1 / 4 + 1 / 7 + 1 / 10 + 1 / 13
// console.log(numbers.toFixed(2));

function SeriesSum(n) {
  let sum = 0;
  for (let i = 0;i<n;i++){
 sum += 1/(n+3*i)}
 return sum.toFixed(2)
}

console.log();
