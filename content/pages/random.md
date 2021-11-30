---
title: Random
date: Last Modified
slug: random
eleventyNavigation:
  key: Random
  order: 115
  title: Random
  parent: Docs
---

Adds the ability to randomly choose between multiple actions.

## Random Triggers
None at the moment.

***

## Random Actions

### Random Equal
| | |
------------ | -------------
**Info** | Randomly selects an action. Note that "Equal" is optional.
**Format** | `Random Equal <action> <action> ...`
**Example** | `Random Equal "chat send 'hello world'" "chat send 'did you know tarantulas molt?'"`
**Example without "Equal"** | `Random "chat send 'a'" "chat send 'b'" "chat send 'c'"`

***

### Random Number
| | |
------------ | -------------
**Info** | Randomly generates an integer between a min and max value (`[min, max]`). If no input is specified, 0 is used as the min and 100 is used as the max.
**Format** | `Random Number <optional_min> <optional_max>`
**Example** | `Random Number 30 75`
**Example without values** | `Random Number`
**Example with min only** | `Random Number 20`

#### Parameters
| | |
------------ | -------------
**number** | The number produced by the random generation.

***

### Random Probability
| | |
------------ | -------------
**Info** | Randomly selects an action based on the input probabilities. The `<number>` values are scaled to 100 to provide a normalized probability.
**Format** | `Random Probability <action> <number> <action> <number> ...`
**Example** | `Random Probability "chat send 'hello world'" 3 "chat send 'did you know tarantulas molt?'" 1`

***
