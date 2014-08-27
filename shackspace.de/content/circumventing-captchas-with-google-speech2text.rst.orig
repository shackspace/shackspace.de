Circumventing CAPTCHAs with Google speech2text
##############################################
:date: 2013-01-13 02:37
:author: hdz
:category: Allgemein
:slug: circumventing-captchas-with-google-speech2text

shackspace hacker `samuirai <http://smrrd.de/>`__ is always on the prowl
for something to break^W fix.

The latest thing he fixed is the `minteye
CAPTCHA <http://www.minteye.com/Products.aspx>`__ system.  The
`CAPTCHA <http://en.wikipedia.org/wiki/Captcha>`__ works by having the
user move a slider left and right which directy affects a distorted
image.  There's one setting of the slider where the image is no longer
distorted which is the correct solution to the CAPTCHA.

This works quite well if you can see but not if you're blind.  To ensure
accessibility there's also a voice output feature which comes with three
handy messages allowing you to solve the test and identify yourself as a
human: 1) move slider to the left, 2) move slider to the right, 3)
slider is in correct position.

The thing that was missing (and is now fixed) was an easy way to do this
annoying task automatically so your friendly computer can login in your
stead ;)

To solve this samuirai didn't actually attack the system via the images
it displays but instead used Google's speech2text API to have the
messages for blind users translated into text which can then easily be
evaluated automatically by a script that tries to find the right
position for the slider iteratively.

He's got a `write-up of his hack available online on
Github <https://gist.github.com/4520930>`__ and there's also a short
YouTube `video showing the automatic CAPTCHA solver script doing its
magic <http://www.youtube.com/watch?v=u0M7gmS5Eg0>`__.

 
