var PieChart = function() {
	var width = 1000,
		height = 540,
		radius = Math.min(width, height) / 2,
		colorRange = [];


	

	var chart = function(selection) {
		selection.each(function(data) {
	var color = d3.scale.ordinal()
			.range(colorRange);

	var arc = d3.svg.arc()
		.outerRadius(radius - 10)
		.innerRadius(0);

	var labelArc = d3.svg.arc()
					.outerRadius(radius / 2)
					.innerRadius(radius / 2);

	var pie = d3.layout.pie()
					.sort(null)
					.value(function(d) {return d.population; });





			var svg = d3.select(this).append("svg")
					.attr("width", width)
					.attr("height", height)
					.append("g")
					.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

			var g = svg.selectAll(".arc").data(pie(data));

			g.enter()
			 .append("g")
			 .attr("class", "arc");

			g.append("path")
				.attr("d", arc)
				.style("fill", function(d) {return color(d.data.age); });

			g.append("text")
				.attr("transform", function(d) {return "translate(" + labelArc.centroid(d) + ")"; })
				.attr("dy", ".35em")
				.text(function(d) {return d.data.age; });
		})
	};

//	Potential functions
	// width
	// height
	// color.range
	// age
	// population
	chart.width = function(value) {
		if(!arguments.length) {
			return width;
		}
		console.log(width)
		console.log(radius)
		width = value;
		console.log(width)
		console.log(radius)
		return this;
	};

	chart.height = function(value) {
		if(!arguments.length) {
			return height;
		}
		height = value;
		return this;
	};

	chart.radius = function(value) {
		if(!arguments.length) {
			return radius;
		}
		radius = value;
		return this;
	};

	chart.colorRange = function(value) {
		if(!arguments.length) {
			return colorRange;
		}
		//console.log(colorRange)
		colorRange = value;
		//console.log(colorRange)
		return this;
	}
	return chart;
}