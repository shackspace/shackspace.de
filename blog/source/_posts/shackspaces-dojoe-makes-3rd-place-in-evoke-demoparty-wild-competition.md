---
title: shackspace's dojoe makes 3rd Place in Evoke Demoparty Wild Competition
url: 3352.html
id: 3352
categories:
  - announcements
date: 2012-08-14 21:51:22
tags:
---

[![](https://blog.shackspace.de/wp-content/uploads/2012/08/evoke.png "evoke")](https://blog.shackspace.de/wp-content/uploads/2012/08/evoke.png)shackspace's own @[dop3j0e](https://twitter.com/dop3j0e), known [for the many hacks](http://prezi.com/dfmyygtuiqmn/von-holzchen-auf-stockchen/) he did at the space, just raised the bar.  A while ago he implemented an[ algorithmic piece of mus^W noise](https://blog.shackspace.de/?p=2509) as a C-one-liner inside an ATtiny9 all fitted inside an RCA plug.  That little thing was dubbed the "[Noiseplug](https://blog.shackspace.de/?p=2509)" and was a great^W annoying addition to liven up the shackspace lounge during those long nightly hack sessions.

For this year's [Evoke demoscene party](http://www.evoke.eu/2012/) in Cologne which just concluded on Sunday, August 12th, he presented a revamped version which replaced the C-one-liner noise with a proper [chiptune](http://en.wikipedia.org/wiki/Chiptune).

The challenging part of the whole ordeal was the - quite literally - tiny spec of the [ATtiny9](http://www.atmel.com/devices/ATTINY9.aspx) chip: 1kB flash memory, 32 bytes of RAM, 4 I/O pins.

However, leet assembler skillz (first time w/ AVR assembler) to the rescue and a last minute competition day hack sprint of 7 hours resulted in a polyphonic chiptune made up of a phat bassline (two oscillators), catchy lead synth (three sawtooth oscillators), and arpeggio background synth (one square wave oscillator).  It was [very well received by the audience](http://www.youtube.com/watch?v=AZpfHiwQf-s) and ended up [making 3rd place in the Wild / Alternative Platforms Competition](http://www.youtube.com/watch?list=PL3830A3069DF94628&amp;feature=player_detailpage&amp;v=QnSc9VZcmS0#t=2228s).

Of course dojoe wouldn't be living up to the hacker spirit if he didn't share the source, so go ahead and [fork it on GitHub](https://github.com/dop3j0e/noiseplug)!

*   [Noiseplug/shack on pouet.net](http://pouet.net/prod.php?which=59694)
*   [Presentation video on Vimeo](http://vimeo.com/47380710)
*   [Source code on GitHub](https://github.com/dop3j0e/noiseplug)
*   [Live footage of the presentation at Evoke 2012](http://www.youtube.com/watch?v=AZpfHiwQf-s)
*   **Update:** [Audio recording of the plug's sound output](http://dojoe.net/shack/DoJoe%20-%20The%20Noiseplug.mp3) (mp3)
<div>But enough of all that, go watch the video now:</div>
<iframe src="http://player.vimeo.com/video/47380710?color=00d43f" frameborder="0" width="500" height="281"></iframe>

[The Noiseplug](http://vimeo.com/47380710) from [Joachim Fenkes](http://vimeo.com/dop3j0e) on [Vimeo](http://vimeo.com).

An Atmel ATtiny9 playing chiptunes -- 1KB of flash, 32 bytes of RAM and a 16 byte register file is all I have.