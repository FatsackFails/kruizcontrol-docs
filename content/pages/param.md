---
title: Param
date: Last Modified
slug: param
eleventyNavigation:
  key: Param
  order: 114
  title: Param
  parent: Docs
---

Adds the ability to easily manipulate parameters through actions.

## Param Triggers
None at the moment.

***

## Param Actions

### Param Add
| | |
------------ | -------------
**Info** | Adds the given amount to an existing parameter. `<parameter>` is the name of the existing parameter. `<number>` is the value to add.
**Format** | `Param Add <parameter> <number>`
**Example** | `Param Add counter 1`

#### Parameters
| | |
------------ | -------------
**\<parameter\>** | The lowercased parameter value where **\<parameter\>** is the name of the parameter.

***

### Param Copy
| | |
------------ | -------------
**Info** | Copy the given parameter into a new parameter. `<parameter>` is the name of the existing parameter. `<new>` is the name of the destination parameter to copy the value.
**Format** | `Param Copy <parameter> <new>`
**Example** | `Param Copy api_data image`

#### Parameters
| | |
------------ | -------------
**\<new\>** | The new parameter value where **\<new\>** is the name of the parameter.

***

### Param Create
| | |
------------ | -------------
**Info** | Create a new parameter. `<parameter>` is the name of the new parameter to create. `<value>` is the initial value for the parameter.
**Format** | `Param Create <parameter> <value>`
**Example** | `Param Create Counter 0`

#### Parameters
| | |
------------ | -------------
**\<parameter\>** | The new parameter value where **\<parameter\>** is the name of the parameter.

***

### Param Exists
| | |
------------ | -------------
**Info** | Use this to check if a given parameter exists. `<parameter>` is the name of the parameter to check.
**Format** | `Param Exists <parameter>`
**Example** | `Param Exists after`

#### Parameters
| | |
------------ | -------------
**exists** | [True/False] Whether or not the parameter has a value.

***

### Param Keyword
| | |
------------ | -------------
**Info** | Checks if the specified keyword(s) exist(s) within a parameter. `<parameter>` is the name of the existing parameter. `<keyword>` is the value to look for in the parameter. More than one keyword can be supplied.
**Format** | `Param Keyword <parameter> <keyword>`
**Format w/ Multiple Keywords** | `Param Keyword <parameter> <keyword_1> <keyword_2> <keyword_3>`
**Example** | `Param Keyword after "apple"`
**Example w/ Multiple Keywords** | `Param Keyword after "apple" "banana" "cookie" "duck"`

#### Parameters
| | |
------------ | -------------
**matched** | [True/False] Whether or not the keyword was found in the parameter.
**match** | If `matched`, `match` will have the first keyword found in the parameter.
**keywords** | If `matched`, keywords will have the list of all keywords found in the parameter.

***

### Param Lower
| | |
------------ | -------------
**Info** | Lowercase the value within a parameter. `<parameter>` is the name of the existing parameter.
**Format** | `Param Lower <parameter>`
**Example** | `Param Lower user`

#### Parameters
| | |
------------ | -------------
**\<parameter\>** | The lowercased parameter value where **\<parameter\>** is the name of the parameter.

***

### Param Negate
| | |
------------ | -------------
**Info** | Negates the value within the parameter. The parameter value is converted into a string and lowercased. `"false"`, `"0"`, `"no"`, and `""` are interpreted as `false`. Everything else is interpreted as `true`. `<parameter>` is the name of the existing parameter.
**Format** | `Param Negate <parameter>`
**Example** | `Param Negate MyToggle`

#### Parameters
| | |
------------ | -------------
**\<parameter\>** | The negated parameter value where **\<parameter\>** is the name of the parameter.

***

### Param Proper
| | |
------------ | -------------
**Info** | Proper case the value within a parameter. Proper case is where the first letter of every word is capitalized. `<parameter>` is the name of the existing parameter.
**Format** | `Param Proper <parameter>`
**Example** | `Param Proper user`

#### Parameters
| | |
------------ | -------------
**\<parameter\>** | The proper case parameter value where **\<parameter\>** is the name of the parameter.

***

### Param Replace
| | |
------------ | -------------
**Info** | Replace a substring in a parameter with the specified text. Note that this replaces all occurrences inside of the parameter. `<parameter>` is the name of the existing parameter. `<to_replace>` is the value to be replaced. `<replacement>` is the value to overwrite the `<to_replace>` value.
**Format** | `Param Replace <to_replace> <replacement>`
**Example** | `Param Replace after @ ''`

#### Parameters
| | |
------------ | -------------
**\<parameter\>** | The new parameter value where **\<parameter\>** is the name of the parameter.

***

### Param Subtract
| | |
------------ | -------------
**Info** | Subtracts the given amount to an existing parameter. `<parameter>` is the name of the existing parameter. `<number>` is the value to subtract.
**Format** | `Param Subtract <parameter> <number>`
**Example** | `Param Subtract counter 1`

#### Parameters
| | |
------------ | -------------
**\<name\>** | The updated parameter value where **\<name\>** is the name of the parameter.

***

### Param Upper
| | |
------------ | -------------
**Info** | Uppercase the value within a parameter. `<parameter>` is the name of the existing parameter.
**Format** | `Param Upper <parameter>`
**Example** | `Param Upper user`

#### Parameters
| | |
------------ | -------------
**\<parameter\>** | The uppercased parameter value where **\<parameter\>** is the name of the parameter.

***
