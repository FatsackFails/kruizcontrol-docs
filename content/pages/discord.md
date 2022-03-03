---
title: Discord
date: Last Modified
slug: discord
eleventyNavigation:
  key: Discord
  order: 108
  title: Discord
  parent: Docs
---

Enables the ability to send messages to discord by creating webhooks and using discord embeds.

In order to create webhooks, follow the `Making a Webhook` section on this page: https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks

Once created and configured, click the `Copy Webhook URL` button and put that into a [`Discord Create`](#discord-create) action.

## Discord Triggers
None at the moment.

***

## Discord Actions

### Discord Clear
| | |
------------ | -------------
**Info** | Used to clear a webhook by name, removing all existing message data. `<name>` is the id that will be used to refer to this webhook in other discord actions. This does not remove the webhook URL.
**Format** | `Discord Clear <name>`
**Example** | `Discord Clear "GeneralChannel"`

***

### Discord Color
| | |
------------ | -------------
**Info** | Used to customize the color on the left hand side of a discord embed. `<name>` is the id that was used to register the webhook in a [`Discord Create`](#discord-create). `<color>` is a hex code for a color (`#1a34b6`).
**Format** | `Discord Color <name> <description>`
**Example** | `Discord Color "GeneralChannel" "#1a34b6"`

***

### Discord Create
| | |
------------ | -------------
**Info** | Used to create/register a webhook by name for use in later actions. `<name>` is the id that will be used to refer to this webhook in other discord actions. `<url>` is the url of the discord webhook that you create.
**Format** | `Discord Create <name> <url>`
**Example** | `Discord Create "GeneralChannel" https://discord.com/api/webhooks/419746549841564984/769fhue98uywe99ftr8hFEfe878wjfh9wuf988Et`

***

### Discord Delete
| | |
------------ | -------------
**Info** | Used to delete a message sent via the webhook. `<name>` is the id that was used to register the webhook in a [`Discord Create`](#discord-create). `<message_id>` is optional. This defaults to the last sent message.
**Format** | `Discord Delete <name>`
**Example** | `Discord Delete "GeneralChannel"`
**Example w/ Message Id** | `Discord Delete "GeneralChannel" 810814654`

***

### Discord Description
| | |
------------ | -------------
**Info** | Used to add a description to a discord embed. `<name>` is the id that was used to register the webhook in a [`Discord Create`](#discord-create). `<description>` is the text to add as the embed text.
**Format** | `Discord Description <name> <description>`
**Example** | `Discord Description "GeneralChannel" "Live on Twitch!"`

***

### Discord Field
| | |
------------ | -------------
**Info** | Used to add a field to a discord embed. `<name>` is the id that was used to register the webhook in a [`Discord Create`](#discord-create). `<field>` is the text to add as the title of the field. `<value>` is the text to put in the field. `<inline_optional>` is an optional true/false value to specify whether or not to put this field inline (horizontally) with other fields.
**Format** | `Discord Field <name> <field> <value> <inline_optional>`
**Example** | `Discord Field "GeneralChannel" "Game" "The Binding of Isaac: Repentance"`

***

### Discord File
| | |
------------ | -------------
**Info** | Used to upload a file attachment with a discord message. `<name>` is the id that was used to register the webhook in a [`Discord Create`](#discord-create). `<file>` is the relative path to a file to upload. Relative paths start at the Kruiz Control root directory.
**Format** | `Discord File <name> <file>`
**Example w/ relative path** | `Discord File "GeneralChannel" "screenshots/screenshot.png"`

***

### Discord FooterIcon
| | |
------------ | -------------
**Info** | Used to add an icon to the discord embed footer. `<name>` is the id that was used to register the webhook in a [`Discord Create`](#discord-create). `<icon>` is the URL of the icon to add.
**Format** | `Discord FooterIcon <name> <icon>`
**Example** | `Discord FooterIcon "GeneralChannel" "https://static-cdn.jtvnw.net/jtv_user_pictures/4c5ff382-f697-4357-aebb-ff035a82b60c-profile_image-70x70.png"`

***

### Discord FooterText
| | |
------------ | -------------
**Info** | Used to add text to a discord embed footer. `<name>` is the id that was used to register the webhook in a [`Discord Create`](#discord-create). `<text>` is the text to add as the footer text.
**Format** | `Discord FooterText <name> <text>`
**Example** | `Discord FooterText "GeneralChannel" "Kruiser8"`

***

### Discord Image
| | |
------------ | -------------
**Info** | Used to add an image to a discord embed. `<name>` is the id that was used to register the webhook in a [`Discord Create`](#discord-create). `<image>` is the URL of the image to add in the body of the embed.
**Format** | `Discord Image <name> <image>`
**Example** | `Discord Image "GeneralChannel" "https://static-cdn.jtvnw.net/jtv_user_pictures/12a2c0d2-2be5-45fe-9ff9-46d05007c395-profile_banner-480.png"`


***

### Discord Message
| | |
------------ | -------------
**Info** | Used to add a message to the discord webhook call. `<name>` is the id that was used to register the webhook in a [`Discord Create`](#discord-create). `<message>` is the text of the discord message.
**Format** | `Discord Message <name> <message>`
**Example w/ Message** | `Discord Message "GeneralChannel" "Hey folks!"`

***

### Discord Send
| | |
------------ | -------------
**Info** | Used to send a message to discord, using any embed data currently set. `<name>` is the id that was used to register the webhook in a [`Discord Create`](#discord-create).
**Format** | `Discord Send <name>`
**Example** | `Discord Send "GeneralChannel"`
**Example w/ Message** | `Discord Send "GeneralChannel" "Hey folks!"`

#### Parameters
| | |
------------ | -------------
**discord_msg_id** | The id of the message sent. This can be used with [`Discord Update`](#discord-update) and [`Discord Delete`](#discord-delete).

***

### Discord Thumbnail
| | |
------------ | -------------
**Info** | Used to set the thumbnail for the next embed. `<name>` is the id that was used to register the webhook in a [`Discord Create`](#discord-create). `<thumbnail>` is the url to a thumbnail image.
**Format** | `Discord Thumbnail <name> <image>`
**Example** | `Discord Thumbnail "GeneralChannel" "https://static-cdn.jtvnw.net/jtv_user_pictures/4c5ff382-f697-4357-aebb-ff035a82b60c-profile_image-70x70.png"`

***

### Discord Title
| | |
------------ | -------------
**Info** | Used to set the title for the next embed. `<name>` is the id that was used to register the webhook in a [`Discord Create`](#discord-create). `<title>` is the text to use as the title.
**Format** | `Discord Title <name> <image>`
**Example** | `Discord Title "GeneralChannel" "LIVE ON TWITCH"`

***

### Discord Update
| | |
------------ | -------------
**Info** | Used to update a message previously sent via the webhook using any embed data currently set. `<name>` is the id that was used to register the webhook in a [`Discord Create`](#discord-create). `<message_id>` is optional. This defaults to the last sent message.
**Format** | `Discord Update <name> <message_id>`
**Example** | `Discord Update "GeneralChannel"`
**Example w/ Id** | `Discord Update "GeneralChannel" 801801891`

***

### Discord URL
| | |
------------ | -------------
**Info** | Used to add a link to the discord embed title. `<name>` is the id that was used to register the webhook in a [`Discord Create`](#discord-create). `<url>` is the link URL for the embed.
**Format** | `Discord Url <name> <url>`
**Example** | `Discord Url "GeneralChannel" "https://twitch.tv/kruiser8"`

***
