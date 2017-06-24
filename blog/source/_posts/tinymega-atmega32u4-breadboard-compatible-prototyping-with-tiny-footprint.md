---
title: 'TinyMega: ATmega32U4 breadboard-compatible prototyping with tiny footprint'
url: 2959.html
id: 2959
categories:
  - Allgemein
date: 2012-03-20 10:00:57
tags:
---

A little while ago @[dop3j0e](https://twitter.com/dop3j0e) offered, for the second time, an [SMD soldering workshop](https://blog.shackspace.de/?p=2784). Contrary to the [previous workshop](https://blog.shackspace.de/?p=2555), the boards were professionally manufactured which made soldering even easier.  Furthermore, version two of the workshop boards were even more tiny than the previous ones!

I'm sure by now you're asking "Cut to the chase, what the heck _did_ you solder?"

It's @dop3j0e's [TinyMega](https://blog.shackspace.de/wiki/doku.php?id=project:tinymega), an ATmega32U4 breakout and prototyping board.

*   [ATmega32U4](http://www.atmel.com/devices/ATMEGA32U4.aspx)-Controller
32 KiB Flash
2,5 KiB SRAM
1 KiB EEPROM
On-board USB-Controller (Low Speed, Full Speed, Host or Device)
*   Ultra-tiny footprint of just 39x22 mm
*   USB bootloader pre-loaded – super easy firmware loading over USB!
*   16 MHz clock frequency
*   Buttons for reset and entering bootloader mode
*   2 LEDs (green to indicate power, red optionally connected to a GPIO-pin)
*   All I/O pins of the microcontroller, including power, can be conveniently accessed via two rows of pin headers. The 2.54mm spacing perfectly fits your breadboard.
*   All pins, LEDs, buttons are conveniently labeled on the silkscreen.
*   Power over USB or external (5 V stabilized)
*   Dirt cheap -- total parts cost is around 8 EUR, excluding the PCB. (your mileage may vary depending on quantities ordered)
Also, there's lots of what every hacker is afraid of: Documentation!

*   The [Eagle project files are available on GitHub.](https://github.com/dop3j0e/eagle/tree/master/Atmega32U4-Breakout/v3)
*   There's also a [Bill of Materials.](https://github.com/dop3j0e/eagle/blob/master/Atmega32U4-Breakout/v3/bom.ods?raw=true)
*   We have English [step-by-step instructions on how to build the thing](https://github.com/dop3j0e/eagle/blob/master/Atmega32U4-Breakout/v3/instructions.pdf?raw=true)
*   and [more detailed information](https://blog.shackspace.de/wiki/doku.php?id=project:tinymega) including a Hello World program on the shackspace Wiki (German).
[gallery link="file" columns="4"]