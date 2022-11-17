(function multiline() {
let height = 500,
    width = 800,
    margin = ({ top: 25, right: 30, bottom: 35, left: 35 })
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
        .call(d3.axisLeft(y1).tickFormat(d => d));

    svg.append("g")
        .attr("transform", `translate(${width - margin.right},0)`)
        .call(d3.axisRight(y2).tickFormat(d => d));

    let colors = ["#e41a1c", "#984ea3"];
    let pos = [[[400,70],[550,430]],[[350,420],[600,30]]]
    let i = 0;

    for (let vic of victims) {
        let vicData = data.filter(d => d.victim === vic);

        buildLine(vicData, "avg_sev", y2, colors[i], vic, pos[i][0], "Severity");
        buildLine(vicData, "count", y1, colors[i], vic, pos[i][1], 'Count');

        i++
    }
    function buildLine(data, yVal, yScale, color, vic, labelPos, lineType) {

        let line = d3.line()
          .x(d => x(d.month))
          .y(d => yScale(d[yVal]));

        let g = svg.append("g")
        .attr("opacity", 0.6)
        .on("mouseover", function() {
            d3.select(this)
              .attr("opacity", 1);
          })
        .on("mouseout", function() {
            d3.select(this)
              .attr("opacity", 0.6);
          });

        g.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", color)
        .attr("d", line)
        .style("stroke-width", 3.5)

        g.append("text")
        .text(vic)
        .attr("x", labelPos[0])
        .attr("y", labelPos[1]-7)
        .attr("dominant-baseline", "middle")
        .attr("fill", color);

        g.append("text")
        .text(lineType)
        .attr("x", labelPos[0])
        .attr("y", labelPos[1]+9)
        .attr("dominant-baseline", "middle")
        .attr("fill", color);
    }
    });
})();
