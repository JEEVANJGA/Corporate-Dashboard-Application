import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement() {
  google.charts.load('upcoming', {'packages':['geochart']});
      google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1ZYdibZkIss4LzZ0vs2GwKbEi6AlSI_p5vzTHkBJ5fvM/edit#gid=0');
								  query.send(handleQueryResponse);
								}

function handleQueryResponse(response) {
	if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }
  var data = response.getDataTable();
  console.log(data);
  var options = {};
  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
  chart.draw(data, options);
}
}
});

