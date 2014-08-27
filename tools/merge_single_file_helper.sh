#!/bin/sh
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
MERGE="$DIR/merge.pl"

if [ -z $1 ]; then
    echo "error, no argument given"
    exit
fi

INFILE=$1
TEMPFILE=$(basename "$INFILE")'.tmp'

echo $TEMPFILE

cat "$INFILE" | perl $MERGE >"$TEMPFILE"
mv $TEMPFILE $INFILE
