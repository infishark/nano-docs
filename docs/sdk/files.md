---
title: Files (CLI)
sidebar_position: 8
---

# Files (CLI)

Move artifacts between the host and the Nano's SPIFFS-backed store.

```bash
infishark files ls
infishark files pull <name-or-#> [--out path]
infishark files push <local-path> [--dest name]
infishark files rm <name-or-#>
```

Typical artifacts: handshake pcaps, portal HTML/JSON, Ducky scripts, IR remotes, scan exports.

Not every path is writable or deletable - the device enforces a file registry. Use `files ls` to see what the firmware exposes.

```bash
infishark files pull 1 --out ./capture.pcap
infishark files push ./captivePortal.html --dest portal_html
```

Exact dest names/aliases depend on firmware; when in doubt, pull first or check `ls` output.
