---
title: 'shackspace '
url: 4343.html
id: 4343
categories:
  - Allgemein
date: 2013-09-02 14:09:01
tags:
---

Dave Jones of [EEVblog](http://www.eevblog.com/) enjoys somewhat of a following among shackspace members. We really love his blog and videos. Since we know he loves everything from the classic [Back To The Future](http://en.wikipedia.org/wiki/Back_to_the_future) Universe we wanted to get him something to further complete his collection.

The chance to do exactly this arose when our friends over at [PCB-Pool](http://www.pcb-pool.com/) approached us last year (2012). They were in the process of planning their 2012 [Electronica trade show](http://www.electronica.de/) booth and already had sourced a [DeLorean](http://en.wikipedia.org/wiki/DeLorean_time_machine) (sadly, without working time machine). One of the crucial parts missing was the dashboard clock used to display the time coordinates. Since PCB-Pool is, well, a PCB manufacturer and not really a design-house they approached us and asked if we would be willing to make their show appearance a bit more awesome than usual.

shackspace hackers [Timm](http://twitter.com/timmedia) and [Jocki](http://twitter.com/dop3j0e) immediately started working their magic.

The clock is made up of

*   three identical (except for LED color), daisy-chainable display boards each holding a bunch of 7-segment (date and time) and 16-segment (name of month) displays driven by a TLC59282 constant-current driver,
*   an Arduino shield that holds a real-time clock (RTC) to keep accurate time,
*   an aluminium front panel silkscreened with the clock's design and
*   firmware to bring everything together.
The clock was quite the show piece at Electronica and PCB-Pool was really happy with the way it turned out.

A few weeks ago we've approached them again and asked if they would be willing to run another set of PCBs and print another front plate so we could send one to His Craziness Dave 'EEVblog' Jones. They agreed, a few fellow hackers chipped in and we've sourced the electronic components, soldered everything together, wrote a nice letter to go with it, packaged it up and sent it off on the long way down under to Australia.

We already got a bit jittery when the package was spotted in one of Dave's previous videos, sitting on his self.
Various amounts of panic were then caused when [Dave announced](https://twitter.com/eevblog/status/373647994291105793) that he blew up "a super cool mailbag item". We calmed down a bit, telling ourselves that his mailbag pile is a [FIFO](http://en.wikipedia.org/wiki/FIFO) and he gets a lot of items, so we're probably safe.
Then this week's mailbag video (below) arrived and our worst fears became reality: Dave switched to a [LIFO](http://en.wikipedia.org/wiki/LIFO_(computing)) mode opening the more recent packages first and, during plugging everything together, really did blow up the BTTF clock we've sent him :(

Lesson learned: always, _ALWAYS_ mark pin 1 on your connectors.

Anyway, the issue is one or maybe two blown TLCs which should be fairly simple to replace. Still, it's quite a bummer it blew. And to be honest, we're a tiny bit embarrassed for using the pin headers in stead of the proper boxed headers. That's what happens if you're out of that one last part and really want to get it shipped. "It'll be fine!" turns into "Oh crap" thanks to good old [Murphy](http://en.wikipedia.org/wiki/Murphy%27s_law) with 100% certainty. ;)

We hope Dave can get it fixed (we're actually certain of that!) and wish him a lot of fun with his new clock.

*   [<span style="line-height: 13px;">BTTF project on GitHub</span>](https://github.com/shackspace/bttf)
Now, without further ado, here's Dave's mailbag video (the fun starts at 5:00):

<iframe src="http://www.youtube.com/embed/ehXw1Amj40E?feature=player_detailpage" height="360" width="640" allowfullscreen="" frameborder="0"></iframe>