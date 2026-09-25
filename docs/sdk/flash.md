---
title: Firmware (CLI)
sidebar_position: 11
---

The CLI can fetch firmware and flash the Nano over USB. This is separate from the Nano's on-device OTA updater.

```bash
infishark flash versions             # available channels and latest tags
infishark device update              # latest main firmware
infishark flash latest --beta        # latest beta firmware
infishark flash install v1.2.0       # a specific release
infishark flash setup                # install BLEShark Setup
infishark update                     # update the host CLI, not the Nano
```

`infishark flash latest` is equivalent to `infishark device update`. The CLI checks the firmware catalog, fetches the image on the host, and asks before flashing. Use `--yes` only when you have already checked the target and are ready to proceed.

:::warning[Setup and stored data]
Installing Setup normally erases flash, including settings and files. `infishark flash setup --keep-storage` skips the full erase, but back up anything you need before changing firmware. Keep the USB cable connected until flashing and reboot finish.
:::

If no flasher is installed, the CLI can install `espflash`. See `infishark flash --help` for the current options. For updates without a computer, see [Updating](/docs/basics/updating).
