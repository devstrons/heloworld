# Usage:
# make - Install all binaries and serve site
# make site-fix - Add webrick as dependency (not required but for fix) and serve site
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
