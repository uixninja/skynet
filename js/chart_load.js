$(document).ready(function() {
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart1);
      google.charts.setOnLoadCallback(drawChart2);

      function drawChart1() {
        var chartName = 'doughnut_chart1';
        var values = [
            ['x', 'y'],
            ['Skynet Core Development', 70],
            ['Network Development and Growth', 19],
            ['System on Chip Ecosystem', 5],
            ['Supporting Skynet Blockchains', 3],
            ['Supporting Skynet Dapps', 3]
        ];
        var data = google.visualization.arrayToDataTable(values);

        var options = {
            pieHole: 0.7,
            backgroundColor: 'none',
            slices: { 0: { color: '#719cff' }, 1: { color: '#768ae0' }, 2: { color: '#58dfbc' }, 3: { color: '#ff7db6' }, 4: { color: '#fe3766' } },
            legend: { position: 'none', maxLines: 1 },
            chartArea: { 'width': '100%', 'height': '100%' },
            pieSliceText: 'none',
            pieSliceBorderColor: '#13162b'
        };

        var chart = new google.visualization.PieChart(document.getElementById(chartName));

        google.visualization.events.addListener(chart, 'select', function(){
            var val = values[chart.getSelection()[0].row + 1];
            document.querySelector('#' + chartName + ' + div').style.display = 'block';
            document.querySelector('#' + chartName + ' + div .percent').innerHTML = val[1] + '%';
            document.querySelector('#' + chartName + ' + div .percent').style.color = options.slices[chart.getSelection()[0].row].color
            document.querySelector('#' + chartName + ' + div .text').innerHTML = val[0];
        });

        chart.draw(data, options);
        chart.setSelection([{row: 0}]);
      }



      function drawChart2() {
        var chartName = 'doughnut_chart2';
        var values = [
            ['x', 'y'],
            ['Distribution Through Skynet Cores', 55],
            ['Token Sale (15% Public, 5% Private)', 20],
            ['Foundation', 10],
            ['OpenSingularity Team', 8],
            ['OEM and 5DK Developers', 6],
            ['Bounty and Legal', 1]
        ];
        var data = google.visualization.arrayToDataTable(values);

        var options = {
            pieHole: 0.7,
            backgroundColor: 'none',
            slices: { 0: { color: '#719cff' }, 1: { color: '#768ae0' }, 2: { color: '#58dfbc' }, 3: { color: '#ff7db6' }, 4: { color: '#ffb866' }, 5: { color: '#fe3766' } },
            legend: { position: 'none', maxLines: 1 },
            chartArea: { 'width': '100%', 'height': '100%' },
            pieSliceText: 'none',
            pieSliceBorderColor: '#13162b'
        };

        var chart = new google.visualization.PieChart(document.getElementById(chartName));

        google.visualization.events.addListener(chart, 'select', function(){
            var val = values[chart.getSelection()[0].row + 1];
            document.querySelector('#' + chartName + ' + div').style.display = 'block';
            document.querySelector('#' + chartName + ' + div .percent').innerHTML = val[1] + '%';
            document.querySelector('#' + chartName + ' + div .percent').style.color = options.slices[chart.getSelection()[0].row].color
            document.querySelector('#' + chartName + ' + div .text').innerHTML = val[0];
        });

        chart.draw(data, options);
        chart.setSelection([{row: 0}]);
      }
});