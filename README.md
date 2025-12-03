# isTCKimlik ![npm](https://img.shields.io/npm/dt/istckimlik) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/istckimlik)

A tool for validate Turkish Identification Number

## Installation

You can install this component via npm or yarn

```bash
npm install istckimlik
yarn add istckimlik
```

## Usage

### CommonJS

```js
const { isTCKimlik } = require('istckimlik');

// Pass a number to validate
const isValid = isTCKimlik(48265878901);
console.log(isValid); // returns true or false
```

### ES Module / TypeScript

```ts
import { isTCKimlik } from 'istckimlik';

// The function accepts a number and returns a boolean
const isValid: boolean = isTCKimlik(48265878901);
console.log(isValid); // returns true or false
```

## Validation Rules

A valid Turkish ID must meet these criteria:

- Must be exactly 11 digits
- Cannot start with 0
- Must pass the checksum validation (mod 10 checks)

## Notes

- Input must be a **number** type
- Returns `true` if the ID is valid, `false` otherwise