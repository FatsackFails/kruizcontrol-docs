---
title: Chat
date: Last Modified
slug: chat
eleventyNavigation:
  key: Chat
  order: 106
  title: Chat
  parent: Docs
---

Enables the ability to take actions on chat message and send messages. Note that Kruiz Control can respond to messages sent by Kruiz Control.

## Chat Triggers
Chat triggers use a `<permission>` parameter to specify who can use a command. The following values can be combined in any order.

- *b* - Broadcaster
- *s* - Subscriber
- *f* - Founder
- *v* - VIP
- *m* - Moderator
- *n* - Check if a user has _none_ of the permissions above.
- *e* - Everyone

Additionally, you can use *u* as the permission to specify a specific user that can use a command or keyword. In this case, `<optional_info>` is required to specify the user. The username input is case insensitive.

**Example**:
```
OnCommand u kruiser8 10 !secret
```

Chat triggers also use a `<cooldown>` parameter to put the command or keyword on cooldown for the specified number of seconds. The `<cooldown>` can be any number 0 or higher.

***

### OnCommand
::: callout
**WARNING:** Kruiz Control responds to messages sent by Kruiz Control. Please be mindful of your commands, keywords, and messages so that you do not trigger an infinite loop of messages. Twitch has [chat limits](https://dev.twitch.tv/docs/irc/guide#command--message-limits) and will block you from chatting.
:::

| | |
------------ | -------------
**Info** | Used to trigger a set of actions when a command is used at the beginning of a message.
**Format** | `OnCommand <permission> <optional_info> <cooldown> <command>`
**Format w/ Aliases** | `OnCommand <permission> <optional_info> <cooldown> <command1> <command2> <command3> ...`
**Example** | `OnCommand e 0 !example`
**Example w/ Aliases** | `OnCommand bvm 0 !so !caster !sh !shout`

#### Parameters
| | |
------------ | -------------
**user** | The display name of the user that sent the command.
**after** | The message excluding the command.
**message** | The entire chat message, including the command.
**data** | An object with all metadata about the message (for use with [Function](#function)).
**arg#** | The numbered arguments in the message. Replace `#` with a number, starting at 1 and ending at the last argument passed into the command.

***

### OnEveryChatMessage
::: callout
**WARNING:** Kruiz Control responds to messages sent by Kruiz Control. Please be mindful of your commands, keywords, and messages so that you do not trigger an infinite loop of messages. Twitch has [chat limits](https://dev.twitch.tv/docs/irc/guide#command--message-limits) and will block you from chatting.
:::

| | |
------------ | -------------
**Info** | Used to trigger a set of actions when ever a chat message is sent.
**Format** | `OnEveryChatMessage`
**Example** | `OnEveryChatMessage`

#### Parameters
| | |
------------ | -------------
**user** | The display name of the user that sent the command.
**message** | The entire chat message, including the command.
**data** | An object with all metadata about the message (for use with [Function](#function)).

***

### OnKeyword
::: callout
**WARNING:** Kruiz Control responds to messages sent by Kruiz Control. Please be mindful of your commands, keywords, and messages so that you do not trigger an infinite loop of messages. Twitch has [chat limits](https://dev.twitch.tv/docs/irc/guide#command--message-limits) and will block you from chatting.
:::

| | |
------------ | -------------
**Info** | Used to trigger a set of actions when a keyword or phrase appears in a message.
**Format** | `OnKeyword <permission> <optional_info> <cooldown> <command>`
**Format w/ Aliases** | `OnKeyword <permission> <optional_info> <cooldown> <keyword1> <keyword2> <keyword3> ...`
**Example** | `OnKeyword smv 10 "music"`
**Example w/ Aliases** | `OnKeyword e 0 hi hello yo o7`

#### Parameters
| | |
------------ | -------------
**user** | The display name of the user that triggered the keyword.
**keyword** | The keyword matched by the trigger.
**message** | The chat message.
**data** | An object with all metadata about the message (for use with [Function](#function)).
**arg#** | The numbered arguments in the message. Replace `#` with a number, starting at 1 and ending at the last argument passed into the command.

***

### OnSpeak
| | |
------------ | -------------
**Info** | Used to trigger a set of actions when a user speaks in chat for the first time. Using `*` as the `<name>` will execute the trigger for all users.
**Format** | `OnSpeak <name>`
**Example** | `OnSpeak Kruiser8`

#### Parameters
| | |
------------ | -------------
**user** | The display name of the user that sent the command.
**message** | The entire chat message, including the command.
**data** | An object with all metadata about the message (for use with [Function](#function)).

***

## Actions

### Chat Send
| | |
------------ | -------------
**Info** | Used to send a message to chat.
**Format** | `Chat Send <message>`
**Example** | `Chat Send "Hello World"`

***

### Chat Whisper
| | |
------------ | -------------
**Info** | Used to send a whisper to a user.
**Format** | `Chat Whisper <user> <message>`
**Example** | `Chat Whisper Kruiser8 "Chicken Dinner"`

***
