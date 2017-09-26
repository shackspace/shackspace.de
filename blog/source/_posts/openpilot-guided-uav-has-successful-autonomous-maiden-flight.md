---
title: OpenPilot guided UAV has successful autonomous maiden flight
url: 2659.html
id: 2659
comments: false
categories:
  - announcements
date: 2011-12-06 20:46:16
tags:
---

shackspace-hacker Corvus reported a first break-through building his very own UAV based on [OpenPilot](http://www.google.com/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=1&amp;ved=0CBwQFjAA&amp;url=http%3A%2F%2Fwww.openpilot.org%2F&amp;ei=E3DeTofPOonLsgbe95H_CA&amp;usg=AFQjCNHRa7juvlmdOAqAJGHEVdWgT3c4gA).

After attending the [SMD Soldering Workshop](https://blog.shackspace.de/?p=2524) at shackspace a while ago he decided to aim high and began designing a SMD PCB of his own right away.  Thanks to the [PCB-printing equipment](https://blog.shackspace.de/wiki/doku.php?id=project:beta-layout:pcbprinter) we have at shackspace, the layout was soon transferred to a board, etched into copper and had components soldered to it.

Once the hardware was ready, Corvus designed and implemented the entire guidance code which is handling everything related to the auto-pilot and navigation (keeping altitude, speed and bearing in check).  With his custom flight controller PCB, the [<del datetime="2011-12-07T18:45:38+00:00">STM32</del> Freescale i.MX353 processor board](http://www.ic-board.de/product_info.php?info=p159_ICnova-i-MX353-OEM.html) and his test plane all combined, it was time for a maiden flight.  We dare say: a very successful one!

Next steps in the project will be [SLAM](http://en.wikipedia.org/wiki/Simultaneous_localization_and_mapping) applications, optical path-finding as well as obstacle detection and avoidance.
The system is based around an ARM11 core running an embedded Linux from internal Flash-ROM.  A user-space program is talking to the flight-controller via [UAVTalk](http://wiki.openpilot.org/display/Doc/UAVTalk) over USB.

<iframe width="420" height="315" src="http://www.youtube.com/embed/nWNWuUiUTNg" frameborder="0" allowfullscreen></iframe>

[gallery link="file" order="DESC" columns="4"]