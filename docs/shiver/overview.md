---
title: Overview
sidebar_position: 1
---

Shiver is the BLEShark Nano's multi-device protocol. When two or more Nanos are paired together, they form a small wireless mesh and can share state, run commands in parallel, and sync files between each other, all without needing a phone or computer in the middle.

Most of the Nano's standalone features keep working on their own. Turning Shiver on just unlocks a second layer of features that span a group of paired devices.

### What You Can Do With Shiver

<ul className="step-list">
  <li><strong>Execute</strong> - run a Wi-Fi, BLE, or IR command across every paired device at once, or a subset you pick.</li>
  <li><strong>Dashboard</strong> - see at a glance which paired Nanos are online, who each device can hear directly, and how long the mesh has been up.</li>
  <li><strong>Sync</strong> - copy captured handshakes, settings, submitted captive portal JSONs, or individual files between paired Nanos with a simple wizard.</li>
  <li><strong>Chat</strong> - send short text messages between Nanos on the mesh.</li>
  <li><strong>Pair</strong> - discover and add new Nanos to the group.</li>
  <li><strong>About</strong> - view the device's mesh identity, radio channel, role, and current rate.</li>
</ul>

The <strong>Shiver</strong> entry on the main menu is always available, even if you only own a single Nano. That way you can see what the mesh experience looks like before adding more devices.

### Turning Shiver On

<ul className="step-list">
  <li>Open the <strong>Config</strong> menu, then <strong>Settings</strong>, then <strong>Shiver</strong>.</li>
  <li>Toggle the <strong>Shiver</strong> row on.</li>
  <li>Optionally set a mesh name in the <strong>Name</strong> row. This is what other Nanos will show for you in their Dashboard and pickers. The name is limited to 8 characters. If you leave it blank, your device is identified on the mesh by the first four bytes of its eFuse ID (for example <em>"E02E"</em> or <em>"B8FA"</em>).</li>
</ul>

:::note[BLE and Shiver share the radio]
A few features rely on a persistent Bluetooth connection and cannot run while the mesh is active, because the mesh switches the radio back and forth too often for a stable connection to survive. Turn Shiver off before using <strong>Bad-BT</strong>, <strong>Mini Keypad</strong>, or <strong>Scroller</strong>.

<strong>BLE Spam</strong> is fine to use with Shiver on. Its advertising packets are short and it can share the radio with the mesh without issue.
:::

### Before Pairing

For a clean pairing experience, make sure every Nano you want on the mesh:

<ul className="step-list">
  <li>Is powered on and running the latest firmware (see <a href="/docs/basics/updating">Updating</a>).</li>
  <li>Has <strong>pair</strong> mode selected under <strong>Config -> Settings -> Shiver -> Mode</strong>. Pairing itself runs over Bluetooth; the devices swap to the mesh automatically after they're paired.</li>
</ul>

Long Range mode is <em>not</em> a prerequisite for pairing. Pairing uses Bluetooth, which isn't affected by the Long Range setting. See <a href="/docs/shiver/long-range-mode">Long Range Mode</a> for when and why you'd turn it on.

When everything is ready, head to <a href="/docs/shiver/pairing">Pairing</a> to add devices, then <a href="/docs/shiver/dashboard">Dashboard</a> to see your mesh in action.
