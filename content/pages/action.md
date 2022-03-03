---
title: Action
date: Last Modified
slug: action
eleventyNavigation:
  key: Action
  order: 103
  title: Action
  parent: Docs
---

Enables the ability to create your own actions within Kruiz Control.

## Action Triggers

### OnAction
| | |
------------ | -------------
**Info** | Used to define a list of actions that will get inserted into an event when the provided `<action>` is called.
**Format** | `OnAction <action>`
**Example** | `OnAction ReadFile`

### Parameters
| | |
------------ | -------------
**in#** | The numbered arguments passed to the action. Replace `#` with a number, starting at 1 and ending at the last argument passed into the command.

***

### Action Actions

#### Action
| | |
------------ | -------------
**Info** | Used to run an action by passing it through. This allows actions to be fired dynamically within an event. `<action>` is the full action that you want to complete. The action can be provided as a single argument (inside of quotes) or written out normally.
**Format** | `Action <action>`
**Example** | `Action Chat Send "Hello world"`
**Example w/ single argument** | `Action "Chat Send 'Hello world'"`

***
