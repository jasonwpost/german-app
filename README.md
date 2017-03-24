# A web app for learning German

Test your German grammar skills with this web application built on the MEAN stack with Angular 2.

The idea is that when you have an account, the database tracks how well you are doing on certain words. If you do well on some words, they are less likely to appear in future tests, and if you do poorly, they are more likely to appear. However, the tests should still work without having to authenticate yourself.

## To do
* populate mongo database with lots of artikels
* create a artikel service
* create functions for adding artikels to users database
* figure out design for adding artikels - maybe permissions for users?
* unit tests!!

## To do later

* make a page for adjektiv declension testing
* make a page for testing Fälle
* create home page

## Ongoing
* improve look and feel of artikel component (would like have a better looking button system) - lots too bootstrapy at the moment.
* Populate database ... !


## Done
* Create first step in quiz - a single page quiz on nouns and their articles
* create a nav bar so other quizzes can be made
* have the artikel-list component choose a random selection from the database to create the quiz
* create adjektiv components
* make the nav bar functional / set up routing
* create front end authentication
* create back end for authentication
