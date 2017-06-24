---
title: Tüftler umgeht DHL Packstation Sicherheitsmaßnahme
url: 2219.html
id: 2219
categories:
  - Allgemein
date: 2011-06-29 13:22:41
tags:
---

Ein Tüftler aus dem Umfeld des Stuttgarter Hackerspaces shackspace zeigte an den vergangenen beiden Wochenenden, wie mit einfachsten Mitteln ein kürzlich eingeführtes Sicherheitsmerkmal gegen [Phishing](http://de.wikipedia.org/wiki/Phishing) von DHL Packstation Kundendaten ausgehebelt werden kann.

Die [DHL Packstation](http://www.dhl.de/content/de/de/paket/privatkunden/packstation.html) erlaubt es mit DHL zugestellte Pakete zu jeder Tageszeit an einer Packstation abzuholen, auch ausserhalb der Öffnungszeiten von Postfilialen.  Lange Zeit war es möglich sich an der Packstation durch Eingabe seiner Kundennummer und einer PIN anzumelden.  Die "Kundenkarte" war optional.  Vor Kurzem machte DHL die Benutzung der Kundenkarte zur Pflicht.  Laut DHL Packstation Kundenservice sei dies eine Gegemaßnahme gegen [Phishing](http://de.wikipedia.org/wiki/Phishing), dem Ausspionieren und Kundennummer und PIN.  Kriminielle waren allen Anscheins nach über Phishing-Angriffe an die Kundennummern und PINs von DHL Packstation Kunden gelangt und konnten so möglicher Weise auf von diesen bestellte Pakete zugreifen.

Auf der Packstation Kundenkarte sind neben der Kundennummer auch der Name und eine weitere Zahl unbekannter Natur hinterlegt, wobei erste Versuche ergaben, dass lediglich die Kundennummer von Relevanz ist.  Alle Daten sind in dem für Magnetkarten unterschiedlichster Natur standartisierten Klartextformat abgelegt.   Mit geringstem technischen und finanziellen Aufwand (150 EUR) ist es möglich, beliebige Packstation Kundenkarten zu erzeugen.  Da die Kundennummer Teil der Adresse ist, an welche Kunden ihre Pakete zustellen lassen, ist es ein Leichtes an diese Nummer zu gelangen.  An die geheime PIN können kriminelle Elemente über den gleichen Weg wie zuvor gelangen, eine Phishing-Attacke.

Der Angriff, dokumentiert im Rahmen eines Vortrages ([Folien](https://github.com/shackspace/presentations/blob/b824ebbb9ce85d20438a024352b45d1cb6a0145e/TDOT2/talks/hackstation__hadez.odp)) gehalten am [Tag der offenen Tür](https://blog.shackspace.de/wiki/doku.php?id=party:tdot2) des [shackspace](https://blog.shackspace.de/) sowie auf der [10\. Gulaschprogrammiernacht](https://entropia.de/GPN11) des [Entropia e.V.](http://entropia.de/) in Karlsruhe, zeigt auf, wie sich Packstation Kunden nun in falscher Sicherheit währen.  Durch die von DHL eingeleitete Maßnahme, die Karte zur Pflicht bei der Anmeldung zu machen, wurde das eigentliche Problem nicht behoben.  Magnetkarten stellen kein Sicherheitsmerkmal dar, die Technik dahinter ist jedem zugänglich und für Kriminelle keinerlei Hürde.

Kunden der DHL Packstation sei nahegelegt auf keinen Fall online ihre PIN anzugeben.  Falls dies bereits geschehen ist, kann die PIN jederzeit über das Onlineportal der Packstation (packstation.de) geändert werden.