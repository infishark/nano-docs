---
title: Rust library
sidebar_position: 9
---

# Rust library

The CLI is a thin layer over the **`infishark`** crate (`core/` in the [infishark](https://github.com/infishark/infishark) repo).

## Add the dependency

```sh
cargo add infishark --git https://github.com/infishark/infishark
```

## Minimal example

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

## Examples in the repo

From a clone of the repository:

```sh
cargo run --example ble_scan
cargo run --example wifi_scan
cargo run --example device_info
```

Examples live under `core/examples/`.

## When to use the library

- Embed Nano control inside your own Rust tool
- Custom workflows (retry, multi-device, reporting) without shelling out
- Future language bindings can wrap the same wire protocol

## API docs

Generate rustdoc locally:

```sh
cd infishark
cargo doc -p infishark --no-deps --open
```

Product guides on this site cover workflows. Flag-level CLI detail remains `infishark <command> --help`.

## License

GPL-3.0-only for the host SDK. Firmware remains closed-source. See the [repository README](https://github.com/infishark/infishark).
