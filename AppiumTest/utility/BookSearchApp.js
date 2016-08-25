"use strict";

import Tabbar from '../screens/Tabbar';
import FeaturedBooks from '../screens/FeaturedBooks';
import SearchBooksScreen from '../screens/SearchBooksScreen';
import SearchResults from '../screens/SearchResults';

export default class BookSearchApp {

  constructor (driver) {
    this.tabbarScreen = new Tabbar(driver);
    this.featuredBooksScreen = new FeaturedBooks(driver);
    this.searchBooksScreen = new SearchBooksScreen(driver);
    this.searchResultsScreen = new SearchResults(driver);
  }
}
