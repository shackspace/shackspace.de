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
            print;
        }
    }
    else {
        if (m/Zum Event/) {
            $ismeta = 1;
        }
        else {
            print;
        }
    }
}
