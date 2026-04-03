---
sidebar_position: 3
---

# The Base Case: Stopping the Recursion

## What is a Base Case?

The **base case** is the condition that stops the recursion. Without it, a function would call itself infinitely, causing a **stack overflow**.

```java
// ❌ WRONG - No base case, infinite recursion
void bad_recursion() {
    System.out.println("Recursing...");
    bad_recursion();  // Will crash!
}

// ✅ CORRECT - Has base case
void good_recursion(int n) {
    if (n == 0) {  // Base case
        return;
    }
    System.out.println("Recursing: " + n);
    good_recursion(n - 1);
}
```

## Characteristics of a Good Base Case

| Requirement           | Explanation                                        | Example                                 |
| --------------------- | -------------------------------------------------- | --------------------------------------- |
| **Must Be Reachable** | The function must eventually reach this condition  | `if (n == 0)` in factorial              |
| **Must Be Solvable**  | The problem at this case must be directly solvable | `if (array.length == 0) return 0`       |
| **Must Not Recurse**  | Base case should return without calling itself     | `return 1;` (no recursion)              |
| **Must Be Simple**    | Typically handles the simplest form of the problem | Single element, empty input, zero, etc. |

## Examples of Base Cases

### Example 1: Countdown (n reaches 0)

```java
void countdown(int n) {
    if (n == 0) {  // Base case
        System.out.println("Blastoff!");
        return;
    }
    System.out.println(n);
    countdown(n - 1);
}
```

### Example 2: Array Search (element found or array empty)

```java
boolean contains(int[] arr, int target, int index) {
    // Base case 1: reached end of array
    if (index == arr.length) {
        return false;
    }
    // Base case 2: found the target
    if (arr[index] == target) {
        return true;
    }
    // Recursive case
    return contains(arr, target, index + 1);
}
```

### Example 3: String Reversal (string is empty or one character)

```java
String reverse(String s) {
    // Base case: empty or single character
    if (s.length() <= 1) {
        return s;
    }
    // Recursive case
    return reverse(s.substring(1)) + s.charAt(0);
}
```

### Example 4: Tree Traversal (node is null)

```java
void traverse(TreeNode node) {
    // Base case: reached end of tree
    if (node == null) {
        return;
    }
    // Process node
    System.out.println(node.value);
    // Recursive cases
    traverse(node.left);
    traverse(node.right);
}
```

## Multiple Base Cases

Some problems need multiple base cases:

```java
// Fibonacci: Two base cases
int fibonacci(int n) {
    if (n == 0) return 0;      // Base case 1
    if (n == 1) return 1;      // Base case 2
    return fibonacci(n - 1) + fibonacci(n - 2);  // Recursive case
}

// Or combined:
int fibonacci(int n) {
    if (n <= 1) return n;  // Both base cases combined
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

## Common Mistakes with Base Cases

### ❌ Mistake 1: Missing Base Case

```java
int factorial(int n) {
    return n * factorial(n - 1);  // INFINITE RECURSION!
}
```

### ✅ Fix: Add Base Case

```java
int factorial(int n) {
    if (n <= 1) return 1;  // Base case
    return n * factorial(n - 1);
}
```

### ❌ Mistake 2: Base Case Never Reached

```java
int sum(int n) {
    if (n < 0) return 0;  // Never reached if n > 0
    return n + sum(n + 1);  // n keeps increasing!
}
```

### ✅ Fix: Ensure Progress Toward Base Case

```java
int sum(int n) {
    if (n == 0) return 0;  // Will be reached
    return n + sum(n - 1);  // n decreases toward 0
}
```

## Key Takeaway

**The base case is the most critical part of recursion.** Without it:

- Code will crash (stack overflow)
- Memory will fill up quickly
- Program becomes unusable

Always ask yourself: _"What is the simplest case my function must handle, and how does it solve it without recursion?"_
