---
title: Overview
sidebar_position: 1
---

Shiver Mesh is the BLEShark Nano's multi-device mode. When two or more Nanos are paired together, they form a small wireless mesh and can share state, run commands in parallel, and sync files between each other, all without needing a phone or computer in the middle.

Most of the Nano's standalone features keep working on their own. Turning Shiver on just unlocks a second layer of features that span a group of paired devices.

### What You Can Do With Shiver

<ul className="step-list">
  <li><strong>Dashboard</strong> - see at a glance which paired Nanos are online, who each device can hear directly, and how long the mesh has been up.</li>
  <li><strong>Execute</strong> - run a Wi-Fi, BLE, or IR command across every paired device at once, or a subset you pick.</li>
  <li><strong>Sync</strong> - copy captured handshakes, settings, portal credentials, or individual files between paired Nanos with a simple wizard.</li>
  <li><strong>Chat</strong> - send short text messages between Nanos on the mesh.</li>
  <li><strong>Pair</strong> - discover and add new Nanos to the group.</li>
  <li><strong>About</strong> - view the device's mesh identity, radio channel, role, and current rate.</li>
</ul>

### Turning Shiver On

<ul className="step-list">
  <li>Open the <strong>Config</strong> menu, then <strong>Settings</strong>, then <strong>Shiver</strong>.</li>
  <li>Toggle the <strong>Shiver</strong> row on.</li>
  <li>Give your device a short name in the <strong>Name</strong> row. This is what other Nanos will show for you in their Dashboard and pickers. The name is limited to 8 characters.</li>
</ul>

Once Shiver is on, the <strong>Shiver</strong> entry on the main menu becomes active. From there you can jump into Dashboard, Execute, Sync, Chat, Pair, or About.

:::note
BLE advertising and Shiver share the same radio. When Shiver is on, BLE advertising features (such as BLE Spam) are unavailable, and the opposite is also true. The <strong>BLE Adv</strong> and <strong>Shiver</strong> toggles are under the same <strong>Shiver</strong> settings category so you can switch between them easily.
:::

### Before Pairing

For a clean pairing experience, make sure every Nano you want on the mesh:

<ul className="step-list">
  <li>Is powered on and running the latest firmware (see [Updating](/docs/basics/updating)).</li>
  <li>Has Shiver enabled and has a mesh name set.</li>
  <li>Is on the same <strong>Long Range</strong> setting. All paired Nanos must match (see [Long Range Mode](./long-range-mode)).</li>
</ul>

When everything is ready, head to [Pairing and Dashboard](./pairing-and-dashboard) to add devices and start using the mesh.
