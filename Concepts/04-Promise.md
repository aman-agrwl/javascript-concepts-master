# Promises in JavaScript

This document provides a brief overview of Promises in JavaScript, a fundamental concept for handling asynchronous operations.

## What are Promises?

* A Promise represents the eventual outcome (success or failure) of an asynchronous operation.
* It acts as a placeholder for a value that will be available in the future.
* This allows for cleaner and more manageable asynchronous code.

## Key Characteristics

* **Three States:**
    * **Pending:** The initial state before the operation completes.
    * **Fulfilled:** The operation succeeded, and the Promise holds the resulting value.
    * **Rejected:** The operation failed, and the Promise holds an error object.
* **Creation:**
    * Promises are created using the `new Promise` constructor.
    * The constructor accepts an "executor" function that defines the asynchronous operation.
* **Resolution:**
    * The executor function can call `resolve()` to fulfill the Promise with a value.
    * It can call `reject()` to reject the Promise with an error.

## Handling Promises

* **`then()` method:**
    * Attaches callbacks to handle the fulfilled value of a Promise.
    * Can optionally include a second callback to handle rejection.
* **`catch()` method:**
    * Specifically handles rejection cases of a Promise.

## Benefits

* **Improved Readability:** Simplifies asynchronous code by separating logic and handling.
* **Better Error Handling:** Provides a structured way to deal with errors in asynchronous operations.
* **Chaining:** Allows for sequential execution of asynchronous operations.


## Example

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    resolve("Promise fulfilled!"); 
  }, 1000); 
});

myPromise
  .then(result => {
    console.log(result); // Output: "Promise fulfilled!"
  })
  .catch(error => {
    console.error("Promise rejected:", error);
  });
```


  
## Problems

| Problem | Description | Solution |
|---|---|---|
| [Problem 1](../Problems/04-Promise/problem1.js) | Given two promises promise1 and promise2, return a new promise.  `promise1` and `promise2` will both resolve with a number. The returned promise should resolve with the sum of the two numbers.. | [View Solution](../Problems/04-Promise/problem1.ts) |