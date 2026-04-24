---
title: Features Overview
---

The BLEShark Nano packs a wide range of powerful tools into one pocket-sized device. Below is a categorized list of all current features.

## Pentesting

- **BLESpam** - Spoof BLE advertisements targeting Android, iOS, Windows, or all at once  
- **Wi-Fi AP Spam** - Create hundreds of fake Wi-Fi networks with custom SSIDs  
- **Deauth Testing** - Send deauth packets to any 2.4GHz network for testing  
- **Deauth Attack Checker** - Quickly check for nearby deauth attacks on the 2.4GHz band  
- **Captive Portal** - Launch a custom captive portal on the Nano's own Wi-Fi network  
- **Evil Portal** - Deploy login-style phishing pages for red team demos  
- **Bad-BT** - Emulate a Bluetooth keyboard with DuckyScript injection  
- **Handshake Capture** - Record WPA handshakes from single APs, whole networks, or an auto-rotating sweep of every nearby Wi-Fi  
- **Wi-Fi Scan** - Survey nearby 2.4GHz access points with SSID, signal strength, and per-device bars  
- **BLE Scan** - Discover nearby Bluetooth Low Energy devices, with on-device manufacturer lookup  

:::info[Run any of these across a Shiver mesh]
Most pentesting features (BLESpam, Wi-Fi AP Spam, Deauth, Deauth Checker, Captive Portal, Handshake Capture, Wi-Fi Scan, BLE Scan) and the Infrared tools below (TV-B-Gone, IR Transmit, IR Receive) can be dispatched across every paired device at once, up to **16 Nanos per mesh**. See [Execute](/docs/mesh/execute).
:::

## Infrared (IR)

- **TV-B-Gone** - Turn off almost any TV using a large built-in IR code database  
- **Remote** - Replace your TV remote with customizable buttons  
- **Receiver** - Decode signals from IR remotes and devices  
- **Transmit App** - Send IR commands from up to 5 remotes with 8 buttons each  

## Shiver

- **Execute** - Dispatch Wi-Fi, BLE, IR, and management commands across every paired device at once (up to 16 Nanos)  
- **Sync** - Copy handshakes, settings, submitted captive portal JSONs, or individual files between paired Nanos  
- **Chat** - Send short text messages between Nanos on the mesh  
- **Pair** - Wirelessly link multiple BLEShark Nanos into a private mesh  
- **Long Range** - Optional radio rate that trades speed for distance, perfect for spread-out setups  

## Built-in Apps

- **Scroller** - Control short videos through apps like TikTok over BLE, with a Modify Mode for cursor movement  
- **TxtViewer** - Smoothly scroll through and view plain text files  
- **Mini Keypad** - Custom Bluetooth keypad with macro support  
- **PC Monitor** - View CPU, GPU, and memory stats over BLE (in development)  
- **Stopwatch** - Millisecond-accurate stopwatch  
- **Timer** - Custom timers with flashing screen alerts  

## Games

- **Malware Hunter** - Vampire-survivors-style action game with auto-firing weapons, level-up upgrade cards, a persistent shop, and a boss fight  
- **Flappy Bird** - Tap to fly and avoid obstacles  
- **Space Invaders** - Classic alien shooter  
- **Pong** - Battle the AI in a retro paddle game  
- **Breakout** - Break bricks with a bouncing ball  
- **T-Rex** - Jump and duck in an endless runner  
- **Racer** - Navigate tight turns and avoid collisions  

## Other Features

- **Easy Setup** - On-device Wi-Fi picker, on-screen keyboard, and optional automatic multi-device setup  
- **On-Device Settings** - Edit every setting directly on the Nano via **Config -> Settings**  
- **File Transfer Portal** - Upload scripts, portal HTML, and Wi-Fi name lists, or export handshakes and settings, via **Config -> Transfer**  
- **On-Device DuckyScript Editor** - Write and edit Bad-BT scripts directly from the device  
- **Web Flasher** - Install or recover setup firmware from your browser at [flasher.infishark.com](https://flasher.infishark.com)  
- **Auto Firmware Updates** - Receive OTA updates automatically  
- **Emergency Mode** - Instantly launch Flappy Bird to exit pentesting mode  
- **Screensaver** - Five built-in styles (DVD, Cube, Matrix, Life, Pipes)  

More features coming soon!
