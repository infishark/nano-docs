---
title: FAQ
sidebar_position: 10
---

# FAQ

## Does the CLI replace the OLED UI?

No. Handheld workflows (including Shiver mesh) remain first-class. The CLI is for host-driven research and automation.

## Why is firmware still closed?

The product firmware stays closed. The **host** SDK/CLI is open so you can script the radio without reverse-engineering flash images. That is intentional: device = RF peripheral, host = programmable side.

## Linux-only features?

Today, **Wi-Fi adapter** and **BLE HID bridge** expect Linux (tun / evdev / hidraw). Other commands use plain serial and work wherever the OS exposes the CDC port.

## Associated monitor vs channel monitor?

- **Channel monitor** - no join; you pick the channel; pure RF sniff.  
- **Associated monitor** - join with `--ssid`/`--pass` or `--index`, then promisc on the AP channel. Other clients' unicast stays encrypted; you are not "on the LAN as a full decryptor."

## Can I decrypt everyone's Wi-Fi because I joined?

No. Association gives the Nano its own keys (and group keys for that BSS). Other stations' pairwise traffic remains protected. For handshake cracking, use `wifi handshake` + host hashcat.

## Where is the full flag list?

```bash
infishark --help
infishark wifi --help
infishark wifi monitor --help
# etc.
```

Guides on this site prioritize workflows over duplicating every flag.

## Will there be an app store?

A community **app catalog** (`infishark app list|install|...`) is planned. It is not part of the initial docs surface until the feature ships.
