/* D3 Line Chart */

const height = 500,
    width = 800,
    margin = ({ top: 15, right: 30, bottom: 35, left: 40 });
    
const svg = d3.select("#chart")
    .append("svg")
    .attr("viewBox", [0, 0, width, height]);

d3.csv('long-term-interest-canada.csv').then(data => {
    
    let timeParse = d3.timeParse("%Y-%m")

    for (let d of data) {
        d.Num = +d.Num
        d.Month = timeParse(d.Month);
    }

    let x = d3.scaleTime()
        .domain(d3.extent(data, d => d.Month))
        .range([margin.left, width - margin.right]);

    let y = d3.scaleLinear()
        .domain([0,d3.max(data, d => d.Num)])
        .range([height - margin.bottom, margin.top]);

    svg.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .attr("class", "y-axis") //define as class to apply certain css formatting on a class basis 
        .call(d3.axisLeft(y).tickSizeOuter(0).tickFormat(d => d + "%").tickSize(-width));

    svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickSizeOuter(0));

    svg.append("text")
      .attr("class", "x-label")
      .attr("text-anchor", "end")
      .attr("x", width - margin.right)
      .attr("y", height)
      .attr("dx", "0.5em") //shifting attribute
      .attr("dy", "-.01em") //shifting attribute
      .style("font-size", "12px")
      .text("Month");
    
    svg.append("text")
      .attr("class", "y-label")
      .attr("text-anchor", "end")
      .attr("x", -margin.top/2)
      .attr("dx", "-0.2em")
      .attr("y", 10)
      .attr("transform", "rotate(-90)")
      .style("font-size", "12px")
      .text("Interest rate");

    let line = d3.line() // Create the points of each row of our data
        .x(d => x(d.Month))
        .y(d => y(d.Num));

    svg.append("path") // draws the line onto our svg
        .datum(data)
        .attr("d", line)
        .attr("fill", "none")
        .attr("stroke", "darkolivegreen");

  });