---
title: Execute
sidebar_position: 5
---

Execute lets one Nano tell other paired Nanos to run a command. Instead of walking around to each device, you pick a command on one of them and it fans out across the mesh.

Open <strong>Shiver -> Execute</strong> to start.

### The Flow

Execute walks you through a short three-step picker, followed by a dispatch screen.

<ul className="step-list">
  <li><strong>Pick a category</strong>: <strong>WiFi</strong>, <strong>BLE</strong>, <strong>IR</strong>, or <strong>Manage</strong>.</li>
  <li><strong>Pick a command</strong> within that category.</li>
  <li><strong>Pick the targets</strong>: either <strong>All Devices</strong> (every online paired Nano), or pick a subset from the list.</li>
  <li>The device shows a dispatch screen while the command is sent out, with a short grace period (about three seconds) before this device also runs the command locally.</li>
</ul>

At any point before dispatch finishes, you can go back and change your selection.

### Command Categories

The exact command list under each category evolves as new features land in firmware, so the definitive list is always the one shown on your device. At a high level:

- <strong>WiFi</strong> covers the Wi-Fi pentesting and scanning tools: captive portal, network scan, deauth (where legal), handshake capture, AP spam, and similar.
- <strong>BLE</strong> covers Bluetooth features such as BLE spam and Bluetooth scans.
- <strong>IR</strong> covers infrared transmit and receive features, including the universal power-off routine.
- <strong>Manage</strong> covers meta actions on the mesh itself: updating firmware on targets, running diagnostics, stopping whatever the targets are currently doing, and restarting them.

Open <strong>Shiver -> Execute</strong> on your device and browse the categories to see the current catalogue.

### Target Selection

When you pick a command that needs a target, you get:

- <strong>All Devices</strong> - every paired Nano that's online right now.
- A list of individual Nanos by their mesh names.
- <strong>Back</strong> - return to the command picker.

Pick <strong>All Devices</strong> for the fastest sweep, or pick specific ones if you only want to involve a subset of your group.

### The Dispatch Screen

Once you confirm, the device shows a progress view while it sends the command out. The screen stays on long enough to catch any immediate failures, then this Nano joins in and runs the command too. That three-second grace is deliberate: it lets the other devices start first so you can watch their progress on a neighbor's Dashboard if you want.

:::warning[Legal Disclaimer]
Many Execute commands trigger pentesting features across multiple devices at once. Only use them on networks and devices you own or are explicitly authorized to test. Responsibility for how Execute is used sits entirely with the person who starts it.
:::
