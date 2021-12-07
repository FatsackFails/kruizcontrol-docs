---
title: Miscellaneous
date: Last Modified
slug: miscellaneous
eleventyNavigation:
  key: Miscellaneous
  order: 112
  title: Miscellaneous
  parent: Docs
---

A small selection of actions that are included for increased usability.

## Miscellaneous Triggers

### OnInit
| | |
------------ | -------------
**Info** | Used to fire a set of actions when Kruiz Control starts.
**Format** | `OnInit`
**Example** | `OnInit`

***

## Miscellaneous Actions

### AsyncFunction
`AsyncFunction` is an alternate to [`Function`](#function) that allows you to call javascript code using the `await` keyword. This is for advanced use cases that require API calls, promises, etc. For more information, please see this [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction).

| | |
------------ | -------------
**Info** | Used to create an async javascript function using the input text. For more information see [Function](#function).
**Format** | `AsyncFunction <function>`
**Example** | `AsyncFunction 'return {total: {total} + 1}'`

***

### Cooldown Apply
| | |
------------ | -------------
**Info** | Used to apply a cooldown to triggers. `<name>` is the identifier for the cooldown. `<seconds>` is the number of seconds before the trigger can fire again.
**Format** | `Cooldown Apply <name> <seconds>`
**Example** | `Cooldown Apply MyCustomTrigger 30`

***

### Cooldown Check
| | |
------------ | -------------
**Info** | Used to check if a cooldown is active. `<name>` is the identifier for the cooldown.
**Format** | `Cooldown Check <name>`
**Example** | `Cooldown Check MyCustomTrigger`

#### Parameters
| | |
------------ | -------------
**\<name\>** | [True/False] Whether or not the cooldown is active where **\<name\>** is the name of the cooldown.
**cooldown** | The number of seconds (rounded to a whole number) left on the cooldown. This is only returned if the cooldown is active (`<name>` is True).
**cooldown_real** | The decimal number of seconds left on the cooldown. This is only returned if the cooldown is active (`<name>` is True).

::: callout
**Note:** The above example, `Cooldown Check MyCustomTrigger`, would return the parameter **MyCustomTrigger**.
:::

***

### Delay
| | |
------------ | -------------
**Info** | Used to wait a specific number of seconds before taking the next action.
**Format** | `Delay <seconds>`
**Example** | `Delay 8`

***

### Error
| | |
------------ | -------------
**Info** | Used to `console.error` log a message for use in debugging or testing.
**Format** | `Error <message>`
**Example** | `Error "Is this called?"`

***

### Exit
| | |
------------ | -------------
**Info** | Used to exit an event without processing the rest of the actions.
**Format** | `Exit`
**Example** | `Exit`

***

### Function
| | |
------------ | -------------
**Info** | Used to create a javascript function using the input text. This enables custom logic to be used in the script. `<function>` is explained below.
**Format** | `Function <function>`
**Example** | `Function 'return {total: {total} + 1}'`

`<function>` is a javascript function body. For reference, please see this [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function). If the function returns an object, each property of the Object is usable as a parameter in the rest of the trigger.

The below returns a random element from an array in _api_data_.
```js
Function 'var arr = [api_data]; return {random: arr[Math.floor(Math.random() * arr.length)]}'
```

If a `continue` parameter is returned and the value is `false`, the trigger will exit and not continue processing actions.

If an `actions` array parameter is returned, each item of the array will be inserted into the event and processed.

***

### If
The **If** action lets you exit out of a trigger if a specific criteria isn't met by comparing two values.

The following `<comparator>` values are valid: `=`, `<`, `>`, `<=`, `>=`, `!=` (not equal).

Multiple comparisons can be combined in one **If** line using the following `<conjunction>` values: `and`, `or`.

The `<optional_skip>` value allows you to specify the number of lines to skip if the criteria is not met. This value is completely optional and allows for advanced logic handling.


| | |
------------ | -------------
**Info** | Used to determine whether or not the trigger should complete the rest of the actions.
**Format** | `If <optional_skip> <value_a> <comparator> <value_b> <conjunction> <value_c> <comparator> <value_d> ...`
**Example (single comparison)** | `If {amount} >= 100`
**Example (single comparison with skip value)** | `If 3 {amount} >= 100`
**Example (two comparisons)** | `If {amount} >= 100 and {amount} < 1000`
**Example (two comparisons with skip value)** | `If 2 {amount} >= 100 and {amount} < 1000`
**Example (multiple comparisons)** | `If {amount} >= 100 and {amount} < 1000 and {amount} != 123`
**Example (multiple comparisons with skip value)** | `If 6 {amount} >= 100 and {amount} < 1000 and {amount} != 123`

***

### Log
| | |
------------ | -------------
**Info** | Used to `console.log` log a message for use in debugging or testing. Logs do not show in the OBS log file but [`Error`](#error) logs do.
**Format** | `Log <message>`
**Example** | `Log "Is this called?"`

***

### Loop
| | |
------------ | -------------
**Info** | Used to repeat a set of actions a specified number of times. `<lines>` is the number of actions/lines to repeat. `<times>` is the number of times to repeat the actions/lines.
**Format** | `Loop <lines> <times>`
**Example** | `Loop 8 10`

***

### Play
| | |
------------ | -------------
**Info** | Used to play a sound effect inside of the _sounds_ folder. `<volume>` is a number greater than 0 and can be greater than 100. `<wait/nowait>` determines whether or not the script waits until the song is done playing before completing the next action.
**Format** | `Play <volume> <wait/nowait> <song_file>`
**Example** | `Play 30 wait MashiahMusic__Kygo-Style-Melody.wav`

***

### Play Stop
| | |
------------ | -------------
**Info** | Used to stop all sounds that are currently playing in Kruiz Control with `Play`.
**Format** | `Play Stop`
**Example** | `Play Stop`

***

### Reset
| | |
------------ | -------------
**Info** | Used to reload Kruiz Control and read in the most recent trigger information.
**Format** | `Reset`
**Example** | `Reset`

***

### Skip
| | |
------------ | -------------
**Info** | Used to skip over the next `<number>` of lines in an event.
**Format** | `Skip <number>`
**Example** | `Skip 3`

***
