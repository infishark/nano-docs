---
title: Settings
sidebar_position: 9
---

The BLEShark Nano gives you two places to tune how the device behaves, both under the <strong>Config</strong> entry on the main menu:

- <strong>Config -> Settings</strong> is the on-device editor. Toggle features, pick values, set names, no computer needed.
- <strong>Config -> Transfer</strong> opens the file portal. Upload scripts or captive portal HTML, and export captured handshakes or your current settings.

### Editing Settings On-Device

Open <strong>Config -> Settings</strong> to bring up the full settings editor. Use <strong>[L]</strong> and <strong>[R]</strong> to move through the list, and <strong>[S]</strong> to change or enter a row. Toggles flip on press. Numbers, pickers, and text fields open a small editor where <strong>[L]</strong> / <strong>[R]</strong> change the value and <strong>[S]</strong> saves.

Settings are grouped by category:

#### Shiver

- <strong>BLE Adv</strong> - turn regular Bluetooth advertising on or off.
- <strong>Shiver</strong> - enable Shiver, the multi-device protocol. See <a href="/docs/shiver/overview">Shiver Overview</a>.
- <strong>Name</strong> - the mesh name other Nanos see for this device. Up to 8 characters. Leave blank to fall back to the first four bytes of the eFuse ID.
- <strong>Long Range</strong> - toggle the mesh's Long Range radio rate. See <a href="/docs/shiver/long-range-mode">Long Range Mode</a> for the tradeoffs.

#### WiFi

- <strong>WiFi Nets</strong> - manage the list of saved Wi-Fi networks. The Nano cycles through this list automatically on boot and during firmware updates until it finds one that's available, so you rarely need to touch it after first-time setup. Use the rows here to add new networks or remove old ones. The separate <strong>Wi-Fi -> Connect</strong> menu (not in Settings) is a testing tool for forcing a connection to a specific saved network so you can observe DHCP traffic, find an IoT device's IP, or run other tests against it.
- <strong>Deauth Dly</strong> - delay between deauth frames, in milliseconds. Range 0 to 50.
- <strong>AP Count</strong> - maximum number of access points to list when scanning. Range 10 to 500.
- <strong>Evil SSID</strong> - Wi-Fi name the device broadcasts when running Evil Portal. Up to 32 characters.
- <strong>Portal SSID</strong> - Wi-Fi name the device broadcasts when running Captive Portal. Up to 32 characters.

#### Bluetooth

- <strong>Key Delay</strong> - delay between keystrokes when sending Bad-BT payloads, in milliseconds. Range 1 to 100.
- <strong>BT Name</strong> - the Bluetooth name the device advertises to phones and computers. Up to 20 characters.
- <strong>Keypad</strong> - edit the eight Mini Keypad macro slots. Each slot holds one key combination up to 24 characters, for example <code>ctrl+alt+delete</code>.

#### IR

- <strong>Remotes</strong> - manage saved IR remotes. Rename or delete the ones you've captured.

#### Display

- <strong>Brightness</strong> - OLED brightness. Range 5 to 255, stepped by 5.
- <strong>Boot Screen</strong> - pick which screen the device opens to after power-on: Main Menu, BLE Spam, Node Menu, IR Menu, Wi-Fi, BLE Tools, or Games.
- <strong>Screensaver</strong> - toggle the screensaver, set its timeout, and pick a style. See <a href="/docs/misc/screensaver">Screensaver</a>.

#### System

- <strong>Emergency</strong> - enable or disable Emergency Mode. See <a href="/docs/misc/emergency-mode">Emergency Mode</a>.
- <strong>Low Batt</strong> - battery percentage at which the low-battery warning kicks in. Range 5% to 25%.
- <strong>Updates</strong> - <strong>Auto Update</strong> toggles the automatic OTA firmware check on boot, and <strong>Beta</strong> opts this device into beta firmware builds.
- <strong>Upload AP</strong> - customize the Wi-Fi network the device uses when you open <strong>Config -> Transfer</strong>: SSID, username, password, and <strong>Rand Pass</strong> to have the device auto-generate a random password each time.

At the bottom of the category list you'll find <strong>Reset All</strong>, which restores every setting on the device to its factory default. Use with care.

### Transferring Files

Open <strong>Config -> Transfer</strong> to bring up the file portal. The device starts its own Wi-Fi network; connect to it from a phone or computer and open the portal in your browser.

<ul className="step-list">
  <li>Open <strong>Config -> Transfer</strong> on your BLEShark Nano.</li>
  <li>Connect to the Wi-Fi network shown on the screen, using the login credentials displayed on the device.</li>
  <li>The captive portal should open automatically. If it doesn't, visit <a href="https://nano.place"><strong>nano.place</strong></a> in your browser to force it.</li>
  <li>From the portal, upload or download the files you need.</li>
</ul>

#### What You Can Upload

- <strong>DuckyScript</strong> files for Bad-BT.
- <strong>Text files</strong> for the TxtViewer app.
- <strong>Captive portal HTML</strong> for the Captive Portal and Evil Portal apps.
- <strong>Custom Wi-Fi name lists</strong> (CSV) for Wi-Fi AP Spam.

#### What You Can Download

- <strong>Handshake PCAP</strong> - a ZIP archive of every Wi-Fi handshake captured on the device.
- <strong>Settings JSON</strong> - the device's current settings file, so you can back it up or transfer it to another Nano.
- <strong>Portal JSON</strong> - submitted credentials captured by the Evil Portal and Captive Portal apps.
- <strong>Portal HTML</strong> - the last HTML page you uploaded, so you can pull it back for editing.
- <strong>Wi-Fi names list</strong> - the CSV you uploaded for AP Spam.

:::tip
If you have a mesh set up, you can also move handshakes, settings, and portal submissions <em>between Nanos</em> over Shiver, no computer needed. See <a href="/docs/shiver/sync">Sync</a>.
:::
