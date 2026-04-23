---
title: Execute
sidebar_position: 4
---

Execute lets one Nano tell other paired Nanos to run a command. Instead of walking around to each device, you pick a command on one of them and it fans out across the mesh.

Open <strong>Shiver → Execute</strong> to start.

### The Flow

Execute walks you through a short three-step picker, followed by a dispatch screen.

<ul className="step-list">
  <li><strong>Pick a category</strong>: <strong>WiFi</strong>, <strong>BLE</strong>, <strong>IR</strong>, or <strong>Manage</strong>.</li>
  <li><strong>Pick a command</strong> within that category (see list below).</li>
  <li><strong>Pick the targets</strong>: either <strong>All Devices</strong> (every online paired Nano), or pick a subset from the list.</li>
  <li>The device shows a dispatch screen while the command is sent out, with a short grace period (about three seconds) before this device also runs the command locally.</li>
</ul>

At any point before dispatch finishes, you can go back and change your selection.

### Available Commands

#### WiFi

- <strong>Captive Portal</strong> - start a captive portal on every target.
- <strong>Scan Networks</strong> - have each target scan for nearby Wi-Fi networks.
- <strong>Deauth</strong> - run a deauthentication attack on each target.
- <strong>Handshake</strong> - start a handshake capture session across the targets.
- <strong>AP Spam</strong> - spam a list of fake networks. You'll get a follow-up picker for the list type (Rickroll, Random, Funny, Custom, or Targeted).

#### BLE

- <strong>Spam</strong> - BLE advertising spam.
- <strong>Scan</strong> - scan for nearby Bluetooth devices.

#### IR

- <strong>TV-B-Gone</strong> - cycle through universal power-off codes.
- <strong>Custom IR TX</strong> - transmit a recorded IR command.
- <strong>IR RX</strong> - listen for and record an incoming IR signal.

#### Manage

- <strong>Update</strong> - have the targets check for and install the latest firmware.
- <strong>Diagnostic</strong> - run a diagnostic routine on the targets.
- <strong>Stop All</strong> - stop whatever the targets are currently doing.
- <strong>Restart</strong> - reboot the targets.

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
