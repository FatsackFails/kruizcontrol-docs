---
title: Usage
date: Last Modified
slug: usage
eleventyNavigation:
  key: Usage
  order: 2
  title: Usage
  parent: Getting Started
---

## Pseudo Code Format
For information on the pseudo code format, please see [the documentation](/docs).

## triggers.txt
Setup your triggers inside of this file if you do not need actions to be run one after another.

As an example, if the below is in the _triggers.txt_ file, then both sounds can be played at the same time.

### triggers.txt
```
OnChannelPoint SHIKAKA
Play 30 wait Shikaka.mp3
OnCommand sbvm 0 !intervention
Play 45 nowait MashiahMusic__Kygo-Style-Melody.wav
```

## fileTriggers.txt and the triggers folder
When you need actions to be run one-after-another, create a file in the _triggers_ folder and add the name of the folder to _fileTriggers.txt_.

As an example, here's a setup to make sure multiple scene changes don't happen simultaneously.

### _fileTriggers.txt_
```
obs.txt
```
### _triggers/obs.txt_
```m
OnSLDonation
OBS Scene DonationCelebration
Delay 4
OnCommand mb 0 !brb
OBS Scene BRB
Delay 5
```

## sounds folder
In order to use a sound with [`Play`](https://github.com/Kruiser8/Kruiz-Control/blob/master/js/Documentation.md#play), add the sound file to the *sounds* folder. The supported audio formats are mp3, wav, and ogg.

***
