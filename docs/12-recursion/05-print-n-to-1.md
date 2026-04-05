---
sidebar_position: 5
---


# Print N to 1 

### Recursive Thinking

Alright, the problem says: print numbers from n to 1. If I do it normally (without recursion), I would just run a loop:
```java
for(i = n; i >= 1; i--)
    print(i);
```
But now they want recursion, so I need to think in terms of function calling itself. So I ask myself a very important recursion question:
If I know how to print from n to 1, can I reduce the problem to a smaller problem?
Yes.
If I print n, then I just need to print (n-1) to 1. And that is the same problem but smaller. So the logic becomes:
```java
print(n)
then call function for (n-1)
```
But recursion always needs a base case, otherwise it will run forever.
**When should we stop?**
If n becomes 0, we should stop. So base case:

```java
if n == 0 → stop
```
So the Recursive Thinking Becomes

```java
function print(n):
    if n == 0:
        return
    print(n)
    print(n-1)
```

But careful — the second `print(n-1)` is actually a **function call**, not a print statement:

```java
print(n)
call function(n-1)
```

### Recursion Flow (Dry Run)

Let’s say n = 5. What happens?

```java
print(5)
 → prints 5
 → calls print(4)

print(4)
 → prints 4
 → calls print(3)

print(3)
 → prints 3
 → calls print(2)

print(2)
 → prints 2
 → calls print(1)

print(1)
 → prints 1
 → calls print(0)

print(0)
 → base case → return
```
So output becomes:

```java
5
4
3
2
1
```

### The Most Important Concept Here
In recursion, the **order matters**: If you write:
```java
print(n)
call print(n-1)
```
→ Output: n to 1
If you write:
```java
call print(n-1)
print(n)
```
→ Output: 1 to n

This is a very very important recursion concept:
```java
Work before recursive call → decreasing order
Work after recursive call → increasing order
```
### Pseudocode (Final)
```java
function print(n):
    if n == 0:
        return
    print(n)
    print(n-1)
```

### Edge Cases
- n = 0 → print nothing  
- n = 1 → print 1  
- n < 0 → invalid input  
- Very large n → stack overflow due to recursion depth  
### Time Complexity
Function called for:
```java
n, n-1, n-2, ..., 1
Total calls = n
Time Complexity = O(n)
```
### Space Complexity
Recursion stack stores:
```java
print(n)
print(n-1)
print(n-2)
...
Stack depth = n
Space Complexity = O(n)
```
### Patterns You Should Remember

These recursion patterns are extremely common:
```java
Problem              Recursive Pattern
Print n to 1         print(n), call(n-1)
Print 1 to n         call(n-1), print(n)
Factorial            n * fact(n-1)
Sum of n numbers     n + sum(n-1)
Fibonacci            f(n-1) + f(n-2)
```
These are recursion fundamentals.