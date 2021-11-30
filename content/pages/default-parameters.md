---
title: Default Parameters
date: Last Modified
slug: default-parameters
toc: false
eleventyNavigation:
  key: Default Parameters
  order: 102
  title: Default Parameters
  parent: Docs
---

The following parameters are always available. Use the `_successful_` and `_unsuccessful_` parameters to test that the [Kruiz Control settings](/settings) are correct.


| Parameter | Description |
------------ | -------------
**\_successful\_** | A comma delimited list of handlers that initialized correctly.
**\_unsuccessful\_** | A comma delimited list of handlers that did not initialize correctly.
**\_kc\_event\_id\_** | A unique id for each event occurrence in Kruiz Control. If you need a unique identifier, use this. The id resets to 0 after 1,000,000,000.
***
