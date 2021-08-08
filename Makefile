# Usage:
# make - Install all binaries
# make site - Serve the site locally

.PHONY : all install site-fix site

all : install

install:
	bundle install

site-fix:
	bundle add webrick
	bundle install

site:
	bundle exec jekyll serve --livereload
