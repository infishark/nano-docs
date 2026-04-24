---
title: Pairing
sidebar_position: 2
---

Pairing is how two or more Nanos get introduced to each other. Once paired, devices stay linked across reboots, so you only need to do this once per group.

### Before You Start

On every Nano you want on the mesh:

<ul className="step-list">
  <li>Make sure <strong>BLE Adv</strong> is turned on in <strong>Config -> Settings -> Shiver</strong>. Pairing itself runs over Bluetooth, then the devices swap to the mesh after they're paired.</li>
  <li>Optionally set a mesh name in the <strong>Name</strong> row so other Nanos show a friendly label for the device instead of its eFuse ID (see <a href="/docs/shiver/overview">Overview</a>).</li>
</ul>

Long Range mode doesn't matter here. It only affects how the mesh talks after pairing, not the Bluetooth link used during pairing itself.

### How Pairing Works

Pairing uses one <strong>initiator</strong> and one or more <strong>peripherals</strong>. The initiator is the Nano you drive through the Pair menu; the peripherals are every other Nano that shows up in its scan. A single initiator can pair with up to 15 peripherals in one round.

<ul className="step-list">
  <li>On the initiator, open <strong>Shiver -> Pair</strong>.</li>
  <li>Press <strong>[S]</strong> to start a scan. The screen shows <em>"Click [S] to scan"</em> until you do.</li>
  <li>The initiator scans over Bluetooth for other Nanos that are advertising themselves as pairable. You'll see a progress indicator while it runs.</li>
  <li>Each peripheral that the initiator finds shows a popup on its own screen: <em>"Pair with [eFuse]"</em>, where <em>[eFuse]</em> is the initiator's short fingerprint. Press <strong>Yes</strong> on each peripheral to accept.</li>
  <li>When the scan finishes, the initiator shows how many new Nanos were found.</li>
  <li>Press <strong>[S]</strong> again on the initiator to finalise. You'll see <em>"Paired!"</em> followed by <em>"Enabling mesh"</em> and <em>"Rebooting..."</em> on every device as they finish setting up.</li>
</ul>

:::info[Setup firmware auto-accepts]
If a peripheral is still running the setup firmware (the state a Nano is in when it first ships, before its first full boot), it won't show the <em>"Pair with [eFuse]"</em> popup. It accepts automatically. The popup only appears on Nanos that have already been through normal setup at least once.
:::

If the scan doesn't find anything, check that every other Nano is powered on and that <strong>BLE Adv</strong> is enabled on them, then retry.

:::tip
You only need to run Pair from <strong>one</strong> Nano. When that initiator finishes, every peripheral that accepted the popup is brought into the same mesh automatically.
:::
