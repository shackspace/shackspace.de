---
title: >-
  Project minikrebs: Tiny TP-Link WiFi AP Goes Big with Webcam, NFC, USB/IP,
  Automagic Internets and Rick-Rolling
url: 3772.html
id: 3772
categories:
  - announcements
date: 2013-01-14 21:23:10
tags:
---

### The Hardware

![TP-Link NFC Terminal](https://blog.shackspace.de/wp-content/uploads/2013/01/IMG_20130114_003939-e1358189039734-150x144.jpg)The TP-Link WR703N is a quite amazing and affordable piece of hardware and has received a lot of love from the hacking community.  Once you take a look at the price tag and feature set you quickly notice why it's so well received: it crosses the counter for just [25 EUR on Amazon](https://www.amazon.de/dp/B008UNA6FS/?tag=krebsco-21) or as low as [16 EUR](http://www.amazon.com/dp/B007PTCFFW/?tag=krebsco-20) if you look abroad!  It's been used as a [pentesting aid](http://hackaday.com/2012/01/12/cheap-wifi-bridge-for-pen-testing-or-otherwise/), [made even more hacker friendly](http://hackaday.com/2012/06/24/io-extender-board-and-case-for-a-cheap-wifi-router/), got turned into a [webradio player](http://hackaday.com/2013/01/08/turning-a-tiny-router-into-a-webradio/), and made more awesome by [adding a display](http://hackaday.com/2013/01/07/adding-an-lcd-screen-terminal-for-tp-link-routers/).

So you think all that can be done has already been done.  But no: [shackspace](https://blog.shackspace.de) hackers [makefu](https://twitter.com/makefoo) and [exco](https://twitter.com/excogitation) came up with another idea.  And that idea was followed by another, and another, and they simply kept going.  The project is called [minikrebs](https://blog.shackspace.de/wiki/doku.php?id=project:minikrebs) and is part of the bigger experimental coding platform [krebscode](https://github.com/krebscode/painload).

Here's what they came up with so far.

<!--more-->

### NFC / RFID Login Terminal

![TP-Link NFC Terminal](https://blog.shackspace.de/wp-content/uploads/2013/01/IMG_20130114_003939-e1358188922575.jpg)

The NFC-Gate is part of the [User Suppository](https://github.com/shackspace/user_suppository "https://github.com/shackspace/user_suppository") (sic) infrastructure.  It polls the attached NFC-connector for new cards and uses the UID of the card for trying to either log in or log out the user at the shack-infrastructure.

The NFC-gate is a build for the MR3020, not the WR703 as it uses all the available LEDs to display the status of the login. The NFC-Reader used is the SCM SCL3711 as it is supported pretty well by [libnfc](http://www.libnfc.org/documentation/introduction) and is quite small.

For more information check out the [Github repository](https://github.com/shackspace/user_suppository "https://github.com/shackspace/user_suppository") and the source code of this profile.

### Instacam: Automatic Webcam Streaming

![TP-Link Instacam](https://blog.shackspace.de/wp-content/uploads/2013/01/IMG_20130113_225119-e1358189326256-300x106.jpg)

The aim of this little project is to reliably push a video stream directly out to the internets for everyone to see at a very low price.
It combines a webcam (could be a cheap China model or one of Logitech's HD cams, as long as its supported by [uvc](http://www.ideasonboard.org/uvc/) or [Gspca](http://linuxtv.org/wiki/index.php/Gspca_devices)) with a TP-Link 703N.  It automatically boots up and starts streaming.  Use a battery pack and USB 3G stick for field connectivity.  Drop to deploy!

This project is already in use in two places at shackspace.  One is built into our [lasercutter](https://blog.shackspace.de/wiki/doku.php?id=lasercutter) to allow safe monitoring and recordings of the cutting process.  The AP can manage multiple clients at the same time and even stream HD video at acceptable frame rates.

### Automatic Rick-Rolling

![TP-Link Automatic Rick-Roll](https://blog.shackspace.de/wp-content/uploads/2013/01/IMG_20130113_231711-e1358189552103-300x127.jpg)

The purpose of the profile is to create an access point where every connection is rewritten to instead deliver a [rick-roll](http://www.youtube.com/watch?v=oHg5SJYRHA0).  If you carry it with you when riding the train (remembert to get a battery pack!) you will have great fun giggling each time the LED blinks indicating another victim was served a piece of the 80's.

Having videos autostart on a victim's mobile brower is quite difficult and unreliable, so instead of an actual video, a short animated GIF with Rick dancing plus the first minute of its famous song will be served by the httpd.
Laptops and other clients with phat-browsers will probably honor both autostart loop tags in the new HTML5 standard.

### Forwarding USB Interfaces over WiFi using USB/IP

![TP-Link usbip](https://blog.shackspace.de/wp-content/uploads/2013/01/IMG_20130114_000208-e1358189233155-300x93.jpg)

In this configuration minikrebs will start up as USB-bridge with the [USB/IP](http://usbip.sourceforge.net/)-stack. It will run usbipd and grab an IP-address via DHCP from the <acronym title="Local Area Network">LAN</acronym> interface.

### Krebs Integration and Heckenkrebs

### ![krebs-v2](https://blog.shackspace.de/wp-content/uploads/2013/01/krebs-v2-300x300.png)

Of course minikrebs integrates seamlessly into the pile of code called [krebscode/painload](https://github.com/krebscode/painload).

The krebs base profile for krebs nodes includes all the core feature to automatically connect to the [retiolum darknet](https://blog.shackspace.de/wiki/doku.php?id=project:krebs#krebs_darknet_retiolum_prefix).

Adding Heckenkrebs functionality will give you an automatic internet-establish and gateway provider for the retiolum darknet (or any darknet that you want to set up).  The Heckenkrebs will use a patched aap tool to connect randomly to wireless networks which are "unprotected in some ways", meaning that it can also do slightly more advanced stuff like calculating default keys for EasyBox home-routers which are quite common in Germany (in case you forgot your default key that is).  It also provides a blacklist feature and access-point password list for known networks.

_Meta:_

*   [makefu](https://twitter.com/makefoo) on twitter
*   [exco](https://twitter.com/excogitation) on twitter
*   [<span style="line-height: 13px;">krebscode/painload on GitHub</span>](https://github.com/krebscode/painload)
*   [Project minikrebs documentation on the shackspace wiki](https://blog.shackspace.de/wiki/doku.php?id=project:minikrebs)