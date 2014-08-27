Windows 7 on a Raspberry Pi - No f*cking way!
#############################################
:date: 2013-02-14 23:06
:author: hdz
:category: Allgemein
:slug: windows-7-on-a-raspberry-pi-no-fcking-way

|SANY0388| Here at the `shackspace <http://shackspace.de/>`__ we love
pointing our 50W lazor towards all kinds of materials for fun, more
benefit and no profit ... yet! The only slight downside is that the
laser can (at the moment) only be controlled through a quirky Windows
software - the reverse engineering job is still pending. Also there's a
lot of people around which just *had* to buy "a few" Raspberry Pies when
it came out as new - ultra-affordable mini-PC last year.

While looking for use cases for the new toy we discovered that it makes
an awesome  (literally) thin client. It has a very low power
consumption ~2W and manages to handle remote desktop
applications reasonably fast.

To combine both pain (Windows Krepelsoftware) and pleasure (RasPI)
the motivation for this project is to provide a means to control
the laser cutter - and since the software for controlling it only runs
on Windows - without requiring a native Windows computer (which concerns
most people around here).

| |IMG\_20130105\_031135 (1)|\ The first thing we did was to set up a
Windows 7 OS in a `KVM
instance <http://en.wikipedia.org/wiki/Kernel-based_Virtual_Machine>`__ on
one of the servers of  shackspace's data center.
|  Next we had to find a way to boot directly to that machine which lead
us to using xtightvncviewer - which gives the impression of running
Windows 7 natively (fullscreen with the resolution of the TFT Screen).
`For setup instructions please check the shackspace
wiki <http://shackspace.de/wiki/doku.php?id=berries#thin_client>`__.

Now we were faced with the challenge to forward the USB port of the
Raspberry Pi - to which we were planning to connect the laser cutter to
- to our virtual Windows machine. This creates the 'physical link from
the laser cutter to the virtual host.

| The solution we stumbled across was the `USBIP
project <http://usbip.sourceforge.net/>`__.
|  Since the USBIP modules are only in available in staging we needed
to build a whole new Linux kernel for the Raspberry Pi as the
module is not natively included into the current baseline kernel. It
took about two days to make it work - mainly because we didn't have much
experience building kernels beforehand. You can find `detailed
instructions on USBIP on the shackspace
wiki <http://shackspace.de/wiki/doku.php?id=berries#usbip>`__. The
result is a clean Raspberry Pi image with the loadable USBIP module
included.  We started out building only the required modules and
such mischiefs - instructions for building a kernel that lets you
actually load the modules you built (as usip-host in our case) will
follow shortly.

In addition to that there is at the moment a mismatch of the USB packet
headers sent between the USBIP Linux server and Windows client. This
caused far more head-ache than expected - partly because of our combined
lack of knowledge of the Windows platform. Fortunately our Google-Fu was
strong and we were able to find  a  Windows client which is working with
the current USBIP release somewhere on the internet.

After quite a few non-booting Linux images, tons of blue screens and
kernel panics the results were satisfying and we remotely
lazored the no-fucking sign:

|IMG\_20130105\_052653|

We were asked to make some pictures or a video - and since we don't take
ourselves too serious - we came up with the idea of doing it with one of
the mascots hanging out in our hackerspace (next up shaqueline?!).

So here we go: Pedro the bear explains how he got Windows 7 running on
an Raspberry Pi to control the 50W Lazor of shackspace:

Software used:

-  `USBIP <http://usbip.sourceforge.net/>`__
-  `Instacam <http://shackspace.de/wiki/doku.php?id=project:minikrebs#instacam>`__

People involved:

-  `exco <https://twitter.com/excogitation>`__,
   `makefu <https://twitter.com/makefoo>`__ - project owners
-  `rel0c <twitter.com/rel0c8>`__ - admin
-  nadka - video editing
-  Pedro the Bear - protagonist, being generally awesome

.. |SANY0388| image:: http://shackspace.de/wp-content/uploads/2013/02/SANY0388-150x150.jpg
.. |IMG\_20130105\_031135 (1)| image:: http://shackspace.de/wp-content/uploads/2013/02/IMG_20130105_031135-1-150x150.jpg
.. |IMG\_20130105\_052653| image:: http://shackspace.de/wp-content/uploads/2013/02/IMG_20130105_052653-150x150.jpg
