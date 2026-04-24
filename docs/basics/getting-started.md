---
title: Getting Started
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Welcome to your BLEShark Nano! This guide walks you through the first-time setup.  
Before starting, make sure your device is fully charged. **Keep the switch ON while charging!**

### Setting Up Your BLEShark Nano

The latest BLEShark Nano setup is entirely on-device: no computer, no browser, no captive portal.

<ul className="step-list">
  <li>Turn on your BLEShark Nano using the side power switch.</li>
  <li>Press any button to begin.</li>
  <li>The Nano automatically scans for nearby Wi-Fi networks and lists them on screen.</li>
  <li>Select your network, then enter its password using the on-screen keyboard.</li>
  <li>The device connects to Wi-Fi automatically.</li>
  <li>You'll see a prompt: <em>"Setting up multiple devices?"</em> with Yes and No options.</li>
</ul>

Pick **No** for a single-device setup. Pick **Yes** if you have more than one Nano and want them all configured at once (see the next section).

Once you answer the prompt, the device downloads and installs the latest firmware automatically. You're all set.

:::info[Channel note]
**Channel 13 & 14 usage is restricted in certain regions and, as a result, the device may not connect to the 2.4GHz network. Channels from 1-12 should function as expected in supported regions.**
:::

### Setting Up Multiple Devices

If you chose **Yes** on the multi-device prompt, the Nano does the rest for you:

<ul className="step-list">
  <li>Power on every other Nano you want to include, and leave each of them on its setup screen.</li>
  <li>The first Nano discovers the others over Bluetooth and pairs with them automatically.</li>
  <li>Mesh identities are exchanged so every paired device joins the same Shiver network on its first boot.</li>
  <li>The Wi-Fi network name and password you entered are pushed to every paired device, so you don't have to type them in again.</li>
  <li>All devices then move on to the firmware update step together.</li>
</ul>

### If You Have Older Setup Firmware

A portion of Nanos shipped with an earlier captive portal setup flow. If, when you press any button after boot, your Nano starts broadcasting its own Wi-Fi network and asks you to connect from a phone or laptop (instead of showing a network picker directly on screen), you're on the older setup firmware. You have two options:

1. **Follow the captive portal steps below** to complete setup as-is.
2. **Re-flash with the latest setup firmware** via <a href="https://flasher.infishark.com">flasher.infishark.com</a>, then restart setup from the top of this page.

#### Captive Portal Setup (older firmware)

<ul className="step-list">
  <li>Turn on your BLEShark Nano using the side power switch.</li>
  <li>Press any button to begin.</li>
  <li>Find and connect to the Wi-Fi network displayed on your BLEShark Nano's screen.</li>
  <li>A login page (captive portal) should appear automatically.</li>
  <li>Enter the credentials shown on the BLEShark Nano screen and click <strong>Login</strong>.</li>
  <li>Press <strong>Scan Networks</strong> to detect nearby Wi-Fi networks.</li>
  <li>Select your desired network.</li>
  <li>Enter your Wi-Fi password.</li>
  <li>Click <strong>Connect</strong> to finish the setup.</li>
</ul>

:::info[Troubleshooting the captive portal]
<Tabs>
  <TabItem value="samsung" label="📱 Samsung Users">

  If the captive portal doesn't appear, you may see a message like:
   *"Internet may not be available"*  
  When connecting, tap **Connect only this time** or **Always connect**.  
  If nothing shows up, open a browser and go to [nano.place](https://nano.place) to force the login page.  

  </TabItem>

  <TabItem value="vpn" label="🔒 VPN Users">

  If you're using a VPN, the captive portal may not appear.  
  Please **disable your VPN** before connecting to the BLEShark Nano's Wi-Fi network.  
  Once the setup is complete, you can re-enable your VPN.  

  </TabItem>
</Tabs>
:::

Still having trouble? Contact us at support@infishark.com.
