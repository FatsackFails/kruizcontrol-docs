---
title: Cooldown
date: Last Modified
slug: cooldown
eleventyNavigation:
  key: Cooldown
  order: 107
  title: Cooldown
  parent: Docs
---

Adds the ability to give events a cooldown so that they cannot be repeated within a period of time.

## Cooldown Triggers
None at the moment.

***

## Cooldown Actions

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

### Cooldown Clear
| | |
------------ | -------------
**Info** | Used to clear (remove) an existing cooldown. `<name>` is the identifier for the cooldown.
**Format** | `Cooldown Clear <name>`
**Example** | `Cooldown Clear MyCustomTrigger`

***

### Cooldown Global Apply
| | |
------------ | -------------
**Info** | Used to apply a global cooldown to triggers. Global cooldowns persist between sessions (i.e. the cooldown remains after a reset). `<name>` is the identifier for the cooldown. `<seconds>` is the number of seconds before the trigger can fire again.
**Format** | `Cooldown Global Apply <name> <seconds>`
**Example** | `Cooldown Global Apply MyCustomTrigger 30`

***

### Cooldown Global Check
| | |
------------ | -------------
**Info** | Used to check if a global cooldown is active. Global cooldowns persist between sessions (i.e. the cooldown remains after a reset). `<name>` is the identifier for the cooldown.
**Format** | `Cooldown Global Check <name>`
**Example** | `Cooldown Global Check MyCustomTrigger`

#### Parameters
| | |
------------ | -------------
**\<name\>** | [True/False] Whether or not the cooldown is active where **\<name\>** is the name of the cooldown.
**cooldown** | The number of seconds (rounded to a whole number) left on the cooldown. This is only returned if the cooldown is active (`<name>` is True).
**cooldown_real** | The decimal number of seconds left on the cooldown. This is only returned if the cooldown is active (`<name>` is True).

::: callout
**Note:** The above example, `Cooldown Global Check MyCustomTrigger`, would return the parameter **MyCustomTrigger**._
:::

***

### Cooldown Global Clear
| | |
------------ | -------------
**Info** | Used to clear (remove) an existing global cooldown. Global cooldowns persist between sessions (i.e. the cooldown remains after a reset). `<name>` is the identifier for the cooldown.
**Format** | `Cooldown Global Clear <name>`
**Example** | `Cooldown Global Clear MyCustomTrigger`

***
