---
title: 'Reunification Weekend in Review: So much win!'
url: 2465.html
id: 2465
categories:
  - announcements
date: 2011-10-04 15:51:25
tags:
---

[![](https://blog.shackspace.de/wp-content/uploads/2011/10/jt9ja-150x150.jpg "Atmega32u4 devboard")](https://blog.shackspace.de/wp-content/uploads/2011/10/jt9ja.jpg)We've had an awesome long weekend and many of us spent it on and off playing games at the [Zocker werden zocken **LAN Party**](https://blog.shackspace.de/?p=2444).  As last time we've had a LAN party this years favorite was again [UT99](https://secure.wikimedia.org/wikipedia/en/wiki/Unreal_Tournament) closely followed by [TF2](https://secure.wikimedia.org/wikipedia/en/wiki/Team_fortress_2).  Also quite well received was [TMNF](https://secure.wikimedia.org/wikipedia/en/wiki/TrackMania_Nations_Forever#TrackMania_Forever).

Of course there wasn't just gaming going on!  Samuel brought a ton of receivers and tuners to the space so we have some material to start working on the [Constellation](https://blog.shackspace.de/?p=2420) proof-of-concept by **[tracking commercial aircraft beacons](http://hackaday.com/2011/09/22/tracking-commercial-aircraft-with-salvaged-electronics/)** instead of satellites.

A few hackers joined forces to buy a **[vacuum pump](http://www.ebay.de/itm/ws/eBayISAPI.dll?ViewItem&amp;item=260834619053&amp;ssPageName=ADME:B:EOIBSA:DE:1123)**.  This baby is able to suck 42 l/min (sic) and create a vacuum of down to 0.05 mbar.  Now you're asking yourself: "What do I need that for?".  Well, ask no more, just keep reading!

Samuel, renowned for his cra^W fearless handling of higher and higher voltages improved his **[flyback transformer](https://en.wikipedia.org/wiki/Flyback_transformer)** setup to yield around 25 kV.  This figure was actually measured by a home-built high-power resistor made up of a lot of individual resistors and plenty of shrink tubing.  25 kV is enough to easily cover between 2 to 3 cm of air gap with awesome sparks!  Or to power a presumably broken [CFL](https://secure.wikimedia.org/wikipedia/en/wiki/Compact_fluorescent_lamp).  However, _magic smoke_(tm) left the CFL during "operation" rendering it officially broken.
Now, back to the vacuum pump.  It'll be required to evacuate a glass cylinder to allow reliable and beautiful plasma to be generated using the flyblack transformer :)

On to @[dop3j0e](https://twitter.com/dop3j0e) who pointed a few fellow hackers to this video of awesome **[C one-liners making noise](http://www.youtube.com/watch?v=qlrs2Vorw2Y)**.  It took said hackers the better part of 10 seconds to open up consoles and get hacking.  The result shall enter history as the day of ripped membranes and lo-fi induced headaches.

If he wasn't pointing out possibilities to induce headaches, dop3j0e worked hard on building his **[Atmega32u4 development breakout board](https://twitter.com/#!/dop3j0e/status/120332534432272384)**.  The thing is completely build using SMD components and the PCB was printed and etched right here at shackspace.  The Atmega32u4 is quite nice actually, since it has USB support on-board and has a bootloader pre-flashed.  No need to put those expensive FTDI chips anywhere :)

As you might have noticed in the past few days, shackspace.de was down a few times.  Because of this chris was busy building a backup solution to have a **secondary server for shackspace.de** in place in case one dies on us again.  This is an ongoing project, so please let us know if you notice anything unusual.

@[Samuirai](https://twitter.com/samuirai) was sacrificing chickens to the VHDL gods to make his **NEXYS3 FPGA board** do the right thing.  You can find out more about his endeavors on the [project page in the shackspace wiki](https://blog.shackspace.de/wiki/doku.php?id=project:fpga_nexys3_ubuntu).

Lots of hacking time was spend on our lounge lights.  To be more specific, the **[controller that can address individual lights via Ethernet](https://github.com/shackspace/light-control)**!  Ulrich and Mr.Pi spent quality time on this resulting in more and more awesome web and telnet interfaces to cause remote annoyance ;)

Of course there was, as always, fun with **no fan at all** (confused? visit us to find out more), the kitchen staff was busy cooking up **delicious noms** for everypony and I've forgot to mention at least 23 other things that happened during the last 3 days and nights.