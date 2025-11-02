---
sidebar_position: 2
---

# Built-in Array Utilities: The `Arrays` Class

Java's `java.util.Arrays` class is a utility that provides a collection of static methods for common array manipulations. You don't use it on an array directly like `myArray.sort()`, but rather call the class method like `Arrays.sort(myArray)`.

Here are some of the most useful functions:

## **`Arrays.toString(array)`**:

This is essential for printing. If you just print an array object, you'll get its memory address. `toString()` returns a nice, readable string representation

```java
int[] nums = {10, 50, 20};
System.out.println(nums); // Prints something like [I@1b6d3586
System.out.println(Arrays.toString(nums)); // Prints [10, 50, 20]
```

## **`Arrays.sort(array)`**:

Sorts the array in ascending order. For objects, the object's class must implement the `Comparable` interface.

```java
int[] nums = {10, 50, 20, 5, 40};
Arrays.sort(nums);
// nums is now {5, 10, 20, 40, 50}
System.out.println(Arrays.toString(nums));
```

## **`Arrays.equals(array1, array2)`**:

Compares two arrays to see if they are "deeply equal," meaning they have the same elements in the same order. This is different from `array1 == array2`, which checks if they are the exact same object in memory.

```java
int[] arr1 = {1, 2, 3};
int[] arr2 = {1, 2, 3};
boolean areEqual = Arrays.equals(arr1, arr2); // true
```

## **`Arrays.copyOf(originalArray, newLength)`**:

- This is the standard way to "resize" an array. It creates a new array of the specified length and copies elements from the original.
    
    ```java
    int[] original = {10, 20, 30};
    int[] expanded = Arrays.copyOf(original, 5); // expanded is {10, 20, 30, 0, 0}
    int[] truncated = Arrays.copyOf(original, 2); // truncated is {10, 20}
    ```
    

## **`Arrays.binarySearch(array, key)`**:

- Performs a highly efficient search for a value (`key`). **Important:** The array **must be sorted** before you use this method.Java
    
    ```java
    int[] sortedNums = {5, 10, 20, 40, 50};
    int index = Arrays.binarySearch(sortedNums, 20); // index is 2
    ```

---