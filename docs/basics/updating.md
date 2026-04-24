---
title: Updating
---

Firmware updates improve performance, fix bugs, and add new features to your BLEShark Nano.  
Keeping your device updated ensures you're always running the latest enhancements.

Your BLEShark Nano checks for updates every time it boots (as long as it's connected to Wi-Fi).  
It compares the installed version to the latest release available from InfiShark's update servers.  
This check is quick - usually takes about <strong>1-5 seconds</strong>.

Automatic updates are <strong>enabled by default</strong>, but you can turn them off from <strong>Config -> Settings -> System -> Updates</strong>.

### How Auto Updates Work

<ul className="step-list">
  <li>On boot, if an update is available, you’ll see: <em>“Do you want to update?”</em></li>
  <li>Use <strong>[L]</strong> and <strong>[R]</strong> to toggle your choice.</li>
  <li>Press <strong>[S]</strong> to confirm and start the update.</li>
</ul>

### What Happens During an Update

<ul className="step-list">
  <li>The latest firmware is downloaded from the official repo.</li>
  <li>It installs automatically - no user input needed.</li>
  <li>Total time: usually <strong>1-2 minutes</strong>.</li>
</ul>

Once it's done, you’ll have the newest features, fixes, and improvements - no cables, no hassle.

### Web Flasher

If you need to flash the setup firmware manually, for example during first-time setup, for recovery, or to get back to a clean state, use the official web flasher at <a href="https://flasher.infishark.com">flasher.infishark.com</a>.

:::note[Setup firmware only]
The web flasher currently installs <strong>setup firmware only</strong>. It's for first-time setup and recovery, not for applying regular release updates. Full firmware releases ship via over-the-air updates once the device is online.
:::

<ul className="step-list">
  <li>Open <a href="https://flasher.infishark.com">flasher.infishark.com</a> in a supported browser.</li>
  <li>Plug your BLEShark Nano into your computer with a USB-C cable, and flip the side switch to <strong>ON</strong>.</li>
  <li>Click <strong>Connect</strong> and pick your device's serial port from the browser prompt.</li>
  <li>Follow the on-screen instructions to install the latest setup firmware.</li>
</ul>

After a manual flash, the device boots into setup mode. Follow the <a href="/docs/basics/getting-started">Getting Started</a> guide to bring it back online. Once it's connected to Wi-Fi, automatic updates take over from there.

:::note[Browser Support]
The web flasher uses the <strong>Web Serial API</strong>, which is available on desktop <strong>Chrome</strong> and <strong>Edge</strong>. Safari, Firefox, and mobile browsers are not supported.
:::
