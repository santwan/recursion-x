---
sidebar_position: 6
---

# Sum of N natural numbers 

## Recursive Thinking

**How am I thinking to solve this problem?**
Okay, I need to find:
```java
sum(n) = 1 + 2 + 3 + 4 + ... + n
```
Let me try with a small number.
If n = 5:
```java
1 + 2 + 3 + 4 + 5 = 15
```
But I want to think in recursion style — meaning I want to express the problem in terms of a smaller problem. So I think like this:
```java
sum(5) = 5 + sum(4)
sum(4) = 4 + sum(3)
sum(3) = 3 + sum(2)
sum(2) = 2 + sum(1)
sum(1) = 1
```
Now I see a pattern:
```java
sum(n) = n + sum(n-1)
```
This is exactly like factorial logic, but instead of multiply, we add.
## Base Case (Very Important)
Recursion must stop somewhere.
When should it stop?
```java
If n == 0 → sum = 0
If n == 1 → sum = 1
```
So base case can be:
```java
if n == 0 → return 0
```
## So the Recursion Logic Becomes
Think in recursion template:
```java
function sum(n):
    if n == 0:
        return 0
    return n + sum(n-1)
```
That’s the whole recursion.
## Dry Run (Very Important)
Let’s calculate sum(5).

```java
sum(5)
= 5 + sum(4)
= 5 + (4 + sum(3))
= 5 + (4 + (3 + sum(2)))
= 5 + (4 + (3 + (2 + sum(1))))
= 5 + (4 + (3 + (2 + (1 + sum(0)))))
= 5 + 4 + 3 + 2 + 1 + 0
= 15
```
Recursion goes down to 0, then values return back and add.
- In factorial → values return and multiply
- In sum → values return and add

## Recursion Tree 
Let’s draw the recursion tree for `sum(5)`
```
### Recursive Calls (Going Down)
```java
sum(5)
 └── sum(4)
      └── sum(3)
           └── sum(2)
                └── sum(1)
                     └── sum(0)
```
### Returning Phase (Coming Back Up)
Now the base case is reached that is `sum(0) = 0`
Now values return back one by one:
```java
sum(1) = 1 + sum(0) = 1
sum(2) = 2 + sum(1) = 3
sum(3) = 3 + sum(2) = 6
sum(4) = 4 + sum(3) = 10
sum(5) = 5 + sum(4) = 15
```
### Full Recursion Flow (Tree View with Returns)
```java
sum(5)
|
|-- sum(4)
|    |
|    |-- sum(3)
|    |    |
|    |    |-- sum(2)
|    |    |    |
|    |    |    |-- sum(1)
|    |    |    |    |
|    |    |    |    |-- sum(0) = 0
|    |    |    |
|    |    |    |<- returns 1
|    |    |
|    |    |<- returns 3
|    |
|    |<- returns 6
|
|<- returns 10
Final return = 15
```
- Factorial → multiply while returning
- Sum → add while returning
- Print → print before or after call depending on order

## Pseudocode

```java
sum(n):
    if n == 0:
        return 0
    else:
        return n + sum(n-1)
```

## Edge Cases

Think like interviewer:

- n = 0 → sum = 0  
- n = 1 → sum = 1  
- n < 0 → invalid input  
- Large n → stack overflow due to recursion depth  
- Sum may overflow integer for very large n  

## Time Complexity

How many recursive calls?

```java
sum(n)
sum(n-1)
sum(n-2)
...
sum(0)

Total calls = n
Time Complexity = O(n)
```

## Space Complexity

Because recursion stack stores function calls:

```java
sum(n)
sum(n-1)
sum(n-2)
...

Stack depth = n
Space Complexity = O(n)
```

## Very Important Pattern You Should Notice

These recursion formulas are extremely important:

| Problem        | Recursive Relation     | What Happens |
|----------------|------------------------|--------------|
| Factorial      | n × fact(n-1)          | Multiply while returning |
| Sum of n       | n + sum(n-1)           | Add while returning |
| Fibonacci      | f(n-1) + f(n-2)        | Two recursive calls |
| Print n to 1   | print(n), f(n-1)       | Work before call |
| Print 1 to n   | f(n-1), print(n)       | Work after call |

These are recursion fundamentals and will be used everywhere later (trees, DP, backtracking).