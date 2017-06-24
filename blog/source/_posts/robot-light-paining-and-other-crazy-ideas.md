---
title: Robot Light Painting and Other Crazy Ideas
url: 3284.html
id: 3284
categories:
  - Allgemein
date: 2012-06-25 20:51:09
tags:
---

[Christian](https://blog.shackspace.de/wiki/doku.php?id=leute:excogitation) had some left-overs at work, amongst which there was also a quite dated Mitsubishi Movemaster RM-101 educational robot which we immediately named [Number 5](https://blog.shackspace.de/wiki/doku.php?id=project:nr5).  It's a 5-axis robot arm built back in 1984 or something, wasn't in the best shape and nothing much was known about it.  The internet seems to be devoid of information on this piece of hardware, except that "yes, it does exist" and "no, there's no manual".

A first glance at the hardware showed that it was connected via a parallel printer port and the controller doing the magic is a Z80 mikrocontroller.  One of the things decided upon early in the process was creating a backup of the EPROM holding the program code before it dies.  This was easily possible thanks to @[grftjx](https://twitter.com/grftjx)'s help using his trusty [Willem True](http://www.zeitech.de/Willem-True-USB-V2-Universal-Programmiergeraet) universal programmer board.

The lack of documentation picked the interest of @[dop3j0e](https://twitter.com/dop3j0e) and @[samuirai](https://twitter.com/samuirai) who started working through the now dumped Z80 assembler code with tactical precision using [IDAPro](http://www.hex-rays.com/products/ida/index.shtml) and and an instruction set manual.  After some probing around the firmware sources the [most important commands](https://blog.shackspace.de/wiki/doku.php?id=project:nr5#reversing_der_firmware) to move the robot arm around where identified.

Since the parallel port connector seemed to be neither original nor functional it was [both fixed and documented](https://blog.shackspace.de/wiki/doku.php?id=project:nr5#db25_con3).

It was now time to get the thing moving, so [chris](https://blog.shackspace.de/wiki/doku.php?id=leute:chris) replaced the problem of a non-moving robot arm with a [tiny shell script](https://blog.shackspace.de/wiki/doku.php?id=project:nr5#scripte).

Now that all the reversing was done, Christian remembered that there was in fact a dusty old copy of the instruction manual back at the company.  The manual quickly confirmed everything that was reversed and gave a bit more insight into the [other commands the robot accepted](https://blog.shackspace.de/wiki/doku.php?id=project:nr5#befehle_rm-501).

At this point, let us pause for a second and watch this video courtesy of our chief videographer @[h0uz3](https://twitter.com/h0uz3) supported by art director [papachaotica](https://blog.shackspace.de/wiki/doku.php?id=leute:papachaotica) of the robot arm in action:

<iframe src="http://player.vimeo.com/video/44572459?byline=0&amp;color=0dd932" frameborder="0" width="600" height="338"></iframe>

[Robotik@shack](http://vimeo.com/44572459) from [shack e.V. Hackerspace Stuttgart](http://vimeo.com/shackspace) on [Vimeo](http://vimeo.com).

Okay, thanks for watching, now back to more awesomeness.

@[4rm4](https://twitter.com/4rm4) joined the fun with actual applications!  Introducing: [robot](http://imgur.com/a/mGBhP#0) [powered](http://imgur.com/a/mGBhP#2) [light](http://imgur.com/a/mGBhP#3) [painting](http://imgur.com/a/mGBhP#4)!  And robot powered [plotting using a felt pen](https://p.twimg.com/AwOJ7lhCAAEAY84.jpg:large).

At this point you're probably thinking: "Nice, but a little small, eh?".  Fear not, [we've got the size issue covered](https://twitter.com/4RM4/status/215928983873794048/photo/1).