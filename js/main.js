$(function() {

	//	Initial Test Data
	var data = [
	{letter: 'A', size: 27},
	{letter: 'B', size: 44},
	{letter: 'C', size: 21},
	{letter: 'D', size: 38},
	{letter: 'E', size: 141},
	{letter: 'F', size: 88},
	{letter: 'G', size: 61}	
	];

	//	Render the PieChart
	var myChart = PieChart();

	//	Initiate the chart
	var chartWrapper = d3.select('#myDiv')
		.datum(data)
		.call(myChart);


	//	Update chart parameters and the data

	//  Create a new dataset to be used
	//	Example data to input would be city population:
	//			Seattle with a population of 652405
	//			Los Angeles with a population of 3884000
	//			New York City with a population of 8406000
	//			Chicago with a population of 2719000
	var newDataSet = [
		{city: 'Seattle', population: 652405},
		{city: 'LA', population: 3884000},
		{city: 'NYC', population: 8406000},
		{city: 'Chicago', population: 2719000}
	];

	//	Change the chart's width to 900 and height to 400
	myChart.width(900)
			.height(440);

	//	Change the radius to 200
	myChart.radius(200);

	//	Change category and category_value to match with the new data set parameters
	myChart.category('city').category_values('population');

	//	Change the colorRange to Green, Orange, Blue, Red
	myChart.colorRange(['green','orange','blue','red']);

	//	Re-call myChart function on chartWrapper
	chartWrapper.datum(newDataSet).call(myChart);
});