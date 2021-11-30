---
title: Streamlabs
date: Last Modified
slug: streamlabs
eleventyNavigation:
  key: Streamlabs
  order: 118
  title: Streamlabs
  parent: Docs
---

Enables the ability to trigger actions based on Streamlabs alerts.

The default alert triggers require that your Streamlabs alert box is open. This allows Kruiz Control to synchronize with your alerts and trigger actions at the same time as the alerts.

Use the `NoSync` version of a trigger if:
- You do not use the alert box for a specific alert type.
- You want a trigger to run as soon as alerts come in.
- You do not always have the alert box open but need the trigger to always run.

## Streamlabs Triggers

### OnSLTwitchBits | OnSLTwitchBitsNoSync
| | |
------------ | -------------
**Info** | Used to trigger actions when someone cheers bits.
**Format** | `OnSLTwitchBits`
**Example** | `OnSLTwitchBits`

#### Parameters
| | |
------------ | -------------
**user** | The user that cheered.
**amount** | The amount of the bits. Use this in comparisons.
**message** | The message included with the bits.
**data** | The complete json message (for use with [Function](#function)).

***

### OnSLDonation | OnSLDonationNoSync
| | |
------------ | -------------
**Info** | Used to trigger actions when someone donates through Streamlabs.
**Format** | `OnSLDonation`
**Example** | `OnSLDonation`

#### Parameters
| | |
------------ | -------------
**user** | The user that donated.
**amount** | The numeric amount of the donation. Use this in comparisons.
**formatted** | The formatted amount using the locale's currency format.
**message** | The message included with the donation.
**data** | The complete json message (for use with [Function](#function)).

***

### OnSLTiltifyDonation | OnSLTiltifyDonationNoSync
| | |
------------ | -------------
**Info** | Used to trigger actions when someone triggers a tiltify donation through Streamlabs.
**Format** | `OnSLTiltifyDonation`
**Example** | `OnSLTiltifyDonation`

#### Parameters
| | |
------------ | -------------
**user** | The user that donated.
**amount** | The numeric amount of the donation. Use this in comparisons.
**formatted** | The formatted amount using the locale's currency format.
**message** | The message included with the donation.
**data** | The complete json message (for use with [Function](#function)).

***

### OnSLPatreonPledge | OnSLPatreonPledgeNoSync
| | |
------------ | -------------
**Info** | Used to trigger actions when someone pledges on Patreon through Streamlabs.
**Format** | `OnSLPatreonPledge`
**Example** | `OnSLPatreonPledge`

#### Parameters
| | |
------------ | -------------
**user** | The user that donated.
**amount** | The numeric amount of the donation. Use this in comparisons.
**formatted** | The formatted amount using the locale's currency format.
**data** | The complete json message (for use with [Function](#function)).

***

### OnSLTwitchFollow | OnSLTwitchFollowNoSync
| | |
------------ | -------------
**Info** | Used to trigger actions when someone follows the channel.
**Format** | `OnSLTwitchFollow`
**Example** | `OnSLTwitchFollow`

#### Parameters
| | |
------------ | -------------
**user** | The user that followed.
**data** | The complete json message (for use with [Function](#function)).

***

### OnSLTwitchCommunityGiftSub | OnSLTwitchCommunityGiftSubNoSync
| | |
------------ | -------------
**Info** | Used to trigger actions when someone gifts community subscriptions to the channel.
**Format** | `OnSLTwitchCommunityGiftSub`
**Example** | `OnSLTwitchCommunityGiftSub`

#### Parameters
| | |
------------ | -------------
**gifter** | The user that gifted the subscription.
**amount** | The number of subscriptions gifted by the gifter.
**tier** | The tier of the subscription. Possible values are `Tier 1`, `Tier 2`, `Tier 3`, and `Prime`.
**data** | The complete json message (for use with [Function](#function)).

***

### OnSLTwitchGiftSub | OnSLTwitchGiftSubNoSync
| | |
------------ | -------------
**Info** | Used to trigger actions when someone gifts a subscription to the channel.
**Format** | `OnSLTwitchGiftSub`
**Example** | `OnSLTwitchGiftSub`

#### Parameters
| | |
------------ | -------------
**user** | The user that was gifted a subscription.
**gifter** | The user that gifted the subscription.
**months** | The number of months the user is subscribed.
**tier** | The tier of the subscription. Possible values are `Tier 1`, `Tier 2`, `Tier 3`, and `Prime`.
**data** | The complete json message (for use with [Function](#function)).

***

### OnSLTwitchHost | OnSLTwitchHostNoSync
| | |
------------ | -------------
**Info** | Used to trigger actions when someone hosts the channel.
**Format** | `OnSLTwitchHost`
**Example** | `OnSLTwitchHost`

#### Parameters
| | |
------------ | -------------
**user** | The user that hosted.
**viewers** | The number of viewers in the host.
**data** | The complete json message (for use with [Function](#function)).

***

### OnSLTwitchRaid | OnSLTwitchRaidNoSync
| | |
------------ | -------------
**Info** | Used to trigger actions when someone raids the channel.
**Format** | `OnSLTwitchRaid`
**Example** | `OnSLTwitchRaid`

#### Parameters
| | |
------------ | -------------
**user** | The user that raided.
**raiders** | The number of raiders in the raid.
**data** | The complete json message (for use with [Function](#function)).

***

### OnSLTwitchSub | OnSLTwitchSubNoSync
| | |
------------ | -------------
**Info** | Used to trigger actions when someone subscribes to the channel.
**Format** | `OnSLTwitchSub`
**Example** | `OnSLTwitchSub`

#### Parameters
| | |
------------ | -------------
**user** | The user that subscribed.
**months** | The number of months the user is subscribed.
**message** | The message included with the subscription.
**tier** | The tier of the subscription. Possible values are `Tier 1`, `Tier 2`, `Tier 3`, and `Prime`.
**data** | The complete json message (for use with [Function](#function)).

***

## Streamlabs Actions
None at the moment.

***
