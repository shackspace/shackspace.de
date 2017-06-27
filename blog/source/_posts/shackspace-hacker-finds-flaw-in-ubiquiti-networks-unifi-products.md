---
title: shackspace Hacker finds Flaw in Ubiquiti Networks' UniFi Products
url: 4340.html
id: 4340
categories:
  - Allgemein
date: 2013-10-23 10:27:38
tags:
---

[![ubnt_logo_basic_flat_color](https://blog.shackspace.de/wp-content/uploads/2013/10/ubnt_logo_basic_flat_color.png)](https://blog.shackspace.de/wp-content/uploads/2013/10/ubnt_logo_basic_flat_color.png)Over a year ago shackspace migrated its Wifi infrastructure to an all-Ubiquiti setup because our previous setup made up of consumer grade TP-Link access points was neither stable nor could it cope with enough clients to cover 30+ visitors to the space. We've decided to pick up a few UniFi access points and were really happy with the ease of installation as well as management capabilities.

However, this wouldn't be a hackerspace if there wasn't someone applying a bit more scrutiny than usual to the new toys.
In this case it was shackspace hacker [momo](https://twitter.com/momorientes) who soon discovered a serious flaw in the UniFi controller management web interface.

After following the best practice of [responsible disclosure](http://en.wikipedia.org/wiki/Responsible_disclosure), now, a year later, momo can talk about the details behind the issue.
A fix for the bug discovered has already made its way into updates quite a while ago so if you kept your infrastructure up to date, you're already safe from that particular bug.

The bug in question allowed an attacker to forge a special DHCP hostname (e.g. containing HTML and Javascript code) and inject this information into the UniFi controller web interface where it was then executed.

The issue was assigned [CVE](http://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures)-2013-3572 and was just now released. If you're still running UniFi 2.3.5 or older, now's a good time to update ;)

*   [<span style="line-height: 13px;">Ubiquiti Security Advisory</span>](https://community.ubnt.com/t5/UniFi/Security-Advisory-CVE-2013-3572/m-p/601047#U601047)
*   [CVE-2013-3572](http://dl.ubnt.com/unifi/static/cve-2013-3572.html)