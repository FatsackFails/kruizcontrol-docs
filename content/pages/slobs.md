---
title: SLOBS
date: Last Modified
slug: slobs
eleventyNavigation:
  key: SLOBS
  order: 116
  title: SLOBS
  parent: Docs
---

Enables the ability to interact with and respond to SLOBS.

## SLOBS Triggers

### OnSLOBSStreamStarted
| | |
------------ | -------------
**Info** | Used to trigger a set of actions when the stream starts.
**Format** | `OnSLOBSStreamStarted`
**Example** | `OnSLOBSStreamStarted`

***

### OnSLOBSStreamStopped
| | |
------------ | -------------
**Info** | Used to trigger a set of actions when the stream stops.
**Format** | `OnSLOBSStreamStopped`
**Example** | `OnSLOBSStreamStopped`

***

### OnSLOBSSwitchScenes
| | |
------------ | -------------
**Info** | Used to trigger a set of actions when the scene changes in SLOBS. Using `*` as the `<scene>` will execute the trigger for all scenes.
**Format** | `OnSLOBSSwitchScenes <scene>`
**Format w/ Aliases** | `OnSLOBSSwitchScenes <scene1> <scene2> ...`
**Example** | `OnSLOBSSwitchScenes "BRB"`
**Example w/ Aliases** | `OnSLOBSSwitchScenes "BRB" "Intermission"`

#### Parameters
| | |
------------ | -------------
**scene** | The scene switched to.

***

## SLOBS Actions

### SLOBS CurrentScene
| | |
------------ | -------------
**Info** | Used to get the current active scene in SLOBS.
**Format** | `SLOBS CurrentScene`
**Example** | `SLOBS CurrentScene`

#### Parameters
| | |
------------ | -------------
**current_scene** | The name of the active scene.

***

### SLOBS Flip
| | |
------------ | -------------
**Info** | Used to flip a source in SLOBS.
**Format** | `SLOBS Flip <scene> <source> <x/y>`
**Example** | `SLOBS Flip Webcam Camera x`

***

### SLOBS IsSceneSourceVisible
| | |
------------ | -------------
**Info** | Used to check if the specified source is turned on within the given scene in SLOBS.
**Format** | `SLOBS IsSceneSourceVisible <scene> <source>`
**Example** | `SLOBS IsSceneSourceVisible Alerts TwitchAlerts`

#### Parameters
| | |
------------ | -------------
**is_visible** | [true/false] `true` if the source is visible. Otherwise, `false`.

***

### SLOBS Mute
| | |
------------ | -------------
**Info** | Used to mute or unmute a source in SLOBS.
**Format** | `SLOBS Mute <source> <on/off/toggle>`
**Example** | `SLOBS Mute Mic/Aux toggle`

***

### SLOBS Notification
| | |
------------ | -------------
**Info** | Used to add a notice to the SLOBS notification window. This is the `(i)` icon in the bottom left of SLOBS.
**Format** | `SLOBS Notification <message>`
**Example** | `SLOBS Notification "Pay attention to me!"`

***

### SLOBS Position
| | |
------------ | -------------
**Info** | Used to move a source in SLOBS to the given `x` and `y` location.
**Format** | `SLOBS Position <scene> <source> <x> <y>`
**Example** | `SLOBS Position Alerts SLAlerts 100 350`

***

### SLOBS Rotate
| | |
------------ | -------------
**Info** | Used to rotate a source in SLOBS. `<degree>` is any number (decimals allowed). This resets the base rotation to 0 before applying the rotation.
**Format** | `SLOBS Rotate <scene> <source> <degree>`
**Example** | `SLOBS Rotate Webcam Camera 90`

***

### SLOBS SaveReplayBuffer
| | |
------------ | -------------
**Info** | Used to save the current replay buffer.
**Format** | `SLOBS SaveReplayBuffer`
**Example** | `SLOBS SaveReplayBuffer`

***

### SLOBS Scene
| | |
------------ | -------------
**Info** | Used to change the scene in SLOBS.
**Format** | `SLOBS Scene <scene>`
**Example** | `SLOBS Scene Ending`

#### Parameters
| | |
------------ | -------------
**previous_scene** | The name of the active scene before changing to the specified scene. This allows users to revert scenes from anywhere.

***

### SLOBS SceneFolder
| | |
------------ | -------------
**Info** | Used to toggle the visibility of a folder (and all nested sources) in a specific scene in SLOBS.
**Format** | `SLOBS SceneFolder <scene> <folder> <on/off>`
**Example** | `SLOBS SceneFolder Videos Reaction on`

***

### SLOBS SceneSource
| | |
------------ | -------------
**Info** | Used to toggle the visibility of a source in a specific scene in SLOBS.
**Format** | `SLOBS SceneSource <scene> <source> <on/off>`
**Example** | `SLOBS SceneSource Webcam Camera on`

***

### SLOBS Source
| | |
------------ | -------------
**Info** | Used to toggle the visibility of a source in SLOBS. Defaults to the current scene.
**Format** | `SLOBS Source <source> <on/off>`
**Example** | `SLOBS Source Webcam off`

***

### SLOBS StartReplayBuffer
| | |
------------ | -------------
**Info** | Used to start the replay buffer.
**Format** | `SLOBS StartReplayBuffer`
**Example** | `SLOBS StartReplayBuffer`

***

### SLOBS StopReplayBuffer
| | |
------------ | -------------
**Info** | Used to stop the current replay buffer.
**Format** | `SLOBS StopReplayBuffer`
**Example** | `SLOBS StopReplayBuffer`

***

### SLOBS ToggleStream
| | |
------------ | -------------
**Info** | Used to go live within SLOBSs or stop the given stream. Note, there's no way to specify if you're toggling the stream on or off.
**Format** | `SLOBS ToggleStream`
**Example** | `SLOBS ToggleStream`

***
