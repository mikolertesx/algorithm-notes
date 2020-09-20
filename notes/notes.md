# Big O Notation
When dealing with problems that you don't understand, or can't quantify what's average or worst, you can simply think of the average as the same as the worst, in fact, most algorithms have the same average case as the worst case.

We need to have an idea of the behavior, not the absolute concept of it, like, is the algorithm linear, cuadratic, constant or logaritmic functions.

Looking for patterns is better than deriving the absolute cases of everything.

![algoritmos](./images/timecomplexity.png "Time Complexity")

# Recursivity
There's some type of operations that are easier to understand with recursivity.

To make a recursive function, you need to base it on a base case, and normal logic.

The normal logic will be done everytime the base case is not achieved, the base case can be thought of what to do, if the task is considered to be complete.

Usually recursivity isn't a good practice, as it has to deal with quite an overhead, like allocating memory on the Stack.

## Dynamic programming

Recursivity can be made easier with *memoization*, it just means to keep some data around between every process.

Sometimes *memoization* it can lead to work duplications.

# Search algorithms
Search algorithms is how to find something in the most efficient way.
There's two types of search algorithms, those being:
- Linear Search.
  Looks through the elements one by one. (Works on unordered and unordered lists).
- Binary Search.
  Looks through the elements by dividing it in two. (Only works on onrdered lists).

# Sorting
Is having an array full of data that isn't sorted, then, efficiently get a new array with the elements in order. Either ascending or descending.

## Bubble sort
Bubble sort goes through the elements almost twice, it starts with an outer element and then cicle every other element inside, until, it gets to the end of the inner loop and then continues with the outer.

This is better explained or seen through code.

## Master theorem
![Master Theorem](./images/mastertheorem.png "Master Theorem")

# On an interview
More than likely you're not going to know the best solution at heart, because there's stuff like Math involved in whatever you want to do.

The interviewer may just point you to some math you can use for it, and in a real, big project, Google exists.
