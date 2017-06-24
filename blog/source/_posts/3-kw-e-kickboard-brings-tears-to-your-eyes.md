---
title: 3 kW e-Kickboard brings tears to your eyes
url: 4437.html
id: 4437
categories:
  - Allgemein
date: 2014-01-06 18:20:26
tags:
---

[![IMG_20140104_165009](https://blog.shackspace.de/wp-content/uploads/2014/01/IMG_20140104_165009-300x225.jpg)](https://blog.shackspace.de/wp-content/uploads/2014/01/IMG_20140104_165009.jpg)Since exco is not big on baking cookies for Christmas, he invested his time in a project he was thinking about doing for some time: Building an electrified kickboard.

The ingredients are:

*   A cheap (used) [kickboard form eBay](http://www.ebay.de/sch/i.html?_sacat=0&amp;_from=R40&amp;_sop=15&amp;_nkw=kickboard+k2&amp;rt=nc&amp;LH_BIN=1)
*   [Better wheels](http://www.ebay.de/itm/KICKBOARD-WHEELS-ALUMINIUM-GUMMI-110-mm-STUNT-SCOOTER-BOBBY-CAR-TUNING-usw-/121109842056?pt=Cityroller_Kickboards&amp;hash=item1c32b58888)
*   [63mm 3kw outrunner + cheap "100A" ESC](http://www.ebay.de/itm/BRUSHLESS-C6374-10-KV170-OUTRUNNER-NEW-AEOLIAN-MOTOR-BEAST-DNA-100A-ESC-5A-BEC-/121147989090)
*   [a cheap servo tester](http://www.ebay.de/sch/i.html?_sacat=0&amp;_from=R40&amp;_sop=15&amp;_nkw=servotester&amp;rt=nc&amp;LH_PrefLoc=2)
*   [a horribly expensive potentiometer](http://de.mouser.com/ProductDetail/BI-Technologies-TT-electronics/404R10KL10/?qs=LUfMuE0iDorszXH677fGaw==)
*   [cogged belt pulley](http://maedler.de/product/1643/1616/996/zahnriemenraeder-at5-fuer-riemenbreite-10-mm?result=1662400)
*   [drive belt](http://maedler.de/product/1643/1616/963/zahnriemen-profil-at-5-breite-10-mm?result=16660700-)
*   Two used 3S 5 Ah Li-Po batteries (from his previous 60 km/h RC car build)
<li>some wire
*   [A day of CAD work](https://lh3.googleusercontent.com/-5Ye6bPyPtFM/UrWy10a6O9I/AAAAAAAAZPg/F7jyuUI0kRQ/s640/kickboard_1.jpg) ([more](https://lh4.googleusercontent.com/-u2c8qan0NAA/Ur4ivS-QlsI/AAAAAAAAZec/iPsQAHvVuZg/s400/IMG_20131227_181432.jpg), [GitHub](https://github.com/excogitation/ekick_k2))
*   [A day of milling aluminum](https://lh4.googleusercontent.com/-WlCUwGUyOKk/Urc8VsmmULI/AAAAAAAAZSE/o4FCrdfamnQ/s400/IMG_20131221_162743.jpg) (and some minutes on a lathe) ([more](https://lh5.googleusercontent.com/-MgsyLPZBYOE/Ur4ivRNtFfI/AAAAAAAAZec/duQ2zfsHLHg/s400/IMG_20131227_181426.jpg), [more](https://lh6.googleusercontent.com/--7eh5ry6hgA/Ur4ivZta_TI/AAAAAAAAZec/5f-OXntVJpA/s400/IMG_20131227_170358.jpg), [more](https://lh5.googleusercontent.com/-h25hZtFXUKU/Ur4ivXVZjgI/AAAAAAAAZec/30YuRLGhhcc/s400/IMG_20131227_170409.jpg), [more](https://lh4.googleusercontent.com/-KEPctfeyteA/Ur4ivSvwMlI/AAAAAAAAZec/dTT4brrFIQE/s400/IMG_20131227_192442.jpg))
*   A day of assembly
It's a pretty bare-metal job. Instead of adding a microcontroller and programming some firmware he opted for a simple push potentiometer to control the motor speed ([video of first motor test](http://www.youtube.com/watch?feature=player_embedded&amp;v=LRso6UsPHg0))

A first try to build a belt tensioning mechanism by sliding the motor mount looked nice enough but didn't manage to hold up to the torque and had to be re-designed.

Once that was sorted out it was time for a test ride. Impromptu as always the two battery packs went into his trouser pockets (don't try this at home) and were connected via a long Y-cable to the motor controller. He's currently in the process of building a new battery pack from used Makita battery packs with 18650 cells.

Check out the video of the first test drive:
<iframe src="//www.youtube.com/embed/yXr9Mk43Utw?feature=player_embedded" height="360" width="640" allowfullscreen="" frameborder="0"></iframe>

If you're planning to built your own e-something, Maedler has a nice [online calculator for dimensioning the drive train](http://smarthost.maedler.de/maedlertools/maedler.html).

For this build the no-load RPM was measured at 1285 rpm which would yield a theoretical maximum speed of 26.85 km/h. Actual measured speed was 22 km/h using 6S Li-Po cells or around 25 km/h using 7S cells.
Mind you, on a kickboard this is scary fast and quite literally brings tears to your eyes from the cold winter wind draft.

There's also a [more detailed build log](http://endless-sphere.com/forums/viewtopic.php?f=35&amp;t=56030) over at the Endless Sphere forum and [a whole bunch of extra photos](https://picasaweb.google.com/115792422633543473919/KickboardK2?authkey=Gv1sRgCKHe3YqeseKvrwE#).