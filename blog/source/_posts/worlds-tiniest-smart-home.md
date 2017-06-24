---
title: world's tiniest smart home
url: 5169.html
id: 5169
categories:
  - Projekte
date: 2015-09-23 01:58:43
tags:
---

<div id="magicdomid1750" class="ace-line"></div>
<div id="magicdomid2302" class="ace-line">
<div id="magicdomid1750" class="ace-line"></div>
<div id="magicdomid2971" class="ace-line"><span class="author-a-z88zz83zz68zz66zz73zz90z2ez79zybrz80zaz76z9">[exco](https://excogitation.de/) and [makefu](http://euer.krebsco.de/)</span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">'s latest hacksession started out as a just for fun one evening hack </span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">and (after some more evenings) now turned into this uber smart home with solar and everything.</span></div>
<div class="ace-line">
<div id="magicdomid2688" class="ace-line"><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">We</span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l"> </span><span class="author-a-z88zz83zz68zz66zz73zz90z2ez79zybrz80zaz76z9">claim the title </span>**<span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">"world's </span><span class="author-a-z88zz83zz68zz66zz73zz90z2ez79zybrz80zaz76z9">smallest 'smart home'"</span>**<span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">(for ants) and challenge you to take it from us.</span></div>
<div class="ace-line"></div>
<div id="magicdomid2702" class="ace-line"><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">The project started out by upgrading the shackspace community hand-brick-layed (ttb, momo, phrewfuf, exco) house to a smart home by </span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">installing a small I2C dipslay (0.96" ) to show DNS and TCP delay of the shackspaces internet (WiFi) with an ESP8266 </span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">to evaluate the shack's "enterprise" internet setup.</span></div>
</div>
<div id="magicdomid2323" class="ace-line">[![](https://lh3.googleusercontent.com/-t2Vn_Z-lmgA/VgHOBSSkS1I/AAAAAAAACX8/gep3J6tYg60/s600-Ic42/IMG_20150922_235024.jpg)](https://lh3.googleusercontent.com/-t2Vn_Z-lmgA/VgHOBSSkS1I/AAAAAAAACX8/gep3J6tYg60/s600-Ic42/IMG_20150922_235024.jpg)</div>
<div class="ace-line"></div>
<div id="magicdomid1053" class="ace-line"><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">After adding a temperature and humidity sensor ([DHT11](http://s.click.aliexpress.com/e/UVrRrJM3B?af=127335290)) </span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">makefu now also want's to claim </span><span class="author-a-z88zz83zz68zz66zz73zz90z2ez79zybrz80zaz76z9">"**The most smart**</span>**<span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">™</span>**<span class="author-a-z88zz83zz68zz66zz73zz90z2ez79zybrz80zaz76z9">** per m²**" </span><span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">with a </span><span class="author-a-z88zz83zz68zz66zz73zz90z2ez79zybrz80zaz76z9">total of </span><span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">1066</span> <span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">[smarts/m²].</span></div>
<div id="magicdomid641" class="ace-line"><span class="author-a-z88zz83zz68zz66zz73zz90z2ez79zybrz80zaz76z9">The house is 5cm in width and 15cm in length which is a total of</span> <span class="author-a-z88zz83zz68zz66zz73zz90z2ez79zybrz80zaz76z9">0,0075 m²</span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">, </span><span class="author-a-z88zz83zz68zz66zz73zz90z2ez79zybrz80zaz76z9">equipped with an ESP8266 clocked at 160mhz</span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l"> and </span><span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">8</span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l"> smarts:</span></div>

*   web server
*   status display
*   rgb lighting
*   temperature / humidity sensor
*   smart door / smart lock
*   wind turbine
*   internet delay measurement

### <span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">Web Server</span>

### 

[embed]https://www.youtube.com/watch?v=UcO_PS7-kX8[/embed]

&nbsp;

<span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">The first version of the website on a mobile looked like (image left):![](https://lh3.googleusercontent.com/-PSGP0jFBLNg/VgG_5apAfPI/AAAAAAAAx-k/t_BZ4QT0a0A/s400-Ic42/Screenshot_2015-09-22-22-45-03.png)[![](https://lh3.googleusercontent.com/-i_c8zdbcv-A/VfrOBFgj8AI/AAAAAAAAx-E/P3AIa1hR-Zs/s400-Ic42/Screenshot_2015-09-09-01-48-00.png)](https://lh3.googleusercontent.com/-i_c8zdbcv-A/VfrOBFgj8AI/AAAAAAAAx-E/P3AIa1hR-Zs/s800-Ic42/Screenshot_2015-09-09-01-48-00.png)</span>

<span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">We used the jquery-colorpicker plugin but it was not really what we were looking for</span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l"> and somewhat broken on mobile phones</span><span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">. exco then hacked together </span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">(the google foo is strong in this one) </span><span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">a very fancy color wheel with nothing but j</span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">s</span><span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr"> writing on a html5 canvas.</span>

The final verision can be seen on the right.

<div id="magicdomid2990" class="ace-line"><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">[jsfiddle](https://jsfiddle.net/exco/yvebkyv3/) of the canvas colorpicker.</span></div>

The way that proved successfull on the esp was sending a "larger" web page in a loop of small chunks.

<span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">Most resources (jquery, ...) are pulled from cdn since the ESP doesn't have a whole lot of storage and the cdn is faster delivering content anyways.</span>

<span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">The esp lua and html code can be found on [github](https://github.com/makefu/SmartestHome)</span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l url">.</span>

### <span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">Status D</span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">isplay</span>

<span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">The first smart feature the home got was a display right into its window.  </span><span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr"> </span>

<span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">We use the cheapest display we could get from aliexpress, a 0.96 inch single [color OLED](http://s.click.aliexpress.com/e/7u7aIuJAq?af=130085010) display with 128x96 pixels</span><span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">. You can now buy them for under 5 dollars and these nifty displays only need two wires to attach it to the ESP or an arduino! This became very important for the final feature creep.</span><span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr"> </span>

<span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">It got even better when we found out the u8g lib has already been ported to nodemcu on the ESP -&gt;  just import the library and write  text on the display for profit. We found this to be a very cool pattern for all microcrontroller projects, add a display and BAM you have graphical output.</span>

### <span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">RGB Lighting</span>

<span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">As second feature followed a ws2812b rgb led for interior lighting and a bootstrap website to control its color.</span>

### Temperature / Humidity![](https://lh3.googleusercontent.com/-LMBI9RWgiRk/VgGu5j7636I/AAAAAAAAx-E/qh9T5gtp2rU/s400-Ic42/IMG_20150921_002453.jpg)

<span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">Just like every smart home the smallest smart home needed some real sensors. Makefu found a cheap Temperature/Humidity Sensor - [DHT11](http://s.click.aliexpress.com/e/UVrRrJM3B?af=127335290)</span><span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr"> in one of his project boxes and the sensor was directly soldered to the esp.</span>

### <span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">Smart Door / Smart Lock</span>

<span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">For no apparent reason makefu said we needed an automatic door - so it had to happen</span><span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">d</span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">.</span>

<span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">We professionally installed (</span><span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">read: </span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">hot glued) a [small servo](http://s.click.aliexpress.com/e/bemImea6Q?af=130085010) </span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">to the inside wall and conneted it </span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">to the door with a bent spring.</span>

<span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">You don't have to authenticate with your private key which makes it convenient to use </span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">but you shouldn't cho</span><span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">o</span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">se that route for a home you live in.</span>

<span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">Better use an openwrt box and public/private key authentication.</span>

### <span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">Wind</span><span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr"> Turbine</span>

<span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">Samu really really wanted a wind turbine for our smart home so he ziptied a </span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">dc brushed </span><span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">motor </span><span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">onto a</span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">n aluminum extrusion, <span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">added some unknown capacitor </span><span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">he found in </span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">some box for filtering sth</span></span><span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">, hot-glued it onto the base plate</span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">,</span><span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">added two wires plus a </span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">sop-23 mosfet </span><span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr"> and bailed out.</span>

<span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">We decided to add a 10ohm 5W resistor to limit the max current (of particular concern to us was the the inrush current) to 0.5 amps and a pulldown on the mosfet controlling esp pin.</span>

### <span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">Internet Delay Measurement</span>

<span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">In the beginning we just wanted to check how well the wireless network performs in terms of delay to the internet. To test this the ESP measures two steps within small time intervals: </span>

<span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">    1\. Resolve google.de</span>

<span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">    2\. Connect to google.de via HTTP GET / and wait for the response, then close the connection</span>

<span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">This information then is displayed on both the website and the display as well as being send through the wireless pipes to the mqtt server on a virtual machine here at the shackspace. </span>

<span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">This data is redirected to a graphite server where it can be viewed in clean graphs:</span>

<span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">[![](https://lh3.googleusercontent.com/-GVMOrbNVKz0/VgHFDfeTfzI/AAAAAAAACW4/5N_qFw3aV9c/s640-Ic42/smarthome_image.png)](https://lh3.googleusercontent.com/-GVMOrbNVKz0/VgHFDfeTfzI/AAAAAAAACW4/5N_qFw3aV9c/s640-Ic42/smarthome_image.png)</span>

### <span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">the nerd part:</span>

[ams1117](http://s.click.aliexpress.com/e/uvnUvvvNz?af=127335290) are a fast and cheap way to get the esp working on an USB port or USB charger.

<span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">The ESP cannot send chunks bigger than 1KB directly to the socket - the files have to be sent chunked to the client actually work. </span>

<span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">Makefu implemented the function you can recycle for your projects:</span>

<pre id="magicdomid3105" class="ace-line"><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">function send_file(f)
</span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">file.open(f,"r")
</span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">block = file.read(1024)
 </span><span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">   </span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">while block do
 </span><span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">   </span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">       client:send(block)
 </span><span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">   </span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">       block = file.read(1024)
      </span><span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">   </span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">end
 </span><span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">   </span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">file.close() </span><span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">end</span></pre>
<div id="magicdomid2302" class="ace-line">

<span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">So cozy inside (no space for blackjack and the rest)</span>

</div>
![](https://lh3.googleusercontent.com/-2phmgvACh5I/VgGu5ut_PhI/AAAAAAAAx-E/XSWlEkbVwkU/s400-Ic42/IMG_20150921_013859.jpg)

how the smart house began

![](https://lh3.googleusercontent.com/-nKaFsttsQLk/VfrRUkLe42I/AAAAAAAAyCQ/du7ki8ZyiRk/s400-Ic42/IMG_20150501_171730.jpg)

ESP8266 connections:

<span class="author-a-z90zz71zqpuz87zz77zz71zz75zrttd5wr">[![](https://lh3.googleusercontent.com/-t45KxRmX1XY/VgHEpxtUeeI/AAAAAAAAx_k/SMVrtiGJa0I/s400-Ic42/IMG_20150922_230205.jpg)](https://lh3.googleusercontent.com/-t45KxRmX1XY/VgHEpxtUeeI/AAAAAAAAx_k/SMVrtiGJa0I/s800-Ic42/IMG_20150922_230205.jpg)</span><span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">![](https://lh3.googleusercontent.com/-H2l6qNzpHjI/VgHFkplH3VI/AAAAAAAAyAE/_XcEIkD3234/s400-Ic42/IMG_20150921_002450.jpg)</span>

(before: left)

<span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">GPIO4 broken (for no apparent reason)</span>

<span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">GPIO5 ws2812b</span>

<span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">GPIO00 pull-up 10k and door servo</span>

<span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">GPIO02 pull-up 10k and DHT11 temperature &amp; humidity sensor</span>

<span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">GPIO 14 pull-down 10k (because of the mosfet) windturbine</span>

<span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">GPIO 12 + 13 128x64 oled</span>

<span class="author-a-z74zz88zoz81zz86zz80zz72z2z71zl0cfz79z4l">(after: right)</span>

</div>