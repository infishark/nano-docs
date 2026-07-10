---
title: Pairing
sidebar_position: 2
---

Pairing is how two or more Nanos get introduced to each other. Once paired, devices stay linked across reboots, so you only need to do this once per group.

### Before You Start

Pairing runs over Bluetooth, then the devices swap to the mesh once they're paired. A Nano only makes itself discoverable while it is on the Pair screen, so it helps to have every device you want to pair nearby and ready to open <strong>Shiver -> Pair</strong> together.

<ul className="step-list">
  <li>Optionally set a mesh name in <strong>Config -> Settings -> Shiver -> Name</strong> so other Nanos show a friendly label for the device instead of its eFuse ID (see <a href="/docs/shiver/overview">Overview</a>).</li>
</ul>

Long Range mode doesn't matter here. It only affects how the mesh talks after pairing, not the Bluetooth link used during pairing itself.

### How Pairing Works

Every Nano you want to pair has to be on the Pair screen at the same time, because a Nano is only discoverable while it is actively pairing. One of them acts as the <strong>initiator</strong>, the device you drive to finish the round, and the rest are <strong>peripherals</strong> that accept. A single initiator can pair with up to 15 peripherals in one round.

<ul className="step-list">
  <li>On <strong>every</strong> Nano, open <strong>Shiver -> Pair</strong> and press <strong>[S]</strong>. The screen shows <em>"Click [S] to scan"</em> until you do. This makes the Nano discoverable and looks for other Nanos at the same time.</li>
  <li>Pick one Nano to be the initiator and let its scan run. You'll see a progress indicator while it looks for the others.</li>
  <li>Each peripheral the initiator finds shows a popup on its own screen: <em>"Pair with [eFuse]"</em>, where <em>[eFuse]</em> is the initiator's short fingerprint. Press <strong>Yes</strong> on each peripheral to accept.</li>
  <li>When the scan finishes, the initiator shows how many new Nanos were found.</li>
  <li>Press <strong>[S]</strong> again on the initiator to finalise. You'll see <em>"Paired!"</em> followed by <em>"Enabling mesh"</em> and <em>"Rebooting..."</em> on every device as they finish setting up.</li>
</ul>

:::info[Setup firmware auto-accepts]
If a peripheral is still running the setup firmware (the state a Nano is in when it first ships, before its first full boot), it won't show the <em>"Pair with [eFuse]"</em> popup. It accepts automatically. The popup only appears on Nanos that have already been through normal setup at least once.
:::

If the scan doesn't find anything, check that every other Nano is powered on and sitting on the <strong>Shiver -> Pair</strong> screen with its scan started, then retry.

:::tip
Only the initiator needs to finalise the round. Every other Nano just has to be on the Pair screen and accept its popup, and they're all brought into the same mesh automatically.
:::
