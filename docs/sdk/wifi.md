---
title: Wi-Fi (CLI)
sidebar_position: 4
---

# Wi-Fi (CLI)

```bash
infishark wifi <command> ...
```

For flag-level detail, run `infishark wifi <command> --help`.

## Scan

```bash
infishark wifi scan
infishark wifi scan --active --channel 6
infishark wifi list
```

Host-side OUI enrichment is available when a vendor DB is configured (`--oui-db` / manage tools).

## Scan details and recon

```bash
infishark wifi scan --verbose
infishark wifi show 1
infishark wifi recon 1 --seconds 30
infishark wifi recon --ssid LabAP
```

`wifi show` opens one AP from the last scan. `wifi recon` locks onto its channel and tracks stations, probes, and airtime while it listens. With no time limit, stop it with Ctrl-C. A shared SSID picks the strongest BSSID; use `--bssid` when you need a specific AP.

## Saved networks

Used by on-device Connect, OTA, adapter, and associated monitor:

```bash
infishark wifi saved list
infishark wifi saved add --ssid Lab --pass '...'
infishark wifi saved rm 0
```

## Deauth

```bash
infishark wifi deauth --ssid LabAP
infishark wifi deauth --bssid AA:BB:CC:DD:EE:FF --channel 6
```

Runs until Ctrl-C. **Authorized testing only.**

## Handshake / PMKID

```bash
infishark wifi handshake --ssid LabAP
infishark wifi handshake --bssid AA:BB:... --channel 6 --pmkid-only
infishark wifi handshake --ssid LabAP --passive
infishark wifi handshake --ssid LabAP --out ./cap --crack --wordlist rockyou.txt
```

Captures write **pcap** (and usually **hashcat 22000**) on the host. PMKID and 4-way share a crackable-save pipeline on recent firmware.

## Monitor (promiscuous -> pcap)

```bash
# Classic: lock a channel (no association)
infishark wifi monitor --channel 6 --out ch6.pcap

# Associated: join first, stay on the BSS, then promisc
infishark wifi monitor --ssid LabAP --pass 'secret' --out bss.pcap
infishark wifi monitor --index 0 --filter eapol
```

Useful filters (see `--help`): named presets (`eapol`, `deauth`, ...), type/subtype, EtherType, BSSID, RSSI, encrypt/clear, byte match.

:::note[What association does and does not give you]
Staying associated keeps you on the AP channel and can improve visibility of BSS / group traffic depending on the stack. **Other clients' unicast traffic remains encrypted with their keys.** This is not full-LAN cleartext.
:::

## Raw TX

```bash
infishark wifi tx --hex <frame-hex-no-fcs> --channel 6 --count 3
infishark wifi tx beacon --ssid LabTest --channel 6 --count 3
infishark wifi tx deauth --bssid AA:BB:CC:DD:EE:FF --channel 6 --count 3
```

Named templates include beacon, probe, deauth, disassoc, and data/control frames. `--count` and `--interval-ms` control on-device bursts; `--count 0` runs until Ctrl-C. The radio appends the FCS to raw frames. Use only on authorized test networks.

## Adapter (Linux)

Turns the Nano into a USB serial SLIP tunnel to a joined network. Full walkthrough: [Wi-Fi Adapter](/docs/pentesting/wi-fi-adapter).

```bash
sudo infishark wifi adapter 0
sudo infishark wifi adapter --ssid Lab --pass '...' --randomize-mac
```

## Portal

See [Portal](./portal.md) for SoftAP options and host-streamed HTML.

## Wi-Fi MITM (development checkout)

:::caution
`wifi mitm` is in the SDK development checkout, not the published v0.2.1 release. It also needs firmware with serial MITM session support added after v1.2.0.
:::

The Nano runs a host-controlled access point with an optional upstream Wi-Fi network. Use it only with clients and networks you are authorized to test.

```bash
infishark wifi mitm LabAP --pass 'labpassword' --upstream-index 0
infishark wifi mitm LabAP --pass 'labpassword' --upstream-ssid Lab --upstream-pass 'upstreampassword'
infishark wifi mitm LabAP --upstream-none --channel 6
```

Without an AP name, the CLI prompts for one. A blank AP password makes an open access point. The Nano has one 2.4 GHz radio, so its AP follows the upstream channel. Stop with Ctrl-C.

Use `--dns-log` to log names, `--watch ip:port` to watch traffic, `--capture events.ndjson` to save events, or `--pcap traffic.pcap` to write a capture (not a channel-wide monitor capture). `--dns forward|captive|static` selects DNS handling, `--rewrite name=1.2.3.4` overrides a forwarded name, and `--http portal` enables captive HTTP handling. `--block AA:BB:CC:DD:EE:FF` blocks a client. `--steer` optionally sends deauth frames to a same-name upstream network in an authorized lab. Check `infishark wifi mitm --help` for all options.

For routing without a host, see [Wi-Fi Router](/docs/pentesting/router).
