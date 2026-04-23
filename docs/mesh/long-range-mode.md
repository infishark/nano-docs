---
title: Long Range Mode
sidebar_position: 4
---

Long Range (LR) mode is an alternative radio setting that trades raw speed for reach. It's useful when you want paired Nanos to stay in touch across larger distances or through more obstacles, at the cost of slower data transfer.

### What Changes When Long Range Is On

- Mesh traffic goes out at a slower but more robust rate.
- Paired Nanos can typically reach each other from further away, with fewer dropouts in noisy environments.
- Large transfers (for example, syncing many handshake captures) take noticeably longer than on the standard rate.
- The Shiver Dashboard shows <em>Connected LR</em> and the About -> Mesh page reports <strong>Rate: LR 250k</strong>.

With Long Range off, the mesh runs at the standard rate (<strong>Rate: Std 1M</strong> on the About -> Mesh page), which is much faster but doesn't reach as far.

### Turning Long Range On or Off

<ul className="step-list">
  <li>Open <strong>Config -> Settings -> Shiver</strong>.</li>
  <li>Toggle the <strong>Long Range</strong> row.</li>
  <li>A confirmation dialog appears: <em>"Long Range / Sync to mesh?"</em></li>
  <li>Select <strong>OK</strong> to apply the change. Select <strong>Cancel</strong> to keep the current setting.</li>
</ul>

When you confirm, the device pushes the new setting to every paired Nano that's online, then all of them restart together so the change takes effect cleanly.

:::warning[All paired devices must match]
Nanos on <strong>LR 250k</strong> cannot talk to Nanos on <strong>Std 1M</strong>. If you change the setting while some paired devices are offline, those devices will stay on the old rate and won't show up on the mesh until you manually flip them to match.
:::

### If Some Devices Were Offline During the Change

If a paired Nano was switched off or out of range when you toggled Long Range, it will still be on the old setting the next time it powers up, and it won't connect to the rest of the mesh. To bring it back in:

<ul className="step-list">
  <li>Power the offline Nano on and wait until it's ready.</li>
  <li>Open <strong>Config -> Settings -> Shiver -> Long Range</strong> and toggle it to the same value the rest of the mesh uses.</li>
  <li>Confirm the dialog. The device applies the setting locally, and since no peers are online on the other rate, it will reconnect to the mesh on its next boot.</li>
</ul>

:::tip
If you're unsure what rate the rest of your mesh is on, pick up one of the already-meshed Nanos, go to <strong>Shiver -> About</strong>, flip to the <strong>Mesh</strong> page, and check the <strong>Rate</strong> row.
:::
