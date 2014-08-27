#!/bin/sh
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
DELETE="$DIR/delete_meta.pl"
EXTRACT="$DIR/extract_meta.pl"

if [ -z $1 ]; then
    echo "error, no argument given"
    exit
fi

INFILE=$1
TEMPFILE=$(basename "$INFILE")'.tmp'
METAFILE=$(basename "$INFILE")'.meta'

cat "$INFILE" | perl $EXTRACT >"$METAFILE"
cat "$INFILE" | perl $DELETE >"$TEMPFILE"
mv "$TEMPFILE" "$INFILE"
