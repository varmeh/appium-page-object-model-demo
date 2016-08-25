"use strict";

import { AbstractScreen, ELEMENT_TYPE } from './AbstractScreen';

export default class Tabbar extends AbstractScreen {

  constructor(driver) {
    super(driver);
  }

  searchTab() {
    return this.getElement(ELEMENT_TYPE.id, 'Search');
  }

  featuredTab() {
    return this.getElement(ELEMENT_TYPE.id, 'Featured');
  }
}
