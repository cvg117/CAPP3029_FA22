d3.json('rings_binned.json').then((data) => {
    for (let d of data) {
      createRing(d);
    }
  });
  
    function createRing({ street, values, amount }) {
      const height = 250,
      width = 300,
      innerRadius = 35,
      outerRadius = 60,
      labelRadius = 100;
  
    const arcs = d3.pie().value(d => d.amount)(values);
  
    const arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);
  
    const arcLabel = d3.arc().innerRadius(labelRadius).outerRadius(labelRadius);

    const svg = d3.select("#chart_ring")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-width / 2, -height / 2, width, height]);
    
    let colors = ["#a6cee3","#1f78b4","#e31a1c"]

    svg.append("g")
      .attr("stroke", "white")
      .attr("stroke-width", 2)
      .attr("stroke-linejoin", "round")
      .selectAll("path")
      .data(arcs)
      .join("path")
      .attr("fill", (d, i) => colors[i])
      .attr("d", arc)
      
  
    svg.append("g")
      .attr("font-size", 12)
      .attr("text-anchor", "middle")
      .selectAll("text")
      .data(arcs)
      .join("text")
      .attr("transform", d => `translate(${arcLabel.centroid(d)})`)
      .attr('dy', '1.4em')
      .selectAll("tspan")
      .data(d => {
         return [d.data.category, d.data.amount];
      })
      .join("tspan")
      .attr("x", 0)
      .attr("y", (d, i) => `${i * 2.5}em`)
      .attr("font-weight", (d, i) => i ? null : "bold")
      .text(d => d);
  
    svg.append("text")
      .attr("font-size", 14)
      .attr("font-weight", "bold")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .text(street)

    svg.append("text")
      .attr("font-size", 12)
      .attr("font-weight", "bold")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr('dy', '1.2em')
      .text(amount)

  }