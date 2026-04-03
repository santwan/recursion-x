---
sidebar_position: 4
---

# The Recursive Case: Making Progress

## What is a Recursive Case?

The **recursive case** is where the function calls itself with a modified (usually simpler) version of the problem. It must make progress toward the base case.

```java
public static int factorial(int n) {
    if (n <= 1) return 1;           // Base case
    return n * factorial(n - 1);    // Recursive case
}
```

## Key Principles of Recursive Cases

| Principle        | Explanation                                    |
| ---------------- | ---------------------------------------------- |
| **Reduction**    | Each call must solve a smaller/simpler problem |
| **Progress**     | Must move closer to the base case              |
| **Trust**        | Assume the recursive call will work correctly  |
| **Modification** | Change the input to ensure convergence         |

## The "Leap of Faith"

In recursion, you must trust that if your function works for `n-1`, then calling it for `n` will also work.

```java
// If factorial(4) returns 24, then:
// factorial(5) = 5 * factorial(4) = 5 * 24 = 120 ✓

// You don't need to mentally trace every step!
// Just trust that the recursion will work.
```

## Ways to Progress Toward Base Case

### 1. **Decrement (n - 1)**

```java
int sum(int n) {
    if (n == 0) return 0;
    return n + sum(n - 1);  // Progress: n gets smaller
}
```

### 2. **Divide (n / 2)**

```java
int binarySearch(int[] arr, int target, int low, int high) {
    if (low > high) return -1;  // Base case
    int mid = low + (high - low) / 2;
    if (arr[mid] == target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, low, mid - 1);
    return binarySearch(arr, target, mid + 1, high);  // Progress: range halves
}
```

### 3. **Remove Element (substring, subarray)**

```java
String reverse(String s) {
    if (s.length() <= 1) return s;  // Base case
    return reverse(s.substring(1)) + s.charAt(0);  // Progress: string gets shorter
}
```

### 4. **Move Pointer (index++)**

```java
int linearSearch(int[] arr, int target, int index) {
    if (index == arr.length) return -1;  // Base case
    if (arr[index] == target) return index;
    return linearSearch(arr, target, index + 1);  // Progress: index increases
}
```

## Examples

### Example 1: Sum of n Natural Numbers

```java
int sum(int n) {
    if (n == 0) return 0;           // Base case
    return n + sum(n - 1);          // Recursive case
}

// sum(5) = 5 + sum(4)
//        = 5 + 4 + sum(3)
//        = 5 + 4 + 3 + sum(2)
//        = 5 + 4 + 3 + 2 + sum(1)
//        = 5 + 4 + 3 + 2 + 1 + sum(0)
//        = 5 + 4 + 3 + 2 + 1 + 0 = 15
```

### Example 2: Count Elements in Array

```java
int count(int[] arr, int index) {
    if (index == arr.length) return 0;  // Base case
    return 1 + count(arr, index + 1);   // Recursive case
}

// count([1,2,3], 0) = 1 + count([1,2,3], 1)
//                   = 1 + 1 + count([1,2,3], 2)
//                   = 1 + 1 + 1 + count([1,2,3], 3)
//                   = 1 + 1 + 1 + 0 = 3
```

### Example 3: Find Maximum in Array

```java
int findMax(int[] arr, int index) {
    // Base case: only one element
    if (index == arr.length - 1) return arr[index];

    // Recursive case: max of rest of array
    int maxOfRest = findMax(arr, index + 1);
    return Math.max(arr[index], maxOfRest);
}
```

## Parameters in Recursive Calls

The recursive call typically modifies parameters to make progress:

```java
public static void printNumbers(int n) {
    if (n == 0) return;           // Base case
    System.out.println(n);
    printNumbers(n - 1);          // n decreases
}

public static void printArray(int[] arr, int index) {
    if (index == arr.length) return;  // Base case
    System.out.println(arr[index]);
    printArray(arr, index + 1);   // index increases
}
```

## Common Mistakes

### ❌ Mistake 1: No Progress

```java
int badRecursion(int n) {
    if (n == 0) return 0;
    return n + badRecursion(n);  // n never changes!
}
```

### ✅ Fix: Make Progress

```java
int goodRecursion(int n) {
    if (n == 0) return 0;
    return n + goodRecursion(n - 1);  // n decreases
}
```

### ❌ Mistake 2: Unbounded Growth

```java
int search(int[] arr, int index) {
    if (arr[index] == 5) return index;
    return search(arr, index + 1);  // Will crash if element not found
}
```

### ✅ Fix: Bounded Progress

```java
int search(int[] arr, int index) {
    if (index == arr.length) return -1;  // Boundary check
    if (arr[index] == 5) return index;
    return search(arr, index + 1);
}
```

## Key Takeaway

A good recursive case must:

1. Solve a **simpler or smaller version** of the problem
2. **Make measurable progress** toward the base case
3. **Trust** that the recursion works for smaller inputs
4. Be **reachable** - the modification must eventually satisfy the base case

Remember: _"If I can solve this problem for n-1, n-2, or a smaller version, can I use that to solve it for n?"_
