---
title: MacBook Air 11" und wie Apple Service Partner arbeiten
url: 2275.html
id: 2275
categories:
  - Allgemein
date: 2011-08-08 02:20:15
tags:
---

Ich bin Fabi - Samuirai - 20 Jahre alt, und ich werde immer wieder über die Dinge die ich im shack tue bloggen.

## TL;DR

Mein MacBook Air 2010 11" mit 4GB RAM und einer 128 SSD Platte hat Orangensaft getrunken. Ein Apple Service Partner hat einen Kostenvoranschlag für die Versicherung gemacht, in dem sie für über 1200€ Teile auswechseln. Nach einem Abend im shack hat sich herausgestellt, dass nur ein Teil ausgetauscht hätte werden müssen.

## **Die lange Version mit Bildern**

Ich hatte noch nie einen Mac und wollte es mal auspobieren. Also habe ich mir das damals neue MacBook Air 2010 11" mit 4GB RAM und einer 128 SSD Platte gekauft. Vor ca. 3 Monaten hat ein Mitstudent versehentlich Orangesaft drüber geschüttet - schnell Batterie rausnehmen ist beim MacBook Air nicht wirklich möglich. Nachdem ich es über Nacht habe trocknen lassen, habe ich es wieder eingeschaltet. Es hat ein paar Minuten underbar funktioniert, aber dann aufenmal hat das Touchpad und die Tastatur gesponnen. Danach ist es unkontrolliert hoch- und runtergefahren, bis dann garnichts mehr gieng. Also bin ich zu einem Apple Service Partner in Stuttgart-Vaihingen und habe einen Kostenvoranschlag für die Versicherung machen lassen. Dabei kam man auf über 1200€ für eine Reparatur (Neupreis war ca. 1400€ - Studentenpreis ca. 1200€).
<!--more-->Ausgetauscht werden sollen hätte:

*   Top Case mit Touchpad und Keyboard
*   Logic Board 1.6GHz, 4GB Ram
*   I/O Board
*   Fan
*   Battery
Ganz so cool fand ich und die Versicherung das nicht. Daher haben die noch eine eigene Firma für ein Gutachten beauftragt, die einen Zeitwert geschätzt haben und für Zeitwert+200€+mein kaputtes MacBook hätte ich ein Neues bekommen - das wars mir aber nicht wert. Geld genommen, neues bestellt, es wurde geliefert, am nächsten Tag wurde die neue 2011 Version vorgestellt _fuuuuuuuuuuuuuuuuu_. Also zurück geschickt, nun warte ich auf das Geld und dann kaufe ich die neue Version.

Aber jetzt wieder zum alten MacBook Air. Meine Hoffnung war ja, dass es nach putzen einfach so wieder funktioniert - hat es leider nicht. Ich habe mir dann in China das benötigte Werkzeug bestellt und nach over NYAN thousand Wochen, das Teil endlich im shack auseinander genommen.
![](https://blog.shackspace.de/wp-content/uploads/2011/08/DSC00251-300x168.jpg "DSC00251")

Sofort ist mir weißes Zeug auf der Platine, die für das Touchpad und Keyboard zuständig ist, aufgefallen. Jocki hat vermutet, dass sich da ein Bauteil schön heiß verabschiedet hat. Außerdem war fast überall Grünspan.
[![](https://blog.shackspace.de/wp-content/uploads/2011/08/DSC00252-300x168.jpg "DSC00252")](https://blog.shackspace.de/wp-content/uploads/2011/08/DSC00252.jpg)

Obwohl die Hoffnung langsam schwand, habe ich angefangen die Einzelnen Teile mit Isopropanol zu säubern.
[![](https://blog.shackspace.de/wp-content/uploads/2011/08/DSC00256-300x168.jpg "DSC00256")](https://blog.shackspace.de/wp-content/uploads/2011/08/DSC00256.jpg)

Dann habe ich alles wieder zusammengebaut und gehofft, dass es nun geht. Aber das Ding reagiert einfach auf nichts. Dann sind mir Federstifte aufgefallen, und ich dachte, dass die vllt checken ob der Boden festgeschraubt ist. Also habe ich mit ein paar Klemmen, alle Stifte am Gehäuse befestigt. Aber es ging trotzdem nicht.
[![](https://blog.shackspace.de/wp-content/uploads/2011/08/DSC00261-300x168.jpg "DSC00261")](https://blog.shackspace.de/wp-content/uploads/2011/08/DSC00261.jpg)

Meine Vermutung war immer noch, dass alles Andere noch funktioniert. Also muss ich das Teil irgendwie ohne die Tastatur anschalten. Etwas Googeln hat erbracht, dass alte MacBooks auf ihrem Logic Board zwei Pads haben, die man dazu überbrücken muss. nach etwas rumsuchen auf dem LogicBoard ist mir auch die schwarze Schrift PWRBTN (Power Button) auf der schwarzen Platine aufgefallen. Bei dieser Schrift befindet sich ein Widerstand. Jocki hat vermutet, dass das der Schlüssel sein könnte. Ich habe also dann mal mit einem Multimeter gemessen, und das ergab +5V. Also habe ich versucht das auf Masse zu ziehen. Aber das hat nichts bewirkt.
[![](https://blog.shackspace.de/wp-content/uploads/2011/08/DSC00260-300x168.jpg "DSC00260")](https://blog.shackspace.de/wp-content/uploads/2011/08/DSC00260.jpg)

Dann habe ich mir überlegt, dass sich auf der Unterseite noch was befinden könnte. Da ich das Board aber schon wieder festgeschraubt hatte, habe ich im Internet nach einem Bild von unten gesucht. Und tatsächlich steht dort nochmal PWRBTN und direkt daneben zwei Pads. Auf der Oberseite sind dass dann die Pads im gelben Kreis.[
![](https://blog.shackspace.de/wp-content/uploads/2011/08/DSC00265-300x168.jpg "DSC00265")](https://blog.shackspace.de/wp-content/uploads/2011/08/DSC00265.jpg)

Ans Netz angeschlossen. Überbrückt und SO MUCH WIN! Es bootet einfach :D
[![](https://blog.shackspace.de/wp-content/uploads/2011/08/DSC00267-300x168.jpg "DSC00267")](https://blog.shackspace.de/wp-content/uploads/2011/08/DSC00267.jpg)

Also habe ich Alles mal wieder angeschlossen (Lautsprecher, Keyboard, ...) und nochmal überbrückt. Diesmal habe ich ihn komplett starten lassen. Es funktioniert wirklich noch :D
[![](https://blog.shackspace.de/wp-content/uploads/2011/08/DSC00270-300x168.jpg "DSC00270")](https://blog.shackspace.de/wp-content/uploads/2011/08/DSC00270.jpg)

Dann habe ich mal das Touchpad und die Tastatur ausprobiert. Touchpad funktioniert perfekt - mit Multitouch und allem. Nur das Keyboard zickt etwas. Die Leertaste produziert ein Apostroph, die rechte CMD Taste und die Power Off Taste tuen gar nicht usw. Da ist unglaublich interessant, dass die Platine so zerstört aussah, aber doch noch so gut funktioniert. ich vermute daher, dass die Folie unter den Tasten was abbekommen hat und jetzt die Tasten sich teilweise falsch verhalten.
[![](https://blog.shackspace.de/wp-content/uploads/2011/08/DSC00272-300x168.jpg "DSC00272")](https://blog.shackspace.de/wp-content/uploads/2011/08/DSC00272.jpg)

Hier noch ein Bild vom Chaos.[
![](https://blog.shackspace.de/wp-content/uploads/2011/08/DSC00274-300x168.jpg "DSC00274")](https://blog.shackspace.de/wp-content/uploads/2011/08/DSC00274.jpg)

## Fazit

Jetzt suche ich ein Keyboard Ersatz, damit mein MacBook wieder funktioniert. Außerdem habe ich dem Apple Service Partner meine Geschichte per Mail geschrieben und gleich noch gefragt, wieso sie die Teile nicht wirklich testen, sondern einfach mal pauschal Teile für 1200€ auswechseln wollen. Bin mal gespannt, was die dazu sagen. Für einen Kostenvoranschlag für 75€ kann man imo verlangen, sich 30-45min damit zu beschäftigen und man schnell die Teile durchtestet.

Viele Grüße,
Samu