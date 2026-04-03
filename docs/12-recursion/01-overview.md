---
sidebar_position: 1
---

# Recursion Overview

## What is Recursion?

Recursion is a programming technique where a function calls itself to solve a problem by breaking it down into smaller, similar subproblems. Every recursive solution eventually reaches a **base case** (stopping condition) to prevent infinite loops.

## Why Learn Recursion?

- **Simplifies Complex Problems**: Many problems naturally fit recursive solutions (tree traversal, divide & conquer algorithms, backtracking)
- **Code Elegance**: Recursive solutions are often more concise and readable than iterative ones
- **Real-World Applications**: Used in file systems, compilers, sorting algorithms (mergesort, quicksort), and graph traversals
- **Essential Skill**: Required for interviews and competitive programming

## Key Principles

A proper recursive function must have:

1. **Base Case**: The condition that stops the recursion
2. **Recursive Case**: The function calling itself with a simpler problem
3. **Progress**: Each recursive call must move closer to the base case

## Simple Example

```java
// Calculate factorial recursively
public static int factorial(int n) {
    // Base case
    if (n == 0 || n == 1) {
        return 1;
    }
    // Recursive case
    return n * factorial(n - 1);
}

// factorial(5) = 5 * factorial(4)
//              = 5 * 4 * factorial(3)
//              = 5 * 4 * 3 * factorial(2)
//              = 5 * 4 * 3 * 2 * factorial(1)
//              = 5 * 4 * 3 * 2 * 1 = 120
```

## Common Pitfalls

- ❌ Missing or incorrect base case → Stack overflow
- ❌ Not making progress toward base case → Infinite recursion
- ❌ Too deep recursion → Stack overflow (memory limit)
- ❌ Not understanding the call stack

## What You'll Learn

In this section, you'll master:

- How recursion works fundamentally
- Base cases and recursive cases
- Understanding the call stack
- Solving real problems with recursion

Let's start learning!
