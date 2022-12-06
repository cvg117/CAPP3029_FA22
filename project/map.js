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
    d3.csv('community_agg.csv'),
    d3.json("chicago.json")]).then(([data, agg, chicagoTopology]) => {

    const communities = topojson
      .feature(chicagoTopology, chicagoTopology.objects.chicago);
    const mesh = topojson.mesh(chicagoTopology, chicagoTopology.objects.chicago);
    const projection = d3.geoMercator()
      .fitSize([width, height], mesh);
    const path = d3.geoPath().projection(projection);
    const linker = {};

    for (let d of agg) {
      d.SEVERITY = +d.SEVERITY;
      linker[d.community] = d;
    };

    const color = d3.scaleSequential(
      d3.extent(agg, (d) => +d.SEVERITY),
      d3.interpolateYlOrRd
    );

    d3.select("#legend")
      .node()
      .appendChild(
        Legend(color, {
          title: "Aggregated Severity of Biker Injuries",
    })
    );
    
    svg.append("g")
      .selectAll("path")
      .data(communities.features)
      .join("path")
      .attr("stroke", "#5e5050")
      .attr("fill", d => (d.properties.community in linker) ? color(linker[d.properties.community].SEVERITY) : "#fefefe")
      .attr("d", path)
      .on("mousemove", function (event, d) {
        tooltip
          .style("visibility", "visible")
          .html(`Community: ${d.properties.community} <br> Total Severity of Accidents: ${linker[d.properties.community].SEVERITY}`)
          .style("background-color", "white")
          .style("border", "solid")
          .style("border-width", "3px")
          .style("border-radius", "5px")
          .style("padding", "5px")
          .style("top", (event.pageY - 10) + "px")
          .style("left", (event.pageX + 10) + "px");
        d3.select(this).attr("fill", "#fa5cf2");
      })
      .on("mouseout", function () {
        tooltip.style("visibility", "hidden");
        d3.select(this).attr("fill", d => (d.properties.community in linker) ? color(linker[d.properties.community].SEVERITY) : "#fefefe");
      });
    
    svg.append("g")
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("stroke", '#050000')
      .attr("opacity", 0.7)
      .attr("r", .3)
      .attr("cx", d => projection(d.LOCATION)[0])
      .attr("cy", d => projection(d.LOCATION)[1])
      .style('pointer-events', 'none')
});