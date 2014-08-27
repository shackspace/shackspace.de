16x16 LED Plasma Display w/ 100% hand-made SMD Driver PCB
#########################################################
:date: 2011-02-25 15:11
:author: hdz
:category: Allgemein
:slug: 16x16-led-plasma-display-w-100-hand-made-smd-driver-pcb

|image0|\ Everyone has dreams. At hackerspaces dreams usually involve some kind of technology and only the tiniest amount of sanity required to get it done.  shackspace member @\ `dop3j0e <https://twitter.com/dop3j0e>`__ spent may hours and valuable amounts of his sanity on this little gem.  It's a fully hand-made (design, layout, etching, soldering) 16x16px LED display.  The dream in this case is to make this thing bigger. Way bigger and RGB.

Rapid Prototyping
~~~~~~~~~~~~~~~~~

To check if the idea is feasible at all, a prototype was called for. 
Someone had a couple of spare 8x8 mono-color LED matrix displays which
promptly found their place on a breadbord where the pinout was reverse
engineered.  After that, a single matrix was connected to an
`Arduino <http://arduino.cc/>`__ and first tests showed everything
worked as planned. A lot more serious breadboarding involving a
`shackuino <http://shackspace.de/wiki/doku.php?id=project:shackuino>`__
and four of the 8x8px displays followed.

Holding four such displays together and ensuring there's good contact on
all pins without soldering anything together turned out to be
impossible.  The prototype was full of row and column defects.  However,
the hardware worked in principle and the firmware was stable.

At the end of the day prototyping resulted in a *huge*\ bunch of jumper
wires, breadboard, a
`shackuino <http://shackspace.de/wiki/doku.php?id=project:shackuino>`__
and the displays somehow working most of the time.  This had to become
more stable and way more compact.

|image1|\ Shrinking it Down ~~~~~~~~~~~~~~~~~~~~~~~~~~~

In a continued effort to ramp up our skill set and manufacturing
capabilities we've gone from breadboarding to perfboard to etched
through-hole PCBs and double-sided PCBs to now briefly pause at this new
peak. A SMD PCB with 0.5mm pitch made using the toner transfer method.
The PCB itself smaller than the four 8x8px displays.

At the heart of the controller is a
`Atmega168 <http://www.atmel.com/dyn/products/product_card.asp?part_id=3303>`__,
the same microcontroller used on the Arduino and shackuino but in it's
smaller footprint TQFP version (0.8mm pitch).  Columns are controlled
using two
`74HC164 <http://focus.ti.com/docs/prod/folders/print/sn74hc164.html>`__
shift registers (SOIC package, 1.27mm pitch). A
`TLC5940 <http://focus.ti.com/docs/prod/folders/print/tlc5940.html>`__
chip (QFN package, 0.5mm pitch) is used to generate 16 12bit PWM signals
to drive the rows.  This last chip was the biggest challenge because of
the very fine pitch traces which were tricky to print using toner
transfer and even trickier to solder since there's no leads, just
contact pads.  This was done using a hot-air soldering station and a
needle point SMD soldering tip combined with what felt like liters of
flux.

The displays are mounted to a piece of stripboard which is used
to\ `juggle around their slightly unfavorable
pinout <http://shackspace.de/gallery/index.php/Projekte/LED-Plasma/layer2>`__
and to accommodate for the fact that the free version of Eagle does not
allow the size of PCB required to mount the displays directly (by a mere
centimeter).

The
`frontpanel <http://shackspace.de/gallery/index.php/Projekte/LED-Plasma/panel>`__
is equipped with a bunch of control buttons to switch through the
various display modes.

Next Stop: Awesome
~~~~~~~~~~~~~~~~~~

To make this even more awesome the next version will be RGB, required
parts are already ordered and epic win is to be expected.

Meanwhile, here's a video of the breadboard prototype.

.. raw:: html

   <p>

.. raw:: html

   <embed src="http://img708.imageshack.us/flvplayer.swf?f=Ptwr" width="320" height="260" allowfullscreen="true" wmode="transparent" type="application/x-shockwave-flash">

.. raw:: html

   </embed>

.. raw:: html

   </p>

-  @\ `dop3j0e <https://twitter.com/dop3j0e>`__ on twitter
-  `Project
   gallery <http://shackspace.de/gallery/index.php/Projekte/LED-Plasma>`__

.. |image0| image:: http://shackspace.de/gallery/var/thumbs/Projekte/LED-Plasma/action.jpg?m=1297895084
   :target: http://shackspace.de/gallery/index.php/Projekte/LED-Plasma/action
.. |image1| image:: http://shackspace.de/gallery/var/thumbs/Projekte/LED-Plasma/board.jpg?m=1297895033
   :target: http://shackspace.de/gallery/index.php/Projekte/LED-Plasma/board


