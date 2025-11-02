---
sidebar_position: 3
---

# Dynamic Arrays: The `ArrayList`

A **dynamic array** is a resizable list data structure that automatically manages its storage. Unlike a standard array, which has a fixed size defined at creation, a dynamic array can grow or shrink as you add or remove elements, providing much greater flexibility.

---

The `ArrayList` is a core part of the Java Collections Framework. It implements the `List` interface, providing an ordered collection of elements.

## **Key Characteristics:**

- **Resizable:** Its primary feature. It grows automatically when it runs out of space.
- **Object-Only:** It can only store **Objects**. You cannot use primitive types like `int`, `double`, or `char` directly. You must use their corresponding **wrapper classes**: `Integer`, `Double`, `Character`, etc.
- **Ordered:** It maintains the insertion order of elements. The element you add first is at index 0, the second is at index 1, and so on.
- **Allows Duplicates:** You can store the same element multiple times in an `ArrayList`.

---

## How `ArrayList` Works Internally: Capacity vs. Size

To understand `ArrayList`, you must know the difference between its **size** and its **capacity**.

- **`size`**: This is the number of elements *currently stored* in the `ArrayList`. This is what you interact with via the `.size()` method.
- **`capacity`**: This is the length of the underlying, hidden array that the `ArrayList` uses to store its elements. The capacity is always greater than or equal to the size.

**The Automatic Growth Mechanism:**

1. When you create a new `ArrayList` (e.g., `new ArrayList<>()`), it starts with an internal array of a default capacity (usually 10).
2. You add elements using the `.add()` method. The `size` increases, but the `capacity` remains the same as long as there is room.
3. When you try to add an element that exceeds the current `capacity`, the `ArrayList` performs a **resizing operation**:
a. It creates a **brand new, larger array**. The new capacity is typically 1.5 times the old capacity (`new_capacity = old_capacity * 1.5`).
b. It copies all the elements from the old internal array to the new one.
c. The new element is then added to this new array.
d. The old array is discarded by the garbage collector.

This resizing is what makes it "dynamic," but it comes at a performance cost (O(n)) because all elements must be copied.

---

## Creation and Core Methods

You must first `import java.util.ArrayList;` to use the class.

### **Creation**

```java
`// 1. Default constructor (starts with capacity 10)
ArrayList<String> names = new ArrayList<>();

// 2. With a specified initial capacity (good for performance if you know the rough size)
ArrayList<Integer> numbers = new ArrayList<>(50); // Avoids the first few resizes

// 3. From another collection
List<String> anotherList = List.of("A", "B");
ArrayList<String> fromList = new ArrayList<>(anotherList);
```

### **Core Methods**

- **Adding Elements**
    - `boolean add(E element)`: Adds an element to the end of the list.
    - `void add(int index, E element)`: Inserts an element at a specific index, shifting subsequent elements.
    
    ```java
    names.add("Alice"); // ["Alice"]
    names.add("Bob");   // ["Alice", "Bob"]
    names.add(1, "Charlie"); // ["Alice", "Charlie", "Bob"]
    ```
    
- **Accessing Elements**
    - `E get(int index)`: Retrieves the element at a specific index.
    
    ```java
    String secondName = names.get(1); // "Charlie"
    ```
    
- **Updating Elements**
    - `E set(int index, E element)`: Replaces the element at a specific index with a new one.
        
        ```java
        names.set(0, "Zoe"); // ["Zoe", "Charlie", "Bob"]
        ```
        
- **Removing Elements**
    - `E remove(int index)`: Removes the element at a specific index.
    - `boolean remove(Object o)`: Removes the first occurrence of the specified element.
        
        ```java
        names.remove(1); // Removes "Charlie". List is now ["Zoe", "Bob"]
        ```
        
- **Utility Methods**
    - `int size()`: Returns the number of elements in the list.
    - `boolean isEmpty()`: Returns `true` if the list has no elements.
    - `void clear()`: Removes all elements from the list.
    - `boolean contains(Object o)`: Returns `true` if the list contains the specified element.
    - `int indexOf(Object o)`: Returns the index of the first occurrence of an element, or -1 if not found.

```java
import java.util.ArrayList; // Don't forget to import it!

public class DynamicArrayExample {
    public static void main(String[] args) {
        // 1. Creation
        // We use the wrapper class 'Integer', not 'int'
        ArrayList<Integer> numberList = new ArrayList<>();

        // 2. Adding elements (it grows automatically)
        numberList.add(100); // Adds 100 to the end
        numberList.add(200);
        numberList.add(0, 50); // Inserts 50 at index 0

        // Current list: [50, 100, 200]
        System.out.println(numberList);

        // 3. Accessing elements
        int firstElement = numberList.get(0); // Gets element at index 0
        System.out.println("First Element: " + firstElement); // Prints 50

        // 4. Getting the size
        System.out.println("Size: " + numberList.size()); // Prints 3

        // 5. Removing an element
        numberList.remove(1); // Removes the element at index 1 (which is 100)

        // Current list: [50, 200]
        System.out.println(numberList);
    }
}
```

---

## Iterating Over an `ArrayList`

There are several ways to loop through the elements of an `ArrayList`.

1. **Enhanced `for-each` Loop (Preferred)**: Simple, readable, and safe.
    
    ```java
    for (String name : names) {
        System.out.println(name);
    }
    ```
    
2. **Standard `for` Loop**: Use when you need the index of the elements.
    
    ```java
    for (int i = 0; i < names.size(); i++) {
        System.out.println("N ame at index " + i + " is " + names.get(i));
    }
    ```
    
3. **`Iterator`**: More complex, but it's the only safe way to remove elements from a list while iterating over it.
    
    ```java
    import java.util.Iterator;
    
    Iterator<String> it = names.iterator();
    while (it.hasNext()) {
        String name = it.next();
        if (name.equals("Bob")) {
            it.remove(); // Safely removes "Bob" from the list
        }
    }
    ```
    

## Iterator

An **`Iterator`** is an object used to loop through collections like `ArrayList` or `HashSet` one element at a time. Its main purpose is to provide a universal way to traverse collections and, most importantly, to **safely remove elements from a collection while you are looping through it.**