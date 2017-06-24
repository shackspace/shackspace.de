---
title: 'RaspberryPi Fondles Wii-Nunchuck, Controls LED-Stripe Panel, Plays Snake'
url: 3826.html
id: 3826
categories:
  - Allgemein
date: 2013-01-22 20:52:05
tags:
---

<iframe src="http://www.youtube.com/embed/NO47IX9lz-s?feature=player_detailpage" height="360" width="640" allowfullscreen="" frameborder="0"></iframe>

shackspace hacker @[4RM4](https://twitter.com/4rm4) was looking for something to hack when he visited [29c3](http://events.ccc.de/congress/2012/wiki/Main_Page). He found someone who was selling RGB-LED stripes with individually addressable LEDs which was (understandably) irresistible and he already had a [RaspberryPi](http://www.raspberrypi.org/) to control it with. Controlling the stripe is done via one of the Pi's SPI ports. However there was nothing to mount the stripe to... except for a trash bin.  Luckily the trash bin had a circumference of exactly 1 meter resulting in a 10 row high tubular display when he wrapped the 10 meters of LED stripe around it.

One of the first hacks was a text scroller which was nice but not quite there yet. But soon after that was done 4RM4 was off to the land of classic games and quickly hacked together a [snake](http://en.wikipedia.org/wiki/Snake_(video_game)) clone.  Playing snake on a tubular display was quite a challenge and since the trash bin had to stay at the congress center once 29c3 was over he opted to go for a more familiar and usable form factor by cutting the 10 meter LED stripe into smaller pieces to build a rectangular display.

He improved his snake clone by adding a high-score feature, auto-play bot, support for free dot placement for debugging, and a clock display in idle mode.

Playing it got even more fun with a Wii-Nunchuck hooked up to the RasPi which was quite easy since he could use the Pi's GPIO port to talk to the Nunchuck's I2C interface.

Of course the [full code is available on GitHub](https://github.com/armageddon421/blinkenpi) and there's [some documentation (in German)](https://blog.shackspace.de/wiki/doku.php?id=project:blinkenpi) on the shackspace wiki.