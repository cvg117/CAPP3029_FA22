d3.csv("library_visits_jan22.csv").then(data => {

    for (let d of data) {
        d.num = +d.num; // Coerces number column to int data type
    };

    const height = 500, // Define height, width and margin buffers for chart
          width = 750,
          margin = ({ top: 25, right: 30, bottom: 35, left: 50 });

    let svg = d3.select("#chart") 
        .append("svg")
        .attr("viewBox", [0, 0, width, height]); // resizes chart based on window
    
    let x = d3.scaleBand() // Provides data, positioning, and dimensions for elements on x-axis
        .domain(data.map(d => d.branch))
        .range([margin.left, width - margin.right])
        .padding(0.1);
    
    let y = d3.scaleLinear() // Provides data and dimensions for elements on y-axis
        .domain([0, d3.max(data, d => d.num)]).nice()
        .range([height - margin.bottom, margin.top]);
    
    svg.append("g") // places x axis at bottom
        .attr("transform", `translate(0,${height - margin.bottom + 5})`)
        .call(d3.axisBottom(x));
    
    svg.append("g") // places y-axis on left
        .attr("transform", `translate(${margin.left - 5},0)`)
        .call(d3.axisLeft(y));

    let bar = svg.selectAll(".bar") // group bars for the chart
        .append("g")
        .data(data)
        .join("g")
        .attr("class", "bar");

    bar.append("rect") // add, color, and scale rectangles based on data
        .attr("fill", "darkolivegreen")
        .attr("x", d => x(d.branch))
        .attr("width", x.bandwidth())
        .attr("y", d => y(d.num))
        .attr("height", d => y(0) - y(d.num));
    
    bar.append('text') // adds data labels at tops of rectangles
        .text(d => d.num) // 
        .attr('x', d => x(d.branch) + (x.bandwidth()/2))
        .attr('y', d => y(d.num) + 20)
        .attr('text-anchor', 'middle')
        .style('fill', 'aliceblue');
