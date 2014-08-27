#!/usr/bin/perl -W
#
# merges runaway block lines in .rst files
# 
# Example:

# | foo
# bar
# baz
# | la
# di
# da
#
# hello

# will be merged to

# | foo bar baz
# | la di da
#
# hello



use strict;

my $inblock = 0;
my $linebuf = '';
my $debug = 0;

while (<STDIN>)
{
    if($inblock)
    {
        if(m/^\|/) {
            print "%% BSS %%$/" if ($debug);
            # print collection
            # stay in block
            #
            print $linebuf.$/;
            chomp();
            chomp();
            $linebuf = $_;
        }
        elsif(m/^$/) {
            print "%% PCL %%$/" if ($debug);
            # print collection
            # leave block
            #
            $inblock = 0;
            print $linebuf.$/.$/;
            $linebuf = '';
        }
        else {
            print "%% C %%$/" if ($debug);
            # collect
            #
            chomp();
            chomp();
            $linebuf .= ' '.$_;
        }
    }
    else
    {
        if(m/^\|/) {
            print "%% SB %%$/" if ($debug);
            # start block
            #
            $inblock = 1;
            chomp();
            chomp();
            $linebuf = $_;
        }
        else {
            print "%% P %%$/" if ($debug);
            # just print
            #
            print $_;
        }
    }
}

print $linebuf.$/.$/
