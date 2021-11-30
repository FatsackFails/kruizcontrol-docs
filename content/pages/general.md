---
title: General
date: Last Modified
slug: general
eleventyNavigation:
  key: General
  order: 101
  title: General
  parent: Docs
---

Trigger files are sections of triggers and actions separated by empty lines. Each trigger can be followed by 1 or more actions. Here's the general format.
```
<Trigger>
<Action>
...
<Action>
<Trigger>
<Action>
...
<Action>
```

## Case Sensitivity
Triggers and Actions are case insensitive. The following example sends a message after a command.
```
OnCommand f 0 !caseSensitive
Chat Send "Triggers and Actions are case insensitive"
```

The following is *also* correct.
```
Oncommand f 0 !caseSensitive
chat SEND "Triggers and Actions are case insensitive"
```

Note that the message itself _IS_ case sensitive. Whenever you are supplying parameters to **Triggers** or **Actions**, they are almost _always_ case sensitive.

***

## Quotes
It is **highly recommended** to use quotes when providing multi-word arguments. For example,
```
Chat Send "Some really long message"
OBS Scene "Starting Soon"
```

***

## Comments
Trigger files support comments using the **#** character. This allows you to leave text in the trigger file that is not treated as a trigger or action.

### Comment Example
```
# My really complicated trigger
OnCommand e 10 !example
Chat Send "This is a silly example!"
```

***

## Parameters
Triggers and Actions can return data that is used in following actions. Take the following example:

```
OnCommand sb 10 !example
Chat Send "{user} used the example command!"
```

The **OnCommand** Trigger provides a `user` parameter. This parameter is used in the next action as `{user}` and is replaced with the name of the viewer that used the command in Twitch chat.

- Parameters are identified by `{parameter}` or `[parameter]`.
- Parameters are replaced on every action line in any position.
- Parameters can be nested `{{user}_sub_months}`

### `{parameter}`
When `{parameter}` is used, the literal value of the parameter is used. **In almost all cases, use this.**
For example, here's the result when used in a Chat Send action.
```
Chat Send "{user} used the example command!"
> "Kruiser8 used the example command!"
```

### [parameter]
When `[parameter]` is used, the value of the parameter is JSON.stringify'd before replacement. **This is primarily for use with [Function](#function).** This allows parameters to be easily used and be properly escaped when used in javascript code.

For example, here's the result when used in the [Function](#function) action.
```
Function 'var name = [user]; var data = [data]; // rest of code ... }())
> (function() { var name = "Kruiser8"; var data = {"property": value}; // rest of code ...'
```

***

## Aliases
As of Kruiz Control v1.4, certain triggers now allow for multiple inputs. Consider the following example:
```
OnCommand mbv 0 !so !sh !caster !shout
Chat Send "Go check out {after} at twitch.tv/{after}"
```
The commands, `!so`, `!sh`, `!caster`, and `!shout` will all cause the message to be sent, regardless of which one is used. This allows you to easily set up _aliases_ for triggers. The following triggers now support aliases:
- OnCommand
- OnKeyword
- OnMessage
- OnChannelPoint
- OnCommunityGoalStart
- OnCommunityGoalProgress
- OnCommunityGoalComplete
- OnOBSSwitchScenes
- OnOBSTransitionTo
- OnOBSCustomMessage
- OnSLOBSSwitchScenes

***
