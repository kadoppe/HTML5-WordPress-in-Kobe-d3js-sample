(function() {
  var data = [{year: 2007, account: 200},
              {year: 2008, account: 250},
              {year: 2009, account: 300}];

  var chart = d3.selectAll('.chart');
  chart.append('div');
  chart.append('div');
  chart.append('div');

  chart
    .selectAll('div')
    .data(data)
    .style('width', function(d) {
      return d.account + "px";
    })
    .text(function(d) {
      return d.account;
    });
})();
