# Appium Demo with React Native Demo App for iOS

This is a simple demo app built with React Native. For details, please refer to this tutorial:

http://www.appcoda.com/react-native-introduction

## Prerequisites

- Appium Server
- Appium Client

### iOS

- Mac OS X 10.10 or higher, 10.11.1 recommended
- XCode >= 6.0, 7.1.1 recommended
- Apple Developer Tools

### Android

- Android SDK API >= 17
- Appium supports Android on OS X, Linux and Windows. Make sure you follow the directions for setting up your environment properly for testing on different OSes:
  - [linux](http://appium.io/slate/en/master/?ruby#running-appium-on-linux)
  - [osx](http://appium.io/slate/en/master/?ruby#running-appium-on-mac-os-x)
  - [windows](http://appium.io/slate/en/master/?ruby#running-appium-on-windows)

Refer documentation for detail: http://appium.io/getting-started.html?lang=en

## Installation

### Appium Server

Download appium app from http://appium.io/.

OR

Install Appium server either with following command:

```
$ npm install -g appium
```

### Appium Client

We will use javascript client [wd](https://github.com/admc/wd)

Other than appium client, we would need following packages for testing
- mocha: test framework
- chai: assertions library
- chai-as-promised: promise library

All packages required for testing has been defined in package.json file.

```
$ npm install
```

## Execute Test

## Update App Path in Test Case

Compile Code in XCode to build app. Then, access it by right clicking app in XCode & selecting _Show in Finder_

OR

Use app file provided in __Execuatable__ folder.

Update path of app in driver constructor call in before() of AppiumTest/TestMain.js file.

It should always be absolute path to app on appium server.

### Start Appium Server

```
$ appium -a 127.0.0.1 -p 4723
```

This will start appium server at ip - 127.0.0.1:4723

### Run Appium Client

```
npm test
```

_test_ is defined in __package.json__.

Hopefully, your test case is running smoothly.
