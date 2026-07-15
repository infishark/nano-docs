---
title: Install
sidebar_position: 2
---

# Install

## Prerequisites

- A BLEShark Nano with firmware that includes the USB control plane (v1.1.0 or later for the full CLI surface)
- A free USB port and a data-capable cable
- On Linux: membership in the `dialout` or `uucp` group may be required for serial access
- For some tools only: **Linux** (+ root) for Wi-Fi adapter and BLE HID bridge

You do **not** need a Rust toolchain for the normal CLI install once prebuilt binaries are published.

## Install the CLI

One command. The installer downloads a prebuilt `infishark` binary for your platform, or builds from source with your Rust toolchain if no binary is published yet.

### Linux / macOS

```sh
curl -fsSL https://cdn.infishark.com/install.sh | sh
```

### Windows (PowerShell)

```powershell
irm https://cdn.infishark.com/install.ps1 | iex
```

The binary is installed to:

| Platform | Location |
| --- | --- |
| Linux / macOS | `~/.local/bin` |
| Windows | `%USERPROFILE%\.infishark\bin` |

Put that directory on your `PATH` if the installer did not already.

On Linux source builds, the script may install `libudev` and `pkg-config` when a from-source fallback is needed.

## Check the install

```sh
infishark ports
infishark ports --all
infishark ports --json
```

If nothing shows up: try another cable (data, not charge-only), another USB port, and confirm the OS shows a serial CDC device.

## Force a port

```sh
infishark --port /dev/ttyACM0 device info
# Windows:
infishark --port COM5 device info
```

## Use the Rust SDK in your own project

The CLI is built on the `infishark` library crate. Add it from Git:

```sh
cargo add infishark --git https://github.com/infishark/infishark
```

Minimal example:

```rust
use infishark::{BleScanOpts, Device};

fn main() -> infishark::Result<()> {
    let mut dev = Device::open(None, 12_000)?; // None auto-detects the port
    for d in dev.ble_scan(&BleScanOpts::default())? {
        println!("{}  {} dBm", d.address, d.rssi);
    }
    Ok(())
}
```

Runnable examples live in the repo under `core/examples/` (`ble_scan`, `wifi_scan`, `device_info`).

## Optional: build the CLI from a local checkout

If you are developing the CLI itself:

```sh
git clone https://github.com/infishark/infishark
cd infishark
cargo build -p infishark-cli --release
# binary: target/release/infishark
```

Requires a Rust toolchain ([rustup](https://rustup.rs/)). On Linux you need `libudev` development packages and `pkg-config`.

## License note

The host SDK/CLI is GPL-3.0-only. The BLEShark Nano firmware is a separate, closed-source product. See the [infishark README](https://github.com/infishark/infishark) for details and commercial licensing contact.

## Next

[Quick start](./quickstart.md)
