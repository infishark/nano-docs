---
title: Sync
sidebar_position: 6
---

Sync copies files between paired Nanos. Captured handshakes, device settings, submitted captive portal JSONs, and individual files can all move across the mesh without plugging anything into a computer.

Open <strong>Shiver -> Sync</strong> to start. The app walks you through a short wizard: <strong>From</strong>, <strong>To</strong>, <strong>What</strong>, then a <strong>Review</strong> screen before anything transfers.

### Wizard Steps

#### From

Pick where the data is coming from:

- <strong>This device</strong> - this Nano is the source.
- <strong>Other devices</strong> - pick one or more paired Nanos as the source.

If you choose <strong>Other devices</strong>, a peer picker opens and you select which Nanos should contribute.

#### To

Pick where the data is going:

- <strong>This device</strong> - bring the data here.
- <strong>Other devices</strong> - send it out to a peer or peers.

The choices shown depend on what you picked for <strong>From</strong>. For example, if you already picked <em>This device</em> as the source, you won't see <em>This device</em> as a destination.

#### What

Pick the kind of data to sync. The options that appear depend on the <strong>From</strong> and <strong>To</strong> combination, but they include:

- <strong>Handshake files</strong> - captured Wi-Fi handshakes.
- <strong>Local file</strong> - pick a single file from the source device's storage (only available when the source is <em>This device</em>).
- <strong>Settings</strong> - share device settings. A category picker opens so you can choose which sets of settings to include (Display, Mesh, Wi-Fi, Bluetooth, IR, System, and so on).
- <strong>Portal creds</strong> - submitted JSONs from captive portals.

#### Review

The final screen summarises the plan on three short lines, for example:

- <em>From: me</em>
- <em>To: all</em>
- <em>What: hs</em>

Press <strong>Start</strong> to begin. Press <strong>Back</strong> to go back and change anything.

### During Transfer

The active screen shows a three-phase progress view: discovering targets, computing differences, then transferring the files. When incoming files are coming to this device, Sync may pause and ask <em>"Pull N files?"</em> before writing them, so you can back out if the count looks wrong.

When the session finishes, you'll see a summary with how many items were new, how many were upgraded, how many failed, and how long the whole transfer took.

### Receiver Mode

When another paired Nano sends data to this device, it automatically opens the Sync app in receiver mode. The screen shows it's being synced so the person holding it knows not to press buttons. Press <strong>[S]</strong> to exit receiver mode once the session is done.

:::tip
Sync only moves data between paired Nanos on the same mesh. If a target device isn't showing up in the pickers, check the <a href="./dashboard">Dashboard</a> to confirm it's online, and make sure it's on the same Long Range setting.
:::

:::note[Some combinations are not supported]
Some From/To/What combinations don't make sense, so the wizard simply doesn't offer them as options. For example, you can't send a <strong>specific single file</strong> from <strong>multiple</strong> source devices in the same session, because the file would only exist on one of them. Pick a single source for file-level sync, or stick to category syncs (handshakes, settings, portal JSONs) when you want to combine data from multiple sources.
:::
