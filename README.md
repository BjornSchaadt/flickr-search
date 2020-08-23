# flickr-search

This is a test project for exploring the Public Flickr API.

Improvements:
* Component splitting: Solution should be broken down in smaller vue components to make it easier to re-use components 
  ** Search component
  ** Image container
  ** Thumbnail render
  
* Caching
  ** Consider cashing for 12 hours on the results for better performance on popular searches
  
* Improved loading:
  ** pagination, load more button or just lazyload could be added for larger scale projects
  
* Design improvements:
  ** Animations and a cooler design could arguably improve the user experience.

* Compiling and compressing js and css files
* LESS or SASS should be setup to avoid redundant css markup and to improve the workflow and to take advantage of the smart features like mixins, nested syntax aso.


Tests:
 * Postman was used to inspect the responses from the Flickr API (could also be used for automated UI tests)
 * Selenium as test
    ** Would write my own API simulating the response from Flickr's API, a mock test that would run before building the solution, which would fail if not matching Flickr's API response, asserting status codes and expected dom elements
    
* Cypress E2E testing
 ** Spin up chrome
 ** Find search-bar in dom
 ** place cursor in search-bar
 ** write "Copenhagen"
 ** Trigger Enter click
 ** Find imagetag in dom
 ** If expected imagetage exists test will pass otherwise fail
 
 
