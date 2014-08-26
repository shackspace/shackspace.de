#!/bin/sh

mkvirtualenv $(cat .env|awk 'print $2')
pip install pelican
pip install Markdown
