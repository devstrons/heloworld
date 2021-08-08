# Usage:
# make - Install all binaries
# make site - Serve the site locally

.PHONY : all install site-fix site

all : install

install:
	bundle install
	bundle exec jekyll serve --livereload

site-fix:
	bundle add webrick
	bundle install
	bundle exec jekyll serve --livereload

site:
	bundle exec jekyll serve --livereload
