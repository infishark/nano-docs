---
title: Quick start
sidebar_position: 3
---

# Quick start

Five minutes from plug-in to first useful commands.

If you have not installed the CLI yet:

```sh
# Linux / macOS
curl -fsSL https://cdn.infishark.com/install.sh | sh
```

```powershell
# Windows (PowerShell)
irm https://cdn.infishark.com/install.ps1 | iex
```

Details: [Install](./install.md).

## 1. Plug in and find the device

```sh
infishark ports
infishark device info
infishark device status
```

## 2. Scan the air

```bash
infishark wifi scan
infishark wifi list          # last scan cache

infishark ble scan
infishark ble list
infishark ble show 1         # detail for row # from last scan
```

Add `--json` when scripting.

## 3. Capture a handshake (host files)

```bash
infishark wifi handshake --ssid "YourLabAP"
# writes hs_....pcap (+ .22000 unless --pcap-only)

# optional: hand off to hashcat on the host
infishark wifi handshake --ssid "YourLabAP" --crack --wordlist /path/to/list.txt
```

## 4. Monitor into Wireshark (Linux example)

```bash
# Channel-locked sniff
infishark wifi monitor --channel 6 | wireshark -k -i -

# Or join a network first, then sniffer on that BSS channel
infishark wifi monitor --ssid "YourLabAP" --pass 'secret' --out bss.pcap
```

## 5. Host-streamed captive portal

```bash
mkdir -p ./pages && echo '<html><body>hello</body></html>' > ./pages/index.html
infishark wifi portal --dir ./pages --ssid LabPortal --random-mac
```

Connect a phone to `LabPortal` and open a captive page. The CLI prints request metadata (including User-Agent) and streams HTML from your disk.

## 6. BLE GATT peek

```bash
infishark ble gatt connect          # pick from scan, or pass an address
infishark ble gatt enum
infishark ble gatt read <uuid>
infishark ble gatt write <uuid> deadbeef
```

## 7. Files

```bash
infishark files ls
infishark files pull hs_something.pcap --out ./hs.pcap
```

## When you are done

Long-running tools stop with **Ctrl-C** and send a device-side stop where applicable. You can also run other commands after the session ends; the OLED returns to normal menus when the host releases the task.

Continue with [Wi-Fi](./wifi.md), [BLE](./ble.md), [Portal](./portal.md), [IR](./ir.md), or [Files](./files.md).
