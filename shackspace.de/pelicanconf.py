#!/usr/bin/env python
# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import collections
import datetime
import re

AUTHOR = 'shack e.V.'
SITENAME = 'shackspace - Der Hackerspace in Stuttgart'
SITEURL = ''
SHOW_ARTICLE_AUTHOR = True
#RELATIVE_URLS = True

PATH = 'content'

TIMEZONE = 'Europe/Berlin'

TYPOGRIFY = True

DEFAULT_LANG = u'de'
DATE_FORMAT = {
    'de': '%A, %d.%m.%Y',
    'en': '%A, %m/%d/%Y',
}
LOCALE = ('de_DE', 'en_US')
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

NavEntry = collections.namedtuple("NavEntry", ['name','link','cssclass' ])

RawNavEntry = collections.namedtuple("RawNavEntry", ['name','link','local'])

navbar = [RawNavEntry('Blog', "b/", True),
          RawNavEntry('Logbuch', "//log.shackspace.de/", False),
          RawNavEntry('Projekte', "p/projects/", True),
          RawNavEntry('Wiki', "//shackspace.de/wiki", False),
          RawNavEntry('Bilder', "//shackspace.de/gallery", False),
          RawNavEntry('shackspace', "p/about/", True),
          RawNavEntry('Verein', "p/verein/", True) ]

def MKNAVBAR(siteurl, url):
    nb = []
    for item in navbar:
        name = item.name
        link = '/'+item.link
        cssclass = ''

        if item.local:
            link = siteurl+link
        
        if re.match(re.compile(r'^{}'.format(item.link)), url):
            cssclass = 'active'

        nb.append(NavEntry(name,link,cssclass))
    return nb 

DEFAULT_PAGINATION = 6

PLUGINS = ['metadataparsing',]

TimeslotEntry = collections.namedtuple("TimeslotEntry",
        [   "start_raw",
            "end_raw",
            "start_f",
            "end_f",
            "duration_hours_f"])


def timeslotsparser(string):
    if string is None or not isinstance(string, collections.Iterable):
        return None

    if isinstance(string, collections.Iterable):
        string = ''.join(string)

    slots = []


    for slot in string.split(';'):
        if not slot:
            continue

        parts = slot.split(',')

        start = datetime.datetime.strptime(parts[0].strip(), '%Y-%m-%d %H:%M')
        end = datetime.datetime.strptime(parts[1].strip(), '%Y-%m-%d %H:%M')
        start_f = start.strftime('%A, %d.%d.%Y %H:%M')
        end_f = end.strftime('%A, %d.%d.%Y %H:%M')

        duration = end-start
        duration_h = int(duration.total_seconds() / 3600)
        duration_m = int((duration.total_seconds() / 60) % 60)
        duration_f = '{}h'.format(duration_h)
        if duration_m > 0:
            duration_f += '{}m'.format(duration_m)

        slots.append(TimeslotEntry( start, end,
                                    start_f, end_f,
                                    duration_f ))

    return slots

def stringparser(string):
    if string is None or not isinstance(string, collections.Iterable):
        return None

    return string.strip()

def boolparser(string):
    if string is None or not isinstance(string, collections.Iterable):
        return None

    return string.strip() in (u"yes", u"true", u"t", u"1")

METADATA_PARSERS = {
    'timeslots': timeslotsparser,
    'entrace_fee': stringparser,
    'material_cost': stringparser,
    'donations_welcome': boolparser,
    'registration_link': stringparser,
    'registration_required': boolparser
}


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
