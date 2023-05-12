# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jonascura/lotide`

**Require it:**

`const _ = require('@jonascura/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(...)`: Compares two arguments
* `eqArrays(...)`: Prepares arrays for comparison
* `assertArraysEqual(...)`: Compares two arrays
* `eqObjects(...)`: Prepares objects for comparison
* `assertObjectsEqual(...)`: Compares two objects
* `head(...)`: Gets first value of an array
* `tail(...)`: Gets values of array after the first index
* `middle(...)`: Gets array of middle value(s) from an array
* `countLetters(...)`: Gets number of times each letter in a given string is repeated
* `countOnly(...)`: Gets number of times a given item appears in a string
* `findKey(...)`: Gets key from given argument
* `findKeyByValue(...)`: Gets key using key value
* `flatten(...)`: Returns single array from multiple arrays of arrays
* `letterPositions(...)`: Gets each letters at the indexes of their appearance
* `map(...)`: Iterates through each value in an array
* `takeUntil(...)`: Retruns an array of values up to a given value
* `without(...)`: Returns an array without given value