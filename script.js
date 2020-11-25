
   // Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);
chart.numberFormatter.numberFormat = "#.a"

    // Data for both series
chart.data = [ {
      "Year": "1990",
      "Funds": 7,
      "Capital Raised": 353
    }, {
      "Year": "1991",
      "Funds": 6,
      "Capital Raised": 969
    }, {
      "Year": "1992",
      "Funds": 11,
      "Capital Raised": 2450
    }, {
      "Year": "1993",
      "Funds": 18,
      "Capital Raised": 1934
    }, {
      "Year": "1994",
      "Funds": 20,
      "Capital Raised": 4083
    }, {
      "Year": "1995",
      "Funds": 45,
      "Capital Raised": 8003
    }, {
      "Year": "1996",
      "Funds": 44,
      "Capital Raised": 10033
    }, {
      "Year": "1997",
      "Funds": 56,
      "Capital Raised": 14721
    }, {
      "Year": "1998",
      "Funds": 62,
      "Capital Raised": 18729
    }, {
      "Year": "1999",
      "Funds": 79,
      "Capital Raised": 17402
    }, {
      "Year": "2000",
      "Funds": 67,
      "Capital Raised": 19088      
    }, {
      "Year": "2001",
      "Funds": 77,
      "Capital Raised": 23026      
    }, {
      "Year": "2002",
      "Funds": 95,
      "Capital Raised": 15610      
    }, {
      "Year": "2003",
      "Funds": 118,
      "Capital Raised": 17938      
    }, {
      "Year": "2004",
      "Funds": 215,
      "Capital Raised": 50920      
    }, {
      "Year": "2005",
      "Funds": 286,
      "Capital Raised": 81284
    }, {
      "Year": "2006",
      "Funds": 346,
      "Capital Raised": 106065
    }, {
      "Year": "2007",
      "Funds": 426,
      "Capital Raised": 145694
    }, {
      "Year": "2008",
      "Funds": 404,
      "Capital Raised": 151303
    }, {
      "Year": "2009",
      "Funds": 243,
      "Capital Raised": 59611
    }, {
      "Year": "2010",
      "Funds": 289,
      "Capital Raised": 69571,
      // "lineDash": "5,5",
    }, {
      "Year": "2011",
      "Funds": 353,
      "Capital Raised": 89561,
      // "lineDash": "5,5",
    }, {
      "Year": "2012",
      "Funds": 417,
      "Capital Raised": 103504,
      // "lineDash": "5,5",
    }, {
      "Year": "2013",
      "Funds": 458,
      "Capital Raised": 138347,
      // "lineDash": "5,5",
    }, {
      "Year": "2014",
      "Funds": 478,
      "Capital Raised": 147904,
      // "lineDash": "5,5",
    }, {
        "Year": "2015",
        "Funds": 505,
        "Capital Raised": 168215,
        // "lineDash": "5,5",
    }, {
      "Year": "2016",
      "Funds": 504,
      "Capital Raised": 149714,
      // "lineDash": "5,5",
    }, {
          "Year": "2017",
          "Funds": 549,
          "Capital Raised": 166255        
    }, {
        "Year": "2018",
        "Funds": 561,
        "Capital Raised": 164107        
    }, {
      "Year": "2019",
      "Funds": 484,
      "Capital Raised": 191412    

      // "strokeWidth": 1,
      // "columnDash": "5,5",
      // "fillOpacity": 0.2,
      // "additional": "(projection)"
}];
    
    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dateFormats.setKey("Year", "yyyy");
    dateAxis.title.text = "Year"
    dateAxis.renderer.grid.template.stroke = "grey";

    /* LEFT Y AXIS  (LINE) */
    var valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis1.title.text = "Number of Funds";
    valueAxis1.renderer.grid.template.disabled = true;
    valueAxis1.renderer.minGridDistance = 100;
    

    /* RIGHT Y AXIS (COLUMNS) */
    var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis2.title.text = "Capital Gains (USD billions)";
    valueAxis2.renderer.opposite = true;    
    valueAxis2.renderer.grid.template.stroke = "grey";
    valueAxis2.renderer.minGridDistance = 100;
    
    // LINE SERIES
    var series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueY = "Funds";
    series1.dataFields.dateX = "Year";
    series1.name = "Funds";
    series1.stroke = am4core.color("black");
    series1.strokeWidth = 2;
    series1.tensionX = 2;
    series1.yAxis = valueAxis1;
    series1.tooltipText = "{name}\n[bold font-size: 20]{valueY}[/]";
    
    /* Create COLUMN series */
    var series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = "Capital Raised";
    series2.dataFields.dateX = "Year";
    series2.yAxis = valueAxis2;
    series2.name = "Capital Raised";
    series2.tooltipText = "{name}\n[bold font-size: 20]${valueY}[/]";
    // series2.fill = chart.colors.getIndex(0); 
    series2.columns.template.fill = am4core.color("#CC2431")
    series2.strokeWidth = 0;
    series2.clustered = false;
    series2.columns.template.width = am4core.percent(80);
    series2.toBack()

    chart.legend = new am4charts.Legend();
    chart.legend.position = "bottom";

// CHART TABLE
    chart.events.on("datavalidated", function(ev) {
      chart.exporting.getHTML("html", {
        addColumnNames: true, tableClass: "table table-striped table-hover table-lg"
      }, false).then(function(html) {
        var div = document.getElementById("chartdata");
        div.innerHTML = html;
      });
    });