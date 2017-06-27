---
title: 'SNESoIP: Play Super Nintendo Games Over the Internet'
url: 4354.html
id: 4354
categories:
  - Allgemein
date: 2013-09-12 20:14:36
tags:
---

[![2013-08-28-prototype-01](https://blog.shackspace.de/wp-content/uploads/2013/09/2013-08-28-prototype-01-300x200.jpg)](https://blog.shackspace.de/wp-content/uploads/2013/09/2013-08-28-prototype-01.jpg)

Here's a real gem for all you lovers of classic gaming consoles, right now specifically the SNES.
Remember, back in the olden days, when you spent hours with your friends playing your favorite games on the SNES? Good times, good times.
But you all grew up and moved away, spread out over the world. What would you give if you could once again meet up and play those beloved games together?

Fret not, here's just the thing you need. And shackspace resident hacker [Michael Fitzmayer](https://github.com/mupfelofen-de) is to blame for it!

The [**SNESoIP**](https://github.com/mupfelofen-de/SNESoIP) ethernet adapter for the Super Nintendo Entertainment System (also known as the Super NES, SNES or Super Nintendo) is an open-source, proof-of-concept, network-bridge for sharing local controller-inputs over the Internet.
The project it currently in its early stage, but fully functional and could be used to play multiplayer games over the Internet.

He's also planning on integrating some kind of server-controlled BBS system for which he's already built a [PS/2-to-SNES keyboard adapter](https://github.com/mupfelofen-de/SNESoIP/tree/master/add-ons/keyboard) ([photo](https://github.com/mupfelofen-de/SNESoIP/blob/master/add-ons/keyboard/hardware/images/2013-09-04-prototype.jpg)) and possibly adding support for other consoles like the Sega lineup.

Here's what you need:

*   <span style="line-height: 13px;">two SNES consoles</span>
*   two controllers
*   two copies of the same game
*   two SNESoIP adapters
*   some kind of network inbetween
The SNESoIP will push your controller input to a remote server and receive your playing partner's controller input from the server and forward everything together to your local SNES (same thing for the other player). It works quite well as long as you have low latency and not too many random events which of course cannot be synced.

If you want to get down with the nitty-gritty details, check out the [project's readme on GitHub](https://github.com/mupfelofen-de/SNESoIP).

Now, without further ado, check out this video of the SNESoIP in action:

<iframe src="//player.vimeo.com/video/74037954" height="281" width="500" allowfullscreen="" frameborder="0"></iframe>

[SNESoIP gameplay comparison](http://vimeo.com/74037954) from [Michael Fitzmayer](http://vimeo.com/mupfelofen) on [Vimeo](https://vimeo.com).

&nbsp;