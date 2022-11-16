(function multiline() {
let height = 500,
    width = 800,
    margin = ({ top: 25, right: 30, bottom: 35, left: 30 })
    innerWidth = width - margin.left - margin.right;

    const svg = d3.select("#chart_multiline")
    .append("svg")
    .attr("viewBox", [0, 0, width, height]);

    d3.csv("multiline_data.csv").then(data => {
    
    let parser = d3.timeParse("%b");

    let victims = new Set()

    for (let d of data) {
        d.month = parser(d.month);
        d.count = +d.count;
        d.avg_sev = +d.avg_sev;
        victims.add(d.victim)
    }

    let x = d3.scaleTime()
        .domain(d3.extent(data, d => d.month))
        .range([margin.left, width - margin.right]);

    let y1 = d3.scaleLinear()
        .domain(d3.extent(data, d => d.count))
        .range([height - margin.bottom, margin.top]);

    let y2 = d3.scaleLinear()
        .domain(d3.extent(data, d => d.avg_sev))
        .range([height - margin.bottom, margin.top]);

    svg.append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x));

    svg.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y1).tickSize(-innerWidth).tickFormat(d => d));

    svg.append("g")
        .attr("transform", `translate(${width - margin.right},0)`)
        .call(d3.axisRight(y2).tickSize(-innerWidth).tickFormat(d => d));

    let lineOne = d3.line()
        .x(d => x(d.month))
        .y(d => y1(d.count));

    let lineTwo = d3.line()
        .x(d => x(d.month))
        .y(d => y2(d.avg_sev));

    for (let vic of victims) {
        let vicData = data.filter(d => d.victim === vic);

        let g = svg.append("g")
        .attr("class", 'victim')
        // .on('mouseover', function () {
        //     d3.selectAll(".highlight").classed("highlight", false);
        //     d3.select(this).classed("highlight", true);
        // }).on("mouseout", function() {
        //     d3.select(this).classed("highlight", false)});
        .on("mouseover", function() {
            d3.select(this)
              .attr("opacity", 1);
          })
        .on("mouseout", function() {
            d3.select(this)
              .attr("opacity", 0.6);
          })

        g.append("path")
        .datum(vicData)
        .attr("fill", "none")
        .attr("stroke", "#e41a1c")
        .attr("d", lineOne)
        .style("stroke-width", 3.5)
        .style("opacity", 0.6)

        g.append("path")
        .datum(vicData)
        .attr("fill", "none")
        .attr("stroke", "#984ea3")
        .attr("d", lineTwo)
        .style("stroke-width", 3.5)
        .style("opacity", 0.6)

        let lastEntry = vicData[vicData.length - 1]; //last piece of data to position text x and y

        g.append("text")
        .text(vic)
        .attr("x", x(lastEntry.month)-100) // lastEntry.month
        .attr("y", y1(lastEntry.count) - 10) // lastEntry.count
        .attr("dominant-baseline", "middle")
        .attr("fill", "#999");

        g.append("text")
        .text(vic)
        .attr("x", x(lastEntry.month) -50)
        .attr("y", y2(lastEntry.avg_sev)-20)
        .attr("dominant-baseline", "middle")
        .attr("fill", "#999");
    }
    
    });
})();