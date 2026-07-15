---
title: IR (CLI)
sidebar_position: 7
---

# IR (CLI)

```bash
infishark ir <command> ...
```

## Receive

```bash
infishark ir rx                 # listen until Ctrl-C
infishark ir show 1             # detail from last session
```

Captures may include decoded protocol fields and/or raw timings (depending on what was heard).

## Transmit

```bash
infishark ir tx nec 20DF10EF
infishark ir tx remote.ir              # default / first button
infishark ir tx remote.ir Power        # named button
infishark ir raw ...                     # raw mark/space (see --help)
infishark ir tvbgone
```

## Install remotes on the device

```bash
infishark ir push remote.ir            # into a remote slot (see --help)
```

Host-side `.ir` parse/write supports library/signals style files for edit/export workflows. On-device remotes can also be managed via the transfer portal on recent firmware.
