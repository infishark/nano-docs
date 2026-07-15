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
