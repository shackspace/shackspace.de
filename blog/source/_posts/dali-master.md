---
title: 'Tiny TP-Link goes to town, becomes DALI controller'
url: 4099.html
id: 4099
categories:
  - announcements
date: 2013-05-25 19:37:09
tags:
---

[DALI (Digital Addressable Lighting Interface Wikipedia-Artikel)](http://de.wikipedia.org/wiki/Digital_Addressable_Lighting_Interface) is an open standard for controlling lighting in buildings. shackspace hacker Timm (@[timmedia](https://twitter.com/timmedia)) has built a bus master for DALI based on a TP-Link TLMR3020 mini-router which is the same model that has been [targeted previously](https://blog.shackspace.de/?p=3772) by [project minikrebs](https://github.com/krebscode/minikrebs). This mini-rounter was combined with some custom electronics and firmware and you can find [full schematics and sourcecode  on GitHub](https://github.com/shackspace/DaliMaster).

[![IMG_0306](https://blog.shackspace.de/wp-content/uploads/2013/05/IMG_0306-150x150.jpg)](https://blog.shackspace.de/wp-content/uploads/2013/05/IMG_0306.jpg) The system consists of a self designed circuit board with a  microcontroller, switching voltage regulator, constant current source and the bus interface connected with the router. The circuit board is designed to fit into the housing of the TP-Link router. The router runs a [OpenWRT](https://openwrt.org/) distribution and a webserver with a custom cgi-script. Using UART the router sends commands to the DALI master circuit board.

[![IMG_0304](https://blog.shackspace.de/wp-content/uploads/2013/05/IMG_0304-150x150.jpg)](https://blog.shackspace.de/wp-content/uploads/2013/05/IMG_0304.jpg) The main part of the DALI master circuit board is a Atmel [AT90PWM316](http://www.atmel.com/devices/at90pwm316.aspx) which has a on-board peripheral to talk DALI frames in hardware. The frames are manchaster encoded with a length of 16 bits in forward direction and 8 bits in backward direction. Because the AT90PWM316 has only one UART interface the connection to the router is handled by an emulated software UART-interface.

[![Platine_ver4](https://blog.shackspace.de/wp-content/uploads/2013/05/Platine_ver4-150x150.png)](https://blog.shackspace.de/wp-content/uploads/2013/05/Platine_ver4.png) The interface will be used to control the beautiful new ceiling lights in shackspace's recent room addition. As an added bonus, the ceiling lights in one of the rooms also come with built-in RGB LED mood-lights which can be accessed via an easy to use web interface.

&nbsp;

&nbsp;

&nbsp;