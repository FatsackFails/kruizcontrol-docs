---
title: Hype Train
date: Last Modified
slug: hype-train
eleventyNavigation:
  key: Hype Train
  order: 109
  title: Hype Train
  parent: Docs
---

A handler to allow you to trigger events from twitch hype trains.

## Hype Train Triggers

### OnHypeTrainCooldownExpired
| | |
------------ | -------------
**Info** | Used to fire a set of actions when the hype train is no longer on cooldown and can be triggered again.
**Format** | `OnHypeTrainCooldownExpired`
**Example** | `OnHypeTrainCooldownExpired`

***

### OnHypeTrainConductor
| | |
------------ | -------------
**Info** | Used to fire a set of actions when the conductor is changed for a given type (sub or cheer). Note that this fires every time progress is made in the hype train regardless of if the conductor changes.
**Format** | `OnHypeTrainConductor`
**Example** | `OnHypeTrainConductor`

#### Parameters
| | |
------------ | -------------
**cheer_conductor_id** | Id of the current cheer conductor if one exists.
**sub_conductor_id** | Id of the current sub conductor if one exists.
**type** | `SUBS` or `CHEER` to designate the type of conductor changed.
**data** | Data included with the message.

***

### OnHypeTrainEnd
| | |
------------ | -------------
**Info** | Used to fire a set of actions when the hype train ends.
**Format** | `OnHypeTrainEnd`
**Example** | `OnHypeTrainEnd`

#### Parameters
| | |
------------ | -------------
**cheer_conductor_id** | Id of the current cheer conductor if one exists.
**sub_conductor_id** | Id of the current sub conductor if one exists.
**data** | Data included with the message.

***

### OnHypeTrainLevel
| | |
------------ | -------------
**Info** | Used to fire a set of actions when the hype train levels up.
**Format** | `OnHypeTrainLevel`
**Example** | `OnHypeTrainLevel`

#### Parameters
| | |
------------ | -------------
**level** | The current level of the hype train.
**progress** | The current progress towards the next level (designated by `total`).
**total** | The amount needed to reach the next level in the hype train.
**time** | The amount of seconds left in the hype train.
**data** | Data included with the message.

***

### OnHypeTrainProgress
| | |
------------ | -------------
**Info** | Used to fire a set of actions when someone contributes to the hype train.
**Format** | `OnHypeTrainProgress`
**Example** | `OnHypeTrainProgress`

#### Parameters
| | |
------------ | -------------
**user_id** | The twitch id of the user that contributed.
**level** | The current level of the hype train.
**progress** | The current progress towards the next level (designated by `total`).
**total** | The amount needed to reach the next level in the hype train.
**time** | The amount of seconds left in the hype train.
**data** | Data included with the message.

***

### OnHypeTrainStart
| | |
------------ | -------------
**Info** | Used to fire a set of actions when a hype train starts.
**Format** | `OnHypeTrainStart`
**Example** | `OnHypeTrainStart`

#### Parameters
| | |
------------ | -------------
**data** | Data included with the message.

***

## Hype Train Actions
None at the moment.

***
