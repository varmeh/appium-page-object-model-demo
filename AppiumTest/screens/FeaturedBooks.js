"use strict";

import { AbstractScreen, ELEMENT_TYPE } from './AbstractScreen';

export default class FeaturedBooks extends AbstractScreen {

  constructor(driver) {
    super(driver);
  }

  waitForFeaturedScreenToAppear() {
    return this.waitForElement(ELEMENT_TYPE.id,"Featured Books");
  }

  tableRow(rowNumber) {
    const tableView = this.getElement(ELEMENT_TYPE.class, 'UIAScrollView')
  }
}
