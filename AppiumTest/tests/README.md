# TEST CLASSES

Test could be based on sequence specific order or screen specific.

In both cases, it would need access to **App** to access screens.

## Test Structure

Test Folder structure has been broadly divided into 2 types:
- Main File
- Test Files

### Main File

In our case, __tests/TestMain.js__.

This does following:
- It initiates _driver_ (Appium Client connected to Server) & defines it's capabilities.
- It then initiates _app_ which acts as single point of access to all screen classes.
- It includes one time setup as well setup required before each test case.
