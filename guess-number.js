const random = Math.floor(Math.random() * 100) + 1;
console.log({ random });
let guess = -1;
const maxAttempts = 5;
let attempt = 0;
while (attempt < maxAttempts) {
  guess = Number(prompt(`guess a number 1-100 (attempt ${attempt + 1} of ${maxAttempts})`));

  if (isNaN(guess) || guess < 0 || guess > 100) {
    console.log('pick a number which belongs between 1 to 100');
    continue;
  }

  attempt++;
  console.log({ attempt });

  if (guess > random) {
    console.log('too high');
  } else if (guess < random) {
    console.log('too low');
  } else {
    console.log(`congrats! you are right. the number was ${guess}`);
    break;
  }
  if (attempt === maxAttempts) {
    console.log(`sorry! no attempts left. the number was ${random}`);
  }
}
