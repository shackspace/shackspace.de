---
title: Arcade-o-mat
url: 5198.html
id: 5198
categories:
  - Allgemein
date: 2016-02-10 01:11:09
tags:
---

<article class="document-article">

## Project: Arcade-o-Mat

### Early 2012

The story starts with resident hacker Micha who found 2 arcade cabs sitting next to some “Sperrmüll”.
He went the proper route - asking the shack plenum - instead of just dropping some “still useful stuff” (aka: a pile of rubbish).

The story gets quite funny with a police patrol, two uniformed policemen in total, joining Micha and meeting up with the whole libanese familiy of the owner to verify the origin of the cabs. Micha even knows the Pizza place where the two arcade cabs previously resided.

Next up he starts hacking one of the cabs - and as also happens a lot of the time - the two cabs start gathering dust for almost a year.

### Sometime around 2013

Long absent hacker wookie proposes to get one of the boxes up and running and makefu and exco agree to help get it done.

![wooki](https://lh3.googleusercontent.com/-RLUyqzLLYXA/VJa8_vA3QaI/AAAAAAAA3vg/5GR-Ka2A3Ak/s640-Ic42/IMG_20130809_000419.jpg)

exco has acces to cnc machines and designs and machines the button panel from aluminum for the exact fit into the cabinet.

![panel](https://lh3.googleusercontent.com/-sW3cL2NdwlY/UiTXdrlqPzI/AAAAAAAA3u4/0-ecdJGW6C4/s640-Ic42/IMG_20130724_205155.jpg)
wookie orders the buttons/joysticks and makfu starts with an arch install on the netbook destined to be at the heart of the cab running some mame system.
If you want to machine the button becel for your hellomat you can build on [this file](https://github.com/shackspace/arcade_cabinet/blob/master/CAD/buttonbezel_shouldhavedoneitlikethis.dxf).
(lasercutting it from 3mm acrylic is probably a lot easier/faster/cheaper than machining it from aluminum)

![another picture](https://lh3.googleusercontent.com/-sdXf1CzvFpM/VJa9NioPpMI/AAAAAAAA3vI/sFHb1tyGFv0/s640-Ic42/IMG_20131117_211756.jpg)

### November 2013

The [Game Controller Manager](http://www.aliexpress.com/item/Arcade-parts-Bundles-kit-With-Joystick-Pushbutton-Microswitch-2-player-USB-to-Jamme-board-to-Build/642498707.html?af=130085010) is the cheapest from our favourite china retailer aliexpress.
Unfortunately the controller didn’t work out of the box for some software reason and again a lot of effort had to be spent to build a custom kernel.

We decided to put mame at the cabs heart and not to build on dedicated cab hardware and thought the most convenient solution would be to use a laptop as we would only need a VGA to something converter to hook up to the tube.

Thus we set out to build [this adapter](http://people.kth.se/~pontusf/vga2scart.html).

### VGA -&gt; Scart adapter

Timm joined in and etched the board, after exco organized all the parts and Phrewfuf ended up soldering it.

![more pics](https://lh3.googleusercontent.com/-sXPOldeO5Rs/VJa86zxVFkI/AAAAAAAAyKg/txCgjtsNTeg/s640-Ic42/IMG_20130714_013325.jpg)

Unfortunately we couldn’t get it to work (spending already 2+ afternoons on it) and because we couldn’t bother to invest any more time we ended up buying a [VGA -&gt; Scart adapter](http://www.amazon.de/Ligawo-WIDESCREEN-Unterst%C3%BCtzung-Skalierung-1920x1080p/dp/B0028ACRNI/tag=krebsco-21).

![cables](https://lh3.googleusercontent.com/-2uWsqH5bzmM/UiTWcAUMAsI/AAAAAAAA3vY/X8ALqhpiflw/s640-Ic42/IMG_20130808_220020.jpg)

Next exco bought a suitable Sony Trinitron 21” tube TV off of quoka. A bigger tube won’t fit ;-)
We picked it up while going to the movies - phrewfuf as the driver and since it didn’t fit in his Subaru’s boot -
ended up being transported on Nadka’s lap - riding shotgun.

Wookie’s drive and Timm’s help as well as exco’s attention to the details ended up in a well mounted tv pcb and the tube in place.

![vacuuming](https://lh3.googleusercontent.com/-_r-P9X-GS2s/VJa9CqAAZtI/AAAAAAAAyKg/tDKyEOlR0wA/s640-Ic42/IMG_20130828_231022%2525282%252529.jpg)

In between Jules, roy and wookie decided it was a good idea to replace the laptop with a personal computer. Spoiler: it was not.

Makefu was not amused to have to fix an arch installation again.
Well, at least the controller seemed to be working ... not!
Time to dig for the [custom kernel makefu built](https://github.com/shackspace/arcade_cabinet/tree/linux_kernel) for the laptop on the laptop. At least the installation was smooth thanks to flawless documentation. We are still looking for it under the couch. It has to be somewhere!

Sometimes you have to move 2 steps back, right?

As we were having difficulties with the VGA -&gt; Scart adapter to give a clear picture.
Trying for hours with modeline magic - exco gave up on this approach and decided to just buy a pci-e graphics card with dedicated composite output.
By now - 2016 - we know [how modelines and old monitors work](https://blog.shackspace.de/wiki/doku.php?id=project:arcade-cabs#modeline_foo).

The bonus hack which makes the TV run in AV-mode on powering the TV.

![more cables](https://lh3.googleusercontent.com/-sPIJR8XAcLg/VJa9KObbj6I/AAAAAAAA3tA/wDpaqjHNngw/s640-Ic42/IMG_20131028_204647.jpg)

### MAME

Our fancy Arcade now was in need of a fancy interface for choosing one of the 900 mame games.
The interface of choice quickly became Wah!cade because it ... well worked at least. A lot of abandoned projects linger around the net. Wah!cade is actually still supported - [Original Page](http://www.anti-particle.com/wahcade.shtml).

![cabs](https://lh3.googleusercontent.com/-7B3VUpod620/Vo8HYbY6L5I/AAAAAAAA3vw/DoaLXzNDCy8/s640-Ic42/IMG_20131117_211756.jpg)

You can get ALL THE GAMES at [archive.org](https://archive.org/details/messmame) but be aware that some of the games still hold copyright even though they are considered _“abandonware”_.

![another img](http://lh3.googleusercontent.com/-aOBYs1ohwHg/VjAC6apSLlI/AAAAAAAAz74/3ReaFB6be-s/s640-Ic42/IMG_20151024_183446.jpg)

^ some of the games we have in our own phyiscal library.

### Web Interface

Wah!cade is quite a nice piece of software but managing lists of deployed games is not that easy. At first makefu used a simple shell script to deploy new games but as more people wanted to have new games added the original, high-maintenance shell-script didn’t scale for this use case anymore.

That’s when makefu and exco started building a web interface for easy game management in late august 2015\. A month (or around 8 evenings of work) later [arcadeomat.shack](http://arcadeomat.shack/) (shackspace intranet only) is up and running.

You can get the sources from [github/ultimate-arcadegames-webserver](https://github.com/makefu/ultimate-arcadegames-webserver)

![pic?](https://lh3.googleusercontent.com/-tppaaGRqg3Q/Vi_2d7p8lkI/AAAAAAAA3tw/MWcFBlwxp7c/s640-Ic42/Screenshot%252520from%2525202015-10-27%25252023-07-34.png)

What unfortunately happens a lot of the time - projects don’t get finished.
There is a fine line not to let it become “work”.
As an alternative - treat it as a process (that in contrast to a project: doesn’t have an end!)
You still have to document your doings so that you/others can benefit from the experience.

Also - [writing it down makes it science](https://blog.shackspace.de/wiki/doku.php?id=project:writing_it_down_makes_it_science)!

[project owners](https://blog.shackspace.de/wiki/doku.php?id=thesaurus#p): makefu, exco

## 2do

*   <del>wahcade 720x576 layout</del> impro fix
*   custom shack arcade artwork - to replace:
![pic?](https://lh3.googleusercontent.com/-b07YSde_K5M/Vrp8ypI2BbI/AAAAAAAA5CU/xBIZRCY95UQ/s640-Ic42/2016-02-09.jpg)
</article>