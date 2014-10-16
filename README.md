Sample Travis Project
[![Build Status](https://travis-ci.org/aconfee/TravisTest.svg?branch=master)](https://travis-ci.org/aconfee/TravisTest)

It's a super cool project.

Installation
	npm install -g bower
	npm install
	bower install

Run
	Open views/index.html in a browser of your choice.

Contribute
	Fork master repo
	Clone your fork
	Make your contribution
	Run a smoke test before creating PR 
		./smokeTest
	Push and create a PR
		PR will be tested on TravisCI
		Owner will merge passing tests to master build
		Merge with master will be tested in TravisCI
	Celebrate

-----------------------------------------------------------------------

Travis CI -- My Review & Notes

Payment 		-- One subscription per user / organization
				-- PaperG would be one account
					- Can't fork from repo, just branch from our product -- why do we even fork? Just branch from feature branch?
				-- Month to month or annual
				-- Permissions shared. If PaperG has account, everyone in org has an account.

Environment		-- No Vagrant. Uses OpenVZ
				-- Environments are not available afterwards unless we email
					- Debug environments built in coming soon

Cron			-- Not available in Travis yet.
					- Will have gui interface soon

Notes

	- Tests on PR, merge, or push
	- Combines the clone->build->deploy->test process into one neat, concise, hosted tool. 
		- Don't have to manage vagrant. Don't have to manage cloning and building. Focus on test!
		- Don't have to manage sauce tunnel
	

Pros 	
-----------------------------------------------	
Dead simple setup
Fully customizable (run .sh)
Easily expandable
Hosted (reliable servers, reliable box)
	Less maintenance and distractions
Continued professional development (debug box, cron) instead of Jenkins style open source maybe support
Sauce built in 
	Only deploys when sauce is run for UI tests
	Managed by them: reliable
Secure: encrypted env vars
Status image -- definitive badge of pass/fail. Make CI *the* quality ensurance tool.
Parallel test suites
Open source feature support (ci-status.com)
Clean profiling
Importing our project will take no time
[ci skip]
Guaranteed completely isolated clean build state for every run (*guaranteed* we don't manage)
Cancel / refresh build

Cons
----------------------------------------------
Fewer plugins (but more professional support for existing plugins)
No dashboard test results (but Jenkins' plugins aren't breathtaking)
Costs money
Might have to change branching system (but we should anyway)

Goals Accomplished:
	More reliable
	Cleaner
	Simple 
	Setup in no time


Why not Jenkins:
	- Host ourselves (like we do now)
	- Plugins (for things we already have)
	- Huge up-front costs to transition
	- Not necessarily less error prone or reliable (since we set it up)
	- No professional growth or support
	- Not entirely cleaner, not as simple to setup/use

	Jenkins is only very slightly better than Strider, but not worth the transition.
	Travis is leaps and bounds beyond Strider and meets all of our goals. Well worth the cost of $1320 / year. 



Down the road:

Travis makes CI more reliable, but still not easier to use our tools (like test selection, selenium, etc)
	- Modularize our tools and make them more like services.
	- Dev should be able to download a repo (small directory) with a config file and a readme. 
		- Set up config and use one command line to execute. Anything harder than this is too hard.

Workflow needs to change for travis
	- Forked repos (like my pl repro) won't be plugged into Travis, so no test on push. Only test on PR and master merge. 
		- Make easier local test tools (mostly just for Selenium)
		- Devs don't test push runs now anyway
		- Pushed runs don't test enough to be useful
		- As is, we could pull push tests out and nobody would notice. The PR is what matters.
	- Make it easier to run our test locally (using developers dev box or sandbox) so pushes,pr's, and merges fail less often
		- Smoke test or pre-screen command before pushing (for max reliability) Even though push really serves the same function.
		- Dev should be able to type something like 'smoke.sh' from the root dir and be fairly confident in creating a pr (basically what push is now, but local since they already have a build.) Smoke can take they're dev/sand box if we choose to SE test for smoke (but we shouldn't)
	- Standardize publisher settings so devs can accurately test