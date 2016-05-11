$(function() {

	//	Test Data
	var data = [
	{age: 'A', population: 27},
	{age: 'B', population: 44},
	{age: 'C', population: 21},
	{age: 'D', population: 38},
	{age: 'E', population: 141},
	{age: 'F', population: 88},
	{age: 'G', population: 61}	
	];


	var myChart = PieChart();

	var chartWrapper = d3.select('#myDiv')
		.datum(data)
		.call(myChart);

	//	Change the chart's width to 900 and height to 400

	myChart.width(900)
			.height(440);

	//	Change the radius to 200
	myChart.radius(200);

	//	Add the colors Red, Orange, Yellow, Green, Blue, Violet, Grey to the colorRange
	myChart.colorRange(['red','orange','yellow','green','blue','violet','grey']);

	chartWrapper.call(myChart);
});