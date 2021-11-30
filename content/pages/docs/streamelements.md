---
title: StreamElements
date: Last Modified
slug: streamelements
eleventyNavigation:
  key: StreamElements
  order: 117
  title: StreamElements
  parent: Docs
---

Enables the ability to trigger actions based on StreamElement alerts. Note that actions are triggered as soon as the alert is triggered. This may not line up with the alert widget.

## StreamElements Triggers

### OnSETwitchBits
| | |
------------ | -------------
**Info** | Used to trigger actions when someone cheers bits.
**Format** | `OnSETwitchBits`
**Example** | `OnSETwitchBits`

#### Parameters
| | |
------------ | -------------
**user** | The user that cheered.
**amount** | The amount of the bits. Use this in comparisons.
**message** | The message included with the bits.
**data** | The complete json event (for use with [Function](#function)).

***

### OnSETwitchBulkGiftSub
| | |
------------ | -------------
**Info** | Used to trigger actions when someone gifts multiple subscriptions to the community.
**Format** | `OnSETwitchBulkGiftSub`
**Example** | `OnSETwitchBulkGiftSub`

#### Parameters
| | |
------------ | -------------
**user** | The user that gifted the subscriptions.
**amount** | The number of subscriptions the user is gifted.
**data** | The complete json message (for use with [Function](#function)).

***

### OnSEDonation
| | |
------------ | -------------
**Info** | Used to trigger actions when someone donates through StreamElements.
**Format** | `OnSEDonation`
**Example** | `OnSEDonation`

#### Parameters
| | |
------------ | -------------
**user** | The user that donated.
**amount** | The numeric amount of the donation with no currency symbol.
**message** | The message included with the donation.
**data** | The complete json message (for use with [Function](#function)).

***

### OnSETwitchFollow
| | |
------------ | -------------
**Info** | Used to trigger actions when someone follows the channel.
**Format** | `OnSETwitchFollow`
**Example** | `OnSETwitchFollow`

#### Parameters
| | |
------------ | -------------
**user** | The user that followed.
**data** | The complete json message (for use with [Function](#function)).

***

### OnSETwitchGiftSub
| | |
------------ | -------------
**Info** | Used to trigger actions when someone gifts a single subscription.
**Format** | `OnSETwitchGiftSub`
**Example** | `OnSETwitchGiftSub`

#### Parameters
| | |
------------ | -------------
**user** | The user that was gifted a subscription.
**gifter** | The user that gifted the subscription.
**tier** | The tier of the subscription. Possible values are `Tier 1`, `Tier 2`, `Tier 3`, and `Prime`.
**data** | The complete json message (for use with [Function](#function)).

::: callout-blue
**Note:** months is not included since streamelements does not include it for gift subs (or I just could not find it).
:::

***

### OnSETwitchHost
| | |
------------ | -------------
**Info** | Used to trigger actions when someone hosts the channel.
**Format** | `OnSETwitchHost`
**Example** | `OnSETwitchHost`

#### Parameters
| | |
------------ | -------------
**user** | The user that hosted.
**viewers** | The number of viewers in the host.
**data** | The complete json message (for use with [Function](#function)).

***

### OnSETwitchRaid
| | |
------------ | -------------
**Info** | Used to trigger actions when someone raids the channel.
**Format** | `OnSETwitchRaid`
**Example** | `OnSETwitchRaid`

#### Parameters
| | |
------------ | -------------
**user** | The user that raided.
**raiders** | The number of raiders in the raid.
**data** | The complete json message (for use with [Function](#function)).

***

### OnSETwitchSub
| | |
------------ | -------------
**Info** | Used to trigger actions when someone subscribes to the channel.
**Format** | `OnSETwitchSub`
**Example** | `OnSETwitchSub`

#### Parameters
| | |
------------ | -------------
**user** | The user that subscribed.
**months** | The number of months the user is subscribed.
**message** | The message included with the subscription.
**tier** | The tier of the subscription. Possible values are `Tier 1`, `Tier 2`, `Tier 3`, and `Prime`.
**data** | The complete json message (for use with [Function](#function)).

***

## StreamElements Actions
None at the moment.

***
