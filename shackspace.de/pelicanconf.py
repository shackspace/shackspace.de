#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'shack e.V.'
SITENAME = u'shackspace - Der Hackerspace in Stuttgart'
SITEURL = ''
#RELATIVE_URLS = True

PATH = 'content'

TIMEZONE = 'Europe/Berlin'

DEFAULT_LANG = u'de'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 6

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

DEFAULT_CATEGORY = 'misc'
USE_FOLDER_AS_CATEGORY = True

THEME = 'themes/pelican-bootstrap3'

ARTICLE_URL =           'b/{date:%Y}/{date:%b}/{date:%d}/{slug}/'
ARTICLE_SAVE_AS =       'b/{date:%Y}/{date:%b}/{date:%d}/{slug}/index.html'
ARTICLE_LANG_URL =      'b/{date:%Y}/{date:%b}/{date:%d}/{slug}-{lang}/'
ARTICLE_LANG_SAVE_AS =  'b/{date:%Y}/{date:%b}/{date:%d}/{slug}/index.html'

DRAFT_URL =             'd/{slug}/'
DRAFT_SAVE_AS =         'd/{slug}/index.html'
DRAFT_LANG_URL =        'd/{slug}-{lang}/'
DRAFT_LANG_SAVE_AS =    'd/{slug}-{lang}/index.html'

PAGE_URL =              'p/{slug}/'
PAGE_SAVE_AS =          'p/{slug}/index.html'
PAGE_LANG_URL =         'p/{slug}-{lang}/'
PAGE_LANG_SAVE_AS =     'p/{slug}-{lang}/index.html'

CATEGORY_URL =          'cat/{slug}/'
CATEGORY_SAVE_AS =      'cat/{slug}/index.html'
TAG_URL =               'tag/{slug}/'
TAG_SAVE_AS =           'tag/{slug}/index.html'
AUTHOR_URL =            'by/{slug}/'
AUTHOR_SAVE_AS =        'by/{slug}/index.html'

TEMPLATE_PAGES = {      'article_list.html':    'b/index.html' }


#PAGINATION_PATTERNS = (
#    (1, '{base_name}/', '{base_name}/index.html'),
#    (2, '{base_name}/page/{number}/', '{base_name}/page/{number}/index.html'),
#)

#USE_PAGER = True

#DIRECT_TEMPLATES = ( 'index', )
