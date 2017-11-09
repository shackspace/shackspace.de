---
title: 16x16 LED Plasma Display w/ 100% hand-made SMD Driver PCB
url: 1815.html
id: 1815
categories:
  - announcements
date: 2011-02-25 15:11:23
tags:
---

[![](https://blog.shackspace.de/gallery/var/thumbs/Projekte/LED-Plasma/action.jpg?m=1297895084)](https://blog.shackspace.de/gallery/index.php/Projekte/LED-Plasma/action)Everyone has dreams. At hackerspaces dreams usually involve some kind of technology and only the tiniest amount of sanity required to get it done.  shackspace member @[dop3j0e](https://twitter.com/dop3j0e) spent may hours and valuable amounts of his sanity on this little gem.  It's a fully hand-made (design, layout, etching, soldering) 16x16px LED display.  The dream in this case is to make this thing bigger. Way bigger and RGB.

### Rapid Prototyping

To check if the idea is feasible at all, a prototype was called for.  Someone had a couple of spare 8x8 mono-color LED matrix displays which promptly found their place on a breadbord where the pinout was reverse engineered.  After that, a single matrix was connected to an [Arduino](http://arduino.cc/) and first tests showed everything worked as planned. A lot more serious breadboarding involving a [shackuino](https://blog.shackspace.de/wiki/doku.php?id=project:shackuino) and four of the 8x8px displays followed.

Holding four such displays together and ensuring there's good contact on all pins without soldering anything together turned out to be impossible.  The prototype was full of row and column defects.  However, the hardware worked in principle and the firmware was stable.

At the end of the day prototyping resulted in a _huge _bunch of jumper wires, breadboard, a [shackuino](https://blog.shackspace.de/wiki/doku.php?id=project:shackuino) and the displays somehow working most of the time.  This had to become more stable and way more compact.

### [![](https://blog.shackspace.de/gallery/var/thumbs/Projekte/LED-Plasma/board.jpg?m=1297895033)](https://blog.shackspace.de/gallery/index.php/Projekte/LED-Plasma/board)Shrinking it Down

In a continued effort to ramp up our skill set and manufacturing capabilities we've gone from breadboarding to perfboard to etched through-hole PCBs and double-sided PCBs to now briefly pause at this new peak. A SMD PCB with 0.5mm pitch made using the toner transfer method. The PCB itself smaller than the four 8x8px displays.

At the heart of the controller is a [Atmega168](http://www.atmel.com/dyn/products/product_card.asp?part_id=3303), the same microcontroller used on the Arduino and shackuino but in it's smaller footprint TQFP version (0.8mm pitch).  Columns are controlled using two [74HC164](http://focus.ti.com/docs/prod/folders/print/sn74hc164.html) shift registers (SOIC package, 1.27mm pitch). A [TLC5940](http://focus.ti.com/docs/prod/folders/print/tlc5940.html) chip (QFN package, 0.5mm pitch) is used to generate 16 12bit PWM signals to drive the rows.  This last chip was the biggest challenge because of the very fine pitch traces which were tricky to print using toner transfer and even trickier to solder since there's no leads, just contact pads.  This was done using a hot-air soldering station and a needle point SMD soldering tip combined with what felt like liters of flux.

The displays are mounted to a piece of stripboard which is used to[ juggle around their slightly unfavorable pinout](https://blog.shackspace.de/gallery/index.php/Projekte/LED-Plasma/layer2) and to accommodate for the fact that the free version of Eagle does not allow the size of PCB required to mount the displays directly (by a mere centimeter).

The [frontpanel](https://blog.shackspace.de/gallery/index.php/Projekte/LED-Plasma/panel) is equipped with a bunch of control buttons to switch through the various display modes.

### Next Stop: Awesome

To make this even more awesome the next version will be RGB, required parts are already ordered and epic win is to be expected.

Meanwhile, here's a video of the breadboard prototype.

<embed src="http://img708.imageshack.us/flvplayer.swf?f=Ptwr" width="320" height="260" allowFullScreen="true" wmode="transparent" type="application/x-shockwave-flash"/>

*   @[dop3j0e](https://twitter.com/dop3j0e) on twitter
*   [Project gallery](https://blog.shackspace.de/gallery/index.php/Projekte/LED-Plasma)