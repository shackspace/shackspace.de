Open Sesame: Harddrive Password Hacking with a OpenBench Logic Sniffer 
#######################################################################
:date: 2011-04-27 19:33
:author: hdz
:category: Allgemein, Projekte
:slug: open-sesame-harddrive-password-hacking-with-a-openbench-logic-sniffer

|image0|\ shackspace's @\ `dop3j0e <https://twitter.com/dop3j0e>`__ had
a big problem.  A password problem.  Quite a while ago he set up a
password for his Thinkpad's harddrive and chose to unlock his drive
using the built-in fingerprint scanner.  Years passed, thumbs were drawn
over the scanner countless times, passwords were changed frequently. 
But not all passwords were changed.  That one password for his harddrive
never did change and over time he simply forgot what the actual password
was.

| The thumb print scanner kept working.  However, to change or disable
the password you have to enter it by keyboard in the BIOS since in this
case it does not accept the thumb print scanner as input.
|  This poses a real problem.  How do you access the disk if your
fingerprint scanner dies?  Or what if the laptop dies and you have to
unlock the drive from a different machine that doesn't have the password
stored in the fingerprint scanner?

| There's various approaches to go about this issue.
|  One idea was  to reverse engineer the BIOS to find out where the
actual password is stored.  This turned out to be especially nasty
business and while a lot of insight was gained into how (ugly) a BIOS
looks from the inside, no password was recovered.
|  Another idea which does not work was exchanging the control board of
the harddrive with that of a similar model. Turns out the harddrive
password is stored on the platter, not the controller.
|  You could of course use a logic sniffer (costs multiple kilo-Euros)
and sniff the IDE bus for the password being transmitted.  Not really an
option either... or is it?

Open Source Hardware to the Rescue
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

|image1|\ Thanks to the open source hardware movement, you can have a
logic sniffer for just $50!  The `OpenBench Logic
Sniffer <http://www.seeedstudio.com/depot/open-workbench-logic-sniffer-p-612.html?cPath=174>`__
is exactly what you want and
@\ `hdznrrd <https://twitter.com/hdznrrd>`__ at shackspace just happened
to receive his first batch pre-order at the exact time @dop3j0e was
about to fall into despair.

The OBLS comes with 16 buffered (3.3 or 5V) pins and another 16
unbuffered (3.3V only) pins.  The `IDE
bus <https://secure.wikimedia.org/wikipedia/en/wiki/Parallel_ATA>`__
happens to be a 5V bus, ruling out half of the capture pins, and to
sniff everything you'd need 40 pins.

It turns out it's good enough to just sniff the data pins and nothing
else (details below).  And yes, the IDE bus has exactly 16 data pins :)

Sniffing the IDE bus for the Password Transfer
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

| |image2|\ Next it was time to hook up the harddrive to the sniffer. 
What makes this slightly complicated is that you have to sniff the bus
while the harddrive is mounted inside the laptop.
|  To do this individual wires were connected to each of the 16 data
pins.  Since the drive bay wasn't large enough to accommodate the
wiring, the laptop had to be partially disassembled.

The OBLS is compatible with the `SUMP Logic Analyzer
GUI <http://www.sump.org/projects/analyzer/client/>`__ which was used to
control the analyzer and set up triggering.

The sniffer was set up to start logging data as soon as the 0xF2 unlock
command is seen on the data bus which is then followed by the plain text
password, which is exactly what you need to unlock the drive yourself. A
from-memory reconstruction of the trigger settings can be found
`here <http://shackspace.de/gallery/index.php/Projekte/Festplattenpasswort-sniffen/sump-trigger-settings>`__.

Below screenshot shows the SUMP GUI displaying the results of a
successful password sniffing run (note the 'f2' command).  *Note: the
Prezi presentation linked below contains anannotatedfull length  screen
capture of the sniffed password.*

|image3|

Unlocking the Drive
~~~~~~~~~~~~~~~~~~~

Now the drive can be unlocked using the handy hdparm tool:

::

    # hdparm --user-master u --security-unlock \
      $(echo -ne "\036\023\042\046\006\002\004\013")

Once unlocked, the password can be disabled entirely:

::

    # hdparm --user-master u --security-disable \
      $(echo -ne "\036\023\042\046\006\002\004\013")

Metafoo
~~~~~~~

-  @dop3j0e's presentation "`Open
   Sesame <http://prezi.com/k1xduox30soj/open-sesame/>`__\ " on how he
   hacked his harddrive
-  `Photo documentation of the
   project <http://www.shackspace.de/gallery/index.php/Projekte/Festplattenpasswort-sniffen>`__

**Update #1**: Exchanged the SUMP screenshot with one that actually
shows the 0xf2 command.\ **
 Update #2**: Added more info why sniffing of the password was
necessary.\ **
 Update #3**: Added link to the trigger settings.

.. raw:: html

   <div id="_mcePaste"
   style="position: absolute; left: -10000px; top: 495px; width: 1px; height: 1px; overflow: hidden;">

http://www.shackspace.de/gallery/index.php/Projekte/Festplattenpasswort-sniffen

.. raw:: html

   </div>

.. |image0| image:: http://shackspace.de/wp-content/uploads/2011/04/DSC_2881-150x150.jpg
   :target: http://shackspace.de/wp-content/uploads/2011/04/DSC_2881.jpg
.. |image1| image:: http://shackspace.de/wp-content/uploads/2011/04/101721653-150x150.jpg
   :target: http://shackspace.de/wp-content/uploads/2011/04/101721653.jpg
.. |image2| image:: http://shackspace.de/wp-content/uploads/2011/04/DSC_2883-150x150.jpg
   :target: http://shackspace.de/wp-content/uploads/2011/04/DSC_2883.jpg
.. |image3| image:: http://shackspace.de/wp-content/uploads/2011/04/sump_trigger-300x115.png
   :target: http://shackspace.de/wp-content/uploads/2011/04/sump_trigger.png
