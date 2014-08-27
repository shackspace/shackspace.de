OpenPilot guided UAV has successful autonomous maiden flight
############################################################
:date: 2011-12-06 20:46
:author: hdz
:category: Allgemein
:slug: openpilot-guided-uav-has-successful-autonomous-maiden-flight

shackspace-hacker Corvus reported a first break-through building his
very own UAV based on
`OpenPilot <http://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&ved=0CBwQFjAA&url=http%3A%2F%2Fwww.openpilot.org%2F&ei=E3DeTofPOonLsgbe95H_CA&usg=AFQjCNHRa7juvlmdOAqAJGHEVdWgT3c4gA>`__.

After attending the `SMD Soldering
Workshop <http://shackspace.de/?p=2524>`__ at shackspace a while ago he
decided to aim high and began designing a SMD PCB of his own right
away.  Thanks to the `PCB-printing
equipment <http://shackspace.de/wiki/doku.php?id=project:beta-layout:pcbprinter>`__
we have at shackspace, the layout was soon transferred to a board,
etched into copper and had components soldered to it.

Once the hardware was ready, Corvus designed and implemented the entire
guidance code which is handling everything related to the auto-pilot and
navigation (keeping altitude, speed and bearing in check).  With his
custom flight controller PCB, the `[STRIKEOUT:STM32] Freescale i.MX353
processor
board <http://www.ic-board.de/product_info.php?info=p159_ICnova-i-MX353-OEM.html>`__
and his test plane all combined, it was time for a maiden flight.  We
dare say: a very successful one!

| Next steps in the project will be `SLAM <http://en.wikipedia.org/wiki/Simultaneous_localization_and_mapping>`__ applications, optical path-finding as well as obstacle detection and avoidance.
|  The system is based around an ARM11 core running an embedded Linux from internal Flash-ROM. A user-space program is talking to the flight-controller via `UAVTalk <http://wiki.openpilot.org/display/Doc/UAVTalk>`__ over USB.

[gallery link="file" order="DESC" columns="4"]


