# isTCKimlik [![Build Status](https://travis-ci.org/serkanalgur/istckimlik.svg?branch=master)](https://travis-ci.org/serkanalgur/istckimlik) ![npm](https://img.shields.io/npm/dt/istckimlik) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/istckimlik)

A tool for validate Turkish Identification Number

## Installation

You can install this component via npm or yarn

```bash
npm install istckimlik
yarn add istckimlik
```

## Usage

You can import your project and ask script is Turkish Identification Number is true or false

```js
var kontrol = require('istckimlik')

console.log(kontrol.isTCKimlik(34123889266));
// function will return true or false P.S you need to give variable as number.
// second P.S : this Turkish Identification Number is auto generated
```
