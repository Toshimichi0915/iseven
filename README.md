# iseven

Checks if the number is even.
(Note: this is a joke package and should not be used in production. This package exists for the sole purpose of demonstrating how to publish a package to npm.)

## Install

```bash
npm install iseven
```

## Usage

```js
import isEven from "iseven";

isEven(2); // true
isEven(3); // false
isEven("2"); // true
isEven("3"); // false
isEven(() => "2"); // true
isEven(() => "3"); // false
isEven(async () => "2"); // true
isEven(async () => "3"); // false
```
