---
sidebar_position: 2
---

# Understanding Recursion: The Foundation

## Definition

**Recursion** is when a function calls itself to solve a problem by reducing it to simpler instances of the same problem.

```
function(problem)
    if (problem is simple enough)
        solve it directly
    else
        break problem into smaller parts
        call function(smaller problem)
        combine results
```

## How Recursion Works

When a function calls itself, a new execution context is created on the **call stack**. This continues until a **base case** is reached, then the function returns and unwinds through previous calls.

### Visual Example: Power Function

```
pow(2, 5)
│
├─ pow(2, 4)
│  ├─ pow(2, 3)
│  │  ├─ pow(2, 2)
│  │  │  ├─ pow(2, 1)
│  │  │  │  ├─ pow(2, 0)  [BASE CASE - returns 1]
│  │  │  │  └─ returns 2 * 1 = 2
│  │  │  └─ returns 2 * 2 = 4
│  │  └─ returns 2 * 4 = 8
│  └─ returns 2 * 8 = 16
└─ returns 2 * 16 = 32
```

## Example: Calculate Power

```java
public static int power(int base, int exponent) {
    // Base case: any number to power 0 is 1
    if (exponent == 0) {
        return 1;
    }

    // Recursive case: reduce exponent by 1 each time
    return base * power(base, exponent - 1);
}
```

**Function calls:**

- `power(2, 5)` → `2 * power(2, 4)`
- `power(2, 4)` → `2 * power(2, 3)`
- `power(2, 3)` → `2 * power(2, 2)`
- `power(2, 2)` → `2 * power(2, 1)`
- `power(2, 1)` → `2 * power(2, 0)`
- `power(2, 0)` → `1` ✓ Base case reached

**Result:** `2 * 2 * 2 * 2 * 2 = 32`

## Two Types of Recursion

### 1. **Linear Recursion**

The function calls itself once in each recursive call.

```java
int sum(int n) {
    if (n == 0) return 0;
    return n + sum(n - 1);  // One recursive call
}
```

### 2. **Tree Recursion**

The function calls itself multiple times in each recursive call.

```java
int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);  // Two recursive calls
}
```

## When to Use Recursion

✅ **Good Use Cases:**

- Tree/Graph traversal
- Divide & conquer problems (mergesort, quicksort)
- Backtracking (N-Queens, sudoku solver)
- Computing factorial, fibonacci
- DFS (Depth-First Search)

❌ **Avoid Recursion:**

- Simple loops (inefficient)
- Problems where iterative solution is clearer
- When recursion depth might exceed stack size

## Key Takeaway

Every recursive function consists of:

1. **Base case(s)**: When to stop
2. **Recursive case(s)**: How to reduce the problem
3. **Progress**: Getting closer to the base case with each call
