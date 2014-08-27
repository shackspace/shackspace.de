#!/usr/bin/perl -W
#
#
#

use strict;

my $ismeta = 0;

while(<STDIN>) {
    if ($ismeta) {
        if (m/^\.\./) {
            $ismeta = 0;
        }
        else
        {
            print;
        }
    }
    else {
        if (m/Zum Event/) {
            $ismeta = 1;
        }
    }
}
