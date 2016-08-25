"use strict";

const ELEMENT_TYPE = {
  id: 'id',
  class: 'className',
  xpath: 'xpath'
};

class AbstractScreen {

  constructor(driver) {
    this.driver = driver;
  }

  clickKeyBoardReturn(){
    this.driver.elementById('return')
      .then(e => {
        e.click();
        return e;
      })
      .then(e => driver.sleep(500))
    // this.driver.hideKeyboard({stategy: 'pressKey', key: 'return'})
    return this.driver;
  }

  navigateBackToParentScreen() {
    this.getElement(ELEMENT_TYPE.class, 'UIANavigationBar')
      .then(e => this.getSubElementOfElement(e, ELEMENT_TYPE.class, 'UIAButton'))
      .then(e => e.click())
    return this.driver
  }

  getElement(type, value) {
    switch (type) {
      case ELEMENT_TYPE.id:
        return this.driver.elementById(value);

      case ELEMENT_TYPE.class:
        return this.driver.elementByClassName(value);

      case ELEMENT_TYPE.xpath:
        return this.driver.elementByXPath(value);

      default:
        const errorMsg = `Error: AbstractScreen.getElement: No ${value} of type ${type}`;
        console.log(errorMsg);
        return null;
    }
  }

  getElementFromArray(type, value, elementNumber) {
    var elementArray = null;
    switch (type) {
      case ELEMENT_TYPE.id:
        elementArray = this.driver.elementsById(value);
        break;

      case ELEMENT_TYPE.class:
        elementArray = this.driver.elementsByClassName(value);
        break;

      case ELEMENT_TYPE.xpath:
        elementArray = this.driver.elementsByXPath(value);
        break;

      default:
        const errorMsg = `Error: AbstractScreen.getElementFromArray: No ${value} of type ${type}`;
        console.log(errorMsg);
        return elementArray;
    }

    // elementArray is a promise
    return elementArray.then(elements => elements[elementNumber]);
  }

  getSubElementOfElement(element, subElementType, subElementValue) {
    switch (subElementType) {
      case ELEMENT_TYPE.id:
        return element.elementById(subElementValue);

      case ELEMENT_TYPE.class:
        return element.elementByClassName(subElementValue);

      case ELEMENT_TYPE.xpath:
        return element.elementByXPath(subElementValue);

      default:
        const errorMsg = `Error: AbstractScreen.getSubElementOfElement: No ${value} of type ${type}`;
        console.log(errorMsg);
        return null;
    }
  }

  waitForElement(type, value) {
    switch (type) {
      case ELEMENT_TYPE.id:
        return this.driver.waitForElementById(value);

      case ELEMENT_TYPE.class:
        return this.driver.waitForElementByClassName(value);

      case ELEMENT_TYPE.xpath:
        return this.driver.waitForElementByXPath(value);

      default:
        const errorMsg = `Error: AbstractScreen.waitForElement: No ${value} of type ${type}`;
        console.log(errorMsg);
        return null;
    }
  }

  sendKeysToElement(element, value) {
    return element
      .sendKeys(value)
      .getValue().should.become(value)
  }
}

export { AbstractScreen, ELEMENT_TYPE };
