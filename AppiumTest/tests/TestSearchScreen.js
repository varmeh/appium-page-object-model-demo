"use strict";

export default class TestSearchScreen {
  constructor(app) {
    this.app = app;
  }

  name() {
    return 'Test Search Screen';
  }

  transitionToSearchScreen() {
    var app = this.app;

    return app.tabbarScreen.searchTab()
    .then(element => element.click())
    .then(() => app.searchBooksScreen.waitForSearchScreenToAppear())
    .then(() => app.searchBooksScreen.setBookTitleText('harry potter'))
    .then(() => app.searchBooksScreen.setAuthor('rowling'))
    .then(e => e.sleep(3000))
    .then(() => app.searchBooksScreen.clickKeyBoardReturn())
    .then(() => app.searchBooksScreen.searchButton())
    .then(element => element.click())
    .then(() => app.searchResultsScreen.waitForSearchResultScreenToAppear())
    .then(() => app.searchBooksScreen.navigateBackToParentScreen())
    .then(e => e.sleep(4000))
    .then(() => app.searchBooksScreen.waitForSearchScreenToAppear())
    .then(() => app.tabbarScreen.featuredTab())
    .then((element) => {
      element.click();
      return app.featuredBooksScreen.waitForFeaturedScreenToAppear();
    })
  }
}
