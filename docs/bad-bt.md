---
title: Bad-BT
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
  <li>Scroll down to <strong>Apps Settings</strong> and click <strong>Upload Script</strong>.</li>
  <li>Select your script file and click <strong>Save Settings</strong>.</li>
</ol>

To run your uploaded script, just select the **custom** option from the Bad-BT menu.

:::danger[Legal Warning]
Bad-BT is intended for **educational, testing, and ethical security use** only.  
Unauthorized access or injection of payloads without consent is illegal and strictly prohibited.
:::
