---
title: shackspace open/close monitor
url: 2092.html
id: 2092
categories:
  - Allgemein
date: 2011-05-22 08:22:51
tags:
---

Last night chris worked hard to put the final touches to the [new and improved open/close monitor](https://blog.shackspace.de/wiki/doku.php#status).

### Back in the Days

The previous system was a very basic.  Since we performed a full shutdown when the space was closed (the servers were switched off) at the old space, the server there would simply start polling a file hosted on the shackspace.de website while it was on.  The server running the website would check whether someone polled the site or not and use this to decide whether the space is open or not.  This worked (almost) flawlessly for a year.

### Bigger, Better, Reed Contact

Now we've moved and the server room will no longer be part of a shutdown.  It'll keep running.  This slightly complicated things.

A router was used to create a cavity in the lock.  This cavity was then used to house a rare earth magnet, held in place with epoxy glue.  The door frame was then equipped with a reed  contact which gets triggered when the door is actually locked.

### 40 Meters of (not really) RS232

The signal of this reed contact is directly used to toggle the control line of a serial port.  But since this port is in the server room at the other end of the space (read: 40 meters away) and ingenious contraption was designed.

*   The contact's cable is directly connected to a Cisco console cable (DSUB-15 to Ethernet)
*   The Cisco cable is patched into one of the Ethernet sockets in the cable duct that runs all the way around the space
*   The port used for this terminates in the server room's patch field with all the other Ethernet wall sockets
*   From the patch panel it's off to one of the racks where the cable is connected to yet another Cisco console cable by way of an Ethernet&lt;&gt;Ethernet adapter plug
*   The Cisco cable is connected to a USB&lt;&gt;RS232 adapter
*   The adapter is connected to one of the servers

### The Result

Now we're only missing a couple of weeks of  [data in the graph](https://blog.shackspace.de/wiki/doku.php?id=sopenstats).  Doesn't really matter, since the space was pretty much open 24/7 for the whole time and it will likely continue that way.

By the way, you can poll the text-only open status in [English](https://blog.shackspace.de/sopen/text/en) and [German](https://blog.shackspace.de/sopen/text/de) or get the [1x1px GIF](https://blog.shackspace.de/sopen.gif) which is either red or green.  You can get some more info about the software behind this hack by looking at the [project documentation (German)](https://blog.shackspace.de/wiki/doku.php?id=shack_open_close_monitor).

[gallery link="file"]

![](../wp-includes/js/tinymce/plugins/wpgallery/img/t.gif "gallery link=&quot;file&quot;")