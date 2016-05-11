var PieChart = function() {
	var width = 1000,
		height = 540,
		radius = Math.min(width, height) / 2,
		colorRange = ['#0000b3','#0000cc','#1a1aff','#6666ff','#9999ff','#b3b3ff','#ccccff'],
		category = 'letter',
		category_values = 'size';


	

	var chart = function(selection) {
		selection.each(function(data) {
	var color = d3.scale.ordinal()
			.range(colorRange);

	var arc = d3.svg.arc()
		.outerRadius(radius - 10)
		.innerRadius(0);

	var labelArc = d3.svg.arc()
					.outerRadius(radius - 40)
					.innerRadius(radius - 40);

	var pie = d3.layout.pie()
					.sort(null)
					.value(function(d) {return d[category_values]; });





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
				.style("fill", function(d) {return color(d.data[category]); });

			g.append("text")
				.attr("transform", function(d) {return "translate(" + labelArc.centroid(d) + ")"; })
				.attr("dy", ".35em")
				.text(function(d) {return d.data[category]; });
		})
	};

	chart.width = function(value) {
		if(!arguments.length) {
			return width;
		}
		width = value;
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
		colorRange = value;
		return this;
	};

	chart.category = function(value) {
		if(!arguments.length) {
			return category;
		}
		category = value;
		return this;
	};

	chart.category_values = function(value) {
		if(!arguments.length) {
			return category_values;
		}
		category_values = value;
		return this;
	};

	return chart;
}