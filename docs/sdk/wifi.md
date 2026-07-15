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
```

## Adapter (Linux)

Turns the Nano into a USB serial SLIP tunnel to a joined network. Full walkthrough: [Wi-Fi Adapter](/docs/pentesting/wi-fi-adapter).

```bash
sudo infishark wifi adapter 0
sudo infishark wifi adapter --ssid Lab --pass '...' --randomize-mac
```

## Portal

See [Portal](./portal.md) for SoftAP options and host-streamed HTML.
