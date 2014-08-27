Project: one button
###################
:date: 2014-02-06 19:05
:author: hdz
:category: Allgemein
:slug: project-one-button

|onebutton|\ The one button project was born in yet another attempt to fix social problems through technology. Though this doesn’t work most of the time – in this case it might actually work – be it only as yet another social experiment.

`Makefu <https://euer.krebsco.de/About.html>`__ was annoyed by bad music
playing in the shack’s lounge one too many times and decided he had to
do something about it. He came up with the idea to use a pushbutton to
just delete that annoying song which is currently running. As
electronics is not his core competency
`exco <http://excogitation.de/>`__ aggreed to partner up in this
project.

History lane detour
~~~~~~~~~~~~~~~~~~~

Since the internet – yes, this is a reference to the “internet” from
popular TV show *The IT Crowd* and it was a big red button, lit by an
LED, making an awful lot of noise when pressed – was in bad shape and
the red glowy button caught their eye. Therefore they decided to re-use
it in this new project.

So the quest began to improve the old internet with some additional
features.

Re-using old hardware
~~~~~~~~~~~~~~~~~~~~~

Wookie tried hooking up the electronics – but failed miserably – and has
not been seen since. The exco and makefu hacked some
`mosfets <http://en.wikipedia.org/wiki/MOSFET>`__ that fell out of an
old motherboard (those are good sources for N-Channel hexfets) and
they’ve also learned about how to use mosfets to begin with, which type
goes along well with a „weak“ source like a raspberry pi pin (50mA
max!), etc. The used N-Channel mosfets are
`IRLR7821 <http://www.irf.com/product-info/datasheets/data/irlr7821.pdf>`__
(PDF) and can be directly driven by a RaspberryPi pin. Bonus: they can
be triggered really really fast (like > 9000 times per second).

Solving social problems – with pain
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Our fellow hackers came up with the idea that there needed to be pain
involved in deleting music because otherwise we would end up with no
music left. This is similar to the proof of work inside the
`Bitcoin <http://en.wikipedia.org/wiki/Bitcoin>`__ protocol (and
everybody loves **Bitcoins**, right?). Exco scavenged the – really loud
– sirens out of the ‘internet’ and attached them to the RaspberryPi,
driven by mosfets.

Basically you have to find a trade-off between the music sucking hard
and you – and everyone around you – enduring the sirens. Since they
turned out to be too loud(!) running at 12 V exco reduced the voltage to
5V.

The button was also rigged up with an LED to have is pulse in a warm red
light, just like `HAL <http://en.wikipedia.org/wiki/HAL9000>`__.

More features
~~~~~~~~~~~~~

Some time later the *one button* received more awesome features:

-  If there is no music playing a short push will start makefu’s
   favorite radio stream. All
   `GitHub <https://github.com/shackspace/one_button>`__ pull requests
   regarding default radio streams may be rejected, deal with it.
-  If you give it a short press while music is playing you will skip to
   the next song in the playlist.

Check out `the code on
GitHub <https://github.com/shackspace/one_button>`__!

.. |onebutton| image:: http://shackspace.de/wp-content/uploads/2014/02/onebutton.jpg
   :target: http://shackspace.de/wp-content/uploads/2014/02/onebutton.jpg


