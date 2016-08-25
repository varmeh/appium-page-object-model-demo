"use strict";

import iOSDriver from '../utility/AppiumDriverBuilder';
import BookSearchApp from '../utility/BookSearchApp';

import TestSearchScreen from './TestSearchScreen';

var wd = require("wd");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
chai.expect();

// enables chai assertion chaining
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

describe("Testing Book Search App", function(){
  this.timeout(200000); // Changing mocha default timeout of 2000ms
  var driver;
  var app;

  before(function(done) {
    // Add app absolute path on appium server as parameter to iOSDriver initializer
    var driverBuilder = new iOSDriver();

    // Initializing app client
    driverBuilder.initiateAppBootUpAtHost()
    .then(function() {
      driver = driverBuilder.appiumDriver();
      app = new BookSearchApp(driver);
      console.log('App Boot up - Completed')
      done();
    })
  });

  after(function(){
    return driver.quit()
  });

  it("  Test 1 - test search tab", function(){
      var TestSearch = new TestSearchScreen(app);
      return TestSearch.transitionToSearchScreen();
    });
});
