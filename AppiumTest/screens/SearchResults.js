"use strict";

import { AbstractScreen, ELEMENT_TYPE } from './AbstractScreen';

export default class SearchResults extends AbstractScreen {
  constructor(driver) {
    super(driver);
  }

  waitForSearchResultScreenToAppear() {
    return this.waitForElement(ELEMENT_TYPE.id,"Search Results");
  }
}
