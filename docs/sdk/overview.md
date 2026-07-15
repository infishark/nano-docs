---
title: SDK & CLI overview
slug: /sdk
sidebar_position: 1
---

# SDK & CLI

The **`infishark`** host SDK and CLI drive the BLEShark Nano from your computer over USB.

**The Nano is the radio. Your computer is the brain. The SDK is the membrane.**

On-device menus still work without a host. The CLI unlocks research workflows that do not fit on a 0.66" screen: Wireshark capture, hashcat-ready handshakes, multi-file portals, GATT scripting, HID bridging, and file transfer.

## What you need

- A BLEShark Nano with firmware that includes the USB control plane
- A computer with a free USB port
- The open-source `infishark` CLI -- one-line install on [Install](./install.md)

:::tip[Linux for some features]
Wi-Fi adapter mode and BLE HID bridge currently require **Linux** (and often root for tun / input grab). Scan, portal, monitor, handshake, GATT, IR, and files work on other platforms where serial works.
:::

## Mental model

| On the Nano | On the host |
| --- | --- |
| RF TX/RX, SoftAP, STA, promiscuous sniff | OUI enrichment, jq, Wireshark, hashcat |
| Timed deauth / PMKID / EAPOL catch | Large PCAPs, wordlists, GPUs |
| SoftAP + captive DNS + thin HTTP | Multi-file HTML, automation |
| BLE central / peripheral / HID radio | Scripting, bridges, future apps |

## Command map

| Area | Entry point | Highlights |
| --- | --- | --- |
| Ports | `infishark ports` | Find the Nano |
| Device | `infishark device info` / `status` | Identity, heap, battery, mesh |
| Wi-Fi | `infishark wifi ...` | Scan, deauth, handshake, monitor, adapter, portal, raw TX |
| BLE | `infishark ble ...` | Scan, GATT, advertise, serve, HID |
| IR | `infishark ir ...` | RX/TX, `.ir`, TV-B-Gone |
| Files | `infishark files ...` | Pull / push on-device store |

Global flags (most commands):

```bash
infishark --port /dev/ttyACM0 ...   # force serial port
infishark --json ...                # machine-readable output where supported
infishark --timeout-ms 5000 ...     # serial read timeout
```

## Next steps

1. [Install](./install.md)
2. [Quick start](./quickstart.md)
3. Topic guides: [Wi-Fi](./wifi.md), [BLE](./ble.md), [Portal](./portal.md), [IR](./ir.md), [Files](./files.md)

## How docs are maintained

Narrative guides (this section) are **hand-written** so they stay readable and product-safe.

The live source of truth for every flag remains `infishark <command> --help` and the open SDK source. A generated command reference may be added later; it will never replace these guides.

:::warning[Authorized use only]
Use only on networks and devices you own, have written permission to test, or operate in a controlled lab.
:::
