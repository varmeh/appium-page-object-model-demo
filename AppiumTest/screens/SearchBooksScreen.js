"use strict";

import { AbstractScreen, ELEMENT_TYPE } from './AbstractScreen';

export default class SearchBooksScreen extends AbstractScreen {
  constructor(driver) {
    super(driver);
  }

  searchButton(){
    return this.getElement(ELEMENT_TYPE.id, 'Search');
  }

  waitForSearchScreenToAppear() {
    return this.waitForElement(ELEMENT_TYPE.id,"Book Title:");
  }

  setBookTitleText(value) {
    this.getElementFromArray(ELEMENT_TYPE.class, 'UIATextField', 0)
      .then( element => {
        element.sendKeys(value)
        .getValue().lowercase().should.become(value)
      })
    return this.driver;
  }

  setAuthor(value) {
    this.getElementFromArray(ELEMENT_TYPE.class, 'UIATextField', 1)
      .then( element => {
        element.sendKeys(value)
        .getValue().lowercase().should.become(value)
      })
    return this.driver;
  }

}
