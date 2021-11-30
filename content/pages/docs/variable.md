---
title: Variable
date: Last Modified
slug: variable
eleventyNavigation:
  key: Variable
  order: 121
  title: Variable
  parent: Docs
---

Enables the ability to set and load variables per session or across sessions (globally). That is, global variables persist even if you close the overlay.

Global variables have been updated to allow more data to be stored. However, please be aware of how much data you're storing.


## Variable Triggers
None at the moment.

***

## Variable Actions

### Variable Load
| | |
------------ | -------------
**Info** | Used to load a previously set variable during the current session. `<name>` is the name assigned to the value.
**Format** | `Variable Load <name>`
**Example** | `Variable Load Recent_Sub`

#### Parameters
| | |
------------ | -------------
**\<name\>** | The variable value where **\<name\>** is the name of the variable.

::: callout-blue
**Note:** The above example, `Variable Load Recent_Sub`, would return the parameter **Recent_Sub**.
:::

***

### Variable Remove
| | |
------------ | -------------
**Info** | Used to delete a previously set variable during the current session. `<name>` is the name assigned to the value.
**Format** | `Variable Remove <name>`
**Example** | `Variable Remove Recent_Sub`

***

### Variable Set
| | |
------------ | -------------
**Info** | Used to set a variable during the current session. `<name>` is the name assigned to the value. `<value>` is the variable value.
**Format** | `Variable Set <name> <value>`
**Example** | `Variable Set Recent_Sub Kruiser8`

#### Parameters
| | |
------------ | -------------
**\<name\>** | The variable value where **\<name\>** is the name of the variable.

::: callout-blue
**Note:** The above example, `Variable Set Recent_Sub Kruiser8`, would return the parameter **Recent_Sub**.
:::

***

### Variable Global Clear
| | |
------------ | -------------
**Info** | Used to clear all previously set global variables.
**Format** | `Variable Global Clear`
**Example** | `Variable Global Clear`

***

### Variable Global Load
| | |
------------ | -------------
**Info** | Used to load a previously set global variable. Global variables persist even when the browser is closed. `<name>` is the name assigned to the value.
**Format** | `Variable Global Load <name>`
**Example** | `Variable Global Load Recent_Sub`

#### Parameters
| | |
------------ | -------------
**\<name\>** | The variable value where **\<name\>** is the name of the variable.

::: callout-blue
**Note:** The above example, `Variable Global Load Recent_Sub`, would return the parameter **Recent_Sub**.
:::

***

### Variable Global Remove
| | |
------------ | -------------
**Info** | Used to remove a previously set global variable. `<name>` is the name assigned to the value.
**Format** | `Variable Global Remove <name>`
**Example** | `Variable Global Remove Recent_Sub`

***

### Variable Global Set
| | |
------------ | -------------
**Info** | Used to set a global variable. Global variables persist even when the browser is closed. `<name>` is the name assigned to the value. `<value>` is the variable value.
**Format** | `Variable Global Set <name> <value>`
**Example** | `Variable Global Set Recent_Sub Kruiser8`

#### Parameters
| | |
------------ | -------------
**\<name\>** | The variable value where **\<name\>** is the name of the variable.

::: callout-blue
**Note:** The above example, `Variable Global Set Recent_Sub Kruiser8`, would return the parameter **Recent_Sub**.
:::
