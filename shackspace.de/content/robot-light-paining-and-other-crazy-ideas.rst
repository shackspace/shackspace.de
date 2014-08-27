Robot Light Painting and Other Crazy Ideas
##########################################
:date: 2012-06-25 20:51
:author: hdz
:category: Allgemein
:slug: robot-light-paining-and-other-crazy-ideas

`Christian <http://shackspace.de/wiki/doku.php?id=leute:excogitation>`__
had some left-overs at work, amongst which there was also a quite dated
Mitsubishi Movemaster RM-101 educational robot which we immediately
named `Number 5 <http://shackspace.de/wiki/doku.php?id=project:nr5>`__. 
It's a 5-axis robot arm built back in 1984 or something, wasn't in the
best shape and nothing much was known about it.  The internet seems to
be devoid of information on this piece of hardware, except that "yes, it
does exist" and "no, there's no manual".

A first glance at the hardware showed that it was connected via a
parallel printer port and the controller doing the magic is a Z80
mikrocontroller.  One of the things decided upon early in the process
was creating a backup of the EPROM holding the program code before it
dies.  This was easily possible thanks to
@\ `grftjx <https://twitter.com/grftjx>`__'s help using his trusty
`Willem
True <http://www.zeitech.de/Willem-True-USB-V2-Universal-Programmiergeraet>`__
universal programmer board.

The lack of documentation picked the interest of
@\ `dop3j0e <https://twitter.com/dop3j0e>`__ and
@\ `samuirai <https://twitter.com/samuirai>`__ who started working
through the now dumped Z80 assembler code with tactical precision using
`IDAPro <http://www.hex-rays.com/products/ida/index.shtml>`__ and and an
instruction set manual.  After some probing around the firmware sources
the `most important
commands <http://shackspace.de/wiki/doku.php?id=project:nr5#reversing_der_firmware>`__
to move the robot arm around where identified.

Since the parallel port connector seemed to be neither original nor
functional it was `both fixed and
documented <http://shackspace.de/wiki/doku.php?id=project:nr5#db25_con3>`__.

It was now time to get the thing moving, so
`chris <http://shackspace.de/wiki/doku.php?id=leute:chris>`__ replaced
the problem of a non-moving robot arm with a `tiny shell
script <http://shackspace.de/wiki/doku.php?id=project:nr5#scripte>`__.

Now that all the reversing was done, Christian remembered that there was
in fact a dusty old copy of the instruction manual back at the company. 
The manual quickly confirmed everything that was reversed and gave a bit
more insight into the `other commands the robot
accepted <http://shackspace.de/wiki/doku.php?id=project:nr5#befehle_rm-501>`__.

At this point, let us pause for a second and watch this video courtesy
of our chief videographer
@\ `h0uz3 <https://twitter.com/h0uz3>`__ supported by art
director \ `papachaotica <http://shackspace.de/wiki/doku.php?id=leute:papachaotica>`__ of
the robot arm in action:

`Robotik@shack <http://vimeo.com/44572459>`__ from `shack e.V.
Hackerspace Stuttgart <http://vimeo.com/shackspace>`__ on
`Vimeo <http://vimeo.com>`__.

Okay, thanks for watching, now back to more awesomeness.

@\ `4rm4 <https://twitter.com/4rm4>`__ joined the fun with actual
applications!  Introducing: `robot <http://imgur.com/a/mGBhP#0>`__
`powered <http://imgur.com/a/mGBhP#2>`__
`light <http://imgur.com/a/mGBhP#3>`__
`painting <http://imgur.com/a/mGBhP#4>`__!  And robot powered `plotting
using a felt pen <https://p.twimg.com/AwOJ7lhCAAEAY84.jpg:large>`__.

At this point you're probably thinking: "Nice, but a little small,
eh?".  Fear not, `we've got the size issue
covered <https://twitter.com/4RM4/status/215928983873794048/photo/1>`__.


