---
title: Dashboard
sidebar_position: 3
---

The Dashboard is the main view of the mesh. It shows which paired Nanos this device can hear directly, which ones are online anywhere on the mesh, and the current state of the connection. The <strong>About</strong> screen sits alongside it and shows static identity and radio info.

### The Dashboard

Open <strong>Shiver -> Dashboard</strong> and use <strong>[L]</strong> and <strong>[R]</strong> to flip between its pages.

#### Overview

Shows a quick summary of where this device stands on the mesh:

- <strong>Connection state</strong>, such as <em>Connected</em> or <em>Connected LR</em> if Long Range mode is active.
- How many <strong>neighbors</strong> the device can hear directly (one hop away).
- How many <strong>paired Nanos are currently online</strong> across the mesh.
- Uptime since the mesh came up.

#### Neighbors

A list of the Nanos this device can hear directly. If the list is empty, you'll see <em>"No neighbors"</em>, which usually means paired devices are out of range or powered off.

#### Online

A list of every paired Nano that's currently reachable, including ones more than one hop away. The list scrolls if there are more devices than fit on screen. If nobody is up yet, you'll see <em>"No nodes online"</em>.

### The About Screen

<strong>Shiver -> About</strong> shows static identity and radio info. It has two pages, again navigated with <strong>[L]</strong> and <strong>[R]</strong>.

#### Device

- <strong>Name</strong> - the mesh name other Nanos see for this device, or the eFuse fallback if you haven't set one.
- <strong>eFu</strong> - a short fingerprint of the chip's unique ID.
- <strong>MAC</strong> - the last four bytes of the Wi-Fi MAC address.

#### Mesh

- <strong>Channel</strong> - which Wi-Fi channel the mesh is running on.
- <strong>Role</strong> - whether this device is the current <em>Leader</em> (keeper of the shared time base) or a <em>Follower</em>.
- <strong>Sync</strong> - the mesh sync state, one of <em>Offline</em>, <em>Bootstrap</em>, <em>Holdover</em>, or <em>Synced</em>.
- <strong>Paired</strong> - total number of paired Nanos this device knows about.
- <strong>Rate</strong> - the current radio rate, either <em>Std 1M</em> or <em>LR 250k</em>. See <a href="./long-range-mode">Long Range Mode</a> for what the difference means.

:::tip
If the Overview page says the device is Connected but paired Nanos aren't showing up under Online, check the About -> Mesh page. If <strong>Rate</strong> differs between devices, they won't be able to talk to each other until they match.
:::
