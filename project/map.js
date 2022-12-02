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

  const communities = topojson.feature(chicagoTopology, chicagoTopology.objects.chicago);
  console.log(communities)
  const mesh = topojson.mesh(chicagoTopology, chicagoTopology.objects.chicago);
  const projection = d3.geoMercator()
    .fitSize([width, height], mesh);
  const path = d3.geoPath().projection(projection);

  const linker = {};
  for (let d of agg) {
    d.SEVERITY = +d.SEVERITY;
    linker[d.community] = d;
  }
  const scheme = ["#ffffcc","#fffecb","#fffec9","#fffdc8","#fffdc6","#fffcc5","#fffcc4","#fffbc2","#fffac1","#fffac0","#fff9be","#fff9bd","#fff8bb","#fff8ba","#fff7b9","#fff6b7","#fff6b6","#fff5b5","#fff5b3","#fff4b2","#fff4b0","#fff3af","#fff2ae","#fff2ac","#fff1ab","#fff1aa","#fff0a8","#fff0a7","#ffefa6","#ffeea4","#ffeea3","#ffeda2","#ffeda0","#ffec9f","#ffeb9d","#ffeb9c","#ffea9b","#ffea99","#ffe998","#ffe897","#ffe895","#ffe794","#ffe693","#ffe691","#ffe590","#ffe48f","#ffe48d","#ffe38c","#fee28b","#fee289","#fee188","#fee087","#fee085","#fedf84","#fede83","#fedd82","#fedc80","#fedc7f","#fedb7e","#feda7c","#fed97b","#fed87a","#fed778","#fed777","#fed676","#fed574","#fed473","#fed372","#fed270","#fed16f","#fed06e","#fecf6c","#fece6b","#fecd6a","#fecb69","#feca67","#fec966","#fec865","#fec764","#fec662","#fec561","#fec460","#fec25f","#fec15e","#fec05c","#febf5b","#febe5a","#febd59","#febb58","#feba57","#feb956","#feb855","#feb754","#feb553","#feb452","#feb351","#feb250","#feb14f","#feb04e","#feae4d","#fead4d","#feac4c","#feab4b","#feaa4a","#fea84a","#fea749","#fea648","#fea547","#fea347","#fea246","#fea145","#fda045","#fd9e44","#fd9d44","#fd9c43","#fd9b42","#fd9942","#fd9841","#fd9741","#fd9540","#fd9440","#fd923f","#fd913f","#fd8f3e","#fd8e3e","#fd8d3d","#fd8b3c","#fd893c","#fd883b","#fd863b","#fd853a","#fd833a","#fd8139","#fd8039","#fd7e38","#fd7c38","#fd7b37","#fd7937","#fd7736","#fc7535","#fc7335","#fc7234","#fc7034","#fc6e33","#fc6c33","#fc6a32","#fc6832","#fb6731","#fb6531","#fb6330","#fb6130","#fb5f2f","#fa5d2e","#fa5c2e","#fa5a2d","#fa582d","#f9562c","#f9542c","#f9522b","#f8512b","#f84f2a","#f74d2a","#f74b29","#f64929","#f64828","#f54628","#f54427","#f44227","#f44127","#f33f26","#f23d26","#f23c25","#f13a25","#f03824","#f03724","#ef3524","#ee3423","#ed3223","#ed3123","#ec2f22","#eb2e22","#ea2c22","#e92b22","#e92921","#e82821","#e72621","#e62521","#e52420","#e42220","#e32120","#e22020","#e11f20","#e01d20","#df1c20","#de1b20","#dd1a20","#dc1920","#db1820","#da1720","#d91620","#d81520","#d71420","#d51320","#d41221","#d31121","#d21021","#d10f21","#cf0e21","#ce0d21","#cd0d22","#cc0c22","#ca0b22","#c90a22","#c80a22","#c60923","#c50823","#c40823","#c20723","#c10723","#bf0624","#be0624","#bc0524","#bb0524","#b90424","#b80424","#b60425","#b50325","#b30325","#b10325","#b00225","#ae0225","#ac0225","#ab0225","#a90125","#a70126","#a50126","#a40126","#a20126","#a00126","#9e0126","#9c0026","#9a0026","#990026","#970026","#950026","#930026","#910026","#8f0026","#8d0026","#8b0026","#8a0026","#880026","#860026","#840026","#820026","#800026"]

  const color = d3.scaleLinear()
    .domain([0, 1, 2, 3, 4, 5, 6, 7]).nice()
    .range(scheme);

  d3.select("#legend")
    .node() 
    .appendChild(
        Legend( 
            d3.scaleLinear(["0", "1", "2", "3", "4", "5", "6", "7"],
            scheme),
        { title: "Severity of Biker injury by Neighborhood" }
        ));
    
    svg.append("g")
    .selectAll("path")
    .data(communities.features)
    .join("path")
    .attr("stroke", "#5e5050")
    .attr("fill", d => (d.properties.community in linker) ? color(linker[d.properties.community].SEVERITY) : "#fefefe")
    .attr("d", path)
    .on("mousemove", function (event, d) {
        // tooltip updated to use new data structure
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
        d3.select(this).attr("fill", "#f005e4");
      })
      .on("mouseout", function () {
        tooltip.style("visibility", "hidden");
        d3.select(this).attr("fill", d => (d.properties.community in linker) ? color(linker[d.properties.community].SEVERITY) : "#fefefe");
      });
    
  svg.append("g")
    .selectAll("circle")
    .data(data)
    .join("circle")
    .attr("stroke", '#080808')
    .attr("fill", "#080808")
    .attr("opacity", 0.7)
    // .attr("r", d => (d.SEVERITY))
    .attr("r", .2)
    .attr("cx", d => projection(d.LOCATION)[0]) // uses projection and returns long
    .attr("cy", d => projection(d.LOCATION)[1]) // uses projection and returns lat
    
});