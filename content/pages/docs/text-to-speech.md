---
title: Text-To-Speech
date: Last Modified
slug: text-to-speech
eleventyNavigation:
  key: Text-To-Speech
  order: 119
  title: Text-To-Speech
  parent: Docs
---

Enables the ability to have input voiced with custom voices. This is powered by [responsivevoice.org](https://responsivevoice.org).

## Text-To-Speech Triggers

None at the moment.

***

## Text-To-Speech Actions

### TTS
| | |
------------ | -------------
**Info** | Used to read a message with the specified voice. `<voice>` is the name of a voice from [responsivevoice.org](https://responsivevoice.org). `<volume>` is the audio volume. `<wait/nowait>` determines whether or not the script waits until the audio is done playing before completing the next action. `<message>` is the text to read in the audio.
**Format** | `TTS <voice> <volume> <wait/nowait> <message>`
**Example** | `TTS "UK English Male" 70 wait "Hey there!"`

***

### TTS Stop
| | |
------------ | -------------
**Info** | Used to stop playing text-to-speech audio.
**Format** | `TTS Stop`
**Example** | `TTS Stop`

***
