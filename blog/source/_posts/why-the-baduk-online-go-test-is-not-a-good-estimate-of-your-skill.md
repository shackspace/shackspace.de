---
title: Why the Baduk online Go test is not a good estimate of your skill
url: 1772.html
id: 1772
categories:
  - Allgemein
date: 2011-02-19 19:46:35
tags:
---

A couple of folks started playing [Go](https://secure.wikimedia.org/wikipedia/en/wiki/Go_(game)) at shackspace during the last weeks and the number of Go boards have been growing ever since.

Even though we have a lot of fun at shackspace, you can't be there all the time so you start looking at online Go servers. One especially nice one for casual slow-play during the day is [Dragon Go Server](http://dragongoserver.net/) (DGS). One of the questions that come up right away if you're a novice player who just signed up for an online Go service is "What rank am I?". [DGS answers this](http://www.dragongoserver.net/faq.php?read=t&amp;cat=48#Entry50) by referring to a [Baduk Go online test](http://play.baduk.org/).

### The Problem

@[hdznrrd](https://twitter.com/hdznrrd) took the test and scored a whopping 3-kyu while @[SaijSaij](https://twitter.com/SaijSaij) who's definitely a stronger player scored 16-kyu. Another one who never played Go and hardly knew the rules managed to get a 3-kyu rating as well. Given that beginners in Europe are usually rated at something between [25 and 30-kyu](http://senseis.xmp.net/?RankWorldwideComparison). This got hdznrrd thinking and one night spent at shackspace later the results are in.

### <!--more-->

### Collecting Data

How do you test if a test makes sense? Hire a million monkeys and let them write Shakespeare. Alternatively, write a Perl script and let it take the test for you.

The brute-force approach to play all possible games (20 questions with 5 possible answers each, 3200000 possible games) would have taken about 370 days with a single process polling the server. Not an option. So hdznrrd chose to create random answer sequences, let the script play them out and log the final score. Repeat this about 8500 times to get into a range where you can run statistics assuming the rule of large numbers and you can do fun stuff.

Some of the data that was [collected](https://github.com/shackspace/PlayBaduk/blob/master/collect.pl) can be found in the [PlayBaduk repository on Github](https://github.com/shackspace/PlayBaduk/tree/master/data).

### Running Statistics

The following stats were calculated from around 8500 random test paths played aganist play.baduk.org. [stats.pl](https://github.com/shackspace/PlayBaduk/blob/master/stats.pl) generates a simple histogram of all kyu results taken from the random games.

[![](https://blog.shackspace.de/wp-content/uploads/2011/02/badukhistogram-300x130.png "Histogram of kyu results of random test games against play.baduk.org")](https://blog.shackspace.de/wp-content/uploads/2011/02/badukhistogram.png)

What's remarkable is the following:

*   Test results only cover 16-kyu up to 1-kyu. Meaning you cannot get any results worse than "[average skilled casual player](https://secure.wikimedia.org/wikipedia/en/w/index.php?title=Go_ranks_and_ratings&amp;oldid=407086537#Kyu_and_Dan_ranks "Go_ranks_and_ratings&amp;oldid=407086537#Kyu_and_Dan_ranks")". "Beginner" levels are not covered at all by this test.
*   A random selection of answers on average gives you a kyu rating of 11 to 12; [GNU go plays at around 7 to 5-kyu](https://secure.wikimedia.org/wikipedia/en/w/index.php?title=GNU_Go&amp;oldid=404231209 "GNU_Go&amp;oldid=404231209") using elaborate algorithms.
*   There seems to be a strong bias towards odd kyu results compared to even kyu.
[![](https://blog.shackspace.de/wp-content/uploads/2011/02/answerestimation-300x59.png "Estimation of best answer for each round of the test")](https://blog.shackspace.de/wp-content/uploads/2011/02/answerestimation.png)

A nice side-effect of collecting a lot of random but rated test runs: you can try to estimate which of the answer for each step is actually correct. [bestpath.pl](https://github.com/shackspace/PlayBaduk/blob/master/bestpath.pl) does exactly that. A cutoff is defined to only rate the top 10% of random games. Based on the score of the game each answer given in the game is weighted and accumulated over all games, then scaled to a range of [0, 1] with 1 being the most likely to be correct answer.

The above screenshot estimates cddbd-bcdda-adaeb-dccec as being a close to perfect game. Let's try!

[![](https://blog.shackspace.de/wp-content/uploads/2011/02/top10-300x212.png "Playing the algorithm estimated perfect game, taking the high score")](https://blog.shackspace.de/wp-content/uploads/2011/02/top10.png)

Guess the algorithm was right ;)

### Conclusion

The Baduk test doesn't seem to be suitable for estimating your strength in Go at all. Totally unskilled players manage to score high single-digit ranks while lower kyu ranks are not even covered. Either way beginners will end up with a probably grossly overestimated skill level estimate should they believe in the test results.

Solution: go play against real people. More fun anyway :)

### More Information

*   @[hdznrrd](https://twitter.com/hdznrrd) on Twitter
*   [play.baduk.org](http://play.baduk.org/) - the online Go test
*   [PlayBaduk on Github](https://github.com/shackspace/PlayBaduk)
<div id="_mcePaste" style="position: absolute; left: -10000px; top: 143px; width: 1px; height: 1px; overflow: hidden;">**Shakespeare**</div>