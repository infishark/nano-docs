---
title: Captive portal (CLI)
sidebar_position: 6
---

# Captive portal (CLI)

Run a SoftAP + captive DNS portal from the host, with optional multi-file HTML streamed from your computer.

```bash
infishark wifi portal [options]
```

## Host-streamed pages

```bash
infishark wifi portal --dir ./pages --ssid LabPortal --random-mac
```

- `--dir` must contain (at least) `index.html` for `/`
- Additional paths map to files under that directory (path traversal is rejected)
- The device does **not** store the whole multi-page site on SPIFFS; bodies stream over USB when a phone requests them
- The CLI prints request metadata (method, path, User-Agent, headers, client IP, station RSSI, ...)

Ctrl-C stops the portal.

## SoftAP options

| Flag | Purpose |
| --- | --- |
| `--ssid` | SoftAP name |
| `--pass` | WPA2-PSK (omit/empty = open) |
| `--channel` | 1-13 |
| `--hidden` | Hide SSID in beacons |
| `--max-clients` | Concurrent stations |
| `--mac` / `--random-mac` | Spoof or randomize SoftAP BSSID |
| `--ip` / `--netmask` | SoftAP / captive gateway addressing |
| `--beacon-ms` | Beacon interval |
| `--detailed-capture` | Extra fingerprint fields on credential JSON |
| `--host-timeout-ms` | How long the device waits for a host body |

Without `--dir`, the device serves its on-device / sample portal HTML with the same SoftAP knobs.

## On-device portal docs

Handheld captive / evil portal behavior is also documented under [Pentesting -> Captive portal](/docs/pentesting/captive-portal) and [Evil portal](/docs/pentesting/evil-portal). Developer HTML notes: [Developers -> Captive portal](/docs/developers/captive-portal).

## Notes

- Phone-facing SoftAP uses standard 2.4 GHz PHY (not mesh Long Range), so normal phones can see the network.
- Credential forms still post to on-device handlers; loot can be pulled with `infishark files` when stored on SPIFFS.
- **Authorized lab use only.**
