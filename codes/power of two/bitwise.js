function isPowerOfTwo(number) {
  if (number < 1) {
    return false;
  }
  return number & (number - 1 === 0);
}
