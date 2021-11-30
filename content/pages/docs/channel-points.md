---
title: Channel Points
date: Last Modified
slug: channel-points
eleventyNavigation:
  key: Channel Points
  order: 105
  title: Channel Points
  parent: Docs
---

Enables the ability to run actions when channel point rewards are redeemed.

## Channel Point Triggers

### OnChannelPoint
| | |
------------ | -------------
**Info** | Used to trigger a set of actions when a channel point reward is redeemed. Using `*` as the `<reward_name>` will execute the trigger for all channel point rewards.
**Format** | `OnChannelPoint <reward_name>`
**Format w/ Aliases** | `OnChannelPoint <reward_name1> <reward_name2> ...`
**Example** | `OnChannelPoint "Example Reward"`
**Example w/ Aliases** | `OnChannelPoint "Resize" "Left View"`

::: callout-blue
**Note:** Default channel point rewards are not supported: `Unlock a Random Sub Emote`, `Send a Message in Sub-Only Mode`, `Choose an Emote to Unlock`, `Highlight My Message`, and `Modify a Single Emote`.
:::

#### Parameters
| | |
------------ | -------------
**reward** | The name of the channel point reward that was redeemed.
**user** | The display name of the user that redeemed the channel point reward.
**message** | The message included with the channel point redemption (if one is provided)
**data** | The complete json channel point message (for use with [Function](#function)).

***

### OnCommunityGoalComplete
| | |
------------ | -------------
**Info** | Used to trigger a set of actions when a community goal is completed. Using `*` as the `<goal_title>` will execute the trigger for all channel point rewards.
**Format** | `OnCommunityGoalComplete <goal_title>`
**Format w/ Aliases** | `OnCommunityGoalComplete <goal_title1> <goal_title2> ...`
**Example** | `OnCommunityGoalComplete "Example Goal"`
**Example w/ Aliases** | `OnCommunityGoalComplete "Example Goal" "Extra Sunday Stream" ...`

#### Parameters
| | |
------------ | -------------
**goal** | The title of the community goal.
**user** | The display name of the user that completed the goal.
**amount** | The amount of points donated to complete the goal.
**user_total** | The total amount of points contributed by the user.
**progress** | The current amount of points contributed towards the goal.
**total** | The amount of points required to complete the goal.
**data** | The complete json community goal message (for use with [Function](#function)).

### OnCommunityGoalProgress
| | |
------------ | -------------
**Info** | Used to trigger a set of actions when a user contributes towards a goal. Using `*` as the `<goal_title>` will execute the trigger for all channel point rewards.
**Format** | `OnCommunityGoalProgress <goal_title>`
**Format w/ Aliases** | `OnCommunityGoalProgress <goal_title1> <goal_title2> ...`
**Example** | `OnCommunityGoalProgress "Example Goal"`
**Example w/ Aliases** | `OnCommunityGoalProgress "Example Goal" "Extra Sunday Stream" ...`

#### Parameters
| | |
------------ | -------------
**goal** | The title of the community goal.
**user** | The display name of the user that completed the goal.
**amount** | The amount of points donated to complete the goal.
**user_total** | The total amount of points contributed by the user.
**progress** | The current amount of points contributed towards the goal.
**total** | The amount of points required to complete the goal.
**data** | The complete json community goal message (for use with [Function](#function)).

***

### OnCommunityGoalStart
| | |
------------ | -------------
**Info** | Used to trigger a set of actions when the streamer starts a goal. Using `*` as the `<goal_title>` will execute the trigger for all channel point rewards.
**Format** | `OnCommunityGoalStart <goal_title>`
**Format w/ Aliases** | `OnCommunityGoalStart <goal_title1> <goal_title2> ...`
**Example** | `OnCommunityGoalStart "Example Goal"`
**Example w/ Aliases** | `OnCommunityGoalStart "Example Goal" "Extra Sunday Stream" ...`

#### Parameters
| | |
------------ | -------------
**goal** | The title of the community goal.
**data** | The complete json community goal message (for use with [Function](#function)).

***

## Channel Point Actions
None at the moment.

***
