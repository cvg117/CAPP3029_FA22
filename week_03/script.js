d3.csv("covid.csv").then(data => {
    for (let d of data) {
        d.cases = +d.cases;
    };
    const height = 500,
        width = 800,
        margin = ({top: 25, right: 30, bottom: 35, left: 50});

    let svg = d3.select("#chart").append("svg").attr("viewbox", [0, 0, width, height]);

    let x = d3.scaleBand()
        .domain(data.map(d => d.country)) // x-axis is countries from our data domain defines WHAT our data is
        .range([margin.left, width - margin.right]) //start and stop within SVG box
        .padding(0.1); //width between bars

    let y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.cases)]).nice()
        .range([height - margin.bottom, margin.top]); // building from top down

    const xAxis = g => g
        .attr("transform", `translate(0, ${height - margin.bottom + 5})`)
        .call(d3.axisBottom(x)); // .call will auto-run the function it is connected to
    
    const yAxis = g => g
        .attr("transform", `translate(${margin.left - 5}, 0)`)
        .call(d3.axisLeft(y));

    svg.append("g")
        .call(xAxis)
    svg.append("g")
        .call(yAxis);

    let bar = svg.selectAll(".bar") // these lines create the variable bar with the following data
        .append("g")
        .data(data)
        .join("g")
        .attr("class", "bar")
    bar.append("rect") // make it a "rect" svg
        .attr("fill", "steelblue") // fill it with steel blue
        .attr("x", d => x(d.country)) // position it on x axis relative to the country names
        .attr("width", x.bandwidth()) // give it a width of the scaled band / from before
        .attr("y", d => y(d.cases)) // set the positioning on the y axis relative to the case counts
        .attr("height", d => y(0) - y(d.cases)) // start from y = 0 and build up to the height equivalent to the case numbers