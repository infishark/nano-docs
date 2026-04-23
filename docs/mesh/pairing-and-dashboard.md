---
title: Pairing and Dashboard
sidebar_position: 2
---

Pairing is how two or more Nanos get introduced to each other. Once paired, devices stay linked across reboots, so you only need to do this once per group.

### Pairing Devices

<ul className="step-list">
  <li>On every Nano you want to pair, make sure Shiver is enabled and a mesh name is set (see [Overview](./overview)).</li>
  <li>Open <strong>Shiver → Pair</strong> on one of the devices.</li>
  <li>Press <strong>[S]</strong> to start a scan. The screen shows <em>"Click [S] to scan"</em> until you do.</li>
  <li>The device scans over Bluetooth for other Nanos that are advertising themselves as pairable. You'll see a progress indicator while it runs.</li>
  <li>When the scan finishes, you'll see how many new Nanos were found.</li>
  <li>Press <strong>[S]</strong> again to pair with them. The screen shows <em>"Paired!"</em> followed by <em>"Enabling mesh"</em> and <em>"Rebooting..."</em> as the devices finish setting up.</li>
</ul>

If nothing is found, check that every Nano you're trying to pair with is powered on and that Shiver is enabled on them, then retry.

:::info
You only need to run Pair from <strong>one</strong> of the Nanos. When that device pairs, it automatically invites the others into the group.
:::

### The Dashboard

The Dashboard is the main view of the mesh. Open <strong>Shiver → Dashboard</strong> and use <strong>[L]</strong> and <strong>[R]</strong> to flip between its pages.

#### Overview

Shows a quick summary of where the device stands on the mesh:

- <strong>Connection state</strong>, such as <em>Connected</em> or <em>Connected LR</em> if Long Range mode is active.
- How many <strong>neighbors</strong> the device can hear directly (one hop away).
- How many <strong>paired Nanos are currently online</strong> across the mesh.
- Uptime since the mesh came up.

#### Neighbors

A list of the Nanos this device can hear directly. If the list is empty, you'll see <em>"No neighbors"</em>, which usually means paired devices are out of range or powered off.

#### Online

A list of every paired Nano that's currently reachable, including ones more than one hop away. The list scrolls if there are more devices than fit on screen. If nobody is up yet, you'll see <em>"No nodes online"</em>.

### The About Screen

<strong>Shiver → About</strong> shows static identity and radio info. It has two pages, again navigated with <strong>[L]</strong> and <strong>[R]</strong>.

#### Device

- <strong>Name</strong> - the mesh name other Nanos see for this device.
- <strong>eFu</strong> - a short fingerprint of the chip's unique ID.
- <strong>MAC</strong> - the last four bytes of the Wi-Fi MAC address.

#### Mesh

- <strong>Channel</strong> - which Wi-Fi channel the mesh is running on.
- <strong>Role</strong> - whether this device is the current <em>Leader</em> (keeper of the shared time base) or a <em>Follower</em>.
- <strong>Sync</strong> - the mesh sync state, one of <em>Offline</em>, <em>Bootstrap</em>, <em>Holdover</em>, or <em>Synced</em>.
- <strong>Paired</strong> - total number of paired Nanos this device knows about.
- <strong>Rate</strong> - the current radio rate, either <em>Std 1M</em> or <em>LR 250k</em>. See [Long Range Mode](./long-range-mode) for what the difference means.

:::tip
If the Overview page says the device is Connected but paired Nanos aren't showing up under Online, check the About → Mesh page. If <strong>Rate</strong> differs between devices, they won't be able to talk to each other until they match.
:::
