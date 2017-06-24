---
title: shackspace goes nucular
url: 5323.html
id: 5323
categories:
  - Allgemein
date: 2016-01-18 21:15:16
tags:
---

![](https://opentoadventure.files.wordpress.com/2010/09/nucular1.jpg?w=630)
<div class="figure">

[For our english speaking readers.](https://translate.google.com/translate?hl=en&amp;sl=de&amp;tl=en&amp;u=http%3A%2F%2Fshackspace.de%2F%3Fp%3D5323)

Die Idee einen eigenen Radioaktivitätsmesser im shack aufzubauen, kam erneut auf, als zum mindestens 2\. Mal ein atomarer GAU - diesmal in Fukushima die Welt (für kurze Zeit) wachrüttelte.

</div>

## Projekte und Produkte

Eine Sichtungsphase bezüglich käuflich erwerbbarer Geigerzähler, deren Community und Datenaufbereitung ergab folgende aktive Projekte:[![](https://lh3.googleusercontent.com/-O_t-imX9fG0/Vp0xxmPrmKI/AAAAAAAA4W0/TzrgiF6Vm0s/s800-Ic42/nucular_simpsons.jpg)](https://lh3.googleusercontent.com/-O_t-imX9fG0/Vp0xxmPrmKI/AAAAAAAA4W0/TzrgiF6Vm0s/s800-Ic42/nucular_simpsons.jpg)

*   [Radiation Watch](http://www.radiation-watch.co.uk/) - 99 Pfund
*   [Radioactive@Home](http://radioactiveathome.org/de/) - Projekt setzt auf Boinc auf. Ein teilbestücktes Kit kostet ca 25 Euro. Radiation Kits zum Selbstbau können über das Forum bestellt werden.
*   [uradmonitor](http://www.uradmonitor.com/) - Ähnliches Projekt wie radioactive@home, nur, dass die Geräte vollständig verbaut ankommen - zum Projektstart konnte man keine Units kaufen
*   [Radmon.org](http://radmon.org/) - Units waren zum Zeitpunkt ausverkauft ca 200$
Zusätzlich haben wir folgende Hardware Units im Internet ohne zugehöriges Projekt gefunden welche unsere Anforderungen (USB) erfüllen:

*   [Geigerzähler in China-Qualität aus Aliexpress](http://www.aliexpress.com/item/Digital-Geiger-counter-Nuclear-radiation-detector-Radioactive-particles-detector-Nokia-Mini-USB-Cable-BNC-Cable-GM/1766819813.html) - 110 Dollar + Steuern
*   [Geigerzähler von GQ Electronics](http://www.gqelectronicsllc.com/comersus/store/comersus_viewItem.asp?idProduct=4570) - 90 Euro
*   [Sparkfun Geiger Counter](https://www.sparkfun.com/products/11345) - 149.00 Dollar
*   [Imagesco Geiger Counter](http://www.imagesco.com/geiger/geiger-counter-kits.html) - 65 dollar (selbst löten, kein Display)
*   [bGeigie Nano](http://www.amazon.com/gp/product/B00IT6OUG2/ref=krebs-21) - 350 Euro

## Projektstart

exco hat das Projekt _offiziell_ auf der Shackspace Mailingliste als Crowdfunding Projekt gestartet und nach einer Woche sind von den Unterstützern und nach etwas an Diskussion 230 virtuelle Euro zusammengekommen (danke an , makefu, exco, timm, optimizr, karlo, hornig, uebner). Nun, da das Geld zusammengekommen war konnte da Projekt beginnen.

exco hat  im Sinne des Bildungsauftrages (Wissen vermitteln und so) des shackspace e.V. zwei Geigerzähler vom radioactive@home Projekt ausgesucht und diese über das [Forum bestellt](http://radioactiveathome.org/boinc/forum_thread.php?id=460).

[caption id="" align="aligncenter" width="640"]![jungfräuliches radiation@home Kit](https://lh3.googleusercontent.com/-JIq_WCrFAQg/VNbIQODwRMI/AAAAAAAAnPg/qBsLrRvHTMg/s640/IMG_20150203_151104.jpg) jungfräuliches radiation@home kit[/caption]

## Assembly

Das Kit beinhaltet eine eingemessene/kalibrierte Röhre (Geiger-Müller-Zählrohr), den Microcontroller und die Platine mit den bestückten Hochspannungskomponenten. Gefehlt haben Niederspannungskondensatoren, Widerstände und weitere "_Gewürze"_. Leider lag vom Radioactive@Home Projekt die Liste nur als PDF und nicht als Einkaufsliste bei einem Elektronikanbieter vor - entsprechend war der erste Schritt alle Teile bei Mouser zusammenzuklicken ([Mouser BOM](https://github.com/excogitation/radioactive-at-home)). Diese Arbeit will man wirklich nur einmal machen!

Nachdem die Kits und die zusätzlichen Teile angekommen sind wurden beide Geigerzähler von Alexander und Karlo zusammengelötet.
<div class="figure">

[caption id="" align="aligncenter" width="640"]![Lötsession](https://blog.shackspace.de/wiki/lib/exe/fetch.php?tok=f77c88&amp;media=https%3A%2F%2Flh4.googleusercontent.com%2F--w82kUm5Ki0%2FVNbIH5L-vyI%2FAAAAAAAAnPU%2FRdz2OUKX1nA%2Fs640%2FIMG_20150203_211559.jpg) Lötsession[/caption]

Zusätzlich haben wir von Thomas als Sachspende statt harter Währung einen weiteren Geigerzähler inklusive Testmaterial für das Projekt bekommen.

</div>

## Deployment

Der Geigerzähler wurde im Rechenzentrum oberhalb des Server Racks aufgestellt und das USB-Kabel ist an den Virtual-Machine Host gesteckt und von dort an die von makefu aufgesetzte/verwaltete Nukular VM weitergeletet wo eine Boinc Installation dem radioactive@home Projekt die Daten überträgt. Die Tweaks, die für die Installation unter Archlinux notwendig waren können auf [diesem github gist](https://gist.github.com/makefu/f7d7798247fedbb4667e) durchgesehen werden.

Nach Anbindung an das BOINC Projekt werden die [im shack gesammelten Daten](http://radioactiveathome.org/scripts/graph/drawweekdotted.php?hostid=14364 )) entsprechend in der Radioactive@home website angezeigt: ![](http://radioactiveathome.org/scripts/graph/drawweekdotted.php?hostid=14364)

Von einer anderen Virtuellen Maschine (Heidi) werden diese Daten erneut geladen und in eine Time-Series Database geschrieben um am Ende schicke Graphen (in schwarz) für den [Kiosk](https://blog.shackspace.de/wiki/doku.php?id=project:anytouchkiosk) zu generieren:

[![](https://lh3.googleusercontent.com/-3EmSGAoi850/Vp1GcxmixyI/AAAAAAAA4YM/WfZEca3cZro/s800-Ic42/IMG_20160118_205933.jpg)](https://lh3.googleusercontent.com/-3EmSGAoi850/Vp1GcxmixyI/AAAAAAAA4YM/WfZEca3cZro/s800-Ic42/IMG_20160118_205933.jpg)

<span class="author-a-z83zuclf0sz74zz71zyz85zz87zsdz74z9">Die Messwerte werden zusätzlich von dem Shackspace Monitoring überwacht und bei fehlenden Daten sowie bei Überschreitung des radioaktiven Grenzwertes (0.4 µSv/h) wird eine Alarmierungs-Email versandt, Der [Source Code der Plugins](https://github.com/makefu/nagios-radioactiveathome-plugins)</span><span class="author-a-z83zuclf0sz74zz71zyz85zz87zsdz74z9"> kann auf Github heruntergeladen werden.</span>

## Offene Aufgaben

Parallel zum Aufbau haben wir versucht die verschiedenen, in der Findungsphase ausfindig gemachten, Projekte miteinander zu verkuppeln. In dem Fall radmon + radioactive@home war dies sogar sehr erfolgreich und nun beinhalten beide Communityprojekte jeweils die Daten des anderen Projekts [Link zum Forum](http://radioactiveathome.org/boinc/forum_thread.php?id=470).

<span class="author-a-z85zz86zz68zz69zq7z86zz89z5dx1z72zz71zqw">Als </span><span class="author-a-z83zuclf0sz74zz71zyz85zz87zsdz74z9">o</span><span class="author-a-z85zz86zz68zz69zq7z86zz89z5dx1z72zz71zqw">ffene Punkt</span><span class="author-a-z83zuclf0sz74zz71zyz85zz87zsdz74z9">en</span><span class="author-a-z85zz86zz68zz69zq7z86zz89z5dx1z72zz71zqw"> bleib</span><span class="author-a-z83zuclf0sz74zz71zyz85zz87zsdz74z9">en</span><span class="author-a-z85zz86zz68zz69zq7z86zz89z5dx1z72zz71zqw"> dem αβγ-Geigerzähler ein Gehäuse zu <del>lasern</del></span><span class="author-a-z83zuclf0sz74zz71zyz85zz87zsdz74z9"> bauen und ein I2C Display an den 2\. Geigerzähler zu löten, sowie dessen USB-Konnektivitätsprobleme zu debuggen.</span>

## Lessons Learned

### Wenn ihr Hardware-Community Projekte starten solltet bedenkt:

*   bereitet eine [1clickbom](http://1clickbom.com/) kompatible Teileliste vor
*   Werft den aktuelle Quellcode + Build Config auf Github oder eine Vergleichbare Plattform  -&gt; Source Änderungen können nachvollzogen werden und Leute können bei Bedarf einfacher an der Entwicklung Teil haben - Fixes beisteuern
*   Bereitet eine einzige Landing Page für das Projekt vor die beschreibt wie man sein neues Kit zum laufen bekommt
*   Benuzt ein Wiki!
*   yahoo (wer?) pipes gibt es nicht mehr  - es wurde 3 Tage nachdem die Datenabholung + Konvertierung realisiert war abgekündigt
Diese Dinge helfen dabei neuen Usern nicht erst durch unzählige Mails/Forum Posts zu suchen und am Ende doch die Entwickler (Euch!) fragen zu müssen.

### <span class="author-a-z83zuclf0sz74zz71zyz85zz87zsdz74z9">Eigene Lessons Learned:</span>

*   <span class="author-a-z83zuclf0sz74zz71zyz85zz87zsdz74z9"> Zurückblickend würden wir nächstes Mal nach dem Spendenaufruf einfach ein fertiges Gerät kaufen - es war uns nicht bewusst, wie viel Arbeit ein vergleichsweise einfaches Projekt nach sich ziehen kann. Der Bau des Radioactive@home Kits hat Schmerzen bereitet (BOM zusammensuchen, Nach-Löt-Debugging, debugging, debugging). Die Software-Installation und Einbindung in das Projekt ging vergleichsweise einfach.
</span>
*   [coderot](https://blog.shackspace.de/wiki/doku.php?id=thesaurus&amp;s[]=coderot#r) is real
*   <span class="author-a-z83zuclf0sz74zz71zyz85zz87zsdz74z9">Die Vernetzung der beiden Projekte **radmon** und **radioactive@home** hat erstaunlich gut funktioniert (einfach Mal über den Tellerrand blicken) und es ist sogar eine konsolidierung der Datensätze passiert - ohne weiteres Engagement.  A+++ (5/5) - would [hubel](https://blog.shackspace.de/wiki/doku.php?id=thesaurus&amp;s[]=hubeln#h) again --makefu.</span>

## Externe Links

*   [Shackspace Wiki Geigercounter](https://blog.shackspace.de/wiki/doku.php?id=project:nucular&amp;s[]=geiger)
*   [Firmware Source](http://dl.dropboxusercontent.com/u/27006170/Radioactive/KIT_III/Radioactive_V2.61.7z)
[projekt owners](https://blog.shackspace.de/wiki/doku.php?id=thesaurus&amp;s[]=project&amp;s[]=owner#p): exco, makefu

Aufruf: [Dokumentiere deine Projekte online](https://blog.shackspace.de/wiki/doku.php?id=project:writing_it_down_makes_it_science)! (nicht nur bei [HHH](https://hackaday.com/2013/10/07/hackaday-hackerspace-henchmen-equals-free-stuff-for-you/))