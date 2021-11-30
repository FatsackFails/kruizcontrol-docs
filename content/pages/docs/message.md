---
title: Message
date: Last Modified
slug: message
eleventyNavigation:
  key: Message
  order: 111
  title: Message
  parent: Docs
---

A small handler to allow you to trigger events from another event without using an external application (like OBS or Chat).

## Message Triggers

### OnMessage
| | |
------------ | -------------
**Info** | Used to fire a set of actions when a message is sent with [`Message Send`](#message-send). Using `*` as the `<message>` will execute the trigger for all messages.
**Format** | `OnMessage <message>`
**Format w/ Aliases** | `OnMessage <message1> <message2> ...`
**Example** | `OnMessage MyCustomMessage`
**Example w/ Aliases** | `OnMessage MyCustomMessage MyOtherCustomMessage`

#### Parameters
| | |
------------ | -------------
**message** | Name of the message.
**data** | Data included with the message.

***

## Message Actions

### Message Send
| | |
------------ | -------------
**Info** | Used to send a message and trigger other events. `<message>` is used to identify the message for [`OnMessage`](#onmessage) events. `<data>` is any information you want to pass through.
**Format** | `Message Send <message> <data>`
**Example** | `Message Send MyCustomMessage {user}`

***
