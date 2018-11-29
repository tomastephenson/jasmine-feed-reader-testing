/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application. */

    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page? */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed in the allFeeds
         * object and ensures it has a URL defined and that
         * the URL is not empty. */

        it('have a non-empty URL defined for each feed', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            };
        });

        /* A test that loops through each feed in the allFeeds
         * object and ensures it has a name defined and that
         * the name is not empty.
         */
        it('have a non-empty name defined for each feed', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            };
        });



    });


    // A new test suite named 'The menu'
    describe('The menu', function() {

        /* A test that ensures the menu element is hidden by default.
         * When the menu is hidden, the <body> has the class 'menu-hidden'.
         * The length of 'menu-hidden' is 1 when the class is applied,
         * and 0 when it isn't. */

        it('is hidden by default', function() {
            expect(document.body).toHaveClass('menu-hidden');
        });


        /* A test that ensures the menu changes visibility when
         * the menu icon is clicked. This test should have two 
         * expectations: does the menu display when clicked and
         * does it hide when clicked again.
         */

        it('changes visibility when clicked', function() {

            //Create a variable for the menu button

            var menuButton = $('.menu-icon-link');

            // After the first click, menu is shown, so it shouldn't have "menu-hidden" class
            menuButton.trigger('click');
            expect(document.body).not.toHaveClass('menu-hidden');

            // After the second click, it should be back:

            menuButton.trigger('click');
            expect(document.body).toHaveClass('menu-hidden');
        });
    });


    describe('Initial Entries', function() {

        /* A test that ensures when the loadFeed function is called and 
         * completes its work, there is at least a single .entry element 
         * within the .feed container.
         */

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('have at least 1 entry element within the feed container', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });

    });


    describe('New Feed Selection', function() {

        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        
        //Setting 2 variables - 'feed0' stores the value of the original feed, 'feed1' stores the value after the feed is refreshed
var feed0 = "";
var feed1 = "";

        beforeEach(function(done) {
            // Load the first feed
                loadFeed(0, function() {
                    // Store the value in the 'feed0' variable.
                    feed0 = $('.feed').html();
                    done();
                });
            });

                it('changes the content when a new feed is loaded', function(done) {

            // Load the second feed
            loadFeed(1, function() {
// Store it in the 'feed1' variable.
                feed1 = $('.feed').html();
                done();
            });
            /* Now that the function has run, we should have 2 different feeds stored into 2 different variables.
If feed0 and feed1 are equal, the feed data hasn't changed, so we want them to NOT equal ecah other: */
            expect(feed0).not.toEqual(feed1);
        });
    });

}());