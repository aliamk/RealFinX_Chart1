// am4core.ready(function() {
//     // Themes begin
//     am4core.useTheme(am4themes_animated);
//     // Themes end
//     // Create chart instance
//     var chart = am4core.create("chartdiv", am4charts.XYChart);
    
//     //
//     // Increase contrast by taking evey second color
//     chart.colors.step = 2;
    
//     // Add data
//     chart.data = generateChartData();
    
//     // Create axes
//     var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
//     dateAxis.renderer.minGridDistance = 50;
    
//     // Create series
//     function createAxisAndSeries(field, name, opposite, bullet) {
//       var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//       if(chart.yAxes.indexOf(valueAxis) != 0){
//           valueAxis.syncWithAxis = chart.yAxes.getIndex(0);
//         }
      
//       var series = chart.series.push(new am4charts.LineSeries());
//       series.dataFields.valueY = field;
//       series.dataFields.dateX = "date";
//       series.strokeWidth = 2;
//       series.yAxis = valueAxis;
//       series.name = name;
//       series.tooltipText = "{name}: [bold]{valueY}[/]";
//       series.tensionX = 0.8;
//       series.showOnInit = true;
      
//       var interfaceColors = new am4core.InterfaceColorSet();  
      
      
//       valueAxis.renderer.line.strokeOpacity = 1;
//       valueAxis.renderer.line.strokeWidth = 2;
//       valueAxis.renderer.line.stroke = series.stroke;
//       valueAxis.renderer.labels.template.fill = series.stroke;
//       valueAxis.renderer.opposite = opposite;
//     }
    
//     createAxisAndSeries("funds",
//     "Funds",
//     false,
//     "rectangle");
//     createAxisAndSeries("years",
//     "Year",
//     true,
//     "rectangle");
//     createAxisAndSeries("usd",
//     "USD (billions)",
//     true,
//     "rectangle");
    
//     // Add legend
//     chart.legend = new am4charts.Legend();
    
//     // Add cursor
//     chart.cursor = new am4charts.XYCursor();
    
//     // generate some random data, quite different range
//     function generateChartData() {
//       var chartData = [];
//       var firstDate = new Date();
//       firstDate.setDate(firstDate.getDate() - 100);
//       firstDate.setHours(0,
//         0,
//         0,
//         0);
    
//       var funds = 1600;
//       var usd = 2900;
//       var years = 8700;
    
//       for (var i = 0; i < 15; i++) {
//             // we create date objects here. In your data, you can have date strings
//             // and then set format of your dates using chart.dataDateFormat property,
//             // however when possible, use date objects, as this will speed up chart rendering.
//         var newDate = new Date(firstDate);
//         newDate.setDate(newDate.getDate() + i);
    
//         funds += Math.round((Math.random()<0.5?1: -1)*Math.random()*10);
//         usd += Math.round((Math.random()<0.5?1: -1)*Math.random()*10);
//         years += Math.round((Math.random()<0.5?1: -1)*Math.random()*10);
    
//         chartData.push({
//           date: newDate,
//           funds: funds,
//           usd: usd,
//           years: years
//             });
//         }
//       return chartData;
//     }
// }); 