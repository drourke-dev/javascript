// Problem - Tower of Hanoi is a mathematical puzzle where we have three rods (A, B, and C) and N disks.
// Initially, all the disks are stacked in decreasing value of diameter
// i.e., the smallest disk is placed on the top and they are on rod A.
// The objective of the puzzle is to move the entire stack to another rod (here considered C),
// obeying the following simple rules:

// Only one disk can be moved at a time.
// Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack
// i.e. a disk can only be moved if it is the uppermost disk on a stack.
// No disk may be placed on top of a smaller disk.

function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

towerOfHanoi(3, "A", "C", "B");

// Big O = O(2^n) → Exponential Time Complexity
