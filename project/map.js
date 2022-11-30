const tooltip = d3.select("body")
  .append("div")
  .attr("class", "svg-tooltip")
  .style("position", "absolute")
  .style("visibility", "hidden");

const height = 610,
  width = 975;

const svg = d3.select("#chart_map")
  .append("svg")
  .attr("viewBox", [0, 0, width, height]);

Promise.all([
  d3.json("map_data.json"),
  d3.json("chicago.json")
]).then(([data, chicagoTopology]) => {
  console.log(chicagoTopology)

  const communities = topojson.feature(chicagoTopology, chicagoTopology.objects.chicago);
  const mesh = topojson.mesh(chicagoTopology, chicagoTopology.objects.chicago);
  const projection = d3.geoMercator()
    .fitSize([width, height], mesh);
  const path = d3.geoPath().projection(projection);

  console.log("projection", projection)

  svg.append("g")
    .selectAll("path")
    .data(communities.features)
    .join("path")
    .attr("stroke", "#121212")
    .attr("fill", "#fefefe")
    .attr("d", path)

    svg.append("g")
    .selectAll("circle")
    .data(data)
    .join("circle")
    .attr("stroke", '#ccc')
    .attr("fill", "#e41a1c")
    .attr("opacity", 0.8)
    .attr("r", d => (d.SEVERITY))
    .attr("cx", d => projection(d.LOCATION)[0]) // uses projection and returns long
    .attr("cy", d => projection(d.LOCATION)[1]) // uses projection and returns lat
    .on("mousemove", function (event, d) {
      // tooltip updated to use new data structure
      tooltip
        .style("visibility", "visible")
        .html(`Severity: ${d.SEVERITY}`)
        .style("top", (event.pageY - 10) + "px")
        .style("left", (event.pageX + 10) + "px");
      d3.select(this).attr("fill", "goldenrod");
    })
    .on("mouseout", function () {
      tooltip.style("visibility", "hidden");
      d3.select(this).attr("fill", 'brown');
    });
});