(function() {
  var data = [{year: 2007, account: 200},
              {year: 2008, account: 250},
              {year: 2009, account: 300}];

  var chart = d3.selectAll('.chart');

  bindData();

  data.push({year: 2010, account: 250});
  data.push({year:2011, account: 20});

  bindData();

  function bindData() {
    var selection = chart
      .selectAll('div')
      .data(data, function(d){
        return d.year
      });

    selection
      .enter()
      .append('div');

    selection
      .style('width', function(d) {
        return d.account + "px";
      })
      .text(function(d) {
        return d.account;
      });
  }
})();
