---
sidebar_position: 1
---

# Introduction

A **1D array** in Java is a fundamental data structure that stores a fixed-size, sequential collection of elements of the same data type. Think of it as a row of numbered containers, where each container holds a value of a specific type (like `int`, `String`, or a custom object).

Working with arrays is a three-step process: you declare a reference, create the array object in memory, and then initialize its elements.

## **Declaration**

This step simply tells the compiler that you'll be using an array. It creates a reference variable (a pointer) that doesn't yet point to an actual array.

**Syntax:**
You can place the square brackets `[]` after the data type or after the variable name. The first way is generally preferred.

```js
// Preferred syntax
int[] scores;
String[] names;

// Also valid, but less common
double temperatures[];
```

At this stage, `scores` is just a reference holding a `null` value.

---

## **Creation (Instantiation)**

This is where you allocate memory for the array using the `new` keyword. You must specify the size of the array, which is fixed for its lifetime.

**Syntax:**

```js
// Create an integer array that can hold 5 elements
scores = new int[5];

// Create a String array that can hold 10 elements
names = new String[10];
```

- **Memory:** The array object is created on the **heap**. The `scores` variable (on the **stack**) now holds the memory address of this new object.
- **Default Values:** When an array is created, its elements are automatically initialized with default values:
    - Numeric types (`int`, `double`, etc.): `0` or `0.0`
    - `boolean`: `false`
    - Object types (like `String`): `null`

> You can also combine declaration and creation into a single line, which is very common.
> 

```java
// Declare and create an integer array of size 3
int[] marks = new int[3];
```

---

## **Initialization**

This is the process of assigning actual values to the array's elements. Array elements are accessed using a **zero-based index**. This means the first element is at index `0`, the second at index `1`, and so on, up to `length - 1`.

**Syntax:**

```java
// Initialize the 'marks' array from the previous step
marks[0] = 95;  // First element
marks[1] = 87;  // Second element
marks[2] = 91;  // Third element

// Trying to access marks[3] would cause an ArrayIndexOutOfBoundsException!
```

---

## **The Shortcut: All-in-One**

For convenience, Java provides a shortcut to declare, create, and initialize an array in a single statement. This is often called an **array literal** or **array initializer**.

```java
// Java infers the size from the number of elements provided.
int[] numbers = {10, 20, 30, 40, 50}; // Creates an int array of size 5
String[] days = {"Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"};
```

## Iterating Through an Array

Looping is essential for processing array elements.

**1. Standard `for` Loop:** Use this when you need the index.

```java
int[] scores = {98, 85, 100, 76};
for (int i = 0; i < scores.length; i++) {
    System.out.println("Score at index " + i + " is " + scores[i]);
}
```

**2. Enhanced `for-each` Loop:** Use this for cleaner code when you just need the value of each element and not its index.

```java
double[] prices = {19.99, 25.50, 10.00};
for (double price : prices) {
    System.out.println("Price: " + price);
}
```