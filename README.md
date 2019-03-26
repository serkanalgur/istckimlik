# isTCKimlik

A tool for validate Turkish National ID Number

## Installation

You can install this component via npm or yarn

```bash
npm install istckimlik
yarn add istckimlik
```

## Usage

You can import your project and ask script is Turkish National ID Number is true or false

```js
import {isTCKimlik} from 'istckimlik'

let checkTC = isTCKimlik(34123889266);
// function will return true or false P.S you need to give variable as number.
// second P.S : this Turkish national ID Number is auto generated
```