
   // Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);
// chart.numberFormatter.numberFormat = "#.a"

    // Data for both series
chart.data = [{
      "Year": "1990",
      "Funds": 7,
      "Capital_Raised": 353
    }, {
      "Year": "1991",
      "Funds": 6,
      "Capital_Raised": 969
    }, {
      "Year": "1992",
      "Funds": 11,
      "Capital_Raised": 2450
    }, {
      "Year": "1993",
      "Funds": 18,
      "Capital_Raised": 1934
    }, {
      "Year": "1994",
      "Funds": 20,
      "Capital_Raised": 4083
    }, {
      "Year": "1995",
      "Funds": 45,
      "Capital_Raised": 8003
    }, {
      "Year": "1996",
      "Funds": 44,
      "Capital_Raised": 10033
    }, {
      "Year": "1997",
      "Funds": 56,
      "Capital_Raised": 14721
    }, {
      "Year": "1998",
      "Funds": 62,
      "Capital_Raised": 18729
    }, {
      "Year": "1999",
      "Funds": 79,
      "Capital_Raised": 17402
    }, {
      "Year": "2000",
      "Funds": 67,
      "Capital_Raised": 19088      
    }, {
      "Year": "2001",
      "Funds": 77,
      "Capital_Raised": 23026      
    }, {
      "Year": "2002",
      "Funds": 95,
      "Capital_Raised": 15610      
    }, {
      "Year": "2003",
      "Funds": 118,
      "Capital_Raised": 17938      
    }, {
      "Year": "2004",
      "Funds": 215,
      "Capital_Raised": 50920      
    }, {
      "Year": "2005",
      "Funds": 286,
      "Capital_Raised": 81284
    }, {
      "Year": "2006",
      "Funds": 346,
      "Capital_Raised": 106065
    }, {
      "Year": "2007",
      "Funds": 426,
      "Capital_Raised": 145694
    }, {
      "Year": "2008",
      "Funds": 404,
      "Capital_Raised": 151303
    }, {
      "Year": "2009",
      "Funds": 243,
      "Capital_Raised": 59611
    }, {
      "Year": "2010",
      "Funds": 289,
      "Capital_Raised": 69571,
      // "lineDash": "5,5",
    }, {
      "Year": "2011",
      "Funds": 353,
      "Capital_Raised": 89561,
      // "lineDash": "5,5",
    }, {
      "Year": "2012",
      "Funds": 417,
      "Capital_Raised": 103504,
      // "lineDash": "5,5",
    }, {
      "Year": "2013",
      "Funds": 458,
      "Capital_Raised": 138347,
      // "lineDash": "5,5",
    }, {
      "Year": "2014",
      "Funds": 478,
      "Capital_Raised": 147904,
      // "lineDash": "5,5",
    }, {
        "Year": "2015",
        "Funds": 505,
        "Capital_Raised": 168215,
        // "lineDash": "5,5",
    }, {
      "Year": "2016",
      "Funds": 504,
      "Capital_Raised": 149714,
      // "lineDash": "5,5",
    }, {
          "Year": "2017",
          "Funds": 549,
          "Capital_Raised": 166255        
    }, {
        "Year": "2018",
        "Funds": 561,
        "Capital_Raised": 164107        
    }, {
      "Year": "2019",
      "Funds": 484,
      "Capital_Raised": 191412    

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
    series1.dataFields.valueY = "Funds";
    series1.dataFields.dateX = "Year";
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
    series2.dataFields.valueY = "Capital_Raised";
    series2.dataFields.dateX = "Year";
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