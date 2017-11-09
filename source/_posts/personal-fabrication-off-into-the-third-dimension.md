---
title: 'Personal Fabrication: Off into the Third Dimension'
url: 3303.html
id: 3303
categories:
  - announcements
date: 2012-07-08 19:18:18
tags:
---

[![](https://blog.shackspace.de/wp-content/uploads/2012/07/DSC_5592-300x200.jpg "DSC_5592")](https://blog.shackspace.de/wp-content/uploads/2012/07/DSC_5592.jpg)One of the first ideas even before shackspace was founded was getting a 3D printer.
However, it took two years until the idea got some real momentum when Robert was calling for a 3D-printer related workshop.   [Christian](https://blog.shackspace.de/wiki/doku.php?id=leute:excogitation) took matters into his hand and actually started the project. An unsuspecting bystander chimes in with a small donation towards shackspace's very own 3D printer.  It seems many find the prospect of having access to a 3D printer equally charming.  The lot steps up and the money for a 3D printer is raised in virtually no-time.
A few days pass and Christian clandestinely spends a week finding suppliers and ordering parts from lots of different sources.  A month passes - during which parcel after parcel mysteriously finds its way into the hackerspace.  Status reports are being made, open tasks for participation proclaimed.  Multiple people show interest in soldering electronic boards - thus further reducing the monetary costs to the printer parts.

The brain (RAMPS 1.4 parts) arrive and thanks to Stephan, only hours later, the board is fully assembled.
The opto kits arrive and Andy, who wasn't fast enough to get his hands on the RAMPS, plays his part in soldering the 6 kits.
Phil is even faster with the next items thus securing his place soldering the (still to be put to the test) hall-o endstops.  Meanwhile [Robert's Prusa Mendel 3D printer](https://blog.shackspace.de/?p=2778) spits out parts which are essential for assembly while in another room the Misumi extrusions are being tapped.

Shortly thereafter the construction of the frame begins; parts are being aligned, screws are being turned.  With each part and every screw the task gets a little harder because of the scaled up build (330x330mm) area.  First ideas for design improvements are being discussed while the printer frame already looks like one.  Stephan once again gets his hands on the RAMPS, installs the firmware and conducts first tests by getting the motors to move.
Finally, the frame is completed and work continues on the installation of the rods, belts, motors and carriages for the different axes.

The plastic parts for the extruder are already printed and their assembly begins.  The perceived worst part is the filament conveyor screw which essentially is a regular screw with an unthreaded part where one has to cut in grooves so the screw can get a grip onto the material and push it down the hot-end.

While the printer is moving closer to completion, Phil designs the layout for the heating wire paths on the print-bed, which needs to be heated to prevent the printed layers from warping.

[![](https://blog.shackspace.de/wp-content/uploads/2012/07/DSC_5596-300x200.jpg "DSC_5596")](https://blog.shackspace.de/wp-content/uploads/2012/07/DSC_5596.jpg)The print-bed and the optical endstops are installed; first testing begins and some problems are encountered.  First, the printer-bed heating draws a lot of current while heating. The current is high enough to make the el-cheapo 400W ATX-PSU drop the voltage on the 12V-rail down to 9,2V - not even reaching 50° C.  Installing Armin and hadez' 700W 98% efficiency Corsair ATX-PSU deals with that problem just fine.  With this PSU the printer-bed now heats properly up to 77°C which is enough for printing with PLA.

We still have to find a solution to get higher print-bed temperatures for printing ABS because that will require around 120C to prevent warping of the extruded material.
Another problem was the stepper for the Y-axis losing steps.  The problem was solved by using slower acceleration ramps.
There is also some software reconfiguration and a [git repository for the settings and 3D Models](https://github.com/shackspace/printer_conf).
Momo installed some led-strips on the frame which now illuminate the printer and also sacrificed one of his netbooks which is now used as the printerstation.

Next up:

*   Full parts list with links to suppliers and costs
*   Full print-parts list
*   Illustrated build instructions
*   Fablab @shackspace