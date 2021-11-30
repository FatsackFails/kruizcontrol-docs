---
title: Installation
date: Last Modified
slug: installation
eleventyNavigation:
  key: Installation
  order: 1
  title: Installation
  parent: Getting Started
---

## Setup Guide

- (If using OBS) Install the [OBS Websocket Plugin](https://github.com/Palakis/obs-websocket/releases/latest) (version 4.9.x or below). Reopen OBS after installing.
- Fill out [the settings files](/settings) in the settings folder.
- Add the **index.html** to OBS/SLOBS as a browser source.
- Type `!example` in your twitch chat. If your user responds with `Success! It worked!`, you're good to go!
- Customize the _triggers.txt_ with your own triggers from the [the documentation]/docs).

### OBS Websocket (if using OBS)
To use this script with OBS, install the [obs-websocket](https://github.com/Palakis/obs-websocket/releases/latest) plugin (version 4.9.x or below). Reopen OBS after installing.

In OBS, click **Tools** > **WebSockets Server Settings** and enable the websocket server.

It is **highly recommended** to use a password!

### Settings
Before the script will work, you'll need to fill out all of the settings files. Please see the [settings description](/settings) for more information.

### Add as Browser Source
Add the **index.html** file as a browser source within your broadcast software. It is *recommended* to add this source to one scene that is included in all other scenes (like your alert scene) rather than recreate this source in every scene.

### Steps for adding to OBS/SLOBS
- In OBS, under **Sources** click the + icon to add a new **Browser** source.
- Name it and select OK.
- Check the `Local file` checkbox.
- Click **Browse** and open the **index.html** file within the Kruiz Control script directory.
- Recommended to set the width/height to 100 or less to reduce the size of the source.

***
