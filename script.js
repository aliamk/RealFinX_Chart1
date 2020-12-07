
   // Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);
// chart.numberFormatter.numberFormat = "#.a"

    // Data for both series
chart.data = [{
      "Year of Final Close": "1990",
      "Number of Funds": 7,
      "Capital Raised": 353
    }, {
      "Year of Final Close": "1991",
      "Number of Funds": 6,
      "Capital Raised": 969
    }, {
      "Year of Final Close": "1992",
      "Number of Funds": 11,
      "Capital Raised": 2450
    }, {
      "Year of Final Close": "1993",
      "Number of Funds": 18,
      "Capital Raised": 1934
    }, {
      "Year of Final Close": "1994",
      "Number of Funds": 20,
      "Capital Raised": 4083
    }, {
      "Year of Final Close": "1995",
      "Number of Funds": 45,
      "Capital Raised": 8003
    }, {
      "Year of Final Close": "1996",
      "Number of Funds": 44,
      "Capital Raised": 10033
    }, {
      "Year of Final Close": "1997",
      "Number of Funds": 56,
      "Capital Raised": 14721
    }, {
      "Year of Final Close": "1998",
      "Number of Funds": 62,
      "Capital Raised": 18729
    }, {
      "Year of Final Close": "1999",
      "Number of Funds": 79,
      "Capital Raised": 17402
    }, {
      "Year of Final Close": "2000",
      "Number of Funds": 67,
      "Capital Raised": 19088      
    }, {
      "Year of Final Close": "2001",
      "Number of Funds": 77,
      "Capital Raised": 23026      
    }, {
      "Year of Final Close": "2002",
      "Number of Funds": 95,
      "Capital Raised": 15610      
    }, {
      "Year of Final Close": "2003",
      "Number of Funds": 118,
      "Capital Raised": 17938      
    }, {
      "Year of Final Close": "2004",
      "Number of Funds": 215,
      "Capital Raised": 50920      
    }, {
      "Year of Final Close": "2005",
      "Number of Funds": 286,
      "Capital Raised": 81284
    }, {
      "Year of Final Close": "2006",
      "Number of Funds": 346,
      "Capital Raised": 106065
    }, {
      "Year of Final Close": "2007",
      "Number of Funds": 426,
      "Capital Raised": 145694
    }, {
      "Year of Final Close": "2008",
      "Number of Funds": 404,
      "Capital Raised": 151303
    }, {
      "Year of Final Close": "2009",
      "Number of Funds": 243,
      "Capital Raised": 59611
    }, {
      "Year of Final Close": "2010",
      "Number of Funds": 289,
      "Capital Raised": 69571,
      // "lineDash": "5,5",
    }, {
      "Year of Final Close": "2011",
      "Number of Funds": 353,
      "Capital Raised": 89561,
      // "lineDash": "5,5",
    }, {
      "Year of Final Close": "2012",
      "Number of Funds": 417,
      "Capital Raised": 103504,
      // "lineDash": "5,5",
    }, {
      "Year of Final Close": "2013",
      "Number of Funds": 458,
      "Capital Raised": 138347,
      // "lineDash": "5,5",
    }, {
      "Year of Final Close": "2014",
      "Number of Funds": 478,
      "Capital Raised": 147904,
      // "lineDash": "5,5",
    }, {
        "Year of Final Close": "2015",
        "Number of Funds": 505,
        "Capital Raised": 168215,
        // "lineDash": "5,5",
    }, {
      "Year of Final Close": "2016",
      "Number of Funds": 504,
      "Capital Raised": 149714,
      // "lineDash": "5,5",
    }, {
          "Year of Final Close": "2017",
          "Number of Funds": 549,
          "Capital Raised": 166255        
    }, {
        "Year of Final Close": "2018",
        "Number of Funds": 561,
        "Capital Raised": 164107        
    }, {
      "Year of Final Close": "2019",
      "Number of Funds": 484,
      "Capital Raised": 191412    

      // "strokeWidth": 1,
      // "columnDash": "5,5",
      // "fillOpacity": 0.2,
      // "additional": "(projection)"
}];
    
    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dateFormats.setKey("Year", "yyyy");
    dateAxis.title.text = "Year of Final Close"
    dateAxis.renderer.grid.template.stroke = "grey";

    /* LEFT Y AXIS  (LINE) */
    var valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis1.title.text = "Number of Funds";
    valueAxis1.renderer.grid.template.disabled = true;
    valueAxis1.renderer.minGridDistance = 100;    

    /* RIGHT Y AXIS (COLUMNS) */
    var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis2.title.text = "Capital Raised (USD bn)";
    valueAxis2.renderer.opposite = true;    
    valueAxis2.renderer.grid.template.stroke = "grey";
    valueAxis2.renderer.minGridDistance = 100;
    
    // LINE SERIES
    var series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueY = "Number of Funds";
    series1.dataFields.dateX = "Year of Final Close";
    series1.name = "Number of Funds";
    series1.stroke = am4core.color("black");
    series1.strokeWidth = 2;
    series1.tensionX = 0.85;
    series1.tensionY = 0.85;
    series1.yAxis = valueAxis1;
    
    // BULLETS ON LINE
    // bullet1 = series1.bullets.push(new am4charts.CircleBullet());
    let square = series1.bullets.push(new am4core.Rectangle);
    square.width = 5;
    square.height = 5;
    square.horizontalCenter = "middle";
    square.verticalCenter = "middle";
    square.fill = am4core.color("black")
    square.fillOpacity = 0.5;
    // square.circle.radius = 5;
    square.strokeWidth = 0.5;
    square.tooltipText = `{name}\n[bold font-size: 15]: {valueY}[/]`
    
    /* Create COLUMN(BAR) series */
    var series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = "Capital Raised";
    series2.dataFields.dateX = "Year of Final Close";
    series2.yAxis = valueAxis2;
    series2.name = "Capital Raised";
    series2.columns.template.tooltipText = "{name}\n[bold font-size: 20]${valueY}[/]";
    series2.tooltip.getFillFromObject = false;
    series2.tooltip.background.fill = am4core.color("black");
    // series2.fill = chart.colors.getIndex(0); 
    series2.columns.template.fill = am4core.color("#CC2431")
    series2.strokeWidth = 0;
    series2.clustered = false;
    series2.columns.template.width = am4core.percent(80);
    series2.toBack()

    chart.legend = new am4charts.Legend();
    chart.legend.position = "bottom";

//  DATA TABLE
    chart.events.on("datavalidated", function(ev) {
      chart.exporting.getHTML("html", {
        addColumnNames: true, tableClass: "table table-striped table-hover"
      }, false).then(function(html) {
        var div = document.getElementById("chartdata");
        div.innerHTML = html;
      });
    });