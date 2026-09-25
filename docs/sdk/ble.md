---
title: BLE (CLI)
sidebar_position: 5
---

# BLE (CLI)

```bash
infishark ble <command> ...
```

## Scan

```bash
infishark ble scan
infishark ble list
infishark ble show 1
```

Company / vendor enrichment can use local DBs (`--company-db`, `--oui-db`).

## GATT central

```bash
infishark ble gatt connect                 # interactive pick
infishark ble gatt connect AA:BB:CC:DD:EE:FF
infishark ble gatt enum
infishark ble gatt read <characteristic-uuid>
infishark ble gatt write <uuid> deadbeef
infishark ble gatt write <uuid> 0102 --no-response
infishark ble gatt subscribe <uuid>        # NDJSON until Ctrl-C
infishark ble gatt disconnect
```

Connect supports pairing-related flags (`--secure`, `--bond`, `--mitm`, `--sc`, `--io-cap`, `--passkey`). See `--help`.

:::caution[Development checkout]
The bond roster and BLE MITM commands below were added after the SDK v0.2.1 tag. They need a newer CLI checkout and compatible firmware with the BLE serial support added after v1.2.0.
:::

## Paired devices

```bash
infishark ble bonds
infishark ble bonds forget AA:BB:CC:DD:EE:FF
```

The bond roster includes saved peer names. GATT connect can reuse a stored bond instead of pairing again. Check `ble bonds --help` before forgetting one.

## GATT proxy (MITM)

```bash
infishark ble mitm                  # scan and pick a peripheral
infishark ble mitm 1 --pcap lab.pcap
infishark ble mitm AA:BB:CC:DD:EE:FF --intercept
```

The Nano connects to the target peripheral, advertises a cloned GATT service to a central, and relays ATT traffic between the two links. Pairing is on by default. Follow passkey prompts if the target requires them. `--pcap` writes Bluetooth HCI traffic for Wireshark; `--intercept` holds ATT PDUs for an SDK callback to allow, drop, or replace, with an automatic allow timeout. Stop with Ctrl-C. Only proxy devices you own or have explicit permission to test.

## Advertise & serve

```bash
infishark ble adv ...          # custom advertising (see --help)
infishark ble serve ...        # connectable GATT server from a char table
infishark ble set ...          # update a served characteristic (+ notify)
infishark ble stream ...       # stdin hex lines -> notifications
infishark ble stop
```

## HID

```bash
infishark ble hid start --preset keyboard   # or mouse / composite / report map
infishark ble hid type "hello"
infishark ble hid send ...
```

### Bridge (Linux)

Grab host keyboard/mouse/etc. and drive the paired BLE HID device:

```bash
sudo infishark ble hid bridge
sudo infishark ble hid bridge --clone     # raw /dev/hidraw clone
```

## Stack lifecycle

```bash
infishark ble keepalive on    # keep NimBLE up across a multi-step workflow
infishark ble keepalive off
infishark ble reset           # force clean stack re-init
```

Use keepalive when you are chaining scan -> connect -> write without wanting a full controller re-init between steps.
