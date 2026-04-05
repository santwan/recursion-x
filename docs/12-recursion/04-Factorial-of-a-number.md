---
sidebar_position: 4
---

# Factorial of a number


Alright, factorial… what does factorial actually mean?  
Factorial of a number **n** means I multiply all numbers from **n down to 1**.

So for example:

```
5! = 5 × 4 × 3 × 2 × 1
4! = 4 × 3 × 2 × 1
3! = 3 × 2 × 1
```

Now I want you to notice something very important here.

Look carefully:

```
5! = 5 × 4!
4! = 4 × 3!
3! = 3 × 2!
2! = 2 × 1!
```

So I can actually write a formula:

```
n! = n × (n-1)!
```

Now this is very interesting, because the factorial function is calling itself with a smaller number.  
And whenever a function calls itself, that means **recursion**.

But wait — recursion always needs a stopping point, otherwise it will keep calling forever.

So when should we stop?

We know:

```
1! = 1
0! = 1
```

So these will be our **base cases**.

So now my thinking becomes:

```
If n is 0 or 1 → return 1
Otherwise → return n × factorial(n-1)
```

That’s it. That’s the whole recursion logic.

---

## Let’s Dry Run (Very Important)

Let’s say I call:

```
factorial(5)
```

What happens?

```
factorial(5)
= 5 * factorial(4)

factorial(4)
= 4 * factorial(3)

factorial(3)
= 3 * factorial(2)

factorial(2)
= 2 * factorial(1)

factorial(1)
= 1   ← base case reached
```

Now values start returning back:

```
factorial(2) = 2 * 1 = 2
factorial(3) = 3 * 2 = 6
factorial(4) = 4 * 6 = 24
factorial(5) = 5 * 24 = 120
```

So recursion goes **down first**, then comes **back up multiplying**.

---

## Very Important Concept

```
Recursion = function calls go down the stack, then results come back up.
```

---

## Pseudocode (Thinking Steps)

```
factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n-1)
```

---

## Edge Cases (Think Like Interviewer)

If I am in an interview, I should immediately think:

- What if n = 0? → return 1  
- What if n = 1? → return 1  
- What if n is negative? → factorial not defined  
- What if n is very large? → stack overflow (too many recursive calls)  
- What if factorial becomes very large? → integer overflow  

---

## Time Complexity (Think Properly)

How many function calls happen?

```
factorial(n)
factorial(n-1)
factorial(n-2)
...
factorial(1)
```

Total calls = n

So:

```
Time Complexity = O(n)
```

---

## Space Complexity

Because recursion uses call stack, and we have n function calls in stack:

```
Space Complexity = O(n)
```

---

## Very Important Interview Follow-up Questions

After this problem, interviewer usually asks:

- Write factorial using iteration
- Which one is better — recursion or iteration?
- What is tail recursion?
- What happens in stack memory during recursion?

We’ll cover these next.