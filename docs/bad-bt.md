---
title: Bad-BT
sidebar_position: 6
---

**Bad-BT** is a powerful Bluetooth-based payload injector built into the BLEShark Nano. It works like a wireless Rubber Ducky for Bluetooth devices - letting you:

- Emulate a Bluetooth keyboard
- Inject DuckyScript-style payloads
- Prank, test, or demonstrate real-world vulnerabilities
- Automate keystrokes

Once connected, you can control the target device remotely with a single tap.
### How to Use It

Follow these steps to use the Bad-BT feature:

<ol className="step-list">
  <li>Navigate to the <strong>Bad-BT</strong> menu on your BLEShark Nano.</li>
  <li>Select a script type (e.g. <code>prank</code> or <code>custom</code>).</li>
  <li>Choose the specific script you want to run.</li>
  <li>Connect to your target device via Bluetooth.</li>
  <li>Once paired, press [S] to instantly execute the payload.</li>
</ol>

:::tip[Important!]
If you previously paired your BLEShark Nano using the **TikTok Scroller** app, un-pair it first.  
That mode registers the device as a mouse - not a keyboard - and prevents Bad-BT from functioning.
:::

### Uploading Your Own Scripts

You can write and upload your own DuckyScript files using the on-device Transfer portal:

<ol className="step-list">
  <li>Create your script using <code>.txt</code> format with DuckyScript commands.</li>
  <li>Turn on the BLEShark Nano and open <strong>Config -> Transfer</strong>.</li>
  <li>Connect to the BLEShark Wi-Fi network, enter the credentials shown on-screen.</li>
  <li>Under the <strong>Upload Files</strong> section, click <strong>BadUSB Script</strong> and select your file.</li>
  <li>Once the upload completes, the script is ready to run from the Bad-BT menu.</li>
</ol>

To run your uploaded script, just select the **custom** option from the Bad-BT menu.

### Editing DuckyScript On-Device

You can also write and edit DuckyScript files directly on the BLEShark Nano, no computer needed.

<ul className="step-list">
  <li>Open <strong>Bad-BT -> Edit</strong> on your device.</li>
  <li>You'll see every line of the current script, plus <strong>+ Add Line</strong>, <strong>Save</strong>, and <strong>Back</strong> at the bottom of the list.</li>
  <li>Selecting an existing line opens an actions menu with <strong>Edit</strong>, <strong>Insert After</strong>, <strong>Delete</strong>, and <strong>Back</strong>. Pick one to apply it.</li>
  <li><strong>+ Add Line</strong> appends a new empty line at the bottom for you to fill in.</li>
  <li>When you have unsaved changes, the <strong>Save</strong> label shows a trailing asterisk (<code>Save *</code>). Select it to commit your changes.</li>
</ul>

:::info[Limits]
Scripts edited on-device can hold up to <strong>1024 lines</strong>, and each line can be up to <strong>64 characters</strong> long. The on-device editor and the Transfer portal edit the same script file, so changes you make on the device will show up in later exports, and the other way around.
:::

:::danger[Legal Warning]
Bad-BT is intended for **educational, testing, and ethical security use** only.  
Unauthorized access or injection of payloads without consent is illegal and strictly prohibited.
:::
