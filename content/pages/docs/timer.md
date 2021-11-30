---
title: Timer
date: Last Modified
slug: timer
eleventyNavigation:
  key: Timer
  order: 120
  title: Timer
  parent: Docs
---

Enables the ability to run actions on a time interval.

## Timer Triggers

### OnTimer
| | |
------------ | -------------
**Info** | Used to trigger a set of actions every `<interval>` seconds after `<offset>` initial seconds. `<offset>` is optional.
**Format** | `OnTimer <name> <interval> <offset>`
**Example** | `OnTimer MyTimer 300 10`

***

## Timer Actions

### Timer Reset
| | |
------------ | -------------
**Info** | Used to reset a timer based on the `<name>`. This can be used to interrupt a timer and restart it.
**Format** | `Timer Reset <name>`
**Example** | `Timer Reset MyTimer`

***

### Timer Start
| | |
------------ | -------------
**Info** | Used to start (or restart) a timer based on the `<name>`. This can be used to start a timer that has been stopped or restart a timer's current countdown.
**Format** | `Timer Start <name>`
**Example** | `Timer Start MyTimer`

***

### Timer Stop
| | |
------------ | -------------
**Info** | Used to stop a timer based on the `<name>`. This can be used to interrupt a timer until it is reset or started.
**Format** | `Timer Stop <name>`
**Example** | `Timer Stop MyTimer`

***
