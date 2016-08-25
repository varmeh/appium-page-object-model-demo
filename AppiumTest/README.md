# Page Object Model (POM)

## POM Explained

Page Object Model is a design pattern to create Object Repository for UI elements.
- Under this model, for each screen in the application, there should be corresponding page class
- This Page class will find the elements of that screen and also contains methods which perform operations on those elements

The main advantage of Page Object Model is that if the UI changes for any page, it don’t require us to change any tests, we just need to change only the code within the page objects.

For details, refer:
- [POM Guide](http://www.guru99.com/page-object-model-pom-page-factory-in-selenium-ultimate-guide.html)
- [Intro to POM Framework](https://www.seleniumeasy.com/selenium-tutorials/page-object-model-framework-introduction)

## POM Structure

We would be using a sub set of structure explained in [TestObject](https://help.testobject.com/docs/guides/appium-advanced-setup/#driver-builder)
in support with [POM Guide](http://www.guru99.com/page-object-model-pom-page-factory-in-selenium-ultimate-guide.html).

POM Applied here has following key & reusable components:

- __screens__ - All component & screen classes would be defined in this folder only.

  - __AbstractScreen.js__ - All shared code for screen classes would be defined here only.

- __tests__ - This folder contains all the test case files.

  - __TestMain.js__ - It includes all test initialization code. It's also defined as entry point for _npm test_ in _package.json_.

- __utility__ - It includes functionality which is shared across app.  

  - __AppiumDriverBuilder.js__ - It includes all the server capability configuration along with connection methods.

  - __BookSearchApp.js__ - It is composed of all app screens. Thus, it acts as single point of access to all screens.
