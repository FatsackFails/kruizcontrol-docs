---
title: List
date: Last Modified
slug: list
eleventyNavigation:
  key: List
  order: 110
  title: List
  parent: Docs
---

A small handler to allow you to store and update lists of items.

## List Triggers
None at the moment.

***

## List Actions

### List Add
| | |
------------ | -------------
**Info** | Adds an item to the list. `<index>` is optional to add at a specific index.
**Format** | `List Add <list> <value> <index>`
**Example** | `List Add MyList {user}`
**Example with index** | `List Add MyList {user} 2`

#### Parameters
| | |
------------ | -------------
**position** | The position of the value in the list (starting from 1) or `-1` if not found.
**index** | The index of the value in the list (starting from 0) or `-1` if not found.

***

### List Contains
| | |
------------ | -------------
**Info** | Check if an item exists in a list.
**Format** | `List Contains <list> <value>`
**Example** | `List Contains MyList {user}`

#### Parameters
| | |
------------ | -------------
**contains** | [true/false] If the list contains the value.

***

### List Count
| | |
------------ | -------------
**Info** | Check how many items are in a list.
**Format** | `List Count <list>`
**Example** | `List Count MyList`

#### Parameters
| | |
------------ | -------------
**count** | The number of items in the list.

***

### List Empty
| | |
------------ | -------------
**Info** | Removes all items from a list.
**Format** | `List Empty <list>`
**Example** | `List Empty MyList`

***

### List Export
| | |
------------ | -------------
**Info** | Returns the list as a string using `JSON.stringify`.
**Format** | `List Export <list>`
**Example** | `List Export MyList`

#### Parameters
| | |
------------ | -------------
**\<list\>** | The list in string form where **\<list\>** is the name of the list.

_Note: The above example, `List Export MyList`, would return the parameter **MyList**._

***

### List Get
| | |
------------ | -------------
**Info** | Returns a value from the list. `<index>` is an optional index. If no index is included, a random element is returned. "First" and "Last" are valid `<index>` values.
**Format** | `List Get <list> <index/First/Last>`
**Example** | `List Get MyList`
**Example with Index** | `List Get MyList 1`
**Example with Index (Last)** | `List Get MyList Last`

#### Parameters
| | |
------------ | -------------
**value** | The value returned from the list or "None found" if there are no items in the list.
**position** | The position of the value in the list (starting from 1) or `-1` if not found.
**index** | The index of the value in the list (starting from 0) or `-1` if not found.

***

### List Import
| | |
------------ | -------------
**Info** | Used to import a list from an input `JSON.stringify`'d array.
**Format** | `List Import <list> <import>`
**Example** | `List Import MyList '["item 1","item 2","item 3"]'`

***

### List Index
| | |
------------ | -------------
**Info** | Returns the position and index (0-based) of a value in the list.
**Format** | `List Index <list> <value>`
**Example** | `List Index MyList {user}`

#### Parameters
| | |
------------ | -------------
**position** | The position of the value in the list (starting from 1) or `-1` if not found.
**index** | The index of the value in the list (starting from 0) or `-1` if not found.

***

### List Join
| | |
------------ | -------------
**Info** | Used to combine all items in a list into a text value with the specified `<delimiter>` as a separator.
**Format** | `List Join <list> <delimiter>`
**Example** | `List Join MyList ", "`

#### Parameters
| | |
------------ | -------------
**joined** | The result of combining all of the items in a list.

***

### List Remove
| | |
------------ | -------------
**Info** | Used to remove and return an item from a list. `<index>` is an optional index. If no index is included, a random element is returned. "First" and "Last" are valid `<index>` values.
**Format** | `List Remove <list> <index/First/Last>`
**Example** | `List Remove MyList`
**Example with Index** | `List Remove MyList 1`
**Example with Index (Last)** | `List Remove MyList Last`

#### Parameters
| | |
------------ | -------------
**value** | The value returned from the list or "None found" if there are no items in the list.
**position** | The position of the value in the list (starting from 1) or `-1` if not found.
**index** | The index of the value in the list (starting from 0) or `-1` if not found.

***

### List Set
| | |
------------ | -------------
**Info** | Adds an item to the list. `<index>` is optional to add at a specific index.
**Format** | `List Set <list> <index> <value>`
**Example** | `List Set MyList 1 {user}`

#### Parameters
| | |
------------ | -------------
**position** | The position of the value in the list (starting from 1) or `-1` if not found.
**index** | The index of the value in the list (starting from 0) or `-1` if not found.
**value** | The value added to the list.

***
