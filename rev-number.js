let n = 132;
let sum = 0;
let newNum=0;
while (n > 0) {
  let rev = n % 10;
  newNum = newNum * 10 + rev;

  n = Math.floor(n / 10);
}
console.log(newNum);
