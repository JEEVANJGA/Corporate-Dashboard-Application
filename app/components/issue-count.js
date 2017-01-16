import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement() {
	 google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1ZYdibZkIss4LzZ0vs2GwKbEi6AlSI_p5vzTHkBJ5fvM/gviz/tq?gid=397175714&headers=1');
								  query.send(handleQueryResponse);
								}
       function handleQueryResponse(response) {
					if (response.isError()) {
				        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
				        return;
				      }
				  var data = response.getDataTable();
				  //console.log(data);
				  var options = {
				          title: 'Issues Open & Closed',
				          pieHole: 0.1,
				        };
        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
	}
}
});
