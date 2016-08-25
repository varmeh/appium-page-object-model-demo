# SCREEN CLASSES

*Screen classes represent the screens/components of your app.*

Here you will fetch the UI elements and interact with them in methods that represent possible interactions with the user interface like:
- Opening a menu and selecting an item
- Filling in some fields and pressing a submit button
- Scrolling down a list and selecting the right element

This way your test methods will be just a sequence of user interactions on different screens.

This will keep your tests easily maintainable and extendable.


## AbstractScreen Class

*It will contain all the methods that are shared between your Screen objects.*

- These may be general purpose methods that perform gestures needed to interact with your app in multiple points (swiping, scrolling)
- It also includes wrapper methods that hide some more convoluted code to improve readability of your test methods, synchronization methods and more.

## Promises

__wd__ uses __q__ promises internally.

To complement that & ensure promise chaining, please make sure that all app methods return a promise.
