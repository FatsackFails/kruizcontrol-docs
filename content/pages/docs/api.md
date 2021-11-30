---
title: API
date: Last Modified
slug: api
eleventyNavigation:
  key: API
  order: 104
  title: API
  parent: Docs
---

Enables the ability to call an API and use the response.

## API Triggers
None at the moment.

***

## API Actions

### API Clear
| | |
------------ | -------------
**Info** | Used to clear an API configuration. `<name>` is the name of the API to clear.
**Format** | `API Clear <name>`
**Example** | `API Clear HostLookup`

***

### API Data
| | |
------------ | -------------
**Info** | Used to add a key-value pair as data to an API configuration. `<name>` is the name of the API to update. `<key>` and `<value>` are the inputs.
**Format** | `API Data <name> <key> <value>`
**Example** | `API Data TwitchAPI login {user}`

***

### API Get
| | |
------------ | -------------
**Info** | Used to call an API and retrieve the data. `<url>` is the API to call.
**Format** | `API GET <url>`
**Example** | `API GET https://api.crunchprank.net/twitch/hosts/kruiser8?implode&display_name`

#### Parameters
| | |
------------ | -------------
**api_data** | The response from calling the API. If the API call succeeds and returns no data, this will be `success`. If the call fails, this will be `error`.

***

### API Header
| | |
------------ | -------------
**Info** | Used to add a header to an API configuration. `<name>` is the name of the API to update. `<key>` and `<value>` are the input header.
**Format** | `API Header <name> <key> <value>`
**Example** | `API Header TwitchAPI "Authorization" "Oauth {token}"`

***

### API Method
| | |
------------ | -------------
**Info** | Used to set the method of an API configuration. `<name>` is the name of the API to update. `<method>` is the type of API call (i.e. GET, POST, PUT, DELETE, etc.). If this is not called, the default method is `GET`.
**Format** | `API Method <name> <method>`
**Example** | `API Method TwitchAPI POST`

***

### API RawData
| | |
------------ | -------------
**Info** | Used to add raw data to an API configuration. `<name>` is the name of the API to call. `<raw_data>` is the API data. This can be used to add json or other formats to the API body.
**Format** | `API RawData <name> <raw_data>`
**Example** | `API RawData DummyAPI "{ user: kruiser8, text: "my custom text" }"`

***

### API Send
| | |
------------ | -------------
**Info** | Used to send an API configuration. `<name>` is the name of the API to call.
**Format** | `API Send <name>`
**Example** | `API Send TwitchAPI`

#### Parameters
| | |
------------ | -------------
**api_data** | The response from calling the API. If the API call succeeds and returns no data, this will be `success`. If the call fails, this will be `error`.

***

### API Url
| | |
------------ | -------------
**Info** | Used to set the url of an API configuration. `<name>` is the name of the API to update. `<url>` is the API to call.
**Format** | `API Url <name> <url>`
**Example** | `API Url TwitchAPI "https://api.twitch.tv/helix/users/follows"`

***
