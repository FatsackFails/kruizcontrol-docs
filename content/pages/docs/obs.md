---
title: OBS
date: Last Modified
slug: obs
eleventyNavigation:
  key: OBS
  order: 113
  title: OBS
  parent: Docs
---

Enables the ability to interact with and respond to OBS.

## OBS Triggers

### OnOBSCustomMessage
| | |
------------ | -------------
**Info** | Used to trigger a set of actions when a custom message is sent. Used to receive triggers from [OBS Send](#obs-send). Using `*` as the `<message>` will execute the trigger for all messages.
**Format** | `OnOBSCustomMessage <message>`
**Format w/ Aliases** | `OnOBSCustomMessage <message1> <message2> ...`
**Example** | `OnOBSCustomMessage "My Custom Message"`
**Example w/ Aliases** | `OnOBSCustomMessage "WidgetConnection" "WidgetError"`

#### Parameters
| | |
------------ | -------------
**message** | The name of the custom message.
**data** | The data included with the message (or an empty string).

***

### OnOBSSourceVisibility
| | |
------------ | -------------
**Info** | Used to trigger a set of actions when a source's visibility is changed.
**Format** | `OnOBSSourceVisibility <scene> <source> <on/off/toggle>`
**Example** | `OnOBSSourceVisibility Webcam Camera off`

#### Parameters
| | |
------------ | -------------
**visible** | The current visibility setting.

***

### OnOBSStreamStarted
| | |
------------ | -------------
**Info** | Used to trigger a set of actions when the stream starts.
**Format** | `OnOBSStreamStarted`
**Example** | `OnOBSStreamStarted`

***

### OnOBSStreamStopped
| | |
------------ | -------------
**Info** | Used to trigger a set of actions when the stream stops.
**Format** | `OnOBSStreamStopped`
**Example** | `OnOBSStreamStopped`

***

### OnOBSSwitchScenes
| | |
------------ | -------------
**Info** | Used to trigger a set of actions when the scene changes in OBS. This is fired once the new scene is loaded. Using `*` as the `<scene>` will execute the trigger for all scenes.
**Format** | `OnOBSSwitchScenes <scene>`
**Format w/ Aliases** | `OnOBSSwitchScenes <scene1> <scene2> ...`
**Example** | `OnOBSSwitchScenes "BRB"`
**Example w/ Aliases** | `OnOBSSwitchScenes "BRB" "Intermission"`

#### Parameters
| | |
------------ | -------------
**scene** | The scene switched to.

***

### OnOBSTransitionTo
| | |
------------ | -------------
**Info** | Used to trigger a set of actions when a transition to a scene starts. Allows triggers to occur prior to a scene switch. Using `*` as the `<scene>` will execute the trigger for all scenes.
**Format** | `OnOBSTransitionTo <scene>`
**Format w/ Aliases** | `OnOBSTransitionTo <scene1> <scene2> ...`
**Example** | `OnOBSTransitionTo "BRB"`
**Example w/ Aliases** | `OnOBSTransitionTo "BRB" "Intermission"`

#### Parameters
| | |
------------ | -------------
**from** | The scene being switched from.
**scene** | The scene being switched to.

***

## OBS Actions

### OBS AddSceneItem
| | |
------------ | -------------
**Info** | Used to add an existing source to the specified scene. `<scene>` is the scene to add the source. `<source>` is the name of the source to add to the scene. `<on/off>` (default: `on`) is an optional visibility that determines if the source is visible when it's added.
**Format** | `OBS AddSceneItem <scene> <source> <on/off>`
**Example** | `OBS AddSceneItem BRB Webcam off`

***

### OBS CurrentScene
| | |
------------ | -------------
**Info** | Used to get the current scene in OBS.
**Format** | `OBS CurrentScene`
**Example** | `OBS CurrentScene`

#### Parameters
| | |
------------ | -------------
**current_scene** | The name of the active scene.

***

### OBS IsSceneSourceVisible
| | |
------------ | -------------
**Info** | Used to check if the specified source is turned on within the given scene in OBS.
**Format** | `OBS IsSceneSourceVisible <scene> <source>`
**Example** | `OBS IsSceneSourceVisible Alerts TwitchAlerts`

#### Parameters
| | |
------------ | -------------
**is_visible** | [true/false] `true` if the source is visible. Otherwise, `false`.

***

### OBS IsSourceActive
| | |
------------ | -------------
**Info** | Used to check if the specified source is active in the current scene. A source is active if it could be rendered in the current scene, regardless of visibility status.
**Format** | `OBS IsSourceActive <source>`
**Example** | `OBS IsSourceActive TwitchAlerts`

#### Parameters
| | |
------------ | -------------
**is_active** | [true/false] `true` if the source is active. Otherwise, `false`.

***

### OBS Mute
| | |
------------ | -------------
**Info** | Used to mute or unmute the specified audio source in OBS. Using `toggle` alternates the mute setting.
**Format** | `OBS Mute <source> <on/off/toggle>`
**Example** | `OBS Mute Mic/Aux on`

***

### OBS Position
| | |
------------ | -------------
**Info** | Use this to move an OBS source to the specified `<x>` and `<y>` coordinate.
**Format** | `OBS Position <scene> <source> <x> <y>`
**Example** | `OBS Position BRB Webcam 240 600`

#### Parameters
| | |
------------ | -------------
**init_x** | The initial value of the x coordinate before moving the source.
**init_y** | The initial value of the y coordinate before moving the source.

***

### OBS SaveReplayBuffer
| | |
------------ | -------------
**Info** | Used to save the current replay buffer.
**Format** | `OBS SaveReplayBuffer`
**Example** | `OBS SaveReplayBuffer`

***

### OBS Refresh
| | |
------------ | -------------
**Info** | Used to refresh a browser source in OBS.
**Format** | `OBS Refresh <source>`
**Example** | `OBS Refresh "Kruiz Control"`

***

### OBS Scene
| | |
------------ | -------------
**Info** | Used to change the scene in OBS.
**Format** | `OBS Scene <scene>`
**Example** | `OBS Scene Ending`

#### Parameters
| | |
------------ | -------------
**previous_scene** | The name of the active scene before changing to the specified scene. This allows users to revert scenes from anywhere.

***

### OBS SceneSource
| | |
------------ | -------------
**Info** | Used to toggle the visibility of a source in a specific scene in OBS. Using `toggle` switches the visibility.
**Format** | `OBS SceneSource <scene> <source> <on/off/toggle>`
**Example** | `OBS SceneSource Webcam Camera on`

***

### OBS Send
| | |
------------ | -------------
**Info** | Used to send a custom event to through the OBS websocket. `<message>` is the identifier of the message. (Optional) `<data>` is anything to send with the message.
**Format** | `OBS Send <message> <data>`
**Example** | `OBS Send PlayShikaka`
**Example (with data)** | `OBS Send PlayAudio Shikaka`

_Note: Messages are echo'd to all websocket-connected clients. This is useful for connecting other browser sources or triggering other triggers._

***

### OBS Size
| | |
------------ | -------------
**Info** | Use this to resize an OBS source to the specified `<width>` and `<height>` values.
**Format** | `OBS Size <scene> <source> <width> <height>`
**Example** | `OBS Size BRB Webcam 1920 1080`

#### Parameters
| | |
------------ | -------------
**init_width** | The initial width value before resizing the source.
**init_height** | The initial height value before resizing the source.

***

### OBS Source
| | |
------------ | -------------
**Info** | Used to toggle the visibility of a source in OBS. Only works if the source is in the current scene. Using `toggle` switches the visibility.
**Format** | `OBS Source <source> <on/off/toggle>`
**Example** | `OBS Source Webcam off`

_Note: The source must be in the current/active scene for this to trigger._

***

### OBS Source Filter
| | |
------------ | -------------
**Info** | Used to toggle the visibility of a source filter in OBS.
**Format** | `OBS Source <source> Filter <filter> <on/off/toggle>`
**Example** | `OBS Source Webcam Filter Rainbow on`

_Note: The source does not need to be in current/active scene for this to trigger._

***

### OBS Source Text
| | |
------------ | -------------
**Info** | Used to change the text of a text source in OBS.
**Format** | `OBS Source <source> Text <text>`
**Example** | `OBS Source RecentFollow Text {user}`

_Note: The text source does not need to be in current/active scene for this to trigger._

***

### OBS Source URL
| | |
------------ | -------------
**Info** | Used to change the URL of a browser source in OBS.
**Format** | `OBS Source <source> URL <url>`
**Example** | `OBS Source "Browser" URL "https://github.com/Kruiser8/Kruiz-Control"`

_Note: The browser source does not need to be in current/active scene for this to trigger._

***

### OBS StartReplayBuffer
| | |
------------ | -------------
**Info** | Used to start the replay buffer.
**Format** | `OBS StartReplayBuffer`
**Example** | `OBS StartReplayBuffer`

***

### OBS StartStream
| | |
------------ | -------------
**Info** | Used to start the stream in OBS. If the stream is already live, nothing will happen.
**Format** | `OBS StartStream`
**Example** | `OBS StartStream`

***

### OBS StopReplayBuffer
| | |
------------ | -------------
**Info** | Used to stop the replay buffer.
**Format** | `OBS StopReplayBuffer`
**Example** | `OBS StopReplayBuffer`

***

### OBS StopStream
| | |
------------ | -------------
**Info** | Used to stop the stream in OBS. If the stream is already stopped, nothing will happen.
**Format** | `OBS StopStream`
**Example** | `OBS StopStream`

***

### OBS TakeSourceScreenshot
| | |
------------ | -------------
**Info** | Used to take a screenshot of an OBS source and save it to a file. `<file>` is the absolute path to a file.
**Format** | `OBS TakeSourceScreenshot <source> <file>`
**Example** | `OBS TakeSourceScreenshot Webcam "C:\Users\YOUR_USER_NAME\Documents\Stream\screenshot.png"`

***

### OBS Version
| | |
------------ | -------------
**Info** | Used to retrieve the version of the OBS Websocket. This is helpful when debugging newer features.
**Format** | `OBS Version`
**Example** | `OBS Version`

#### Parameters
| | |
------------ | -------------
**version** | The version of the websocket.

***

### OBS Volume
| | |
------------ | -------------
**Info** | Used to change the volume of an audio source. `<volume>` must be a number between 0.0 and 1.0. Note, volume stands for the amplitude/mul value and is NOT the dB value or a percentage. Please test for the expected result before usage.
**Format** | `OBS Volume <source> <volume>`
**Example** | `OBS Volume "Desktop Audio" 0.2`

#### Parameters
| | |
------------ | -------------
**previous_volume** | The volume of the source before changing. This allows users to revert the volume to the prior level.

***
