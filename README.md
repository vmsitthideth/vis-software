# Reusable Pie Chart API Reference

The code enclosed in the PieChart.js file will allow you to create pie charts with data of your choosing (well as long as it has the right amount of parameters).

***

## Usage

```javascript

	//	Initial Test Data
	var data = [
	{letter: 'U', size: 27},
	{letter: 'S', size: 44},
	{letter: 'A', size: 21}	
	];

	//	Render the PieChart
	var myChart = PieChart();

	//	Initiate the chart
	var chartWrapper = d3.select('#myDiv')
		.datum(data)
		.call(myChart);

	//	Change the colorRange to red, white, blue
	myChart.colorRange(['red','white','blue']);

	//	Re-call myChart function on chartWrapper
	chartWrapper.datum(newDataSet).call(myChart);

```

***

##	API Functions

\# *PieChart*()
> Constructs a PieChart object




\# *Chart*.**width**(number)
> Sets the current value of the width to `number` and returns the width.




\# *Chart*.**height**(number)
> Sets the current value of the height to `number` and returns the height.




\# *Chart*.**radius**(number)
> Sets the current value of the radius to `number` and returns the radius.





\# *Chart*.**colorRange**(array)
> Sets the current array of colorRange to `array` and returns the colorRange.  The `array` must be a set of colors.


Example given:
```javascript
	Chart.colorRange(['red','white','blue']);
```




\# *Chart*.**category**(string)
> Sets the current string of category to `string` and returns the category.  This will be the label of the pie slices.


Example given:
```javascript
	
	//	Given data
	var data = [
	{letter: 'U', size: 27}
	];

	Chart.category('letter');
```




\# *Chart*.**category_range**(string)
> Sets the current string of category_range to `string` and returns the category_range.  This will be the value contained in the pie slices.


Example given:
```javascript

	//	Given data
	var data = [
	{letter: 'U', size: 27}
	];

	Chart.category_range('size');
```