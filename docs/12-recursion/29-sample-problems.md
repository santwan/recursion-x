---
sidebar_position: 6
---

# Practice Problems & Solutions

Practice these problems to solidify your understanding of recursion!

## Problem 1: Calculate Sum of Numbers

**Problem:** Write a recursive function to calculate the sum of first n natural numbers.

**Input:** n = 5  
**Output:** 15 (1 + 2 + 3 + 4 + 5 = 15)

## Problem 2: Find Factorial

**Problem:** Write a recursive function to calculate n!

**Input:** n = 5  
**Output:** 120 (5! = 5 × 4 × 3 × 2 × 1 = 120)

## Problem 3: Check if Array is Palindrome

**Problem:** Write a recursive function to check if an array reads the same forwards and backwards.

**Input:** [1, 2, 3, 2, 1]  
**Output:** true

**Input:** [1, 2, 3, 4, 5]  
**Output:** false

## Problem 4: Count Occurrences

**Problem:** Count how many times a number appears in an array.

**Input:** arr = [1, 2, 3, 2, 4, 2], target = 2  
**Output:** 3

## Problem 5: String Reversal

**Problem:** Reverse a string using recursion.

**Input:** "Hello"  
**Output:** "olleH"

## Problem 6: Power Function

**Problem:** Calculate base^exponent using recursion.

**Input:** base = 2, exponent = 5  
**Output:** 32

## Problem 7: Fibonacci Sequence

**Problem:** Find the nth number in Fibonacci sequence.

**Input:** n = 6  
**Output:** 8 (Sequence: 0, 1, 1, 2, 3, 5, 8...)

## Problem 8: Binary Search

**Problem:** Search for a target value in a sorted array using binary search (recursively).

**Input:** arr = [1, 3, 5, 7, 9, 11], target = 7  
**Output:** 3 (index of target)

## Problem 9: Get All Divisors

**Problem:** Find all divisors of a number recursively.

**Input:** n = 12  
**Output:** [1, 2, 3, 4, 6, 12]

## Problem 10: Sum of Array Elements

**Problem:** Find the sum of all elements in an array recursively.

**Input:** [2, 4, 6, 8]  
**Output:** 20

---

## Solutions (Try Before Checking!)

<details>
<summary><strong>Problem 1: Sum of Numbers</strong></summary>

```java
public static int sumOfNumbers(int n) {
    // Base case
    if (n == 0) {
        return 0;
    }
    // Recursive case
    return n + sumOfNumbers(n - 1);
}

// Or using mathematical formula recursion
public static int sumOfNumbersFormula(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return n + sumOfNumbersFormula(n - 1);
}
```

**Complexity:**

- Time: O(n)
- Space: O(n) - call stack

</details>

<details>
<summary><strong>Problem 2: Factorial</strong></summary>

```java
public static int factorial(int n) {
    // Base case
    if (n == 0 || n == 1) {
        return 1;
    }
    // Recursive case
    return n * factorial(n - 1);
}
```

**Complexity:**

- Time: O(n)
- Space: O(n) - call stack

</details>

<details>
<summary><strong>Problem 3: Array Palindrome</strong></summary>

```java
public static boolean isPalindrome(int[] arr) {
    return isPalindromeHelper(arr, 0, arr.length - 1);
}

private static boolean isPalindromeHelper(int[] arr, int left, int right) {
    // Base case: pointers met or crossed
    if (left >= right) {
        return true;
    }

    // Check if elements match
    if (arr[left] != arr[right]) {
        return false;
    }

    // Recursive case: move pointers closer
    return isPalindromeHelper(arr, left + 1, right - 1);
}
```

**Complexity:**

- Time: O(n)
- Space: O(n) - call stack

</details>

<details>
<summary><strong>Problem 4: Count Occurrences</strong></summary>

```java
public static int countOccurrences(int[] arr, int target, int index) {
    // Base case: reached end of array
    if (index == arr.length) {
        return 0;
    }

    // Recursive case
    int count = (arr[index] == target) ? 1 : 0;
    return count + countOccurrences(arr, target, index + 1);
}

// Usage: countOccurrences(arr, 2, 0)
```

**Complexity:**

- Time: O(n)
- Space: O(n) - call stack

</details>

<details>
<summary><strong>Problem 5: String Reversal</strong></summary>

```java
public static String reverse(String s) {
    // Base case: empty or single character
    if (s.length() <= 1) {
        return s;
    }

    // Recursive case: reverse rest + first character
    return reverse(s.substring(1)) + s.charAt(0);
}

// More efficient:
public static String reverseEfficient(String s) {
    return reverseHelper(s, 0, s.length() - 1);
}

private static String reverseHelper(String s, int left, int right) {
    if (left >= right) {
        return s;
    }
    // Would need char array for true reversal
    return reverseHelper(s, left + 1, right - 1);
}
```

**Complexity:**

- Time: O(n²) due to substring operations
- Space: O(n) - call stack

</details>

<details>
<summary><strong>Problem 6: Power Function</strong></summary>

```java
public static int power(int base, int exponent) {
    // Base case
    if (exponent == 0) {
        return 1;
    }

    // Recursive case
    return base * power(base, exponent - 1);
}

// More efficient with divide and conquer
public static int powerOptimized(int base, int exponent) {
    if (exponent == 0) {
        return 1;
    }

    int half = powerOptimized(base, exponent / 2);

    if (exponent % 2 == 0) {
        return half * half;
    } else {
        return base * half * half;
    }
}
```

**Complexity:**

- Simple: Time O(n), Space O(n)
- Optimized: Time O(log n), Space O(log n)

</details>

---

## Try These First!

1. Implement the solutions above
2. Test with various edge cases (n=0, n=1, large n)
3. Identify the base case and recursive case in each
4. Calculate time and space complexity
5. Compare iterative vs recursive approaches

Good luck! 🚀
