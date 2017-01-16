import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement() {
		google.charts.load('current', {packages: ['corechart', 'bar']});
        google.charts.setOnLoadCallback(drawBasic);
        function drawBasic() {var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1ZYdibZkIss4LzZ0vs2GwKbEi6AlSI_p5vzTHkBJ5fvM/gviz/tq?gid=684829091&headers=1');
								  query.send(handleQueryResponse);
								}
		function handleQueryResponse(response) {
					if (response.isError()) {
				        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
				        return;
				      }
				  var data = response.getDataTable();
				  console.log(data);
				  var options = {
				  	title: 'Reported issues in the year 2016',
				  	chartArea: {width: '50%'},
						        hAxis: {
						          title: 'Time',
						          minValue: 0
						        },
						        vAxis: {
						          title: 'Customers'
						        },

						        
				        };
         var chart = new google.visualization.BarChart(document.getElementById('chart_divb'));

      chart.draw(data, options);
	}
	}
});
