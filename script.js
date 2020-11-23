
   // Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);
    
    // Data for both series
chart.data = [ {
      "year": "1990",
      "funds": 21.1,
      "capital_raised": 11.5

    }, {
      "year": "1995",
      "funds": 30.5,
      "capital_raised": 26.2
    }, {
      "year": "2000",
      "funds": 34.9,
      "capital_raised": 30.1      
    }, {
      "year": "2005",
      "funds": 31.1,
      "capital_raised": 29.5
    }, {
      "year": "2010",
      "funds": 92,
      "capital_raised": 30.6,
      "lineDash": "5,5",
    }, {
        "year": "2015",
        "funds": 20,
        "capital_raised": 30.6,
        "lineDash": "5,5",
    }, {
        "year": "2017",
        "funds": 130,
        "capital_raised": 40.6        
    }, {
      "year": "2020",
      "funds": 197,
      "capital_raised": 59.6,

      "strokeWidth": 1,
      "columnDash": "5,5",
      "fillOpacity": 0.2,
      "additional": "(projection)"
    } ];
    
    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dateFormats.setKey("year", "yyyy");
    dateAxis.title.text = "Year"
    dateAxis.renderer.grid.template.stroke = "grey";

    /* LEFT Y AXIS  */
    var valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis1.title.text = "Number of Unique Funds";
    valueAxis1.renderer.grid.template.disabled = true;

    /* RIGHT Y AXIS */
    var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis2.title.text = "USD (billions)";
    valueAxis2.renderer.opposite = true;    
    valueAxis2.renderer.grid.template.stroke = "grey";
    
    // LINE SERIES
    var series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueY = "funds";
    series1.dataFields.dateX = "year";
    series1.name = "Funds";
    series1.stroke = am4core.color("black");
    series1.strokeWidth = 2;
    series1.tensionX = 0.7;
    series1.yAxis = valueAxis1;
    // series1.tooltipText = "{name}\n[bold font-size: 20]{valueY}[/]";
    
    /* Create COLUMN series */
    var series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = "capital_raised";
    series2.dataFields.dateX = "year";
    series2.yAxis = valueAxis2;
    series2.name = "Capital Raised";
    // series2.tooltipText = "{name}\n[bold font-size: 20]${valueY}M[/]";
    // series2.fill = chart.colors.getIndex(0); 
    series2.columns.template.fill = am4core.color("#CC2431")
    series2.strokeWidth = 0;
    series2.clustered = false;
    series2.columns.template.width = am4core.percent(40);

    chart.legend = new am4charts.Legend();
    chart.legend.position = "bottom";



    /* Create CATEGORY axes 
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.minGridDistance = 30;
 Create COLUMS's VALUE axis 
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.opposite = true;     // moved column y axis to the right
    valueAxis.title.text = "USD (billions)";
    // valueAxis.title.rotation = 0;
 Create COLUMN series 
    var columnSeries = chart.series.push(new am4charts.ColumnSeries());
    columnSeries.name = "Capital Raised";
    columnSeries.dataFields.valueY = "capital_raised";
    columnSeries.dataFields.categoryX = "year";
    
    columnSeries.columns.template.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
    columnSeries.columns.template.fill = am4core.color("#CC2431");                  // changed column color from default green
    columnSeries.columns.template.propertyFields.fillOpacity = "fillOpacity";
    columnSeries.columns.template.propertyFields.stroke = "stroke";
    columnSeries.columns.template.propertyFields.strokeWidth = "strokeWidth";
    columnSeries.columns.template.propertyFields.strokeDasharray = "columnDash";
    columnSeries.tooltip.label.textAlign = "middle";

    /* Create LINE's value axis 
     var SecValueAxis = chart.yAxes.push(new am4charts.ValueAxis());
     SecValueAxis.renderer.opposite = false;
     SecValueAxis.title.text = "Number of Unique Funds";
     // valueAxis.title.rotation = 0;
 Create LINE series 
    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.name = "Funds"
    lineSeries.dataFields.valueY = "funds";
    lineSeries.dataFields.categoryX = "year";
    
    lineSeries.stroke = am4core.color("black");         // changed colour of line
    lineSeries.strokeWidth = 2;
    lineSeries.propertyFields.strokeDasharray = "lineDash";
    lineSeries.tooltip.label.textAlign = "middle";
    
    var bullet = lineSeries.bullets.push(new am4charts.Bullet());
    bullet.fill = am4core.color("#fdd400"); // tooltips grab fill from parent by default
    bullet.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
    var circle = bullet.createChild(am4core.Circle);
    circle.radius = 4;
    circle.fill = am4core.color("#fff");
    circle.strokeWidth = 3;
    
    chart.data = data;
    
    }); // end am4core.ready() */