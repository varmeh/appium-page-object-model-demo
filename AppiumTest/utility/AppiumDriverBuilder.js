"use strict";

var wd = require("wd");

class AppiumDriverBuilder {
  constructor(appPath) {
    if (appPath === undefined) {
      throw new Error(`'App Path' is manadatory requirement. Update AppPath in beforeall() of TestMain.js`);
    }

    this.desired = {
    	'appium-version': '1.0',
    	platformName: 'iOS',
    	platformVersion: '9.3',
    	deviceName: 'iPhone 6s',
    	app: appPath,
      noreset: true,
      newCommandTimeout: '3000'
    };
    this.driver = null;
  }

  setFullReset(fullreset) {
    if (typeof fullreset === 'boolean') {
      this.desired.fullreset = fullreset;
    }
  }

  setPlatformVersion(version) {
    if (typeof version === 'string') {
      this.desired.platformVersion = version;
    }
  }

  setPlatformName(name) {
    if (typeof name === 'string') {
      this.desired.platformName = name;
    }
  }

  initiateAppBootUpAtHost(ip = 'localhost', port = 4723) {
    // Using promise without chaining - https://github.com/admc/wd#q-promises-without-chaining
    this.driver = wd.promiseRemote(ip, port);
    console.log('App Boot up - Initiated');
    return this.driver.init(this.desired);
  }

  appiumDriver() {
    return this.driver;
  }
}

export default class iOSDriver extends AppiumDriverBuilder {
  constructor(appPath) {
    super(appPath);

    this.setPlatformName('iOS');
  }
}
