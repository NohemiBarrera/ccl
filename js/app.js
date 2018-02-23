google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChartBitcoin);

      function drawChartBitcoin() {
        var data = google.visualization.arrayToDataTable([
          ['Month', 'Sales'],
          ['Oct',  1000],
          ['Nov',  1170],
          ['Dec',  660],
          ['Jan',  600]
        ]);

        var options = {
          hAxis: {title: '',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_bitcoin'));
        chart.draw(data, options);
      }

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChartEthereum);
    function drawChartEthereum() {
        var data = google.visualization.arrayToDataTable([
          ['Month', 'Sales'],
          ['Oct',  2000],
          ['Nov',  1570],
          ['Dec',  2660],
          ['Jan',  3030]
        ]);

        var options = {
          hAxis: {title: '',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_ethereum'));
        chart.draw(data, options);
      }

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChartCardano);
    function drawChartCardano() {
        var data = google.visualization.arrayToDataTable([
          ['Month', 'Sales'],
          ['Oct',  200],
          ['Nov',  500],
          ['Dec',  360],
          ['Jan',  320]
        ]);

        var options = {
          hAxis: {title: '',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_cardano'));
        chart.draw(data, options);
      }

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChartStellar);
    function drawChartStellar() {
        var data = google.visualization.arrayToDataTable([
          ['Month', 'Sales'],
          ['Oct',  100],
          ['Nov',  500],
          ['Dec',  460],
          ['Jan',  420]
        ]);

        var options = {
          hAxis: {title: '',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_stellar'));
        chart.draw(data, options);
      }