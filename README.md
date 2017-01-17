# corporate-dashboard-app

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Requirements
You must develop a corporate dashboard application using a front-end MVC framework of your choosing. The dashboard application must contain a header (with the currently selected dashboard’s name); a menu, allowing the user to navigate between dashboards; and the primary dashboard display area. You should find, or create, your own data files in CSV and JSON formats to provide data to the dashboards. The required dashboards are:

1. A geospatial view, identifying the number of employees at various company locations.
2. A “key metrics” view, containing components displaying: the number of open issues, a line chart reflecting number of paying customers over a period of time, and a bar chart reflecting number of reported issues over a period of time.
3. A “data view” of all issues, with an appearance similar to a spreadsheet, that is sortable and filterable. An issue should contain the following fields:
	*submission timestamp
	*customer name
	*customer email address
	*description
	*open/closed status
	*closed timestamp
	*employee name

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd corporate-dashboard-app`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
