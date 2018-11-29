# Udacity Assignment 4 - Feed Reader Testing

Here are some tests that have been set up using Jasmine on an RSS feed reader whose code I've inherited.

## How to run the application.

[You can open the page straight in your browser by clicking this link.](http://htmlpreview.github.io/?https://github.com/tomastephenson/jasmine-feed-reader-testing/blob/master/index.html)

Or to install it on your system to view offline, follow the instructions below:
* Click 'Clone or Download' in the top right of the screen, and click 'download zip'.
* Extract the zip file on your computer.
* Click on index.html to view the test page.

## The tests

The following tests have been set up:

1. RSS Feeds
    * are defined - ensuring the 'allFeeds' variable has been defined and that it is not empty.
    * have a non-empty URL defined for each feed - A test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
    * have a non-empty name defined for each feed - A test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.

2. The Menu
    * is hidden by default - A test that ensures the menu element is hidden by default when the page loads
    * changes visibility when clicked - A test that ensures the menu changes visibility every time the menu icon is clicked.

3. Initial Entries
    * have at least 1 entry element within the feed container - A test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
    
4. New Feed Selection
    * changes the content when a new feed is loaded - A test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
