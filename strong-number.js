let n = Number(prompt('enter number'));
const copy = n;
let sum = 0;
while (n > 0) {
  let fact = 1;
  let rem = n % 10;
  for (let i = 1; i <= rem; i++) {
    fact = fact * i;
  }
  sum += fact;
  n = Math.floor(n / 10);
}
console.log(sum, 'sum');
if (copy === sum) {
  console.log('strong number');
} else {
  console.log('not strong number');
}
