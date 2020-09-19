function bitAnd(number1, number2) {
  console.log(`${number1} & ${number2} => ${number1 & number2}`);
}

function say(text, letters = 50) {
  console.log(text);
}

say(
  "For some reason all the numbers that are \npower of 2 will return 0 with the bitwise operator."
);

say("Like this: number & (number - 1)");

bitAnd(8, 7);
say("Power of 2 = 0");
bitAnd(7, 6);
say("Not power of 2");
