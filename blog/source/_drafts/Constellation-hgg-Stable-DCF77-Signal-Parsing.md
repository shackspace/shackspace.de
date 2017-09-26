---
title: 'Constellation/hgg: Stable DCF77 Signal Parsing'
url: 2506.html
id: 2506
categories:
  - announcements
tags:
---

After [a really stupid setback](https://twitter.com/hdznrrd/status/131064143464775680) courtesy of Conrad Electronic this Monday @[rel0c8](https://twitter.com/rel0c8) and @[hdznrrd](https://twitter.com/hdznrrd) set out to build a [time source](https://blog.shackspace.de/wiki/doku.php?id=project:hgg:timing_and_synchronization) for the Constellation distributed groundstation project.

Existing code was discarded partly because we can and mostly because what we found didn't suit our requirements: high stability, noise tolerance, as well as getting an in-depth understanding of how it worked.

The receiver is a [DCF module sold by Conrad](http://www.conrad.de/ce/de/product/641138/DCF-EMPFAENGERPLATINE/SHOP_AREA_17348&amp;promotionareaSearchDetail=005) connected to an Arduino board.  The [firmware](https://github.com/shackspace/hgg/tree/master/hardware/dcf77) is still a work in progress but first tests showed good and stable results.