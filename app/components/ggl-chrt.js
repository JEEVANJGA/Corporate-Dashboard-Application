import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement() {
  google.charts.load('upcoming', {'packages':['geochart']});
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {

        var data = google.visualization.arrayToDataTable([
          ['Country', 'employee_count'],
          ['Germany', 200],
          ['United States', 1300],
          ['Brazil', 1400],
          ['Canada', 1150],
          ['France', 600],
          ['RU', 1400],
          ['INDIA',1500],
          ['CHINA',1200],
          ['EH',1000],
          ['ML',750],
          ['LS',700]
        ]);

        var options = {};

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }
}
});
